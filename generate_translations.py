import os
translations = {
    'pt': {
        'nav': {
            'solutions': 'Soluções',
            'services': 'Serviços',
            'projects': 'Projetos',
            'business': 'Negócios',
            'investment': 'Investimento',
            'contact': 'Falar connosco →',
            'title': 'Tecnologia pensada para o negócio.',
            'desc': 'Escolha apenas o que precisa ou combine várias soluções para criar uma infraestrutura digital completa.',
            'discover': 'Descobrir solução →',
        }
    },
    'en': {
        'nav': {
            'solutions': 'Solutions',
            'services': 'Services',
            'projects': 'Projects',
            'business': 'Business',
            'investment': 'Investment',
            'contact': 'Contact us →',
            'title': 'Technology designed for business.',
            'desc': 'Choose only what you need or combine multiple solutions to create a complete digital infrastructure.',
            'discover': 'Discover solution →',
        }
    },
    'es': {
        'nav': {
            'solutions': 'Soluciones',
            'services': 'Servicios',
            'projects': 'Proyectos',
            'business': 'Negocios',
            'investment': 'Inversión',
            'contact': 'Contáctanos →',
            'title': 'Tecnología diseñada para el negocio.',
            'desc': 'Elige solo lo que necesitas o combina varias soluciones para crear una infraestructura digital completa.',
            'discover': 'Descubrir solución →',
        }
    },
    'fr': {
        'nav': {
            'solutions': 'Solutions',
            'services': 'Services',
            'projects': 'Projets',
            'business': 'Affaires',
            'investment': 'Investissement',
            'contact': 'Contactez-nous →',
            'title': 'Technologie conçue pour les affaires.',
            'desc': 'Choisissez uniquement ce dont vous avez besoin ou combinez plusieurs solutions pour créer une infrastructure numérique complète.',
            'discover': 'Découvrir la solution →',
        }
    }
}

with open('src/i18n/translations.ts', 'w', encoding='utf-8') as f:
    f.write('export const translations = ')
    import json
    f.write(json.dumps(translations, indent=2, ensure_ascii=False))
    f.write(';\n')
