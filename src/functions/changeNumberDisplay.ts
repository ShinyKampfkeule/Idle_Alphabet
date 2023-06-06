export default function changeNumberDisplay(amount: number, suffixes: string[]) {
    const numString = amount.toString()
    let sub = 1
    if (numString.includes('.')) {
        sub = 3
    }
    let i = Math.floor((numString.length - sub) / 3)
    let value = parseFloat((amount / Math.pow(1000, i)).toFixed(1))
    if (value >= 1000) {
        value = 1
        i += 1
    }
    return value + suffixes[i]
}