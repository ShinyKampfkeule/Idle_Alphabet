export default function changeNumberDisplay(amount: number, suffixes: string[]) {
    const numString = amount.toString()
    let sub = 1
    if (numString.includes('.')) {
        sub = 3
    }
    const i = Math.floor((numString.length - sub) / 3)
    return parseFloat((amount / Math.pow(1000, i)).toFixed(1)) + suffixes[i]
}