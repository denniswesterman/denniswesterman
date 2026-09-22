# AI inzetten zonder de regie te verliezen

## Universal Context Foundation: organisatiewaarde behouden wanneer technologie verandert

**Auteur van de oorspronkelijke visie:** Dennis Westerman  
**Status:** openbaar redactioneel concept ter beoordeling; geen gevalideerde implementatie  
**Versie:** 0.3 | 22 september 2026  
**Doelgroep:** bestuur, directie, management, CIO, CISO en andere eindverantwoordelijken

[English](../en/universal-context-foundation-executive.md) · **Nederlands** · [Publicaties](../README.nl.md) · [← Profiel](../../README.nl.md)

---

## De kern

De waarde van een AI-toepassing zit niet alleen in het model dat een antwoord geeft. Zij zit ook in de kennis waarop dat antwoord rust, de bedrijfsregels die gelden, de beoordeling van het resultaat en de verantwoordelijkheid voor het gebruik ervan.

De Universal Context Foundation (UCF) brengt die samenhang onder beheer. Voor een afgebakend proces wordt vastgelegd wat de opdracht is, welke informatie gebruikt mag worden, welke controles nodig zijn, wie mag goedkeuren en welk bewijs van de uitvoering bewaard moet blijven. Het AI-model voert daarbinnen een taak uit; het bepaalt niet zelfstandig de bevoegdheden of het beleid van de organisatie.

**Het uitgangspunt is: beheer de noodzakelijke kennis en regels, gebruik per opdracht wat relevant en toegestaan is, en laat de organisatie de bevoegdheden bepalen en bewaken.** Meer informatie of meer controles vormen op zichzelf nog geen bewijs van meerwaarde.

Het beoogde resultaat is een werkwijze die kan worden hergebruikt en verantwoord, ook wanneer teams, toepassingen of leveranciers veranderen. Dat maakt UCF geen garantie op juiste antwoorden, lagere kosten of volledige leveranciersvrijheid. Het maakt die ambities concreet genoeg om te organiseren en te toetsen.[^1]

> De organisatie moet haar kennis, werkwijze en beslissingsbevoegdheid kunnen behouden, ook wanneer zij de technologie vervangt.

Het voorgestelde eerste besluit is daarom beperkt: toets deze aanpak in een herkenbaar proces, met een eigenaar, een begrensde investering en vooraf afgesproken criteria voor waarde en beheersing. Besluit daarna pas over verdere invoering.

## 1. Een herkenbaar bestuursvraagstuk

Stel dat een organisatie AI wil gebruiken om een beleidsnotitie over energiebesparing voor te bereiden. De notitie moet passen bij het vastgestelde beleid, steunen op actuele informatie en duidelijk maken welke aannames nog onzeker zijn. Een inhoudelijk deskundige moet het resultaat beoordelen voordat het als vastgesteld advies wordt verspreid.

Dit is een fictief voorbeeld, geen uitgevoerde klantcasus of bewijs van gerealiseerde besparing.

Een overtuigend geschreven tekst beantwoordt nog niet de belangrijkste vragen. Is de laatste beleidsversie gebruikt? Waren de gegevens geschikt voor deze toepassing? Zijn vertrouwelijke details onnodig gedeeld? Heeft iemand de onderbouwing gecontroleerd? Wie heeft precies deze versie vrijgegeven?

Binnen de UCF-benadering begint het werk daarom niet bij de vraag aan het model. Eerst worden de opdracht, de toegestane bronnen en de beoordelingscriteria vastgesteld. Verouderde beleidsstukken en onnodige detailgegevens worden uitgesloten. Het model maakt een concept. Dat concept wordt getoetst en pas na de vereiste goedkeuring beschikbaar gesteld als vastgesteld resultaat.

Blijkt later dat een bron onjuist was, dan moet de organisatie kunnen terugvinden welke notities daarop waren gebaseerd. Wordt een andere AI-leverancier gekozen, dan hoeven de opdracht, het beleid en de verantwoordelijkheden niet opnieuw te worden bedacht. Wel moet worden onderzocht of de nieuwe uitvoering aan dezelfde eisen voldoet.

**De bestuurlijke opbrengst is niet simpelweg dat er een tekst ontstaat. Het is dat duidelijk wordt onder welke voorwaarden die tekst gebruikt mag worden en wie daarvoor verantwoordelijkheid draagt.**

## 2. Wat de organisatie zelf onder beheer houdt

UCF behandelt context als een beheerd bedrijfsmiddel. Context betekent hier: de informatie, definities, afspraken en regels die voor een specifieke taak nodig zijn. Dat is iets anders dan alle beschikbare bedrijfsinformatie aan een model aanbieden.

Daarbinnen worden drie zaken onderscheiden:

| Onderdeel van de beheersing | Wat wordt vastgelegd? |
|---|---|
| Contextbeheer: kennis en regels beheren | Welke bronnen en regels gelden, wie daarvoor verantwoordelijk is en waarvoor zij mogen worden gebruikt. |
| Contextselectie: kiezen per opdracht | Welke informatie en instructies voor deze opdracht nodig en toegestaan zijn. |
| Uitvoeringsvoorwaarden: grenzen bewaken | Wie toegang heeft, welke handelingen zijn toegestaan en welke beoordeling en vrijgave nodig zijn. Deze grenzen worden ook daadwerkelijk bewaakt; het model beslist daar niet zelf over. |

De beheerde verzameling kan groter zijn dan de selectie voor een taak. Er wordt niet standaard een volledig kennisarchief, alle werkinstructies of de documentatie van alle onderdelen aangeboden. Informatie die al bruikbaar beschikbaar is, wordt niet zonder reden herhaald. Selectie moet wel voldoende context behouden om de opdracht goed te kunnen uitvoeren; korter is niet automatisch beter.

Aanvullende instructies worden beoordeeld op hun doel, actualiteit en het gedrag dat zij uitlokken. Onnodig zoeken, controleren of herhalen telt mee als uitvoeringslast. Ontbreekt noodzakelijke informatie of spreken geldende regels elkaar tegen, dan wordt het probleem zichtbaar gemaakt en volgens de afgesproken werkwijze opgelost; het model bepaalt niet zelf welke verplichting vervalt.

Per toepassing bepaalt een verantwoordelijke welke bronnen geschikt zijn, welke versie geldt, voor welk doel zij gebruikt mogen worden en wanneer herbeoordeling nodig is. Technische toegang tot een document is niet hetzelfde als toestemming om het voor iedere opdracht te gebruiken.

Ook de werkwijze wordt expliciet gemaakt. Een nieuw team moet kunnen begrijpen wat de opdracht is, welke informatie geldt, wanneer het werk mag doorgaan en wie het resultaat beoordeelt. Die kennis hoort niet uitsluitend in het hoofd van een medewerker, in een eerdere chatsessie of in de instellingen van een leverancier te zitten.

Daarbij blijven vaste afspraken en resultaten van afzonderlijke opdrachten gescheiden. Een gegenereerde conceptnotitie wordt niet vanzelf nieuw beleid. Een aanpassing van het beleid mag evenmin ongemerkt de vastlegging van een eerdere beoordeling veranderen.

Dit vraagt geen centrale kopie van alle bedrijfsdata. Het vraagt duidelijkheid over gezaghebbende bronnen, toegestane toegang, actuele versies en verantwoordelijkheden. De praktische inrichting kan aansluiten op bestaande document-, informatie- en beheersystemen.

UCF wordt in dit paper gepositioneerd als een architectuurbenadering: een manier om kennis, afspraken, verantwoordelijkheden en uitvoering in samenhang te organiseren. Zij schrijft hier geen bepaald systeem of vaste bestandsindeling voor. De oorspronkelijke publicatie beschrijft daarnaast een technische uitwerking. De bestuursprincipes en die concrete realisatie moeten afzonderlijk worden beoordeeld.[^1]

## 3. Vijf stappen van opdracht naar verantwoord gebruik

De oorspronkelijke UCF-benadering onderscheidt vijf stappen. Voor bestuur en management zijn vooral de beslismomenten ertussen relevant.[^2]

| Stap | Bestuurlijke vraag | Voorwaarde om door te gaan |
|---|---|---|
| Opdracht vaststellen | Welk resultaat is nodig, voor wie en onder wiens verantwoordelijkheid? | Doel, grenzen, eigenaar en beoordeling zijn duidelijk. |
| Informatie selecteren | Welke kennis en gegevens mogen voor deze opdracht worden gebruikt? | De noodzakelijke selectie, bronversies en gebruiksvoorwaarden zijn beoordeeld en terug te vinden. |
| Concept maken | Welke afgebakende taak voert AI uit? | Het resultaat blijft herkenbaar als nog niet goedgekeurd concept. |
| Resultaat beoordelen | Is dit resultaat voldoende onderbouwd en geschikt voor het bedoelde gebruik? | De vereiste controles en goedkeuringen zijn vastgelegd. |
| Vrijgeven | Wie mag dit resultaat gebruiken, ontvangen of verder verwerken? | De vrijgave is bevoegd, specifiek en achteraf terug te vinden. |

Bij een onvoldoende beoordeling volgt geen stilzwijgende publicatie. Het werk wordt aangepast of gestopt, met behoud van de eerdere beoordeling. Een nieuw concept krijgt een eigen beoordeling; een oude goedkeuring geldt niet automatisch voor gewijzigde inhoud.

De controles moeten passen bij het risico. Niet iedere controle hoeft handmatig te zijn. Wel moet vooraf vaststaan welke controles automatisch mogen plaatsvinden, wanneer een deskundige moet beoordelen en welke besluiten uitdrukkelijk bij een mens blijven. In het beleidsvoorbeeld is menselijke goedkeuring verplicht.

De vijf stappen beschrijven verantwoordelijkheden en beslismomenten, niet een verplicht aantal modelaanroepen of handmatige handelingen. Controles mogen worden samengevoegd of geautomatiseerd waar hun vereiste werking en bewijsvoering behouden blijven. Iedere aanvullende controle moet een herkenbaar doel hebben. Het beperken van overbodige activiteiten is geen reden om noodzakelijke kwaliteits- of beveiligingscontroles weg te laten.

**Een geslaagde technische uitvoering is nog geen toestemming voor zakelijk gebruik.**

## 4. Bedrijfsfuncties vernieuwen zonder alles opnieuw te bouwen

Een tweede uitgangspunt is dat verschillende soorten veranderingen niet onnodig aan elkaar vastzitten. Een beleidswijziging is niet hetzelfde als een verandering in het scherm, de functionaliteit of de gegevensstructuur.

De UCF-benadering onderscheidt vier onderdelen. Zij maken zichtbaar waarover de organisatie regie houdt en welke verantwoordelijkheden bij elkaar horen:

| Onderdeel | Betekenis voor de organisatie |
|---|---|
| Kennis en regels | Welke informatie en afspraken gelden, wie beheert ze en waarvoor mogen zij worden gebruikt? |
| Functionaliteit | Welke afgebakende taak ondersteunt de toepassing voor een medewerker of bedrijfsproces? |
| Gebruikerservaring | Hoe geeft iemand een opdracht, beoordeelt diegene het resultaat en herkent diegene fouten, beperkingen en goedkeuringen? |
| Gegevensstructuur | Welke informatie hoort bij elkaar, wie mag erbij en wat moet later terug te vinden zijn? Dat vraagt geen nieuwe centrale kopie van alle bedrijfsgegevens. |

Bij de beleidsnotitie zijn dit de geldende beleidsbronnen, de taak om een concept voor te bereiden, de manier waarop iemand dat concept beoordeelt en de samenhang tussen opdracht, bronnen, conceptversie en goedkeuring. De toepassing ondersteunt het werk, maar stelt niet zelf het beleid vast.

Het doel is gericht te kunnen wijzigen. Een verbeterd scherm hoeft het vastgestelde beleid niet te veranderen. Nieuwe regels hoeven niet vanzelf een volledige herbouw van de toepassing te betekenen. Per wijziging moet zichtbaar blijven welke combinatie is beoordeeld en waar aanvullende controle nodig is.

Deze scheiding heft afhankelijkheden niet op. Zij maakt ze expliciet en beoogt de gevolgen van wijzigingen te begrenzen. Of dat in een concrete realisatie daadwerkelijk minder werk, minder fouten of kortere doorlooptijden oplevert, moet worden aangetoond.

De vier onderdelen zijn verantwoordelijkheden, niet vier verplichte systemen, afdelingen of nieuwe documenten. Wat bij één toepassing hoort, blijft zoveel mogelijk bij elkaar. Alleen werkelijk gedeelde kennis en afspraken worden gezamenlijk beheerd. Een wijziging wordt beoordeeld op haar gevolgen, niet op de aanname dat ieder onderdeel steeds opnieuw moet worden aangepast.

Voor een eerste toepassing kan één toepassingskaart het overzicht bieden: doel, eigenaar, toegestane informatie, taak van AI, grenzen, beoordeling, vrijgave en verantwoording. De kaart verwijst naar bestaande bronnen en afspraken; zij is geen tweede archief. De vier onderdelen beschrijven wat wordt georganiseerd en de vijf stappen beschrijven hoe een opdracht verloopt. Het zijn dus geen negen afzonderlijke voorzieningen.

De bijlage [UCF - structuur en toepassingsvoorbeeld](universal-context-foundation-example.md) laat dit zien voor de beleidsnotitie. De toepassingskaart is een voorgestelde presentatievorm, geen extra verplicht UCF-onderdeel.

## 5. Welke waarde moet worden aangetoond?

UCF moet niet worden beoordeeld op het aantal geproduceerde AI-antwoorden, maar op bruikbare resultaten, beheersbare risico's en de inspanning die daarvoor nodig is.

De volgende meetpunten zijn een voorstel voor een eerste toepassing. Het zijn geen reeds behaalde UCF-resultaten.

| Beoogde waarde | Praktisch meetpunt |
|---|---|
| Doelmatiger werken | Tijd en totale kosten per geaccepteerd resultaat, inclusief bronbeheer, controle, herstel en beheer. |
| Betere kwaliteit | Aandeel resultaten dat aan de inhoudelijke criteria voldoet en de ernst van aangetroffen fouten. |
| Meer verantwoording | Of opdracht, bronnen, beoordeling en vrijgave per geselecteerd resultaat werkelijk terug te vinden zijn. |
| Minder ongewenste afhankelijkheid | De inspanning en resterende beperkingen bij een gecontroleerde overstap naar een andere uitvoering. |
| Beheersbare verandering | De daadwerkelijk geraakte onderdelen bij een wijziging en de aantoonbare mogelijkheid tot herstel. |

Maak eerst de huidige werkwijze zichtbaar. Vergelijk daarna vergelijkbare opdrachten met dezelfde kwaliteitseisen. Minder schrijftijd is geen netto voordeel wanneer bronbeheer, beoordeling en foutcorrectie meer extra tijd kosten dan er wordt bespaard.

Vergelijk waar mogelijk ook met een eenvoudige AI-inrichting die dezelfde noodzakelijke informatie, kwaliteitseisen en veiligheidsvoorwaarden heeft. Zo wordt onderscheid gemaakt tussen de waarde van AI-gebruik in het algemeen en de aanvullende waarde van UCF. De eenvoudige variant mag niet goedkoper worden gemaakt door noodzakelijke bescherming weg te laten.

Doelmatigheid en beheersing worden afzonderlijk gerapporteerd. Extra beoordelingstijd kan bijvoorbeeld nodig zijn voor aantoonbare vrijgave. Dat is niet automatisch een mislukking, maar evenmin een bewezen kostenbesparing. Benoem welke verbetering of noodzakelijke beheersing tegenover de extra inspanning staat.

Neem ook de investering mee: het ordenen van bronnen, het aanwijzen en opleiden van verantwoordelijken, het aansluiten van systemen, het beoordelen van beveiliging en het structurele beheer. Herbruikbare afspraken kunnen waarde opleveren bij volgende toepassingen, maar die herbruikbaarheid moet blijken uit daadwerkelijk hergebruik.

Een goede businesscase benoemt daarom zowel het verwachte voordeel als de kosten, onzekerheden en voorwaarden waaronder dat voordeel haalbaar is.

### Wat extern onderzoek wel en niet onderbouwt

*Evaluating AGENTS.md* onderzoekt AI-assistenten die programmeeropdrachten uitvoeren, met en zonder aanvullende instructiebestanden. In de onderzochte situaties leveren die bestanden geen statistisch significante algemene verbetering van taaksucces op, terwijl de uitvoeringskosten toenemen. Zonder aanvullend bestand beschikken de assistenten nog steeds over de opdracht, de te bewerken software en bestaande documentatie. De extra instructies worden vaak wel gevolgd, maar veroorzaken ook extra werk.[^4]

Dit onderzoek beoordeelt geen volledige UCF-inrichting en toont niet aan wat haar bestuurlijke of beveiligingswaarde is. Een aanvullende proef met verwijderde documentatie laat zien dat de beschikbaarheid van andere informatie ertoe doet. Er is ook geen duidelijke relatie gevonden tussen de lengte van instructiebestanden en succes of kosten. Daarom is noch 'meer informatie toevoegen' noch 'alles korter maken' een bewezen algemene oplossing. De keuzes binnen UCF moeten in de eigen toepassing worden getoetst; het onderzoek bewijst geen bepaalde organisatie- of bestandsstructuur.[^4]

## 6. Eigenaarschap is een organisatievraagstuk

UCF kan verantwoordelijkheden zichtbaar maken, maar kan ze niet namens de organisatie toewijzen. Zonder beschikbaar mandaat, tijd en deskundigheid blijft een controlepunt slechts een afspraak op papier.

**Bestuur of directie** bepaalt welke bedrijfsdoelen de toepassing dient, welke ruimte voor risico bestaat en onder welke voorwaarden uitbreiding verantwoord is. Een aangewezen risicodrager beslist over het accepteren van resterende risico's; die verantwoordelijkheid mag niet ongemerkt bij een ontwikkelaar of leverancier terechtkomen.

**De proceseigenaar** is verantwoordelijk voor de beoogde uitkomst, de inrichting van de werkwijze en het organiseren van beoordeling. Deze eigenaar moet ook kunnen besluiten een toepassing tijdelijk niet te gebruiken wanneer de kwaliteit of beheersing onvoldoende is.

**Informatie- en beleidseigenaren** bewaken de inhoud, actualiteit en toegestane inzet van bronnen en regels. **Beoordelaars** hebben voldoende deskundigheid, tijd en bevoegdheid nodig om een concreet resultaat af te wijzen of aanvullende onderbouwing te verlangen.

Ook aanvullende modelinstructies hebben een verantwoordelijke en een herbeoordelingsmoment nodig. Een suggestie uit een AI-uitvoering wordt niet zonder inhoudelijke beoordeling een algemene instructie voor volgende opdrachten. Verouderde of overbodige instructies moeten kunnen worden ingetrokken.

**CIO, CISO en relevante privacy- of juridische deskundigen** brengen ieder hun eigen beoordeling in. Het gaat onder meer om de aansluiting op bestaande systemen, de uitvoerbaarheid van beheersmaatregelen, gegevensgebruik en leveranciersafspraken. Dat maakt de CISO niet automatisch eigenaar van alle bedrijfsrisico's of van iedere inhoudelijke beslissing.

**De beheerorganisatie** draagt zorg voor de afgesproken beschikbaarheid, toegangsvoorzieningen, wijzigingsbeheersing en herstelmogelijkheden. Wie de uitvoering onafhankelijk controleert, moet toegang krijgen tot voldoende bewijs zonder daarmee onnodig vertrouwelijke inhoud te verspreiden.

Bestaande rollen kunnen deze verantwoordelijkheden vervullen. UCF vereist niet vanzelf een nieuwe bestuurslaag, maar wel ondubbelzinnige afspraken.

## 7. Wat moet een CISO of toezichthouder kunnen toetsen?

Voor beveiliging is niet voldoende dat in een document staat wat een toepassing mag doen. De gekozen uitvoering moet ongeoorloofde toegang en ongewenste vervolgacties ook daadwerkelijk kunnen blokkeren.

Een model instrueren om een handeling niet uit te voeren is niet hetzelfde als die handeling technisch onmogelijk maken. Per beheersmaatregel moet daarom duidelijk zijn of zij berust op instructie, automatische controle, toegangsbeperking of menselijke goedkeuring, en hoe haar werking wordt getoetst. Een bestand met regels is op zichzelf geen werkende beveiligingsvoorziening.

Een passende toets kijkt daarom naar de werking. Krijgt een taak alleen de noodzakelijke informatie en bevoegdheden? Wordt een niet-goedgekeurd resultaat werkelijk tegengehouden? Wat gebeurt er wanneer een vereiste voorziening ontbreekt? Kan worden voorkomen dat gegevens zonder toestemming naar een andere leverancier worden doorgestuurd?

De vrijgave moet horen bij precies de beoordeelde inhoud, het gebruiksdoel en de toegestane ontvangers. Bij gewijzigde inhoud of vervallen voorwaarden moet opnieuw worden bepaald of vrijgave is toegestaan. De technische controle op deze koppeling staat los van de bereidheid van het model om instructies te volgen.

De vastlegging van de uitvoering moet eveneens beschermd zijn. Niet alleen de beschikbaarheid van een bewijsregistratie telt, maar ook wie haar kan wijzigen, hoe de gebruikte bronnen later kunnen worden teruggevonden en welke bewaartermijnen passend zijn. Bewijs bewaren is geen reden om onbeperkt alle vertrouwelijke inhoud te kopiëren.

Bij softwarewijzigingen moet duidelijk zijn welke versie is goedgekeurd en of die versie ook werkelijk actief is. Controle op herkomst en ongewijzigde inhoud ondersteunt dat. Zij bewijst op zichzelf niet dat de software veilig is of dat het resultaat inhoudelijk klopt.

De oorspronkelijke technische publicatie maakt zelf onderscheid tussen meerdere beveiligingsmaatregelen en een volledig bewezen afgeschermde omgeving.[^3] Een directiepaper moet die nuance behouden: de kwaliteit van de bescherming hangt af van zowel ontwerp als implementatie, beheer en toetsing.

## 8. Waar de belofte ophoudt

**Goedgekeurde bronnen garanderen geen juist antwoord.** Een model kan informatie verkeerd interpreteren of een conclusie trekken die niet door de bronnen wordt gedragen. Ook een menselijke beoordeling is niet onfeilbaar. Bronnen, controles en verantwoordelijkheden maken de beoordeling beter organiseerbaar; zij maken fouten niet onmogelijk.

**Meer context of meer controles garanderen geen betere prestaties.** Beoordeel welke informatie relevant is, welk extra werk instructies veroorzaken en of controles werkelijk doen wat nodig is. Het aantal afspraken of controles is op zichzelf geen bewijs van waarde. Extra inspanning moet gerechtvaardigd zijn; minder informatie aanbieden is evenmin een resultaatgarantie.[^4]

**Overdraagbaarheid is geen probleemloze overstap.** Het beoogde voordeel is dat kennis, regels en beoordelingscriteria niet onnodig opnieuw hoeven te worden opgebouwd. Een andere leverancier of een ander model vraagt nog steeds een beoordeling van kwaliteit, kosten, prestaties, gegevensverwerking en aansluiting op systemen. Rechten en contractuele beperkingen verdwijnen niet door een architectuurkeuze.

**Herhaalbaarheid betekent niet identieke antwoorden.** Een vergelijkbare opdracht onder dezelfde afspraken moet opnieuw uitvoerbaar en beoordeelbaar zijn. Dat is iets anders dan de garantie dat iedere uitvoering dezelfde tekst oplevert.

**Minder afhankelijkheid van één voorziening is geen volledige zelfstandigheid.** De oorspronkelijke uitwerking beoogt al beschikbare softwareonderdelen te laten werken zonder steeds de centrale voorziening voor hun levering te raadplegen. De toepassing kan nog wel een externe AI-dienst, een voorziening voor toegangsbeheer, gegevensopslag of een ander bedrijfssysteem nodig hebben.[^3]

**Technisch herstel draait zakelijke gevolgen niet vanzelf terug.** Eerdere software herstellen is niet hetzelfde als een verzonden advies intrekken, een genomen besluit terugdraaien of alle gewijzigde gegevens herstellen. Het herstelplan moet aansluiten op het bedrijfsproces.

UCF is daarmee geen nalevingscertificaat, geen vervanging van inhoudelijke deskundigheid en geen toezegging van volledig autonome bedrijfsvoering. De technische bron positioneert de aanpak vooral voor afgebakende, controleerbare werkprocessen; verdergaande autonomie vraagt aanvullende voorzieningen.[^3]

## 9. Van visie naar een begrensd besluit

Begin met een proces waarvan het probleem herkenbaar is en het resultaat beoordeeld kan worden. Geschikte kenmerken zijn een duidelijke eigenaar, een beheersbare verzameling bronnen, voldoende vergelijkbare opdrachten en bestaande kwaliteitscriteria. De beleidsnotitie uit dit paper is een illustratie, geen voorgeschreven eerste toepassing.

Werk vervolgens een beperkt voorstel uit. Beschrijf welk probleem wordt aangepakt, hoe het nu wordt opgelost, welke verbetering verwacht wordt, welke informatie nodig is en welke werkzaamheden niet door AI worden overgenomen. Leg ook de omvang van de investering, de beschikbare beoordelingscapaciteit en het mandaat om te stoppen vast.

Leg vooraf vast welke vergelijking het besluit moet ondersteunen: de huidige werkwijze, een eenvoudige AI-inrichting en de voorgestelde UCF-werkwijze. Gebruik vergelijkbare opdrachten en gelijkwaardige noodzakelijke kwaliteits- en veiligheidsvoorwaarden. Stel acceptatiecriteria en grenzen aan tijd, kosten en risico vast voordat de uitkomsten bekend zijn; hiervoor wordt geen algemeen geldende norm verondersteld.

Onderzoek binnen een verder gelijkblijvende AI-inrichting afzonderlijk welke aanvullende context helpt. Vergelijk minimale noodzakelijke instructies met taakgericht geselecteerde aanvullingen, zonder tegelijk bevoegdheden, vrijgavevoorwaarden of het model te veranderen. Herhaal waar uitvoerbaar vergelijkbare opdrachten en rapporteer verschillen en onzekerheid. Deze tweede vergelijking maakt het effect van contextselectie beter onderscheidbaar van andere proceswijzigingen.

De proef moet meer laten zien dan een goed eindresultaat. Een ontbrekende bron, een afwijzing door een beoordelaar of een niet-beschikbare leverancier moet tot het afgesproken veilige gedrag leiden. De organisatie moet kunnen aantonen dat een concept niet buiten de vereiste goedkeuring om als vastgesteld resultaat wordt gebruikt.

Toets ook de onderscheidende belofte. Kan een regel worden aangepast zonder onnodige wijzigingen elders? Kan een andere beoordelaar de uitvoering reconstrueren? Blijven de afspraken bruikbaar wanneer een ander model wordt ingezet? Waar blijft aanvullende aanpassing of controle nodig?

De uitkomst is een besluit tot stoppen, aanpassen, beperkt voortzetten of opschalen. Verdere invoering is pas overtuigend wanneer de toepassing aantoonbare waarde heeft, de resterende risico's door de juiste verantwoordelijke zijn beoordeeld en de beheerlast uitvoerbaar is.

Wanneer een eenvoudiger inrichting aan dezelfde noodzakelijke eisen voldoet tegen lagere totale kosten, moet duidelijk worden welke aanvullende waarde een uitgebreidere UCF-inrichting rechtvaardigt. Waar die waarde ontbreekt, wordt de inrichting vereenvoudigd. Verplichte bescherming wordt niet uitgeschakeld om een gunstiger meetresultaat te krijgen.

Een ontbrekende eigenaar, onvoldoende betrouwbare bronnen, een onbeheersbare beoordelingslast of niet te corrigeren risico's zijn redenen om eerst de randvoorwaarden te verbeteren. Niet ieder proces heeft dezelfde mate van formalisering nodig.

> Vraag geen organisatiebrede uitrol op basis van een overtuigende demonstratie. Vraag bewijs dat een afgebakend proces waarde levert en onder controle blijft.

## Conclusie

De Universal Context Foundation verplaatst de aandacht van het gekozen AI-model naar wat de organisatie zelf moet blijven beheersen: kennis, regels, uitvoering, beoordeling en verantwoordelijkheid.

Het strategische doel is niet zoveel mogelijk technologie van de omgeving los te maken. Het is voorkomen dat waardevolle bedrijfskennis en besluitvorming onnodig afhankelijk worden van een specifieke toepassing, leverancier of medewerker.

Dat doel verdient een zakelijke toets. Kan de organisatie sneller of beter werken, de kwaliteit onderbouwen, wijzigingen beheersen en fouten herstellen tegen aanvaardbare kosten? Een directie moet die vragen kunnen beantwoorden zonder eerst de programmatuur te hoeven begrijpen.

De maatstaf is niet hoeveel context, lagen of instructies zijn toegevoegd. De maatstaf is of relevante informatie, begrensde uitvoering en verantwoorde resultaten aantoonbaar beter georganiseerd zijn dan met een eenvoudiger alternatief.

**Technologie mag veranderen. De verantwoordelijkheid voor het gebruik ervan moet herkenbaar bij de organisatie blijven.**

---

## Bron en status van dit concept

Dit concept is een zelfstandige bestuurlijke herformulering van de UCF-visie, aangevuld met voorgestelde meetpunten, verantwoordelijkheden en besluitcriteria. Versie 0.3 bouwt voort op versie 0.2 van 22 september 2026 en het aangeleverde concept van 16 september 2026. De vergelijking met de aangeleverde onderzoeksversie *Evaluating AGENTS.md*, v2 van 23 juni 2026, blijft behouden. Deze wijziging brengt de structuur en het voorbeeld op het niveau van bestuur en management.

De oorspronkelijke hoofdstukindeling, vijf stappen en vier verantwoordelijkheidsgebieden blijven behouden. De aangescherpte contextselectie, aanvullende beoordelingsvragen en toepassingskaart zijn redactionele voorstellen, geen vastgestelde implementatie-eisen of gerapporteerde praktijkresultaten. De toepassingskaart introduceert geen nieuwe UCF-laag. De software, operationele werking, beveiliging en eventuele besparingen zijn voor deze update niet onafhankelijk onderzocht. De bestaande technische architectuurpublicatie blijft ongewijzigd als afzonderlijke verdieping beschikbaar; de brongegevens hieronder zijn overgenomen uit versie 0.1. De technische werking is niet opnieuw onderzocht.

**Bijbehorend bestuurlijk voorbeeld:** [UCF - structuur en toepassingsvoorbeeld](universal-context-foundation-example.md). Dit vervangt het eerdere technische voorbeeld als bijlage bij het directiepaper. De bijlage bevat de vier onderdelen, de vijf stappen en één ingevulde toepassingskaart; geen voorgeschreven bestandsindeling of configuratievoorbeelden.

[^1]: Dennis Westerman, *Universal Context Foundation*, publicatieversie 1.2, 11 augustus 2026; geraadpleegd op 16 september 2026. Met name "The core in one minute", "Context as a Managed Product" en "The Three Peers Alongside UCF". [Oorspronkelijke architectuurpublicatie](https://github.com/denniswesterman/denniswesterman/blob/main/publications/en/universal-context-foundation.md). GitHub-bronblob: `5b42288da551ddfc1756dd7057cb2a1e2852cfab`.

[^2]: Dezelfde publicatie, "End-to-End Through the Five UCF Stages" en "Adoption in an Organization". De bestuursvragen en meetpunten in dit concept zijn een redactionele uitwerking van die uitgangspunten.

[^3]: Dezelfde publicatie, "Trust, Security, and Data Boundaries", "Audit, Continuity, and Recovery", "Operating Without Stores" en "What UCF Does and Does Not Automate". De aanvullende bestuurlijke begrenzingen in dit concept zijn beoordelingsvragen, geen verklaring dat een specifieke implementatie reeds aan alle genoemde voorwaarden voldoet.

[^4]: Thibaud Gloaguen, Niels Mündler, Mark Müller, Veselin Raychev en Martin Vechev, *Evaluating AGENTS.md: Are Repository-Level Context Files Helpful for Coding Agents?*, preprint, [arXiv:2602.11988v2](https://arxiv.org/abs/2602.11988v2), 23 juni 2026. Gebruikte bron: de aangeleverde PDF `Evaluating AGENTS.pdf`. Zie pp. 5-6 voor opzet, resultaten en tabel 3; pp. 7-9 voor gedrag, conclusies en beperkingen; pp. 16-17 voor aanvullende resultaten over beschikbare documentatie en bestandslengte. De bevindingen betreffen de onderzochte coding-agenttaken, niet een volledige UCF-architectuur.
