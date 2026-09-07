import json
import os

with open('src/i18n/translations.ts', 'r', encoding='utf-8') as f:
    content = f.read()
    
json_str = content.replace('export const translations = ', '').strip().rstrip(';')
data = json.loads(json_str)

data['pt']['trusted'] = {'title': 'Com a confiança de empresas inovadoras'}
data['en']['trusted'] = {'title': 'Trusted by innovative companies'}
data['es']['trusted'] = {'title': 'Con la confianza de empresas innovadoras'}
data['fr']['trusted'] = {'title': 'Faisant confiance à des entreprises innovantes'}

with open('src/i18n/translations.ts', 'w', encoding='utf-8') as f:
    f.write('export const translations = ')
    f.write(json.dumps(data, indent=2, ensure_ascii=False))
    f.write(';\n')
