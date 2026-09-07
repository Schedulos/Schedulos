import json
import os

translations = {
  "pt": {
    "nav": {
      "solucoes": "Soluções",
      "servicos": "Serviços",
      "projetos": "Projetos",
      "negocios": "Negócios",
      "investimento": "Investimento",
      "contactar": "Falar connosco →",
      "tecnologia": "Tecnologia pensada para o negócio.",
      "escolha": "Escolha apenas o que precisa ou combine várias soluções para criar uma infraestrutura digital completa.",
      "descobrir": "Descobrir solução →"
    },
    "hero": {
      "transformamos": "Transformamos <span className=\"highlight\">problemas</span> em tecnologia.",
      "websites": "Websites, inteligência artificial, automação, agendamento, e-commerce e software à medida. A Schedulos desenha e desenvolve soluções digitais pensadas em função do seu negócio — não da ferramenta.",
      "descobrir": "Descobrir a solução certa →",
      "ver": "Ver o que fazemos"
    },
    "marquee": {
      "we_build": "WE BUILD"
    }
  },
  "en": {
    "nav": {
      "solucoes": "Solutions",
      "servicos": "Services",
      "projetos": "Projects",
      "negocios": "Industries",
      "investimento": "Pricing",
      "contactar": "Contact Us →",
      "tecnologia": "Technology designed for business.",
      "escolha": "Choose only what you need or combine multiple solutions to create a complete digital infrastructure.",
      "descobrir": "Discover solution →"
    },
    "hero": {
      "transformamos": "We turn <span className=\"highlight\">problems</span> into technology.",
      "websites": "Websites, artificial intelligence, automation, booking, e-commerce, and custom software. Schedulos designs and develops digital solutions built around your business—not the tool.",
      "descobrir": "Discover the right solution →",
      "ver": "See what we do"
    },
    "marquee": {
      "we_build": "WE BUILD"
    }
  },
  "es": {
    "nav": {
      "solucoes": "Soluciones",
      "servicos": "Servicios",
      "projetos": "Proyectos",
      "negocios": "Industrias",
      "investimento": "Inversión",
      "contactar": "Contáctanos →",
      "tecnologia": "Tecnología diseñada para el negocio.",
      "escolha": "Elige solo lo que necesitas o combina múltiples soluciones para crear una infraestructura digital completa.",
      "descobrir": "Descubrir solución →"
    },
    "hero": {
      "transformamos": "Convertimos <span className=\"highlight\">problemas</span> en tecnología.",
      "websites": "Sitios web, inteligencia artificial, automatización, reservas, comercio electrónico y software a medida. Schedulos diseña y desarrolla soluciones digitales pensadas en su negocio, no en la herramienta.",
      "descobrir": "Descubrir la solución adecuada →",
      "ver": "Mira lo que hacemos"
    },
    "marquee": {
      "we_build": "WE BUILD"
    }
  },
  "fr": {
    "nav": {
      "solucoes": "Solutions",
      "servicos": "Services",
      "projetos": "Projets",
      "negocios": "Industries",
      "investimento": "Investissement",
      "contactar": "Contactez-nous →",
      "tecnologia": "La technologie conçue pour les affaires.",
      "escolha": "Choisissez uniquement ce dont vous avez besoin ou combinez plusieurs solutions pour créer une infrastructure numérique complète.",
      "descobrir": "Découvrir la solution →"
    },
    "hero": {
      "transformamos": "Nous transformons les <span className=\"highlight\">problèmes</span> en technologie.",
      "websites": "Sites Web, intelligence artificielle, automatisation, réservation, commerce électronique et logiciels sur mesure. Schedulos conçoit et développe des solutions numériques pensées pour votre entreprise, et non pour l'outil.",
      "descobrir": "Découvrir la bonne solution →",
      "ver": "Voir ce que nous faisons"
    },
    "marquee": {
      "we_build": "WE BUILD"
    }
  }
}

with open('src/i18n/translations.ts', 'w', encoding='utf-8') as f:
    f.write('export const translations = ')
    f.write(json.dumps(translations, indent=2, ensure_ascii=False))
    f.write(';\n')
