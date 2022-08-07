export const formatNumber = (event) => {
  if (!/\d/.test(event.key)) return event.preventDefault()
}
