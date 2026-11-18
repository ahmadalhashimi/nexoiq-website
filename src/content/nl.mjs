// Nederlandse content — zelfde structuur als en.mjs.

export default {
  meta: {
    locale: 'nl-NL',
    ogLocale: 'nl_NL',
    langName: 'Nederlands',
  },

  common: {
    skip: 'Naar de inhoud',
    navLabel: 'Hoofdmenu',
    menu: 'Menu',
    language: 'Taal',
    nav: {
      home: 'Home',
      dataEngineering: 'Data Engineering',
      odoo: 'Odoo ERP-consultancy',
      integration: 'ERP- & data-integratie',
      training: 'Training & mentorship',
      about: 'Over NexoIQ',
      contact: 'Contact',
      privacy: 'Privacy',
    },
    cta: {
      book: 'Plan een adviesgesprek',
      explore: 'Bekijk onze diensten',
      discuss: 'Bespreek uw project',
      learnMore: 'Meer informatie',
    },
    breadcrumb: 'Kruimelpad',
    footer: {
      tagline: 'Technologieconsultancy uit Nederland voor data engineering, Odoo ERP en de integratie daartussen.',
      services: 'Diensten',
      company: 'Bedrijf',
      backToTop: 'Terug naar boven',
      rights: 'Alle rechten voorbehouden.',
    },
    legal: {
      name: 'Handelsnaam',
      form: 'eenmanszaak',
      kvk: 'KVK-nummer',
      vat: 'Btw-id',
      vatValue: 'vermeld op factuur',
      registered: 'Ingeschreven',
      registeredValue: 'KVK Rotterdam, Zuid-Holland',
      working: 'Werkwijze',
      workingValue: 'op locatie in Nederland · elders remote',
    },
    finalCta: {
      title: 'Een data- of ERP-vraagstuk?',
      lead: 'Vertel waar u mee bezig bent. U krijgt een eerlijk antwoord op de vraag of en hoe NexoIQ kan helpen.',
    },
  },

  pages: {
    home: {
      title: 'NexoIQ | Consultancy voor data engineering, Odoo ERP & integratie',
      description: 'Nederlandse consultancy voor data engineering met Azure & Databricks, Odoo 18 ERP-consultancy en integratie van Odoo met een lakehouse. Voor Nederland, Saudi-Arabië en de Golfregio.',
      hero: {
        eyebrow: 'Technologieconsultancy · Nederland · Saudi-Arabië & Golfregio',
        title1: 'Wij verbinden business,',
        title2: 'data & technologie.',
        lead: 'NexoIQ helpt bedrijven betrouwbare dataplatformen te bouwen, ERP-processen te optimaliseren en bedrijfssystemen te verbinden — met praktische technologieconsultancy.',
        stats: [
          { k: 'Ervaring', v: '8+ jaar' },
          { k: 'Focus', v: 'Azure · Databricks · Odoo 18' },
          { k: 'Talen', v: 'NL · EN · AR' },
        ],
        vizLabel: 'Voorbeeld van een datastroom: Odoo ERP naar Azure-datapijplijnen, Databricks-lakehouse en Power BI',
        viz: [
          { t: 'Odoo ERP', d: 'Verkoop · inkoop · voorraad' },
          { t: 'Azure-datapijplijnen', d: 'Extraheren · laden · plannen' },
          { t: 'Databricks Lakehouse', d: 'Delta Lake · datamodellering' },
          { t: 'Power BI', d: 'KPI’s · dashboards · beslissingen' },
        ],
      },
      services: {
        eyebrow: 'Diensten',
        title: 'Drie vakgebieden, één samenhangende aanpak',
        lead: 'Gespecialiseerde consultancy in dataplatformen en Odoo ERP — en het integratiewerk dat ze verbindt.',
        pillars: [
          {
            title: 'Data Engineering & Cloud Consulting',
            desc: 'Betrouwbare dataplatformen op Microsoft Azure en Databricks — van data-inname en lakehouse-architectuur tot integratie van SAP-data.',
            items: ['Microsoft Azure', 'Azure Databricks', 'Data engineering', 'Lakehouse-architectuur', 'SAP Datasphere', 'SAP Business Data Cloud', 'Data-integratie', 'Delta Sharing'],
          },
          {
            title: 'Odoo ERP-consultancy & -ontwikkeling',
            desc: 'Odoo 18 ingericht rond uw echte processen, en uitgebreid met maatwerkmodules waar de standaard tekortschiet.',
            items: ['Odoo 18-configuratie', 'Maatwerkmodules in Python & XML', 'Procesmaatwerk', 'Maatwerk voor verkoop en voorraad', 'Multi-company-configuratie', 'Functioneel testen en probleemoplossing', 'Odoo.sh', 'On-premise omgevingen'],
          },
          {
            title: 'ERP- & data-integratie',
            desc: 'Breng Odoo-data naar een Azure- en Databricks-lakehouse, zodat managementrapportages op één betrouwbare bron draaien.',
            items: ['Data-extractie uit Odoo', 'ERP-data-integratie', 'Azure-datapijplijnen', 'Databricks Lakehouse', 'Datamodellering', 'Power BI-integratie'],
          },
        ],
      },
      principles: {
        eyebrow: 'Werkwijze',
        title: 'Praktische consultancy die standhoudt',
        items: [
          { t: 'Eerst standaard', d: 'Gebruik wat het platform al biedt voordat er maatwerk wordt gebouwd.' },
          { t: 'Getest vóór productie', d: 'Stagingomgevingen, testscenario’s en een terugvalplan bij elke release.' },
          { t: 'Gedocumenteerd en overgedragen', d: 'Uw team begrijpt wat er is opgeleverd en kan het zelf beheren.' },
          { t: 'Op maat van uw bedrijf', d: 'Oplossingen die passen bij uw volumes, budget en team — niet de grootst mogelijke architectuur.' },
        ],
      },
      regions: {
        eyebrow: 'Werkgebied',
        title: 'Van Nederland tot Saudi-Arabië en de Golfregio',
        lead: 'NexoIQ is gevestigd in Nederland en ondersteunt bedrijven in Nederland, Saudi-Arabië en de Golfstaten (GCC) via flexibele remote consultancy en projectmatige opdrachten.',
        items: [
          { t: 'Remote consultancy', d: 'Workshops, ontwikkeling en reviews online, over tijdzones heen.' },
          { t: 'Projectmatige levering', d: 'Afgebakende scope, heldere deliverables en afgesproken acceptatiecriteria.' },
          { t: 'Maandelijkse consultancy', d: 'Doorlopende ondersteuning of een vast aantal consultancydagen per maand.' },
          { t: 'Communicatie in Arabisch en Engels', d: 'Workshops, documentatie en training in het Arabisch, Engels of Nederlands.' },
          { t: 'Flexibele samenwerking', d: 'Naast uw interne team, uw Odoo-partner of uw IT-leverancier.' },
        ],
        note: 'NexoIQ is in Nederland ingeschreven. Klanten buiten Nederland worden remote bediend; NexoIQ heeft geen kantoor of rechtspersoon in Saudi-Arabië of andere Golfstaten.',
      },
      training: {
        eyebrow: 'Training & mentorship',
        title: 'Bouw kennis op binnen uw eigen team',
        lead: 'Praktijkgerichte training in Databricks, PySpark en datamodellering — en Odoo-training voor key users en managers.',
        cta: 'Bekijk de trainingen',
      },
    },

    dataEngineering: {
      title: 'Data engineering consultancy Nederland | Azure & Databricks | NexoIQ',
      description: 'Azure data engineering en Databricks-consultancy vanuit Nederland: lakehouse-architectuur, datapijplijnen, integratie met SAP Datasphere, datamodellering en Power BI.',
      hero: {
        eyebrow: 'Data Engineering & Cloud Consulting',
        title: 'Betrouwbare dataplatformen op Azure en Databricks',
        lead: 'NexoIQ ontwerpt en bouwt dataplatformen die versnipperde brondata omzetten in betrouwbare, analyseklare tabellen — voor rapportage, planning en AI-toepassingen.',
      },
      capabilities: {
        eyebrow: 'Expertise',
        title: 'Wat wij leveren',
        items: [
          { t: 'Azure Databricks & lakehouse-architectuur', d: 'Lakehouses volgens de medallion-structuur op Delta Lake, met governance via Unity Catalog, gebouwd voor batch- en incrementele verwerking.', tags: 'Azure Databricks • Delta Lake • Unity Catalog' },
          { t: 'Datapijplijnen & orkestratie', d: 'Inname- en transformatiepijplijnen met PySpark, dbt en Azure Data Factory — gepland, gemonitord en onder versiebeheer.', tags: 'PySpark • dbt • Azure Data Factory • Airflow' },
          { t: 'SAP Datasphere & SAP Business Data Cloud', d: 'SAP-data beschikbaar maken in Databricks en voor analyses, inclusief zero-copy delen waar het landschap dat ondersteunt.', tags: 'SAP Datasphere • SAP BDC • Delta Sharing' },
          { t: 'Data-integratie', d: 'ERP-, CRM- en operationele systemen samenbrengen in één platform, met duidelijk eigenaarschap per bron.', tags: 'API’s • Batch & incrementeel laden' },
          { t: 'Datamodellering & Power BI', d: 'Dimensionele en semantische modellen, zodat elke KPI één definitie heeft die teams delen.', tags: 'Dimensionele modellering • Power BI • DAX' },
          { t: 'Kwaliteit, CI/CD & governance', d: 'Datakwaliteitscontroles, geautomatiseerde uitrol via Azure DevOps en toegangsbeheer vanaf het ontwerp.', tags: 'Azure DevOps • CI/CD • Datakwaliteit' },
        ],
      },
      experience: {
        eyebrow: 'Geselecteerde ervaring',
        title: 'Ervaring uit enterprise dataprogramma’s',
        lead: 'Voorbeelden uit eerdere opdrachten in de maakindustrie, verzekeringen en internationale programma’s. Klantnamen worden niet gepubliceerd.',
        items: [
          { tag: 'Modernisering', t: 'Legacy ETL → Azure Databricks Lakehouse', d: 'Voor een internationale productiegroep: legacy SSIS-workflows overgezet naar één lakehouse op PySpark, Delta Lake en Unity Catalog, met CI/CD in Azure DevOps.' },
          { tag: 'Rapportage', t: 'ERP- & CRM-data → Power BI', d: 'Enterprise semantische modellen op ERP- en CRM-data — één definitie van elke KPI, gedeeld door regionale business units en automatisch ververst.' },
          { tag: 'Integratie', t: 'Zero-copy SAP-integratie', d: 'SAP-data gebruikt in Databricks zonder te kopiëren — minder latency, geen dubbele opslag, één bron van waarheid.' },
          { tag: 'Schaal', t: 'Gereguleerde & internationale data', d: 'Dimensionele modellen voor risk- en actuariële teams in de verzekeringssector, en managementdashboards voor programma’s in meerdere landen met een bereik van 100K+ mensen.' },
        ],
      },
      stack: {
        eyebrow: 'Technologie',
        title: 'Tools en platformen',
        groups: [
          { t: 'Data engineering & cloud', items: ['Azure Databricks', 'Delta Lake', 'Unity Catalog', 'PySpark', 'dbt', 'Azure Data Factory', 'Apache Airflow', 'BigQuery'] },
          { t: 'BI & datamodellering', items: ['Power BI', 'DAX', 'Dimensionele modellering', 'Data Vault', 'Medallion', 'SQL / T-SQL'] },
          { t: 'DevOps & governance', items: ['Azure DevOps', 'CI/CD', 'Geautomatiseerde tests', 'Datakwaliteitscontracten', 'Ontwerp met oog voor de AVG'] },
        ],
      },
      certs: {
        eyebrow: 'Certificeringen',
        title: 'Altijd blijven leren',
      },
      calculator: {
        eyebrow: 'Rekenhulp',
        title: 'Pijplijnefficiëntie & cloud compute-rekenhulp',
        lead: 'Een indicatieve schatting van de queryversnelling en jaarlijkse compute-besparing die lakehouse-optimalisatie kan opleveren. De schatting is alleen gebaseerd op het datavolume dat u invoert.',
        volumeLabel: 'Maandelijks datavolume',
        volumeUnit: 'TB',
        accelLabel: 'Indicatieve queryversnelling',
        savingsLabel: 'Indicatieve jaarlijkse besparing',
        fasterSuffix: '× sneller',
        badge: 'Indicatieve schatting',
        assumptionsTitle: 'Hoe deze schatting wordt berekend',
        assumptions: [
          'Jaarlijkse besparing = € 4.800 per TB maandelijks datavolume + een vaste basis van € 2.200.',
          'Queryversnelling = 2,5× basis + 0,35× per TB maandelijks datavolume.',
          'Dit zijn vaste referentiecoëfficiënten, geen metingen van uw omgeving. Uw huidige architectuur, workloadpatronen, cloudprijzen en contracten worden niet meegenomen.',
        ],
        disclaimer: 'Alleen een indicatieve schatting — geen offerte, prognose of garantie op resultaat. Voor een realistisch cijfer is een korte analyse van uw omgeving nodig.',
        cta: 'Vraag een analyse aan',
      },
    },

    odoo: {
      title: 'Odoo 18 consultant | Odoo ERP-consultancy & maatwerkmodules | NexoIQ',
      description: 'Odoo 18-consultancy en maatwerkmodules in Python en XML: procesanalyse, inrichting van verkoop en voorraad, testen, probleemoplossing, Odoo.sh en on-premise. Nederland, Saudi-Arabië & Golfregio.',
      hero: {
        eyebrow: 'Odoo ERP-consultancy & -ontwikkeling',
        title: 'Odoo 18, ingericht en uitgebreid rond hoe uw bedrijf werkt',
        lead: 'Van procesanalyse en configuratie tot maatwerkmodules in Python, testen en omgevingsbeheer — op Odoo.sh of on-premise.',
        version: 'Huidige specialisatie: Odoo 18. Werk aan andere versies beoordelen we per situatie.',
      },
      services: {
        eyebrow: 'Diensten',
        title: 'Odoo-diensten',
        items: [
          {
            t: 'Odoo-configuratie & procesanalyse',
            d: 'We beginnen bij hoe uw teams echt werken, en richten Odoo daarop in.',
            bullets: ['Analyse van bedrijfsprocessen', 'Verkoop- en inkoopprocessen', 'Voorraadconfiguratie', 'Multi-company-omgevingen', 'Procesoptimalisatie', 'CRM-pijplijnen en goedkeuringsflows'],
          },
          {
            t: 'Odoo-maatwerkontwikkeling',
            d: 'Maatwerkmodules als standaard Odoo niet volstaat — gebouwd met het oog op upgrades en beheerd in versiebeheer.',
            bullets: ['Ontwikkeling in Python', 'XML-views en aanpassing van de interface', 'Ontwikkeling van maatwerkmodules', 'Aanpassing van bedrijfslogica', 'Toegangsrechten en record rules', 'Geautomatiseerde activiteiten en goedkeuringsregels'],
          },
          {
            t: 'Odoo testen & probleemoplossing',
            d: 'Gestructureerd testen vóór livegang, en gericht onderzoek als er iets misgaat.',
            bullets: ['Functioneel testen', 'Regressietesten', 'Foutanalyse', 'Analyse van voorraadverschillen', 'Validatie van het verkoopproces', 'Technische probleemoplossing'],
          },
          {
            t: 'Odoo.sh & on-premise',
            d: 'Veilige ontwikkel- en releaseprocessen over ontwikkel-, staging- en productieomgevingen.',
            bullets: ['Ontwikkel-, staging- en productieomgevingen', 'Git-gebaseerde ontwikkelworkflows', 'Branchbeheer', 'Reviews van deployments', 'Technische probleemoplossing in omgevingen'],
          },
        ],
      },
      approach: {
        eyebrow: 'Werkwijze',
        title: 'Zo verloopt een Odoo-opdracht',
        lead: 'Geen verrassingen in productie: elke wijziging is begrepen, getest en uitgelegd voordat die live gaat.',
        steps: [
          { t: 'Begrijpen', d: 'Sessies met uw team om processen, rollen en knelpunten in kaart te brengen — voordat er iets wordt geconfigureerd.' },
          { t: 'Ontwerpen & configureren', d: 'Eerst standaard Odoo-functies; een duidelijke lijst van wat een maatwerkmodule nodig heeft, en waarom.' },
          { t: 'Ontwikkelen', d: 'Maatwerkmodules beheerd in Git en uitgerold via Odoo.sh-branches of uw eigen releaseproces.' },
          { t: 'Testen op staging', d: 'Elke wijziging getest op een kopie van uw data, met een stap-voor-stap testgids voor uw managers.' },
          { t: 'Trainen', d: 'Key users en teams getraind op hun eigen dagelijkse processen, in hun eigen taal.' },
          { t: 'Livegang & ondersteuning', d: 'Back-up en terugvalplan vóór de release, daarna opvolging terwijl het team went aan het systeem.' },
        ],
      },
      stack: {
        eyebrow: 'Technologie',
        title: 'Odoo-tools waarmee we werken',
        items: ['Odoo 18', 'Odoo.sh', 'Python', 'XML / QWeb', 'PostgreSQL', 'OWL / JavaScript', 'Git'],
      },
      integrationTeaser: {
        title: 'Odoo-data nodig in uw managementrapportage?',
        lead: 'Zie hoe Odoo een Azure- en Databricks-lakehouse en Power BI kan voeden.',
        cta: 'ERP- & data-integratie',
      },
    },

    integration: {
      title: 'Odoo naar Databricks integratie | ERP- & data-integratie | NexoIQ',
      description: 'Breng Odoo ERP-data naar Azure-datapijplijnen, een Databricks-lakehouse en Power BI. ERP-data-integratie vanuit Nederland voor klanten in Europa, Saudi-Arabië en de Golfregio.',
      hero: {
        eyebrow: 'ERP- & data-integratie',
        title: 'Uw Odoo-data, klaar voor enterprise-analyse',
        lead: 'NexoIQ combineert Odoo-kennis met ervaring in Azure en Databricks om ERP-data naar een beheerd lakehouse te brengen — en van daaruit naar Power BI.',
      },
      scenario: {
        eyebrow: 'Een typische situatie',
        title: 'Odoo draait de operatie. De rapportage draait op spreadsheets.',
        body: [
          'Een bedrijf gebruikt Odoo voor verkoop, inkoop en voorraadbeheer. Het management heeft centrale analyses nodig — marges, omloopsnelheid van voorraad, leveranciersprestaties — vaak gecombineerd met data uit andere systemen.',
          'Standaardrapporten in Odoo beantwoorden geen vragen over meerdere bedrijven of systemen heen, en handmatige exports naar spreadsheets zijn traag en foutgevoelig.',
        ],
      },
      architecture: {
        eyebrow: 'Voorbeeldarchitectuur',
        title: 'Van Odoo naar Power BI in zes stappen',
        note: 'Dit is een voorbeeldarchitectuur die onze aanpak illustreert. Het beschrijft geen specifieke klantimplementatie; elk ontwerp wordt afgestemd op uw omgeving, datavolumes en beveiligingseisen.',
        steps: [
          { t: 'Analyse van Odoo als databron', d: 'De modellen, velden en bedrijfsregels achter elke KPI in kaart brengen — verkooporders, voorraadmutaties, inkoopregels en facturen.' },
          { t: 'Architectuur voor data-extractie', d: 'De extractiemethode kiezen: de externe API van Odoo, of een read-only databasereplica waar directe toegang mogelijk is (meestal on-premise). Incrementeel laden op basis van wijzigingstijdstempels.' },
          { t: 'Azure-datapijplijnen', d: 'Geplande, gemonitorde pijplijnen zetten ruwe Odoo-data in Azure-opslag, met logging en herhaalpogingen.' },
          { t: 'Databricks Lakehouse', d: 'Bronze-, silver- en gold-lagen op Delta Lake, beheerd met Unity Catalog.' },
          { t: 'Datatransformatie & -modellering', d: 'Opschoning, valuta- en multi-company-verwerking, en een dimensioneel model met één definitie per KPI.' },
          { t: 'Integratie met Power BI', d: 'Semantische modellen en dashboards op de gold-laag, automatisch ververst.' },
        ],
      },
      evidence: {
        eyebrow: 'Transparantie',
        title: 'Wat bewezen is, en wat per project wordt ontworpen',
        provenTitle: 'Aangetoonde expertise',
        proven: [
          'Configuratie van Odoo 18 en ontwikkeling van maatwerkmodules',
          'Azure Databricks-lakehouses met Delta Lake en Unity Catalog',
          'Migratie van legacy ETL naar Databricks met CI/CD in Azure DevOps',
          'Power BI semantische modellen op ERP- en CRM-data',
          'SAP-data beschikbaar gemaakt in Databricks zonder te kopiëren',
        ],
        designedTitle: 'Ontworpen voor uw project',
        designed: [
          'De extractiemethode en laadfrequentie voor Odoo',
          'Welke Odoo-modules en -bedrijven binnen scope vallen',
          'Eisen voor beveiliging, toegang en dataresidentie',
          'KPI-definities en de set dashboards',
          'Hostingkeuzes en het budget voor cloudkosten',
        ],
      },
      deliverables: {
        eyebrow: 'Opleveringen',
        title: 'Wat u ontvangt',
        items: [
          'Architectuurdocument en datastroomdiagram',
          'Bron-naar-doel-mapping voor de Odoo-modellen binnen scope',
          'Pijplijnen en lakehouse-tabellen in uw eigen Azure-tenant',
          'Power BI-datamodel en eerste dashboards',
          'Overdrachtsdocumentatie en een walkthrough voor uw team',
        ],
      },
    },

    training: {
      title: 'Databricks- & Odoo-training en mentorship | NexoIQ',
      description: 'Incompany training en 1-op-1 mentorship in Databricks, PySpark, datamodellering en Power BI, plus Odoo-training voor key users en managers. In het Nederlands, Engels of Arabisch.',
      hero: {
        eyebrow: 'Training & mentorship',
        title: 'Training die blijvende kennis opbouwt',
        lead: 'Naast consultancy helpt NexoIQ teams zelfstandig te worden — met praktijkgerichte workshops, incompany trainingen en 1-op-1 mentorship.',
      },
      tracks: {
        eyebrow: 'Programma’s',
        title: 'Twee trainingstrajecten',
        items: [
          {
            t: 'Data engineering & Databricks',
            d: 'Praktijkgerichte trainingen en 1-op-1 coaching in Apache Spark, Databricks, geavanceerde SQL en moderne data-architectuur.',
            bullets: ['Databricks & PySpark fundamentals', 'Datakwaliteit & pijplijnorkestratie', 'Van ruwe data naar analyseklare tabellen', 'Praktijkgerichte enterprise use-cases', 'Power BI & DAX voor datateams'],
          },
          {
            t: 'Odoo & ERP-adoptie',
            d: 'Een ERP werkt pas als mensen het begrijpen. Key users en managers leren de processen die ze dagelijks gebruiken.',
            bullets: ['Odoo voor key users & managers', 'De ERP-flow begrijpen: CRM → verkoop → voorraad → factuur', 'Testscenario’s & handleidingen', 'Ondersteuning bij livegang'],
          },
        ],
      },
      formats: {
        eyebrow: 'Vormen',
        title: 'Hoe de training wordt gegeven',
        items: [
          { t: 'Incompany workshops', d: 'Teamsessies op uw eigen data en use-cases — op locatie in Nederland of remote.' },
          { t: '1-op-1 mentorship', d: 'Regelmatige coaching voor engineers die doorgroeien naar data engineering of Databricks.' },
          { t: 'Remote sessies', d: 'Live online training in het Nederlands, Engels of Arabisch.' },
        ],
      },
      cta: 'Vraag een teamtraining aan',
    },

    about: {
      title: 'Over NexoIQ | Data- & ERP-consultancy uit Nederland',
      description: 'NexoIQ is een Nederlandse technologieconsultancy voor data engineering en Odoo ERP, opgericht door Ahmad Alhashimi. Ingeschreven bij de KVK (42175764).',
      hero: {
        eyebrow: 'Over NexoIQ',
        title: 'Een gerichte consultancy voor data en ERP',
        lead: 'NexoIQ is een technologieconsultancy uit Nederland, ingeschreven bij de Kamer van Koophandel en gevestigd in de regio Rotterdam.',
      },
      story: {
        eyebrow: 'Ons verhaal',
        title: 'Ervaring in data engineering, toegepast op het ERP',
        body: [
          'NexoIQ is opgericht door Ahmad Alhashimi, data engineer en ERP-consultant met ruim acht jaar ervaring in enterprise dataplatformen — in de maakindustrie, verzekeringen en internationale programma’s.',
          'Die achtergrond bepaalt hoe NexoIQ met Odoo werkt: bedrijfsprocessen en datakwaliteit worden samen ontworpen, zodat het ERP dat uw operatie draait ook betrouwbare rapportages voedt.',
          'NexoIQ werkt rechtstreeks voor klanten, en samen met interne IT-teams, Odoo-partners en andere consultancies.',
        ],
      },
      founder: {
        name: 'Ahmad Alhashimi',
        role: 'Oprichter · Data- & ERP-consultant',
        background: 'Achtergrond in onder meer Azure Databricks, Power BI, SAP-data-integratie, Odoo en Microsoft Dynamics 365.',
      },
      expect: {
        eyebrow: 'Werken met NexoIQ',
        title: 'Wat u kunt verwachten',
        items: [
          { t: 'Direct contact', d: 'U werkt rechtstreeks met de consultant die het werk doet.' },
          { t: 'Heldere scope', d: 'Afgesproken scope, schattingen en regelmatige voortgangsupdates.' },
          { t: 'Eerlijk advies', d: 'Ook als een eenvoudigere of standaardoplossing volstaat.' },
          { t: 'Vertrouwelijkheid', d: 'Zorgvuldige omgang met uw data en bedrijfsinformatie.' },
        ],
      },
      details: {
        eyebrow: 'Bedrijfsgegevens',
        title: 'Registratie',
      },
    },

    contact: {
      title: 'Contact NexoIQ | Plan een data- of Odoo-adviesgesprek',
      description: 'Neem contact op met NexoIQ over data engineering, Odoo ERP-consultancy of ERP- en data-integratie. Remote consultancy voor Nederland, Saudi-Arabië en de Golfregio.',
      hero: {
        eyebrow: 'Contact',
        title: 'Laten we uw project bespreken',
        lead: 'Plan een adviesgesprek of beschrijf uw vraagstuk. Elk bericht krijgt een persoonlijke reactie.',
      },
      form: {
        title: 'Stuur een projectaanvraag',
        requiredNote: 'Velden met * zijn verplicht.',
        name: 'Volledige naam',
        email: 'Zakelijk e-mailadres',
        company: 'Bedrijfsnaam',
        country: 'Land',
        countryPlaceholder: 'bijv. Nederland, Saudi-Arabië',
        service: 'Gewenste dienst',
        servicePlaceholder: 'Kies een dienst',
        serviceOptions: ['Data Engineering', 'Odoo ERP', 'ERP-integratie', 'Anders'],
        engagement: 'Type samenwerking',
        engagementOptions: ['Maandelijkse consultancy', 'Projectbasis'],
        message: 'Projectomschrijving',
        messageHint: 'Waar werkt u aan, en waarbij wilt u hulp?',
        consent: 'Ik ga ermee akkoord dat NexoIQ de gegevens in dit formulier verwerkt om mijn aanvraag te beantwoorden, zoals beschreven in de',
        consentLink: 'privacyverklaring',
        submit: 'Verstuur aanvraag',
        sending: 'Versturen…',
        honeypot: 'Laat dit veld leeg',
        errors: {
          summary: 'Controleer de gemarkeerde velden.',
          required: 'Dit veld is verplicht.',
          email: 'Vul een geldig e-mailadres in, bijv. naam@bedrijf.nl.',
          consent: 'Ga akkoord met de privacyverklaring om het formulier te versturen.',
          minMessage: 'Beschrijf uw project in minimaal 20 tekens.',
        },
      },
      direct: {
        title: 'Liever per e-mail?',
        lead: 'U kunt ook direct mailen — het formulier is niet verplicht.',
        biz: 'Projecten & training',
        person: 'Direct naar Ahmad',
      },
      engagement: {
        title: 'Manieren van samenwerken',
        items: [
          { t: 'Kennismakingsgesprek', d: 'Bespreek uw situatie en of NexoIQ goed aansluit.' },
          { t: 'Projectbasis', d: 'Een afgebakende scope met heldere opleveringen.' },
          { t: 'Maandelijkse consultancy', d: 'Doorlopende ondersteuning of een vast aantal dagen per maand.' },
        ],
      },
      location: 'Gevestigd in de regio Rotterdam · Op locatie in Nederland · Remote voor Saudi-Arabië, de Golfregio en elders',
    },

    thanks: {
      title: 'Bedankt | NexoIQ',
      description: 'Uw aanvraag is naar NexoIQ verstuurd.',
      heading: 'Bedankt — uw aanvraag is verstuurd',
      lead: 'NexoIQ reageert persoonlijk. Is uw vraag dringend? Mail dan naar info@nexoiq.nl.',
      back: 'Terug naar home',
    },

    privacy: {
      title: 'Privacyverklaring | NexoIQ',
      description: 'Hoe NexoIQ omgaat met persoonsgegevens die via deze website en per e-mail worden verstrekt.',
      heading: 'Privacyverklaring',
      updated: 'Laatst bijgewerkt: 18 november 2026',
      sections: [
        { t: 'Wie wij zijn', p: ['NexoIQ is een eenmanszaak, ingeschreven bij de Kamer van Koophandel (KVK 42175764) en gevestigd in de regio Rotterdam. NexoIQ is verwerkingsverantwoordelijke voor de persoonsgegevens in deze verklaring.', 'Contact voor privacyvragen: info@nexoiq.nl.'] },
        { t: 'Welke gegevens wij verwerken', p: ['Contactformulier: uw naam, zakelijk e-mailadres, bedrijfsnaam, land, de gekozen dienst en het type samenwerking, uw projectomschrijving en uw privacytoestemming.', 'E-mail: de gegevens die u in uw e-mail opneemt.', 'Hosting: onze hostingprovider verwerkt technische gegevens zoals IP-adressen in serverlogs om de website te leveren en te beveiligen.', 'Deze website gebruikt geen analytics of trackingcookies.'] },
        { t: 'Waarom wij gegevens verwerken', p: ['Om uw aanvraag te beantwoorden en, waar relevant, een voorstel of overeenkomst voor te bereiden (precontractuele stappen en ons gerechtvaardigd belang bij het beantwoorden van zakelijke aanvragen). Wij gebruiken uw gegevens niet voor nieuwsbrieven of andere marketing.'] },
        { t: 'Dienstverleners', p: ['Netlify host deze website en ontvangt namens ons de inzendingen van het contactformulier. Lettertypen worden geladen via Google Fonts en de opmaak via een content delivery network; deze diensten ontvangen uw IP-adres wanneer u een pagina laadt.', 'Sommige van deze partijen zijn buiten de Europese Economische Ruimte gevestigd. In dat geval is de doorgifte gebaseerd op waarborgen die de AVG erkent, zoals het EU-VS Data Privacy Framework of standaardcontractbepalingen.'] },
        { t: 'Hoe lang wij gegevens bewaren', p: ['Aanvragen die niet tot een opdracht leiden, verwijderen wij binnen 24 maanden. Volgt er een opdracht, dan bewaren wij de gegevens zolang nodig voor de opdracht en voor wettelijke bewaartermijnen, zoals de fiscale bewaarplicht van zeven jaar.'] },
        { t: 'Uw rechten', p: ['U kunt vragen om inzage, correctie of verwijdering van uw persoonsgegevens, beperking van of bezwaar tegen de verwerking, en overdraagbaarheid van gegevens. Stuur uw verzoek naar info@nexoiq.nl.', 'U hebt ook het recht een klacht in te dienen bij de Autoriteit Persoonsgegevens.'] },
        { t: 'Beveiliging', p: ['Wij nemen passende technische en organisatorische maatregelen om persoonsgegevens te beschermen, in verhouding tot de aard van de gegevens en de risico’s.'] },
        { t: 'Wijzigingen', p: ['Wij kunnen deze verklaring aanpassen. De datum bovenaan laat zien wanneer deze voor het laatst is gewijzigd.'] },
      ],
    },

    notFound: {
      title: 'Pagina niet gevonden | NexoIQ',
      description: 'De pagina die u zoekt bestaat niet.',
      heading: 'Pagina niet gevonden',
      lead: 'De pagina die u zoekt is mogelijk verplaatst. Probeer een van deze pagina’s:',
    },
  },
};
