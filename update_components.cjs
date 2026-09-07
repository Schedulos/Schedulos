const fs = require('fs');

function updateFile(path, replacer) {
    let content = fs.readFileSync(path, 'utf8');
    if (!content.includes('useLanguage')) {
        content = content.replace(/(import.*';\n)/, "$1import { useLanguage } from '../i18n/LanguageContext';\n");
    }
    content = replacer(content);
    fs.writeFileSync(path, content);
}

updateFile('src/components/WhatWeDo.tsx', (content) => {
    content = content.replace(/export function WhatWeDo\(\) \{/, "export function WhatWeDo() {\n  const { t } = useLanguage();");
    content = content.replace(/<div className="eyebrow">.*<\/div>/, '<div className="eyebrow">{t("whatwedo.eyebrow")}</div>');
    content = content.replace(/<h2>Uma infraestrutura digital <span>pensada para o seu negócio.<\/span><\/h2>/, '<h2>{t("whatwedo.title1")} <span>{t("whatwedo.title2")}</span></h2>');
    return content;
});

updateFile('src/components/Services.tsx', (content) => {
    content = content.replace(/export function Services[^\{]*\{/, "export function Services({ onOpenService }: { onOpenService: (key: string) => void }) {\n  const { t } = useLanguage();");
    content = content.replace(/<div className="eyebrow">.*<\/div>/, '<div className="eyebrow">{t("services.eyebrow")}</div>');
    content = content.replace(/<h2>Nós fazemos <span>o trabalho pesado.<\/span><\/h2>/, '<h2>{t("services.title1")} <span>{t("services.title2")}</span></h2>');
    return content;
});

updateFile('src/components/Portfolio.tsx', (content) => {
    content = content.replace(/export function Portfolio\(\) \{/, "export function Portfolio() {\n  const { t } = useLanguage();");
    content = content.replace(/<div className="eyebrow">.*<\/div>/, '<div className="eyebrow">{t("portfolio.eyebrow")}</div>');
    content = content.replace(/<h2>Não vendemos código. <span>Vendemos resultados.<\/span><\/h2>/, '<h2>{t("portfolio.title1")} <span>{t("portfolio.title2")}</span></h2>');
    return content;
});

updateFile('src/components/CaseStudies.tsx', (content) => {
    content = content.replace(/export function CaseStudies\(\) \{/, "export function CaseStudies() {\n  const { t } = useLanguage();");
    content = content.replace(/<div className="eyebrow">.*<\/div>/, '<div className="eyebrow">{t("cases.eyebrow")}</div>');
    content = content.replace(/<h2>Menos teoria. <span>Mais prática.<\/span><\/h2>/, '<h2>{t("cases.title1")} <span>{t("cases.title2")}</span></h2>');
    return content;
});

updateFile('src/components/Industries.tsx', (content) => {
    content = content.replace(/export function Industries\(\) \{/, "export function Industries() {\n  const { t } = useLanguage();");
    content = content.replace(/<div className="eyebrow">.*<\/div>/, '<div className="eyebrow">{t("industries.eyebrow")}</div>');
    content = content.replace(/<h2>Tecnologia adaptada à sua realidade.<\/h2>/, '<h2>{t("industries.title")}</h2>');
    return content;
});

updateFile('src/components/Pricing.tsx', (content) => {
    content = content.replace(/export function Pricing\(\) \{/, "export function Pricing() {\n  const { t } = useLanguage();");
    content = content.replace(/<div className="eyebrow">.*<\/div>/, '<div className="eyebrow">{t("pricing.eyebrow")}</div>');
    content = content.replace(/<h2>Transparência. <span>Sem surpresas.<\/span><\/h2>/, '<h2>{t("pricing.title1")} <span>{t("pricing.title2")}</span></h2>');
    return content;
});

updateFile('src/components/Configurator.tsx', (content) => {
    content = content.replace(/export function Configurator[^\{]*\{/, "export function Configurator({ onConfigChange }: ConfiguratorProps) {\n  const { t } = useLanguage();");
    content = content.replace(/<div className="eyebrow">.*<\/div>/, '<div className="eyebrow">{t("config.eyebrow")}</div>');
    content = content.replace(/<h2>Descubra o que <span>o seu negócio precisa.<\/span><\/h2>/, '<h2>{t("config.title1")} <span>{t("config.title2")}</span></h2>');
    return content;
});

updateFile('src/components/Calculator.tsx', (content) => {
    content = content.replace(/export function Calculator\(\) \{/, "export function Calculator() {\n  const { t } = useLanguage();");
    content = content.replace(/<div className="eyebrow">.*<\/div>/, '<div className="eyebrow">{t("calc.eyebrow")}</div>');
    content = content.replace(/<h2>Quanto lhe custa <span>não automatizar\?<\/span><\/h2>/, '<h2>{t("calc.title1")} <span>{t("calc.title2")}</span></h2>');
    return content;
});

updateFile('src/components/Process.tsx', (content) => {
    content = content.replace(/export function Process\(\) \{/, "export function Process() {\n  const { t } = useLanguage();");
    content = content.replace(/<div className="eyebrow">.*<\/div>/, '<div className="eyebrow">{t("process.eyebrow")}</div>');
    content = content.replace(/<h2>Um processo <span>sem dores de cabeça.<\/span><\/h2>/, '<h2>{t("process.title1")} <span>{t("process.title2")}</span></h2>');
    return content;
});

updateFile('src/components/Faq.tsx', (content) => {
    content = content.replace(/export function Faq\(\) \{/, "export function Faq() {\n  const { t } = useLanguage();");
    content = content.replace(/<div className="eyebrow">.*<\/div>/, '<div className="eyebrow">{t("faq.eyebrow")}</div>');
    content = content.replace(/<h2>Perguntas Frequentes<\/h2>/, '<h2>{t("faq.title")}</h2>');
    return content;
});

updateFile('src/components/Cta.tsx', (content) => {
    content = content.replace(/export function Cta\(\) \{/, "export function Cta() {\n  const { t } = useLanguage();");
    content = content.replace(/<h2>Pronto para modernizar a sua operação\?<\/h2>/, '<h2>{t("cta.title")}</h2>');
    return content;
});

updateFile('src/components/Contact.tsx', (content) => {
    content = content.replace(/export function Contact[^\{]*\{/, "export function Contact({ config }: ContactProps) {\n  const { t } = useLanguage();");
    content = content.replace(/<div className="eyebrow">.*<\/div>/, '<div className="eyebrow">{t("contact.eyebrow")}</div>');
    content = content.replace(/<h2>Vamos falar <span>sobre o seu projeto.<\/span><\/h2>/, '<h2>{t("contact.title1")} <span>{t("contact.title2")}</span></h2>');
    return content;
});

