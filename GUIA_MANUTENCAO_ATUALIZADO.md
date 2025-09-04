# 🔧 Guia de Manutenção - Portfólio Profissional

## 📋 Visão Geral

Este guia fornece instruções detalhadas para manter e atualizar seu site portfólio profissional. O projeto foi desenvolvido com React, Tailwind CSS e componentes modernos para facilitar a manutenção.

## 🎨 Paleta de Cores Atual

### Cores Principais
- **Azul Primário:** `#3b82f6` (Blue 500)
- **Ciano:** `#06b6d4` (Cyan 500) 
- **Roxo:** `#8b5cf6` (Violet 500)
- **Verde:** `#10b981` (Emerald 500)

### Cores de Fundo
- **Fundo Principal:** `#0f172a` (Slate 900)
- **Cards:** `#1e293b` (Slate 800)
- **Elementos Secundários:** `#334155` (Slate 700)

### Como Alterar Cores
1. Abra o arquivo `src/App.css`
2. Localize a seção `:root` (linha 45)
3. Modifique as variáveis CSS conforme necessário:

```css
:root {
  --primary: #3b82f6; /* Sua nova cor primária */
  --accent: #06b6d4;   /* Sua nova cor de destaque */
  /* ... outras cores */
}
```

## 🖼️ Gerenciamento de Imagens

### Imagem de Perfil
- **Localização:** `src/assets/profile.jpg`
- **Formato recomendado:** JPG ou PNG
- **Tamanho ideal:** 800x800px (quadrada)
- **Qualidade:** Alta resolução para melhor resultado

### Para Trocar a Imagem de Perfil:
1. Substitua o arquivo `src/assets/profile.jpg` pela nova imagem
2. Mantenha o mesmo nome ou atualize a importação em `src/components/About.jsx`

## 📝 Atualizando Informações Pessoais

### Dados do Hero (Página Inicial)
**Arquivo:** `src/components/Hero.jsx`

```jsx
// Linha 41-48: Título principal
<h1 className="...">
  Criando
  <span className="...">Soluções Empresariais</span>
  <span className="...">que Transformam Negócios</span>
</h1>

// Linha 52-57: Subtítulo
<p className="...">
  Especialista em Power Apps, SharePoint e Power BI...
</p>
```

### Dados da Seção Sobre
**Arquivo:** `src/components/About.jsx`

```jsx
// Linha 5-12: Habilidades técnicas
const skills = [
  { name: 'Power Apps', level: 95 },
  { name: 'SharePoint', level: 90 },
  // Adicione ou modifique conforme necessário
];

// Linha 81-93: Descrição pessoal
<p className="...">
  Com vasta experiência em desenvolvimento...
</p>
```

## 🚀 Gerenciando Projetos

### Adicionando Novos Projetos
**Arquivo:** `src/data/projects.json`

```json
{
  "id": "novo-projeto",
  "title": "Nome do Projeto",
  "description": "Descrição detalhada do projeto...",
  "category": "Categoria",
  "status": "Concluído",
  "technologies": ["Power Apps", "SharePoint"],
  "features": [
    "Funcionalidade 1",
    "Funcionalidade 2"
  ]
}
```

### Categorias Disponíveis
- Gestão de Recursos
- Controle de Acesso  
- Logística
- Gestão Financeira
- Manutenção
- Gestão de Contratos
- Comércio Internacional

## 🎭 Personalizando Animações

### Delays de Animação
**Arquivo:** `src/App.css` (linhas 202-209)

```css
.animation-delay-100 { animation-delay: 100ms; }
.animation-delay-200 { animation-delay: 200ms; }
/* Adicione novos delays conforme necessário */
```

### Tipos de Animação Disponíveis
- `animate-fade-in-up`: Entrada de baixo para cima
- `animate-fade-in-left`: Entrada da esquerda
- `animate-fade-in-right`: Entrada da direita
- `animate-scale-in`: Entrada com escala
- `hover-lift`: Efeito de elevação no hover

## 📞 Atualizando Informações de Contato

**Arquivo:** `src/components/Contact.jsx`

```jsx
// Informações de contato
<span>+55 (11) 99999-9999</span> // Telefone
<span>São Paulo, SP - Brasil</span> // Localização
```

## 🛠️ Comandos de Desenvolvimento

### Instalação
```bash
cd portfolio-clean
npm install  # ou pnpm install
```

### Desenvolvimento Local
```bash
npm run dev  # ou pnpm run dev
# Acesse: http://localhost:5173
```

### Build para Produção
```bash
npm run build  # ou pnpm run build
# Arquivos gerados na pasta 'dist/'
```

### Preview da Build
```bash
npm run preview  # ou pnpm run preview
```

## 📁 Estrutura de Arquivos

```
portfolio-clean/
├── src/
│   ├── assets/          # Imagens e recursos
│   │   └── profile.jpg  # Sua foto de perfil
│   ├── components/      # Componentes React
│   │   ├── About.jsx    # Seção Sobre
│   │   ├── Contact.jsx  # Seção Contato
│   │   ├── Hero.jsx     # Página inicial
│   │   └── Portfolio.jsx # Seção Portfólio
│   ├── data/
│   │   └── projects.json # Dados dos projetos
│   ├── App.css         # Estilos principais
│   └── App.jsx         # Componente principal
├── public/             # Arquivos públicos
├── package.json        # Dependências
└── vite.config.js     # Configuração do Vite
```

## 🎯 Dicas de Manutenção

### 1. Backup Regular
- Sempre faça backup antes de grandes alterações
- Use controle de versão (Git) para rastrear mudanças

### 2. Testes Locais
- Sempre teste localmente antes de fazer deploy
- Verifique responsividade em diferentes tamanhos de tela

### 3. Performance
- Otimize imagens antes de adicionar
- Mantenha o código limpo e organizado

### 4. Atualizações
- Mantenha as dependências atualizadas
- Teste após cada atualização

## 🆘 Solução de Problemas

### Erro: "Module not found"
- Verifique se todas as dependências estão instaladas
- Execute `npm install` ou `pnpm install`

### Imagem não aparece
- Verifique o caminho da imagem
- Confirme se o arquivo existe na pasta `src/assets/`

### Estilos não aplicados
- Verifique se não há erros de sintaxe no CSS
- Confirme se as classes Tailwind estão corretas

## 📞 Suporte

Para dúvidas ou problemas:
1. Consulte este guia primeiro
2. Verifique a documentação do React e Tailwind CSS
3. Entre em contato para suporte técnico

---

**Última atualização:** Setembro 2025
**Versão:** 2.0 - Melhorias de UI/UX implementadas

