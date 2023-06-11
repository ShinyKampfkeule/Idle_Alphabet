import {LetterUpgradeInterface} from "../interfaces/letterButton";

export default function findLevelCap(level: number, letterUpgradeLevels: LetterUpgradeInterface) {
    const result = Object.keys(letterUpgradeLevels).find((cap) => {
        const capInteger = parseInt(cap)
        return level <= capInteger
    })

    if (result) {
        const capInteger = parseInt(result)
        return {
            cap: capInteger,
            upgradeData: letterUpgradeLevels[capInteger]
        }
    }
}