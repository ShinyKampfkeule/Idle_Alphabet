export default interface LetterButtonInterface {
    [key: string]: LetterInterface
}

interface LetterInterface {
    unlocked: boolean,
    bought: boolean,
    buyingCosts?: UpgradeCostsInterface
    amount: number,
    productionRate: number,
    productionRateLevel: number,
    productionRateInitialCosts: number,
    productionSpeed: number,
    productionSpeedLevel: number,
    productionSpeedInitialCosts: number,
    automatedProduction: boolean,
    automatedProductionCosts: UpgradeCostsInterface,
    productionRateUpgrades: LetterUpgradeInterface
    productionSpeedUpgrades: LetterUpgradeInterface
}

export interface LetterUpgradeInterface {
    [key: number]: {
        costsGrowthRate: number,
        functionalityGrowthRate: number,
        upgradeSlots?: UpgradeSlotsInterface
    }
}

export interface UpgradeCostsInterface {
    [key: string]: number
}

export interface LetterButtonLetterInterface {
    letter: string
}

export interface UpgradeSlotsInterface {
    [key: string]: string
}