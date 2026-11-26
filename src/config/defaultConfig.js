import { defaultPageCopy } from "./pageCopy.js";

export const defaultConfig = {
  pageCopy: defaultPageCopy,
  global: {
    primaryBlue: "#2563eb",
    deepBlue: "#0a3663",
    accentGreen: "#32cd32",
    emeraldGreen: "#10B981",
    goldAccent: "#F59E0B",
    navbarTopBarBg: "#064289",
    heroOverlayColor: "#064289",
    design: {
      text: {
        heading: "#ffffff",
        subheading: "#2563eb",
        paragraph: "#cbd5e1",
        muted: "#94a3b8",
      },
      hero: {
        heading: "#ffffff",
        subheading: "#3b82f6",
      },
      buttons: {
        primaryBg: "#32cd32",
        primaryText: "#ffffff",
        secondaryBorder: "#ffffff",
        secondaryText: "#ffffff",
      },
      icons: {
        color: "#2563eb",
        bg: "#ffffff1a",
      },
      backgrounds: {
        sectionDark: "#0a3663",
        sectionLight: "#f8fafc",
        heroOverlay: "#064289",
      },
    },
  },
  navbar: {
    backgroundColor: "#0a1a2e",
    logoUrl: "/growus-logo.png",
    logoText: "growus",
    logoHighlight: "auto",
    topBarText: "Go to My Portal",
    topBarUrl: "",
    quoteButtonText: "QUOTE",
    quoteButtonBg: "#39C72A",
    brochureButtonText: "BROCHURES",
    brochureButtonBg: "",
    brochureButtonTextColor: "",
  },
  home: {
    hero: {
      bgImage:
        "https://images.unsplash.com/photo-1581092160562-40aa08e78837?q=80&w=2560&auto=format&fit=crop",
      bgVideo: "/growus-inspection-background.mp4",
      videoAutoplay: true,
      videoLoop: true,
      useCustomOverlay: false,
      showPromo: true,
      showStats: true,
      button1Destination: "services",
      button2Destination: "services",
      promoDestination: "services",
      overlayColor: "#064289",
      overlayToColor: "#0a3663",
      heading: "Quality Control That Keeps Production Moving",
      subtext:
        "From on-site engineering to supply-chain inspections, we help manufacturers catch issues early and protect delivery quality.",
      button1Text: `INDUSTRIAL & TECHNICAL
SOLUTIONS`,
      button1Bg: "#39C72A",
      button2Text: `AUTOMATED
INSPECTION`,
      button2Border: "#ffffff",
      stats: [
        {
          number: 800,
          suffix: "+",
          label: "Engineers",
        },
        {
          number: 5,
          suffix: "+",
          label: "Countries",
        },
        {
          number: 6,
          suffix: "+",
          label: "Years Experience",
        },
        {
          number: 95,
          suffix: "%",
          label: "Client Retention",
        },
      ],
      popupTitle: "AUTOMATED INSPECTION",
      popupText:
        "Discover our cutting-edge services for automated optical inspection and risk mitigation.",
      sideTabText: "Free Consultation",
      sideTabBg: "",
    },
    services: {
      sectionTitle: "OUR SERVICES",
      viewAllText: "VIEW ALL SERVICES →",
      viewAllBg: "",
      items: [
        {
          category: "INSPECTION",
          title: "Automated Optical Inspection",
          description:
            "Advanced AOI solutions for precise defect detection and quality assurance in manufacturing processes.",
          image:
            "https://images.unsplash.com/photo-1581092162384-8987c1d64718?q=80&w=2074&auto=format&fit=crop",
        },
        {
          category: "ENGINEERING",
          title: "Industrial & Technical Solutions",
          description:
            "Comprehensive engineering support and technical solutions for complex industrial challenges.",
          image:
            "https://images.unsplash.com/photo-1531482615713-2afd69097998?q=80&w=2070&auto=format&fit=crop",
        },
        {
          category: "SOURCING",
          title: "Supply Chain Quality Management",
          description:
            "End-to-end quality control solutions for global supply chains ensuring consistent product quality.",
          image:
            "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?q=80&w=2070&auto=format&fit=crop",
        },
        {
          category: "RISK",
          title: "Risk Mitigation Services",
          description:
            "Proactive risk assessment and mitigation strategies to protect your operations and reputation.",
          image:
            "/risk-mitigation.webp",
        },
        {
          category: "SUPPORT",
          title: "On-Site Engineering Support",
          description:
            "Expert engineers deployed to your facilities for hands-on technical support and implementation.",
          image:
            "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?q=80&w=2070&auto=format&fit=crop",
        },
        {
          category: "AUDITS",
          title: "Global Quality Audits",
          description:
            "Comprehensive auditing services across multiple locations ensuring compliance and excellence.",
          image:
            "https://images.unsplash.com/photo-1552664730-d307ca884978?q=80&w=2070&auto=format&fit=crop",
        },
      ],
    },
    testimonials: {
      sectionTitle: "Trusted Worldwide.",
      sectionTitleHighlight: "Client Feedback.",
      items: [
        {
          text: "Growus Auto has transformed our quality control process. Their team's expertise and dedication are unmatched in the industry.",
          name: "Raj Sharma",
          company: "Tech Manufacturing Ltd",
        },
        {
          text: "Outstanding service! Their automated inspection solutions saved us significant time and improved our defect detection rate by 40%.",
          name: "Michael Chen",
          company: "AutoParts Global",
        },
        {
          text: "Professional, reliable, and results-driven. We've been partnering with Growus for 5 years and couldn't be happier.",
          name: "Sarah Johnson",
          company: "Electronics Corp",
        },
        {
          text: "Their engineers are exceptional. The on-site support and training they provided was world-class.",
          name: "David Kumar",
          company: "Precision Industries",
        },
      ],
    },
    whyChooseUs: {
      heading: "Your Trusted Partner",
      headingHighlight: "In Global Quality Control",
      benefits: [
        "ISO Certified Processes",
        "800+ Trained Quality Engineers",
        "Operations in 5+ Countries",
        "Real-time Reporting & Analytics",
        "24/7 Client Support",
      ],
      buttonText: "LEARN MORE ABOUT US →",
      image:
        "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?q=80&w=2070&auto=format&fit=crop",
    },
    industries: {
      subtitle: "INDUSTRIES WE SERVE",
      title: "Global Sector Expertise",
      items: [
        {
          name: "Automotive",
          icon: "🚗",
        },
        {
          name: "Aerospace",
          icon: "✈️",
        },
        {
          name: "Electronics",
          icon: "💻",
        },
        {
          name: "Manufacturing",
          icon: "🏭",
        },
        {
          name: "Logistics",
          icon: "📦",
        },
        {
          name: "Pharma",
          icon: "💊",
        },
      ],
    },
    panIndia: {
      subtitle: "Our Coverage",
      title: "Our",
      titleHighlight: "Pan India",
      titleEnd: "Presence",
      description:
        "GROWUS has a strong pan-India presence, providing quality control, supply chain, and engineering support across all major industrial hubs. Hover over a state to explore our coverage.",
      stats: [
        {
          value: "18+",
          label: "States",
          icon: "🗺️",
        },
        {
          value: "50+",
          label: "Cities",
          icon: "🏙️",
        },
        {
          value: "15+",
          label: "Years",
          icon: "🏆",
        },
      ],
      ctaTitle: "50+ Locations",
      ctaSubtitle: "Nationwide 24/7 technical assistance",
      ctaButtonText: "View Network →",
    },
    clients: {
      subtitle: "GLOBAL NETWORK",
      title: "OUR HAPPY CLIENTS",
      domesticCount: "32+",
      overseasCount: "05+",
      row1: [
        {
          name: "Tata Motors",
          logo: "",
        },
        {
          name: "Mahindra",
          logo: "",
        },
        {
          name: "TVS Upasana",
          logo: "",
        },
        {
          name: "Tata Autocomp",
          logo: "",
        },
        {
          name: "Mahindra CIE",
          logo: "",
        },
        {
          name: "JBM",
          logo: "",
        },
        {
          name: "Motherson",
          logo: "",
        },
        {
          name: "Autoliv",
          logo: "",
        },
        {
          name: "Polynova",
          logo: "",
        },
        {
          name: "MK Tron",
          logo: "",
        },
      ],
      row2: [
        {
          name: "Bosch",
          logo: "",
        },
        {
          name: "Hyundai",
          logo: "",
        },
        {
          name: "Maruti Suzuki",
          logo: "",
        },
        {
          name: "Ashok Leyland",
          logo: "",
        },
        {
          name: "Force Motors",
          logo: "",
        },
        {
          name: "Pinnacle",
          logo: "",
        },
        {
          name: "Varroc",
          logo: "",
        },
        {
          name: "Lumax",
          logo: "",
        },
        {
          name: "Bharat Forge",
          logo: "",
        },
        {
          name: "Advik",
          logo: "",
        },
      ],
    },
  },
  careers: {
    heroImage: "https://images.unsplash.com/photo-1521737604893-d14cc237f11d?q=80&w=2084&auto=format&fit=crop",
    jobs: [
      {
        title: "Quality Control Lead",
        department: "QUALITY",
        type: "FULL-TIME",
        location: "Pune, MH",
        description:
          "Lead quality control operations for automotive clients. Manage inspection teams and ensure compliance with ISO/IATF standards. 5+ years experience required.",
        requirements: [
          "5+ years in quality control",
          "ISO 9001 / IATF 16949 certified",
          "Team leadership experience",
          "Automotive sector preferred",
        ],
      },
      {
        title: "Senior Industrial Engineer",
        department: "ENGINEERING",
        type: "FULL-TIME",
        location: "Chennai, TN",
        description:
          "Design and optimize manufacturing processes for key clients. Work on VAVE projects, prototyping, and technical documentation.",
        requirements: [
          "7+ years in industrial engineering",
          "CAD/CAM proficiency",
          "Process optimization expertise",
          "Strong analytical skills",
        ],
      },
      {
        title: "Quality Inspector",
        department: "INSPECTION",
        type: "FULL-TIME",
        location: "Pune, MH",
        description:
          "Perform inline and final product inspections at client sites. Expertise in dimensional verification and visual inspection techniques.",
        requirements: [
          "2+ years in quality inspection",
          "Knowledge of GD&T",
          "Measurement tools proficiency",
          "Diploma/B.E. in Mechanical",
        ],
      },
      {
        title: "3D Scanning Specialist",
        department: "ENGINEERING",
        type: "CONTRACT",
        location: "Mumbai, MH",
        description:
          "Operate 3D scanning equipment for reverse engineering and precise dimensional inspection projects.",
        requirements: [
          "3+ years with 3D scanning tech",
          "FARO/Hexagon experience",
          "Reverse engineering skills",
          "Point cloud processing",
        ],
      },
    ],
  },
  about: {
    hero: {
      subtitle: "OUR JOURNEY",
      heading: "Pioneering Excellence in",
      headingHighlight: "Industrial Solutions",
      subtext:
        "From a small engineering firm to a global leader in quality control and supply chain management.",
      bgImage:
        "https://images.unsplash.com/photo-1504307651254-35680f356dfd?q=80&w=2070&auto=format&fit=crop",
    },
    story: {
      subtitle: "ABOUT OUR COMPANY",
      heading: "A Legacy of Quality and Trust",
      image:
        "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?q=80&w=2070&auto=format&fit=crop",
      paragraph1:
        "Starting with a vision to revolutionize industrial quality control, GROWUS has grown into a trusted partner for global OEMs. Our journey is defined by a relentless pursuit of precision and an unwavering commitment to client success.",
      paragraph2:
        "Today, our 800+ engineers support clients across 5+ countries. Our expertise spans automotive, aerospace, electronics, and more.",
      stat1: "6+",
      stat1Label: "YEARS EXPERIENCE",
      stat2: "800+",
      stat2Label: "EXPERT ENGINEERS",
    },
    dna: {
      subtitle: "OUR MISSION",
      heading: "THE DNA OF GROWUS",
      values: [
        {
          title: "Excellence",
          desc: 'We never settle for "good enough." Every process is optimized for maximum quality.',
          icon: "🏆",
        },
        {
          title: "Transparency",
          desc: "Real-time reporting and open communication with every client, every time.",
          icon: "🔍",
        },
        {
          title: "Innovation",
          desc: "Leveraging AI and automation to solve complex industrial challenges.",
          icon: "💡",
        },
        {
          title: "Safety",
          desc: "Prioritizing the well-being of our people and the integrity of your products.",
          icon: "🛡️",
        },
      ],
    },
    ecosystem: {
      subtitle: "OUR NETWORK",
      heading: "The Growus Ecosystem",
      description:
        "A synergy of specialized companies working together to provide end-to-end industrial solutions globally.",
      companies: [
        {
          name: "Growus Auto",
          image:
            "https://images.unsplash.com/photo-1581092162384-8987c1d64718?q=80&w=2074&auto=format&fit=crop",
          services: [
            "Third Party Inspection",
            "Quality Management",
            "NDT Testing",
            "On-Site Support",
          ],
        },
        {
          name: "Growus Engineering",
          image:
            "https://images.unsplash.com/photo-1531482615713-2afd69097998?q=80&w=2070&auto=format&fit=crop",
          services: [
            "CAD/CAM Design",
            "VAVE Projects",
            "Rapid Prototyping",
            "Technical Documentation",
          ],
        },
      ],
      napsTitle: "NAPS/NATS Training Program",
      napsDescription:
        "Specialized skill development and apprenticeship programs for aspiring engineers.",
      napsButtonText: "JOIN PROGRAM",
    },
    team: {
      subtitle: "LEADERSHIP",
      heading: "Meet Our Visionaries",
      members: [
        {
          name: "Amit Kumar",
          role: "CEO & Founder",
          img: "https://images.unsplash.com/photo-1560250097-0b93528c311a?q=80&w=800&auto=format&fit=crop",
          quote: "Quality is not an act, it is a habit.",
        },
        {
          name: "Sanjay Singh",
          role: "Operations Head",
          img: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?q=80&w=800&auto=format&fit=crop",
          quote: "Precision in execution is our signature.",
        },
        {
          name: "Priya Joshi",
          role: "Technical Director",
          img: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=800&auto=format&fit=crop",
          quote: "Innovation drives our standards higher.",
        },
        {
          name: "Rahul Verma",
          role: "HR Director",
          img: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?q=80&w=800&auto=format&fit=crop",
          quote: "Our people are our greatest asset.",
        },
      ],
    },
  },
  services: {
    sectionTitle: "Professional Industry Services",
    viewAllText: "View All Services",
    heroSubtitle: "GROWUS CAPABILITIES",
    heroTitle: "Technical",
    heroTitleHighlight: "Expertise",
    heroSubtext:
      "Quality management solutions delivered by 800+ expert engineers across 5+ countries.",
    heroBg:
      "https://images.unsplash.com/photo-1565793298595-6a879b1d9492?q=80&w=2070&auto=format&fit=crop",
    items: [
      {
        slug: "quality-management",
        category: "QUALITY",
        title: "Quality Management System Mastery",
        subtitle: "World-class quality standards & processes",
        description:
          "Implementation and maintenance of world-class quality standards and processes across your entire production line.",
        longDescription:
          "Our Quality Management System services go beyond basic compliance. We embed a culture of continuous improvement into your organization, leveraging data-driven decision making and advanced statistical process control. From initial gap analysis to full certification support, our team ensures your quality systems are robust, sustainable, and aligned with global best practices.",
        image:
          "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?q=80&w=2070&auto=format&fit=crop",
        features: [
          {
            title: "ISO 9001 Implementation",
            desc: "Complete certification support from gap analysis to successful audit",
          },
          {
            title: "Process Optimization",
            desc: "Lean Six Sigma methodologies to eliminate waste and boost efficiency",
          },
          {
            title: "Quality Audits",
            desc: "Internal and supplier audits with detailed corrective action tracking",
          },
          {
            title: "Continuous Improvement",
            desc: "Kaizen, PDCA cycles, and structured problem-solving frameworks",
          },
          {
            title: "Root Cause Analysis",
            desc: "8D, 5-Why, Fishbone analysis for systematic defect elimination",
          },
          {
            title: "SPC & Data Analytics",
            desc: "Statistical process control and real-time quality dashboards",
          },
        ],
        stats: [
          {
            number: 200,
            suffix: "+",
            label: "Audits Completed",
          },
          {
            number: 50,
            suffix: "+",
            label: "Certifications",
          },
          {
            number: 98,
            suffix: "%",
            label: "Client Satisfaction",
          },
          {
            number: 15,
            suffix: "+",
            label: "Years Experience",
          },
        ],
        process: [
          "Gap Analysis",
          "System Design",
          "Implementation",
          "Training",
          "Audit Support",
          "Certification",
        ],
        industries: [
          "Automotive",
          "Aerospace",
          "Electronics",
          "Manufacturing",
          "Pharma",
        ],
      },
      {
        slug: "third-party-inspection",
        category: "INSPECTION",
        title: "Third Party Quality Inspection",
        subtitle: "Comprehensive firewall & product checking",
        description:
          "Comprehensive firewall and product checking services for assembly lines and manufacturing units.",
        longDescription:
          "From inline inspections on production lines to final product checks before dispatch, our team acts as your quality firewall. We use calibrated instruments, standardized checklists, and real-time reporting to catch defects early and prevent costly recalls. Our inspectors are trained in automotive, electronics, and general manufacturing standards.",
        image:
          "https://images.unsplash.com/photo-1581092162384-8987c1d64718?q=80&w=2074&auto=format&fit=crop",
        features: [
          {
            title: "Inline Inspection",
            desc: "Real-time quality monitoring at every production stage",
          },
          {
            title: "Final Product Checks",
            desc: "Comprehensive end-of-line verification before dispatch",
          },
          {
            title: "Dimensional Verification",
            desc: "CMM, gauges and precision measurement tools",
          },
          {
            title: "Visual Inspection",
            desc: "Trained eyes for surface finish, cosmetic and assembly defects",
          },
          {
            title: "Sorting & Rework",
            desc: "Rapid containment, sorting and rework of suspect batches",
          },
          {
            title: "Daily Reporting",
            desc: "Real-time defect dashboards and trend analysis",
          },
        ],
        stats: [
          {
            number: 500,
            suffix: "+",
            label: "Inspectors Deployed",
          },
          {
            number: 100,
            suffix: "M+",
            label: "Parts Inspected",
          },
          {
            number: 99,
            suffix: "%",
            label: "Defect Catch Rate",
          },
          {
            number: 10,
            suffix: "+",
            label: "Countries",
          },
        ],
        process: [
          "Requirement Study",
          "Inspector Deployment",
          "Inline Checks",
          "Data Collection",
          "Reporting",
          "Continuous Feedback",
        ],
        industries: [
          "Automotive",
          "Tier-1 Suppliers",
          "Electronics",
          "Consumer Goods",
          "Industrial Equipment",
        ],
      },
      {
        slug: "engineering-design",
        category: "ENGINEERING",
        title: "Engineering & Design Brilliance",
        subtitle: "Customized design resources & prototyping",
        description:
          "Customized design resources, prototypes, and VAVE project support for complex engineering needs.",
        longDescription:
          "With expertise in CAD/CAM, simulation, and rapid prototyping, we help you bring innovative products to market faster. Our VAVE (Value Analysis & Value Engineering) specialists identify cost reduction opportunities while maintaining or improving product quality and functionality.",
        image:
          "https://images.unsplash.com/photo-1531482615713-2afd69097998?q=80&w=2070&auto=format&fit=crop",
        features: [
          {
            title: "CAD Design",
            desc: "2D/3D modeling using CATIA, SolidWorks, AutoCAD and NX",
          },
          {
            title: "Prototyping",
            desc: "Rapid prototyping with 3D printing and CNC machining",
          },
          {
            title: "VAVE Analysis",
            desc: "Value engineering to reduce cost by 15-30% on average",
          },
          {
            title: "Technical Documentation",
            desc: "Complete GD&T drawings, BOMs and process sheets",
          },
          {
            title: "FEA/CFD Simulation",
            desc: "Structural, thermal and flow analysis for design validation",
          },
          {
            title: "Reverse Engineering",
            desc: "3D scanning and CAD recreation of legacy components",
          },
        ],
        stats: [
          {
            number: 300,
            suffix: "+",
            label: "Projects Delivered",
          },
          {
            number: 25,
            suffix: "%",
            label: "Avg Cost Savings",
          },
          {
            number: 50,
            suffix: "+",
            label: "Engineers",
          },
          {
            number: 12,
            suffix: "+",
            label: "Industries Served",
          },
        ],
        process: [
          "Concept Review",
          "Feasibility Study",
          "Detail Design",
          "Simulation",
          "Prototype",
          "Validation",
        ],
        industries: [
          "Automotive",
          "Aerospace",
          "Industrial Machinery",
          "Consumer Products",
          "Defense",
        ],
      },
      {
        slug: "human-capital",
        category: "HR",
        title: "Human Capital (HR) Empowerment",
        subtitle: "End-to-end workforce management solutions",
        description:
          "End-to-end payroll, compliance, and industrial licensing support for your workforce.",
        longDescription:
          "Managing a large workforce across multiple locations is complex. Our HR services handle everything from attendance and payroll processing to PF/ESIC compliance and factory licensing. We also offer skill development programs and staffing solutions tailored to manufacturing and industrial environments.",
        image:
          "https://images.unsplash.com/photo-1552664730-d307ca884978?q=80&w=2070&auto=format&fit=crop",
        features: [
          {
            title: "Payroll Management",
            desc: "Accurate, timely payroll processing for all workforce tiers",
          },
          {
            title: "Compliance Support",
            desc: "PF, ESIC, bonus, gratuity and all statutory compliances",
          },
          {
            title: "Training Programs",
            desc: "Technical skills, safety training and soft skills development",
          },
          {
            title: "Staffing Solutions",
            desc: "Skilled and semi-skilled manpower deployment across India",
          },
          {
            title: "Industrial Licensing",
            desc: "Factory license, CLRA, and all regulatory clearances",
          },
          {
            title: "Employee Relations",
            desc: "Grievance handling, engagement programs and retention strategies",
          },
        ],
        stats: [
          {
            number: 5000,
            suffix: "+",
            label: "Employees Managed",
          },
          {
            number: 100,
            suffix: "%",
            label: "Compliance Rate",
          },
          {
            number: 30,
            suffix: "+",
            label: "Client Locations",
          },
          {
            number: 15,
            suffix: "+",
            label: "Years Experience",
          },
        ],
        process: [
          "Need Assessment",
          "Contract Setup",
          "Deployment",
          "Payroll Processing",
          "Compliance Audit",
          "Continuous Review",
        ],
        industries: [
          "Automotive",
          "Manufacturing",
          "Logistics",
          "Pharma",
          "Construction",
        ],
      },
      {
        slug: "ndt-testing",
        category: "TESTING",
        title: "NDT Testing Excellence",
        subtitle: "Advanced non-destructive testing solutions",
        description:
          "Advanced non-destructive testing for structural integrity, safety compliance and defect detection.",
        longDescription:
          "Using techniques like ultrasonic, magnetic particle, liquid penetrant, eddy current, and radiographic testing, our ASNT-certified technicians provide accurate and reliable results. We serve industries where safety and structural integrity are non-negotiable — from automotive to aerospace to oil & gas.",
        image:
          "/risk-mitigation.webp",
        features: [
          {
            title: "Ultrasonic Testing (UT)",
            desc: "High-frequency sound waves to detect internal flaws",
          },
          {
            title: "Magnetic Particle Testing (MT)",
            desc: "Surface and near-surface defect detection in ferrous materials",
          },
          {
            title: "Liquid Penetrant Testing (PT)",
            desc: "Visible and fluorescent dye methods for surface cracks",
          },
          {
            title: "Eddy Current Testing (ET)",
            desc: "Electromagnetic induction for conductive material inspection",
          },
          {
            title: "Radiographic Testing (RT)",
            desc: "X-ray and gamma ray imaging for internal structure analysis",
          },
          {
            title: "Visual Testing (VT)",
            desc: "Systematic visual examination with boroscopes and cameras",
          },
        ],
        stats: [
          {
            number: 10000,
            suffix: "+",
            label: "Tests Conducted",
          },
          {
            number: 50,
            suffix: "+",
            label: "Certified Technicians",
          },
          {
            number: 99,
            suffix: "%",
            label: "Accuracy Rate",
          },
          {
            number: 6,
            suffix: "",
            label: "NDT Methods",
          },
        ],
        process: [
          "Method Selection",
          "Surface Preparation",
          "Testing",
          "Data Analysis",
          "Report Generation",
          "Recommendations",
        ],
        industries: [
          "Automotive",
          "Aerospace",
          "Oil & Gas",
          "Power Plants",
          "Construction",
        ],
      },
      {
        slug: "sourcing-global",
        category: "SOURCING",
        title: "Sourcing & Global Expansion",
        subtitle: "Strategic global sourcing & supply chain",
        description:
          "Strategic global sourcing solutions and international supply chain expansion services.",
        longDescription:
          "From supplier identification and qualification to logistics coordination and quality verification, we handle the entire sourcing lifecycle. Our team's deep knowledge of global markets helps you reduce procurement costs, mitigate supply risks, and achieve sustainable supplier relationships.",
        image:
          "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?q=80&w=2070&auto=format&fit=crop",
        features: [
          {
            title: "Supplier Identification",
            desc: "Global database of vetted suppliers across industries",
          },
          {
            title: "Negotiation Support",
            desc: "Cost optimization through expert commercial negotiations",
          },
          {
            title: "Logistics Coordination",
            desc: "End-to-end shipment management and customs clearance",
          },
          {
            title: "Quality Verification",
            desc: "Pre-shipment inspection and supplier audit programs",
          },
          {
            title: "Market Research",
            desc: "Competitive analysis and sourcing strategy development",
          },
          {
            title: "Vendor Development",
            desc: "Supplier capability building and performance tracking",
          },
        ],
        stats: [
          {
            number: 100,
            suffix: "+",
            label: "Suppliers Vetted",
          },
          {
            number: 10,
            suffix: "+",
            label: "Countries Covered",
          },
          {
            number: 20,
            suffix: "%",
            label: "Avg Cost Reduction",
          },
          {
            number: 500,
            suffix: "Cr+",
            label: "Sourcing Volume",
          },
        ],
        process: [
          "Requirement Analysis",
          "Supplier Search",
          "Evaluation & Audit",
          "Negotiation",
          "Order Management",
          "Delivery & Support",
        ],
        industries: [
          "Automotive",
          "Electronics",
          "Industrial Equipment",
          "Consumer Goods",
          "Aerospace",
        ],
      },
      {
        slug: "paint-shop",
        category: "PAINT SHOP",
        title: "Paint Shop Services",
        subtitle: "Complete surface treatment & finishing",
        description:
          "Complete paint shop management, surface treatment and finishing quality control solutions.",
        longDescription:
          "Our paint shop services cover the entire coating lifecycle — from pre-treatment and primer application to topcoat and clear coat processes. Our specialists optimize paint parameters, reduce rejection rates, and ensure consistent color matching across production batches.",
        image:
          "https://images.unsplash.com/photo-1563013544-824ae1b704d3?q=80&w=2070&auto=format&fit=crop",
        features: [
          {
            title: "Surface Preparation",
            desc: "Chemical cleaning, phosphating and degreasing processes",
          },
          {
            title: "Paint Application",
            desc: "Robotic and manual spray, electrostatic and dip coating",
          },
          {
            title: "Quality Inspection",
            desc: "DFT measurement, adhesion testing and gloss checks",
          },
          {
            title: "Color Matching",
            desc: "Spectrophotometer-based color verification and approval",
          },
          {
            title: "Process Optimization",
            desc: "Cycle time reduction and paint utilization improvement",
          },
          {
            title: "Environment Compliance",
            desc: "VOC monitoring, waste treatment and regulatory adherence",
          },
        ],
        stats: [
          {
            number: 30,
            suffix: "+",
            label: "Paint Lines Managed",
          },
          {
            number: 95,
            suffix: "%",
            label: "First Pass Yield",
          },
          {
            number: 200,
            suffix: "+",
            label: "Technicians",
          },
          {
            number: 8,
            suffix: "+",
            label: "OEM Approved",
          },
        ],
        process: [
          "Pre-treatment",
          "Primer Application",
          "Top Coat",
          "Quality Check",
          "Rework (if any)",
          "Final Approval",
        ],
        industries: [
          "Automotive",
          "Two-wheelers",
          "Appliances",
          "Industrial Equipment",
          "Furniture",
        ],
      },
      {
        slug: "amc-services",
        category: "MAINTENANCE",
        title: "AMC Services",
        subtitle: "Annual maintenance contracts for operations",
        description:
          "Annual maintenance contracts ensuring uninterrupted operations and equipment longevity.",
        longDescription:
          "Equipment downtime is costly. Our AMC services combine scheduled preventive maintenance with advanced predictive techniques like vibration analysis and thermography to prevent failures before they occur. Our dedicated maintenance teams are deployed on-site to ensure rapid response and minimal production loss.",
        image:
          "https://images.unsplash.com/photo-1581092160562-40aa08e78837?q=80&w=2070&auto=format&fit=crop",
        features: [
          {
            title: "Preventive Maintenance",
            desc: "Scheduled inspections and servicing to prevent breakdowns",
          },
          {
            title: "Predictive Maintenance",
            desc: "Vibration analysis, thermography and oil analysis",
          },
          {
            title: "Equipment Servicing",
            desc: "CNC, PLC, hydraulic and pneumatic system expertise",
          },
          {
            title: "Spare Parts Management",
            desc: "Inventory optimization and critical spares planning",
          },
          {
            title: "24/7 Support",
            desc: "Round-the-clock emergency breakdown response",
          },
          {
            title: "Condition Monitoring",
            desc: "Real-time equipment health tracking and alerts",
          },
        ],
        stats: [
          {
            number: 99,
            suffix: "%",
            label: "Uptime Achieved",
          },
          {
            number: 100,
            suffix: "+",
            label: "Machines Managed",
          },
          {
            number: 40,
            suffix: "%",
            label: "Downtime Reduction",
          },
          {
            number: 24,
            suffix: "/7",
            label: "Support Available",
          },
        ],
        process: [
          "Site Assessment",
          "Contract Design",
          "Team Deployment",
          "Scheduled Maintenance",
          "Performance Review",
          "Continuous Optimization",
        ],
        industries: [
          "Automotive",
          "Manufacturing",
          "Power Plants",
          "Pharma",
          "FMCG",
        ],
      },
    ],
    ctaTitle: "Ready to Elevate Your Quality Standards?",
    ctaSubtitle: "Get in touch with our experts today.",
    ctaButton1Text: "GET A FREE QUOTE →",
    ctaButton2Text: "CALL US NOW →",
  },
  culture: {
    heroTitle: "Life At",
    heroTitleHighlight: "GROWUS",
    heroSubtitle: "CULTURE",
    heroBg:
      "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?q=80&w=2071&auto=format&fit=crop",
    heroDescription:
      "We don't just build technical solutions; we build careers. Join a community of 800+ engineers where precision meets passion and innovation is a daily standard.",
    dnaSubtitle: "OUR DNA",
    dnaTitle: "The Values We Live By",
    dnaValues: [
      {
        title: "Precision First",
        desc: "Excellence lies in the minutest details; defined by accuracy and consistency.",
        icon: "🎯",
      },
      {
        title: "People Centric",
        desc: "Our strength is our team; fostering growth, respect, and mutual empowerment.",
        icon: "🤝",
      },
      {
        title: "Agile Response",
        desc: "Ability to react quickly and effectively in a fast-paced industrial world.",
        icon: "⚡",
      },
      {
        title: "Integrity Always",
        desc: "Honesty and ethical practices are non-negotiable, building trust.",
        icon: "🛡️",
      },
    ],
    perksSubtitle: "OUR CULTURE",
    perksTitle: "Designed for Excellence & Empowerment",
    perksDescription:
      "At Growus, culture isn't a buzzword—it's the foundation of our individual and collective success. We believe that our people are our greatest asset, and we invest heavily in their professional and personal growth.",
    perksList: [
      {
        title: "Growth & Learning",
        desc: "Structured training programs and career development paths.",
      },
      {
        title: "Global Exposure",
        desc: "Work on international projects across 5+ countries.",
      },
      {
        title: "Work-Life Balance",
        desc: "Supportive environment that respects your personal time.",
      },
      {
        title: "Recognition",
        desc: "Regular performance rewards and excellence awards.",
      },
      {
        title: "Health & Well-being",
        desc: "Comprehensive health insurance and wellness initiatives.",
      },
      {
        title: "Innovation",
        desc: "Encouraging new ideas and cutting-edge industrial solutions.",
      },
    ],
    statsCount: "526+",
    statsLabel: "Happy Engineers",
    workspacesSubtitle: "ENVIRONMENT",
    workspacesTitle: "Our Workspaces",
    workspaces: [
      {
        img: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?q=80&w=2070&auto=format&fit=crop",
        label: "Quality Lab",
      },
      {
        img: "https://images.unsplash.com/photo-1581092162384-8987c1d64718?q=80&w=2074&auto=format&fit=crop",
        label: "Engineering Floor",
      },
      {
        img: "https://images.unsplash.com/photo-1497366216548-37526070297c?q=80&w=2070&auto=format&fit=crop",
        label: "Collaboration Hub",
      },
    ],
    ctaTitle: "Ready to Join the Revolution?",
    ctaDescription:
      "Explore open positions and take the first step towards an extraordinary career in industrial quality.",
    ctaButtonText: "VIEW OPEN POSITIONS →",
  },
  gallery: {
    heroTitle: "OUR GALLERY",
    heroSubtitle: "CAPTURING EXCELLENCE",
    heroBg:
      "https://images.unsplash.com/photo-1522071820081-009f0129c71c?q=80&w=2070&auto=format&fit=crop",
    heroDescription:
      "Explore our journey through events and activities that define our commitment to quality and innovation.",
    events: [
      {
        img: "https://images.unsplash.com/photo-1540575467063-178a50c2df87?q=80&w=800&auto=format&fit=crop",
        title: "Annual Conference 2025",
      },
      {
        img: "https://images.unsplash.com/photo-1475721027785-f74eccf877e2?q=80&w=800&auto=format&fit=crop",
        title: "Industry Summit",
      },
      {
        img: "https://images.unsplash.com/photo-1559223607-a43c990c692c?q=80&w=800&auto=format&fit=crop",
        title: "Tech Symposium",
      },
      {
        img: "https://images.unsplash.com/photo-1587825140708-dfaf18c4f4d4?q=80&w=800&auto=format&fit=crop",
        title: "Business Forum",
      },
      {
        img: "https://images.unsplash.com/photo-1505373877841-8d25f7d46678?q=80&w=800&auto=format&fit=crop",
        title: "Client Appreciation Day",
      },
      {
        img: "https://images.unsplash.com/photo-1515187029135-18ee286d815b?q=80&w=800&auto=format&fit=crop",
        title: "Quality Awards 2024",
      },
      {
        img: "https://images.unsplash.com/photo-1591115765373-5207764f72e7?q=80&w=800&auto=format&fit=crop",
        title: "Engineer's Day Celebration",
      },
      {
        img: "https://images.unsplash.com/photo-1556761175-5973dc0f32e7?q=80&w=800&auto=format&fit=crop",
        title: "Safety Week",
      },
    ],
    activities: [
      {
        img: "https://images.unsplash.com/photo-1522071820081-009f0129c71c?q=80&w=800&auto=format&fit=crop",
        title: "Team Collaboration",
      },
      {
        img: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?q=80&w=800&auto=format&fit=crop",
        title: "Quality Lab Testing",
      },
      {
        img: "https://images.unsplash.com/photo-1581092162384-8987c1d64718?q=80&w=800&auto=format&fit=crop",
        title: "On-Site Inspection",
      },
      {
        img: "https://images.unsplash.com/photo-1552664730-d307ca884978?q=80&w=800&auto=format&fit=crop",
        title: "Training Workshop",
      },
      {
        img: "https://images.unsplash.com/photo-1565043589221-1a6fd9ae45c7?q=80&w=800&auto=format&fit=crop",
        title: "Automotive Inspection",
      },
      {
        img: "https://images.unsplash.com/photo-1537462715879-360eeb61a0ad?q=80&w=800&auto=format&fit=crop",
        title: "3D Scanning Session",
      },
      {
        img: "https://images.unsplash.com/photo-1497366216548-37526070297c?q=80&w=800&auto=format&fit=crop",
        title: "Office Life",
      },
      {
        img: "https://images.unsplash.com/photo-1542744173-8e7e53415bb0?q=80&w=800&auto=format&fit=crop",
        title: "Strategy Planning",
      },
    ],
  },
  contact: {
    hero: {
      subtitle: "GET IN TOUCH",
      heading: "Ready to Solve Your",
      headingHighlight: "Quality Challenges",
      bgImage:
        "https://images.unsplash.com/photo-1516387933999-ed3315a1dd1d?q=80&w=2070&auto=format&fit=crop",
    },
    info: {
      items: [
        {
          title: "Global HQ",
          details: ["Jai Ganesh Vision", "Akurdi, Pune", "Maharashtra, India"],
        },
        {
          title: "Regional Office",
          details: ["Industrial Area", "Chennai, Tamil Nadu", "India"],
        },
        {
          title: "Call Us",
          details: ["+91 77760 00293", "Mon-Sat: 9am - 6pm"],
        },
        {
          title: "Email Us",
          details: ["info@growusauto.com", "support@growusauto.com"],
        },
      ],
    },
    form: {
      mapUrl: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3780.463132646399!2d73.77443831489467!3d18.643202987334743!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bc2b9e6e0000001%3A0xe53f53c15330e258!2sJai%20Ganesh%20Vision!5e0!3m2!1sen!2sin!4v1651234567890!5m2!1sen!2sin",
      subtitle: "SEND A MESSAGE",
      heading: "START A CONVERSATION",
      description:
        "Our expert engineers are ready to understand your requirements and provide tailored quality solutions.",
      supportText: "MON-SAT TECHNICAL SUPPORT AVAILABLE",
      submitButtonText: "SEND INQUIRY →",
      submitButtonBg: "#32cd32",
      fields: [
        {
          label: "Full Name",
          name: "name",
          type: "text",
          placeholder: "Your name",
          required: true,
        },
        {
          label: "Email Address",
          name: "email",
          type: "email",
          placeholder: "xyz@yourcompany.com",
          required: true,
        },
        {
          label: "Phone Number",
          name: "phone",
          type: "tel",
          placeholder: "+91 00000 00000",
          required: true,
        },
        {
          label: "Service Required",
          name: "service",
          type: "select",
          required: true,
          options: [
            "Quality Management",
            "Third Party Inspection",
            "Engineering & Design",
            "NDT Testing",
            "Supply Chain Management",
            "AMC Services",
            "Cooler Rental Services",
          ],
        },
        {
          label: "Your Message",
          name: "message",
          type: "textarea",
          placeholder: "How can we help you?",
          required: true,
        },
      ],
    },
  },
  joinProgramForm: {
    subtitle: "JOIN OUR NETWORK",
    heading: "BECOME A PARTNER",
    description:
      "Collaborate with us to drive innovation and quality in the global industrial ecosystem.",
    submitButtonText: "SUBMIT APPLICATION →",
    submitButtonBg: "#32cd32",
    fields: [
      {
        label: "Full Name",
        name: "name",
        type: "text",
        placeholder: "Your full name",
        required: true,
      },
      {
        label: "Email Address",
        name: "email",
        type: "email",
        placeholder: "your@email.com",
        required: true,
      },
      {
        label: "Phone Number",
        name: "phone",
        type: "tel",
        placeholder: "Contact number",
        required: true,
      },
      {
        label: "Experience (Years)",
        name: "experience",
        type: "text",
        placeholder: "Total years of experience",
        required: true,
      },
      {
        label: "Area of Expertise",
        name: "expertise",
        type: "text",
        placeholder: "Focus area (e.g., Engineering, Sales)",
        required: true,
      },
      {
        label: "Why join us?",
        name: "message",
        type: "textarea",
        placeholder: "Tell us a bit about yourself...",
        required: true,
      },
    ],
  },
  brochures: [
    {
      id: "corporate",
      title: "CORPORATE BROCHURE",
      desc: "Company overview, vision, and capabilities",
      url: "#",
    },
    {
      id: "services",
      title: "SERVICES OVERVIEW",
      desc: "Complete list of our service offerings",
      url: "#",
    },
    {
      id: "engineering",
      title: "ENGINEERING SOLUTIONS",
      desc: "Technical capabilities and project portfolio",
      url: "#",
    },
  ],
  footer: {
    logoText: "growus",
    logoHighlight: "auto",
    description:
      "Your trusted partner in global quality control and supply chain solutions. Supporting clients across 5+ countries.",
    quickLinks: [
      "Home",
      "About Us",
      "Services",
      "Gallery",
      "Careers",
      "Contact",
      "Brochures",
    ],
    servicesList: [
      "Automated Inspection",
      "Technical Solutions",
      "Supply Chain",
      "Risk Mitigation",
      "On-Site Support",
      "Quality Audits",
    ],
    phone: "+91 77760 00293",
    email: "info@growusauto.com",
    address: "BR1, 336, 3rd Floor, B Wing, Jai Ganesh Vision, Akurdi, Pune",
    copyright: "© 2025 Growus Auto. All Rights Reserved.",
  },
};
