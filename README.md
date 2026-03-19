# Judô Kaminari - Site Oficial

## 📋 Descrição

Site institucional da Academia de Judô Kaminari em Curitiba, desenvolvido em HTML/CSS/JS puro com foco em SEO local e performance.

## 🎨 Características

- **HTML/CSS/JS Puro**: Sem dependências de frameworks
- **SEO Local Otimizado**: JSON-LD Schema.org, meta tags, alt em imagens
- **Performance**: Cache busting, imagens otimizadas (836KB total)
- **Responsivo**: Mobile-first design
- **Acessibilidade**: WCAG compliant
- **Cache Control**: .htaccess com headers de cache e compressão gzip

## 📁 Estrutura

```
judo-kaminari-html/
├── index.html              # Página principal
├── .htaccess              # Configurações de cache e compressão
├── README.md              # Este arquivo
└── assets/
    ├── css/
    │   └── style.css      # Estilos (v=1.0)
    ├── js/
    │   └── main.js        # JavaScript (v=1.0)
    └── images/
        ├── judo-hero.jpg          # Hero section
        ├── judo-kids.jpg          # Judô infantil
        ├── judo-competition.jpg   # Competição
        └── judo-dojo.jpg          # Dojo
```

## 🚀 Deployment

### Cloudflare Pages
1. Fazer upload do arquivo `.zip`
2. Conectar ao repositório Git
3. Build command: (deixar vazio)
4. Build output directory: `/`

### Netlify
1. Fazer upload do arquivo `.zip`
2. Ou conectar ao repositório
3. Publish directory: `/`

### Servidor Apache
1. Descompactar no diretório raiz
2. Certificar que `.htaccess` está habilitado
3. Configurar `mod_rewrite` e `mod_expires`

## 🔍 SEO Local

- **JSON-LD LocalBusiness**: Endereço, telefone, horários
- **Meta Tags**: Título, descrição, keywords focadas em Curitiba
- **Open Graph**: Compartilhamento em redes sociais
- **Atributos Alt**: Todas as imagens com descrições
- **Canonical URL**: https://judokaminari.com.br

## 📊 Performance

- **Tamanho total**: ~836KB (imagens otimizadas)
- **Cache busting**: Query strings (v=1.0)
- **Compressão**: Gzip habilitado
- **Lazy loading**: Imagens com `loading="lazy"`

## 📱 Responsividade

- Desktop (1200px+)
- Tablet (768px - 1199px)
- Mobile (até 767px)

## 🔧 Customização

### Alterar cores
Editar variáveis CSS em `assets/css/style.css`:
```css
:root {
  --primary-color: #e63946;    /* Rosa/Coral */
  --secondary-color: #0a0a0a;  /* Preto */
  --accent-color: #ffffff;     /* Branco */
}
```

### Alterar contato
Editar em `index.html`:
- Telefone: `(41) 99987-6799`
- Email: `contato@judokaminari.com`
- Endereço: `Rua Gabriel Arns, 26`

### Alterar links
- Instagram: `https://www.instagram.com/judokaminari/`
- Facebook: `https://www.facebook.com/judokaminari/`
- Formulário: Google Forms link

## 📝 Conteúdo

### Seções
1. **Hero**: Apresentação principal
2. **Sobre**: Valores da academia
3. **Aulas**: Modalidades oferecidas
4. **O que é Judô**: Informações educacionais
5. **Galeria**: Fotos e vídeos
6. **Contato**: Informações e mapa

## 🔐 Segurança

- Headers de segurança configurados
- X-Content-Type-Options: nosniff
- X-Frame-Options: SAMEORIGIN
- X-XSS-Protection: 1; mode=block

## 📞 Suporte

Para dúvidas ou alterações, contate a Academia Judô Kaminari:
- Telefone: (41) 99987-6799
- Email: contato@judokaminari.com
- Instagram: @judokaminari

## 📄 Licença

© 2026 Judô Kaminari. Todos os direitos reservados.

---

**Versão**: 1.0  
**Última atualização**: Março 2026
