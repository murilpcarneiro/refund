// Seleciona os elementos do formulário
const amount = document.getElementById('amount')
const category = document.getElementById('category')
const expense = document.getElementById('expense')

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
