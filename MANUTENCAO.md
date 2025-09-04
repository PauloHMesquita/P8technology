# Guia de Manutenção - Portfólio Desenvolvedor

Este guia fornece instruções detalhadas para manter e atualizar o site portfólio de forma fácil e eficiente.

## 📋 Tarefas de Manutenção Comuns

### 1. Adicionar Novo Projeto

**Arquivo**: `src/data/projects.json`

1. Abra o arquivo `projects.json`
2. Adicione um novo objeto no array `projects`:

```json
{
  "id": "nome-do-projeto",
  "title": "Nome do Projeto",
  "category": "Categoria Apropriada",
  "description": "Descrição detalhada do projeto e suas funcionalidades",
  "technologies": ["Power Apps", "SharePoint", "Power BI"],
  "features": [
    "Funcionalidade principal 1",
    "Funcionalidade principal 2",
    "Funcionalidade principal 3"
  ],
  "image": "/src/assets/projects/nome-projeto.jpg",
  "status": "Concluído"
}
```

**Categorias disponíveis**:
- Gestão de Recursos
- Controle de Acesso
- Logística
- Gestão Financeira
- Manutenção
- Gestão de Contratos
- Comércio Internacional

### 2. Atualizar Informações Pessoais

**Arquivo**: `src/components/About.jsx`

Para atualizar habilidades técnicas:
```javascript
const skills = [
  { name: 'Power Apps', level: 95 },
  { name: 'SharePoint', level: 90 },
  // Adicione ou modifique conforme necessário
];
```

Para atualizar estatísticas:
```javascript
const achievements = [
  {
    icon: <Award className="w-8 h-8 text-yellow-400" />,
    title: "12+ Projetos", // Atualize o número
    description: "Aplicações empresariais desenvolvidas"
  },
  // Continue com as outras estatísticas
];
```

### 3. Modificar Informações de Contato

**Arquivo**: `src/components/Contact.jsx`

Atualize o array `contactInfo`:
```javascript
const contactInfo = [
  {
    icon: <Mail className="w-6 h-6" />,
    title: 'Email',
    value: 'seu-novo-email@exemplo.com',
    link: 'mailto:seu-novo-email@exemplo.com'
  },
  {
    icon: <Phone className="w-6 h-6" />,
    title: 'Telefone',
    value: '+55 (11) 00000-0000',
    link: 'tel:+5511000000000'
  }
];
```

### 4. Atualizar Links de Redes Sociais

**Arquivo**: `src/components/Contact.jsx`

Modifique o array `socialLinks`:
```javascript
const socialLinks = [
  {
    icon: <Linkedin className="w-6 h-6" />,
    name: 'LinkedIn',
    url: 'https://linkedin.com/in/seu-perfil',
    color: 'hover:text-blue-400'
  }
];
```

### 5. Personalizar Cores do Site

**Arquivo**: `src/App.css`

Para alterar a paleta de cores, modifique as variáveis CSS:

```css
:root {
  /* Cores principais */
  --primary-color: #1a1a2e;
  --secondary-color: #16213e;
  --accent-color: #ffd700;
  
  /* Ou use as variáveis Tailwind existentes */
  --background: oklch(1 0 0);
  --foreground: oklch(0.145 0 0);
}
```

## 🔄 Processo de Atualização

### Passo a Passo para Atualizações

1. **Backup**: Sempre faça backup dos arquivos antes de modificar
2. **Edição**: Faça as alterações necessárias nos arquivos
3. **Teste Local**: Execute `pnpm run dev` para testar as mudanças
4. **Verificação**: Navegue pelo site para garantir que tudo funciona
5. **Build**: Execute `pnpm run build` para gerar a versão de produção

### Comandos Úteis

```bash
# Iniciar servidor de desenvolvimento
pnpm run dev

# Gerar build de produção
pnpm run build

# Visualizar build de produção localmente
pnpm run preview

# Instalar novas dependências
pnpm add nome-da-dependencia
```

## 🎨 Customizações Avançadas

### Adicionar Nova Seção

1. **Criar Componente**: Crie um novo arquivo em `src/components/`
```javascript
// src/components/NovaSecao.jsx
const NovaSecao = () => {
  return (
    <section id="nova-secao" className="py-20 bg-slate-800">
      {/* Conteúdo da nova seção */}
    </section>
  );
};

export default NovaSecao;
```

2. **Importar no App**: Adicione no `src/App.jsx`
```javascript
import NovaSecao from './components/NovaSecao';

// Adicione no JSX
<NovaSecao />
```

3. **Adicionar Navegação**: Inclua no menu do `src/components/Header.jsx`
```javascript
const menuItems = [
  { id: 'home', label: 'Início' },
  { id: 'nova-secao', label: 'Nova Seção' },
  // outros itens...
];
```

### Modificar Animações

As animações estão definidas no `src/App.css`. Para personalizar:

```css
/* Adicionar nova animação */
@keyframes minha-animacao {
  from { opacity: 0; transform: scale(0.8); }
  to { opacity: 1; transform: scale(1); }
}

.animate-minha-animacao {
  animation: minha-animacao 0.5s ease-out;
}
```

## 🐛 Solução de Problemas

### Problemas Comuns

**1. Site não carrega após mudanças**
- Verifique erros no console do navegador
- Certifique-se de que não há erros de sintaxe nos arquivos JSON
- Reinicie o servidor de desenvolvimento

**2. Estilos não aplicam**
- Verifique se as classes Tailwind estão corretas
- Limpe o cache do navegador
- Verifique se não há conflitos de CSS

**3. Imagens não aparecem**
- Verifique se os caminhos das imagens estão corretos
- Certifique-se de que as imagens estão na pasta `src/assets/`

### Logs e Debugging

Para debugar problemas:
```bash
# Ver logs detalhados
pnpm run dev --debug

# Verificar build
pnpm run build --verbose
```

## 📱 Responsividade

### Breakpoints Utilizados

- **Mobile**: < 768px
- **Tablet**: 768px - 1024px
- **Desktop**: > 1024px

### Testando Responsividade

1. Use as ferramentas de desenvolvedor do navegador
2. Teste em diferentes tamanhos de tela
3. Verifique se todos os elementos são acessíveis no mobile

## 🔒 Segurança

### Boas Práticas

- Mantenha as dependências atualizadas: `pnpm update`
- Não exponha informações sensíveis no código
- Use HTTPS em produção
- Valide entradas de formulários

## 📈 Performance

### Otimizações Implementadas

- Lazy loading de componentes
- Otimização de imagens
- Minificação de CSS e JavaScript
- Compressão de assets

### Monitoramento

Use ferramentas como:
- Google PageSpeed Insights
- Lighthouse (integrado no Chrome DevTools)
- GTmetrix

## 📞 Suporte

Para dúvidas sobre manutenção:
1. Consulte este guia primeiro
2. Verifique a documentação do React e Tailwind CSS
3. Use as ferramentas de desenvolvedor do navegador para debugar

---

**Lembre-se**: Sempre teste as mudanças localmente antes de aplicar em produção!

