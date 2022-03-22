export default function formatInteger(number) {
  return Intl.NumberFormat('es-PE').format(number)
}
