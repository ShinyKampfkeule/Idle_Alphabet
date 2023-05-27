export default interface LetterButtonInterface {
    [key: string]: LetterInterface
}

interface LetterInterface {
    unlocked: boolean,
    bought: boolean,
    buyingCosts?: UpgradeCostsInterface
    amount: number,
    production_rate: number,
    production_rate_level: number,
    production_speed: number,
    production_speed_level: number,
    automated_production: boolean,
    automated_production_costs: UpgradeCostsInterface,
    production_rate_upgrades: LetterUpgradeInterface
    production_speed_upgrades: LetterUpgradeInterface
}

export interface LetterUpgradeInterface {
    [key: number]: {
        costs: UpgradeCostsInterface
        newValue: number
    }
}

export interface UpgradeCostsInterface {
    [key: string]: number
}

export interface LetterButtonLetterInterface {
    letter: string
}