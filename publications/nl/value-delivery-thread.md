<div align="center">

# Value Delivery Thread

## De bestuurbare rode draad van klantuitkomst naar aantoonbare levering

**KLANTWAARDE · SAMENHANG · VRIJGAVE · BEWIJS**

**Toegankelijke GitHub-editie · publicatieversie 1.0 · 21 augustus 2026**

</div>

---

<p align="right"><sub><a href="../en/value-delivery-thread.md">English</a> · <strong>Nederlands</strong> · <a href="../../README.nl.md">← Architectuuroverzicht</a></sub></p>

<!-- publication-navigation:start -->
<table width="100%">
  <tr>
    <td width="33%" align="center">
      <a href="workplace-vision.md"><strong>01 · Workplace Vision</strong></a><br />
      <sub>Menselijke bedoeling → digitale ervaring</sub>
    </td>
    <td width="33%" align="center">
      <strong>02 · Value Delivery Thread</strong><br />
      <sub>Huidige paper · NL</sub>
    </td>
    <td width="34%" align="center">
      <a href="universal-context-foundation.md"><strong>03 · Universeel Context Fundament</strong></a><br />
      <sub>Organisatiecontext → bestuurbare AI</sub>
    </td>
  </tr>
</table>
<!-- publication-navigation:end -->

## De kern in één minuut

Een klant koopt geen interne productcode, prijslijst, workflow of configuration item. De klant verwacht een herkenbare uitkomst, duidelijke voorwaarden en een dienst die daadwerkelijk kan worden geleverd, ondersteund en verantwoord.

Binnen de organisatie wordt die belofte echter door meerdere vakdomeinen gevormd. Productmanagement bepaalt de betekenis en grenzen. Pricing beheert tarieven. Sales en legal leggen commerciële afspraken vast. Delivery organiseert de uitvoering. Operations beheert de werkelijke dienst en configuratie. Ieder domein heeft een eigen eigenaar, wijzigingsritme en bewijsbehoefte.

De **Value Delivery Thread (VDT)** is de aantoonbare rode draad die de bedoelde klantuitkomst verbindt met productdefinitie, productvrijgave, commerciële afspraak, levering, operationele dienstverlening, ervaring en verbetering. De thread maakt niet alleen zichtbaar wat in iedere fase gebeurt, maar ook welke betekenis, versie, beslissing en verantwoordelijkheid van de ene fase naar de volgende is doorgegeven.

Binnen deze thread vormt de **Product Delivery Catalogue (PDC)** een federatief productvrijgaveregister. De PDC bepaalt welke exacte combinatie van product, offering, prijs, voorwaarden, levering, support en servicemodel verantwoord verkoopbaar en generiek leverbaar is. De **ProductRelease** is het onveranderbare manifest van dat besluit.

> **Kernboodschap:** de vakdomeinen zijn eigenaar van hun eigen feiten; de Product Delivery Catalogue is eigenaar van compatibiliteit en productvrijgave; de Value Delivery Thread maakt de volledige samenhang van klantuitkomst tot ervaring en verbetering aantoonbaar.

De VDT is geen nieuw centraal systeem dat alle bestaande hulpmiddelen vervangt. Prijzen blijven eigendom van pricing, offertes van het commerciële domein, processen en runbooks van hun proceseigenaren en configuration items van configuratiemanagement. Eén rolgerichte ervaring kan deze bronnen samenbrengen, terwijl hun eigenaarschap, versies en waarheidscriteria helder blijven.

## Waarom waarde onderweg betekenis verliest

Een dienst begint vaak als een begrijpelijk idee: een organisatie wil voor een bepaalde doelgroep een concrete uitkomst realiseren. Zodra dat idee wordt verkocht en geleverd, krijgt het meerdere verschijningsvormen.

Productmanagement beschrijft de propositie. Finance maakt een prijsmodel en tarieven. Legal levert voorwaarden. Sales stelt een offerte samen. Delivery vertaalt de afspraak naar planning en werk. Operations bouwt en beheert de feitelijke service. Support handelt vragen en verstoringen af. Security en compliance toetsen risico's en verplichtingen. De klant ervaart uiteindelijk het gezamenlijke resultaat.

Deze verdeling is logisch, maar zonder een verbindend model ontstaan voorspelbare breuken:

- een actuele prijslijst wordt gecombineerd met een verouderde productscope;
- een offerte bevat een belofte waarvoor geen leveringsvariant is vrijgegeven;
- een proces noemt rollen of controles die niet meer bij het productontwerp passen;
- een servicemodel beschrijft vereiste componenten, terwijl de werkelijk gerealiseerde configuratie niet herleidbaar is naar de geaccepteerde afspraak;
- een portaal toont een groen vinkje zonder te kunnen uitleggen wie wat heeft goedgekeurd en op basis van welk bewijs;
- een nieuwe productrelease wijzigt ongemerkt de betekenis van bestaande offertes of actieve diensten.

De kern van het probleem is niet dat informatie op verschillende plaatsen staat. Het probleem is dat de organisatie niet eenduidig kan bepalen **welke bedoeling werd vertaald, welke combinatie gold, waarom die combinatie was toegestaan, wat werkelijk is afgesproken en uitgevoerd en welke waarde de klant uiteindelijk ervoer**.

## Van centrale opslag naar federatieve samenhang

De term *apart* leidt gemakkelijk tot het verkeerde architectuurdebat. Logische scheiding betekent niet automatisch dat ieder domein een eigen applicatie, database of team nodig heeft. Het betekent eerst dat ieder object een eigen betekenis, eigenaar, levenscyclus en waarheidscriterium heeft.

Vier vormen van scheiding moeten daarom uit elkaar worden gehouden.

### Semantische scheiding

Objecten beantwoorden verschillende vragen. Een ProductVersion beschrijft wat de organisatie belooft. Een PriceBook bevat welke bedragen in een markt en periode gelden. Een QuoteSnapshot legt vast wat aan één klant is aangeboden. Een CI beschrijft een werkelijk beheerd onderdeel. Deze objecten mogen niet als synoniemen worden behandeld.

### Bestuurlijke scheiding

Besluiten hebben verschillende bevoegde eigenaren. De producteigenaar bepaalt niet zelfstandig een juridisch bindende clausule. De CMDB-beheerder bepaalt niet welke klantuitkomst verkoopbaar is. Duidelijk eigenaarschap voorkomt dat een technisch wijzigingsrecht ongemerkt een commercieel of bestuurlijk besluit wordt.

### Technische scheiding

Fysieke opsplitsing in applicaties, services of databases is pas nodig wanneer schaal, beveiliging, continuïteit, gespecialiseerde functionaliteit, functiescheiding of onafhankelijke releasecycli dit rechtvaardigen. Een modulair opgebouwde applicatie kan in een eerste fase meerdere logisch gescheiden domeinen bevatten, zolang de grenzen en rechten werkelijk worden gehandhaafd.

### Ervaringsintegratie

Mensen hoeven de interne complexiteit niet te dragen. Een rolgericht portaal kan informatie uit meerdere bronnen samenbrengen en acties naar de juiste bron routeren. Eén gebruikerservaring is dus verenigbaar met meerdere gezaghebbende bronnen.

**Eén ervaring betekent niet één database. Meerdere bronnen betekenen niet meerdere waarheden over hetzelfde feit.**

## Wat de Value Delivery Thread is

De Value Delivery Thread is binnen dit paper een **overkoepelend traceerbaarheidsmodel**. Zij verbindt normatieve definities, bestuurlijke besluiten, commerciële snapshots, klantspecifieke uitvoeringsinstanties, operationele werkelijkheid, bewijs en ervaring. Daardoor kan de organisatie zowel vooruit als achteruit door de dienstverlening redeneren.

Vooruit traceerbaar betekent dat vanuit een klantuitkomst zichtbaar wordt welke ProductVersion, OfferingVersion en ProductRelease zijn gebruikt, tot welke afspraken en instances zij hebben geleid en hoe de dienstverlening wordt ervaren. Achteruit traceerbaar betekent dat vanuit een incident, CI, Service Instance of klantafspraak kan worden teruggevonden welke belofte, prijs, voorwaarden, leveringsblauwdruk en besluiten golden.

De VDT bestaat uit drie verbonden perspectieven:

```text
DEFINITIE EN VRIJGAVE
Klantuitkomst → ProductVersion → Commercial Offering → ProductRelease

VERBINTENIS EN UITVOERING
ProductRelease → QuoteSnapshot → Contract / OrderLine
→ Delivery Instance → Service Instance → CI-relaties

ERVARING EN VERBETERING
Operationeel bewijs → Ervaring → Change Decision
→ volgende versie en ProductRelease
```

Deze perspectieven zijn geen drie afzonderlijke producten of systemen. Zij beschrijven dezelfde rode draad op definitie-, transactie- en instantieniveau. De thread is daarom ook niet hetzelfde als een lineair proces: meerdere processen, teams en platformen kunnen bijdragen terwijl de relaties en betekenis traceerbaar blijven.

De VDT centraliseert niet alle inhoud. Zij centraliseert de **aantoonbaarheid van de samenhang** door stabiele identiteiten, onveranderbare versies, geldigheid, beslissingen, bewijs en gecontroleerde overgangen te verbinden. Een eventueel VDT-readmodel is een projectie van die relaties en geen nieuwe gezaghebbende bron.

### Een voorgesteld architectuurpatroon

De term Value Delivery Thread wordt hier gebruikt voor een voorgesteld architectuurpatroon en een gemeenschappelijke bestuurstaal. Het is geen afzonderlijke ISO-norm en geen claim dat iedere organisatie dezelfde objectnamen, systemen of governance moet gebruiken. De naam *thread* benadrukt duurzame traceerbaarheid door domeinen en tijd; de term *keten* blijft in dit paper gereserveerd voor een volgorde van activiteiten en besluiten.

## De Product Delivery Catalogue als vrijgaveknooppunt

De Product Delivery Catalogue is binnen de Value Delivery Thread een **federatief productvrijgaveregister en bestuurlijk vrijgavepunt**. Zij legt vast welke exacte versies of momentopnamen uit verschillende vakdomeinen samen één verkoopbare en generiek leverbare klantbelofte vormen.

De PDC beheert minimaal:

- de stabiele identiteit van het product;
- de goedgekeurde ProductVersion met klantuitkomst, scope, verplichtingen en grenzen;
- de toegestane Commercial Offering voor markt, segment, kanaal en contractvorm;
- de compatibiliteitsregels tussen product, prijs, voorwaarden, levering, support en servicemodel;
- de ProductRelease waarin exacte versies worden vastgezet;
- de gereedheidsbesluiten, geldigheid, eigenaren, goedkeuringen en bewijsverwijzingen;
- de beheerde verwijzing van een vrijgegeven definitie naar offerte, order, Delivery Instance en Service Instance;
- de relevante bewijs- en feedbackverwijzingen voor een volgende wijzigingsbeslissing.

De PDC vervangt de vakdomeinen niet. Zij maakt de samenhang **op het moment van productvrijgave** expliciet en beoordeelbaar. Een verwijzing is daarom geen losse hyperlink naar een mogelijk veranderend document, maar een beheerd contract met object-ID, versie-ID, bronhouder, status, geldigheid en verificatie. De VDT draagt vervolgens de traceerbaarheid door offerte, verbintenis, uitvoering, operationele service, ervaring en verbetering.

### Een capability binnen de thread

De term Product Delivery Catalogue wordt eveneens gebruikt als voorgestelde capability en niet als normnaam. De PDC is niet de volledige Value Delivery Thread: zij bestuurt de productdefinitie, compatibiliteit en vrijgave, maar wordt omringd door gezaghebbende prijs-, commerciële, proces-, delivery-, service- en configuratiedomeinen.

De precieze implementatie kan verschillen. De ontwerpverplichting blijft gelijk: de organisatie moet kunnen reconstrueren welke betekenis, prijs, voorwaarden, leveringswijze, service-eisen en besluiten samen geldig waren, welke klantafspraak daaruit ontstond en wat vervolgens werkelijk is geleverd en ervaren.

## Zeven lagen van een bestuurbare dienst

Een Value Delivery Thread kan alleen betekenisvol blijven wanneer de productdefinitie zelf voldoende compleet is. Het onderstaande zevenlagenmodel vormt daarvoor een inhoudelijke basis; de PDC bindt de relevante versies van deze perspectieven bij de productvrijgave.

| Laag | Besturende vraag | Minimale definitie |
|---|---|---|
| **Klantuitkomst en context** | Voor wie moet welke betekenisvolle verandering ontstaan? | Doelgroep, behoefte, gebruikscontext, gewenste uitkomst en succesmaatstaven. |
| **Propositie en servicebelofte** | Wat belooft de organisatie concreet? | Scope, ervaring, resultaten, inclusies, uitsluitingen, voorwaarden en verantwoordelijkheden. |
| **Economische logica** | Onder welke aannames is de belofte houdbaar? | Prijseenheid, kostenstructuur, capaciteit, vraagprofiel, margegrenzen en varianten. |
| **Leveringsblauwdruk** | Hoe wordt de belofte herhaalbaar gerealiseerd? | Fasen, rollen, capabilities, afhankelijkheden, controles, doorlooptijd, acceptatie en bewijs. |
| **Ondersteuning en servicegrenzen** | Hoe blijft de dienst bruikbaar en herstelbaar? | Serviceniveaus, supportscope, escalatie, monitoring, continuïteit, onderhoud en exit. |
| **Governance en bewijs** | Wie mag wat besluiten en hoe wordt werking aangetoond? | Eigenaarschap, risico's, controles, goedkeuringen, uitzonderingen, indicatoren en auditspoor. |
| **Lifecycle en leren** | Wanneer verandert, migreert of eindigt de dienst? | Status, geldigheid, versies, feedback, review, migratie, uitfasering en bewaartermijnen. |

De lagen vormen geen zeven documenten die altijd afzonderlijk moeten worden geschreven. Zij zijn zeven samenhangende perspectieven waarop een productdefinitie compleet en toetsbaar moet zijn. Ontbreekt bijvoorbeeld de supportgrens, dan kan een commercieel aantrekkelijke propositie nog steeds operationeel onhoudbaar zijn.

## Governance, Design en Configuration

De Value Delivery Thread verbindt drie verantwoordelijkheidslagen zonder hun eigenaarschap samen te voegen.

### Governance

Governance bepaalt wat de dienst moet bereiken, beschermen en aantonen, en waarom. Hier worden klantdoel, eigenaarschap, beslisrechten, risicogrenzen, commerciële kaders, uitzonderingen, lifecycle en vrijgavebeleid vastgesteld.

Governance beslist niet ieder technisch detail. Zij bepaalt wel wie bevoegd is om betekenis, prijs, voorwaarden, leverbaarheid en risico te beoordelen en welk bewijs nodig is voordat een combinatie mag worden gebruikt.

### Design

Design vertaalt de bedoeling en grenzen naar een samenhangende product-, commerciële, leverings- en servicearchitectuur. Hier ontstaan de ProductVersion, Commercial Offering, het PriceModel, de Delivery Blueprint, het Support Model en het Service Model.

Design zorgt ervoor dat de afzonderlijke vakperspectieven op elkaar passen. Een prijsmodel moet bijvoorbeeld aansluiten op de meetbare eenheid in de service. Een acceptatiecriterium moet uitvoerbaar en aantoonbaar zijn. Een supportbelofte moet passen bij monitoring, kennis en capaciteit.

### Configuration

Configuration maakt het goedgekeurde ontwerp concreet en houdt het betrouwbaar. Het gaat om tarieven, clausuleversies, templates, workflowconfiguratie, runbooks, service-instances, CI-relaties, monitoring en bewijsregistratie.

Niet alles wat onder Configuration valt, hoort daarom in de PDC te worden opgeslagen. De PDC verwijst naar de goedgekeurde versies en bewaakt de combinatie; het verantwoordelijke domein beheert de inhoud en dagelijkse werkelijkheid.

De thread blijft gesloten wanneer operationele ervaring en bewijs via een beoordeelde wijzigingsbeslissing terugstromen naar Design en Governance. Zonder die terugkoppeling wordt de PDC een vrijgavearchief en ontbreekt de lerende rode draad.

## De objecten die niet met elkaar mogen worden verward

Een bestuurbare Value Delivery Thread begint met heldere objectgrenzen. De belangrijkste begrippen zijn hieronder compact gedefinieerd.

### Product, ProductVersion en Commercial Offering

Een **Product** is de stabiele identiteit van een type klantuitkomst. Het bevat geen actuele bedragen, klantconfiguraties of uitvoeringsstatus.

Een **ProductVersion** is een na goedkeuring onveranderbare specificatie van de uitkomst, doelgroep, scope, inclusies, uitsluitingen, verplichtingen, kwaliteit en grenzen. Een correctie op een gepubliceerde versie leidt tot een nieuwe versie; de vorige blijft herkenbaar voor historie en bewijs.

Een **Commercial Offering** of **OfferingVersion** verpakt één ProductVersion voor een markt, segment, kanaal en contractvorm. Zij beschrijft onder meer geschiktheid, bestelvoorwaarden, looptijd en de verwijzing naar het prijsmodel. De toevoeging *Commercial* voorkomt verwarring met een eventueel gelijknamig service-object in IT-servicemanagement.

### ProductRelease

Een **ProductRelease** is het onveranderbare, tijdgebonden manifest dat de exacte productcombinatie vrijgeeft. Dit object is niet hetzelfde als een ProductVersion. De productbelofte kan inhoudelijk gelijk blijven terwijl bijvoorbeeld een nieuw tarief, offertemodel of compatibele leveringsblauwdruk wordt vrijgegeven.

### Prijsmodel, PriceBook en offerteprijs

Het **PriceModel** beschrijft de berekeningsbetekenis: meeteenheid, facturatiefrequentie, formule, staffellogica en grenzen voor kortingen. De betekenis *per gebruiker per maand* hoort bij het product- en offeringontwerp.

Het **PriceBook** bevat markt-, valuta- en tijdgebonden bedragen, staffels en tarieven. Een traditionele prijslijst is bij voorkeur een gegenereerde leesweergave van dit beheerde PriceBook, niet een zelfstandig Word- of Excelbestand dat een tweede prijswaarheid creëert.

De **offerteprijs** is het voor één klant berekende resultaat op basis van een geldige release, hoeveelheden, geselecteerde opties, tarieven, toegestane korting en goedkeuring. Zij wordt vastgelegd in de offerte-snapshot en hoeft later niet gelijk te zijn aan het actuele PriceBook.

### Offertesjabloon, offerteversie en offerte-snapshot

Een **QuoteTemplate** is een herbruikbare documentstructuur met veldmapping en verwijzingen naar goedgekeurde clausules. Het is nog geen klantafspraak.

Een **QuoteVersion** is een concrete revisie van het commerciële voorstel. Een verzonden revisie wordt niet overschreven.

Een **QuoteSnapshot** is de onveranderbare momentopname van wat werkelijk is verzonden of geaccepteerd: ProductRelease, hoeveelheden, prijsinputs, berekende uitkomst, kortingen, voorwaarden, afwijkingen, goedkeuringen en geldigheid. Deze snapshot is de historische bewijsbron voor de commerciële afspraak, terwijl pricing eigenaar blijft van actuele tarieven.

### Proces, Delivery Blueprint, runbook en Delivery Instance

Een **Process** beschrijft de organisatiebrede norm voor doel, verantwoordelijkheden, besluiten, controles en resultaten. Het is geen schermhandleiding.

Een **Delivery Blueprint** vertaalt die norm naar het productgebonden leveringsontwerp met resultaten, fasen, rollen, controles, acceptatiecriteria, bewijs, stopvoorwaarden en herstelpaden.

Een **runbook** of procedure bevat team- of platformspecifieke werkinstructies. Deze instructies mogen sneller veranderen wanneer de klantbelofte, functiescheiding, controle en bewijsvoering gelijk blijven.

Een **Delivery Instance** is de klantspecifieke uitvoering van een vrijgegeven blueprint. Zij bevat planning, werkitems, toegewezen mensen, werkelijke beslissingen, afwijkingen en bewijs. Het proceshandboek kan als samengestelde publicatieweergave processen, blueprints en runbooks ontsluiten, maar wordt daarmee geen nieuwe gezaghebbende bron.

### Service Model, Service Instance en CI

Een **Service Model** is het type-model van de benodigde servicecomponenten, relaties, verantwoordelijkheden, monitoring en support. Het beschrijft wat voor dit type dienst aanwezig moet zijn, niet welke concrete resources een klant al heeft.

Een **Service Instance** is de werkelijk gerealiseerde dienst voor één klant en contractuele context. Zij verwijst naar de gebruikte ProductRelease en verbindt de klantafspraak, Delivery Instance, support en operationele werkelijkheid.

Een **configuration item (CI)** is een daadwerkelijk beheerd onderdeel waarvan identiteit, eigenschappen en relaties onder configuratiebeheer vallen. Niet ieder asset of telemetriesignaal hoeft een CI te zijn. De CMDB beheert de actuele CI's en relaties; zij bepaalt niet zelfstandig de productbelofte.

### Portaal of Product Cockpit

Het **portaal** is een rolgerichte presentatie- en interactielaag. Het combineert gegevens voor productowners, sales, delivery, operations, support en andere gebruikers en routeert wijzigingen naar het bevoegde domein.

Het portaal kan de Value Delivery Thread als één samenhangende gebruikerservaring tonen. Het mag eigen voorkeuren, sessiestaat en tijdelijke concepten beheren, maar hoort geen actuele prijs, juridische clausule, productvrijgave of CI-status tot eigen waarheid te maken. Een groen vrijgavesignaal is een afgeleide weergave van concrete besluiten en bewijs, geen los handmatig vinkje.

## Waar de gezaghebbende informatie hoort

Niet één systeem is voor alles de *source of truth*. Gezaghebbend bronhouderschap wordt per object en waar nodig per attribuut bepaald.

| Informatie of object | Gezaghebbend domein | Functie binnen de Value Delivery Thread |
|---|---|---|
| **Product, ProductVersion en Commercial Offering** | Productgovernance | Vormt de normatieve productlijn; de PDC beheert of registreert identiteit en versie. |
| **ProductRelease en vrijgavebesluit** | PDC en productgovernance | Is de gezaghebbende bron voor de exact vrijgegeven combinatie. |
| **PriceModel, PriceBook en tarieven** | Pricing, finance of CPQ | De ProductRelease bindt de exacte goedgekeurde model- en tariefversie. |
| **Templates, voorwaarden en clausules** | Commercieel en juridisch contentbeheer | De ProductRelease bindt de exacte template-, terms- en clausuleversie. |
| **Offerte, revisie en QuoteSnapshot** | CRM, CPQ of offertedossier | De snapshot verbindt de vrijgegeven combinatie met wat aan één klant is aangeboden of geaccepteerd. |
| **Contract of OrderLine** | Contract-, order- of ERP-domein | Verbindt de geaccepteerde afspraak met facturatie, levering en service. |
| **Processen en beleidsmatige werkwijze** | Procesmanagement of kwaliteitsmanagement | Levert de toepasselijke norm, rollen, controles en verplichte uitkomsten. |
| **Delivery Blueprint en Delivery Instance** | Delivery design en delivery execution | Verbindt het vrijgegeven ontwerp met wat voor één klant werkelijk is uitgevoerd. |
| **Runbooks en werkinstructies** | Operations of kennisomgeving | Behoudt compatibiliteit en de werkelijk gebruikte instructieversie. |
| **Service Model** | Servicearchitectuur of configuratiemanagement | De ProductRelease bindt de exacte ontwerpversie en vereiste relaties. |
| **Service Instance en CI-relaties** | Service-inventory en CMDB | Verbindt klantafspraak en release met de actuele operationele werkelijkheid. |
| **Gecombineerde gebruikersweergave** | Portaal en read models | Presenteert de thread zonder een nieuwe inhoudelijke waarheid te creëren. |

Een kopie is niet automatisch een concurrerende master. Het doel bepaalt de autoriteit:

- de domeinbron is gezaghebbend voor de actuele definitie;
- de ProductRelease is gezaghebbend voor welke combinatie is vrijgegeven;
- de QuoteSnapshot is gezaghebbend voor wat op dat moment is aangeboden of geaccepteerd;
- de Delivery Instance is gezaghebbend voor wat werkelijk is uitgevoerd;
- de Service Instance en CMDB zijn gezaghebbend voor de actuele operationele samenstelling.

De Value Delivery Thread is zelf geen extra master naast deze bronnen. Zij is de beheerste relatie tussen hun identiteiten, versies, besluiten, snapshots, instances en bewijs.

## De ProductRelease als verbindend object

De ProductRelease is binnen de Value Delivery Thread het object waarmee de federatieve productvrijgave bestuurbaar wordt. Zonder dit manifest blijft de PDC een verzameling verwijzingen waarvan niet duidelijk is of de combinatie ooit samen is beoordeeld.

Een release kan bijvoorbeeld de volgende samenstelling bevatten:

```text
ProductVersion v4
+ Commercial Offering NL/enterprise v3
+ PriceModel per gebruiker/maand v2
+ PriceBook NL/EUR 2026-Q3 v2
+ Terms en ClauseSet v5
+ QuoteTemplate v8
+ Delivery Blueprint v6
+ Support Model v2
+ Service Model v3
+ markt, segment, kanaal, valuta, regio en geldigheidsperiode
+ eigenaren, besluiten, uitzonderingen en bewijs
= ProductRelease PR-2026-014
```

Iedere verwijzing bevat minimaal:

- artefacttype en brondomein;
- stabiele externe object-ID en onveranderbare versie-ID;
- status en bevoegde eigenaar;
- `approved_at`, `effective_from`, `effective_to` en `recorded_at`;
- eventuele intrekking of `withdrawn_at`;
- goedkeurings- en bewijsverwijzing;
- compatibiliteitsregel en datum van laatste verificatie.

Een release verwijst nooit naar `latest`. Een nieuwe bronversie verandert een bestaande release niet stilzwijgend. Zij leidt tot een nieuwe of opnieuw beoordeelde ProductRelease wanneer de combinatie voor toekomstig gebruik moet veranderen.

Voor één klant, context en datum hoort de selectielogica hoogstens één geldige combinatie op te leveren. Geen geldige uitkomst blokkeert de transactie. Meerdere uitkomsten zijn eveneens een fout, omdat de organisatie dan niet eenduidig heeft bepaald welke combinatie geldt.

## Drie verschillende gereedheidsbesluiten

Lifecycle en gereedheid zijn niet hetzelfde. *Concept*, *goedgekeurd*, *actief* en *ingetrokken* beschrijven de levenscyclus van een object. *Verkoopbaar*, *generiek leverbaar* en *klantspecifiek operationeel gereed* zijn afzonderlijke beslissingen met eigen criteria en bewijs.

| Gate | Beslisniveau | Minimaal bewijs |
|---|---|---|
| **Verkoopbaar** | ProductRelease | Goedgekeurd product en offering, geldige prijs, voorwaarden, template, markt- en klantgeschiktheid en commerciële en juridische besluiten. |
| **Generiek leverbaar** | ProductRelease | Delivery Blueprint, Service Model, support, capaciteitspolicy, mensen en kennis, security en compliance, monitoring, acceptatiebewijs en fout- en herstelpad. |
| **Klantspecifiek operationeel gereed** | Contract, Delivery Instance en Service Instance | Geldige acceptatie, concrete capaciteit, uitgevoerde controls, gerealiseerde service, CI-koppelingen, monitoring, supportoverdracht en klantspecifiek bewijs. |

Een product kan inhoudelijk zijn goedgekeurd maar tijdelijk niet bestelbaar zijn door ongeldige prijzen, capaciteitsschaarste, een stop-sell of een verlopen juridische beoordeling. Andersom kan een generiek leveringsmodel bestaan zonder dat voor een specifieke klant de benodigde capaciteit, afhankelijkheden of controls al zijn gerealiseerd.

Bestelbaarheid is daarom een afgeleide toestand:

```text
bestelbaar =
  release actief
  EN verkoopbaar geslaagd
  EN generiek leverbaar geslaagd
  EN context en datum geldig
  EN geen stop-sell
```

Een gatebesluit bevat de gebruikte criteriaversie, het bewijs, de beslisser, het tijdstip, de geldigheidsduur en eventuele uitzondering. Een oranje status zonder eigenaar, reden en vervaldatum is geen bestuurbaar besluit.

## De Value Delivery Thread van bedoeling naar ervaring

De onderstaande keten toont de opeenvolgende activiteiten en objecten. De Value Delivery Thread is de blijvende traceerbaarheid over deze hele keten heen: zij bewaart waarom iedere overgang plaatsvond, op basis van welke versie en met welk bewijs.

```text
KLANTUITKOMST → PRODUCTVERSION → COMMERCIAL OFFERING → PRODUCTRELEASE
→ QUOTEVERSION → QUOTESNAPSHOT → CONTRACT / ORDERLINE
→ DELIVERY INSTANCE → SERVICE INSTANCE → CI-RELATIES
→ ERVARING EN BEWIJS → BEOORDEELDE VERBETERING
```

### 1. Bedoeling en klantuitkomst

De keten begint met de behoefte, niet met een productcode of tool. De organisatie bepaalt voor wie welke uitkomst waardevol is, in welke gebruikscontext, met welke grenzen en hoe succes herkenbaar wordt.

### 2. Product- en offeringontwerp

De uitkomst wordt vertaald naar een ProductVersion en Commercial Offering. Scope, inclusies, uitsluitingen, verantwoordelijkheden, prijseenheid, leveringsvarianten, supportgrenzen, risico's en bewijsbehoefte worden samen ontworpen.

### 3. Productvrijgave

De PDC controleert of de exacte versies uit de vakdomeinen compatibel, geldig, verkoopbaar en generiek leverbaar zijn. Alleen de goedgekeurde ProductRelease mag als basis voor een nieuwe offerte worden geselecteerd.

### 4. Offerte en commerciële snapshot

Sales kiest een geldige release, voegt klantgegevens, hoeveelheden en toegestane opties toe en laat prijs en voorwaarden door de bevoegde bronnen resolveren. Afwijkingen buiten guardrails worden als expliciete uitzondering beoordeeld. Bij verzending ontstaat een onveranderbare QuoteSnapshot.

### 5. Acceptatie en contractuele verbintenis

Acceptatie is een gecontroleerde overgang, geen wijziging van één veld. Het systeem controleert onder meer identiteit, geldigheid, bevoegdheid, volledigheid, dubbele verwerking en de gekozen regel voor een eventuele stop-sell.

Uit de geaccepteerde snapshot ontstaat een contractuele verbintenis of **OrderLine**. Dit object vormt de bestuurlijke brug naar levering, facturatie en service. Een herhaald acceptatieverzoek mag niet tot een tweede order leiden; de overgang moet idempotent zijn.

### 6. Klantspecifieke levering

De OrderLine activeert een Delivery Instance op basis van de vrijgegeven Delivery Blueprint. Werkitems, planning, resources, controles, afhankelijkheden, afwijkingen en bewijs worden voor deze klant vastgelegd.

De uitvoering verwijst naar de exacte release en snapshot. Daardoor blijft zichtbaar of het team uitvoert wat daadwerkelijk is verkocht, ook wanneer inmiddels een nieuwere productrelease bestaat.

### 7. Realisatie van de Service Instance

Op basis van het Service Model wordt een concrete Service Instance opgebouwd. Vereiste componenten worden aan werkelijke CI's en relaties gekoppeld. De CMDB registreert de operationele werkelijkheid; de Service Instance bewaart de samenhang met klant, contract en ProductRelease.

### 8. Operationele gereedheid en overdracht

De dienst wordt pas operationeel gereed verklaard wanneer de klantspecifieke criteria aantoonbaar zijn gehaald. Monitoring, supportoverdracht, kennis, eigenaarschap, securitycontrols, continuïteit en herstel moeten werkelijk beschikbaar zijn.

Ontbreekt een vereist CI, is een control niet uitgevoerd of bestaat geen supportoverdracht, dan stopt de overgang. Een gedeeltelijk gerealiseerde dienst wordt niet groen gemaakt om de workflow administratief af te ronden.

### 9. Gebruik, support en service-management

Tijdens gebruik worden beschikbaarheid, kwaliteit, ervaring, incidenten, verzoeken, capaciteit, kosten, compliance en klantuitkomsten gevolgd. ISO/IEC 20000-1 biedt hierbij een breder servicemanagementkader voor planning, ontwerp, transitie, levering en voortdurende verbetering, maar schrijft geen PDC of systeemindeling voor.

### 10. Feedback en gecontroleerde verandering

Feedback wordt herleid naar de juiste laag en eerst omgezet in een **Change Decision**. Een incident kan een CI-correctie vragen, een terugkerende uitvoeringsfout een runbook- of blueprintwijziging, en structureel ontbrekende klantwaarde een nieuwe ProductVersion. Niet ieder signaal veroorzaakt dus dezelfde soort wijziging en feedback wijzigt een actieve release nooit rechtstreeks.

Een nieuwe release wijzigt bestaande QuoteSnapshots, OrderLines, Delivery Instances of Service Instances nooit automatisch. Migratie is een apart besluit met bronversie, doelversie, impactanalyse, communicatie, bewijs en waar nodig instemming van de klant.

## Wanneer moet iets werkelijk apart worden beheerd

Een object verdient een eigen logisch domein wanneer één of meer van de volgende kenmerken wezenlijk verschillen:

- **betekenis en identiteit:** het object beantwoordt een andere bedrijfsvraag en heeft een eigen stabiele sleutel;
- **eigenaar en bevoegdheid:** een andere rol mag inhoud of vrijgave bepalen;
- **levenscyclus en wijzigingstrigger:** het object ontstaat, wijzigt en eindigt op andere momenten;
- **wijzigingsritme:** tarieven kunnen maandelijks veranderen terwijl een productscope jaren gelijk blijft;
- **geldigheid en tijd:** bedragen, voorwaarden en configuraties kennen verschillende ingangs- en einddata;
- **hergebruik en cardinaliteit:** één blueprint kan door veel releases worden gebruikt en één release door veel offertes;
- **beveiliging en privacy:** klantoffertes en CI-details hebben andere toegangsgrenzen dan openbare productinformatie;
- **bewaring en bewijs:** commerciële snapshots, operationele logs en ontwerpdocumenten kennen andere bewaarplichten;
- **normatief of feitelijk karakter:** een Service Model beschrijft wat vereist is, een CMDB wat werkelijk aanwezig is;
- **transactionele grens:** een wijziging moet onafhankelijk kunnen slagen, falen, worden herhaald of worden hersteld.

Fysieke opsplitsing volgt pas daarna. Een aparte service of applicatie is vooral zinvol wanneer teams onafhankelijk moeten leveren, een specialistische capability nodig is, gegevens strenger moeten worden geïsoleerd, beschikbaarheid verschilt of schaal en releasefrequentie aantoonbaar uiteenlopen.

Voor een eerste implementatie is een **modulaire monoliet** vaak passend. Product, pricing, commercie, delivery, configuratie en portal blijven afzonderlijke modules met eigen objecten en rechten, maar hoeven nog niet als microservices te worden verdeeld. Dit vermindert technische complexiteit zonder de architectuurgrenzen op te geven.

## Beslisregels voor versies en wijzigingen

Niet iedere wijziging maakt een nieuwe productversie noodzakelijk. De betekenis en impact bepalen het juiste niveau.

| Wijziging | Benodigde versie of vrijgave | Effect op bestaande afspraken |
|---|---|---|
| **Klantuitkomst, scope, inclusie, uitsluiting of verplichting** | Nieuwe ProductVersion en ProductRelease | Alleen via gecontroleerde migratie. |
| **Markt, segment, kanaal, looptijd of bestelvoorwaarde** | Nieuwe OfferingVersion en ProductRelease | Geen automatische wijziging. |
| **Rekeneenheid of prijsformule** | Nieuw PriceModel, nieuwe OfferingVersion en ProductRelease | Geen automatische herberekening. |
| **Alleen bedrag, tarief of staffel** | Nieuwe PriceBook-versie en nieuwe of herbeoordeelde ProductRelease | Bestaande QuoteSnapshots blijven gelijk. |
| **Huisstijl of lay-out zonder betekeniswijziging** | Nieuwe QuoteTemplate-versie | Geen effect op verzonden documenten. |
| **Clausule of juridische voorwaarde** | Nieuwe Terms- of ClauseSet-versie en ProductRelease | Bestaande overeenkomst blijft gelden volgens het toepasselijke wijzigingsmechanisme. |
| **Resultaat, rol, control, acceptatiecriterium of bewijs** | Nieuwe DeliveryBlueprint-versie en ProductRelease | Lopende levering alleen na impactbesluit. |
| **Compatibele runbookstap zonder extern of controle-effect** | Nieuwe runbookpatch | Registreer de werkelijk gebruikte versie; release kan gelijk blijven. |
| **Vereist servicetype, relatie of supportverantwoordelijkheid** | Nieuwe ServiceModel-versie en ProductRelease | Beoordeel migratie van actieve instances. |
| **Actuele CI-status, IP-adres of resource-eigenschap** | Alleen configuratiemanagement of CMDB | Geen ProductRelease. |
| **Klantspecifieke hoeveelheid of toegestane korting** | Nieuwe QuoteVersion en QuoteSnapshot | Geen ProductRelease. |
| **Afwijking buiten een commerciële of operationele guardrail** | Expliciet uitzonderingobject en bevoegd besluit | Nooit verbergen in vrije tekst. |

De hoofdregel is eenvoudig: **wijzigt de klantbetekenis, commerciële berekening, verplichting, beheersing of aantoonbaarheid, dan ontstaat een nieuwe gecontroleerde versie en meestal een nieuwe ProductRelease. Wijzigt alleen een compatibele uitvoeringsinstructie of actuele configuratiestatus, dan kan de ProductRelease gelijk blijven.**

## Tijd, intrekking, noodstop en herstel

Een versieerbaar model is pas betrouwbaar wanneer ook tijd en uitzonderingssituaties expliciet zijn.

Gepubliceerde versies worden niet overschreven of hard verwijderd wanneer een release, offerte of instantie ernaar verwijst. Correcties ontstaan als nieuwe versies. Intrekking beëindigt toekomstig gebruik, maar wist het verleden niet.

Een verzonden offerte kan alleen worden geaccepteerd binnen haar geldigheid. De organisatie moet daarnaast expliciet bepalen wat gebeurt wanneer de onderliggende release na verzending een stop-sell krijgt. Sommige risico's blokkeren alleen nieuwe offertes; andere vereisen dat ook openstaande acceptaties of actieve leveringen worden beoordeeld.

Een noodstop bevat daarom afzonderlijke regels voor:

- nieuwe verkoop en nieuwe offertegeneratie;
- acceptatie van reeds verzonden offertes;
- gestarte maar nog niet afgeronde Delivery Instances;
- actieve Service Instances en bestaande contractuele verplichtingen;
- communicatie, escalatie, herstel en hervatting.

Overgangen tussen systemen hoeven niet te doen alsof één technische alles-of-niets-transactie bestaat. Een aantoonbare statusmachine met correlatie-ID, idempotente stappen, gecontroleerde retries en een expliciet menselijk herstelpad is vaak realistischer. De organisatie moet kunnen zien waar de keten stopte, welke stap veilig kan worden herhaald en wie een uitzondering mag besluiten. De VDT behoudt daarbij de end-to-end correlatie, ook wanneer een deelstap faalt of later wordt hervat.

## Mensgerichte bediening zonder verlies van controle

De interne architectuur mag complex zijn; het werk van mensen hoeft dat niet te zijn. Productowners moeten kunnen zien welke afhankelijkheid een vrijgave blokkeert. Sales moet alleen geldige combinaties kunnen kiezen. Delivery moet de geaccepteerde afspraak en verplichte resultaten herkennen. Operations moet weten welke Service Instance en CI's bij de belofte horen. Een reviewer moet het concrete bewijs kunnen beoordelen waarop een besluit rust. De Product Cockpit maakt daarmee de relevante doorsnede van de Value Delivery Thread bedienbaar.

ISO 9241-210:2019 ondersteunt het mensgericht ontwerpen van zulke interactieve systemen en werkstromen. Rollen, taken, gebruikscontext, betrokkenheid van gebruikers, evaluatie en iteratie horen daarom bij het ontwerp van de Product Cockpit en de overdrachten in de keten.

De norm bepaalt echter niet waar prijslijst, CMDB, offertebibliotheek of proceshandboek moeten worden opgeslagen. Zij schrijft ook geen VDT, PDC, datamodel, broneigenaarschap of technische domeinscheiding voor. **ISO 9241-210 is binnen deze architectuur een lens voor mensgerichte ontwerp- en gebruikskwaliteit, niet de bron van de thread- of catalogusindeling.**

Een goede geïntegreerde ervaring biedt per rol:

- alleen de relevante informatie en toegestane acties;
- duidelijke herkomst, versie en geldigheid;
- zichtbare ontbrekende criteria en blokkades;
- begrijpelijke reden en eigenaar van een besluit;
- veilige foutmeldingen, herstel en escalatie;
- toegankelijke interactie voor verschillende vaardigheden, apparaten en werksituaties.

## Eigenaarschap en menselijke verantwoordelijkheid

Automatisering kan criteria controleren, versies selecteren, bewijs verzamelen en ongeldige overgangen blokkeren. Zij vervangt niet de bevoegdheid om klantwaarde, risico, prijs, juridische verplichting of operationele acceptatie te beoordelen.

De belangrijkste verantwoordelijkheden blijven verdeeld:

- de **producteigenaar** bewaakt klantuitkomst, scope, ProductVersion en lifecycle;
- de **commercial- en pricingeigenaar** beheert PriceModel, PriceBook, guardrails en economische houdbaarheid;
- de **juridisch eigenaar** beheert voorwaarden, clausules, uitzonderingen en toepasselijkheid;
- de **delivery-eigenaar** beheert blueprint, capaciteit, uitvoerbaarheid, acceptatie en Delivery Instances;
- de **service- en operationeel eigenaar** beheert Service Model, Service Instances, support, continuïteit en herstel;
- de **configuration manager** beheert de kwaliteit van relevante CI's, relaties en configuratiebaselines;
- de **security-, privacy- en compliance-eigenaren** beoordelen toepasselijke risico's, controls en bewijs;
- de **klant en gebruiker** leveren signalen over bruikbaarheid, ervaring en gerealiseerde uitkomst;
- de **PDC- of releasegovernance** bewaakt dat alleen een aantoonbaar compatibele combinatie wordt vrijgegeven.

Een releasebesluit is pas betekenisvol wanneer duidelijk is welke eigenaar welk onderdeel heeft goedgekeurd. Een generieke status *approved* zonder besliscontext verbergt juist verantwoordelijkheid.

## Security, compliance en herkomst als onderdeel van het ontwerp

Security en compliance worden niet als laatste bijlage aan het product toegevoegd. Zij maken deel uit van Governance, Design, Configuration en de gereedheidsgates.

De federatieve opzet ondersteunt gerichte toegangscontrole. Openbare productinformatie kan breed beschikbaar zijn, terwijl prijsregels, klantoffertes, uitzonderingen en CI-details beperkt blijven tot bevoegde rollen. Het portaal toont alleen wat een gebruiker voor diens taak nodig heeft en routeert wijzigingen naar het juiste autorisatiemodel.

Voor ieder relevant object moet herleidbaar zijn:

- waar het vandaan komt en wie eigenaar is;
- welke versie of snapshot is gebruikt;
- welke activiteit de versie heeft gemaakt of veranderd;
- welke persoon of rol heeft beoordeeld en besloten;
- welke afhankelijkheden, uitzonderingen en bewijzen golden;
- welke latere release of migratie erop volgde.

W3C PROV biedt een algemeen model voor de relatie tussen entiteiten, activiteiten en verantwoordelijke agents. Het schrijft geen PDC-datamodel voor, maar ondersteunt wel de taal waarmee herkomst en verantwoordelijkheid overdraagbaar kunnen worden vastgelegd.

ISO 10007 biedt richtlijnen voor configuratiemanagement over de levenscyclus van producten en diensten. ISO/IEC/IEEE 42010 ondersteunt het expliciet beschrijven van stakeholders, concerns, viewpoints en relaties in architectuurbeschrijvingen. Ook deze standaarden schrijven de hier voorgestelde systemen of objectnamen niet voor; zij helpen de gekozen beheersing en architectuur aantoonbaar te maken.

## Een praktijkvoorbeeld: een beheerde digitale werkplek

Stel dat een organisatie een beheerde digitale werkplek aanbiedt voor Nederlandse zakelijke klanten. De klantbelofte bestaat uit een veilige, bruikbare en ondersteunde werkomgeving per medewerker.

De ProductVersion beschrijft de uitkomst, doelgroep, inclusies, uitsluitingen, onboarding, supportgrenzen en kwaliteitscriteria. De Commercial Offering bepaalt dat deze variant via het enterprise-kanaal voor een minimale looptijd kan worden besteld. Het PriceModel rekent per actieve gebruiker per maand. Het Nederlandse PriceBook bevat de bedragen in euro voor het derde kwartaal.

Legal beheert de toepasselijke voorwaarden en clausules. Delivery beheert de blueprint voor intake, tenantvoorbereiding, identity-integratie, apparaatuitrol, acceptatie en overdracht. Het Service Model beschrijft de vereiste identity-, endpoint-, monitoring- en supportcomponenten. Operations beheert runbooks voor provisioning en herstel.

De PDC kopieert deze volledige inhoud niet. Zij maakt een ProductRelease met de exacte versies en laat verkoopbaarheid en generieke leverbaarheid beoordelen.

Sales gebruikt de release voor een offerte aan een klant met 450 gebruikers. Een toegestane korting wordt goedgekeurd. Bij verzending ontstaat een QuoteSnapshot met prijsinputs, uitkomst, voorwaarden en geldigheid. Na geldige acceptatie ontstaat één OrderLine en één Delivery Instance.

Tijdens levering blijkt dat de klant nog geen vereiste identity-koppeling kan realiseren. De workflow stopt vóór operationele gereedheid. De oorzaak, eigenaar, herstelactie en nieuwe planning worden zichtbaar vastgelegd. De dienst wordt niet als actief gemarkeerd alleen omdat alle andere werkitems zijn voltooid.

Na herstel worden de concrete identity-, endpoint- en monitoringcomponenten aan de Service Instance gekoppeld. Support accepteert de overdracht op basis van bewijs. De klant krijgt de overeengekomen dienst; later opgedane ervaring kan leiden tot een runbookpatch, een nieuwe blueprint of een gewijzigde ProductVersion, afhankelijk van de betekenis van de verbetering.

Dit voorbeeld laat zien waarom prijslijst, offerte, proces en CMDB apart blijven én waarom de relaties tussen bedoeling, vrijgave, afspraak, uitvoering en ervaring als één Value Delivery Thread moeten worden bestuurd.

## Meten wat de belofte werkelijk betekent

Een Value Delivery Thread is geen succes omdat veel velden of relaties zijn ingevuld. Zij is waardevol wanneer dezelfde betekenis aantoonbaar herkenbaar blijft in besluitvorming, vrijgave, afspraak, levering, operatie en ervaring. De PDC levert daarvoor het productvrijgavebewijs, maar is niet de enige maatstaf voor de volledige thread.

Daarom zijn meerdere soorten signalen nodig:

- **klantuitkomst:** in welke mate wordt het bedoelde resultaat gerealiseerd;
- **ervaring:** kunnen klanten en medewerkers de dienst begrijpelijk, toegankelijk en met vertrouwen gebruiken;
- **commerciële kwaliteit:** hoeveel offertes gebruiken een geldige release en hoeveel uitzonderingen ontstaan;
- **leveringskwaliteit:** doorlooptijd, first-time-right, blokkades, herstel en acceptatie;
- **operationele kwaliteit:** beschikbaarheid, incidenten, verzoeken, capaciteit, continuïteit en supportervaring;
- **economische houdbaarheid:** werkelijke kosten, gebruik, marge en afwijking van aannames;
- **governancekwaliteit:** verlopen beoordelingen, ontbrekend bewijs, ongeldige combinaties en tijd tot intrekking of herstel;
- **veranderkwaliteit:** impact van releases, migratiesucces en terugkerende oorzaken.

Deze signalen moeten terug te voeren zijn op ProductRelease, QuoteSnapshot en relevante instances. Alleen dan kan de organisatie onderscheiden of een probleem voortkomt uit de oorspronkelijke belofte, commerciële selectie, leveringsblauwdruk, concrete uitvoering of operationele configuratie en kan zij vanuit die ervaring een gerichte Change Decision nemen.

## Wat deze architectuur organisaties kan opleveren

Wanneer de Value Delivery Thread, haar objectgrenzen, bronnen en vrijgavebesluiten consequent worden toegepast, kan de architectuur bijdragen aan:

### Begrijpelijkere klantbeloften

Scope, prijsbetekenis, voorwaarden, levering en support worden als één samenhangend ontwerp beoordeeld voordat verkoop plaatsvindt.

### Betere overdracht

Sales, delivery en operations werken niet vanuit eigen interpretaties, maar vanuit dezelfde vrijgegeven combinatie en dezelfde geaccepteerde snapshot.

### Beheerst hergebruik

Prijsboeken, clausules, blueprints, servicemodellen en runbooks kunnen door meerdere producten of releases worden gebruikt zonder ze per dossier te kopiëren.

### Veiliger verandering

Een nieuwe versie heeft een expliciete impact. Bestaande afspraken en actieve diensten worden niet ongemerkt aangepast.

### Meer uitlegbaarheid

De organisatie kan reconstrueren wat is beloofd, welke versies golden, wie besliste, wat is uitgevoerd en welke operationele werkelijkheid ontstond.

### Minder toolafhankelijkheid

Omdat betekenis, identiteit, relaties en bewijs expliciet zijn, kan een applicatie of leverancier veranderen zonder de volledige bestuurlijke samenhang opnieuw uit te vinden.

### Gerichtere verbetering

Feedback kan naar de juiste laag en eigenaar worden geleid in plaats van ieder probleem als los supportincident te behandelen.

Deze effecten zijn verwachte architectuuruitkomsten. Werkelijke verbetering moet per organisatie met operationele en ervaringsgegevens worden aangetoond.

## Wat de Value Delivery Thread niet is

De Value Delivery Thread is niet:

- een lineair proces dat iedere dienst op precies dezelfde manier moet doorlopen;
- een centrale database waarin alle domeingegevens worden gekopieerd;
- een nieuw alles-in-één platform of de naam van één applicatie;
- uitsluitend een technische integratie tussen bestaande systemen;
- een eigenaar van prijs-, offerte-, proces-, delivery- of CMDB-feiten;
- een garantie dat waarde automatisch ontstaat zodra relaties technisch compleet zijn;
- een vervanging van bevoegd menselijk eigenaarschap en professioneel oordeel;
- een formele norm die iedere organisatie identiek moet implementeren.

De VDT maakt samenhang en overdrachten aantoonbaar, maar mensen blijven verantwoordelijk voor de kwaliteit van bedoeling, besluit, uitvoering en ervaring.

### Wat de PDC niet vervangt

De PDC is binnen de thread niet:

- een nieuwe naam voor een traditionele productcatalogus of prijslijst;
- een opslagplaats waarin alle domeinobjecten volledig worden gekopieerd;
- een CMDB die de klantbelofte uit actuele componenten probeert af te leiden;
- een offertebibliotheek waarin herbruikbare definities en klantafspraken door elkaar lopen;
- een proceshandboek met alleen beschrijvende werkinstructies;
- een portaal dat door presentatie toevallig de nieuwe master wordt;
- een verzameling hyperlinks zonder versie, geldigheid en compatibiliteitsbesluit;
- een automatisch goedkeuringssysteem zonder bevoegde menselijke verantwoordelijkheid;
- een verplicht microservicelandschap;
- een CRM-, CPQ-, ERP- of servicemanagementplatform.

Ook een technisch correcte PDC garandeert geen goede klantwaarde, winstgevendheid of foutloze uitvoering. Het model maakt aannames, besluiten en afwijkingen zichtbaar; mensen blijven verantwoordelijk voor de kwaliteit ervan.

## Acht ontwerpprincipes

De Value Delivery Thread kan in acht korte principes worden samengevat.

1. **Begin bij klantuitkomst.** Ontwerp product, prijs, levering en support vanuit de waarde en gebruikscontext die de organisatie wil ondersteunen.
2. **Wijs één gezaghebbende bron per feit aan.** Maak per object en belangrijk attribuut duidelijk wie eigenaar is en waar de actuele definitie wordt beheerd.
3. **Geef één exacte combinatie vrij.** Gebruik de PDC en een ProductRelease om compatibele versies, context, besluiten en bewijs onveranderbaar te verbinden.
4. **Scheid definitie, release, snapshot en instantie.** Een herbruikbaar ontwerp, toegestane baseline, geaccepteerde afspraak en operationele werkelijkheid beantwoorden verschillende vragen.
5. **Standaardiseer de kern en bestuur variatie.** Maak toegestane varianten herhaalbaar en behandel afwijkingen buiten guardrails als expliciete besluiten.
6. **Behoud de thread bij iedere overgang.** Een status is pas betekenisvol wanneer bron, doel, criteria, beslisser, tijd, geldigheid, bewijs en herstelpad bekend zijn.
7. **Bied één begrijpelijke ervaring over meerdere bronnen.** Verberg onnodige systeemcomplexiteit voor gebruikers zonder herkomst, versie en verantwoordelijkheid te verbergen.
8. **Laat technologie uitvoeren zonder betekenis over te nemen.** Automatiseer selectie, controle en registratie; laat klantbelofte, risicoacceptatie en uitzonderingen bij bevoegde mensen.

## Veelvoorkomende anti-patronen

De volgende keuzes maken de keten schijnbaar eenvoudig, maar breken de traceerbaarheid van de Value Delivery Thread:

- **alles in de PDC kopiëren:** er ontstaan concurrerende masters en onduidelijke actualiteit;
- **altijd de nieuwste versie gebruiken:** historische offertes en instances verliezen hun betekenis;
- **één globale status actief:** verkoopbaarheid, leverbaarheid en klantspecifieke gereedheid raken vermengd;
- **de CMDB als productcatalogus gebruiken:** actuele componenten worden verward met normatieve klantbelofte;
- **Word of Excel als tariefmaster gebruiken:** publicatieweergave en berekenbare prijslogica lopen uiteen;
- **procedures per product kopiëren:** verbeteringen fragmenteren en lokale varianten worden onzichtbaar;
- **stille automatische propagatie:** een bronwijziging verandert bestaande afspraken zonder besluit;
- **vrije tekst voor uitzonderingen:** reden, eigenaar, grens en vervaldatum zijn niet afdwingbaar;
- **eerst een portaal bouwen:** de interface verbergt dat objecten, bevoegdheden en versies nog niet zijn gedefinieerd;
- **vroegtijdige microservices:** technische distributie vergroot complexiteit voordat de semantische grenzen bewezen zijn.

## Invoering: begin met één volledige thread

De invoering hoeft niet te starten met een organisatiebrede transformatie of een nieuw portaal. Kies één representatief product, één Commercial Offering, één markt, één echt klantscenario en één aantoonbare route van ProductRelease naar QuoteSnapshot, Delivery Instance, Service Instance en feedback.

### 1. Leg de gemeenschappelijke taal vast

Definieer eerst Value Delivery Thread, Product Delivery Catalogue en ProductRelease. Definieer daarna Product, ProductVersion, Commercial Offering, PriceModel, PriceBook, QuoteSnapshot, Delivery Blueprint, Delivery Instance, Service Model, Service Instance en CI. Leg ook relaties, cardinaliteit en verboden vermenging vast.

### 2. Benoem eigenaarschap en beslisrechten

Bepaal per object en belangrijk attribuut de gezaghebbende bron, inhoudseigenaar, goedkeuringsbevoegdheid, wijzigingstrigger, bewaarbehoefte en toegang. Maak zichtbaar waar functiescheiding nodig is.

### 3. Implementeer identiteit, versie en tijd

Gebruik stabiele ID's, onveranderbare gepubliceerde versies, ingangs- en einddata, registratietijd, intrekking en audit. Bewijs dat een historische verwijzing later nog exact kan worden opgelost.

### 4. Bouw de ProductRelease en gereedheidsgates

Maak een manifest dat de exacte versies, toepasbaarheid, compatibiliteit, besluiten en bewijs bindt. Test zowel een geldige vrijgave als ontbrekende prijs, verlopen voorwaarden, onverenigbare blueprint en stop-sell.

### 5. Verbind prijs en commerciële afspraak

Koppel PriceModel en PriceBook en bewijs dat prijsresolutie voor één context exact één uitkomst geeft. Implementeer QuoteVersion, QuoteSnapshot, uitzonderingen en de idempotente overgang naar contract of OrderLine.

### 6. Verbind levering en operationele werkelijkheid

Maak uit de OrderLine een Delivery Instance, koppel blueprint, proces en runbook en verzamel werkelijk bewijs. Realiseer vervolgens Service Instance en CI-relaties en pas de klantspecifieke gereedheidsgate toe.

### 7. Ontwerp de geïntegreerde ervaring en leerkring

Bouw rolgerichte read models en werkstromen op basis van echte brongrenzen. Test succes, duplicaatverzoeken, verlopen bronnen, gedeeltelijke uitval, herstel en migratie. Verbind daarna ervaring en operationele signalen via een Change Decision aan wijzigingsgovernance en schaal gecontroleerd uit.

De eerste implementatie is geslaagd wanneer de organisatie één volledige thread voor- en achteruit kan reconstrueren én veilig kan stoppen wanneer een essentieel onderdeel ontbreekt.

## Wat succes betekent

Succes is zichtbaar wanneer:

- een bevoegde gebruiker vanuit een klantafspraak kan terugvinden welke bedoeling, ProductVersion, offering, prijs, voorwaarden en leveringsmodellen golden, én vanuit de productdefinitie kan zien welke klantinstances en ervaringen daaruit zijn ontstaan;
- een gebruiker kan uitleggen welk object hij wijzigt en wie daarvan eigenaar is;
- voor iedere nieuwe offerte exact één geldige ProductRelease wordt geselecteerd;
- iedere release exacte, onveranderbare versies en geldigheidscontext bevat;
- verkoopbaarheid en generieke leverbaarheid afzonderlijk aantoonbaar zijn;
- een geaccepteerde offerte één herleidbare OrderLine en Delivery Instance oplevert;
- operationele gereedheid pas volgt na concrete service-, CI-, monitoring- en supportbewijzen;
- een nieuwe release bestaande afspraken niet stilzwijgend verandert;
- een noodstop en gedeeltelijke fout veilig kunnen worden afgehandeld;
- feedback naar de juiste product-, commerciële, delivery- of configuratielaag wordt geleid;
- het portaal eenvoud biedt zonder bronhouderschap te verbergen;
- de organisatie van klantuitkomst tot operationele ervaring en terug naar een beoordeelde verbetering één controleerbare Value Delivery Thread kan tonen.

## Theoretische onderbouwing en begrenzing

Dit architectuurpatroon combineert verschillende gevestigde perspectieven zonder te stellen dat één bron de volledige Value Delivery Thread of PDC voorschrijft.

Service-dominant logic verschuift de aandacht van overdracht van een object naar dienstverlening, relaties en gezamenlijk gecreëerde waarde. Dat ondersteunt het vertrekpunt bij klantuitkomst en gebruikscontext.

Onderzoek naar serviceproductisering laat zien hoe specificatie, standaardisering, concretisering en systematisering een dienst begrijpelijker en herhaalbaarder kunnen maken. Service blueprinting verbindt de zichtbare klantreis met backstageactiviteiten en ondersteunende processen. Onderzoek naar servicemodulariteit onderstreept dat herbruikbare bouwstenen expliciete interfaces en coherente variatie vereisen.

Het concept *boundary object* verklaart hoe één gedeelde representatie bruikbaar kan zijn voor verschillende vakgroepen en toch een herkenbare identiteit behoudt. De PDC kan als vrijgaveknooppunt zo'n boundary object zijn. De VDT is breder: zij verbindt meerdere boundary objects, snapshots en instances door de tijd. Deze literatuur bewijst niet dat het hier voorgestelde model de enige juiste uitwerking is.

ISO/IEC 20000-1 ondersteunt de bredere lifecycle van planning, ontwerp, transitie, levering, beoordeling en voortdurende verbetering van diensten. ISO 10007 ondersteunt configuratiemanagement gedurende de levenscyclus van producten en diensten. ISO/IEC/IEEE 42010 ondersteunt het expliciet beschrijven van stakeholders, concerns, viewpoints en relaties. W3C PROV biedt een model voor herkomst en verantwoordelijkheid.

ISO 9241-210 ondersteunt mensgericht ontwerp gedurende de levenscyclus van interactieve systemen. Binnen dit paper geldt zij alleen als lens voor rollen, taken, context, evaluatie en gebruikskwaliteit van de geïntegreerde ervaring. De norm onderbouwt niet de voorgestelde domeinscheiding, objectdefinities of plaatsing van prijs-, offerte-, proces- en configuratiegegevens.

De Value Delivery Thread en de positionering van de Product Delivery Catalogue blijven daarmee een architectuursynthese. Organisaties moeten de definities, gates, bewijsbehoefte en technische vorm toetsen aan hun eigen producten, risico's, sector, wetgeving, contracten en volwassenheid.

## Slot

Een bestuurbare dienstverlening ontstaat niet door alle informatie op één plaats te zetten. Zij ontstaat wanneer betekenis, verantwoordelijkheid, versie en bewijs over de volledige Value Delivery Thread herkenbaar blijven.

Productmanagement blijft eigenaar van de klantbelofte. Pricing blijft eigenaar van prijslogica en tarieven. Commercial en legal blijven eigenaar van offertes, voorwaarden en snapshots. Delivery blijft eigenaar van de leveringsblauwdruk en uitvoering. Operations en configuratiemanagement blijven eigenaar van de werkelijk gerealiseerde service en CI's.

De PDC bezit binnen deze verdeling de vrijgavesamenhang: welke exacte versies samen mochten worden verkocht en generiek geleverd, in welke context, gedurende welke periode, op basis van welke besluiten en met welk bewijs. De QuoteSnapshot, Delivery Instance en Service Instance bewaren vervolgens ieder hun eigen gezaghebbende moment of werkelijkheid.

De Value Delivery Thread verbindt deze bronnen en besluiten zonder één allesomvattende database af te dwingen. Mensen krijgen een begrijpelijke, rolgerichte ervaring. Vakdomeinen behouden hun verantwoordelijkheid. Verandering wordt herleidbaar. Bestaande afspraken blijven beschermd. Feedback kan gericht tot verbetering leiden.

**De Value Delivery Thread centraliseert niet alle informatie. Zij centraliseert de aantoonbaarheid van de samenhang, zodat bedoeling, belofte, vrijgave, verbintenis, uitvoering, ervaring en verbetering verbonden blijven wanneer teams, processen en platforms veranderen.**

## Bronnen

- Bitner, M. J., Ostrom, A. L. & Morgan, F. N. (2008). *Service Blueprinting: A Practical Technique for Service Innovation*. California Management Review, 50(3), 66–94. [DOI-publicatiepagina](https://doi.org/10.2307/41166446)
- de Blok, C., Meijboom, B., Luijkx, K., Schols, J. & Schroeder, R. (2014). *Interfaces in service modularity: A typology developed in modular health care provision*. Journal of Operations Management, 32(4), 175–189. [DOI-publicatiepagina](https://doi.org/10.1016/j.jom.2014.03.001)
- ISO (2017). *ISO 10007:2017 — Quality management — Guidelines for configuration management*. [ISO-publicatiepagina](https://www.iso.org/standard/70400.html)
- ISO (2019). *ISO 9241-210:2019 — Ergonomics of human-system interaction — Part 210: Human-centred design for interactive systems*. [ISO-publicatiepagina](https://www.iso.org/standard/77520.html)
- ISO/IEC (2018). *ISO/IEC 20000-1:2018 — Information technology — Service management — Part 1: Service management system requirements*. [ISO-publicatiepagina](https://www.iso.org/standard/70636.html)
- ISO/IEC/IEEE (2022). *ISO/IEC/IEEE 42010:2022 — Software, systems and enterprise — Architecture description*. [ISO-publicatiepagina](https://www.iso.org/standard/74393.html)
- Jaakkola, E. (2011). *Unraveling the practices of “productization” in professional service firms*. Scandinavian Journal of Management, 27(2), 221–230. [DOI-publicatiepagina](https://doi.org/10.1016/j.scaman.2011.03.001)
- Star, S. L. & Griesemer, J. R. (1989). *Institutional Ecology, ‘Translations’ and Boundary Objects*. Social Studies of Science, 19(3), 387–420. [DOI-publicatiepagina](https://doi.org/10.1177/030631289019003001)
- Vargo, S. L. & Lusch, R. F. (2004). *Evolving to a New Dominant Logic for Marketing*. Journal of Marketing, 68(1), 1–17. [DOI-publicatiepagina](https://doi.org/10.1509/jmkg.68.1.1.24036)
- W3C (2013). *PROV-O: The PROV Ontology — W3C Recommendation*. [W3C Recommendation](https://www.w3.org/TR/prov-o/)

## Over deze publicatie

| Eigenschap | Waarde |
|---|---|
| **Document** | Zelfstandige end-to-end architectuurwhitepaper over de Value Delivery Thread en de rol van de Product Delivery Catalogue |
| **Auteur** | Dennis Westerman |
| **Versie** | 1.0 |
| **Publicatiedatum** | 21 augustus 2026 |
| **Taal** | Nederlands |
| **Doelgroep** | Bestuurders, architecten, productowners, service owners, sales, finance, legal, delivery, operations, securityprofessionals en engineers |
| **Doel** | De aantoonbare rode draad beschrijven die klantuitkomst, productvrijgave, prijs, offerte, contract, levering, serviceconfiguratie, ervaring en verbetering verbindt |
| **Status** | Theoretische architectuurpublicatie; product-, platform- en leveranciersonafhankelijk |
| **Reikwijdte** | Architectuursynthese en besliskader; geen formele norm, juridisch advies of empirisch gevalideerd volwassenheidsmodel |

[← Vorige: Workplace Vision](workplace-vision.md) · [Architectuuroverzicht](../../README.nl.md) · [Volgende: Universeel Context Fundament →](universal-context-foundation.md)
