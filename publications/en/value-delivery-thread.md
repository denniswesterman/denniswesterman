<div align="center">

# Value Delivery Thread

## The governable thread from customer outcome to demonstrable delivery

**CUSTOMER VALUE · COHERENCE · RELEASE · EVIDENCE**

**Accessible GitHub edition · publication version 1.0 · 21 August 2026**

</div>

---

<p align="right"><sub><strong>English</strong> · <a href="../nl/value-delivery-thread.md">Nederlands</a> · <a href="../../README.md">← Architecture overview</a></sub></p>

<!-- publication-navigation:start -->
<table width="100%">
  <tr>
    <td width="33%" align="center">
      <a href="workplace-vision.md"><strong>01 · Workplace Vision</strong></a><br />
      <sub>Human purpose → digital experience</sub>
    </td>
    <td width="33%" align="center">
      <strong>02 · Value Delivery Thread</strong><br />
      <sub>Current paper · EN</sub>
    </td>
    <td width="34%" align="center">
      <a href="universal-context-foundation.md"><strong>03 · Universal Context Foundation</strong></a><br />
      <sub>Organizational context → governed AI</sub>
    </td>
  </tr>
</table>
<!-- publication-navigation:end -->

## The core in one minute

A customer does not buy an internal product code, price list, workflow, or configuration item. The customer expects a recognizable outcome, clear conditions, and a service that can actually be delivered, supported, and accounted for.

Within the organization, however, that promise is shaped by multiple professional domains. Product management defines its meaning and boundaries. Pricing manages rates. Sales and legal establish commercial agreements. Delivery organizes execution. Operations manages the actual service and configuration. Each domain has its own owner, pace of change, and evidence needs.

The **Value Delivery Thread (VDT)** is the demonstrable thread connecting the intended customer outcome with product definition, product release, commercial agreement, delivery, operational service, experience, and improvement. The thread shows not only what happens in each phase, but also which meaning, version, decision, and responsibility were transferred from one phase to the next.

Within this thread, the **Product Delivery Catalogue (PDC)** is a federated product-release register. The PDC determines which exact combination of product, offering, price, conditions, delivery, support, and service model is responsibly sellable and generically deliverable. The **ProductRelease** is the immutable manifest of that decision.

> **Core message:** the professional domains own their own facts; the Product Delivery Catalogue owns compatibility and product release; the Value Delivery Thread makes the complete coherence from customer outcome to experience and improvement demonstrable.

The VDT is not a new central system that replaces every existing tool. Prices remain owned by pricing, quotations by the commercial domain, processes and runbooks by their process owners, and configuration items by configuration management. One role-based experience can bring these sources together while keeping their ownership, versions, and truth criteria clear.

## Why value loses meaning along the way

A service often begins as an understandable idea: an organization wants to create a specific outcome for a particular audience. As soon as that idea is sold and delivered, it acquires several forms.

Product management describes the proposition. Finance creates a pricing model and rates. Legal supplies terms. Sales assembles a quotation. Delivery translates the agreement into planning and work. Operations builds and manages the actual service. Support handles questions and disruptions. Security and compliance assess risks and obligations. The customer ultimately experiences the combined result.

This distribution is logical, but without a connecting model predictable breaks appear:

- a current price list is combined with an outdated product scope;
- a quotation contains a promise for which no delivery variant has been released;
- a process names roles or controls that no longer match the product design;
- a service model describes required components while the realized configuration cannot be traced back to the accepted agreement;
- a portal displays a green check mark without being able to explain who approved what and on the basis of which evidence;
- a new product release silently changes the meaning of existing quotations or active services.

The heart of the problem is not that information is stored in different places. The problem is that the organization cannot unambiguously determine **which intention was translated, which combination applied, why that combination was permitted, what was actually agreed and executed, and which value the customer ultimately experienced**.

## From central storage to federated coherence

The word *separate* easily leads to the wrong architecture debate. Logical separation does not automatically mean that every domain needs its own application, database, or team. It first means that each object has its own meaning, owner, lifecycle, and truth criterion.

Four forms of separation must therefore be distinguished.

### Semantic separation

Objects answer different questions. A ProductVersion describes what the organization promises. A PriceBook contains the amounts that apply in a market and period. A QuoteSnapshot records what was offered to one customer. A CI describes an actual managed component. These objects must not be treated as synonyms.

### Governance separation

Decisions have different authorized owners. A product owner does not independently determine a legally binding clause. A CMDB manager does not determine which customer outcome is sellable. Clear ownership prevents a technical change right from silently becoming a commercial or governance decision.

### Technical separation

Physical separation into applications, services, or databases is only needed when scale, security, continuity, specialized functionality, segregation of duties, or independent release cycles justify it. A modular application can initially contain several logically separated domains, provided that their boundaries and rights are genuinely enforced.

### Experience integration

People do not need to carry the internal complexity. A role-based portal can combine information from multiple sources and route actions to the correct source. One user experience is therefore compatible with several authoritative sources.

**One experience does not mean one database. Multiple sources do not mean multiple truths about the same fact.**

## What the Value Delivery Thread is

Within this paper, the Value Delivery Thread is an **overarching traceability model**. It connects normative definitions, governance decisions, commercial snapshots, customer-specific execution instances, operational reality, evidence, and experience. This enables the organization to reason both forward and backward through the service.

Forward traceability means that, starting from a customer outcome, it is possible to see which ProductVersion, OfferingVersion, and ProductRelease were used, which agreements and instances resulted, and how the service is experienced. Backward traceability means that, starting from an incident, CI, Service Instance, or customer agreement, it is possible to find which promise, price, conditions, delivery blueprint, and decisions applied.

The VDT consists of three connected perspectives:

```text
DEFINITION AND RELEASE
Customer outcome → ProductVersion → Commercial Offering → ProductRelease

COMMITMENT AND EXECUTION
ProductRelease → QuoteSnapshot → Contract / OrderLine
→ Delivery Instance → Service Instance → CI relationships

EXPERIENCE AND IMPROVEMENT
Operational evidence → Experience → Change Decision
→ next version and ProductRelease
```

These perspectives are not three separate products or systems. They describe the same thread at definition, transaction, and instance level. The thread is therefore not the same as a linear process: multiple processes, teams, and platforms can contribute while relationships and meaning remain traceable.

The VDT does not centralize all content. It centralizes the **demonstrability of coherence** by connecting stable identities, immutable versions, validity, decisions, evidence, and controlled transitions. A possible VDT read model is a projection of those relationships, not a new authoritative source.

### A proposed architecture pattern

The term Value Delivery Thread is used here for a proposed architecture pattern and a shared governance language. It is not a separate ISO standard and does not claim that every organization must use the same object names, systems, or governance. The word *thread* emphasizes durable traceability across domains and time; the term *chain* is reserved in this paper for a sequence of activities and decisions.

## The Product Delivery Catalogue as a release junction

Within the Value Delivery Thread, the Product Delivery Catalogue is a **federated product-release register and governance release point**. It records which exact versions or snapshots from different professional domains together form one sellable and generically deliverable customer promise.

At a minimum, the PDC manages:

- the stable identity of the product;
- the approved ProductVersion with customer outcome, scope, obligations, and boundaries;
- the permitted Commercial Offering for market, segment, channel, and contract type;
- compatibility rules between product, price, terms, delivery, support, and service model;
- the ProductRelease in which exact versions are pinned;
- readiness decisions, validity, owners, approvals, and evidence references;
- the managed reference from a released definition to quotation, order, Delivery Instance, and Service Instance;
- the relevant evidence and feedback references for a subsequent change decision.

The PDC does not replace the professional domains. It makes coherence **at the moment of product release** explicit and assessable. A reference is therefore not a loose hyperlink to a document that may change, but a managed contract with object ID, version ID, source owner, status, validity, and verification. The VDT then carries traceability through quotation, commitment, execution, operational service, experience, and improvement.

### A capability within the thread

The term Product Delivery Catalogue is also used as a proposed capability, not as the name of a standard. The PDC is not the entire Value Delivery Thread: it governs product definition, compatibility, and release, but is surrounded by authoritative pricing, commercial, process, delivery, service, and configuration domains.

The precise implementation may differ. The design obligation remains the same: the organization must be able to reconstruct which meaning, price, conditions, delivery method, service requirements, and decisions were valid together, which customer agreement resulted, and what was then actually delivered and experienced.

## Seven layers of a governable service

A Value Delivery Thread can remain meaningful only when the product definition itself is sufficiently complete. The following seven-layer model provides a substantive foundation; the PDC binds the relevant versions of these perspectives in the product release.

| Layer | Governing question | Minimum definition |
|---|---|---|
| **Customer outcome and context** | For whom should which meaningful change be created? | Audience, need, context of use, desired outcome, and success measures. |
| **Proposition and service promise** | What does the organization promise specifically? | Scope, experience, results, inclusions, exclusions, conditions, and responsibilities. |
| **Economic logic** | Under which assumptions is the promise sustainable? | Pricing unit, cost structure, capacity, demand profile, margin boundaries, and variants. |
| **Delivery blueprint** | How is the promise realized repeatably? | Phases, roles, capabilities, dependencies, controls, lead time, acceptance, and evidence. |
| **Support and service boundaries** | How does the service remain usable and recoverable? | Service levels, support scope, escalation, monitoring, continuity, maintenance, and exit. |
| **Governance and evidence** | Who may decide what, and how is operation demonstrated? | Ownership, risks, controls, approvals, exceptions, indicators, and audit trail. |
| **Lifecycle and learning** | When does the service change, migrate, or end? | Status, validity, versions, feedback, review, migration, retirement, and retention periods. |

The layers are not seven documents that must always be written separately. They are seven connected perspectives through which a product definition must be complete and assessable. If the support boundary is missing, for example, a commercially attractive proposition may still be operationally unsustainable.

## Governance, Design, and Configuration

The Value Delivery Thread connects three responsibility layers without merging their ownership.

### Governance

Governance determines what the service must achieve, protect, and demonstrate, and why. This is where customer purpose, ownership, decision rights, risk boundaries, commercial frameworks, exceptions, lifecycle, and release policy are established.

Governance does not decide every technical detail. It does determine who is authorized to assess meaning, price, conditions, deliverability, and risk, and which evidence is required before a combination may be used.

### Design

Design translates the intention and boundaries into a coherent product, commercial, delivery, and service architecture. This is where the ProductVersion, Commercial Offering, PriceModel, Delivery Blueprint, Support Model, and Service Model are created.

Design ensures that the individual professional perspectives fit together. A pricing model must, for example, align with the measurable unit in the service. An acceptance criterion must be executable and demonstrable. A support promise must match monitoring, knowledge, and capacity.

### Configuration

Configuration makes the approved design concrete and keeps it reliable. It includes rates, clause versions, templates, workflow configuration, runbooks, service instances, CI relationships, monitoring, and evidence registration.

Not everything that falls under Configuration should therefore be stored in the PDC. The PDC references approved versions and safeguards the combination; the responsible domain manages the content and daily reality.

The thread remains closed when operational experience and evidence flow back through an assessed change decision to Design and Governance. Without that feedback, the PDC becomes a release archive and the learning thread is lost.

## Objects that must not be confused

A governable Value Delivery Thread begins with clear object boundaries. The most important concepts are defined concisely below.

### Product, ProductVersion, and Commercial Offering

A **Product** is the stable identity of a type of customer outcome. It contains no current amounts, customer configurations, or execution status.

A **ProductVersion** is an immutable specification, once approved, of the outcome, audience, scope, inclusions, exclusions, obligations, quality, and boundaries. A correction to a published version results in a new version; the previous version remains identifiable for history and evidence.

A **Commercial Offering** or **OfferingVersion** packages one ProductVersion for a market, segment, channel, and contract type. It describes suitability, ordering conditions, term, and the reference to the pricing model, among other things. The addition *Commercial* prevents confusion with a possibly identically named service object in IT service management.

### ProductRelease

A **ProductRelease** is the immutable, time-bound manifest that releases the exact product combination. This object is not the same as a ProductVersion. The product promise may remain substantively unchanged while, for example, a new rate, quotation template, or compatible delivery blueprint is released.

### PriceModel, PriceBook, and quoted price

The **PriceModel** describes the meaning of the calculation: unit of measure, billing frequency, formula, tier logic, and discount boundaries. The meaning *per user per month* belongs to the product and offering design.

The **PriceBook** contains market-, currency-, and time-bound amounts, tiers, and rates. A traditional price list should preferably be a generated reading view of this managed PriceBook, not an independent Word or Excel file that creates a second price truth.

The **quoted price** is the result calculated for one customer on the basis of a valid release, quantities, selected options, rates, permitted discount, and approval. It is recorded in the quotation snapshot and does not have to equal the current PriceBook later.

### QuoteTemplate, QuoteVersion, and QuoteSnapshot

A **QuoteTemplate** is a reusable document structure with field mapping and references to approved clauses. It is not yet a customer agreement.

A **QuoteVersion** is a concrete revision of the commercial proposal. A sent revision is not overwritten.

A **QuoteSnapshot** is the immutable snapshot of what was actually sent or accepted: ProductRelease, quantities, pricing inputs, calculated result, discounts, conditions, deviations, approvals, and validity. This snapshot is the historical evidence source for the commercial agreement, while pricing remains the owner of current rates.

### Process, Delivery Blueprint, runbook, and Delivery Instance

A **Process** describes the organization-wide standard for purpose, responsibilities, decisions, controls, and results. It is not a screen instruction.

A **Delivery Blueprint** translates that standard into the product-specific delivery design with results, phases, roles, controls, acceptance criteria, evidence, stop conditions, and recovery paths.

A **runbook** or procedure contains team- or platform-specific work instructions. These instructions may change more quickly when the customer promise, segregation of duties, control, and evidence remain unchanged.

A **Delivery Instance** is the customer-specific execution of a released blueprint. It contains planning, work items, assigned people, actual decisions, deviations, and evidence. The process handbook can expose processes, blueprints, and runbooks as a composed publication view, but does not thereby become a new authoritative source.

### Service Model, Service Instance, and CI

A **Service Model** is the type model of required service components, relationships, responsibilities, monitoring, and support. It describes what must be present for this type of service, not which concrete resources a customer already has.

A **Service Instance** is the service actually realized for one customer and contractual context. It references the ProductRelease used and connects the customer agreement, Delivery Instance, support, and operational reality.

A **configuration item (CI)** is an actual managed component whose identity, properties, and relationships are under configuration control. Not every asset or telemetry signal has to be a CI. The CMDB manages current CIs and relationships; it does not independently determine the product promise.

### Portal or Product Cockpit

The **portal** is a role-based presentation and interaction layer. It combines data for product owners, sales, delivery, operations, support, and other users and routes changes to the authorized domain.

The portal can show the Value Delivery Thread as one coherent user experience. It may manage its own preferences, session state, and temporary drafts, but should not turn the current price, a legal clause, product release, or CI status into its own truth. A green release signal is a derived view of concrete decisions and evidence, not a separate manual check mark.

## Where authoritative information belongs

No single system is the *source of truth* for everything. Authoritative source ownership is determined per object and, where necessary, per attribute.

| Information or object | Authoritative domain | Function within the Value Delivery Thread |
|---|---|---|
| **Product, ProductVersion, and Commercial Offering** | Product governance | Forms the normative product line; the PDC manages or registers identity and version. |
| **ProductRelease and release decision** | PDC and product governance | Is the authoritative source for the exact released combination. |
| **PriceModel, PriceBook, and rates** | Pricing, finance, or CPQ | The ProductRelease binds the exact approved model and rate version. |
| **Templates, terms, and clauses** | Commercial and legal content management | The ProductRelease binds the exact template, terms, and clause versions. |
| **Quotation, revision, and QuoteSnapshot** | CRM, CPQ, or quotation file | The snapshot connects the released combination with what was offered to or accepted by one customer. |
| **Contract or OrderLine** | Contract, order, or ERP domain | Connects the accepted agreement with billing, delivery, and service. |
| **Processes and policy-based method** | Process or quality management | Supplies the applicable standard, roles, controls, and required outcomes. |
| **Delivery Blueprint and Delivery Instance** | Delivery design and delivery execution | Connects the released design with what was actually performed for one customer. |
| **Runbooks and work instructions** | Operations or knowledge environment | Preserves compatibility and the instruction version actually used. |
| **Service Model** | Service architecture or configuration management | The ProductRelease binds the exact design version and required relationships. |
| **Service Instance and CI relationships** | Service inventory and CMDB | Connects customer agreement and release with current operational reality. |
| **Combined user view** | Portal and read models | Presents the thread without creating a new substantive truth. |

A copy is not automatically a competing master. Its purpose determines authority:

- the domain source is authoritative for the current definition;
- the ProductRelease is authoritative for which combination was released;
- the QuoteSnapshot is authoritative for what was offered or accepted at that time;
- the Delivery Instance is authoritative for what was actually executed;
- the Service Instance and CMDB are authoritative for the current operational composition.

The Value Delivery Thread is not an additional master beside these sources. It is the controlled relationship between their identities, versions, decisions, snapshots, instances, and evidence.

## ProductRelease as the connecting object

Within the Value Delivery Thread, ProductRelease is the object that makes federated product release governable. Without this manifest, the PDC remains a collection of references for which it is unclear whether the combination was ever assessed as a whole.

A release might, for example, contain the following composition:

```text
ProductVersion v4
+ Commercial Offering NL/enterprise v3
+ PriceModel per user/month v2
+ PriceBook NL/EUR 2026-Q3 v2
+ Terms and ClauseSet v5
+ QuoteTemplate v8
+ Delivery Blueprint v6
+ Support Model v2
+ Service Model v3
+ market, segment, channel, currency, region, and validity period
+ owners, decisions, exceptions, and evidence
= ProductRelease PR-2026-014
```

Each reference contains at least:

- artifact type and source domain;
- stable external object ID and immutable version ID;
- status and authorized owner;
- `approved_at`, `effective_from`, `effective_to`, and `recorded_at`;
- any withdrawal or `withdrawn_at`;
- approval and evidence reference;
- compatibility rule and date of last verification.

A release never refers to `latest`. A new source version does not silently change an existing release. It leads to a new or reassessed ProductRelease when the combination for future use must change.

For one customer, context, and date, the selection logic should produce at most one valid combination. No valid outcome blocks the transaction. Multiple outcomes are also an error, because the organization has then failed to determine unambiguously which combination applies.

## Three distinct readiness decisions

Lifecycle and readiness are not the same. *Draft*, *approved*, *active*, and *withdrawn* describe an object's lifecycle. *Sellable*, *generically deliverable*, and *customer-specific operational readiness* are separate decisions with their own criteria and evidence.

| Gate | Decision level | Minimum evidence |
|---|---|---|
| **Sellable** | ProductRelease | Approved product and offering, valid price, conditions, template, market and customer suitability, and commercial and legal decisions. |
| **Generically deliverable** | ProductRelease | Delivery Blueprint, Service Model, support, capacity policy, people and knowledge, security and compliance, monitoring, acceptance evidence, and failure and recovery path. |
| **Customer-specific operational readiness** | Contract, Delivery Instance, and Service Instance | Valid acceptance, concrete capacity, completed controls, realized service, CI links, monitoring, support handover, and customer-specific evidence. |

A product may be substantively approved but temporarily unavailable for ordering because of invalid prices, capacity scarcity, a stop-sell, or an expired legal review. Conversely, a generic delivery model may exist while the required capacity, dependencies, or controls have not yet been realized for a specific customer.

Orderability is therefore a derived state:

```text
orderable =
  release active
  AND sellable passed
  AND generically deliverable passed
  AND context and date valid
  AND no stop-sell
```

A gate decision contains the criteria version used, evidence, decision-maker, time, validity period, and any exception. An amber status without an owner, reason, and expiry date is not a governable decision.

## The Value Delivery Thread from intention to experience

The following chain shows successive activities and objects. The Value Delivery Thread is the persistent traceability across this entire chain: it preserves why each transition occurred, on the basis of which version, and with which evidence.

```text
CUSTOMER OUTCOME → PRODUCTVERSION → COMMERCIAL OFFERING → PRODUCTRELEASE
→ QUOTEVERSION → QUOTESNAPSHOT → CONTRACT / ORDERLINE
→ DELIVERY INSTANCE → SERVICE INSTANCE → CI RELATIONSHIPS
→ EXPERIENCE AND EVIDENCE → ASSESSED IMPROVEMENT
```

### 1. Intention and customer outcome

The chain begins with the need, not a product code or tool. The organization determines for whom which outcome is valuable, in which context of use, within which boundaries, and how success can be recognized.

### 2. Product and offering design

The outcome is translated into a ProductVersion and Commercial Offering. Scope, inclusions, exclusions, responsibilities, pricing unit, delivery variants, support boundaries, risks, and evidence needs are designed together.

### 3. Product release

The PDC verifies whether the exact versions from the professional domains are compatible, valid, sellable, and generically deliverable. Only the approved ProductRelease may be selected as the basis for a new quotation.

### 4. Quotation and commercial snapshot

Sales selects a valid release, adds customer data, quantities, and permitted options, and has price and conditions resolved by the authorized sources. Deviations outside guardrails are assessed as explicit exceptions. An immutable QuoteSnapshot is created when the quotation is sent.

### 5. Acceptance and contractual commitment

Acceptance is a controlled transition, not the change of a single field. The system checks identity, validity, authority, completeness, duplicate processing, and the selected rule for a possible stop-sell, among other things.

The accepted snapshot produces a contractual commitment or **OrderLine**. This object forms the governance bridge to delivery, billing, and service. A repeated acceptance request must not produce a second order; the transition must be idempotent.

### 6. Customer-specific delivery

The OrderLine activates a Delivery Instance based on the released Delivery Blueprint. Work items, planning, resources, controls, dependencies, deviations, and evidence are recorded for this customer.

Execution references the exact release and snapshot. This keeps it visible whether the team is executing what was actually sold, even if a newer product release now exists.

### 7. Realization of the Service Instance

A concrete Service Instance is built on the basis of the Service Model. Required components are linked to actual CIs and relationships. The CMDB records operational reality; the Service Instance preserves the relationship with customer, contract, and ProductRelease.

### 8. Operational readiness and handover

The service is declared operationally ready only when the customer-specific criteria have demonstrably been met. Monitoring, support handover, knowledge, ownership, security controls, continuity, and recovery must actually be available.

If a required CI is missing, a control has not been executed, or no support handover exists, the transition stops. A partially realized service is not turned green merely to close the workflow administratively.

### 9. Use, support, and service management

During use, the organization monitors availability, quality, experience, incidents, requests, capacity, costs, compliance, and customer outcomes. ISO/IEC 20000-1 provides a broader service-management framework for planning, design, transition, delivery, and continual improvement, but does not prescribe a PDC or system layout.

### 10. Feedback and controlled change

Feedback is traced to the correct layer and first converted into a **Change Decision**. An incident may require a CI correction, a recurring execution error a runbook or blueprint change, and structurally missing customer value a new ProductVersion. Not every signal therefore produces the same type of change, and feedback never changes an active release directly.

A new release never automatically changes existing QuoteSnapshots, OrderLines, Delivery Instances, or Service Instances. Migration is a separate decision with source version, target version, impact assessment, communication, evidence, and customer consent where necessary.

## When something genuinely needs separate management

An object deserves its own logical domain when one or more of the following characteristics differ materially:

- **meaning and identity:** the object answers a different business question and has its own stable key;
- **owner and authority:** another role may determine content or release;
- **lifecycle and change trigger:** the object is created, changed, and ended at different times;
- **pace of change:** rates may change monthly while a product scope remains unchanged for years;
- **validity and time:** amounts, conditions, and configurations have different effective and end dates;
- **reuse and cardinality:** one blueprint can be used by many releases and one release by many quotations;
- **security and privacy:** customer quotations and CI details have different access boundaries than public product information;
- **retention and evidence:** commercial snapshots, operational logs, and design documents have different retention obligations;
- **normative or factual nature:** a Service Model describes what is required, a CMDB what is actually present;
- **transaction boundary:** a change must be able to succeed, fail, repeat, or recover independently.

Physical separation follows only afterwards. A separate service or application is particularly useful when teams must deliver independently, a specialized capability is required, data must be isolated more strictly, availability differs, or scale and release frequency demonstrably diverge.

For an initial implementation, a **modular monolith** is often suitable. Product, pricing, commerce, delivery, configuration, and portal remain separate modules with their own objects and rights, but do not yet need to be distributed as microservices. This reduces technical complexity without abandoning architecture boundaries.

## Decision rules for versions and changes

Not every change requires a new product version. Meaning and impact determine the correct level.

| Change | Required version or release | Effect on existing agreements |
|---|---|---|
| **Customer outcome, scope, inclusion, exclusion, or obligation** | New ProductVersion and ProductRelease | Only through controlled migration. |
| **Market, segment, channel, term, or ordering condition** | New OfferingVersion and ProductRelease | No automatic change. |
| **Calculation unit or pricing formula** | New PriceModel, new OfferingVersion, and ProductRelease | No automatic recalculation. |
| **Amount, rate, or tier only** | New PriceBook version and new or reassessed ProductRelease | Existing QuoteSnapshots remain unchanged. |
| **Branding or layout without a change in meaning** | New QuoteTemplate version | No effect on sent documents. |
| **Clause or legal condition** | New Terms or ClauseSet version and ProductRelease | Existing agreement continues under the applicable change mechanism. |
| **Result, role, control, acceptance criterion, or evidence** | New DeliveryBlueprint version and ProductRelease | Ongoing delivery only after an impact decision. |
| **Compatible runbook step without external or control effect** | New runbook patch | Record the version actually used; the release may remain unchanged. |
| **Required service type, relationship, or support responsibility** | New ServiceModel version and ProductRelease | Assess migration of active instances. |
| **Current CI status, IP address, or resource property** | Configuration management or CMDB only | No ProductRelease. |
| **Customer-specific quantity or permitted discount** | New QuoteVersion and QuoteSnapshot | No ProductRelease. |
| **Deviation outside a commercial or operational guardrail** | Explicit exception object and authorized decision | Never hide it in free text. |

The primary rule is simple: **if the customer meaning, commercial calculation, obligation, control, or demonstrability changes, a new controlled version and usually a new ProductRelease are created. If only a compatible execution instruction or current configuration status changes, the ProductRelease can remain unchanged.**

## Time, withdrawal, emergency stop, and recovery

A versioned model is reliable only when time and exceptional situations are also explicit.

Published versions are not overwritten or hard-deleted when a release, quotation, or instance refers to them. Corrections are created as new versions. Withdrawal ends future use but does not erase the past.

A sent quotation can be accepted only within its validity. The organization must also explicitly determine what happens when the underlying release receives a stop-sell after the quotation was sent. Some risks block only new quotations; others require open acceptances or active deliveries to be assessed as well.

An emergency stop therefore contains separate rules for:

- new sales and new quotation generation;
- acceptance of quotations already sent;
- Delivery Instances that have started but are not yet complete;
- active Service Instances and existing contractual obligations;
- communication, escalation, recovery, and resumption.

Transitions between systems do not need to pretend that one technical all-or-nothing transaction exists. A demonstrable state machine with correlation ID, idempotent steps, controlled retries, and an explicit human recovery path is often more realistic. The organization must be able to see where the chain stopped, which step can be safely repeated, and who may decide an exception. The VDT preserves end-to-end correlation even when a sub-step fails or is resumed later.

## Human-centered operation without loss of control

The internal architecture may be complex; people's work does not have to be. Product owners need to see which dependency blocks a release. Sales should be able to select only valid combinations. Delivery must recognize the accepted agreement and mandatory results. Operations needs to know which Service Instance and CIs belong to the promise. A reviewer must be able to assess the concrete evidence underlying a decision. The Product Cockpit thus makes the relevant cross-section of the Value Delivery Thread operable.

ISO 9241-210:2019 supports human-centered design of such interactive systems and workflows. Roles, tasks, context of use, user involvement, evaluation, and iteration therefore belong in the design of the Product Cockpit and the handovers in the chain.

The standard does not, however, determine where a price list, CMDB, quotation library, or process handbook must be stored. Nor does it prescribe a VDT, PDC, data model, source ownership, or technical domain separation. **Within this architecture, ISO 9241-210 is a lens for human-centered design and quality in use, not the source of the thread or catalogue structure.**

A good integrated experience provides each role with:

- only the relevant information and permitted actions;
- clear provenance, version, and validity;
- visible missing criteria and blockers;
- an understandable reason for a decision and its owner;
- safe error messages, recovery, and escalation;
- accessible interaction for different abilities, devices, and working situations.

## Ownership and human responsibility

Automation can check criteria, select versions, collect evidence, and block invalid transitions. It does not replace the authority to assess customer value, risk, price, legal obligation, or operational acceptance.

The main responsibilities remain distributed:

- the **product owner** safeguards customer outcome, scope, ProductVersion, and lifecycle;
- the **commercial and pricing owner** manages PriceModel, PriceBook, guardrails, and economic sustainability;
- the **legal owner** manages terms, clauses, exceptions, and applicability;
- the **delivery owner** manages blueprint, capacity, feasibility, acceptance, and Delivery Instances;
- the **service and operations owner** manages Service Model, Service Instances, support, continuity, and recovery;
- the **configuration manager** manages the quality of relevant CIs, relationships, and configuration baselines;
- the **security, privacy, and compliance owners** assess applicable risks, controls, and evidence;
- the **customer and user** provide signals about usability, experience, and realized outcome;
- **PDC or release governance** ensures that only a demonstrably compatible combination is released.

A release decision is meaningful only when it is clear which owner approved which component. A generic *approved* status without decision context hides responsibility rather than revealing it.

## Security, compliance, and provenance as part of the design

Security and compliance are not added to the product as a final appendix. They are part of Governance, Design, Configuration, and the readiness gates.

The federated structure supports targeted access control. Public product information can be widely available, while pricing rules, customer quotations, exceptions, and CI details remain restricted to authorized roles. The portal displays only what a user needs for their task and routes changes to the correct authorization model.

For every relevant object, it must be traceable:

- where it came from and who owns it;
- which version or snapshot was used;
- which activity created or changed the version;
- which person or role reviewed and decided;
- which dependencies, exceptions, and evidence applied;
- which later release or migration followed.

W3C PROV provides a general model for relationships between entities, activities, and responsible agents. It does not prescribe a PDC data model, but it supports the language through which provenance and responsibility can be recorded transferably.

ISO 10007 provides guidelines for configuration management throughout the lifecycle of products and services. ISO/IEC/IEEE 42010 supports explicit description of stakeholders, concerns, viewpoints, and relationships in architecture descriptions. These standards likewise do not prescribe the proposed systems or object names; they help make the chosen controls and architecture demonstrable.

## A practical example: a managed digital workplace

Suppose an organization offers a managed digital workplace to Dutch business customers. The customer promise is a secure, usable, and supported working environment per employee.

The ProductVersion describes the outcome, audience, inclusions, exclusions, onboarding, support boundaries, and quality criteria. The Commercial Offering determines that this variant can be ordered through the enterprise channel for a minimum term. The PriceModel charges per active user per month. The Dutch PriceBook contains euro amounts for the third quarter.

Legal manages the applicable terms and clauses. Delivery manages the blueprint for intake, tenant preparation, identity integration, device rollout, acceptance, and handover. The Service Model describes the required identity, endpoint, monitoring, and support components. Operations manages runbooks for provisioning and recovery.

The PDC does not copy all this content. It creates a ProductRelease with the exact versions and has sellability and generic deliverability assessed.

Sales uses the release for a quotation to a customer with 450 users. A permitted discount is approved. Sending the quotation creates a QuoteSnapshot with pricing inputs, outcome, conditions, and validity. Valid acceptance produces one OrderLine and one Delivery Instance.

During delivery, it becomes clear that the customer cannot yet realize a required identity integration. The workflow stops before operational readiness. The cause, owner, recovery action, and new schedule are recorded visibly. The service is not marked active merely because all other work items are complete.

After recovery, the concrete identity, endpoint, and monitoring components are linked to the Service Instance. Support accepts the handover on the basis of evidence. The customer receives the agreed service; later experience may lead to a runbook patch, a new blueprint, or a changed ProductVersion, depending on the meaning of the improvement.

This example shows why price list, quotation, process, and CMDB remain separate and why the relationships between intention, release, agreement, execution, and experience must nevertheless be governed as one Value Delivery Thread.

## Measuring what the promise actually means

A Value Delivery Thread is not successful because many fields or relationships have been completed. It is valuable when the same meaning remains demonstrably recognizable in decision-making, release, agreement, delivery, operations, and experience. The PDC provides product-release evidence for this purpose, but is not the only measure of the complete thread.

Several types of signals are therefore needed:

- **customer outcome:** the extent to which the intended result is realized;
- **experience:** whether customers and employees can use the service understandably, accessibly, and with confidence;
- **commercial quality:** how many quotations use a valid release and how many exceptions arise;
- **delivery quality:** lead time, first-time-right performance, blockers, recovery, and acceptance;
- **operational quality:** availability, incidents, requests, capacity, continuity, and support experience;
- **economic sustainability:** actual costs, use, margin, and deviation from assumptions;
- **governance quality:** expired assessments, missing evidence, invalid combinations, and time to withdrawal or recovery;
- **change quality:** release impact, migration success, and recurring causes.

These signals must be traceable to ProductRelease, QuoteSnapshot, and relevant instances. Only then can the organization distinguish whether a problem originates in the original promise, commercial selection, delivery blueprint, concrete execution, or operational configuration and use that experience to make a targeted Change Decision.

## What this architecture can deliver for organizations

When the Value Delivery Thread, its object boundaries, sources, and release decisions are applied consistently, the architecture can contribute to:

### More understandable customer promises

Scope, pricing meaning, conditions, delivery, and support are assessed as one coherent design before a sale takes place.

### Better handover

Sales, delivery, and operations work not from their own interpretations, but from the same released combination and accepted snapshot.

### Controlled reuse

Price books, clauses, blueprints, service models, and runbooks can be used by several products or releases without being copied into each file.

### Safer change

A new version has an explicit impact. Existing agreements and active services are not changed silently.

### Greater explainability

The organization can reconstruct what was promised, which versions applied, who decided, what was executed, and which operational reality arose.

### Less tool dependency

Because meaning, identity, relationships, and evidence are explicit, an application or vendor can change without reinventing the entire governance coherence.

### More targeted improvement

Feedback can be directed to the correct layer and owner instead of treating every problem as an isolated support incident.

These effects are expected architecture outcomes. Actual improvement must be demonstrated for each organization with operational and experience data.

## What the Value Delivery Thread is not

The Value Delivery Thread is not:

- a linear process that every service must follow in exactly the same way;
- a central database into which all domain data is copied;
- a new all-in-one platform or the name of one application;
- only a technical integration between existing systems;
- an owner of pricing, quotation, process, delivery, or CMDB facts;
- a guarantee that value automatically arises as soon as relationships are technically complete;
- a replacement for authorized human ownership and professional judgment;
- a formal standard that every organization must implement identically.

The VDT makes coherence and handovers demonstrable, but people remain responsible for the quality of intention, decision, execution, and experience.

### What the PDC does not replace

Within the thread, the PDC is not:

- a new name for a traditional product catalogue or price list;
- a repository into which all domain objects are copied in full;
- a CMDB that tries to derive the customer promise from current components;
- a quotation library in which reusable definitions and customer agreements are mixed;
- a process handbook containing only descriptive work instructions;
- a portal that accidentally becomes the new master through presentation;
- a collection of hyperlinks without version, validity, and compatibility decision;
- an automated approval system without authorized human responsibility;
- a mandatory microservice landscape;
- a CRM, CPQ, ERP, or service-management platform.

Even a technically correct PDC does not guarantee good customer value, profitability, or error-free execution. The model makes assumptions, decisions, and deviations visible; people remain responsible for their quality.

## Eight design principles

The Value Delivery Thread can be summarized in eight concise principles.

1. **Begin with customer outcome.** Design product, price, delivery, and support from the value and context of use the organization wants to support.
2. **Assign one authoritative source per fact.** Make clear for every object and important attribute who owns it and where the current definition is managed.
3. **Release one exact combination.** Use the PDC and a ProductRelease to connect compatible versions, context, decisions, and evidence immutably.
4. **Separate definition, release, snapshot, and instance.** A reusable design, permitted baseline, accepted agreement, and operational reality answer different questions.
5. **Standardize the core and govern variation.** Make permitted variants repeatable and treat deviations outside guardrails as explicit decisions.
6. **Preserve the thread at every transition.** A status is meaningful only when source, purpose, criteria, decision-maker, time, validity, evidence, and recovery path are known.
7. **Provide one understandable experience across multiple sources.** Hide unnecessary system complexity from users without hiding provenance, version, and responsibility.
8. **Let technology execute without taking over meaning.** Automate selection, checking, and registration; leave customer promise, risk acceptance, and exceptions with authorized people.

## Common anti-patterns

The following choices make the chain appear simple but break the traceability of the Value Delivery Thread:

- **copying everything into the PDC:** competing masters and unclear currency arise;
- **always using the latest version:** historical quotations and instances lose their meaning;
- **one global active status:** sellability, deliverability, and customer-specific readiness become mixed;
- **using the CMDB as a product catalogue:** current components are confused with the normative customer promise;
- **using Word or Excel as the rate master:** the publication view and calculable pricing logic diverge;
- **copying procedures per product:** improvements fragment and local variants become invisible;
- **silent automatic propagation:** a source change alters existing agreements without a decision;
- **free text for exceptions:** reason, owner, boundary, and expiry date cannot be enforced;
- **building a portal first:** the interface hides that objects, authority, and versions have not yet been defined;
- **premature microservices:** technical distribution increases complexity before semantic boundaries have been proven.

## Adoption: begin with one complete thread

Adoption does not have to start with an organization-wide transformation or a new portal. Choose one representative product, one Commercial Offering, one market, one real customer scenario, and one demonstrable path from ProductRelease to QuoteSnapshot, Delivery Instance, Service Instance, and feedback.

### 1. Establish the shared language

First define Value Delivery Thread, Product Delivery Catalogue, and ProductRelease. Then define Product, ProductVersion, Commercial Offering, PriceModel, PriceBook, QuoteSnapshot, Delivery Blueprint, Delivery Instance, Service Model, Service Instance, and CI. Also record relationships, cardinality, and prohibited mixing.

### 2. Name ownership and decision rights

For each object and important attribute, determine the authoritative source, content owner, approval authority, change trigger, retention need, and access. Make visible where segregation of duties is required.

### 3. Implement identity, version, and time

Use stable IDs, immutable published versions, effective and end dates, recording time, withdrawal, and audit. Prove that a historical reference can still be resolved exactly later.

### 4. Build ProductRelease and the readiness gates

Create a manifest that binds exact versions, applicability, compatibility, decisions, and evidence. Test both a valid release and missing pricing, expired conditions, an incompatible blueprint, and stop-sell.

### 5. Connect price and commercial agreement

Connect PriceModel and PriceBook and prove that price resolution produces exactly one outcome for one context. Implement QuoteVersion, QuoteSnapshot, exceptions, and the idempotent transition to contract or OrderLine.

### 6. Connect delivery and operational reality

Create a Delivery Instance from the OrderLine, connect blueprint, process, and runbook, and collect actual evidence. Then realize Service Instance and CI relationships and apply the customer-specific readiness gate.

### 7. Design the integrated experience and learning loop

Build role-based read models and workflows on the basis of real source boundaries. Test success, duplicate requests, expired sources, partial failure, recovery, and migration. Then connect experience and operational signals through a Change Decision to change governance and scale in a controlled way.

The first implementation succeeds when the organization can reconstruct one complete thread forward and backward and can stop safely when an essential component is missing.

## What success means

Success is visible when:

- an authorized user can determine from a customer agreement which intention, ProductVersion, offering, price, conditions, and delivery models applied, and can see from the product definition which customer instances and experiences resulted;
- a user can explain which object they are changing and who owns it;
- exactly one valid ProductRelease is selected for every new quotation;
- every release contains exact, immutable versions and validity context;
- sellability and generic deliverability are separately demonstrable;
- an accepted quotation produces one traceable OrderLine and Delivery Instance;
- operational readiness follows only after concrete service, CI, monitoring, and support evidence;
- a new release does not silently change existing agreements;
- an emergency stop and partial failure can be handled safely;
- feedback is directed to the correct product, commercial, delivery, or configuration layer;
- the portal provides simplicity without hiding source ownership;
- the organization can show one controllable Value Delivery Thread from customer outcome to operational experience and back to an assessed improvement.

## Theoretical foundation and scope boundaries

This architecture pattern combines several established perspectives without claiming that one source prescribes the complete Value Delivery Thread or PDC.

Service-dominant logic shifts attention from transferring an object to service, relationships, and co-created value. This supports beginning with customer outcome and context of use.

Research into service productization shows how specification, standardization, concretization, and systematization can make a service more understandable and repeatable. Service blueprinting connects the visible customer journey with backstage activities and supporting processes. Research into service modularity emphasizes that reusable building blocks require explicit interfaces and coherent variation.

The concept of a *boundary object* explains how one shared representation can be useful to different professional groups while retaining a recognizable identity. As a release junction, the PDC can function as such a boundary object. The VDT is broader: it connects multiple boundary objects, snapshots, and instances through time. This literature does not prove that the model proposed here is the only correct implementation.

ISO/IEC 20000-1 supports the broader lifecycle of planning, design, transition, delivery, assessment, and continual improvement of services. ISO 10007 supports configuration management throughout the lifecycle of products and services. ISO/IEC/IEEE 42010 supports explicit description of stakeholders, concerns, viewpoints, and relationships. W3C PROV provides a model for provenance and responsibility.

ISO 9241-210 supports human-centered design throughout the lifecycle of interactive systems. Within this paper, it applies only as a lens for roles, tasks, context, evaluation, and quality in use of the integrated experience. The standard does not substantiate the proposed domain separation, object definitions, or placement of pricing, quotation, process, and configuration data.

The Value Delivery Thread and the positioning of the Product Delivery Catalogue therefore remain an architecture synthesis. Organizations must assess the definitions, gates, evidence needs, and technical form against their own products, risks, sector, legislation, contracts, and maturity.

## Closing

A governable service does not arise by putting all information in one place. It arises when meaning, responsibility, version, and evidence remain recognizable across the entire Value Delivery Thread.

Product management remains the owner of the customer promise. Pricing remains the owner of pricing logic and rates. Commercial and legal remain the owners of quotations, terms, and snapshots. Delivery remains the owner of the delivery blueprint and execution. Operations and configuration management remain the owners of the actually realized service and CIs.

Within this distribution, the PDC owns release coherence: which exact versions could be sold and generically delivered together, in which context, during which period, on the basis of which decisions, and with which evidence. QuoteSnapshot, Delivery Instance, and Service Instance then each preserve their own authoritative moment or reality.

The Value Delivery Thread connects these sources and decisions without imposing one all-encompassing database. People receive an understandable, role-based experience. Professional domains retain their responsibility. Change becomes traceable. Existing agreements remain protected. Feedback can lead to targeted improvement.

**The Value Delivery Thread does not centralize all information. It centralizes the demonstrability of coherence, so that intention, promise, release, commitment, execution, experience, and improvement remain connected when teams, processes, and platforms change.**

## Sources

- Bitner, M. J., Ostrom, A. L. & Morgan, F. N. (2008). *Service Blueprinting: A Practical Technique for Service Innovation*. California Management Review, 50(3), 66–94. [DOI publication page](https://doi.org/10.2307/41166446)
- de Blok, C., Meijboom, B., Luijkx, K., Schols, J. & Schroeder, R. (2014). *Interfaces in service modularity: A typology developed in modular health care provision*. Journal of Operations Management, 32(4), 175–189. [DOI publication page](https://doi.org/10.1016/j.jom.2014.03.001)
- ISO (2017). *ISO 10007:2017 — Quality management — Guidelines for configuration management*. [ISO publication page](https://www.iso.org/standard/70400.html)
- ISO (2019). *ISO 9241-210:2019 — Ergonomics of human-system interaction — Part 210: Human-centred design for interactive systems*. [ISO publication page](https://www.iso.org/standard/77520.html)
- ISO/IEC (2018). *ISO/IEC 20000-1:2018 — Information technology — Service management — Part 1: Service management system requirements*. [ISO publication page](https://www.iso.org/standard/70636.html)
- ISO/IEC/IEEE (2022). *ISO/IEC/IEEE 42010:2022 — Software, systems and enterprise — Architecture description*. [ISO publication page](https://www.iso.org/standard/74393.html)
- Jaakkola, E. (2011). *Unraveling the practices of “productization” in professional service firms*. Scandinavian Journal of Management, 27(2), 221–230. [DOI publication page](https://doi.org/10.1016/j.scaman.2011.03.001)
- Star, S. L. & Griesemer, J. R. (1989). *Institutional Ecology, ‘Translations’ and Boundary Objects*. Social Studies of Science, 19(3), 387–420. [DOI publication page](https://doi.org/10.1177/030631289019003001)
- Vargo, S. L. & Lusch, R. F. (2004). *Evolving to a New Dominant Logic for Marketing*. Journal of Marketing, 68(1), 1–17. [DOI publication page](https://doi.org/10.1509/jmkg.68.1.1.24036)
- W3C (2013). *PROV-O: The PROV Ontology — W3C Recommendation*. [W3C Recommendation](https://www.w3.org/TR/prov-o/)

## About this publication

| Property | Value |
|---|---|
| **Document** | Standalone end-to-end architecture whitepaper about the Value Delivery Thread and the role of the Product Delivery Catalogue |
| **Author** | Dennis Westerman |
| **Version** | 1.0 |
| **Publication date** | 21 August 2026 |
| **Language** | English |
| **Audience** | Executives, architects, product owners, service owners, sales, finance, legal, delivery, operations, security professionals, and engineers |
| **Purpose** | Describe the demonstrable thread that connects customer outcome, product release, price, quotation, contract, delivery, service configuration, experience, and improvement |
| **Status** | Theoretical architecture publication; product-, platform-, and vendor-independent |
| **Scope** | Architecture synthesis and decision framework; not a formal standard, legal advice, or empirically validated maturity model |

[← Previous: Workplace Vision](workplace-vision.md) · [Architecture overview](../../README.md) · [Next: Universal Context Foundation →](universal-context-foundation.md)
