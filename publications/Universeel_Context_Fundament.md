<div align="center">

# Universeel Context Fundament

## Een bestuurbare, herhaalbare en vendor-onafhankelijke basis voor AI-workflows

**CONTEXT · WORKFLOW · GOVERNANCE · PORTABILITY**

**GitHub-editie · gebaseerd op publicatieversie 1.2 · 11 augustus 2026**

</div>

---

## Over deze publicatie

Veel AI-initiatieven beginnen met een model, een prompt en een koppeling naar bedrijfsdata. Daarmee kan snel een demonstratie worden gemaakt, maar nog geen duurzaam bestuurbaar systeem. Zodra meerdere teams, bronnen, modellen en publicatiekanalen betrokken raken, ontstaan vragen die niet door het model zelf kunnen worden opgelost:

- Welke context en policy golden voor deze uitvoering?
- Wie bepaalde welke bronnen wel en niet mochten worden gebruikt?
- Welk tussenresultaat is gevalideerd?
- Wie heeft de concrete output goedgekeurd?
- Kan dezelfde werkwijze met een ander model, andere cloud of lokale runtime worden herhaald?
- Welk bewijs bestaat wanneer een publicatie moet worden verklaard, hersteld of teruggedraaid?

Het **Universeel Context Fundament (UCF)** maakt deze vragen onderdeel van de architectuur. Het organiseert context, beleid, workflow, uitvoering en bewijs rond AI. Het model is daarin geen eigenaar van betekenis, maar een vervangbare uitvoerder achter een gecontroleerde adapter.

> **Kernboodschap:** UCF maakt niet het model, maar de gecontroleerde context en workflow tot het duurzame fundament van AI-toepassingen.

De betekenis van het werk, de selectie van bronnen, de kwaliteitscriteria, de menselijke verantwoordelijkheid en het publicatiebesluit blijven eigendom van de organisatie.

## Waarom een contextfundament nodig is

### Applicatiegebonden context is moeilijk bestuurbaar

Context ontstaat vaak verspreid over documenten, prompts, configuraties, tickets, gesprekken, kennisbanken en persoonlijke werkwijzen. Een toepassing kan deze bronnen technisch bereiken, maar bereikbaarheid bewijst niet dat de juiste bron, versie of selectie voor een specifieke taak is gebruikt.

Zonder expliciete selectie en versionering is achteraf moeilijk vast te stellen waarom een resultaat tot stand kwam. Wanneer context en workflow bovendien in één providerstudio, connector of automationflow worden verborgen, verandert een providerwissel in een reconstructieproject.

### Mechanische uitvoering en inhoudelijke beoordeling zijn verschillend

Software kan bestanden verplaatsen, schema’s controleren, hashes berekenen en een vaste overgang uitvoeren. Software kan niet zelfstandig bepalen of een beleidsinterpretatie bestuurlijk acceptabel is of dat een risico door een bevoegde eigenaar mag worden aanvaard.

UCF maakt daarom onderscheid tussen:

- deterministische techniek die herhaalbaar kan worden uitgevoerd;
- expliciete gates waarvoor eigenaarschap, bewijs of menselijke review nodig is.

### Context wordt een beheerd product

Binnen UCF wordt context behandeld als een beheerd product met minimaal:

- een eigenaar;
- een versie of momentopname;
- herkomst en provenance;
- classificatie en retentie;
- een goedgekeurd gebruiksdoel;
- een minimale, taakgerichte selectie;
- een manier om de bron in output herkenbaar of citeerbaar te houden.

De centrale vraag verschuift daarmee van **“welke data kan het model technisch zien?”** naar **“welke context is voor deze taak expliciet goedgekeurd?”**

## Zes ontwerpdoelen

UCF is gebouwd rond zes samenhangende doelen.

### 1. Context-first

Doel, data boundary, policies en bronnen worden vastgesteld vóór generatie. Het model voert een goedgekeurde stap uit; het bepaalt niet zelfstandig welke organisatiecontext geldig is.

### 2. Expliciete contracten

Iedere workflowstage benoemt vereiste input, toegestane context, verwachte output en een gate. Interfaces tussen context, features, UI, database en providers zijn versiegebonden. Ontbrekende input of capabilities leiden tot een zichtbare stopconditie.

### 3. Zichtbare tussenresultaten

Generation-output blijft een **intermediate** totdat validation is geslaagd. Een technisch succesvol modelantwoord is niet automatisch een publicatie. Een concept kan worden geïnspecteerd, afgewezen, vergeleken of opnieuw uitgevoerd zonder het eerdere bewijs te overschrijven.

### 4. Vendor-onafhankelijkheid

Model- en systeemproviders worden via adapters verbonden. De workspace bevat geen verplichte provider, klantendpoint of credential. Dezelfde context- en governanceketen kan daardoor met verschillende uitvoerders worden gebruikt.

### 5. Audit en rollback

Selecties, versies, hashes, reviews, uitvoeringsmetadata en publicatiebesluiten blijven traceerbaar. Iedere publicatie verwijst naar de gevalideerde run en naar een herstel- of rollbackmogelijkheid.

### 6. Portable continuïteit

Artifacts worden immutable gepubliceerd en exact gepind. Een consumer kan na installatie vanaf geverifieerde lokale **last-known-good** bytes werken. Uitval van een centrale store hoeft een bestaande toepassing niet stil te leggen.

## De UCF-workspace als basiseenheid

Een workspace vertegenwoordigt één onderwerp, product, proces of besluitvormingsstroom. De generieke startstructuur bevat nog geen klant, vendor, model of deploymenttarget. Bindingen worden pas toegevoegd nadat doel, eigenaarschap en grenzen zijn beoordeeld.

Een logische workspace bestaat uit:

```text
workspace/
  WORKSPACE_MANIFEST.md
  WORKFLOW_CONTEXT.md
  references/
  policies/
  stages/
    01_intake/STAGE_CONTRACT.md
    02_context_selection/STAGE_CONTRACT.md
    03_generation/STAGE_CONTRACT.md
    04_validation/STAGE_CONTRACT.md
    05_publish/STAGE_CONTRACT.md
  adapters/
  runs/
  features/
  ui/
```

### Workspace manifest

Het manifest legt identiteit en governance vast: doel, owner, reviewstatus, bindings en de artifacts die bij de workspace horen. Nieuwe workspaces beginnen bewust zonder impliciete provider- of databinding.

### Workflow context

Workflowcontext beschrijft routing, data boundary en model boundary. Daarmee blijft de betekenis van de workflow onafhankelijk van operationele providerconfiguratie.

### References

References zijn goedgekeurde bronnen waarop een run mag steunen. Zij worden met versie-identiteit en hash gepind. Context selection registreert zowel geselecteerde als afgewezen kandidaatbronnen, inclusief reden.

### Policies

Policies zijn afzonderlijk reviewbare regels voor onder andere dataminimalisatie, bronvereisten, verboden gegevens, onzekerheidsmarkering, tone of voice, juridische review en publicatieclassificatie. Een policy is geen verborgen promptregel.

### Stagecontracten

Stagecontracten bepalen wanneer een stap mag beginnen, welke input is toegestaan, welke output wordt verwacht en welk bewijs nodig is om door te gaan. Een stage kan door software, een mens of een combinatie worden uitgevoerd zolang het contract wordt gerespecteerd.

### Adapters

Adapters verbinden de neutrale workflow met modellen, identityproviders, databases, documentplatformen en andere systemen. Credentials, endpoints en omgevingsidentiteiten blijven consumerconfiguratie en worden niet in portable packages opgenomen.

### Runs

Een run is één concrete uitvoering. De run bewaart intake, contextpins, parameters, intermediates, validatiebewijs, reviewbesluit en publicatierecord. Secrets en volledige processomgeving horen niet in de runledger.

## De workspace als leesbare uitvoeringsstructuur

Een UCF-workspace is meer dan een verzameling bestanden. De ordening zelf draagt betekenis. Een mens of agent moet zonder verborgen sessiekennis kunnen afleiden:

1. Waar ben ik, wat is het doel en wie is eigenaar?
2. Welk werkcontract geldt en welke input mag worden gelezen?
3. Welke output en welke gate of menselijke beoordeling worden verwacht?
4. Welke artifacts en registraties bewijzen de actuele status?

Deze **cold-startproef** voorkomt dat overdraagbaarheid afhankelijk blijft van mondelinge toelichting, een verborgen prompt of een volledige scan van alle beschikbare context.

Vier regels ondersteunen de leesbaarheid:

- volgorde maakt sequencing zichtbaar;
- hiërarchie begrenst context;
- een kleine ingang routeert zonder inhoudelijke payload te dupliceren;
- artifacts maken voortgang en bewijs zichtbaar.

Stabiele context — zoals policies, definities, schema’s en templates — blijft gescheiden van runartefacten zoals intake, intermediates, reviewbewijs en publicaties.

## Zeven architectuurlagen

UCF bestaat logisch uit zeven lagen:

| Laag | Verantwoordelijkheid | Duurzaam object |
|---|---|---|
| **Identiteit en doel** | Workspace-identiteit, purpose, owner en reviewstatus | Workspace-manifest |
| **Context** | References, selectie, versies en provenance | Contextbundle en contextpins |
| **Beleid** | Data-, kwaliteits- en publicatieregels | Policysets |
| **Workflow** | Stages, inputs, outputs, gates en transitions | Stagecontracten |
| **Uitvoering** | Provider- en systeemadapters achter capabilities | Adapterbindingen |
| **Bewijs** | Runs, hashes, reviews, audit en rollback | Run- en publicatieledger |
| **Distributie** | Ondertekende, immutable releases en exacte pins | Release-manifest |

Deze lagen maken zichtbaar wat de organisatie zelf bezit en welke technische bindings pas in een consumeromgeving worden ingevuld.

## End-to-end door vijf stages

### Stage 1 — Intake

Intake begint met een gereviewde probleemstelling, een benoemde owner en reviewer, dataclassificatie, kwaliteitscriteria, grenzen en stopcondities. Generation is verboden zolang de vereiste intake-informatie niet compleet en beoordeeld is.

Minimale intake bevat:

- gewenst besluit of resultaat;
- beoogde gebruiker en doelgroep;
- grenzen en uitsluitingen;
- classificatie en verboden gegevens;
- owner en onafhankelijke reviewer;
- kwaliteitscriteria en publicatieklasse;
- voorwaarden waaronder de workflow moet stoppen.

### Stage 2 — Context selection

Context selection ontvangt de goedgekeurde intake en kandidaat-references en policies. Exacte versies worden geselecteerd en gepind; afgewezen context wordt met reden geregistreerd.

Dit is de belangrijkste dataminimalisatiestap. Niet alle technisch bereikbare informatie wordt naar een model gestuurd. Alleen de taakgerichte, goedgekeurde en lokaal beschikbare contextset mag verder.

### Stage 3 — Generation

Generation ontvangt de gepinde workflowcontext en goedgekeurde parameters. De provideradapter krijgt uitsluitend de geselecteerde context en de operatie die het contract toestaat.

De output is een immutable intermediate met provenance en beperkte, niet-geheime uitvoeringsmetadata. Iedere retry of alternatieve modelrun krijgt een eigen identiteit en overschrijft een eerdere output niet.

### Stage 4 — Validation

Validation ontvangt de concrete generation-output, toepasselijke policies en kwaliteitschecks. De stage kan combineren:

- schema-validatie;
- bron- en citation checks;
- controles op verboden data;
- feitencontrole;
- onzekerheidsmarkering;
- menselijke review.

Een incomplete of mislukte check blokkeert publication. De reviewer keurt niet een abstracte workflow goed, maar een exacte outputdigest gekoppeld aan concrete contextpins en policyversies.

### Stage 5 — Publish

Publish ontvangt alleen een goedgekeurd validation-resultaat en een expliciete targetbinding. De output bestaat uit een immutable publicatierecord, audit event en rollbackreferentie.

Aanwezigheid van een bestand of de status `generated` is nooit voldoende om publicatie af te leiden.

## De control loop

De workflow is sequentieel, maar niet uitsluitend lineair. Validation kan leiden tot een nieuwe contextselectie of generation-run. Een gewijzigde bron creëert een nieuwe versie. Een publicatiefout kan tot rollback leiden zonder het bewijs van eerdere runs te verwijderen.

Iedere iteratie wordt een nieuwe traceerbare run. Intermediates worden niet stilzwijgend overschreven.

## Vier zelfstandig publicerende peers

Een complete AI-toepassing bestaat uit meer dan context. Zij heeft uitvoerbare logica, een gebruikersinterface en vaak een databaseschema nodig. UCF werkt daarom samen met drie andere zelfstandig publicerende peers.

| Peer | Bezit | Publiceert |
|---|---|---|
| **Feature** | Uitvoerbare logica, routes, services en capability-eisen | Feature-release |
| **UI** | Design tokens, componenten, views, states en assets | Design-release |
| **UCF** | Context, policies, references en stages | Context-release |
| **DB** | Migraties, grants, schemabeschrijving en isolatietests | Database-release |

De vier releases worden onafhankelijk gereviewd, ondertekend en gepind. Een consumer combineert alleen exacte versies die samen zijn gevalideerd.

### Feature-peer

Een feature is een zelfstandig releaseproduct met manifest, entrypoints, routes, views, assets, contracten, services, health en gedeclareerde capabilities. De feature importeert geen concrete consumerclasses en krijgt geen algemene service locator, raw filesystem, willekeurig netwerk of raw databasehandle.

Na installatie vormt de consumer een lokale feature-capsule met:

- de geverifieerde featurecode;
- exact gepinde UI-release;
- exact gepinde context-release;
- exact gepinde database-release;
- lokale locks en receipts die de composite bewijzen.

### UI-peer

UI wordt behandeld als een zelfstandig immutable releaseproduct. Design tokens, componenten, views, states, accessibility-eisen, CSS en JavaScript worden samen gereviewd en lokaal in de feature gematerialiseerd.

Een designupdate verandert een actieve feature niet automatisch. Een nieuwe exacte UI-pin wordt eerst met dezelfde featurecode, context en database getest.

### DB-peer

Database-evolutie blijft niet verborgen in featurecode. Een databasepackage bevat uitsluitend schema, append-only migraties, grants, tests en documentatie. Live data, klantdumps, secrets, backups en vaste productiebindings zijn uitgesloten.

De consumer vertaalt de neutrale schema-identiteit naar een lokaal featureschema met minimale read/write- en eventueel read-onlyrollen. Migraties, grants, isolatietests en feature-health worden transactioneel uitgevoerd. Alleen bij volledig succes volgt commit.

## Publicatie, installatie en activatie

### Immutable publicatie

Publishers controleren onder andere:

- veilige relatieve paden;
- toegestane bestandstypen;
- manifest- en contractstructuur;
- capability-eisen;
- target-neutraliteit;
- fileledger met pad, grootte en SHA-256;
- digitale signature;
- immutable naam- en versie-identiteit.

Een identieke replay van dezelfde versie is idempotent. Andere bytes onder dezelfde identiteit leveren een conflict.

### Preflight

Preflight valideert de volledige composite zonder persistente mutatie. De consumer controleert release-identiteiten, signatures, manifestdigests, alle bestanden, core compatibility, capabilitymatch, contextbinding en gelijkheid van feature- en databaseschema-identiteit.

### Transactionele activatie

Na preflight worden artifacts naar staging gedownload en opnieuw geverifieerd. Onder een exclusieve featurelock worden databasevoorbereiding, migraties, grants, isolatietests, filesystemswap, routes en health als één herstelbare activatie behandeld.

Bij een fout:

- wordt de databasetransactie teruggedraaid;
- gaat de kandidaat naar quarantine;
- worden vorige files, configuratie en locks hersteld;
- blijft de vorige last-known-good versie actief.

Een activatiejournal en receipt ondersteunen recovery wanneer een proces precies rond filesystemswap of databasecommit wegvalt.

## Werken zonder centrale stores

Na activatie gebruikt een normale request uitsluitend lokale, geverifieerde state voor routes, UI, contextreads en databasetransacties. Stores zijn nodig voor discovery en nieuwe releases, maar niet voor het uitvoeren van een bestaande geldige composite.

Een netwerkstoring kan daardoor een update vertragen zonder de actieve toepassing direct te stoppen.

## Vertrouwen, security en datagrenzen

### Vertrouwen zit in bewijs, niet in locatie

Een package is niet vertrouwd omdat het van een bekende URL komt. Vertrouwen ontstaat door een lokale combinatie van:

- toegestane change en review;
- gepinde publieke sleutel;
- digitale signature;
- canonical manifest;
- fileledger en exacte digests;
- immutable versie;
- targetpolicy en capabilitymatch;
- runtime-health.

### Target-neutraliteit

Portable releasebytes bevatten geen target-id, environmentnaam, lokaal endpoint, credentials, consumer-namespace, vaste schemaprefix of concrete adapterclass. Deze bindings ontstaan pas in de consumer.

### Capability-isolatie

Featurecode vraagt een versiegebonden operatie aan de consumer. De consumer valideert argumenten, scope, identity en autorisatie en roept vervolgens een lokale adapter aan. Ontbreekt een capability, dan volgt een expliciete unavailable-status; er is geen verborgen fallback.

### Database-isolatie

Iedere feature krijgt een eigen schema en minimale rollen. Een runtime role kan geen databases, rollen of andere schemas creëren en krijgt geen toegang tot het schema van een andere feature.

### HTTP- en beheergrens

State-changing routes vereisen authenticatie en CSRF-controle voordat de featurehandler wordt aangeroepen. Diagnostische databaseviews zijn standaard verborgen en worden alleen begrensd en read-only beschikbaar gesteld.

### Secrets

Private signing keys, databasecredentials en providersecrets zijn consumerstate. Zij horen niet in source control, releases, healthresponses, auditcontext of workspacebestanden.

## Audit, continuïteit en herstel

Een complete run verbindt:

- intake-id en goedkeuring;
- contextversies en digests;
- policyversies;
- generationparameters en adapteridentiteit;
- intermediate outputdigest;
- validationchecks en evidence;
- reviewerbesluit;
- publicatiedigest, targetbinding en rollbackreferentie.

Een bruikbare backup omvat naast databasegegevens ook lokale releases, activatiestatus, trust, locks, targetreports en relevante workspacecontext.

Na succesvolle installatie kan een target een lokaal ondertekend report publiceren met artifactdigests, targetprofielhash, resultaat en niet-geheime diagnostische codes. Delivery kan durable worden uitgevoerd zodat vertraagd bewijs een nieuwere status niet overschrijft.

## Wat UCF wel en niet automatiseert

### Wat UCF expliciet organiseert

UCF biedt het patroon en de technische grenzen voor:

- atomisch scaffoldbare workspaces;
- manifests en workflowcontext;
- policy-, reference- en contractstores;
- contextpublication en immutable releases;
- stagecontracten en gates;
- capabilitygrenzen en adapters;
- run audit en publicatiebewijs;
- portable composite onboarding;
- lokale activatie, rollback en last-known-good runtime.

### Wat niet wordt verondersteld

De generieke scaffold kiest geen klant, datasource, model of vendor. Een provider wordt pas operationeel wanneer de consumer een gereviewde adapter aanbiedt.

UCF is geen claim op een volledig autonome multi-agentomgeving. Het is primair sterk voor workflows die sequentieel, reviewbaar, herhaalbaar en auditbaar moeten zijn. Hoogfrequente realtime automation, complexe parallelle agents en onbegrensde autonome tooluitvoering vereisen aanvullende orchestration- en isolationengineering.

> **Eerlijke grens:** UCF standaardiseert de context- en governanceketen. Het vervangt niet de inhoudelijke eigenaar, reviewer, modelprovider of operationele beheerorganisatie.

## Invoering in zeven beheersbare stappen

### 1. Definieer doel en governance

Kies één herkenbaar beslisproces. Benoem owner, reviewer, classificatie, output, grenzen en stopcondities. Bepaal welke beoordelingen menselijk moeten blijven.

### 2. Breng context en policies onder beheer

Inventariseer kandidaatbronnen, maar pin alleen goedgekeurde versies. Documenteer ownership, gevoeligheid, retentie en toegestane use cases. Maak policies afzonderlijk reviewbaar.

### 3. Formaliseer de vijf stages

Definieer per stage exacte input, output, gate en evidence. Houd generation en publication strikt gescheiden.

### 4. Bind een provideradapter

Selecteer provider en model op consumer-niveau. Leg allowlist, regio, retentie, kostenlimiet, timeout, retry en logging vast. Geef alleen noodzakelijke capabilities.

### 5. Draai een golden run en een failure run

Voer één volledig goedgekeurde run uit en archiveer het bewijs. Forceer vervolgens een fout, bijvoorbeeld ontbrekende context, afgewezen validation of provider unavailable. Controleer dat publication wordt geblokkeerd.

### 6. Maak de workflow portable

Publiceer context, feature, UI en databasecontract onafhankelijk. Voer preflight en lokale activatie uit. Test dat de actieve toepassing blijft werken wanneer stores tijdelijk niet bereikbaar zijn.

### 7. Schaal via hergebruik

Hergebruik policies, contracten en adapters alleen wanneer hun scope dat toestaat. Maak nieuwe workspaces voor nieuwe doelen of data boundaries. Meet niet alleen outputvolume, maar ook contextkwaliteit, afwijzingen, reviewdoorlooptijd, providerafhankelijkheid en rollbackbaarheid.

## Conclusie

Het Universeel Context Fundament maakt context rond AI expliciet, bestuurbaar en overdraagbaar. Het scheidt organisatiedoel van modeluitvoering, bronselectie van technische bereikbaarheid, generation van publication en portable artifacts van lokale consumerconfiguratie.

De kracht ligt in de combinatie:

- een workspace maakt betekenis leesbaar;
- stagecontracten maken de workflow controleerbaar;
- adapters maken providers vervangbaar;
- immutable releases en exacte pins maken distributie reproduceerbaar;
- lokale last-known-good state beperkt runtimeafhankelijkheid;
- audit en rollback maken verandering verantwoord.

UCF is geen extra laag om snelheid te vertragen. Het is de laag die maakt dat snelheid kan worden herhaald, uitgelegd, gevalideerd en teruggedraaid. Daardoor kan AI van experiment uitgroeien tot een betrouwbaar onderdeel van de bedrijfsvoering.

---

[← Terug naar het GitHub-profiel](../readme.md) · [Lees de Workplace Vision](../workplace/Vision.md)
