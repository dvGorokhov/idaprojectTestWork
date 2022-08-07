export function formatCurrency(v) {
  return new Intl.NumberFormat('ru-Ru', {
    style: 'currency',
    currency: 'RUB',
    minimumFractionDigits: 0
  }).format(v || 0)
}