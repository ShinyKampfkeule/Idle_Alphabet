export default interface CostsUpgradeInterface {
    [key: string]: SlotInterface
}

interface SlotInterface {
    letter: string,
    costs: number
}