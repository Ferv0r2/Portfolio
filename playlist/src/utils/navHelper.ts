export const smoothScrollTo = (elementId: string) => {
  document.getElementById(elementId)?.scrollIntoView({ behavior: 'smooth' })
}
