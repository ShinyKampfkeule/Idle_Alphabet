export default function formatNumber(toFormat: number) {
    return parseFloat(toFormat.toFixed(2)).toLocaleString()
}