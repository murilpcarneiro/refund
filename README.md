# 💳 Refund - Sistema de Solicitação de Reembolso

> Uma aplicação web elegante e responsiva para gerenciar solicitações de reembolso de despesas empresariais.

![HTML5](https://img.shields.io/badge/HTML5-E34F26?style=for-the-badge&logo=html5&logoColor=white)
![CSS3](https://img.shields.io/badge/CSS3-1572B6?style=for-the-badge&logo=css3&logoColor=white)
![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black)

---

## ✨ Sobre o Projeto

O **Refund** é uma aplicação intuitiva e moderna desenvolvida com **HTML, CSS e JavaScript vanilla** que permite aos usuários registrar e gerenciar solicitações de reembolso de despesas.

Com uma interface limpa e responsiva, o projeto demonstra conceitos fundamentais de desenvolvimento web como manipulação do DOM, validação de formulários e formatação de valores monetários em Real brasileiro.

---

## 🚀 Funcionalidades

✅ **Adicionar Despesas** - Registre novas despesas informando nome, categoria e valor
✅ **Categorizar Gastos** - Escolha entre 5 categorias diferentes:

- 🍔 Alimentação
- 🏨 Hospedagem
- 🔧 Serviços
- 🚗 Transporte
- 📦 Outros

✅ **Formatação Automática** - Valores são formatados automaticamente em Real brasileiro (R$)
✅ **Controle Total** - Remova despesas com um clique
✅ **Resumo Financeiro** - Visualize o total e quantidade de despesas em tempo real
✅ **Design Responsivo** - Funciona perfeitamente em desktop, tablet e mobile
✅ **UI/UX Moderna** - Interface limpa com ícones intuitivos

---

## 📁 Estrutura do Projeto

```
refund/
├── index.html          # Estrutura HTML da aplicação
├── script.js           # Lógica JavaScript (manipulação do DOM)
├── styles.css          # Estilos CSS (layout e responsividade)
├── img/                # Pasta com ícones e logos
│   ├── logo.svg
│   ├── food.svg
│   ├── accommodation.svg
│   ├── services.svg
│   ├── transport.svg
│   ├── others.svg
│   ├── remove.svg
│   └── chevron-down.svg
└── README.md          # Este arquivo
```

---

## 🎯 Como Usar

### 1️⃣ Preencha o Formulário

- Digite o **nome da despesa**
- Selecione a **categoria**
- Informe o **valor** em reais

### 2️⃣ Adicione a Despesa

- Clique no botão **"Adicionar despesa"**
- A despesa aparecerá na lista à direita

### 3️⃣ Gerencie suas Despesas

- **Visualize** o total de despesas e quantidade
- **Remova** despesas clicando no ícone de lixeira
- Os valores são **atualizados automaticamente**

---

## 💡 Recursos Técnicos Destacados

### 🎨 Design

- **Paleta de cores**: Verde e branco (profissional e moderno)
- **Tipografia**: Open Sans (Clean e legível)
- **Ícones**: SVG (leve e escalável)
- **Responsividade**: Flexbox e Grid CSS

### 🔧 Funcionalidades JavaScript

- **Manipulação do DOM**: Criação dinâmica de elementos
- **Formatação de Moeda**: Localização para pt-BR
- **Validação de Formulário**: HTML5 e JavaScript
- **Event Listeners**: Input, submit e click events
- **Timestamps**: ISO 8601 para rastreamento

### 📱 Interface Responsiva

- Layout flexível que se adapta a qualquer tamanho de tela
- Experiência otimizada para mobile first
- Scrollbar customizada

---

## 🛠️ Tecnologias Utilizadas

| Tecnologia   | Versão    | Uso                          |
| ------------ | --------- | ---------------------------- |
| HTML5        | 5         | Estrutura semântica          |
| CSS3         | 3         | Estilização e responsividade |
| JavaScript   | ES6+      | Lógica e interatividade      |
| Google Fonts | Open Sans | Tipografia                   |

---

## 📝 Exemplos de Código

### Formatação de Moeda

```javascript
function formatCurrency(value) {
  return Number(value).toLocaleString('pt-BR', {
    style: 'currency',
    currency: 'BRL',
  })
}
```

### Adição de Despesa

```javascript
const newExpense = {
  id: new Date().getTime(),
  expense: expense.value,
  category_id: category.value,
  category_name: category.options[category.selectedIndex].text,
  amount: amount.value,
  created_at: new Date().toISOString(),
}

addExpense(newExpense)
updateTotals()
```

---

## 📋 Requisitos

- Um navegador moderno (Chrome, Firefox, Safari, Edge)
- Nenhuma instalação ou dependência externa necessária!

---

## 🚀 Como Executar

1. **Clone ou baixe o projeto**

   ```bash
   git clone https://github.com/seu-usuario/refund.git
   cd refund
   ```

2. **Abra o arquivo HTML**

   ```bash
   # Opção 1: Abrir diretamente no navegador
   # Duplo clique em index.html

   # Opção 2: Usar um servidor local (recomendado)
   python -m http.server 8000
   # ou com Node.js
   npx serve
   ```

3. **Acesse no seu navegador**
   ```
   http://localhost:8000
   ```

---

## 🎓 Conceitos de Aprendizado

Este projeto é excelente para aprender:

- ✅ DOM Manipulation e criação dinâmica de elementos
- ✅ Event Listeners e tratamento de eventos
- ✅ Formatação e localização (toLocaleString)
- ✅ Validação de formulários HTML5
- ✅ CSS Flexbox para layouts responsivos
- ✅ Nomenclatura BEM e organização de código
- ✅ Boas práticas de UX/UI

---

## 📸 Visualização

A aplicação é dividida em duas seções principais:

**Lado Esquerdo (Formulário)**

- Campo para nome da despesa
- Seletor de categoria
- Campo de valor com formatação automática
- Botão para adicionar despesa

**Lado Direito (Painel de Resumo)**

- Cabeçalho com total de despesas
- Quantidade de itens
- Lista dinâmica de despesas
- Opção de remover cada item

---

## 🤝 Contribuições

Contribuições são bem-vindas! Se você encontrar bugs ou tiver sugestões de melhorias:

1. Faça um Fork do projeto
2. Crie uma branch para sua feature (`git checkout -b feature/AmazingFeature`)
3. Commit suas mudanças (`git commit -m 'Add some AmazingFeature'`)
4. Push para a branch (`git push origin feature/AmazingFeature`)
5. Abra um Pull Request

---

## 📄 Licença

Este projeto está sob a licença **MIT**. Veja o arquivo [LICENSE](LICENSE) para mais detalhes.

---

## 👨‍💻 Autor

Desenvolvido como projeto de aprendizado da **Rocketseat** - Full Stack JavaScript.

---

## 📞 Suporte

Tiver dúvidas ou sugestões? Abra uma [Issue](https://github.com/seu-usuario/refund/issues) no repositório!

---

## 🎉 Agradecimentos

- **Rocketseat** pela excelente metodologia de ensino
- **Google Fonts** pelos recursos tipográficos
- **Comunidade Open Source** pela inspiração

---

<div align="center">

**⭐ Se este projeto foi útil, considere deixar uma estrela! ⭐**

Desenvolvido com ❤️ por um desenvolvedor apaixonado por código.

</div>
