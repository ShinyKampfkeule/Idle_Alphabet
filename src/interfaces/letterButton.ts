export default interface LetterButtonInterface {
    [key: string]: LetterInterface
}

interface LetterInterface {
    unlocked: boolean,
    bought: boolean,
    buyingCosts?: UpgradeCostsInterface
    amount: number,
    productionRate: number,
    productionInitRate: number,
    productionRateLevel: number,
    productionRateInitialCosts: UpgradeSlotsInitialCostsInterface,
    productionSpeed: number,
    productionInitSpeed: number,
    productionSpeedLevel: number,
    productionSpeedInitialCosts: UpgradeSlotsInitialCostsInterface,
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

export interface UpgradeSlotsInitialCostsInterface {
    [key: string]: number
}