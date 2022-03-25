export default function formatInteger(number) {
  return Intl.NumberFormat('es-US').format(number)
}
