export default function changeNumberDisplay(amount: number, suffixes: string[]) {
    const numString = amount.toString()
    const i = Math.floor((numString.length - 1) / 3)
    return parseFloat((amount / Math.pow(1000, i)).toFixed(1)) + suffixes[i]
}