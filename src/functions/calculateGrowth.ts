export function calculateIncreasingGrowth(growthRate: number, initRate: number, level: number) {
    return Number((initRate * Math.pow(growthRate, level)).toFixed(2))
}

export function calculateDecreasingGrowth(growthRate: number, initRate: number, level: number) {
    return Number((initRate / Math.pow(growthRate, level)).toFixed(2))
}