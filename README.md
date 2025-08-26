# Invertexto.com Clone

Uma réplica funcional do site invertexto.com, criada com HTML, CSS e JavaScript vanilla. Este projeto oferece diversas ferramentas online para manipulação e análise de texto.

## 🚀 Funcionalidades Implementadas

### ✅ Ferramentas Funcionais

#### Manipulação de Texto
- **Inverter Texto** - Reverte a ordem dos caracteres
- **Maiúsculas e Minúsculas** - Converte texto para diferentes formatos de capitalização
- **Remover Linhas Duplicadas** - Remove linhas repetidas de listas
- **Textos Sinônimos** - Substitui palavras por sinônimos (versão demo com mock)

#### Análise de Texto
- **Contador de Caracteres** - Estatísticas completas em tempo real:
  - Contagem de caracteres (com e sem espaços)
  - Contagem de palavras, linhas e parágrafos
  - Tempo estimado de leitura e digitação
  - Média de caracteres por palavra

#### Ferramentas Aleatórias
- **Gerador de Senha** - Gera senhas seguras com:
  - Comprimento personalizável (4-128 caracteres)
  - Opções de tipos de caracteres
  - Análise de força da senha
  - Geração múltipla de senhas

## 🎨 Design e Interface

- **Design Moderno**: Interface limpa e responsiva inspirada no site original
- **Tipografia**: Fonte Inter do Google Fonts para melhor legibilidade
- **Cores**: Esquema de cores consistente com ícones coloridos por categoria
- **Responsivo**: Funciona perfeitamente em desktop, tablet e mobile
- **Acessibilidade**: Navegação por teclado e mensagens de erro claras

## 🛠️ Tecnologias Utilizadas

- **HTML5**: Estrutura semântica
- **CSS3**: Estilização moderna com CSS Grid/Flexbox
- **JavaScript ES6+**: Funcionalidades interativas
- **Google Fonts**: Tipografia profissional

## 📁 Estrutura do Projeto

```
invertexto-clone/
├── index.html                 # Página principal
├── README.md                  # Este arquivo
├── css/
│   └── style.css             # Estilos globais
├── js/
│   └── main.js               # Funcionalidades JavaScript
└── pages/
    ├── inverter-texto.html
    ├── converter-maiusculas-minusculas.html
    ├── textos-sinonimos.html
    ├── remover-linhas-duplicadas.html
    ├── contador-caracteres.html
    └── gerador-senha.html
```

## 🚀 Como Executar

### Opção 1: Servidor Local Python
```bash
# Navegue até o diretório do projeto
cd invertexto-clone

# Execute o servidor HTTP do Python
python3 -m http.server 8000

# Acesse no navegador
http://localhost:8000
```

### Opção 2: Servidor Local Node.js
```bash
# Instale o http-server globalmente
npm install -g http-server

# Execute no diretório do projeto
http-server -p 8000

# Acesse no navegador
http://localhost:8000
```

### Opção 3: Abrir Diretamente
Simplesmente abra o arquivo `index.html` em qualquer navegador moderno.

## ✨ Funcionalidades Especiais

### Busca Inteligente
- Pressione `/` em qualquer lugar para focar na barra de busca
- Filtragem em tempo real das ferramentas

### Contador de Caracteres em Tempo Real
- Atualização instantânea das estatísticas conforme você digita
- Cálculos automáticos de tempo de leitura e digitação

### Gerador de Senhas Avançado
- Análise visual da força da senha
- Opções personalizáveis de caracteres
- Geração múltipla com um clique

### Textos Sinônimos (Demo)
- Implementação mock que demonstra como seria a integração com IA
- Substitui palavras comuns por sinônimos
- Interface preparada para integração real com APIs de IA

## 🔧 Personalização

### Cores
As cores podem ser facilmente personalizadas editando as variáveis CSS em `css/style.css`:

```css
:root {
    --primary-blue: #3b82f6;
    --primary-yellow: #fbbf24;
    --text-dark: #1f2937;
    /* ... outras variáveis */
}
```

### Adicionando Novas Ferramentas
1. Crie um novo arquivo HTML em `pages/`
2. Use o template das páginas existentes
3. Adicione a funcionalidade JavaScript em `js/main.js`
4. Adicione o link na página principal `index.html`

## 🌟 Destaques Técnicos

- **Código Limpo**: JavaScript modular e bem documentado
- **Performance**: Carregamento rápido sem dependências externas
- **SEO Friendly**: Estrutura HTML semântica
- **Cross-browser**: Compatível com navegadores modernos
- **Mobile First**: Design responsivo desde o início

## 📱 Compatibilidade

- ✅ Chrome 80+
- ✅ Firefox 75+
- ✅ Safari 13+
- ✅ Edge 80+
- ✅ Dispositivos móveis (iOS/Android)

## 🤝 Contribuições

Este é um projeto de demonstração. Para melhorias:

1. Fork o projeto
2. Crie uma branch para sua feature
3. Commit suas mudanças
4. Push para a branch
5. Abra um Pull Request

## 📄 Licença

Este projeto é uma demonstração educacional. O site original invertexto.com pertence aos seus respectivos proprietários.

## 🎯 Próximos Passos

- [ ] Implementar mais ferramentas de texto
- [ ] Adicionar integração real com APIs de IA
- [ ] Implementar sistema de favoritos
- [ ] Adicionar modo escuro
- [ ] Criar PWA (Progressive Web App)

---

**Desenvolvido com ❤️ como demonstração de habilidades em desenvolvimento web frontend**
