(() => {
  "use strict";

  document.documentElement.classList.add("js");

  const root = document.querySelector("[data-app]");
  if (!root) return;

  const state = {
    language: "en",
    lens: "workplace",
    thread: "outcome",
    peer: "context",
    pinnedSources: new Set(),
    customerEvidence: new Set(),
    gates: {
      sellable: false,
      deliverable: false,
      operational: false
    },
    gateRecords: {
      sellable: null,
      deliverable: null,
      operational: null
    },
    ucf: {
      stage: -1,
      attempt: 1,
      rejected: false,
      validationApproved: false,
      targetBound: false,
      published: false,
      activated: false,
      log: [
        {
          en: "Run has not started. No artifact is published.",
          nl: "Run is niet gestart. Geen artifact is gepubliceerd."
        }
      ]
    },
    toast: null
  };

  const sourceCopy = {
    product: {
      pinEn: "Pin v4 + v3",
      pinNl: "Pin v4 + v3",
      unpinEn: "Remove product pins",
      unpinNl: "Verwijder productpins"
    },
    pricing: {
      pinEn: "Pin model v2 + book v2",
      pinNl: "Pin model v2 + book v2",
      unpinEn: "Remove pricing pins",
      unpinNl: "Verwijder pricingpins"
    },
    commercial: {
      pinEn: "Pin terms v5 + template v8",
      pinNl: "Pin terms v5 + template v8",
      unpinEn: "Remove commercial pins",
      unpinNl: "Verwijder commerciële pins"
    },
    delivery: {
      pinEn: "Pin blueprint v6 + runbook r12",
      pinNl: "Pin blueprint v6 + runbook r12",
      unpinEn: "Remove delivery pins",
      unpinNl: "Verwijder deliverypins"
    },
    service: {
      pinEn: "Pin support v2 + service v3",
      pinNl: "Pin support v2 + service v3",
      unpinEn: "Remove service pins",
      unpinNl: "Verwijder servicepins"
    }
  };

  const runCopy = [
    {
      kicker: "STAGE 01 · INTAKE",
      titleEn: "Review purpose, owner and data boundary",
      titleNl: "Beoordeel doel, owner en datagrens",
      descriptionEn: "Generation is forbidden until the problem, intended user, classification, quality criteria, reviewer and stop conditions are complete.",
      descriptionNl: "Generatie is verboden tot probleem, beoogde gebruiker, classificatie, kwaliteitscriteria, reviewer en stopcondities compleet zijn.",
      mark: "01"
    },
    {
      kicker: "STAGE 02 · CONTEXT SELECTION",
      titleEn: "Pin only approved, task-relevant context",
      titleNl: "Pin alleen goedgekeurde, taakrelevante context",
      descriptionEn: "Exact source versions and hashes are selected. Excluded, outdated or overly sensitive context remains visible in the evidence.",
      descriptionNl: "Exacte bronversies en hashes worden geselecteerd. Uitgesloten, verouderde of te gevoelige context blijft zichtbaar in het bewijs.",
      mark: "02"
    },
    {
      kicker: "STAGE 03 · GENERATION",
      titleEn: "Create an immutable intermediate",
      titleNl: "Maak een onveranderbare intermediate",
      descriptionEn: "The adapter receives only the selected context and allowed operation. A successful model response remains pending and cannot publish itself.",
      descriptionNl: "De adapter ontvangt alleen de geselecteerde context en toegestane operatie. Een succesvolle modelresponse blijft pending en kan zichzelf niet publiceren.",
      mark: "03"
    },
    {
      kicker: "STAGE 04 · VALIDATION",
      titleEn: "Review one concrete intermediate and its evidence",
      titleNl: "Beoordeel één concrete intermediate en het bewijs",
      descriptionEn: "Checks may combine schema validation, source coverage, fact checking and human review. Rejecting creates a new traceable attempt.",
      descriptionNl: "Checks kunnen schemavalidatie, brondekking, feitencontrole en menselijke review combineren. Afwijzing creëert een nieuwe traceerbare poging.",
      mark: "04"
    },
    {
      kicker: "STAGE 05 · PUBLISH",
      titleEn: "Publish only the validated artifact",
      titleNl: "Publiceer alleen het gevalideerde artifact",
      descriptionEn: "Publication creates an immutable record, audit event and rollback reference. Generated files alone never imply publication.",
      descriptionNl: "Publicatie creëert een onveranderbaar record, audit-event en rollbackreferentie. Alleen gegenereerde bestanden betekenen nooit publicatie.",
      mark: "05"
    }
  ];

  function localizedSpan(language, text) {
    const span = document.createElement("span");
    span.dataset.lang = language;
    span.textContent = text;
    return span;
  }

  function setLocalized(element, english, dutch) {
    if (!element) return;
    element.replaceChildren(localizedSpan("en", english), localizedSpan("nl", dutch));
  }

  function setChip(element, tone, english, dutch) {
    if (!element) return;
    element.className = `state-chip state-chip--${tone}`;
    setLocalized(element, english, dutch);
  }

  function setLanguage(language) {
    if (language !== "en" && language !== "nl") return;
    state.language = language;
    document.documentElement.lang = language;
    document.title = language === "nl"
      ? "Value Delivery Thread · Van bestuurbare context naar menselijke waarde"
      : "Value Delivery Thread · Governed context to human value";

    root.querySelectorAll("[data-language]").forEach((button) => {
      button.setAttribute("aria-pressed", String(button.dataset.language === language));
    });

    root.querySelectorAll("[data-label-en][data-label-nl]").forEach((element) => {
      element.setAttribute("aria-label", language === "nl" ? element.dataset.labelNl : element.dataset.labelEn);
    });

    root.querySelectorAll("[data-paper-link]").forEach((link) => {
      const slug = link.dataset.slug;
      link.href = `https://github.com/denniswesterman/denniswesterman/blob/main/publications/${language}/${slug}.md`;
    });

    renderToast();
  }

  root.querySelectorAll("[data-language]").forEach((button) => {
    button.addEventListener("click", () => setLanguage(button.dataset.language));
  });

  function installTabs({ list, tabs, panels, getKey, activate }) {
    if (!list || !tabs.length || !panels.length) return;
    list.setAttribute("role", "tablist");

    tabs.forEach((tab, index) => {
      const key = getKey(tab);
      const panel = panels.find((candidate) => getKey(candidate) === key);
      const tabId = `${list.dataset.tabNamespace || "tab"}-${key}`;
      const panelId = `${tabId}-panel`;
      tab.id = tabId;
      tab.setAttribute("role", "tab");
      tab.setAttribute("aria-controls", panelId);
      if (panel) {
        panel.id = panelId;
        panel.setAttribute("role", "tabpanel");
        panel.setAttribute("aria-labelledby", tabId);
        panel.tabIndex = 0;
      }

      tab.addEventListener("click", () => activate(key, false));
      tab.addEventListener("keydown", (event) => {
        let targetIndex = index;
        if (event.key === "ArrowRight" || event.key === "ArrowDown") targetIndex = (index + 1) % tabs.length;
        else if (event.key === "ArrowLeft" || event.key === "ArrowUp") targetIndex = (index - 1 + tabs.length) % tabs.length;
        else if (event.key === "Home") targetIndex = 0;
        else if (event.key === "End") targetIndex = tabs.length - 1;
        else return;
        event.preventDefault();
        const target = tabs[targetIndex];
        activate(getKey(target), false);
        target.focus();
      });
    });
  }

  const lensList = root.querySelector("[data-tab-list]");
  const lensTabs = Array.from(root.querySelectorAll("[data-lens-tab]"));
  const lensPanels = Array.from(root.querySelectorAll("[data-lens-panel]"));
  if (lensList) lensList.dataset.tabNamespace = "lens";

  function activateLens(key, focusPanel = false) {
    if (!lensTabs.some((tab) => tab.dataset.lensTab === key)) return;
    state.lens = key;
    lensTabs.forEach((tab) => {
      const active = tab.dataset.lensTab === key;
      tab.classList.toggle("is-active", active);
      tab.setAttribute("aria-selected", String(active));
      tab.tabIndex = active ? 0 : -1;
    });
    lensPanels.forEach((panel) => {
      const active = panel.dataset.lensPanel === key;
      panel.classList.toggle("is-active", active);
      panel.hidden = !active;
      if (active && focusPanel) panel.focus({ preventScroll: true });
    });
  }

  installTabs({
    list: lensList,
    tabs: lensTabs,
    panels: lensPanels,
    getKey: (element) => element.dataset.lensTab || element.dataset.lensPanel,
    activate: activateLens
  });

  const threadList = root.querySelector("[data-thread-track]");
  const threadTabs = Array.from(root.querySelectorAll("[data-thread-step]"));
  const threadPanels = Array.from(root.querySelectorAll("[data-thread-detail]"));
  if (threadList) threadList.dataset.tabNamespace = "thread";

  function activateThread(key, focusPanel = false) {
    if (!threadTabs.some((tab) => tab.dataset.threadStep === key)) return;
    state.thread = key;
    threadTabs.forEach((tab) => {
      const active = tab.dataset.threadStep === key;
      tab.classList.toggle("is-active", active);
      tab.setAttribute("aria-selected", String(active));
      tab.tabIndex = active ? 0 : -1;
    });
    threadPanels.forEach((panel) => {
      const active = panel.dataset.threadDetail === key;
      panel.classList.toggle("is-active", active);
      panel.hidden = !active;
      if (active && focusPanel) panel.focus({ preventScroll: true });
    });
  }

  installTabs({
    list: threadList,
    tabs: threadTabs,
    panels: threadPanels,
    getKey: (element) => element.dataset.threadStep || element.dataset.threadDetail,
    activate: activateThread
  });

  const peerList = root.querySelector("[data-peer-tabs]");
  const peerTabs = Array.from(root.querySelectorAll("[data-peer]"));
  const peerPanels = Array.from(root.querySelectorAll("[data-peer-detail]"));
  if (peerList) peerList.dataset.tabNamespace = "peer";

  function activatePeer(key, focusPanel = false) {
    if (!peerTabs.some((tab) => tab.dataset.peer === key)) return;
    state.peer = key;
    peerTabs.forEach((tab) => {
      const active = tab.dataset.peer === key;
      tab.classList.toggle("is-active", active);
      tab.setAttribute("aria-selected", String(active));
      tab.tabIndex = active ? 0 : -1;
    });
    peerPanels.forEach((panel) => {
      const active = panel.dataset.peerDetail === key;
      panel.classList.toggle("is-active", active);
      panel.hidden = !active;
      if (active && focusPanel) panel.focus({ preventScroll: true });
    });
  }

  installTabs({
    list: peerList,
    tabs: peerTabs,
    panels: peerPanels,
    getKey: (element) => element.dataset.peer || element.dataset.peerDetail,
    activate: activatePeer
  });

  const sourceCards = Array.from(root.querySelectorAll("[data-source-card]"));
  const sourceCount = root.querySelector("[data-source-count]");
  const releaseState = root.querySelector("[data-release-state]");
  const readinessSummary = root.querySelector("[data-readiness-summary]");
  const customerProofButtons = Array.from(root.querySelectorAll("[data-customer-proof]"));
  const customerProofCount = root.querySelector("[data-customer-proof-count]");

  function matrixState(kind, english, dutch) {
    const span = document.createElement("span");
    span.className = `matrix-state matrix-state--${kind}`;
    span.append(localizedSpan("en", english), localizedSpan("nl", dutch));
    return span;
  }

  function setMatrixCell(name, kind, english, dutch) {
    const cell = root.querySelector(`[data-matrix-cell="${name}"]`);
    if (cell) cell.replaceChildren(matrixState(kind, english, dutch));
  }

  function resetGates() {
    state.gates.sellable = false;
    state.gates.deliverable = false;
    state.gates.operational = false;
    state.gateRecords.sellable = null;
    state.gateRecords.deliverable = null;
    state.gateRecords.operational = null;
  }

  function resetCustomerEvidence() {
    state.customerEvidence.clear();
  }

  function renderRelease() {
    const complete = state.pinnedSources.size === sourceCards.length;
    if (sourceCount) sourceCount.textContent = String(state.pinnedSources.size);

    sourceCards.forEach((card) => {
      const key = card.dataset.sourceCard;
      const pinned = state.pinnedSources.has(key);
      const copy = sourceCopy[key];
      const status = card.querySelector("[data-source-state]");
      const button = card.querySelector("[data-pin-source]");
      const manifestItem = root.querySelector(`[data-manifest-item="${key}"]`);

      card.classList.toggle("is-pinned", pinned);
      setChip(status, pinned ? "success" : "neutral", pinned ? "Exact version pinned" : "Not pinned", pinned ? "Exacte versie gepind" : "Niet gepind");
      if (button && copy) {
        button.setAttribute("aria-pressed", String(pinned));
        setLocalized(button, pinned ? copy.unpinEn : copy.pinEn, pinned ? copy.unpinNl : copy.pinNl);
      }
      if (manifestItem) {
        manifestItem.classList.toggle("is-pinned", pinned);
        const code = manifestItem.querySelector("[data-manifest-code]");
        if (code) {
          if (pinned) code.textContent = card.dataset.version;
          else setLocalized(code, "awaiting exact version", "wacht op exacte versie");
        }
      }
    });

    if (complete) {
      setChip(releaseState, "success", "Exact combination assembled", "Exacte combinatie samengesteld");
    } else {
      setChip(releaseState, "warning", "Draft combination", "Conceptcombinatie");
    }

    setMatrixCell("inputs", complete ? "complete" : "pending", complete ? "Complete" : "Pending", complete ? "Compleet" : "Wacht");
    renderGates(complete);
  }

  sourceCards.forEach((card) => {
    const button = card.querySelector("[data-pin-source]");
    button?.addEventListener("click", () => {
      const key = card.dataset.sourceCard;
      hideToast();
      if (state.pinnedSources.has(key)) {
        state.pinnedSources.delete(key);
        resetGates();
        resetCustomerEvidence();
      } else {
        state.pinnedSources.add(key);
      }
      renderRelease();
    });
  });

  const gateOrder = ["sellable", "deliverable", "operational"];

  function renderGateCard(key, enabled, passed, waitingEn, waitingNl) {
    const card = root.querySelector(`[data-gate-card="${key}"]`);
    const button = root.querySelector(`[data-pass-gate="${key}"]`);
    const status = card?.querySelector("[data-gate-status]");
    const record = card?.querySelector("[data-gate-record]");
    const recordedAt = record?.querySelector("[data-gate-recorded]");
    if (!card || !button || !status) return;

    card.classList.toggle("is-ready", enabled && !passed);
    card.classList.toggle("is-passed", passed);
    button.disabled = !enabled || passed;
    if (record) record.hidden = !passed;
    if (recordedAt) recordedAt.textContent = state.gateRecords[key]?.recordedAt || "—";

    if (passed) {
      setLocalized(button, "Decision recorded", "Besluit vastgelegd");
      setLocalized(status, "Recorded · criteria, evidence, decider, time and validity", "Vastgelegd · criteria, bewijs, beslisser, tijd en geldigheid");
    } else {
      const labels = {
        sellable: ["Record sellability decision", "Leg verkoopbaarheidsbesluit vast"],
        deliverable: ["Record deliverability decision", "Leg leverbaarheidsbesluit vast"],
        operational: ["Record operational decision", "Leg operationeel besluit vast"]
      };
      setLocalized(button, labels[key][0], labels[key][1]);
      setLocalized(status, enabled ? "Ready for an authorized, evidenced decision" : waitingEn, enabled ? "Gereed voor een bevoegd besluit met bewijs" : waitingNl);
    }
  }

  function renderCustomerEvidence(inputsComplete) {
    customerProofButtons.forEach((button) => {
      const key = button.dataset.customerProof;
      const recorded = state.customerEvidence.has(key);
      button.disabled = !inputsComplete;
      button.setAttribute("aria-pressed", String(recorded));
      button.classList.toggle("is-recorded", recorded);
    });

    const count = state.customerEvidence.size;
    if (customerProofCount) customerProofCount.textContent = String(count);
    const complete = customerProofButtons.length > 0 && count === customerProofButtons.length;
    setMatrixCell("customer-inputs", complete ? "complete" : "pending", `${count}/4 evidence`, `${count}/4 bewijs`);

    if (!complete && state.gates.operational) {
      state.gates.operational = false;
      state.gateRecords.operational = null;
    }
    return complete;
  }

  function renderGates(inputsComplete = state.pinnedSources.size === sourceCards.length) {
    const customerEvidenceComplete = renderCustomerEvidence(inputsComplete);

    renderGateCard("sellable", inputsComplete, state.gates.sellable, "Blocked by missing release pins", "Geblokkeerd door ontbrekende releasepins");
    renderGateCard("deliverable", inputsComplete, state.gates.deliverable, "Blocked by missing release pins", "Geblokkeerd door ontbrekende releasepins");
    renderGateCard("operational", customerEvidenceComplete, state.gates.operational, "Requires all four customer evidence items", "Vereist alle vier klantspecifieke bewijsitems");

    setMatrixCell("sellable", state.gates.sellable ? "complete" : "pending", state.gates.sellable ? "Passed" : "Pending", state.gates.sellable ? "Geslaagd" : "Wacht");
    setMatrixCell("deliverable", state.gates.deliverable ? "complete" : "pending", state.gates.deliverable ? "Passed" : "Pending", state.gates.deliverable ? "Geslaagd" : "Wacht");
    setMatrixCell("customer-operational", state.gates.operational ? "complete" : "pending", state.gates.operational ? "Passed" : "Pending", state.gates.operational ? "Geslaagd" : "Wacht");

    const decisionCount = gateOrder.filter((key) => state.gates[key]).length;
    if (decisionCount === gateOrder.length) {
      setChip(readinessSummary, "success", "3/3 separate decisions recorded", "3/3 afzonderlijke besluiten vastgelegd");
    } else if (decisionCount > 0) {
      setChip(readinessSummary, "warning", `${decisionCount}/3 separate decisions recorded`, `${decisionCount}/3 afzonderlijke besluiten vastgelegd`);
    } else if (inputsComplete) {
      setChip(readinessSummary, "warning", "Release inputs complete · decisions remain separate", "Release-inputs compleet · besluiten blijven afzonderlijk");
    } else {
      setChip(readinessSummary, "neutral", "Waiting for release inputs", "Wacht op release-inputs");
    }
  }

  gateOrder.forEach((key) => {
    root.querySelector(`[data-pass-gate="${key}"]`)?.addEventListener("click", () => {
      const inputsComplete = state.pinnedSources.size === sourceCards.length;
      const customerEvidenceComplete = customerProofButtons.length > 0 && state.customerEvidence.size === customerProofButtons.length;
      const enabled = key === "operational" ? customerEvidenceComplete : inputsComplete;
      if (!enabled) return;
      state.gates[key] = true;
      state.gateRecords[key] = { recordedAt: new Date().toISOString().replace(/\.\d{3}Z$/, "Z") };
      renderGates(inputsComplete);

      if (gateOrder.every((gate) => state.gates[gate])) {
        showToast(
          "Three separate decisions recorded",
          "Drie afzonderlijke besluiten vastgelegd",
          "Each illustrative record now shows criteria, evidence, decider, time and validity.",
          "Ieder illustratief record toont nu criteria, bewijs, beslisser, tijd en geldigheid.",
          false
        );
      }
    });
  });

  customerProofButtons.forEach((button) => {
    button.addEventListener("click", () => {
      if (button.disabled) return;
      const key = button.dataset.customerProof;
      hideToast();
      if (state.customerEvidence.has(key)) state.customerEvidence.delete(key);
      else state.customerEvidence.add(key);
      renderGates();
    });
  });

  const ucfStages = Array.from(root.querySelectorAll("[data-stage]"));
  const ucfRunner = root.querySelector("[data-ucf-runner]");
  const ucfAttempt = root.querySelector("[data-ucf-attempt]");
  const runKicker = root.querySelector("[data-run-kicker]");
  const runTitle = root.querySelector("[data-run-title]");
  const runDescription = root.querySelector("[data-run-description]");
  const runMark = root.querySelector("[data-run-mark]");
  const evidenceLog = root.querySelector("[data-evidence-log]");
  const trustSteps = Array.from(root.querySelectorAll("[data-trust-step]"));
  const trustLkg = root.querySelector("[data-trust-lkg]");
  const trustSummary = root.querySelector("[data-trust-summary]");
  const trustDisclosure = root.querySelector("[data-trust-disclosure]");
  const consumerActivate = root.querySelector("[data-consumer-activate]");
  const ucfActions = {
    start: root.querySelector('[data-ucf-action="start"]'),
    next: root.querySelector('[data-ucf-action="next"]'),
    reject: root.querySelector('[data-ucf-action="reject"]'),
    approve: root.querySelector('[data-ucf-action="approve"]'),
    bind: root.querySelector('[data-ucf-action="bind"]'),
    publish: root.querySelector('[data-ucf-action="publish"]'),
    reset: root.querySelector('[data-ucf-action="reset"]')
  };

  function stageStatus(stageElement, tone, english, dutch) {
    stageElement.classList.toggle("is-current", tone === "current");
    stageElement.classList.toggle("is-complete", tone === "complete");
    stageElement.classList.toggle("is-rejected", tone === "rejected");
    setLocalized(stageElement.querySelector("[data-stage-state]"), english, dutch);
  }

  function renderEvidenceLog() {
    if (!evidenceLog) return;
    const fragment = document.createDocumentFragment();
    state.ucf.log.forEach((entry, index) => {
      const item = document.createElement("li");
      const time = document.createElement("time");
      time.textContent = String(index).padStart(2, "0");
      item.append(time, localizedSpan("en", entry.en), localizedSpan("nl", entry.nl));
      fragment.append(item);
    });
    evidenceLog.replaceChildren(fragment);
    evidenceLog.scrollTop = evidenceLog.scrollHeight;
  }

  function addEvidence(english, dutch) {
    state.ucf.log.push({ en: english, nl: dutch });
  }

  function renderTrust() {
    const trusted = state.ucf.activated;
    trustSteps.forEach((step) => step.classList.toggle("is-trusted", trusted));
    trustLkg?.classList.toggle("is-trusted", trusted);
    if (trusted) {
      setChip(trustSummary, "success", "Active last-known-good", "Active last-known-good");
      if (consumerActivate) {
        consumerActivate.disabled = true;
        setLocalized(consumerActivate, "Consumer composite active", "Consumercomposite actief");
      }
    } else if (state.ucf.published) {
      setChip(trustSummary, "warning", "Published · consumer preflight required", "Gepubliceerd · consumerpreflight vereist");
      if (consumerActivate) {
        consumerActivate.disabled = false;
        setLocalized(consumerActivate, "Run consumer preflight + activate", "Voer consumerpreflight + activatie uit");
      }
    } else {
      setChip(trustSummary, "neutral", "Awaiting publication", "Wacht op publicatie");
      if (consumerActivate) {
        consumerActivate.disabled = true;
        setLocalized(consumerActivate, "Publish before consumer activation", "Publiceer vóór consumeractivatie");
      }
    }
  }

  function showOnlyUcfActions(keys) {
    Object.entries(ucfActions).forEach(([key, button]) => {
      if (!button) return;
      button.hidden = key !== "reset" && !keys.includes(key);
    });
  }

  function renderUcf() {
    if (ucfAttempt) ucfAttempt.textContent = String(state.ucf.attempt);
    ucfRunner?.classList.toggle("has-started", state.ucf.stage >= 0);

    ucfStages.forEach((stageElement, index) => {
      if (state.ucf.published || index < state.ucf.stage) {
        stageStatus(stageElement, "complete", "Passed", "Geslaagd");
      } else if (index === state.ucf.stage) {
        stageStatus(stageElement, "current", index === 3 ? "Review required" : "In progress", index === 3 ? "Review vereist" : "In uitvoering");
      } else if (state.ucf.rejected && index === 3) {
        stageStatus(stageElement, "rejected", "Rejected · new attempt", "Afgewezen · nieuwe poging");
      } else {
        stageStatus(stageElement, "waiting", index === 0 && state.ucf.stage < 0 ? "Ready" : "Waiting", index === 0 && state.ucf.stage < 0 ? "Gereed" : "Wacht");
      }
    });

    if (state.ucf.stage < 0) {
      if (runKicker) runKicker.textContent = "CONTROLLED WORKFLOW";
      setLocalized(runTitle, "Ready to start a governed run", "Gereed om een beheerste run te starten");
      setLocalized(runDescription, "Start with a reviewed problem statement. Publication remains impossible until every gate has concrete evidence.", "Begin met een beoordeelde probleemstelling. Publicatie blijft onmogelijk tot iedere gate concreet bewijs heeft.");
      if (runMark) runMark.textContent = "◇";
      showOnlyUcfActions(["start"]);
    } else {
      const copy = runCopy[state.ucf.stage];
      if (runKicker) runKicker.textContent = copy.kicker;
      setLocalized(runTitle, copy.titleEn, copy.titleNl);
      setLocalized(runDescription, copy.descriptionEn, copy.descriptionNl);
      if (runMark) runMark.textContent = state.ucf.published ? "✓" : copy.mark;

      if (state.ucf.published) {
        if (state.ucf.activated) {
          if (runKicker) runKicker.textContent = "PUBLISHED · CONSUMER ACTIVATED SEPARATELY";
          setLocalized(runTitle, "Published artifact active at the consumer", "Gepubliceerd artifact actief bij de consumer");
          setLocalized(runDescription, "Publication completed first. The consumer then passed its own preflight, staging, transaction and health chain before the atomic last-known-good switch.", "Publicatie werd eerst voltooid. Daarna doorliep de consumer zijn eigen preflight-, staging-, transactie- en healthketen vóór de atomische last-known-good-wissel.");
        } else {
          if (runKicker) runKicker.textContent = "PUBLICATION COMPLETE · ACTIVATION SEPARATE";
          setLocalized(runTitle, "Validated artifact published", "Gevalideerd artifact gepubliceerd");
          setLocalized(runDescription, "An immutable publication record, audit event and rollback reference exist for the explicitly bound publication target. A consumer has not activated this release; its current last-known-good remains unchanged.", "Voor het expliciet gebonden publicatiedoel bestaan een onveranderbaar publicatierecord, audit-event en rollbackreferentie. Een consumer heeft deze release nog niet geactiveerd; zijn huidige last-known-good blijft ongewijzigd.");
        }
        showOnlyUcfActions([]);
      } else if (state.ucf.stage === 3) {
        showOnlyUcfActions(["reject", "approve"]);
      } else if (state.ucf.stage === 4) {
        showOnlyUcfActions(["bind", "publish"]);
        if (ucfActions.bind) {
          ucfActions.bind.disabled = state.ucf.targetBound;
          setLocalized(ucfActions.bind, state.ucf.targetBound ? "Publication target bound" : "Bind publication target", state.ucf.targetBound ? "Publicatiedoel gebonden" : "Bind publicatiedoel");
        }
        if (ucfActions.publish) ucfActions.publish.disabled = !state.ucf.validationApproved || !state.ucf.targetBound;
      } else {
        showOnlyUcfActions(["next"]);
      }
    }

    renderEvidenceLog();
    renderTrust();
  }

  function resetUcf() {
    hideToast();
    state.ucf.stage = -1;
    state.ucf.attempt = 1;
    state.ucf.rejected = false;
    state.ucf.validationApproved = false;
    state.ucf.targetBound = false;
    state.ucf.published = false;
    state.ucf.activated = false;
    if (trustDisclosure) trustDisclosure.open = false;
    state.ucf.log = [{
      en: "Run has not started. No artifact is published.",
      nl: "Run is niet gestart. Geen artifact is gepubliceerd."
    }];
    renderUcf();
  }

  ucfActions.start?.addEventListener("click", () => {
    state.ucf.stage = 0;
    addEvidence("Intake opened with owner, reviewer, classification and stop conditions.", "Intake geopend met owner, reviewer, classificatie en stopcondities.");
    renderUcf();
  });

  ucfActions.next?.addEventListener("click", () => {
    const stage = state.ucf.stage;
    if (stage < 0 || stage >= 3) return;
    const entries = [
      ["Intake gate passed. Purpose and data boundary accepted.", "Intake-gate geslaagd. Doel en datagrens geaccepteerd."],
      ["Context gate passed. Three exact sources pinned; two candidates excluded with reason.", "Contextgate geslaagd. Drie exacte bronnen gepind; twee kandidaten met reden uitgesloten."],
      ["Immutable intermediate created with provenance. Status remains pending.", "Onveranderbare intermediate met provenance gemaakt. Status blijft pending."]
    ];
    addEvidence(entries[stage][0], entries[stage][1]);
    state.ucf.stage += 1;
    if (state.ucf.stage === 3) state.ucf.rejected = false;
    renderUcf();
  });

  ucfActions.reject?.addEventListener("click", () => {
    if (state.ucf.stage !== 3) return;
    addEvidence("Validation rejected the concrete intermediate. Publication blocked; previous artifact unchanged.", "Validatie wees de concrete intermediate af. Publicatie geblokkeerd; vorig artifact ongewijzigd.");
    state.ucf.attempt += 1;
    state.ucf.stage = 2;
    state.ucf.rejected = true;
    state.ucf.validationApproved = false;
    state.ucf.targetBound = false;
    renderUcf();
  });

  ucfActions.approve?.addEventListener("click", () => {
    if (state.ucf.stage !== 3) return;
    addEvidence("Validation passed: schema, source coverage, fact check and human reviewer recorded.", "Validatie geslaagd: schema, brondekking, feitencontrole en menselijke reviewer vastgelegd.");
    state.ucf.validationApproved = true;
    state.ucf.targetBound = false;
    state.ucf.stage = 4;
    renderUcf();
  });

  ucfActions.bind?.addEventListener("click", () => {
    if (state.ucf.stage !== 4 || !state.ucf.validationApproved || state.ucf.targetBound) return;
    state.ucf.targetBound = true;
    addEvidence("Publication target explicitly bound: channel://architecture-library/ucf.", "Publicatiedoel expliciet gebonden: channel://architecture-library/ucf.");
    renderUcf();
  });

  ucfActions.publish?.addEventListener("click", () => {
    if (state.ucf.stage !== 4 || !state.ucf.validationApproved || !state.ucf.targetBound) return;
    addEvidence("Immutable publication record, audit event and rollback reference created for the bound target.", "Onveranderbaar publicatierecord, audit-event en rollbackreferentie gemaakt voor het gebonden doel.");
    state.ucf.published = true;
    renderUcf();
    if (trustDisclosure) trustDisclosure.open = true;
    showToast(
      "Validated artifact published",
      "Gevalideerd artifact gepubliceerd",
      "Publication is complete. Consumer-side preflight, staging, health and activation remain a separate step.",
      "Publicatie is compleet. Consumerpreflight, staging, health en activatie blijven een afzonderlijke stap.",
      false
    );
  });

  consumerActivate?.addEventListener("click", () => {
    if (!state.ucf.published || state.ucf.activated) return;
    addEvidence("Consumer preflight passed: exact manifests, signatures, digests, file ledgers, capabilities and target neutrality verified.", "Consumerpreflight geslaagd: exacte manifests, signatures, digests, fileledgers, capabilities en targetneutraliteit geverifieerd.");
    addEvidence("Consumer staged dependencies, completed the local transaction and health checks, then switched atomically to the new last-known-good.", "Consumer plaatste dependencies in staging, voltooide de lokale transactie en healthchecks en schakelde daarna atomisch naar de nieuwe last-known-good.");
    state.ucf.activated = true;
    renderUcf();
    showToast(
      "Consumer last-known-good activated",
      "Consumer last-known-good geactiveerd",
      "Activation followed a separate local preflight, staging, transaction and health chain.",
      "Activatie volgde op een afzonderlijke lokale keten van preflight, staging, transactie en health.",
      false
    );
  });

  ucfActions.reset?.addEventListener("click", resetUcf);

  const toast = root.querySelector("[data-toast]");
  const toastTitle = root.querySelector("[data-toast-title]");
  const toastMessage = root.querySelector("[data-toast-message]");
  const toastLink = root.querySelector("[data-toast-link]");

  function renderToast() {
    if (!toast) return;
    if (!state.toast) {
      toast.hidden = true;
      return;
    }
    setLocalized(toastTitle, state.toast.titleEn, state.toast.titleNl);
    setLocalized(toastMessage, state.toast.messageEn, state.toast.messageNl);
    if (toastLink) toastLink.hidden = !state.toast.link;
    toast.hidden = false;
  }

  function showToast(titleEn, titleNl, messageEn, messageNl, link) {
    state.toast = { titleEn, titleNl, messageEn, messageNl, link };
    renderToast();
  }

  function hideToast() {
    state.toast = null;
    renderToast();
  }

  root.querySelector("[data-toast-close]")?.addEventListener("click", hideToast);
  toastLink?.addEventListener("click", hideToast);

  const domainDialog = root.querySelector("[data-domain-dialog]");
  let dialogReturnFocus = null;

  function openDomainDialog(trigger) {
    if (!domainDialog) return;
    dialogReturnFocus = trigger instanceof HTMLElement ? trigger : document.activeElement;
    if (typeof domainDialog.showModal === "function") domainDialog.showModal();
    else domainDialog.setAttribute("open", "");
  }

  function closeDomainDialog() {
    if (!domainDialog?.open) return;
    if (typeof domainDialog.close === "function") domainDialog.close();
    else domainDialog.removeAttribute("open");
  }

  root.querySelectorAll("[data-open-domain-dialog]").forEach((button) => {
    button.addEventListener("click", () => openDomainDialog(button));
  });
  root.querySelectorAll("[data-close-domain-dialog]").forEach((button) => {
    button.addEventListener("click", closeDomainDialog);
  });
  domainDialog?.addEventListener("click", (event) => {
    if (event.target === domainDialog) closeDomainDialog();
  });
  domainDialog?.addEventListener("close", () => {
    const target = dialogReturnFocus?.isConnected ? dialogReturnFocus : root.querySelector("[data-open-domain-dialog]");
    dialogReturnFocus = null;
    target?.focus({ preventScroll: true });
  });

  const layout = root.querySelector("[data-layout]");
  const sidebar = root.querySelector("[data-sidebar]");
  const main = root.querySelector("[data-main]");
  const backdrop = root.querySelector("[data-sidebar-backdrop]");
  const openButton = root.querySelector("[data-sidebar-open]");
  const closeButton = root.querySelector("[data-sidebar-close]");
  const mobileQuery = window.matchMedia("(max-width: 64rem)");
  let sidebarReturnFocus = null;

  function visibleFocusable(container) {
    if (!container) return [];
    return Array.from(container.querySelectorAll("a[href], button:not([disabled]), [tabindex]:not([tabindex='-1'])"))
      .filter((element) => element instanceof HTMLElement && element.offsetParent !== null);
  }

  function sidebarOpen() {
    return Boolean(layout?.classList.contains("is-sidebar-open"));
  }

  function syncSidebar({ focus = false, restore = false } = {}) {
    if (!layout || !sidebar) return;
    const mobile = mobileQuery.matches;
    const open = mobile && sidebarOpen();
    sidebar.toggleAttribute("inert", mobile && !open);
    sidebar.setAttribute("aria-hidden", String(mobile && !open));
    main?.toggleAttribute("inert", open);
    if (backdrop) backdrop.hidden = !open;
    openButton?.setAttribute("aria-expanded", String(open));

    if (open && focus) {
      sidebarReturnFocus = document.activeElement instanceof HTMLElement ? document.activeElement : openButton;
      window.requestAnimationFrame(() => (closeButton || visibleFocusable(sidebar)[0] || sidebar).focus());
    } else if (!open && restore) {
      const target = sidebarReturnFocus?.isConnected ? sidebarReturnFocus : openButton;
      sidebarReturnFocus = null;
      window.requestAnimationFrame(() => target?.focus());
    }
  }

  function setSidebar(open, options = {}) {
    if (!layout) return;
    layout.classList.toggle("is-sidebar-open", mobileQuery.matches && open);
    syncSidebar(options);
  }

  openButton?.addEventListener("click", () => setSidebar(true, { focus: true }));
  closeButton?.addEventListener("click", () => setSidebar(false, { restore: true }));
  backdrop?.addEventListener("click", () => setSidebar(false, { restore: true }));

  root.querySelectorAll("[data-nav-link]").forEach((link) => {
    link.addEventListener("click", () => {
      if (mobileQuery.matches) setSidebar(false);
    });
  });

  root.addEventListener("keydown", (event) => {
    if (event.key === "Tab" && mobileQuery.matches && sidebarOpen()) {
      const focusable = visibleFocusable(sidebar);
      const first = focusable[0];
      const last = focusable[focusable.length - 1];
      if (!focusable.length) {
        event.preventDefault();
        sidebar?.focus();
      } else if (event.shiftKey && document.activeElement === first) {
        event.preventDefault();
        last.focus();
      } else if (!event.shiftKey && document.activeElement === last) {
        event.preventDefault();
        first.focus();
      }
    }

    if (event.key === "Escape" && mobileQuery.matches && sidebarOpen()) {
      event.preventDefault();
      setSidebar(false, { restore: true });
    }
  });

  mobileQuery.addEventListener("change", () => {
    layout?.classList.remove("is-sidebar-open");
    syncSidebar();
  });

  const navLinks = Array.from(root.querySelectorAll("[data-nav-link]"));
  const observedSections = navLinks
    .map((link) => document.querySelector(link.getAttribute("href")))
    .filter(Boolean);
  const contentScroll = root.querySelector("[data-content-scroll]");

  if ("IntersectionObserver" in window && observedSections.length) {
    const observer = new IntersectionObserver((entries) => {
      const visible = entries
        .filter((entry) => entry.isIntersecting)
        .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];
      if (!visible) return;
      navLinks.forEach((link) => {
        const active = link.getAttribute("href") === `#${visible.target.id}`;
        link.classList.toggle("is-active", active);
        if (active) link.setAttribute("aria-current", "location");
        else link.removeAttribute("aria-current");
      });
    }, { root: contentScroll, rootMargin: "-18% 0px -64% 0px", threshold: [0, 0.1, 0.4] });
    observedSections.forEach((section) => observer.observe(section));
  }

  function resetAll() {
    const currentLanguage = state.language;
    state.pinnedSources.clear();
    resetGates();
    resetCustomerEvidence();
    activateLens("workplace");
    activateThread("outcome");
    activatePeer("context");
    renderRelease();
    resetUcf();
    closeDomainDialog();
    setLanguage(currentLanguage);
    showToast(
      "Demo reset",
      "Demo gereset",
      "All illustrative choices were cleared. Nothing was stored.",
      "Alle illustratieve keuzes zijn gewist. Er was niets opgeslagen.",
      false
    );
  }

  root.querySelector("[data-reset-all]")?.addEventListener("click", resetAll);

  activateLens(state.lens);
  activateThread(state.thread);
  activatePeer(state.peer);
  renderRelease();
  renderUcf();
  setLanguage(state.language);
  syncSidebar();
})();
