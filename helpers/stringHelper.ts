export default function isCommaSeparatedWords(str: string): boolean {
  return /^[\w,-]+$/.test(str);
}
