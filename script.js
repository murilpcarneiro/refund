// Seleciona os elementos do formulário
const form = document.querySelector('form')
const amount = document.getElementById('amount')
const expense = document.getElementById('expense')
const category = document.getElementById('category')

// Seleciona os elementos da lista
const expenseList = document.querySelector('ul')
const expensesQuantity = document.querySelector('aside header p span')
const expensesTotal = document.querySelector('aside header h2')

// Captura o evento de input para formatar o valor
amount.oninput = () => {
  // Obtém o valor atual do input e remove caracteres não numéricos
  let value = amount.value.replace(/\D/g, '')

  // Transforma o valor em centavos (exemplo 150/100 = 1.50 que é equivalente a R$1,50)
  value = value / 100

  // Atualiza o valor do input com o valor formatado
  amount.value = formatCurrency(value)
}

function formatCurrency(value) {
  // Formata o valor como moeda brasileira (R$)
  return Number(value).toLocaleString('pt-BR', {
    style: 'currency',
    currency: 'BRL',
  })
}

// Captura o evento de submit do formulário para obter os valores
form.onsubmit = (e) => {
  // Previne o comportamento padrão de recarregamento da página
  e.preventDefault()

  // Cria um objeto com os dados da despesa
  const newExpense = {
    id: new Date().getTime(),
    expense: expense.value,
    category_id: category.value,
    category_name: category.options[category.selectedIndex].text,
    amount: amount.value,
    created_at: new Date().toISOString(),
  }

  // Chama a função para adicionar a despesa
  addExpense(newExpense)
  // Chama a função para atualizar os totais
  updateTotals()
}

// Adiciona um novo item na lista
function addExpense(expense) {
  try {
    // Cria o elemento pra adicionar na lista
    const expenseItem = document.createElement('li')
    expenseItem.classList.add('expense')

    // Cria o ícone da categoria
    const expenseIcon = document.createElement('img')
    expenseIcon.setAttribute('src', `img/${expense.category_id}.svg`)
    expenseIcon.setAttribute('alt', expense.category_name)

    // Cria o info das despesas
    const expenseInfo = document.createElement('div')
    expenseInfo.classList.add('expense-info')

    // Cria o nome da despesa
    const expenseName = document.createElement('strong')
    expenseName.textContent = expense.expense

    // Cria a categoria da despesa
    const expenseCategory = document.createElement('span')
    expenseCategory.textContent = expense.category_name

    // Adiciona o nome e a categoria nas informações da despesa
    expenseInfo.append(expenseName, expenseCategory)

    // Cria o valor da despesa
    const expenseAmount = document.createElement('span')
    expenseAmount.classList.add('expense-amount')
    expenseAmount.innerHTML = `<small>R$ </small>${expense.amount
      .toUpperCase()
      .replace('R$', '')}`

    // Cria o icone de remover despesa
    const removeIcon = document.createElement('img')
    removeIcon.classList.add('remove-icon')
    removeIcon.setAttribute('src', 'img/remove.svg')
    removeIcon.setAttribute('alt', 'remover')

    // Adiciona as informações no item
    expenseItem.append(expenseIcon, expenseInfo, expenseAmount, removeIcon)

    // Adiciona o item na lista
    expenseList.append(expenseItem)
  } catch (error) {
    alert('Erro ao adicionar despesa. Tente novamente.')
    console.error('Erro ao adicionar despesa:', error)
  }
}

// Atualiza os totais
function updateTotals() {
  try {
    // Recupera todos os itens (li) da lista (ul)
    const items = expenseList.children

    // Atualiza a quantidade de despesas da lista
    expensesQuantity.textContent = `${items.length} ${
      items.length > 1 ? 'despesas' : 'despesa'
    }`

    let total = 0

    for (let item = 0; item < items.length; item++) {
      // Seleciona o valor da despesa
      const itemAmount = items[item].querySelector('.expense-amount')

      // Remove caracteres não numéricos e converte a vírgula para ponto
      let value = itemAmount.textContent
        .replace(/[^\d,]/g, '')
        .replace(',', '.')

      // coverte o valor pra float
      value = parseFloat(value)

      // Verificar se é um número válido antes de adicionar ao total
      if (isNaN(value)) {
        return alert('Valor inválido encontrado. Tente novamente.')
      }
      // incrementa o total
      total += Number(value)
    }
    // Atualiza o total formatado
    expensesTotal.innerHTML = `<small>R$ </small>${formatCurrency(
      total
    ).replace('R$', '')}`
  } catch (error) {
    alert('Erro ao atualizar totais. Tente novamente.')
    console.error('Erro ao atualizar totais:', error)
  }
}

// Evento que captura o clique nos itens da lista
expenseList.addEventListener('click', (e) => {
  // Verifica se o clique foi no ícone de remover
  if (e.target.classList.contains('remove-icon')) {
    // Obtem a li do pai do elemento clicado
    const item = e.target.closest('.expense')

    // Remove o item da lista
    item.remove()
    // Atualiza os totais
    updateTotals()
  }
})
