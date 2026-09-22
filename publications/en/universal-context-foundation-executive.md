# Using AI without losing control

## Universal Context Foundation: retaining organizational value when technology changes

**Author of the original vision:** Dennis Westerman  
**Status:** public editorial draft for review; not a validated implementation  
**Version:** 0.3 | 22 September 2026  
**Audience:** boards, executive leadership, management, CIOs, CISOs, and other accountable leaders  
**Edition:** English translation of the Dutch executive paper, version 0.3

**English** · [Nederlands](../nl/universal-context-foundation-executive.md) · [Publications](../README.md) · [← Profile](../../README.md)

---

## The core

The value of an AI application lies not only in the model that produces an answer. It also lies in the knowledge supporting that answer, the business rules that apply, the assessment of the result, and accountability for its use.

The Universal Context Foundation (UCF) brings these relationships under management. For a bounded process, it records the assignment, which information may be used, which checks are needed, who may approve, and what evidence of execution must be retained. The AI model performs a task within those boundaries; it does not independently determine the organization's permissions or policies.

**The principle is to manage the necessary knowledge and rules, use what is relevant and permitted for each assignment, and leave the organization in control of setting and enforcing permissions.** More information or more checks do not, by themselves, demonstrate added value.

The intended result is a way of working that can be reused and accounted for, even when teams, applications, or suppliers change. This does not make UCF a guarantee of correct answers, lower costs, or complete supplier independence. It makes those ambitions concrete enough to organize and evaluate.[^1]

> The organization must be able to retain its knowledge, way of working, and decision-making authority, even when it replaces the technology.

The proposed first decision is therefore limited: evaluate this approach in a recognizable process, with an owner, a bounded investment, and agreed criteria for value and control. Only then decide on further adoption.

## 1. A recognizable governance question

Suppose an organization wants to use AI to prepare a policy note on energy savings. The note must align with approved policy, draw on current information, and make uncertain assumptions clear. A subject-matter expert must assess the result before it is distributed as approved advice.

This is a fictional example, not a completed client case or evidence of achieved savings.

A convincingly written text does not yet answer the most important questions. Was the latest policy version used? Were the data suitable for this application? Were confidential details shared unnecessarily? Did someone check the supporting evidence? Who released this exact version?

Within the UCF approach, work therefore does not start with the question to the model. First, the assignment, permitted sources, and assessment criteria are established. Outdated policy documents and unnecessary detailed data are excluded. The model prepares a draft. That draft is assessed and made available as an approved result only after the required approval.

If a source later proves incorrect, the organization must be able to identify which notes were based on it. If another AI supplier is chosen, the assignment, policy, and responsibilities do not need to be invented again. However, whether the new execution meets the same requirements must still be assessed.

**The governance benefit is not simply that a text is produced. It is that the conditions under which it may be used, and who is accountable for that use, are clear.**

## 2. What the organization keeps under its own management

UCF treats context as a managed organizational asset. Here, context means the information, definitions, agreements, and rules needed for a specific task. This is different from offering all available business information to a model.

Three aspects are distinguished:

| Aspect of control | What is recorded? |
|---|---|
| Context management: managing knowledge and rules | Which sources and rules apply, who is responsible for them, and the purposes for which they may be used. |
| Context selection: choosing for each assignment | Which information and instructions are necessary and permitted for this assignment. |
| Execution conditions: enforcing boundaries | Who has access, which actions are permitted, and which assessment and release are required. These boundaries are actually enforced; the model does not decide them itself. |

The managed collection may be larger than the selection for a task. A complete knowledge archive, all work instructions, or the documentation of every component is not provided by default. Information already available in a usable form is not repeated without a reason. Selection must still retain enough context to perform the assignment well; shorter is not automatically better.

Additional instructions are assessed for their purpose, currency, and the behavior they induce. Unnecessary searching, checking, or repetition counts toward the execution burden. If necessary information is missing or applicable rules conflict, the issue is made visible and resolved through the agreed process; the model does not decide which obligation to discard.

For each application, an accountable person determines which sources are suitable, which version applies, the purposes for which they may be used, and when reassessment is needed. Technical access to a document is not the same as permission to use it for every assignment.

The way of working is also made explicit. A new team must be able to understand the assignment, which information applies, when work may proceed, and who assesses the result. That knowledge should not exist solely in an employee's head, a previous chat session, or a supplier's settings.

Standing agreements and the results of individual assignments remain separate. A generated draft note does not automatically become new policy. Nor may a policy change silently alter the record of an earlier assessment.

This does not require a central copy of all business data. It requires clarity about authoritative sources, permitted access, current versions, and responsibilities. The practical arrangement can connect to existing document, information, and management systems.

This paper positions UCF as an architectural approach: a way to organize knowledge, agreements, responsibilities, and execution coherently. It does not prescribe a particular system or fixed file structure. The original publication also describes a technical implementation. The governance principles and that specific realization must be assessed separately.[^1]

## 3. Five steps from assignment to responsible use

The original UCF approach distinguishes five steps. For boards and management, the decision points between them are particularly relevant.[^2]

| Step | Governance question | Condition for proceeding |
|---|---|---|
| Define the assignment | What result is needed, for whom, and under whose responsibility? | Purpose, boundaries, owner, and assessment are clear. |
| Select information | Which knowledge and data may be used for this assignment? | The necessary selection, source versions, and conditions of use have been assessed and can be retrieved. |
| Prepare a draft | Which bounded task does AI perform? | The result remains recognizable as a draft that has not yet been approved. |
| Assess the result | Is this result sufficiently supported and suitable for its intended use? | The required checks and approvals have been recorded. |
| Release | Who may use, receive, or further process this result? | Release is authorized, specific, and traceable afterward. |

An unsatisfactory assessment does not lead to silent publication. The work is revised or stopped, while the earlier assessment is retained. A new draft receives its own assessment; an old approval does not automatically apply to changed content.

Checks must match the risk. Not every check needs to be manual. However, it must be determined in advance which checks may be automated, when an expert must assess the result, and which decisions explicitly remain with a person. Human approval is mandatory in the policy example.

The five steps describe responsibilities and decision points, not a mandatory number of model calls or manual actions. Checks may be combined or automated where their required operation and evidence are preserved. Every additional check must have a recognizable purpose. Reducing unnecessary activities is not a reason to omit necessary quality or security checks.

**Successful technical execution is not yet permission for business use.**

## 4. Renewing business functions without rebuilding everything

A second principle is that different kinds of change should not be coupled unnecessarily. A policy change is not the same as a change to a screen, functionality, or data structure.

The UCF approach distinguishes four components. They make clear what the organization controls and which responsibilities belong together:

| Component | Meaning for the organization |
|---|---|
| Knowledge and rules | Which information and agreements apply, who manages them, and for what purposes may they be used? |
| Functionality | Which bounded task does the application support for an employee or business process? |
| User experience | How does someone submit an assignment, assess the result, and recognize errors, limitations, and approvals? |
| Data structure | Which information belongs together, who may access it, and what must be retrievable later? This does not require a new central copy of all business data. |

For the policy note, these are the applicable policy sources, the task of preparing a draft, the way someone assesses that draft, and the relationship between the assignment, sources, draft version, and approval. The application supports the work but does not establish policy itself.

The aim is to make targeted changes. An improved screen need not change approved policy. New rules need not automatically require a complete rebuild of the application. For each change, it must remain clear which combination has been assessed and where further checks are needed.

This separation does not eliminate dependencies. It makes them explicit and aims to limit the consequences of changes. Whether a specific implementation actually delivers less work, fewer errors, or shorter lead times must be demonstrated.

The four components are responsibilities, not four mandatory systems, departments, or new documents. What belongs to one application stays together as much as possible. Only genuinely shared knowledge and agreements are managed jointly. A change is assessed for its consequences, not on the assumption that every component must be changed again each time.

For an initial application, one application overview can provide the essentials: purpose, owner, permitted information, AI's task, boundaries, assessment, release, and accountability. The overview refers to existing sources and agreements; it is not a second archive. The four components describe what is organized, and the five steps describe how an assignment proceeds. They are therefore not nine separate facilities.

The companion [UCF - structure and application example](universal-context-foundation-example.md) illustrates this for the policy note. The application overview is a proposed presentation format, not an additional mandatory UCF component.

## 5. What value must be demonstrated?

UCF should not be assessed by the number of AI answers produced, but by usable results, manageable risks, and the effort required to achieve them.

The following measures are proposed for an initial application. They are not results already achieved by UCF.

| Intended value | Practical measure |
|---|---|
| Greater efficiency | Time and total cost per accepted result, including source management, checking, correction, and ongoing management. |
| Better quality | The proportion of results meeting the substantive criteria and the severity of identified errors. |
| Stronger accountability | Whether the assignment, sources, assessment, and release can actually be retrieved for each selected result. |
| Less unwanted dependency | The effort and remaining limitations involved in a controlled switch to another execution arrangement. |
| Manageable change | The components actually affected by a change and the demonstrable ability to recover. |

First make the current way of working visible. Then compare comparable assignments under the same quality requirements. Less writing time is not a net benefit if source management, assessment, and correction add more time than is saved.

Where possible, also compare with a simple AI setup that has the same necessary information, quality requirements, and safety conditions. This distinguishes the value of AI use in general from UCF's additional value. The simple alternative must not be made cheaper by omitting necessary protection.

Efficiency and control are reported separately. Additional assessment time may, for example, be needed for demonstrable release authorization. That is not automatically a failure, but neither is it a proven cost saving. State which improvement or necessary control justifies the extra effort.

Include the investment as well: organizing sources, appointing and training accountable people, connecting systems, assessing security, and ongoing management. Reusable agreements may deliver value in later applications, but that reusability must be demonstrated through actual reuse.

A sound business case therefore identifies the expected benefit alongside the costs, uncertainties, and conditions under which that benefit is achievable.

### What external research does and does not support

*Evaluating AGENTS.md* studies AI assistants performing programming tasks, with and without additional instruction files. In the situations studied, those files do not produce a statistically significant general improvement in task success, while execution costs increase. Without an additional file, the assistants still have the assignment, the software to be modified, and existing documentation. The extra instructions are often followed, but also cause additional work.[^4]

This research does not assess a complete UCF setup or demonstrate its governance or security value. An additional experiment with documentation removed shows that the availability of other information matters. No clear relationship was found between instruction-file length and success or cost either. Consequently, neither adding more information nor making everything shorter is a proven general solution. Choices within UCF must be evaluated in the actual application; the research does not prove any particular organizational or file structure.[^4]

## 6. Ownership is an organizational question

UCF can make responsibilities visible, but cannot assign them on the organization's behalf. Without the necessary mandate, time, and expertise, a control point remains merely an agreement on paper.

**The board or executive leadership** determines which business objectives the application serves, the scope for risk, and the conditions under which expansion is responsible. A designated risk owner decides whether to accept remaining risks; that responsibility must not silently fall to a developer or supplier.

**The process owner** is responsible for the intended outcome, the way of working, and organizing assessment. This owner must also be able to suspend use of an application when quality or control is inadequate.

**Information and policy owners** oversee the content, currency, and permitted use of sources and rules. **Assessors** need sufficient expertise, time, and authority to reject a specific result or require additional supporting evidence.

Additional model instructions also need an owner and a reassessment point. A suggestion from an AI execution does not become a general instruction for future assignments without substantive assessment. Outdated or unnecessary instructions must be withdrawable.

**The CIO, CISO, and relevant privacy or legal specialists** each contribute their own assessment. This includes alignment with existing systems, the practicality of controls, data use, and supplier agreements. It does not automatically make the CISO the owner of all business risks or every substantive decision.

**The operations organization** is responsible for the agreed availability, access arrangements, change control, and recovery capabilities. Those independently checking execution must have access to sufficient evidence without unnecessarily distributing confidential content.

Existing roles can fulfill these responsibilities. UCF does not automatically require an additional governance layer, but it does require unambiguous agreements.

## 7. What must a CISO or oversight body be able to assess?

For security, a document stating what an application may do is not enough. The chosen implementation must actually be able to block unauthorized access and unwanted follow-up actions.

Instructing a model not to perform an action is not the same as making that action technically impossible. For each control, it must therefore be clear whether it relies on instruction, an automated check, an access restriction, or human approval, and how its operation is assessed. A file containing rules is not, by itself, a functioning security control.

An appropriate assessment therefore examines actual operation. Does a task receive only the necessary information and permissions? Is an unapproved result actually withheld? What happens when a required facility is unavailable? Can data be prevented from being forwarded to another supplier without permission?

Release must relate to the exact content assessed, the purpose of use, and the permitted recipients. If the content changes or conditions cease to hold, whether release remains permitted must be determined again. The technical check of this relationship is separate from the model's willingness to follow instructions.

The execution record must also be protected. What matters is not only the availability of an evidence record, but also who may alter it, how the sources used can be retrieved later, and which retention periods are appropriate. Keeping evidence is not a reason to copy all confidential content indefinitely.

For software changes, it must be clear which version has been approved and whether that version is actually active. Checking provenance and unchanged content supports this. It does not, by itself, prove that the software is secure or the result substantively correct.

The original technical publication itself distinguishes between multiple security measures and a fully proven isolated environment.[^3] An executive paper must preserve that distinction: the quality of protection depends on design, implementation, operations, and evaluation.

## 8. Where the promise ends

**Approved sources do not guarantee a correct answer.** A model may misinterpret information or draw a conclusion not supported by the sources. Human assessment is not infallible either. Sources, checks, and responsibilities make assessment easier to organize; they do not make errors impossible.

**More context or more checks do not guarantee better performance.** Assess which information is relevant, what extra work instructions cause, and whether checks actually do what is needed. The number of agreements or checks is not, by itself, evidence of value. Additional effort must be justified; providing less information is not a guarantee of results either.[^4]

**Transferability does not mean an effortless switch.** The intended benefit is that knowledge, rules, and assessment criteria do not need to be rebuilt unnecessarily. A different supplier or model still requires an assessment of quality, cost, performance, data processing, and integration with systems. Rights and contractual limitations do not disappear through an architectural choice.

**Repeatability does not mean identical answers.** A comparable assignment under the same agreements must be executable and assessable again. That differs from guaranteeing that every execution produces the same text.

**Reduced dependency on one facility does not mean complete independence.** The original implementation aims to let already available software components operate without repeatedly consulting the central facility supplying them. The application may still need an external AI service, an access-management facility, data storage, or another business system.[^3]

**Technical recovery does not automatically reverse business consequences.** Restoring earlier software is not the same as withdrawing distributed advice, reversing a decision, or restoring all changed data. The recovery plan must fit the business process.

UCF is therefore not a compliance certificate, a replacement for subject-matter expertise, or a promise of fully autonomous business operations. The technical source primarily positions the approach for bounded, verifiable work processes; greater autonomy requires additional provisions.[^3]

## 9. From vision to a bounded decision

Start with a process whose problem is recognizable and whose result can be assessed. Suitable characteristics include a clear owner, a manageable set of sources, enough comparable assignments, and existing quality criteria. The policy note in this paper is an illustration, not a prescribed first application.

Then develop a limited proposal. Describe the problem, how it is currently addressed, the expected improvement, the information needed, and which work AI will not take over. Also record the size of the investment, available assessment capacity, and the authority to stop.

Specify in advance which comparison must support the decision: the current way of working, a simple AI setup, and the proposed UCF approach. Use comparable assignments and equivalent necessary quality and safety conditions. Set acceptance criteria and limits for time, cost, and risk before the outcomes are known; no universally applicable standard is assumed here.

Within an otherwise unchanged AI setup, separately investigate which additional context helps. Compare the minimum necessary instructions with task-relevant additions, without simultaneously changing permissions, release conditions, or the model. Where feasible, repeat comparable assignments and report differences and uncertainty. This second comparison makes the effect of context selection more distinguishable from other process changes.

The trial must demonstrate more than a good final result. A missing source, an assessor's rejection, or an unavailable supplier must trigger the agreed safe behavior. The organization must be able to show that a draft cannot be used as an approved result by bypassing the required approval.

Also assess the distinctive promise. Can a rule be changed without unnecessary changes elsewhere? Can another assessor reconstruct execution? Do the agreements remain usable when another model is used? Where are further adaptation or checks still needed?

The outcome is a decision to stop, adapt, continue on a limited basis, or scale up. Further adoption is convincing only when the application has demonstrable value, remaining risks have been assessed by the appropriate accountable person, and the management burden is workable.

When a simpler setup meets the same necessary requirements at lower total cost, the additional value justifying a more extensive UCF setup must be clear. Where that value is absent, simplify the setup. Mandatory protection is not disabled to obtain a more favorable measurement.

A missing owner, insufficiently reliable sources, an unmanageable assessment burden, or risks that cannot be corrected are reasons to improve the prerequisites first. Not every process needs the same degree of formalization.

> Do not request organization-wide rollout on the strength of a convincing demonstration. Request evidence that a bounded process delivers value and remains under control.

## Conclusion

The Universal Context Foundation shifts attention from the chosen AI model to what the organization itself must continue to control: knowledge, rules, execution, assessment, and accountability.

The strategic goal is not to detach as much technology as possible from its environment. It is to prevent valuable business knowledge and decision-making from becoming unnecessarily dependent on a particular application, supplier, or employee.

That goal deserves a business assessment. Can the organization work faster or better, substantiate quality, control changes, and recover from errors at acceptable cost? Executive leadership must be able to answer those questions without first having to understand the software.

The measure is not how much context, how many layers, or how many instructions have been added. It is whether relevant information, bounded execution, and accountable results are demonstrably better organized than with a simpler alternative.

**Technology may change. Accountability for its use must remain recognizably with the organization.**

---

## Sources and status of this draft

This draft is an independent executive-level reformulation of the UCF vision, supplemented with proposed measures, responsibilities, and decision criteria. Version 0.3 builds on version 0.2 of 22 September 2026 and the supplied draft of 16 September 2026. It retains the comparison with the supplied research version of *Evaluating AGENTS.md*, v2 of 23 June 2026. This revision brings the structure and example to the level of boards and management. This English edition translates the Dutch executive paper rather than introducing additional findings.

The original chapter structure, five steps, and four areas of responsibility are retained. The refined context selection, additional assessment questions, and application overview are editorial proposals, not established implementation requirements or reported operational results. The application overview does not introduce a new UCF layer. The software, operational behavior, security, and any savings have not been independently investigated for this update. The existing technical architecture publication remains unchanged as separate supporting detail; the source metadata below is carried over from version 0.1. Technical operation has not been re-examined.

**Companion executive example:** [UCF - structure and application example](universal-context-foundation-example.md). This replaces the earlier technical example as the companion to the executive paper. It contains the four components, the five steps, and one completed application overview, not a prescribed file layout or configuration examples.

[^1]: Dennis Westerman, *Universal Context Foundation*, publication version 1.2, 11 August 2026; consulted on 16 September 2026. In particular, "The core in one minute", "Context as a Managed Product", and "The Three Peers Alongside UCF". [Original architecture publication](https://github.com/denniswesterman/denniswesterman/blob/main/publications/en/universal-context-foundation.md). GitHub source blob: `5b42288da551ddfc1756dd7057cb2a1e2852cfab`.

[^2]: The same publication, "End-to-End Through the Five UCF Stages" and "Adoption in an Organization". The governance questions and measures in this draft are an editorial elaboration of those principles.

[^3]: The same publication, "Trust, Security, and Data Boundaries", "Audit, Continuity, and Recovery", "Operating Without Stores", and "What UCF Does and Does Not Automate". The additional governance boundaries in this draft are assessment questions, not a statement that a particular implementation already meets all the conditions described.

[^4]: Thibaud Gloaguen, Niels Mündler, Mark Müller, Veselin Raychev, and Martin Vechev, *Evaluating AGENTS.md: Are Repository-Level Context Files Helpful for Coding Agents?*, preprint, [arXiv:2602.11988v2](https://arxiv.org/abs/2602.11988v2), 23 June 2026. Source used: the supplied PDF `Evaluating AGENTS.pdf`. See pp. 5-6 for setup, results, and Table 3; pp. 7-9 for behavior, conclusions, and limitations; pp. 16-17 for additional results on available documentation and file length. The findings concern the coding-agent tasks studied, not a complete UCF architecture.
