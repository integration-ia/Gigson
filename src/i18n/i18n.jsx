import i18n from 'i18next'
import LanguageDetector from 'i18next-browser-languagedetector'
import {initReactI18next} from 'react-i18next'

i18n
    .use(LanguageDetector)
    .use(initReactI18next)
    .init({
        debug: false,
        fallbackLng: 'en',
        returnObjects: true,
        resources: {
            en: {
                translation:{
                    menu: {
                        about: "ABOUT",
                        services: "SERVICES",
                        cases: "CASES",
                        faqs: "FAQs",
                        contact: "CONTACT US",
                        legal: "Legal Policy",
                        cookies: "Cookies Policy",
                        notice: "Legal Notice"
                    },
                    home:{
                        heroH1: "Making technology <span>boost</span> your business<span>.</span>",
                        heroP: "BUILDING TAILORED SOFTWARE SOLUTIONS",
                        heroBtn: "ABOUT US",
                        heroScroll: "GO DOWN TO EXPORE",
                        servicesTitle: "Tailored <span>solutions</span> for any business ·",
                        servicesP: {
                            p1: "We are focused to leverage the technology to  your business, connecting and making it secure to align needs and business goals.",
                            p2: "And if your solution does not exist yet, let’s build it together."
                        },
                        servicesBtn: "DISCOVER OUR SERVICES"
                    },
                    ctas: {
                        contact: "CONTACT US"
                    },
                    about: {
                        title: "Our team is built by professionals with more than <span>9 years</span> of experience.",
                        description: "We have the required profiles to face the end-to-end digital product development to offer an all-in-one service.",
                        cta: "LET’S TALK",
                        titleH2: "What be believe",
                        belive: {
                            t1: "Quality",
                            t2: "Commitment",
                            t3: "Security",
                            p1: "Regardless of whether we're crafting a proof of concept or a final product, we apply various product quality and project management standards to ensure that every product meets and exceeds expectations.",
                            p2: "You'll have the flexibility to choose the level of engagement you prefer with us. We'll always be by your side to support you at any stage, but if you decide not to continue, we'll handle the closure and necessary handover, complying with all current legal requirements.",
                            p3: "Security is essential to us. We offer the ability to audit and certify our cloud solutions with CIS, CISA, FedRAMP, PCI-DSS, GDPR, FFIEC, and SOC2."
                        },
                        need: {
                            t: "What do I need to build a <span>Digital product</span>?",
                            d: "Develop a software product is much more than just building physical product or running a project. This type of products require full attention and knowledge in different areas to avoid costs overrun or technology limitations.",
                            specialist1: "WHO MANAGE THE PRODUCT",
                            specialist2: "WHO CODES ALMOST EVERYTHING",
                            specialist3: "WHO DESIGN THE SOLUTION",
                            specialist4: "WHO CODES HOW THE PRODUCT WORKS",
                            specialist5: "WHO THINKS ABOUT THE BUSINESS",
                            specialist6: "WHO CODES WHAT YOU SEE",
                            specialist7: "WHO VALIDATES",
                            specialist8: "WHO DESIGN WHAT YOU FEEL",
                            specialist9: "WHO SECURE THE PRODUCT",
                            label: "*Not all of these roles are necessary in all products. Wisely selection is needed depending on needs and sectors.",
                            cta2: "CONTACT US"
                        },
                    },
                    cases: {
                        heroH1: "Some cases we can do for <span>your business</span>",
                        heroP: "Here you can find some business cases we have worked by diferrent sectors and needs.",
                        tagTitle: "What’s your sector?",
                        needTitle: "What’s your actual need?",
                        resetFilters: "RESET FILTERS",
                        featuresTitle: "Features",
                        solutionTitle: "Solution",
                        toolsTitle: "specifications"
                    },
                    dropdown: [
                        {
                            title: "CRM & ERP Integration", 
                            subTitle: "CRM and ERP Integration for Architecture and Interior Design", 
                            challenge: "Develop a solution that integrates the current Enterprise Resource Planning (ERP) system with a Customer Relationship Management (CRM) system for the architecture and interior design sector. The challenge was to synchronize the management of B2B and B2C accounts with projects at a single point, improving operational efficiency, resource allocation accuracy, and providing a unified view of project conceptualization, design, and execution.",
                            features: [
                                "Unified management of clients and projects between CRM and ERP.", 
                                "Integrated dashboard for real-time tracking of project progress, providing client visibility and internal time reporting.",
                                "Automation of invoicing and accounts receivable tracking within the project workflow.",
                                "Coordination of purchases and budgets through the integrated ERP platform.",
                                "Profitability analysis of projects and portfolio management of services."
                            ],
                            solution: "The integration of HubSpot (CRM) with Asana (project management) and Holded (ERP) provides a complete solution for managing architecture and interior design projects. The solution allowed users to have a comprehensive view of the customer and project lifecycle, from customer acquisition to final project delivery and after-sales service.",
                            tools: [
                                "HubSpot: for advanced customer relationship management and automated marketing.",
                                "Asana: for detailed project planning and task tracking.",
                                "Holded: for efficient management of financial and accounting operations, purchases, and inventory management.",
                                "Custom API integrations to synchronize data between systems.",
                                "Customized dashboards for reporting and performance analysis.",
                                "Enterprise-level data security and GDPR compliance."
                            ],
                            tags: ["Design agency", "Creative agency", "Building"],
                            need: ["Customer Management", "Project and Task Management"]
                        },
                        {
                            title: "Budget Configurator", 
                            subTitle: "", 
                            challenge: "Develop a system for creating and calculating customized budgets for construction and logistics projects that integrates efficiently with the existing ERP. The goal was to streamline budget creation, allowing for different configurations and increasing data processing speed to improve decision-making, client justifications, and financial planning.",
                            features: [
                                "Creation of dynamic budgets based on project variables such as materials, labor, machinery, and logistics.", 
                                "Customizable templates for different types of construction and logistics services.",
                                "Integration of supplier catalogs and real-time pricing.",
                                "Analysis tools to compare budgets and historical costs.",
                                "Scenario simulation to evaluate the impact of different variables on the final budget."
                            ],
                            solution: "The integration of the budget configurator based on a WebApp and integrated with Odoo provides a flexible and powerful platform for the financial management of construction and logistics projects. By connecting with the existing ERP, this solution allows for the creation, validation, and external export of budgets to communicate project finances to Odoo.",
                            tools: [
                                "Odoo: for detailed budget management and configuration, leveraging its flexibility and customizable modules.",
                                "AWS: for cloud computing infrastructure, ensuring scalability, security, and high availability.",
                                "Business Intelligence modules for data visualization and decision-making based on advanced analytics.",
                                "APIs for integrating data from external suppliers and real-time price updates.",
                                "Compliance with international security standards and data privacy policies."
                            ],
                            tags: ["Design agency", "Creative agency", "Building", "Logistics"],
                            need: ["Improve service profitability", "Data centralization"]
                        },
                        {
                            title: "End2End Tool Integration for eCommerce", 
                            subTitle: "", 
                            challenge: "Create and develop an API Orchestrator that integrates ERP, CMS, different marketplaces, and Third-Party Logistics (3PL) providers for the Dropshipping and Logistics industry. The goal is to improve operational efficiency and customer experience by simplifying the management of purchases, sales, and logistics.",
                            features: [
                                "Single interface to manage operations across different eCommerce platforms and marketplaces.", 
                                "ERP integration for efficient resource and inventory management.",
                                "Connection with 3PLs to optimize the shipping and delivery process.",
                                "Advanced analytical tools through Google Looker for data-driven decision-making.",
                                "Real-time synchronization of orders and stock between marketplaces and the management system."
                            ],
                            solution: "Implementing a unified API Orchestrator that connects Odoo (ERP), Prestashop (CMS), Huboo (3PL), and Amazon Selling Central provides a comprehensive view of the eCommerce process. This solution facilitates automation and synchronization between platforms, ensuring smooth and transparent end-to-end management.",
                            tools: [
                                "Odoo as the ERP system for centralized business administration.",
                                "Prestashop for content management and online store management.",
                                "Huboo as the logistics and shipping management system.",
                                "Amazon Selling Central for integration with the Amazon marketplace.",
                                "Google Looker for data analysis and advanced reporting."
                            ],
                            tags: ["Logistics", "Manufacturing", "eCommerce"],
                            need: ["Improve security", "Avoid human errors", "Centralize information"]
                        },
                        {
                            title: "Integrated Platform for Creative Agencies", 
                            subTitle: "", 
                            challenge: "Implement a solution that integrates project management tools, CRM, and task management for creative agencies. The aim is to improve campaign planning, creative resource management, and client communication.",
                            features: [
                                "Centralized management of projects and clients.", 
                                "CRM integration for tracking clients and business opportunities.",
                                "Task management and collaboration tools for creative teams.",
                                "Real-time visualization of project progress and resource allocation.",
                                "Performance analysis of campaigns and projects."
                            ],
                            solution: "The integration of tools such as Adobe Creative Cloud (content creation), Trello (task management), Slack (communication and collaboration), and Salesforce (CRM) provides a robust platform for campaign and project management. This solution allows for better planning, tracking, and analysis of creative activities, ensuring smooth communication with clients.",
                            tools: [
                                "Adobe Creative Cloud: For creating and editing creative content, including graphic design, video, and other digital media.",
                                "Trello: For task and project management, allowing for visual organization and tracking of task progress.",
                                "Slack: For real-time communication and collaboration among team members, facilitating coordination and idea exchange.",
                                "Salesforce: For customer relationship management, tracking of business opportunities, and marketing automation.",
                                "Zapier: For the integration and automation of workflows between different tools, ensuring efficient data synchronization.",
                                "Google Analytics: For data analysis and evaluation of campaign and creative project performance."
                            ],
                            tags: ["Design Studio", "Creative Agency", "eCommerce",],
                            need: ["Customer Management", "Project and Task Management", "Centralize information"]
                        },
                    ],
                    form: {
                        title: "Ready to help you",
                        name: {
                            label: "My name is",
                            placeholder: "Name and lastname"
                        },
                        service: {
                            label: "and I'm interested in",
                            placeholder: "Service",
                            services: ["Software engineering services", "Cibersecurity services", "Consulting services"]
                        },
                        budget: {
                            label: "The budget for my idea is",
                            placeholder: "no idea"
                        },
                        email: {
                            label: "My email is",
                            placeholder: "name@example.com"
                        },
                        details: {
                            label: "A short project description",
                            placeholder: "Project details (optional)"
                        },
                        checkbox: {
                            first: "I have read the ",
                            second: "legal disclaimer",
                            third: " and agree to the processing of my personal data."
                        },
                        send: 'SEND'
                    }
                }
            },
            es : {
                translation:{
                    menu: {
                        about: "NOSOTROS",
                        services: "SERVICIOS",
                        cases: "CASOS",
                        faqs: "FAQs",
                        contact: "CONTÁCTANOS",
                        legal: "Política legal",
                        cookies: "Política de cookies",
                        notice: "Aviso legal"
                    },
                    home: {
                        heroH1: "Tecnología para <span>impulsar</span> tu negocio<span>.</span>",
                        heroP: "SOLUCIONES A MEDIDA PARA NEGOCIOS COMPLEJOS",
                        heroBtn: "SOBRE NOSOTROS",
                        heroScroll: "SEGUIR EXPLORANDO",
                        servicesTitle: "Productos <span>a medida</span> para cualquier negocio ·",
                        servicesP: {
                            p1: "Nos dedicamos a aprovechar al máximo las herramientas de software que ya utilizas, conectándolas entre sí, optimizándolas para que rindan más y alineándolas con las necesidades reales de tu negocio.",
                            p2: "Y si lo que necesitas aún no existe... lo creamos para ti."
                        },
                        servicesBtn: "NUESTROS SERVICIOS"
                    },
                    ctas: {
                        contact: "CONTÁCTANOS"
                    },
                    about: {
                        title: "Somos un equipo de profesionales expertos con más de <span>9 años</span> de experiencia.",
                        description: "Contamos con todos los perfiles necesarios para el desarrollo de un producto digital, y con diferentes partners en ámbitos específicos para complementar las solución all-in-one.",
                        cta: "HABLEMOS",
                        titleH2: "Descubre lo que nos mueve",
                        belive: {
                            t1: "Calidad",
                            t2: "Compromiso",
                            t3: "Facilidad",
                            p1: "Independientemente de si estamos desarrollando una prueba de concepto o un producto final, implementaremos diferentes estándares de calidad de producto y de gestión de proyectos para asegurarnos de que cada producto cumpla y supere las expectativas.",
                            p2: "Podrás elegir el tipo de compromiso que quieras tener con nosotros. Estaremos siempre a tu lado para acompañarte en cualquier fase, no obstante si no quieres continuar, nos encargaremos del cierre y del traspaso necesario cumpliendo con toda legalidad vigente.",
                            p3: "Sabemos que hablar con un desarrollador no es fácil. Con nosotros hablaras con un consultor de negocios con conocimiento técnico para entender tus necesidades y validar su viabilidad técnica a la vez."
                        },
                        need: {
                            t: "¿Qué necesito para hacer un <span>producto digital</span>?",
                            d: "Pensar que el desarrollo de un producto digital es un proyecto común y corriente representa un riesgo considerable. Este tipo de producto, requiere una atención detallada en cada aspecto, gestionada por profesionales especializados.",
                            specialist1: "DIRECTOR DE ORQUESTA",
                            specialist2: "PICACÓDIGO PARA TODO",
                            specialist3: "LÍDER TÉCNICO",
                            specialist4: "PICACÓDIGO OCULTO",
                            specialist5: "ESTRATEGA",
                            specialist6: "PICACÓDIGO A LA VISTA",
                            specialist7: "VALIDACIÓN",
                            specialist8: "DISEÑADOR DEL USO",
                            specialist9: "PROTEGE EL PRODUCTO",
                            label: "*No todos estos roles son necesarios en todos los productos. Dependiendo de tus necesidades, puede que los roles sean diferente.",
                            cta2: "CONTÁCTANOS"
                        }
                    },
                    cases: {
                        heroH1: "Algunas de las cosas que podemos <span>hacer por ti</span>",
                        heroP: "Aquí puedes encontrar algunos de los casos en los que hemos trabajado, para diferentes sectores y diferentes necesidades.",
                        tagTitle: "¿Cuál es tu sector?",
                        needTitle: "¿Cuál es tu necesidad actual?",
                        resetFilters: "BORRAR FILTROS",
                        featuresTitle: "Funcionalidades",
                        solutionTitle: "Solución",
                        toolsTitle: "Especificaciones"
                    },
                    dropdown: [
                        {
                            title: "Integración CRM & ERP", 
                            subTitle: "Integración CRM y ERP para Arquitectura e Interiorismo", 
                            challenge: "Desarrollar una solución que integre el actual sistema de planificación de recursos empresariales (ERP) con un sistema de gestión de las relaciones con el cliente (CRM) para el sector de arquitectura e interiorismo. El reto consistió en sincronizar la gestión de cuentas B2B y B2C con los proyectos en un solo punto, mejorando la eficiencia operativa, la exactitud en la asignación de recursos y proporcionando una visión unificada de la conceptualización, diseño y ejecución de los proyectos.",
                            features: [
                                "Gestión unificada de clientes y proyectos entre CRM y ERP.",
                                "Panel de control integrado para seguimiento en tiempo real del progreso de los proyectos dando visibilidad al cliente y reporte horario interno.", 
                                "Automatización de facturación y seguimiento de cuentas por cobrar dentro del flujo de trabajo de proyectos.",
                                "Coordinación de compras y presupuestos a través de la plataforma de ERP integrada.",
                                "Análisis de rentabilidad de proyectos y gestión de cartera de servicios.",
                            ],
                            solution: "Solución La integración de HubSpot (CRM) con Asana (gestión de proyectos) y Holded (ERP) proporciona una solución completa para la gestión de proyectos de arquitectura e interiorismo. La solución permitió a los usuarios tener una visión completa del ciclo de vida del cliente y los proyectos, desde la adquisición del cliente hasta la entrega final del proyecto y posventa.",
                            tools: [
                                "HubSpot: para la gestión avanzada de relaciones con clientes y marketing automatizado.",
                                "Asana: para la planificación detallada de proyectos y seguimiento de tareas.",
                                "Holded: para el manejo eficiente de operaciones financieras y contables, compras y gestión de inventarios.",
                                "Integraciones API personalizadas para sincronizar datos entre sistemas.",
                                "Dashboards personalizados para reportes y análisis de desempeño.",
                                "Seguridad de datos de nivel empresarial y cumplimiento de GDPR."
                            ],
                            tags: ["Estudio diseño", "Agencia creativa", "Construcción",],
                            need: ["Gestión de clientes", "Gestión de proyectos y tareas",]
                        },
                        {
                            title: "Configurador de Presupuestos", 
                            subTitle: "", 
                            challenge: "Elaborar un sistema de creación y cálculo de presupuestos personalizados para proyectos de construcción y logística, que se integre de manera eficiente con el ERP existente. El objetivo era agilizar la creación de presupuestos, permitiendo diferentes configuraciones y aumentando el tiempo de procesado de la información con el fin de mejorar la toma de decisiones, justificaciones a cliente y la planificación financiera.",
                            features: [
                                "Creación de presupuestos dinámicos basados en variables de proyecto como materiales, mano de obra, maquinaria y logística.", 
                                "Plantillas personalizables para diferentes tipos de construcciones y servicios logísticos.",
                                "Integración de catálogos de proveedores y precios en tiempo real.",
                                "Herramientas de análisis para comparar presupuestos y costos históricos.",
                                "Simulación de escenarios para evaluar el impacto de diferentes variables en el presupuesto final."
                            ],
                            solution: "La integración del configurador de presupuestos basado en una WebApp e integrado Odoo proporciona una plataforma ágil y potente para la gestión financiera de proyectos de construcción y logística. Conectando con el ERP existente, esta solución permite crear, validar y exportar los presupuestos externamente para comunicar las finanzas de los proyectos a Odoo.",
                            tools: [
                                "Odoo: para la gestión y configuración detallada de presupuestos, aprovechando su flexibilidad y módulos personalizables.",
                                "AWS: para la infraestructura de computación en la nube, garantizando escalabilidad, seguridad y alta disponibilidad.",
                                "Módulos de Inteligencia de Negocio para la visualización de datos y toma de decisiones basada en análisis avanzados.",
                                "APIs para la integración de datos de proveedores externos y actualizaciones de precios en tiempo real.",
                                "Cumplimiento de estándares de seguridad internacionales y políticas de privacidad de datos."
                            ],
                            tags: ["Estudio diseño", "Agencia creativa", "Logística", "Construcción"],
                            need: ["Mejorar rentabilidad de servicios", "Centralizar información",]
                        },
                        {
                            title: "Integración de herramientas End2End para eCommerce", 
                            subTitle: "", 
                            challenge: "Crear y desarrollar una integración de APIs que integre ERP, CMS, diferentes marketplaces y proveedores de Third-Party Logistics (3PLs) para la industria de Dropshipping y Logística. El objetivo es mejorar la eficiencia operativa y la experiencia del cliente al simplificar la gestión de compras, ventas y logística.",
                            features: [
                                "Interfaz única para gestionar operaciones en diferentes plataformas de comercio electrónico y marketplaces.", 
                                "Integración de ERP para una gestión eficiente de los recursos y el inventario.",
                                "Conexión con 3PLs para optimizar el proceso de envío y entrega.",
                                "Herramientas analíticas avanzadas a través de Google Looker para la toma de decisiones basada en datos.",
                                "Sincronización en tiempo real de pedidos y existencias entre mercados y el sistema de gestión."
                            ],
                            solution: "La implementación de un Orquestador de API unificado que conecta Odoo (ERP), Prestashop (CMS), Huboo (3PL), y Amazon Selling Central, permite una visión completa del proceso de comercio electrónico. Esta solución facilita la automatización y sincronización entre plataformas, asegurando una gestión fluida y transparente de extremo a extremo.",
                            tools: [
                                "Odoo como sistema ERP para la administración centralizada de la empresa.",
                                "Prestashop para la gestión de contenidos y tiendas online.",
                                "Huboo como sistema de gestión de logística y envíos.",
                                "Amazon Selling Central para la integración con el marketplace de Amazon.",
                                "Google Looker para análisis de datos y reportes avanzados."
                            ],
                            tags: ["Logística", "Fabricación", "eCommerce",],
                            need: ["Mejorar la seguridad", "Evitar errores manuales", "Centralizar información"]
                        },
                        {
                            title: "Plataforma Integrada para Agencias Creativas", 
                            subTitle: "", 
                            challenge: "Implementar una solución que integre herramientas de gestión de proyectos, CRM, y gestión de tareas para agencias creativas. El objetivo es mejorar la planificación de campañas, la gestión de recursos creativos y la comunicación con clientes.",
                            features: [
                                "Gestión centralizada de proyectos y clientes.", 
                                "Integración de CRM para seguimiento de clientes y oportunidades de negocio.",
                                "Herramientas de gestión de tareas y colaboración para equipos creativos.",
                                "Visualización en tiempo real del progreso de los proyectos y asignación de recursos.",
                                "Análisis de desempeño de campañas y proyectos."
                            ],
                            solution: "Solución La integración de herramientas como Adobe Creative Cloud (creación de contenido), Trello (gestión de tareas), Slack (comunicación y colaboración), y Salesforce (CRM) proporciona una plataforma robusta para la gestión de campañas y proyectos. Esta solución permite una mejor planificación, seguimiento y análisis de las actividades creativas, asegurando una comunicación fluida con los clientes.",
                            tools: [
                                "Adobe Creative Cloud: Para la creación y edición de contenido creativo, incluyendo diseño gráfico, video y otros medios digitales.",
                                "Trello: Para la gestión de tareas y proyectos, permitiendo la organización visual y el seguimiento del progreso de cada tarea.",
                                "Slack: Para la comunicación y colaboración en tiempo real entre los miembros del equipo, facilitando la coordinación y el intercambio de ideas.",
                                "Salesforce: Para la gestión de relaciones con clientes, seguimiento de oportunidades de negocio y automatización de marketing.",
                                "Zapier: Para la integración y automatización de flujos de trabajo entre las distintas herramientas, asegurando una sincronización de datos eficiente.",
                                "Google Analytics: Para el análisis de datos y la evaluación del rendimiento de campañas y proyectos creativos."
                            ],
                            tags: ["Estudio diseño", "Agencia creativa", "eCommerce",],
                            need: ["Gestión de clientes", "Gestión de proyectos y tareas", "Centralizar información"]
                        },
                    ],
                    form: {
                        title: "Estamos listos para ayudarte",
                        name: {
                            label: "Mi nombre es",
                            placeholder: "Nombre y apellido"
                        },
                        service: {
                            label: "y estoy interesado en",
                            placeholder: "Servicio",
                            services: ["Software engineering services", "Cibersecurity services", "Consulting services"]
                        },
                        budget: {
                            label: "El presupuesto para mi proyecto es",
                            placeholder: "No sé"
                        },
                        email: {
                            label: "Me puedes contactar en este email",
                            placeholder: "nombre@ejemplo.com"
                        },
                        details: {
                            label: "Te cuento más sobre mi proyecto",
                            placeholder: "Detalles del proyecto (opcional)"
                        },
                        checkbox: {
                            first: "He leido la ",
                            second: "politica legal",
                            third: " y acepto el procesamiento de mi información personal."
                        },
                        send: 'ENVIAR SOLICITUD'
                    }

                }
            },
        }
    })