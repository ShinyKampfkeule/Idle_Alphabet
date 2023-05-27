export default interface CostsUpgradeInterface {
    Slot1: SlotInterface,
    Slot2: SlotInterface,
    Slot3: SlotInterface,
    Slot4: SlotInterface
}

interface SlotInterface {
    letter: string,
    costs: number
}