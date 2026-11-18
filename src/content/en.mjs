// English content. nl.mjs and ar.mjs must have exactly the same shape —
// the build fails if a key or list length differs between languages.
// All strings are plain text; templates escape them.

export default {
  meta: {
    locale: 'en-GB',
    ogLocale: 'en_GB',
    langName: 'English',
  },

  common: {
    skip: 'Skip to content',
    navLabel: 'Main',
    menu: 'Menu',
    language: 'Language',
    nav: {
      home: 'Home',
      dataEngineering: 'Data Engineering',
      odoo: 'Odoo ERP Consulting',
      integration: 'ERP & Data Integration',
      training: 'Training & Mentorship',
      about: 'About NexoIQ',
      contact: 'Contact',
      privacy: 'Privacy',
    },
    cta: {
      book: 'Book a consultation',
      explore: 'Explore our services',
      discuss: 'Discuss your project',
      learnMore: 'Learn more',
    },
    breadcrumb: 'Breadcrumb',
    footer: {
      tagline: 'Netherlands-based technology consultancy for data engineering, Odoo ERP and the integration between them.',
      services: 'Services',
      company: 'Company',
      backToTop: 'Back to top',
      rights: 'All rights reserved.',
    },
    legal: {
      name: 'Trade name',
      form: 'sole proprietorship',
      kvk: 'KvK number',
      vat: 'VAT ID',
      vatValue: 'stated on invoice',
      registered: 'Registered',
      registeredValue: 'KvK Rotterdam, South Holland',
      working: 'Working',
      workingValue: 'on-site in the Netherlands · remote elsewhere',
    },
    finalCta: {
      title: 'Have a data or ERP challenge?',
      lead: 'Tell us what you are working on. You will get a straight answer on whether and how NexoIQ can help.',
    },
  },

  pages: {
    home: {
      title: 'NexoIQ | Data Engineering, Odoo ERP & Integration Consultancy',
      description: 'Netherlands-based consultancy for Azure & Databricks data engineering, Odoo 18 ERP consulting and Odoo-to-lakehouse integration. Serving the Netherlands, Saudi Arabia and the GCC.',
      hero: {
        eyebrow: 'Technology consultancy · Netherlands · Saudi Arabia & GCC',
        title1: 'Connecting Business,',
        title2: 'Data & Technology.',
        lead: 'NexoIQ helps businesses build reliable data platforms, optimize ERP operations, and connect enterprise systems through practical technology consulting.',
        stats: [
          { k: 'Experience', v: '8+ yrs' },
          { k: 'Focus', v: 'Azure · Databricks · Odoo 18' },
          { k: 'Languages', v: 'EN · NL · AR' },
        ],
        vizLabel: 'Example data flow: Odoo ERP to Azure data pipelines, Databricks lakehouse and Power BI',
        viz: [
          { t: 'Odoo ERP', d: 'Sales · purchasing · inventory' },
          { t: 'Azure Data Pipelines', d: 'Extract · load · schedule' },
          { t: 'Databricks Lakehouse', d: 'Delta Lake · data modeling' },
          { t: 'Power BI', d: 'KPIs · dashboards · decisions' },
        ],
      },
      services: {
        eyebrow: 'Services',
        title: 'Three practices, one connected approach',
        lead: 'Specialist consulting in data platforms and Odoo ERP — and the integration work that connects them.',
        pillars: [
          {
            title: 'Data Engineering & Cloud Consulting',
            desc: 'Reliable data platforms on Microsoft Azure and Databricks — from ingestion and lakehouse architecture to SAP data integration.',
            items: ['Microsoft Azure', 'Azure Databricks', 'Data Engineering', 'Lakehouse Architecture', 'SAP Datasphere', 'SAP Business Data Cloud', 'Data Integration', 'Delta Sharing'],
          },
          {
            title: 'Odoo ERP Consulting & Development',
            desc: 'Odoo 18 configured around your real processes, and extended with custom modules where standard features fall short.',
            items: ['Odoo 18 Configuration', 'Python & XML Custom Module Development', 'Business Process Customization', 'Sales and Inventory Customization', 'Multi-Company Configuration', 'Functional Testing and Troubleshooting', 'Odoo.sh', 'On-Premise Environments'],
          },
          {
            title: 'ERP & Data Integration',
            desc: 'Bring Odoo data into an Azure and Databricks lakehouse, so management reporting runs on one trusted source.',
            items: ['Odoo Data Extraction', 'ERP Data Integration', 'Azure Data Pipelines', 'Databricks Lakehouse', 'Data Modeling', 'Power BI Integration'],
          },
        ],
      },
      principles: {
        eyebrow: 'How we work',
        title: 'Practical consulting, built to last',
        items: [
          { t: 'Standard first', d: 'Use what the platform already offers before building anything custom.' },
          { t: 'Tested before production', d: 'Staging environments, test scenarios and a rollback plan for every release.' },
          { t: 'Documented and handed over', d: 'Your team understands and can run what is delivered.' },
          { t: 'Sized to your business', d: 'Solutions that fit your volumes, budget and team — not the biggest possible architecture.' },
        ],
      },
      regions: {
        eyebrow: 'Where we work',
        title: 'From the Netherlands to Saudi Arabia and the GCC',
        lead: 'Based in the Netherlands, NexoIQ supports businesses across the Netherlands, Saudi Arabia, and the GCC through flexible remote consulting and project-based engagements.',
        items: [
          { t: 'Remote consulting', d: 'Workshops, development and reviews delivered online, across time zones.' },
          { t: 'Project-based delivery', d: 'Defined scope, clear deliverables and agreed acceptance criteria.' },
          { t: 'Monthly consulting engagements', d: 'Ongoing support or a fixed number of consulting days per month.' },
          { t: 'Arabic and English communication', d: 'Workshops, documentation and training in Arabic, English or Dutch.' },
          { t: 'Flexible collaboration', d: 'Alongside your internal team, your Odoo partner or your IT provider.' },
        ],
        note: 'NexoIQ is registered in the Netherlands. Clients outside the Netherlands are served remotely; NexoIQ has no office or legal entity in Saudi Arabia or other GCC countries.',
      },
      training: {
        eyebrow: 'Training & mentorship',
        title: 'Build capability inside your team',
        lead: 'Hands-on training in Databricks, PySpark and data modeling — and Odoo training for key users and managers.',
        cta: 'View training programmes',
      },
    },

    dataEngineering: {
      title: 'Data Engineering Consulting Netherlands | Azure & Databricks | NexoIQ',
      description: 'Azure data engineering and Databricks consulting from the Netherlands: lakehouse architecture, data pipelines, SAP Datasphere integration, data modeling and Power BI.',
      hero: {
        eyebrow: 'Data Engineering & Cloud Consulting',
        title: 'Reliable data platforms on Azure and Databricks',
        lead: 'NexoIQ designs and builds data platforms that turn scattered source data into trusted, analytics-ready tables — for reporting, planning and AI use cases.',
      },
      capabilities: {
        eyebrow: 'Capabilities',
        title: 'What we deliver',
        items: [
          { t: 'Azure Databricks & lakehouse architecture', d: 'Medallion-structured lakehouses on Delta Lake with Unity Catalog governance, built for batch and incremental loads.', tags: 'Azure Databricks • Delta Lake • Unity Catalog' },
          { t: 'Data pipelines & orchestration', d: 'Ingestion and transformation pipelines with PySpark, dbt and Azure Data Factory — scheduled, monitored and version-controlled.', tags: 'PySpark • dbt • Azure Data Factory • Airflow' },
          { t: 'SAP Datasphere & SAP Business Data Cloud', d: 'Making SAP data available in Databricks and downstream analytics, including zero-copy sharing where the landscape supports it.', tags: 'SAP Datasphere • SAP BDC • Delta Sharing' },
          { t: 'Data integration', d: 'Connecting ERP, CRM and operational systems into one platform, with clear ownership of every source.', tags: 'APIs • Batch & incremental loads' },
          { t: 'Data modeling & Power BI', d: 'Dimensional and semantic models so every KPI has one definition, shared across teams.', tags: 'Dimensional modeling • Power BI • DAX' },
          { t: 'Quality, CI/CD & governance', d: 'Data quality checks, automated deployment through Azure DevOps and access control by design.', tags: 'Azure DevOps • CI/CD • Data quality' },
        ],
      },
      experience: {
        eyebrow: 'Selected experience',
        title: 'Experience from enterprise data programmes',
        lead: 'Examples from previous engagements in manufacturing, insurance and international programmes. Client names are not published.',
        items: [
          { tag: 'Modernisation', t: 'Legacy ETL → Azure Databricks Lakehouse', d: 'For an international manufacturing group: legacy SSIS workflows moved to one lakehouse on PySpark, Delta Lake and Unity Catalog, with CI/CD in Azure DevOps.' },
          { tag: 'Reporting', t: 'ERP & CRM data → Power BI', d: 'Enterprise semantic models on ERP and CRM data — one definition of every KPI, shared by regional business units and refreshed automatically.' },
          { tag: 'Integration', t: 'Zero-copy SAP integration', d: 'SAP data consumed in Databricks without copying it — lower latency, no duplicated storage, one source of truth.' },
          { tag: 'Scale', t: 'Regulated & multi-country data', d: 'Dimensional models for risk and actuarial teams in insurance, and executive dashboards for multi-country programmes reaching 100K+ people.' },
        ],
      },
      stack: {
        eyebrow: 'Technology',
        title: 'Tools and platforms',
        groups: [
          { t: 'Data engineering & cloud', items: ['Azure Databricks', 'Delta Lake', 'Unity Catalog', 'PySpark', 'dbt', 'Azure Data Factory', 'Apache Airflow', 'BigQuery'] },
          { t: 'BI & data modeling', items: ['Power BI', 'DAX', 'Dimensional Modeling', 'Data Vault', 'Medallion', 'SQL / T-SQL'] },
          { t: 'DevOps & governance', items: ['Azure DevOps', 'CI/CD', 'Automated tests', 'Data quality contracts', 'GDPR-aware design'] },
        ],
      },
      certs: {
        eyebrow: 'Certifications',
        title: 'Always learning',
      },
      calculator: {
        eyebrow: 'Estimator',
        title: 'Pipeline efficiency & cloud compute estimator',
        lead: 'An illustrative estimate of the query speed-up and annual compute savings that lakehouse optimisation can bring. The estimate is based only on the data volume you enter.',
        volumeLabel: 'Monthly data volume',
        volumeUnit: 'TB',
        accelLabel: 'Illustrative query speed-up',
        savingsLabel: 'Illustrative annual savings',
        fasterSuffix: '× faster',
        badge: 'Illustrative estimate',
        assumptionsTitle: 'How this estimate is calculated',
        assumptions: [
          'Annual savings = €4,800 per TB of monthly data volume + a fixed base of €2,200.',
          'Query speed-up = 2.5× base + 0.35× per TB of monthly data volume.',
          'These are fixed reference coefficients, not measurements of your environment. Your current architecture, workload patterns, cloud pricing and contracts are not taken into account.',
        ],
        disclaimer: 'Illustrative estimate only — not a quote, forecast or guarantee of results. A short assessment of your environment is needed for a realistic figure.',
        cta: 'Request an assessment',
      },
    },

    odoo: {
      title: 'Odoo 18 Consultant | Odoo ERP Consulting & Custom Modules | NexoIQ',
      description: 'Odoo 18 consulting and custom module development in Python and XML: business analysis, sales and inventory configuration, testing, troubleshooting, Odoo.sh and on-premise support. Netherlands, Saudi Arabia & GCC.',
      hero: {
        eyebrow: 'Odoo ERP Consulting & Development',
        title: 'Odoo 18, configured and extended around how your business works',
        lead: 'From business analysis and configuration to custom Python modules, testing and environment support — on Odoo.sh or on-premise.',
        version: 'Current specialisation: Odoo 18. Work on other versions is assessed case by case.',
      },
      services: {
        eyebrow: 'Services',
        title: 'Odoo services',
        items: [
          {
            t: 'Odoo Configuration & Business Analysis',
            d: 'We start with how your teams actually work, then configure Odoo to fit.',
            bullets: ['Business process analysis', 'Sales and purchasing workflows', 'Inventory configuration', 'Multi-company environments', 'Business process optimization', 'CRM pipelines and approval flows'],
          },
          {
            t: 'Odoo Custom Development',
            d: 'Custom modules when standard Odoo is not enough — built upgrade-aware and kept in version control.',
            bullets: ['Python development', 'XML views and interface customization', 'Custom module development', 'Business logic customization', 'Access rights and record rules', 'Automated activities and approval rules'],
          },
          {
            t: 'Odoo Testing & Troubleshooting',
            d: 'Structured testing before go-live, and focused investigation when something goes wrong.',
            bullets: ['Functional testing', 'Regression testing', 'Error investigation', 'Inventory and stock discrepancy analysis', 'Sales order workflow validation', 'Technical troubleshooting'],
          },
          {
            t: 'Odoo.sh & On-Premise',
            d: 'Safe development and release workflows across development, staging and production.',
            bullets: ['Development, staging and production environments', 'Git-based development workflows', 'Branch management', 'Deployment reviews', 'Technical environment troubleshooting'],
          },
        ],
      },
      approach: {
        eyebrow: 'Approach',
        title: 'How an Odoo engagement runs',
        lead: 'No surprises in production: every change is understood, tested and explained before it goes live.',
        steps: [
          { t: 'Understand', d: 'Sessions with your team to map processes, roles and pain points — before touching any configuration.' },
          { t: 'Design & configure', d: 'Standard Odoo features first; a clear list of what needs a custom module, and why.' },
          { t: 'Develop', d: 'Custom modules kept in Git and deployed through Odoo.sh branches or your own release process.' },
          { t: 'Test on staging', d: 'Every change tried on a copy of your data, with a step-by-step test guide for your managers.' },
          { t: 'Train', d: 'Key users and teams trained on their own daily flows, in their own language.' },
          { t: 'Go live & support', d: 'Backup and rollback plan before release, then follow-up while the team settles in.' },
        ],
      },
      stack: {
        eyebrow: 'Technology',
        title: 'Odoo tools we work with',
        items: ['Odoo 18', 'Odoo.sh', 'Python', 'XML / QWeb', 'PostgreSQL', 'OWL / JavaScript', 'Git'],
      },
      integrationTeaser: {
        title: 'Need your Odoo data in management reporting?',
        lead: 'See how Odoo can feed an Azure and Databricks lakehouse and Power BI.',
        cta: 'ERP & Data Integration',
      },
    },

    integration: {
      title: 'Odoo to Databricks Integration | ERP & Data Integration | NexoIQ',
      description: 'Bring Odoo ERP data into Azure data pipelines, a Databricks lakehouse and Power BI. ERP data integration consulting from the Netherlands for clients in Europe, Saudi Arabia and the GCC.',
      hero: {
        eyebrow: 'ERP & Data Integration',
        title: 'Your Odoo data, ready for enterprise analytics',
        lead: 'NexoIQ combines Odoo know-how with Azure and Databricks experience to bring ERP data into a governed lakehouse — and on to Power BI.',
      },
      scenario: {
        eyebrow: 'A typical scenario',
        title: 'Odoo runs the operation. Reporting runs on spreadsheets.',
        body: [
          'A company uses Odoo for sales, purchasing and inventory management. Management needs centralised analytics — margins, stock turnover, supplier performance — often combined with data from other systems.',
          'Standard Odoo reports do not cover cross-company or cross-system questions, and manual exports to spreadsheets are slow and error-prone.',
        ],
      },
      architecture: {
        eyebrow: 'Example solution architecture',
        title: 'From Odoo to Power BI in six steps',
        note: 'This is an example architecture that illustrates our approach. It does not describe a specific client implementation; every design is adapted to your environment, data volumes and security requirements.',
        steps: [
          { t: 'Odoo data source analysis', d: 'Identify the models, fields and business rules behind each KPI — sales orders, stock moves, purchase lines and invoices.' },
          { t: 'Data extraction architecture', d: 'Choose the extraction method: the Odoo external API, or a read-only database replica where direct access is available (typically on-premise). Incremental loads based on change timestamps.' },
          { t: 'Azure Data Pipelines', d: 'Scheduled, monitored pipelines land raw Odoo data in Azure storage, with logging and retry handling.' },
          { t: 'Databricks Lakehouse', d: 'Bronze, silver and gold layers on Delta Lake, governed with Unity Catalog.' },
          { t: 'Data transformation & modeling', d: 'Cleansing, currency and multi-company handling, and a dimensional model with one definition per KPI.' },
          { t: 'Power BI reporting integration', d: 'Semantic models and dashboards on the gold layer, refreshed automatically.' },
        ],
      },
      evidence: {
        eyebrow: 'Transparency',
        title: 'What is proven, and what is designed per project',
        provenTitle: 'Demonstrated capabilities',
        proven: [
          'Odoo 18 configuration and custom module development',
          'Azure Databricks lakehouses with Delta Lake and Unity Catalog',
          'Migration of legacy ETL to Databricks with CI/CD in Azure DevOps',
          'Power BI semantic models on ERP and CRM data',
          'SAP data made available in Databricks without copying',
        ],
        designedTitle: 'Designed for your project',
        designed: [
          'The Odoo extraction method and load frequency',
          'Which Odoo modules and companies are in scope',
          'Security, access and data residency requirements',
          'KPI definitions and the dashboard set',
          'Hosting choices and cloud cost budget',
        ],
      },
      deliverables: {
        eyebrow: 'Deliverables',
        title: 'What you receive',
        items: [
          'Architecture document and data flow diagram',
          'Source-to-target mapping for the in-scope Odoo models',
          'Pipelines and lakehouse tables in your own Azure tenant',
          'Power BI data model and initial dashboards',
          'Handover documentation and a walkthrough for your team',
        ],
      },
    },

    training: {
      title: 'Databricks & Odoo Training and Mentorship | NexoIQ',
      description: 'In-company training and 1:1 mentorship in Databricks, PySpark, data modeling and Power BI, plus Odoo training for key users and managers. In English, Arabic or Dutch.',
      hero: {
        eyebrow: 'Training & Mentorship',
        title: 'Training that builds lasting capability',
        lead: 'Alongside consulting, NexoIQ helps teams become self-sufficient — through practical workshops, in-company training and one-to-one mentorship.',
      },
      tracks: {
        eyebrow: 'Programmes',
        title: 'Two training tracks',
        items: [
          {
            t: 'Data Engineering & Databricks',
            d: 'Hands-on training and 1:1 coaching in Apache Spark, Databricks, advanced SQL and modern data architecture.',
            bullets: ['Databricks & PySpark fundamentals', 'Data quality & pipeline orchestration', 'From raw data to analytics-ready tables', 'Practical enterprise use cases', 'Power BI & DAX for data teams'],
          },
          {
            t: 'Odoo & ERP adoption',
            d: 'An ERP only works when people understand it. Key users and managers learn the flows they use every day.',
            bullets: ['Odoo for key users & managers', 'Understanding the ERP flow: CRM → sales → stock → invoice', 'Test scenarios & user guides', 'Go-live support'],
          },
        ],
      },
      formats: {
        eyebrow: 'Formats',
        title: 'How training is delivered',
        items: [
          { t: 'In-company workshops', d: 'Team sessions on your own data and use cases — on-site in the Netherlands or remote.' },
          { t: '1:1 mentorship', d: 'Regular coaching for engineers growing into data engineering or Databricks roles.' },
          { t: 'Remote sessions', d: 'Live online training in English, Arabic or Dutch.' },
        ],
      },
      cta: 'Request team training',
    },

    about: {
      title: 'About NexoIQ | Netherlands-based Data & ERP Consultancy',
      description: 'NexoIQ is a Netherlands-based technology consultancy for data engineering and Odoo ERP, founded by Ahmad Alhashimi. Registered with the Dutch Chamber of Commerce (KvK 42175764).',
      hero: {
        eyebrow: 'About NexoIQ',
        title: 'A focused consultancy for data and ERP',
        lead: 'NexoIQ is a Netherlands-based technology consultancy, registered with the Dutch Chamber of Commerce and based in the Rotterdam area.',
      },
      story: {
        eyebrow: 'Our story',
        title: 'Data engineering experience, applied to the ERP',
        body: [
          'NexoIQ was founded by Ahmad Alhashimi, a data engineer and ERP consultant with more than eight years of experience in enterprise data platforms — in manufacturing, insurance and international programmes.',
          'That background shapes how NexoIQ works on Odoo: business processes and data quality are designed together, so the ERP that runs your operation also feeds reliable reporting.',
          'NexoIQ works directly with clients, and alongside internal IT teams, Odoo partners and other consultancies.',
        ],
      },
      founder: {
        name: 'Ahmad Alhashimi',
        role: 'Founder · Data & ERP Consultant',
        background: 'Background includes Azure Databricks, Power BI, SAP data integration, Odoo and Microsoft Dynamics 365.',
      },
      expect: {
        eyebrow: 'Working with NexoIQ',
        title: 'What you can expect',
        items: [
          { t: 'Direct access', d: 'You work directly with the consultant doing the work.' },
          { t: 'Clear scope', d: 'Agreed scope, estimates and regular progress updates.' },
          { t: 'Honest advice', d: 'Including when a simpler or standard solution is enough.' },
          { t: 'Confidentiality', d: 'Careful handling of your data and business information.' },
        ],
      },
      details: {
        eyebrow: 'Company details',
        title: 'Registration',
      },
    },

    contact: {
      title: 'Contact NexoIQ | Book a Data or Odoo Consultation',
      description: 'Contact NexoIQ about data engineering, Odoo ERP consulting or ERP and data integration. Remote consulting for the Netherlands, Saudi Arabia and the GCC.',
      hero: {
        eyebrow: 'Contact',
        title: "Let's discuss your project",
        lead: 'Book a consultation or describe your challenge. Every message receives a personal reply.',
      },
      form: {
        title: 'Send a project enquiry',
        requiredNote: 'Fields marked * are required.',
        name: 'Full name',
        email: 'Business email',
        company: 'Company name',
        country: 'Country',
        countryPlaceholder: 'e.g. Netherlands, Saudi Arabia',
        service: 'Service required',
        servicePlaceholder: 'Select a service',
        serviceOptions: ['Data Engineering', 'Odoo ERP', 'ERP Integration', 'Other'],
        engagement: 'Engagement type',
        engagementOptions: ['Monthly Consulting', 'Project-Based'],
        message: 'Project description',
        messageHint: 'What are you working on, and what would you like help with?',
        consent: 'I agree that NexoIQ processes the details in this form to respond to my enquiry, as described in the',
        consentLink: 'privacy statement',
        submit: 'Send enquiry',
        sending: 'Sending…',
        honeypot: 'Leave this field empty',
        errors: {
          summary: 'Please correct the highlighted fields.',
          required: 'This field is required.',
          email: 'Enter a valid email address, e.g. name@company.com.',
          consent: 'Please agree to the privacy statement to send the form.',
          minMessage: 'Please describe your project in at least 20 characters.',
        },
      },
      direct: {
        title: 'Prefer email?',
        lead: 'You can also email directly — the form is optional.',
        biz: 'Projects & training',
        person: 'Ahmad directly',
      },
      engagement: {
        title: 'Ways to work together',
        items: [
          { t: 'Introductory call', d: 'Discuss your situation and whether NexoIQ is a good fit.' },
          { t: 'Project-based', d: 'A defined scope with clear deliverables.' },
          { t: 'Monthly consulting', d: 'Ongoing support or a fixed number of days per month.' },
        ],
      },
      location: 'Based in the Rotterdam area, Netherlands · On-site in the Netherlands · Remote for Saudi Arabia, the GCC and elsewhere',
    },

    thanks: {
      title: 'Thank you | NexoIQ',
      description: 'Your enquiry has been sent to NexoIQ.',
      heading: 'Thank you — your enquiry has been sent',
      lead: 'NexoIQ will reply to you personally. If your request is urgent, email info@nexoiq.nl.',
      back: 'Back to home',
    },

    privacy: {
      title: 'Privacy Statement | NexoIQ',
      description: 'How NexoIQ handles personal data submitted through this website and by email.',
      heading: 'Privacy statement',
      updated: 'Last updated: 18 November 2026',
      sections: [
        { t: 'Who we are', p: ['NexoIQ is a sole proprietorship registered with the Dutch Chamber of Commerce (KvK 42175764), based in the Rotterdam area, the Netherlands. NexoIQ is the controller for the personal data described in this statement.', 'Contact for privacy questions: info@nexoiq.nl.'] },
        { t: 'What data we process', p: ['Contact form: your name, business email, company name, country, the service and engagement type you select, your project description, and your privacy consent.', 'Email: the details you include when you email us.', 'Hosting: our hosting provider processes technical data such as IP addresses in server logs to deliver and secure the website.', 'This website does not use analytics or tracking cookies.'] },
        { t: 'Why we process it', p: ['To respond to your enquiry and, where relevant, to prepare a proposal or agreement (steps prior to entering into a contract, and our legitimate interest in answering business enquiries). We do not use your details for newsletters or unrelated marketing.'] },
        { t: 'Service providers', p: ['Netlify hosts this website and receives contact form submissions on our behalf. Fonts are loaded from Google Fonts and page styling from a content delivery network; these services receive your IP address when you load a page.', 'Some of these providers are based outside the European Economic Area. Where that is the case, transfers rely on safeguards recognised under the GDPR, such as the EU–US Data Privacy Framework or Standard Contractual Clauses.'] },
        { t: 'How long we keep it', p: ['Enquiries that do not lead to an engagement are deleted within 24 months. If an engagement follows, related records are kept as long as needed for the engagement and for statutory retention periods, such as the seven-year Dutch tax retention obligation.'] },
        { t: 'Your rights', p: ['You can ask for access to, correction or deletion of your personal data, restriction of or objection to processing, and data portability. Send your request to info@nexoiq.nl.', 'You also have the right to lodge a complaint with the Dutch Data Protection Authority (Autoriteit Persoonsgegevens).'] },
        { t: 'Security', p: ['We take appropriate technical and organisational measures to protect personal data, in proportion to the nature of the data and the risks involved.'] },
        { t: 'Changes', p: ['We may update this statement. The date at the top shows when it was last changed.'] },
      ],
    },

    notFound: {
      title: 'Page not found | NexoIQ',
      description: 'The page you are looking for does not exist.',
      heading: 'Page not found',
      lead: 'The page you are looking for may have moved. Try one of these instead:',
    },
  },
};
