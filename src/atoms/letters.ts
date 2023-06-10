import {atom} from "jotai"
import LetterButtonInterface from "../interfaces/letterButton";

export const lettersAtom = atom<LetterButtonInterface>({
    'A': {
        unlocked: true,
        bought: false,
        amount: 0,
        productionRate: 1,
        productionInitRate: 1,
        productionRateLevel: 0,
        productionRateInitialCosts: {
            'slot1': 2,
            'slot2': 2,
            'slot3': 2,
            'slot4': 2
        },
        productionSpeed: 1,
        productionInitSpeed: 1,
        productionSpeedLevel: 0,
        productionSpeedInitialCosts: {
            'slot1': 5,
            'slot2': 5,
            'slot3': 5,
            'slot4': 5
        },
        automatedProduction: false,
        automatedProductionCosts: {
            'A': 100
        },
        productionRateUpgrades: {
            25: {
                costsGrowthRate: 1.1,
                functionalityGrowthRate: 1.2,
                upgradeSlots: {
                    "slot1": "A"
                }
            },
            50: {
                costsGrowthRate: 1.2,
                functionalityGrowthRate: 1.1,
                upgradeSlots: {
                    "slot1": "A"
                }
            },
            75: {
                costsGrowthRate: 1.225,
                functionalityGrowthRate: 1.1,
                upgradeSlots: {
                    "slot1": "A",
                    "slot2": "B"
                }
            },
            100: {
                costsGrowthRate: 1.25,
                functionalityGrowthRate: 1.075,
                upgradeSlots: {
                    "slot1": "A",
                    "slot2": "B"
                }
            },
            150: {
                costsGrowthRate: 1.275,
                functionalityGrowthRate: 1.06,
                upgradeSlots: {
                    "slot1": "A",
                    "slot2": "B",
                    "slot3": "C"
                }
            },
            200: {
                costsGrowthRate: 1.3,
                functionalityGrowthRate: 1.05,
                upgradeSlots: {
                    "slot1": "A",
                    "slot2": "B",
                    "slot3": "C",
                    "slot4": "D"
                }
            },
            250: {
                costsGrowthRate: 1.32,
                functionalityGrowthRate: 1.045,
                upgradeSlots: {
                    "slot1": "B",
                    "slot2": "C",
                    "slot3": "D",
                    "slot4": "E"
                }
            },
            300: {
                costsGrowthRate: 1.34,
                functionalityGrowthRate: 1.04,
                upgradeSlots: {
                    "slot1": "C",
                    "slot2": "D",
                    "slot3": "E",
                    "slot4": "F"
                }
            },
            350: {
                costsGrowthRate: 1.36,
                functionalityGrowthRate: 1.035,
            }
        },
        productionSpeedUpgrades: {
            10: {
                costsGrowthRate: 1.2,
                functionalityGrowthRate: 1.01,
                upgradeSlots: {
                    "slot1": "A"
                }
            },
            25: {
                costsGrowthRate: 1.25,
                functionalityGrowthRate: 1.005,
                upgradeSlots: {
                    "slot1": "A"
                }
            },
            35: {
                costsGrowthRate: 1.35,
                functionalityGrowthRate: 1.009,
                upgradeSlots: {
                    "slot1": "A",
                    "slot2": "B"
                }
            },
            50: {
                costsGrowthRate: 1.5,
                functionalityGrowthRate: 1.008,
                upgradeSlots: {
                    "slot1": "A",
                    "slot2": "B"
                }
            },
            65: {
                costsGrowthRate: 1.3,
                functionalityGrowthRate: 1.006,
                upgradeSlots: {
                    "slot1": "A",
                    "slot2": "B",
                    "slot3": "C"
                }
            },
            80: {
                costsGrowthRate: 1.17,
                functionalityGrowthRate: 1.006,
                upgradeSlots: {
                    "slot1": "A",
                    "slot2": "B",
                    "slot3": "C",
                    "slot4": "D"
                }
            },
            95: {
                costsGrowthRate: 1.12,
                functionalityGrowthRate: 1.004,
                upgradeSlots: {
                    "slot1": "B",
                    "slot2": "C",
                    "slot3": "D",
                    "slot4": "E"
                }
            },
            100: {
                costsGrowthRate: 1.07,
                functionalityGrowthRate: 1.004,
                upgradeSlots: {
                    "slot1": "C",
                    "slot2": "D",
                    "slot3": "E",
                    "slot4": "F"
                }
            }
        }
    },
    'B': {
        unlocked: false,
        bought: false,
        buyingCosts: {
            "A": 500
        },
        amount: 0,
        productionRate: 1,
        productionInitRate: 1,
        productionRateLevel: 0,
        productionRateInitialCosts: {
            'slot1': 2,
            'slot2': 2,
            'slot3': 2,
            'slot4': 2
        },
        productionSpeed: 1.25,
        productionInitSpeed: 1.25,
        productionSpeedLevel: 0,
        productionSpeedInitialCosts: {
            'slot1': 5,
            'slot2': 5,
            'slot3': 5,
            'slot4': 5
        },
        automatedProduction: false,
        automatedProductionCosts: {
            'B': 100
        },
        productionRateUpgrades: {
            25: {
                costsGrowthRate: 1.1,
                functionalityGrowthRate: 1.2,
                upgradeSlots: {
                    "slot1": "B"
                }
            },
            50: {
                costsGrowthRate: 1.2,
                functionalityGrowthRate: 1.1,
                upgradeSlots: {
                    "slot1": "B"
                }
            },
            75: {
                costsGrowthRate: 1.225,
                functionalityGrowthRate: 1.1,
                upgradeSlots: {
                    "slot1": "B",
                    "slot2": "C"
                }
            },
            100: {
                costsGrowthRate: 1.25,
                functionalityGrowthRate: 1.075,
                upgradeSlots: {
                    "slot1": "B",
                    "slot2": "C"
                }
            },
            150: {
                costsGrowthRate: 1.275,
                functionalityGrowthRate: 1.06,
                upgradeSlots: {
                    "slot1": "A",
                    "slot2": "B",
                    "slot3": "C"
                }
            },
            200: {
                costsGrowthRate: 1.3,
                functionalityGrowthRate: 1.05,
                upgradeSlots: {
                    "slot1": "A",
                    "slot2": "B",
                    "slot3": "C",
                    "slot4": "D"
                }
            },
            250: {
                costsGrowthRate: 1.32,
                functionalityGrowthRate: 1.045,
                upgradeSlots: {
                    "slot1": "B",
                    "slot2": "C",
                    "slot3": "D",
                    "slot4": "E"
                }
            },
            300: {
                costsGrowthRate: 1.34,
                functionalityGrowthRate: 1.04,
                upgradeSlots: {
                    "slot1": "C",
                    "slot2": "D",
                    "slot3": "E",
                    "slot4": "F"
                }
            },
            350: {
                costsGrowthRate: 1.36,
                functionalityGrowthRate: 1.035,
            }
        },
        productionSpeedUpgrades: {
            10: {
                costsGrowthRate: 1.2,
                functionalityGrowthRate: 1.01,
                upgradeSlots: {
                    "slot1": "B"
                }
            },
            25: {
                costsGrowthRate: 1.25,
                functionalityGrowthRate: 1.005,
                upgradeSlots: {
                    "slot1": "B"
                }
            },
            35: {
                costsGrowthRate: 1.35,
                functionalityGrowthRate: 1.009,
                upgradeSlots: {
                    "slot1": "B",
                    "slot2": "C"
                }
            },
            50: {
                costsGrowthRate: 1.5,
                functionalityGrowthRate: 1.008,
                upgradeSlots: {
                    "slot1": "B",
                    "slot2": "C"
                }
            },
            65: {
                costsGrowthRate: 1.3,
                functionalityGrowthRate: 1.006,
                upgradeSlots: {
                    "slot1": "A",
                    "slot2": "B",
                    "slot3": "C"
                }
            },
            80: {
                costsGrowthRate: 1.17,
                functionalityGrowthRate: 1.006,
                upgradeSlots: {
                    "slot1": "A",
                    "slot2": "B",
                    "slot3": "C",
                    "slot4": "D"
                }
            },
            95: {
                costsGrowthRate: 1.12,
                functionalityGrowthRate: 1.004,
                upgradeSlots: {
                    "slot1": "B",
                    "slot2": "C",
                    "slot3": "D",
                    "slot4": "E"
                }
            },
            100: {
                costsGrowthRate: 1.07,
                functionalityGrowthRate: 1.004,
                upgradeSlots: {
                    "slot1": "C",
                    "slot2": "D",
                    "slot3": "E",
                    "slot4": "F"
                }
            }
        }
    },
    'C': {
        unlocked: false,
        bought: false,
        buyingCosts: {
            "B": 500
        },
        amount: 0,
        productionRate: 1,
        productionInitRate: 1,
        productionRateLevel: 0,
        productionRateInitialCosts: {
            'slot1': 2,
            'slot2': 2,
            'slot3': 2,
            'slot4': 2
        },
        productionSpeed: 1.5,
        productionInitSpeed: 1.5,
        productionSpeedLevel: 0,
        productionSpeedInitialCosts: {
            'slot1': 5,
            'slot2': 5,
            'slot3': 5,
            'slot4': 5
        },
        automatedProduction: false,
        automatedProductionCosts: {
            'C': 100
        },
        productionRateUpgrades: {
            25: {
                costsGrowthRate: 1.1,
                functionalityGrowthRate: 1.2,
                upgradeSlots: {
                    "slot1": "C"
                }
            },
            50: {
                costsGrowthRate: 1.2,
                functionalityGrowthRate: 1.1,
                upgradeSlots: {
                    "slot1": "B",
                    "slot2": "C"
                }
            },
            75: {
                costsGrowthRate: 1.225,
                functionalityGrowthRate: 1.1,
                upgradeSlots: {
                    "slot1": "B",
                    "slot2": "C"
                }
            },
            100: {
                costsGrowthRate: 1.25,
                functionalityGrowthRate: 1.075,
                upgradeSlots: {
                    "slot1": "A",
                    "slot2": "B",
                    "slot3": "C"
                }
            },
            150: {
                costsGrowthRate: 1.275,
                functionalityGrowthRate: 1.06,
                upgradeSlots: {
                    "slot1": "A",
                    "slot2": "B",
                    "slot3": "C"
                }
            },
            200: {
                costsGrowthRate: 1.3,
                functionalityGrowthRate: 1.05,
                upgradeSlots: {
                    "slot1": "A",
                    "slot2": "B",
                    "slot3": "C",
                    "slot4": "D"
                }
            },
            250: {
                costsGrowthRate: 1.32,
                functionalityGrowthRate: 1.045,
                upgradeSlots: {
                    "slot1": "B",
                    "slot2": "C",
                    "slot3": "D",
                    "slot4": "E"
                }
            },
            300: {
                costsGrowthRate: 1.34,
                functionalityGrowthRate: 1.04,
                upgradeSlots: {
                    "slot1": "C",
                    "slot2": "D",
                    "slot3": "E",
                    "slot4": "F"
                }
            },
            350: {
                costsGrowthRate: 1.36,
                functionalityGrowthRate: 1.035,
            }
        },
        productionSpeedUpgrades: {
            10: {
                costsGrowthRate: 1.2,
                functionalityGrowthRate: 1.01,
                upgradeSlots: {
                    "slot1": "C"
                }
            },
            25: {
                costsGrowthRate: 1.25,
                functionalityGrowthRate: 1.005,
                upgradeSlots: {
                    "slot1": "B",
                    "slot2": "C"
                }
            },
            35: {
                costsGrowthRate: 1.35,
                functionalityGrowthRate: 1.009,
                upgradeSlots: {
                    "slot1": "B",
                    "slot2": "C"
                }
            },
            50: {
                costsGrowthRate: 1.5,
                functionalityGrowthRate: 1.008,
                upgradeSlots: {
                    "slot1": "A",
                    "slot2": "B",
                    "slot3": "C"
                }
            },
            65: {
                costsGrowthRate: 1.3,
                functionalityGrowthRate: 1.006,
                upgradeSlots: {
                    "slot1": "A",
                    "slot2": "B",
                    "slot3": "C"
                }
            },
            80: {
                costsGrowthRate: 1.17,
                functionalityGrowthRate: 1.006,
                upgradeSlots: {
                    "slot1": "A",
                    "slot2": "B",
                    "slot3": "C",
                    "slot4": "D"
                }
            },
            95: {
                costsGrowthRate: 1.12,
                functionalityGrowthRate: 1.004,
                upgradeSlots: {
                    "slot1": "B",
                    "slot2": "C",
                    "slot3": "D",
                    "slot4": "E"
                }
            },
            100: {
                costsGrowthRate: 1.07,
                functionalityGrowthRate: 1.004,
                upgradeSlots: {
                    "slot1": "C",
                    "slot2": "D",
                    "slot3": "E",
                    "slot4": "F"
                }
            }
        }
    },
    'D': {
        unlocked: false,
        bought: false,
        buyingCosts: {
            "C": 500
        },
        amount: 0,
        productionRate: 1,
        productionInitRate: 1,
        productionRateLevel: 0,
        productionRateInitialCosts: {
            'slot1': 2,
            'slot2': 2,
            'slot3': 2,
            'slot4': 2
        },
        productionSpeed: 2,
        productionInitSpeed: 2,
        productionSpeedLevel: 0,
        productionSpeedInitialCosts: {
            'slot1': 5,
            'slot2': 5,
            'slot3': 5,
            'slot4': 5
        },
        automatedProduction: false,
        automatedProductionCosts: {
            'D': 100
        },
        productionRateUpgrades: {
            25: {
                costsGrowthRate: 1.1,
                functionalityGrowthRate: 1.2,
                upgradeSlots: {
                    "slot1": "D"
                }
            },
            50: {
                costsGrowthRate: 1.2,
                functionalityGrowthRate: 1.1,
                upgradeSlots: {
                    "slot1": "C",
                    "slot2": "D"
                }
            },
            75: {
                costsGrowthRate: 1.225,
                functionalityGrowthRate: 1.1,
                upgradeSlots: {
                    "slot1": "B",
                    "slot2": "C",
                    "slot3": "D"
                }
            },
            100: {
                costsGrowthRate: 1.25,
                functionalityGrowthRate: 1.075,
                upgradeSlots: {
                    "slot1": "A",
                    "slot2": "B",
                    "slot3": "C",
                    "slot4": "D"
                }
            },
            150: {
                costsGrowthRate: 1.275,
                functionalityGrowthRate: 1.06,
                upgradeSlots: {
                    "slot1": "B",
                    "slot2": "C",
                    "slot3": "D",
                    "slot4": "E"
                }
            },
            200: {
                costsGrowthRate: 1.3,
                functionalityGrowthRate: 1.05,
                upgradeSlots: {
                    "slot1": "C",
                    "slot2": "D",
                    "slot3": "E",
                    "slot4": "F"
                }
            },
            250: {
                costsGrowthRate: 1.32,
                functionalityGrowthRate: 1.045,
                upgradeSlots: {
                    "slot1": "D",
                    "slot2": "E",
                    "slot3": "F",
                    "slot4": "G"
                }
            },
            300: {
                costsGrowthRate: 1.34,
                functionalityGrowthRate: 1.04,
                upgradeSlots: {
                    "slot1": "E",
                    "slot2": "F",
                    "slot3": "G",
                    "slot4": "H"
                }
            },
            350: {
                costsGrowthRate: 1.36,
                functionalityGrowthRate: 1.035,
            }
        },
        productionSpeedUpgrades: {
            10: {
                costsGrowthRate: 1.2,
                functionalityGrowthRate: 1.01,
                upgradeSlots: {
                    "slot1": "D"
                }
            },
            25: {
                costsGrowthRate: 1.25,
                functionalityGrowthRate: 1.005,
                upgradeSlots: {
                    "slot1": "C",
                    "slot2": "D"
                }
            },
            35: {
                costsGrowthRate: 1.35,
                functionalityGrowthRate: 1.009,
                upgradeSlots: {
                    "slot1": "B",
                    "slot2": "C",
                    "slot3": "D"
                }
            },
            50: {
                costsGrowthRate: 1.5,
                functionalityGrowthRate: 1.008,
                upgradeSlots: {
                    "slot1": "A",
                    "slot2": "B",
                    "slot3": "C",
                    "slot4": "D"
                }
            },
            65: {
                costsGrowthRate: 1.3,
                functionalityGrowthRate: 1.006,
                upgradeSlots: {
                    "slot1": "B",
                    "slot2": "C",
                    "slot3": "D",
                    "slot4": "E"
                }
            },
            80: {
                costsGrowthRate: 1.17,
                functionalityGrowthRate: 1.006,
                upgradeSlots: {
                    "slot1": "C",
                    "slot2": "D",
                    "slot3": "E",
                    "slot4": "F"
                }
            },
            95: {
                costsGrowthRate: 1.12,
                functionalityGrowthRate: 1.004,
                upgradeSlots: {
                    "slot1": "D",
                    "slot2": "E",
                    "slot3": "F",
                    "slot4": "G"
                }
            },
            100: {
                costsGrowthRate: 1.07,
                functionalityGrowthRate: 1.004,
                upgradeSlots: {
                    "slot1": "E",
                    "slot2": "F",
                    "slot3": "G",
                    "slot4": "H"
                }
            }
        }
    },
    'E': {
        unlocked: false,
        bought: false,
        buyingCosts: {
            "D": 500
        },
        amount: 0,
        productionRate: 1,
        productionInitRate: 1,
        productionRateLevel: 0,
        productionRateInitialCosts: {
            'slot1': 2,
            'slot2': 2,
            'slot3': 2,
            'slot4': 2
        },
        productionSpeed: 2.5,
        productionInitSpeed: 2.5,
        productionSpeedLevel: 0,
        productionSpeedInitialCosts: {
            'slot1': 5,
            'slot2': 5,
            'slot3': 5,
            'slot4': 5
        },
        automatedProduction: false,
        automatedProductionCosts: {
            'E': 500
        },
        productionRateUpgrades: {
            25: {
                costsGrowthRate: 1.1,
                functionalityGrowthRate: 1.2,
                upgradeSlots: {
                    "slot1": "E"
                }
            },
            50: {
                costsGrowthRate: 1.2,
                functionalityGrowthRate: 1.1,
                upgradeSlots: {
                    "slot1": "D",
                    "slot2": "E"
                }
            },
            75: {
                costsGrowthRate: 1.225,
                functionalityGrowthRate: 1.1,
                upgradeSlots: {
                    "slot1": "C",
                    "slot2": "D",
                    "slot3": "E"
                }
            },
            100: {
                costsGrowthRate: 1.25,
                functionalityGrowthRate: 1.075,
                upgradeSlots: {
                    "slot1": "B",
                    "slot2": "C",
                    "slot3": "D",
                    "slot4": "E"
                }
            },
            150: {
                costsGrowthRate: 1.275,
                functionalityGrowthRate: 1.06,
                upgradeSlots: {
                    "slot1": "C",
                    "slot2": "D",
                    "slot3": "E",
                    "slot4": "F"
                }
            },
            200: {
                costsGrowthRate: 1.3,
                functionalityGrowthRate: 1.05,
                upgradeSlots: {
                    "slot1": "D",
                    "slot2": "E",
                    "slot3": "F",
                    "slot4": "G"
                }
            },
            250: {
                costsGrowthRate: 1.32,
                functionalityGrowthRate: 1.045,
                upgradeSlots: {
                    "slot1": "E",
                    "slot2": "F",
                    "slot3": "G",
                    "slot4": "H"
                }
            },
            300: {
                costsGrowthRate: 1.34,
                functionalityGrowthRate: 1.04,
                upgradeSlots: {
                    "slot1": "F",
                    "slot2": "G",
                    "slot3": "H",
                    "slot4": "I"
                }
            },
            350: {
                costsGrowthRate: 1.36,
                functionalityGrowthRate: 1.035,
            }
        },
        productionSpeedUpgrades: {
            10: {
                costsGrowthRate: 1.2,
                functionalityGrowthRate: 1.01,
                upgradeSlots: {
                    "slot1": "E"
                }
            },
            25: {
                costsGrowthRate: 1.25,
                functionalityGrowthRate: 1.005,
                upgradeSlots: {
                    "slot1": "D",
                    "slot2": "E"
                }
            },
            35: {
                costsGrowthRate: 1.35,
                functionalityGrowthRate: 1.009,
                upgradeSlots: {
                    "slot1": "C",
                    "slot2": "D",
                    "slot3": "E"
                }
            },
            50: {
                costsGrowthRate: 1.5,
                functionalityGrowthRate: 1.008,
                upgradeSlots: {
                    "slot1": "B",
                    "slot2": "C",
                    "slot3": "D",
                    "slot4": "E"
                }
            },
            65: {
                costsGrowthRate: 1.3,
                functionalityGrowthRate: 1.006,
                upgradeSlots: {
                    "slot1": "C",
                    "slot2": "D",
                    "slot3": "E",
                    "slot4": "F"
                }
            },
            80: {
                costsGrowthRate: 1.17,
                functionalityGrowthRate: 1.006,
                upgradeSlots: {
                    "slot1": "D",
                    "slot2": "E",
                    "slot3": "F",
                    "slot4": "G"
                }
            },
            95: {
                costsGrowthRate: 1.12,
                functionalityGrowthRate: 1.004,
                upgradeSlots: {
                    "slot1": "E",
                    "slot2": "F",
                    "slot3": "G",
                    "slot4": "H"
                }
            },
            100: {
                costsGrowthRate: 1.07,
                functionalityGrowthRate: 1.004,
                upgradeSlots: {
                    "slot1": "F",
                    "slot2": "G",
                    "slot3": "H",
                    "slot4": "I"
                }
            }
        }
    },
    'F': {
        unlocked: false,
        bought: false,
        buyingCosts: {
            "E": 500
        },
        amount: 0,
        productionRate: 1,
        productionInitRate: 1,
        productionRateLevel: 0,
        productionRateInitialCosts: {
            'slot1': 2,
            'slot2': 2,
            'slot3': 2,
            'slot4': 2
        },
        productionSpeed: 3,
        productionInitSpeed: 3,
        productionSpeedLevel: 0,
        productionSpeedInitialCosts: {
            'slot1': 5,
            'slot2': 5,
            'slot3': 5,
            'slot4': 5
        },
        automatedProduction: false,
        automatedProductionCosts: {
            'F': 500
        },
        productionRateUpgrades: {
            25: {
                costsGrowthRate: 1.1,
                functionalityGrowthRate: 1.2,
                upgradeSlots: {
                    "slot1": "F"
                }
            },
            50: {
                costsGrowthRate: 1.2,
                functionalityGrowthRate: 1.1,
                upgradeSlots: {
                    "slot1": "E",
                    "slot2": "F"
                }
            },
            75: {
                costsGrowthRate: 1.225,
                functionalityGrowthRate: 1.1,
                upgradeSlots: {
                    "slot1": "D",
                    "slot2": "E",
                    "slot3": "F"
                }
            },
            100: {
                costsGrowthRate: 1.25,
                functionalityGrowthRate: 1.075,
                upgradeSlots: {
                    "slot1": "C",
                    "slot2": "D",
                    "slot3": "E",
                    "slot4": "F"
                }
            },
            150: {
                costsGrowthRate: 1.275,
                functionalityGrowthRate: 1.06,
                upgradeSlots: {
                    "slot1": "D",
                    "slot2": "E",
                    "slot3": "F",
                    "slot4": "G"
                }
            },
            200: {
                costsGrowthRate: 1.3,
                functionalityGrowthRate: 1.05,
                upgradeSlots: {
                    "slot1": "E",
                    "slot2": "F",
                    "slot3": "G",
                    "slot4": "H"
                }
            },
            250: {
                costsGrowthRate: 1.32,
                functionalityGrowthRate: 1.045,
                upgradeSlots: {
                    "slot1": "F",
                    "slot2": "G",
                    "slot3": "H",
                    "slot4": "I"
                }
            },
            300: {
                costsGrowthRate: 1.34,
                functionalityGrowthRate: 1.04,
                upgradeSlots: {
                    "slot1": "G",
                    "slot2": "H",
                    "slot3": "I",
                    "slot4": "J"
                }
            },
            350: {
                costsGrowthRate: 1.36,
                functionalityGrowthRate: 1.035
            }
        },
        productionSpeedUpgrades: {
            10: {
                costsGrowthRate: 1.2,
                functionalityGrowthRate: 1.01,
                upgradeSlots: {
                    "slot1": "F"
                }
            },
            25: {
                costsGrowthRate: 1.25,
                functionalityGrowthRate: 1.005,
                upgradeSlots: {
                    "slot1": "E",
                    "slot2": "F"
                }
            },
            35: {
                costsGrowthRate: 1.35,
                functionalityGrowthRate: 1.009,
                upgradeSlots: {
                    "slot1": "D",
                    "slot2": "E",
                    "slot3": "F"
                }
            },
            50: {
                costsGrowthRate: 1.5,
                functionalityGrowthRate: 1.008,
                upgradeSlots: {
                    "slot1": "C",
                    "slot2": "D",
                    "slot3": "E",
                    "slot4": "F"
                }
            },
            65: {
                costsGrowthRate: 1.3,
                functionalityGrowthRate: 1.006,
                upgradeSlots: {
                    "slot1": "D",
                    "slot2": "E",
                    "slot3": "F",
                    "slot4": "G"
                }
            },
            80: {
                costsGrowthRate: 1.17,
                functionalityGrowthRate: 1.006,
                upgradeSlots: {
                    "slot1": "E",
                    "slot2": "F",
                    "slot3": "G",
                    "slot4": "H"
                }
            },
            95: {
                costsGrowthRate: 1.12,
                functionalityGrowthRate: 1.004,
                upgradeSlots: {
                    "slot1": "F",
                    "slot2": "G",
                    "slot3": "H",
                    "slot4": "I"
                }
            },
            100: {
                costsGrowthRate: 1.07,
                functionalityGrowthRate: 1.004,
                upgradeSlots: {
                    "slot1": "G",
                    "slot2": "H",
                    "slot3": "I",
                    "slot4": "J"
                }
            }
        }
    },
    'G': {
        unlocked: false,
        bought: false,
        buyingCosts: {
            "F": 500
        },
        amount: 0,
        productionRate: 1,
        productionInitRate: 1,
        productionRateLevel: 0,
        productionRateInitialCosts: {
            'slot1': 2,
            'slot2': 2,
            'slot3': 2,
            'slot4': 2
        },
        productionSpeed: 4,
        productionInitSpeed: 4,
        productionSpeedLevel: 0,
        productionSpeedInitialCosts: {
            'slot1': 5,
            'slot2': 5,
            'slot3': 5,
            'slot4': 5
        },
        automatedProduction: false,
        automatedProductionCosts: {
            'G': 500
        },
        productionRateUpgrades: {
            25: {
                costsGrowthRate: 1.1,
                functionalityGrowthRate: 1.2,
                upgradeSlots: {
                    "slot1": "G"
                }
            },
            50: {
                costsGrowthRate: 1.2,
                functionalityGrowthRate: 1.1,
                upgradeSlots: {
                    "slot1": "F",
                    "slot2": "G"
                }
            },
            75: {
                costsGrowthRate: 1.225,
                functionalityGrowthRate: 1.1,
                upgradeSlots: {
                    "slot1": "E",
                    "slot2": "F",
                    "slot3": "G"
                }
            },
            100: {
                costsGrowthRate: 1.25,
                functionalityGrowthRate: 1.075,
                upgradeSlots: {
                    "slot1": "D",
                    "slot2": "E",
                    "slot3": "F",
                    "slot4": "G"
                }
            },
            150: {
                costsGrowthRate: 1.275,
                functionalityGrowthRate: 1.06,
                upgradeSlots: {
                    "slot1": "E",
                    "slot2": "F",
                    "slot3": "G",
                    "slot4": "H"
                }
            },
            200: {
                costsGrowthRate: 1.3,
                functionalityGrowthRate: 1.05,
                upgradeSlots: {
                    "slot1": "F",
                    "slot2": "G",
                    "slot3": "H",
                    "slot4": "I"
                }
            },
            250: {
                costsGrowthRate: 1.32,
                functionalityGrowthRate: 1.045,
                upgradeSlots: {
                    "slot1": "G",
                    "slot2": "H",
                    "slot3": "I",
                    "slot4": "J"
                }
            },
            300: {
                costsGrowthRate: 1.34,
                functionalityGrowthRate: 1.04,
                upgradeSlots: {
                    "slot1": "H",
                    "slot2": "I",
                    "slot3": "J",
                    "slot4": "K"
                }
            },
            350: {
                costsGrowthRate: 1.36,
                functionalityGrowthRate: 1.035
            }
        },
        productionSpeedUpgrades: {
            10: {
                costsGrowthRate: 1.2,
                functionalityGrowthRate: 1.01,
                upgradeSlots: {
                    "slot1": "G"
                }
            },
            25: {
                costsGrowthRate: 1.25,
                functionalityGrowthRate: 1.005,
                upgradeSlots: {
                    "slot1": "F",
                    "slot2": "G"
                }
            },
            35: {
                costsGrowthRate: 1.35,
                functionalityGrowthRate: 1.009,
                upgradeSlots: {
                    "slot1": "E",
                    "slot2": "F",
                    "slot3": "G"
                }
            },
            50: {
                costsGrowthRate: 1.5,
                functionalityGrowthRate: 1.008,
                upgradeSlots: {
                    "slot1": "D",
                    "slot2": "E",
                    "slot3": "F",
                    "slot4": "G"
                }
            },
            65: {
                costsGrowthRate: 1.3,
                functionalityGrowthRate: 1.006,
                upgradeSlots: {
                    "slot1": "E",
                    "slot2": "F",
                    "slot3": "G",
                    "slot4": "H"
                }
            },
            80: {
                costsGrowthRate: 1.17,
                functionalityGrowthRate: 1.006,
                upgradeSlots: {
                    "slot1": "F",
                    "slot2": "G",
                    "slot3": "H",
                    "slot4": "I"
                }
            },
            95: {
                costsGrowthRate: 1.12,
                functionalityGrowthRate: 1.004,
                upgradeSlots: {
                    "slot1": "G",
                    "slot2": "H",
                    "slot3": "I",
                    "slot4": "J"
                }
            },
            100: {
                costsGrowthRate: 1.07,
                functionalityGrowthRate: 1.004,
                upgradeSlots: {
                    "slot1": "H",
                    "slot2": "I",
                    "slot3": "J",
                    "slot4": "K"
                }
            }
        }
    },
    'H': {
        unlocked: false,
        bought: false,
        buyingCosts: {
            "G": 500
        },
        amount: 0,
        productionRate: 1,
        productionInitRate: 1,
        productionRateLevel: 0,
        productionRateInitialCosts: {
            'slot1': 2,
            'slot2': 2,
            'slot3': 2,
            'slot4': 2
        },
        productionSpeed: 5,
        productionInitSpeed: 5,
        productionSpeedLevel: 0,
        productionSpeedInitialCosts: {
            'slot1': 5,
            'slot2': 5,
            'slot3': 5,
            'slot4': 5
        },
        automatedProduction: false,
        automatedProductionCosts: {
            'H': 500
        },
        productionRateUpgrades: {
            25: {
                costsGrowthRate: 1.1,
                functionalityGrowthRate: 1.2,
                upgradeSlots: {
                    "slot1": "H"
                }
            },
            50: {
                costsGrowthRate: 1.2,
                functionalityGrowthRate: 1.1,
                upgradeSlots: {
                    "slot1": "G",
                    "slot2": "H"
                }
            },
            75: {
                costsGrowthRate: 1.225,
                functionalityGrowthRate: 1.1,
                upgradeSlots: {
                    "slot1": "F",
                    "slot2": "G",
                    "slot3": "H"
                }
            },
            100: {
                costsGrowthRate: 1.25,
                functionalityGrowthRate: 1.075,
                upgradeSlots: {
                    "slot1": "E",
                    "slot2": "F",
                    "slot3": "G",
                    "slot4": "H"
                }
            },
            150: {
                costsGrowthRate: 1.275,
                functionalityGrowthRate: 1.06,
                upgradeSlots: {
                    "slot1": "F",
                    "slot2": "G",
                    "slot3": "H",
                    "slot4": "I"
                }
            },
            200: {
                costsGrowthRate: 1.3,
                functionalityGrowthRate: 1.05,
                upgradeSlots: {
                    "slot1": "G",
                    "slot2": "H",
                    "slot3": "I",
                    "slot4": "J"
                }
            },
            250: {
                costsGrowthRate: 1.32,
                functionalityGrowthRate: 1.045,
                upgradeSlots: {
                    "slot1": "H",
                    "slot2": "I",
                    "slot3": "J",
                    "slot4": "K"
                }
            },
            300: {
                costsGrowthRate: 1.34,
                functionalityGrowthRate: 1.04,
                upgradeSlots: {
                    "slot1": "I",
                    "slot2": "J",
                    "slot3": "K",
                    "slot4": "L"
                }
            },
            350: {
                costsGrowthRate: 1.36,
                functionalityGrowthRate: 1.035
            }
        },
        productionSpeedUpgrades: {
            10: {
                costsGrowthRate: 1.2,
                functionalityGrowthRate: 1.01,
                upgradeSlots: {
                    "slot1": "H"
                }
            },
            25: {
                costsGrowthRate: 1.25,
                functionalityGrowthRate: 1.005,
                upgradeSlots: {
                    "slot1": "G",
                    "slot2": "H"
                }
            },
            35: {
                costsGrowthRate: 1.35,
                functionalityGrowthRate: 1.009,
                upgradeSlots: {
                    "slot1": "F",
                    "slot2": "G",
                    "slot3": "H"
                }
            },
            50: {
                costsGrowthRate: 1.5,
                functionalityGrowthRate: 1.008,
                upgradeSlots: {
                    "slot1": "E",
                    "slot2": "F",
                    "slot3": "G",
                    "slot4": "H"
                }
            },
            65: {
                costsGrowthRate: 1.3,
                functionalityGrowthRate: 1.006,
                upgradeSlots: {
                    "slot1": "F",
                    "slot2": "G",
                    "slot3": "H",
                    "slot4": "I"
                }
            },
            80: {
                costsGrowthRate: 1.17,
                functionalityGrowthRate: 1.006,
                upgradeSlots: {
                    "slot1": "G",
                    "slot2": "H",
                    "slot3": "I",
                    "slot4": "J"
                }
            },
            95: {
                costsGrowthRate: 1.12,
                functionalityGrowthRate: 1.004,
                upgradeSlots: {
                    "slot1": "H",
                    "slot2": "I",
                    "slot3": "J",
                    "slot4": "K"
                }
            },
            100: {
                costsGrowthRate: 1.07,
                functionalityGrowthRate: 1.004,
                upgradeSlots: {
                    "slot1": "I",
                    "slot2": "J",
                    "slot3": "K",
                    "slot4": "L"
                }
            }
        }
    },
    'I': {
        unlocked: false,
        bought: false,
        buyingCosts: {
            "H": 500
        },
        amount: 0,
        productionRate: 1,
        productionInitRate: 1,
        productionRateLevel: 0,
        productionRateInitialCosts: {
            'slot1': 2,
            'slot2': 2,
            'slot3': 2,
            'slot4': 2
        },
        productionSpeed: 7,
        productionInitSpeed: 7,
        productionSpeedLevel: 0,
        productionSpeedInitialCosts: {
            'slot1': 5,
            'slot2': 5,
            'slot3': 5,
            'slot4': 5
        },
        automatedProduction: false,
        automatedProductionCosts: {
            'I': 500
        },
        productionRateUpgrades: {
            25: {
                costsGrowthRate: 1.1,
                functionalityGrowthRate: 1.2,
                upgradeSlots: {
                    "slot1": "I"
                }
            },
            50: {
                costsGrowthRate: 1.2,
                functionalityGrowthRate: 1.1,
                upgradeSlots: {
                    "slot1": "H",
                    "slot2": "I"
                }
            },
            75: {
                costsGrowthRate: 1.225,
                functionalityGrowthRate: 1.1,
                upgradeSlots: {
                    "slot1": "G",
                    "slot2": "H",
                    "slot3": "I"
                }
            },
            100: {
                costsGrowthRate: 1.25,
                functionalityGrowthRate: 1.075,
                upgradeSlots: {
                    "slot1": "F",
                    "slot2": "G",
                    "slot3": "H",
                    "slot4": "I"
                }
            },
            150: {
                costsGrowthRate: 1.275,
                functionalityGrowthRate: 1.06,
                upgradeSlots: {
                    "slot1": "G",
                    "slot2": "H",
                    "slot3": "I",
                    "slot4": "J"
                }
            },
            200: {
                costsGrowthRate: 1.3,
                functionalityGrowthRate: 1.05,
                upgradeSlots: {
                    "slot1": "H",
                    "slot2": "I",
                    "slot3": "J",
                    "slot4": "K"
                }
            },
            250: {
                costsGrowthRate: 1.32,
                functionalityGrowthRate: 1.045,
                upgradeSlots: {
                    "slot1": "I",
                    "slot2": "J",
                    "slot3": "K",
                    "slot4": "L"
                }
            },
            300: {
                costsGrowthRate: 1.34,
                functionalityGrowthRate: 1.04,
                upgradeSlots: {
                    "slot1": "J",
                    "slot2": "K",
                    "slot3": "L",
                    "slot4": "M"
                }
            },
            350: {
                costsGrowthRate: 1.36,
                functionalityGrowthRate: 1.035
            }
        },
        productionSpeedUpgrades: {
            10: {
                costsGrowthRate: 1.2,
                functionalityGrowthRate: 1.01,
                upgradeSlots: {
                    "slot1": "I"
                }
            },
            25: {
                costsGrowthRate: 1.25,
                functionalityGrowthRate: 1.005,
                upgradeSlots: {
                    "slot1": "H",
                    "slot2": "I"
                }
            },
            35: {
                costsGrowthRate: 1.35,
                functionalityGrowthRate: 1.009,
                upgradeSlots: {
                    "slot1": "G",
                    "slot2": "H",
                    "slot3": "I"
                }
            },
            50: {
                costsGrowthRate: 1.5,
                functionalityGrowthRate: 1.008,
                upgradeSlots: {
                    "slot1": "F",
                    "slot2": "G",
                    "slot3": "H",
                    "slot4": "I"
                }
            },
            65: {
                costsGrowthRate: 1.3,
                functionalityGrowthRate: 1.006,
                upgradeSlots: {
                    "slot1": "G",
                    "slot2": "H",
                    "slot3": "I",
                    "slot4": "J"
                }
            },
            80: {
                costsGrowthRate: 1.17,
                functionalityGrowthRate: 1.006,
                upgradeSlots: {
                    "slot1": "H",
                    "slot2": "I",
                    "slot3": "J",
                    "slot4": "K"
                }
            },
            95: {
                costsGrowthRate: 1.12,
                functionalityGrowthRate: 1.004,
                upgradeSlots: {
                    "slot1": "I",
                    "slot2": "J",
                    "slot3": "K",
                    "slot4": "L"
                }
            },
            100: {
                costsGrowthRate: 1.07,
                functionalityGrowthRate: 1.004,
                upgradeSlots: {
                    "slot1": "J",
                    "slot2": "K",
                    "slot3": "L",
                    "slot4": "M"
                }
            }
        }
    },
    'J': {
        unlocked: false,
        bought: false,
        buyingCosts: {
            "I": 500
        },
        amount: 0,
        productionRate: 1,
        productionInitRate: 1,
        productionRateLevel: 0,
        productionRateInitialCosts: {
            'slot1': 2,
            'slot2': 2,
            'slot3': 2,
            'slot4': 2
        },
        productionSpeed: 10,
        productionInitSpeed: 10,
        productionSpeedLevel: 0,
        productionSpeedInitialCosts: {
            'slot1': 5,
            'slot2': 5,
            'slot3': 5,
            'slot4': 5
        },
        automatedProduction: false,
        automatedProductionCosts: {
            'J': 500
        },
        productionRateUpgrades: {
            25: {
                costsGrowthRate: 1.1,
                functionalityGrowthRate: 1.2,
                upgradeSlots: {
                    "slot1": "J"
                }
            },
            50: {
                costsGrowthRate: 1.2,
                functionalityGrowthRate: 1.1,
                upgradeSlots: {
                    "slot1": "I",
                    "slot2": "J"
                }
            },
            75: {
                costsGrowthRate: 1.225,
                functionalityGrowthRate: 1.1,
                upgradeSlots: {
                    "slot1": "H",
                    "slot2": "I",
                    "slot3": "J"
                }
            },
            100: {
                costsGrowthRate: 1.25,
                functionalityGrowthRate: 1.075,
                upgradeSlots: {
                    "slot1": "G",
                    "slot2": "H",
                    "slot3": "I",
                    "slot4": "J"
                }
            },
            150: {
                costsGrowthRate: 1.275,
                functionalityGrowthRate: 1.06,
                upgradeSlots: {
                    "slot1": "H",
                    "slot2": "I",
                    "slot3": "J",
                    "slot4": "K"
                }
            },
            200: {
                costsGrowthRate: 1.3,
                functionalityGrowthRate: 1.05,
                upgradeSlots: {
                    "slot1": "I",
                    "slot2": "J",
                    "slot3": "K",
                    "slot4": "L"
                }
            },
            250: {
                costsGrowthRate: 1.32,
                functionalityGrowthRate: 1.045,
                upgradeSlots: {
                    "slot1": "J",
                    "slot2": "K",
                    "slot3": "L",
                    "slot4": "M"
                }
            },
            300: {
                costsGrowthRate: 1.34,
                functionalityGrowthRate: 1.04,
                upgradeSlots: {
                    "slot1": "K",
                    "slot2": "L",
                    "slot3": "M",
                    "slot4": "N"
                }
            },
            350: {
                costsGrowthRate: 1.36,
                functionalityGrowthRate: 1.035
            }
        },
        productionSpeedUpgrades: {
            10: {
                costsGrowthRate: 1.2,
                functionalityGrowthRate: 1.01,
                upgradeSlots: {
                    "slot1": "J"
                }
            },
            25: {
                costsGrowthRate: 1.25,
                functionalityGrowthRate: 1.005,
                upgradeSlots: {
                    "slot1": "I",
                    "slot2": "J"
                }
            },
            35: {
                costsGrowthRate: 1.35,
                functionalityGrowthRate: 1.009,
                upgradeSlots: {
                    "slot1": "H",
                    "slot2": "I",
                    "slot3": "J"
                }
            },
            50: {
                costsGrowthRate: 1.5,
                functionalityGrowthRate: 1.008,
                upgradeSlots: {
                    "slot1": "G",
                    "slot2": "H",
                    "slot3": "I",
                    "slot4": "J"
                }
            },
            65: {
                costsGrowthRate: 1.3,
                functionalityGrowthRate: 1.006,
                upgradeSlots: {
                    "slot1": "H",
                    "slot2": "I",
                    "slot3": "J",
                    "slot4": "K"
                }
            },
            80: {
                costsGrowthRate: 1.17,
                functionalityGrowthRate: 1.006,
                upgradeSlots: {
                    "slot1": "I",
                    "slot2": "J",
                    "slot3": "K",
                    "slot4": "L"
                }
            },
            95: {
                costsGrowthRate: 1.12,
                functionalityGrowthRate: 1.004,
                upgradeSlots: {
                    "slot1": "J",
                    "slot2": "K",
                    "slot3": "L",
                    "slot4": "M"
                }
            },
            100: {
                costsGrowthRate: 1.07,
                functionalityGrowthRate: 1.004,
                upgradeSlots: {
                    "slot1": "K",
                    "slot2": "L",
                    "slot3": "M",
                    "slot4": "N"
                }
            }
        }
    },
    'K': {
        unlocked: false,
        bought: false,
        buyingCosts: {
            "J": 500
        },
        amount: 0,
        productionRate: 1,
        productionInitRate: 1,
        productionRateLevel: 0,
        productionRateInitialCosts: {
            'slot1': 2,
            'slot2': 2,
            'slot3': 2,
            'slot4': 2
        },
        productionSpeed: 12.5,
        productionInitSpeed: 12.5,
        productionSpeedLevel: 0,
        productionSpeedInitialCosts: {
            'slot1': 5,
            'slot2': 5,
            'slot3': 5,
            'slot4': 5
        },
        automatedProduction: false,
        automatedProductionCosts: {
            'K': 500
        },
        productionRateUpgrades: {
            25: {
                costsGrowthRate: 1.1,
                functionalityGrowthRate: 1.2,
                upgradeSlots: {
                    "slot1": "K"
                }
            },
            50: {
                costsGrowthRate: 1.2,
                functionalityGrowthRate: 1.1,
                upgradeSlots: {
                    "slot1": "J",
                    "slot2": "K"
                }
            },
            75: {
                costsGrowthRate: 1.225,
                functionalityGrowthRate: 1.1,
                upgradeSlots: {
                    "slot1": "I",
                    "slot2": "J",
                    "slot3": "K"
                }
            },
            100: {
                costsGrowthRate: 1.25,
                functionalityGrowthRate: 1.075,
                upgradeSlots: {
                    "slot1": "H",
                    "slot2": "I",
                    "slot3": "J",
                    "slot4": "K"
                }
            },
            150: {
                costsGrowthRate: 1.275,
                functionalityGrowthRate: 1.06,
                upgradeSlots: {
                    "slot1": "I",
                    "slot2": "J",
                    "slot3": "K",
                    "slot4": "L"
                }
            },
            200: {
                costsGrowthRate: 1.3,
                functionalityGrowthRate: 1.05,
                upgradeSlots: {
                    "slot1": "J",
                    "slot2": "K",
                    "slot3": "L",
                    "slot4": "M"
                }
            },
            250: {
                costsGrowthRate: 1.32,
                functionalityGrowthRate: 1.045,
                upgradeSlots: {
                    "slot1": "K",
                    "slot2": "L",
                    "slot3": "M",
                    "slot4": "N"
                }
            },
            300: {
                costsGrowthRate: 1.34,
                functionalityGrowthRate: 1.04,
                upgradeSlots: {
                    "slot1": "L",
                    "slot2": "M",
                    "slot3": "N",
                    "slot4": "O"
                }
            },
            350: {
                costsGrowthRate: 1.36,
                functionalityGrowthRate: 1.035
            }
        },
        productionSpeedUpgrades: {
            10: {
                costsGrowthRate: 1.2,
                functionalityGrowthRate: 1.01,
                upgradeSlots: {
                    "slot1": "K"
                }
            },
            25: {
                costsGrowthRate: 1.25,
                functionalityGrowthRate: 1.005,
                upgradeSlots: {
                    "slot1": "J",
                    "slot2": "K"
                }
            },
            35: {
                costsGrowthRate: 1.35,
                functionalityGrowthRate: 1.009,
                upgradeSlots: {
                    "slot1": "I",
                    "slot2": "J",
                    "slot3": "K"
                }
            },
            50: {
                costsGrowthRate: 1.5,
                functionalityGrowthRate: 1.008,
                upgradeSlots: {
                    "slot1": "H",
                    "slot2": "I",
                    "slot3": "J",
                    "slot4": "K"
                }
            },
            65: {
                costsGrowthRate: 1.3,
                functionalityGrowthRate: 1.006,
                upgradeSlots: {
                    "slot1": "I",
                    "slot2": "J",
                    "slot3": "K",
                    "slot4": "L"
                }
            },
            80: {
                costsGrowthRate: 1.17,
                functionalityGrowthRate: 1.006,
                upgradeSlots: {
                    "slot1": "J",
                    "slot2": "K",
                    "slot3": "L",
                    "slot4": "M"
                }
            },
            95: {
                costsGrowthRate: 1.12,
                functionalityGrowthRate: 1.004,
                upgradeSlots: {
                    "slot1": "K",
                    "slot2": "L",
                    "slot3": "M",
                    "slot4": "N"
                }
            },
            100: {
                costsGrowthRate: 1.07,
                functionalityGrowthRate: 1.004,
                upgradeSlots: {
                    "slot1": "L",
                    "slot2": "M",
                    "slot3": "N",
                    "slot4": "O"
                }
            }
        }
    },
    'L': {
        unlocked: false,
        bought: false,
        buyingCosts: {
            "K": 500
        },
        amount: 0,
        productionRate: 1,
        productionInitRate: 1,
        productionRateLevel: 0,
        productionRateInitialCosts: {
            'slot1': 2,
            'slot2': 2,
            'slot3': 2,
            'slot4': 2
        },
        productionSpeed: 15,
        productionInitSpeed: 15,
        productionSpeedLevel: 0,
        productionSpeedInitialCosts: {
            'slot1': 5,
            'slot2': 5,
            'slot3': 5,
            'slot4': 5
        },
        automatedProduction: false,
        automatedProductionCosts: {
            'L': 500
        },
        productionRateUpgrades: {
            25: {
                costsGrowthRate: 1.1,
                functionalityGrowthRate: 1.2,
                upgradeSlots: {
                    "slot1": "L"
                }
            },
            50: {
                costsGrowthRate: 1.2,
                functionalityGrowthRate: 1.1,
                upgradeSlots: {
                    "slot1": "K",
                    "slot2": "L"
                }
            },
            75: {
                costsGrowthRate: 1.225,
                functionalityGrowthRate: 1.1,
                upgradeSlots: {
                    "slot1": "J",
                    "slot2": "K",
                    "slot3": "L"
                }
            },
            100: {
                costsGrowthRate: 1.25,
                functionalityGrowthRate: 1.075,
                upgradeSlots: {
                    "slot1": "I",
                    "slot2": "J",
                    "slot3": "K",
                    "slot4": "L"
                }
            },
            150: {
                costsGrowthRate: 1.275,
                functionalityGrowthRate: 1.06,
                upgradeSlots: {
                    "slot1": "J",
                    "slot2": "K",
                    "slot3": "L",
                    "slot4": "M"
                }
            },
            200: {
                costsGrowthRate: 1.3,
                functionalityGrowthRate: 1.05,
                upgradeSlots: {
                    "slot1": "K",
                    "slot2": "L",
                    "slot3": "M",
                    "slot4": "N"
                }
            },
            250: {
                costsGrowthRate: 1.32,
                functionalityGrowthRate: 1.045,
                upgradeSlots: {
                    "slot1": "L",
                    "slot2": "M",
                    "slot3": "N",
                    "slot4": "O"
                }
            },
            300: {
                costsGrowthRate: 1.34,
                functionalityGrowthRate: 1.04,
                upgradeSlots: {
                    "slot1": "O",
                    "slot2": "P",
                    "slot3": "Q",
                    "slot4": "R"
                }
            },
            350: {
                costsGrowthRate: 1.36,
                functionalityGrowthRate: 1.035
            }
        },
        productionSpeedUpgrades: {
            10: {
                costsGrowthRate: 1.2,
                functionalityGrowthRate: 1.01,
                upgradeSlots: {
                    "slot1": "L"
                }
            },
            25: {
                costsGrowthRate: 1.25,
                functionalityGrowthRate: 1.005,
                upgradeSlots: {
                    "slot1": "K",
                    "slot2": "L"
                }
            },
            35: {
                costsGrowthRate: 1.35,
                functionalityGrowthRate: 1.009,
                upgradeSlots: {
                    "slot1": "J",
                    "slot2": "K",
                    "slot3": "L"
                }
            },
            50: {
                costsGrowthRate: 1.5,
                functionalityGrowthRate: 1.008,
                upgradeSlots: {
                    "slot1": "I",
                    "slot2": "J",
                    "slot3": "K",
                    "slot4": "L"
                }
            },
            65: {
                costsGrowthRate: 1.3,
                functionalityGrowthRate: 1.006,
                upgradeSlots: {
                    "slot1": "J",
                    "slot2": "K",
                    "slot3": "L",
                    "slot4": "M"
                }
            },
            80: {
                costsGrowthRate: 1.17,
                functionalityGrowthRate: 1.006,
                upgradeSlots: {
                    "slot1": "K",
                    "slot2": "L",
                    "slot3": "M",
                    "slot4": "N"
                }
            },
            95: {
                costsGrowthRate: 1.12,
                functionalityGrowthRate: 1.004,
                upgradeSlots: {
                    "slot1": "L",
                    "slot2": "M",
                    "slot3": "N",
                    "slot4": "O"
                }
            },
            100: {
                costsGrowthRate: 1.07,
                functionalityGrowthRate: 1.004,
                upgradeSlots: {
                    "slot1": "O",
                    "slot2": "P",
                    "slot3": "Q",
                    "slot4": "R"
                }
            }
        }
    },
    'M': {
        unlocked: false,
        bought: false,
        buyingCosts: {
            "L": 500
        },
        amount: 0,
        productionRate: 1,
        productionInitRate: 1,
        productionRateLevel: 0,
        productionRateInitialCosts: {
            'slot1': 2,
            'slot2': 2,
            'slot3': 2,
            'slot4': 2
        },
        productionSpeed: 17.5,
        productionInitSpeed: 17.5,
        productionSpeedLevel: 0,
        productionSpeedInitialCosts: {
            'slot1': 5,
            'slot2': 5,
            'slot3': 5,
            'slot4': 5
        },
        automatedProduction: false,
        automatedProductionCosts: {
            'M': 500
        },
        productionRateUpgrades: {
            25: {
                costsGrowthRate: 1.1,
                functionalityGrowthRate: 1.2,
                upgradeSlots: {
                    "slot1": "M"
                }
            },
            50: {
                costsGrowthRate: 1.2,
                functionalityGrowthRate: 1.1,
                upgradeSlots: {
                    "slot1": "L",
                    "slot2": "M"
                }
            },
            75: {
                costsGrowthRate: 1.225,
                functionalityGrowthRate: 1.1,
                upgradeSlots: {
                    "slot1": "K",
                    "slot2": "L",
                    "slot3": "M"
                }
            },
            100: {
                costsGrowthRate: 1.25,
                functionalityGrowthRate: 1.075,
                upgradeSlots: {
                    "slot1": "J",
                    "slot2": "K",
                    "slot3": "L",
                    "slot4": "M"
                }
            },
            150: {
                costsGrowthRate: 1.275,
                functionalityGrowthRate: 1.06,
                upgradeSlots: {
                    "slot1": "K",
                    "slot2": "L",
                    "slot3": "M",
                    "slot4": "N"
                }
            },
            200: {
                costsGrowthRate: 1.3,
                functionalityGrowthRate: 1.05,
                upgradeSlots: {
                    "slot1": "L",
                    "slot2": "M",
                    "slot3": "N",
                    "slot4": "O"
                }
            },
            250: {
                costsGrowthRate: 1.32,
                functionalityGrowthRate: 1.045,
                upgradeSlots: {
                    "slot1": "M",
                    "slot2": "N",
                    "slot3": "O",
                    "slot4": "P"
                }
            },
            300: {
                costsGrowthRate: 1.34,
                functionalityGrowthRate: 1.04,
                upgradeSlots: {
                    "slot1": "N",
                    "slot2": "O",
                    "slot3": "P",
                    "slot4": "Q"
                }
            },
            350: {
                costsGrowthRate: 1.36,
                functionalityGrowthRate: 1.035
            }
        },
        productionSpeedUpgrades: {
            10: {
                costsGrowthRate: 1.2,
                functionalityGrowthRate: 1.01,
                upgradeSlots: {
                    "slot1": "M"
                }
            },
            25: {
                costsGrowthRate: 1.25,
                functionalityGrowthRate: 1.005,
                upgradeSlots: {
                    "slot1": "L",
                    "slot2": "M"
                }
            },
            35: {
                costsGrowthRate: 1.35,
                functionalityGrowthRate: 1.009,
                upgradeSlots: {
                    "slot1": "K",
                    "slot2": "L",
                    "slot3": "M"
                }
            },
            50: {
                costsGrowthRate: 1.5,
                functionalityGrowthRate: 1.008,
                upgradeSlots: {
                    "slot1": "J",
                    "slot2": "K",
                    "slot3": "L",
                    "slot4": "M"
                }
            },
            65: {
                costsGrowthRate: 1.3,
                functionalityGrowthRate: 1.006,
                upgradeSlots: {
                    "slot1": "K",
                    "slot2": "L",
                    "slot3": "M",
                    "slot4": "N"
                }
            },
            80: {
                costsGrowthRate: 1.17,
                functionalityGrowthRate: 1.006,
                upgradeSlots: {
                    "slot1": "L",
                    "slot2": "M",
                    "slot3": "N",
                    "slot4": "O"
                }
            },
            95: {
                costsGrowthRate: 1.12,
                functionalityGrowthRate: 1.004,
                upgradeSlots: {
                    "slot1": "M",
                    "slot2": "N",
                    "slot3": "O",
                    "slot4": "P"
                }
            },
            100: {
                costsGrowthRate: 1.07,
                functionalityGrowthRate: 1.004,
                upgradeSlots: {
                    "slot1": "N",
                    "slot2": "O",
                    "slot3": "P",
                    "slot4": "Q"
                }
            }
        }
    },
    'N': {
        unlocked: false,
        bought: false,
        buyingCosts: {
            "M": 500
        },
        amount: 0,
        productionRate: 1,
        productionInitRate: 1,
        productionRateLevel: 0,
        productionRateInitialCosts: {
            'slot1': 2,
            'slot2': 2,
            'slot3': 2,
            'slot4': 2
        },
        productionSpeed: 20,
        productionInitSpeed: 20,
        productionSpeedLevel: 0,
        productionSpeedInitialCosts: {
            'slot1': 5,
            'slot2': 5,
            'slot3': 5,
            'slot4': 5
        },
        automatedProduction: false,
        automatedProductionCosts: {
            'N': 500
        },
        productionRateUpgrades: {
            25: {
                costsGrowthRate: 1.1,
                functionalityGrowthRate: 1.2,
                upgradeSlots: {
                    "slot1": "N"
                }
            },
            50: {
                costsGrowthRate: 1.2,
                functionalityGrowthRate: 1.1,
                upgradeSlots: {
                    "slot1": "M",
                    "slot2": "N"
                }
            },
            75: {
                costsGrowthRate: 1.225,
                functionalityGrowthRate: 1.1,
                upgradeSlots: {
                    "slot1": "L",
                    "slot2": "M",
                    "slot3": "N"
                }
            },
            100: {
                costsGrowthRate: 1.25,
                functionalityGrowthRate: 1.075,
                upgradeSlots: {
                    "slot1": "K",
                    "slot2": "L",
                    "slot3": "M",
                    "slot4": "N"
                }
            },
            150: {
                costsGrowthRate: 1.275,
                functionalityGrowthRate: 1.06,
                upgradeSlots: {
                    "slot1": "L",
                    "slot2": "M",
                    "slot3": "N",
                    "slot4": "O"
                }
            },
            200: {
                costsGrowthRate: 1.3,
                functionalityGrowthRate: 1.05,
                upgradeSlots: {
                    "slot1": "M",
                    "slot2": "N",
                    "slot3": "O",
                    "slot4": "P"
                }
            },
            250: {
                costsGrowthRate: 1.32,
                functionalityGrowthRate: 1.045,
                upgradeSlots: {
                    "slot1": "N",
                    "slot2": "O",
                    "slot3": "P",
                    "slot4": "Q"
                }
            },
            300: {
                costsGrowthRate: 1.34,
                functionalityGrowthRate: 1.04,
                upgradeSlots: {
                    "slot1": "O",
                    "slot2": "P",
                    "slot3": "Q",
                    "slot4": "R"
                }
            },
            350: {
                costsGrowthRate: 1.36,
                functionalityGrowthRate: 1.035
            }
        },
        productionSpeedUpgrades: {
            10: {
                costsGrowthRate: 1.2,
                functionalityGrowthRate: 1.01,
                upgradeSlots: {
                    "slot1": "N"
                }
            },
            25: {
                costsGrowthRate: 1.25,
                functionalityGrowthRate: 1.005,
                upgradeSlots: {
                    "slot1": "M",
                    "slot2": "N"
                }
            },
            35: {
                costsGrowthRate: 1.35,
                functionalityGrowthRate: 1.009,
                upgradeSlots: {
                    "slot1": "L",
                    "slot2": "M",
                    "slot3": "N"
                }
            },
            50: {
                costsGrowthRate: 1.5,
                functionalityGrowthRate: 1.008,
                upgradeSlots: {
                    "slot1": "K",
                    "slot2": "L",
                    "slot3": "M",
                    "slot4": "N"
                }
            },
            65: {
                costsGrowthRate: 1.3,
                functionalityGrowthRate: 1.006,
                upgradeSlots: {
                    "slot1": "L",
                    "slot2": "M",
                    "slot3": "N",
                    "slot4": "O"
                }
            },
            80: {
                costsGrowthRate: 1.17,
                functionalityGrowthRate: 1.006,
                upgradeSlots: {
                    "slot1": "M",
                    "slot2": "N",
                    "slot3": "O",
                    "slot4": "P"
                }
            },
            95: {
                costsGrowthRate: 1.12,
                functionalityGrowthRate: 1.004,
                upgradeSlots: {
                    "slot1": "N",
                    "slot2": "O",
                    "slot3": "P",
                    "slot4": "Q"
                }
            },
            100: {
                costsGrowthRate: 1.07,
                functionalityGrowthRate: 1.004,
                upgradeSlots: {
                    "slot1": "O",
                    "slot2": "P",
                    "slot3": "Q",
                    "slot4": "R"
                }
            }
        }
    },
    'O': {
        unlocked: false,
        bought: false,
        buyingCosts: {
            "N": 500
        },
        amount: 0,
        productionRate: 1,
        productionInitRate: 1,
        productionRateLevel: 0,
        productionRateInitialCosts: {
            'slot1': 2,
            'slot2': 2,
            'slot3': 2,
            'slot4': 2
        },
        productionSpeed: 25,
        productionInitSpeed: 25,
        productionSpeedLevel: 0,
        productionSpeedInitialCosts: {
            'slot1': 5,
            'slot2': 5,
            'slot3': 5,
            'slot4': 5
        },
        automatedProduction: false,
        automatedProductionCosts: {
            'O': 500
        },
        productionRateUpgrades: {
            25: {
                costsGrowthRate: 1.1,
                functionalityGrowthRate: 1.2,
                upgradeSlots: {
                    "slot1": "O"
                }
            },
            50: {
                costsGrowthRate: 1.2,
                functionalityGrowthRate: 1.1,
                upgradeSlots: {
                    "slot1": "N",
                    "slot2": "O"
                }
            },
            75: {
                costsGrowthRate: 1.225,
                functionalityGrowthRate: 1.1,
                upgradeSlots: {
                    "slot1": "M",
                    "slot2": "N",
                    "slot3": "O"
                }
            },
            100: {
                costsGrowthRate: 1.25,
                functionalityGrowthRate: 1.075,
                upgradeSlots: {
                    "slot1": "L",
                    "slot2": "M",
                    "slot3": "N",
                    "slot4": "O"
                }
            },
            150: {
                costsGrowthRate: 1.275,
                functionalityGrowthRate: 1.06,
                upgradeSlots: {
                    "slot1": "M",
                    "slot2": "N",
                    "slot3": "O",
                    "slot4": "P"
                }
            },
            200: {
                costsGrowthRate: 1.3,
                functionalityGrowthRate: 1.05,
                upgradeSlots: {
                    "slot1": "N",
                    "slot2": "O",
                    "slot3": "P",
                    "slot4": "Q"
                }
            },
            250: {
                costsGrowthRate: 1.32,
                functionalityGrowthRate: 1.045,
                upgradeSlots: {
                    "slot1": "O",
                    "slot2": "P",
                    "slot3": "Q",
                    "slot4": "R"
                }
            },
            300: {
                costsGrowthRate: 1.34,
                functionalityGrowthRate: 1.04,
                upgradeSlots: {
                    "slot1": "P",
                    "slot2": "Q",
                    "slot3": "R",
                    "slot4": "S"
                }
            },
            350: {
                costsGrowthRate: 1.36,
                functionalityGrowthRate: 1.035
            }
        },
        productionSpeedUpgrades: {
            10: {
                costsGrowthRate: 1.2,
                functionalityGrowthRate: 1.01,
                upgradeSlots: {
                    "slot1": "O"
                }
            },
            25: {
                costsGrowthRate: 1.25,
                functionalityGrowthRate: 1.005,
                upgradeSlots: {
                    "slot1": "N",
                    "slot2": "O"
                }
            },
            35: {
                costsGrowthRate: 1.35,
                functionalityGrowthRate: 1.009,
                upgradeSlots: {
                    "slot1": "M",
                    "slot2": "N",
                    "slot3": "O"
                }
            },
            50: {
                costsGrowthRate: 1.5,
                functionalityGrowthRate: 1.008,
                upgradeSlots: {
                    "slot1": "L",
                    "slot2": "M",
                    "slot3": "N",
                    "slot4": "O"
                }
            },
            65: {
                costsGrowthRate: 1.3,
                functionalityGrowthRate: 1.006,
                upgradeSlots: {
                    "slot1": "M",
                    "slot2": "N",
                    "slot3": "O",
                    "slot4": "P"
                }
            },
            80: {
                costsGrowthRate: 1.17,
                functionalityGrowthRate: 1.006,
                upgradeSlots: {
                    "slot1": "N",
                    "slot2": "O",
                    "slot3": "P",
                    "slot4": "Q"
                }
            },
            95: {
                costsGrowthRate: 1.12,
                functionalityGrowthRate: 1.004,
                upgradeSlots: {
                    "slot1": "O",
                    "slot2": "P",
                    "slot3": "Q",
                    "slot4": "R"
                }
            },
            100: {
                costsGrowthRate: 1.07,
                functionalityGrowthRate: 1.004,
                upgradeSlots: {
                    "slot1": "P",
                    "slot2": "Q",
                    "slot3": "R",
                    "slot4": "S"
                }
            }
        }
    },
    'P': {
        unlocked: false,
        bought: false,
        buyingCosts: {
            "O": 500
        },
        amount: 0,
        productionRate: 1,
        productionInitRate: 1,
        productionRateLevel: 0,
        productionRateInitialCosts: {
            'slot1': 2,
            'slot2': 2,
            'slot3': 2,
            'slot4': 2
        },
        productionSpeed: 27.5,
        productionInitSpeed: 27.5,
        productionSpeedLevel: 0,
        productionSpeedInitialCosts: {
            'slot1': 5,
            'slot2': 5,
            'slot3': 5,
            'slot4': 5
        },
        automatedProduction: false,
        automatedProductionCosts: {
            'P': 500
        },
        productionRateUpgrades: {
            25: {
                costsGrowthRate: 1.1,
                functionalityGrowthRate: 1.2,
                upgradeSlots: {
                    "slot1": "P"
                }
            },
            50: {
                costsGrowthRate: 1.2,
                functionalityGrowthRate: 1.1,
                upgradeSlots: {
                    "slot1": "O",
                    "slot2": "P"
                }
            },
            75: {
                costsGrowthRate: 1.225,
                functionalityGrowthRate: 1.1,
                upgradeSlots: {
                    "slot1": "N",
                    "slot2": "O",
                    "slot3": "P"
                }
            },
            100: {
                costsGrowthRate: 1.25,
                functionalityGrowthRate: 1.075,
                upgradeSlots: {
                    "slot1": "M",
                    "slot2": "N",
                    "slot3": "O",
                    "slot4": "P"
                }
            },
            150: {
                costsGrowthRate: 1.275,
                functionalityGrowthRate: 1.06,
                upgradeSlots: {
                    "slot1": "N",
                    "slot2": "O",
                    "slot3": "P",
                    "slot4": "Q"
                }
            },
            200: {
                costsGrowthRate: 1.3,
                functionalityGrowthRate: 1.05,
                upgradeSlots: {
                    "slot1": "O",
                    "slot2": "P",
                    "slot3": "Q",
                    "slot4": "R"
                }
            },
            250: {
                costsGrowthRate: 1.32,
                functionalityGrowthRate: 1.045,
                upgradeSlots: {
                    "slot1": "P",
                    "slot2": "Q",
                    "slot3": "R",
                    "slot4": "S"
                }
            },
            300: {
                costsGrowthRate: 1.34,
                functionalityGrowthRate: 1.04,
                upgradeSlots: {
                    "slot1": "Q",
                    "slot2": "R",
                    "slot3": "S",
                    "slot4": "T"
                }
            },
            350: {
                costsGrowthRate: 1.36,
                functionalityGrowthRate: 1.035
            }
        },
        productionSpeedUpgrades: {
            10: {
                costsGrowthRate: 1.2,
                functionalityGrowthRate: 1.01,
                upgradeSlots: {
                    "slot1": "P"
                }
            },
            25: {
                costsGrowthRate: 1.25,
                functionalityGrowthRate: 1.005,
                upgradeSlots: {
                    "slot1": "O",
                    "slot2": "P"
                }
            },
            35: {
                costsGrowthRate: 1.35,
                functionalityGrowthRate: 1.009,
                upgradeSlots: {
                    "slot1": "N",
                    "slot2": "O",
                    "slot3": "P"
                }
            },
            50: {
                costsGrowthRate: 1.5,
                functionalityGrowthRate: 1.008,
                upgradeSlots: {
                    "slot1": "M",
                    "slot2": "N",
                    "slot3": "O",
                    "slot4": "P"
                }
            },
            65: {
                costsGrowthRate: 1.3,
                functionalityGrowthRate: 1.006,
                upgradeSlots: {
                    "slot1": "N",
                    "slot2": "O",
                    "slot3": "P",
                    "slot4": "Q"
                }
            },
            80: {
                costsGrowthRate: 1.17,
                functionalityGrowthRate: 1.006,
                upgradeSlots: {
                    "slot1": "O",
                    "slot2": "P",
                    "slot3": "Q",
                    "slot4": "R"
                }
            },
            95: {
                costsGrowthRate: 1.12,
                functionalityGrowthRate: 1.004,
                upgradeSlots: {
                    "slot1": "P",
                    "slot2": "Q",
                    "slot3": "R",
                    "slot4": "S"
                }
            },
            100: {
                costsGrowthRate: 1.07,
                functionalityGrowthRate: 1.004,
                upgradeSlots: {
                    "slot1": "Q",
                    "slot2": "R",
                    "slot3": "S",
                    "slot4": "T"
                }
            }
        }
    },
    'Q': {
        unlocked: false,
        bought: false,
        buyingCosts: {
            "P": 500
        },
        amount: 0,
        productionRate: 1,
        productionInitRate: 1,
        productionRateLevel: 0,
        productionRateInitialCosts: {
            'slot1': 2,
            'slot2': 2,
            'slot3': 2,
            'slot4': 2
        },
        productionSpeed: 29,
        productionInitSpeed: 29,
        productionSpeedLevel: 0,
        productionSpeedInitialCosts: {
            'slot1': 5,
            'slot2': 5,
            'slot3': 5,
            'slot4': 5
        },
        automatedProduction: false,
        automatedProductionCosts: {
            'Q': 500
        },
        productionRateUpgrades: {
            25: {
                costsGrowthRate: 1.1,
                functionalityGrowthRate: 1.2,
                upgradeSlots: {
                    "slot1": "Q"
                }
            },
            50: {
                costsGrowthRate: 1.2,
                functionalityGrowthRate: 1.1,
                upgradeSlots: {
                    "slot1": "P",
                    "slot2": "Q"
                }
            },
            75: {
                costsGrowthRate: 1.225,
                functionalityGrowthRate: 1.1,
                upgradeSlots: {
                    "slot1": "O",
                    "slot2": "P",
                    "slot3": "Q"
                }
            },
            100: {
                costsGrowthRate: 1.25,
                functionalityGrowthRate: 1.075,
                upgradeSlots: {
                    "slot1": "N",
                    "slot2": "O",
                    "slot3": "P",
                    "slot4": "Q"
                }
            },
            150: {
                costsGrowthRate: 1.275,
                functionalityGrowthRate: 1.06,
                upgradeSlots: {
                    "slot1": "O",
                    "slot2": "P",
                    "slot3": "Q",
                    "slot4": "R"
                }
            },
            200: {
                costsGrowthRate: 1.3,
                functionalityGrowthRate: 1.05,
                upgradeSlots: {
                    "slot1": "P",
                    "slot2": "Q",
                    "slot3": "R",
                    "slot4": "S"
                }
            },
            250: {
                costsGrowthRate: 1.32,
                functionalityGrowthRate: 1.045,
                upgradeSlots: {
                    "slot1": "Q",
                    "slot2": "R",
                    "slot3": "S",
                    "slot4": "T"
                }
            },
            300: {
                costsGrowthRate: 1.34,
                functionalityGrowthRate: 1.04,
                upgradeSlots: {
                    "slot1": "R",
                    "slot2": "S",
                    "slot3": "T",
                    "slot4": "U"
                }
            },
            350: {
                costsGrowthRate: 1.36,
                functionalityGrowthRate: 1.035
            }
        },
        productionSpeedUpgrades: {
            10: {
                costsGrowthRate: 1.2,
                functionalityGrowthRate: 1.01,
                upgradeSlots: {
                    "slot1": "Q"
                }
            },
            25: {
                costsGrowthRate: 1.25,
                functionalityGrowthRate: 1.005,
                upgradeSlots: {
                    "slot1": "P",
                    "slot2": "Q"
                }
            },
            35: {
                costsGrowthRate: 1.35,
                functionalityGrowthRate: 1.009,
                upgradeSlots: {
                    "slot1": "O",
                    "slot2": "P",
                    "slot3": "Q"
                }
            },
            50: {
                costsGrowthRate: 1.5,
                functionalityGrowthRate: 1.008,
                upgradeSlots: {
                    "slot1": "N",
                    "slot2": "O",
                    "slot3": "P",
                    "slot4": "Q"
                }
            },
            65: {
                costsGrowthRate: 1.3,
                functionalityGrowthRate: 1.006,
                upgradeSlots: {
                    "slot1": "O",
                    "slot2": "P",
                    "slot3": "Q",
                    "slot4": "R"
                }
            },
            80: {
                costsGrowthRate: 1.17,
                functionalityGrowthRate: 1.006,
                upgradeSlots: {
                    "slot1": "P",
                    "slot2": "Q",
                    "slot3": "R",
                    "slot4": "S"
                }
            },
            95: {
                costsGrowthRate: 1.12,
                functionalityGrowthRate: 1.004,
                upgradeSlots: {
                    "slot1": "Q",
                    "slot2": "R",
                    "slot3": "S",
                    "slot4": "T"
                }
            },
            100: {
                costsGrowthRate: 1.07,
                functionalityGrowthRate: 1.004,
                upgradeSlots: {
                    "slot1": "R",
                    "slot2": "S",
                    "slot3": "T",
                    "slot4": "U"
                }
            }
        }
    },
    'R': {
        unlocked: false,
        bought: false,
        buyingCosts: {
            "Q": 500
        },
        amount: 0,
        productionRate: 1,
        productionInitRate: 1,
        productionRateLevel: 0,
        productionRateInitialCosts: {
            'slot1': 2,
            'slot2': 2,
            'slot3': 2,
            'slot4': 2
        },
        productionSpeed: 35,
        productionInitSpeed: 35,
        productionSpeedLevel: 0,
        productionSpeedInitialCosts: {
            'slot1': 5,
            'slot2': 5,
            'slot3': 5,
            'slot4': 5
        },
        automatedProduction: false,
        automatedProductionCosts: {
            'R': 500
        },
        productionRateUpgrades: {
            25: {
                costsGrowthRate: 1.1,
                functionalityGrowthRate: 1.2,
                upgradeSlots: {
                    "slot1": "R"
                }
            },
            50: {
                costsGrowthRate: 1.2,
                functionalityGrowthRate: 1.1,
                upgradeSlots: {
                    "slot1": "Q",
                    "slot2": "R"
                }
            },
            75: {
                costsGrowthRate: 1.225,
                functionalityGrowthRate: 1.1,
                upgradeSlots: {
                    "slot1": "P",
                    "slot2": "Q",
                    "slot3": "R"
                }
            },
            100: {
                costsGrowthRate: 1.25,
                functionalityGrowthRate: 1.075,
                upgradeSlots: {
                    "slot1": "O",
                    "slot2": "P",
                    "slot3": "Q",
                    "slot4": "R"
                }
            },
            150: {
                costsGrowthRate: 1.275,
                functionalityGrowthRate: 1.06,
                upgradeSlots: {
                    "slot1": "P",
                    "slot2": "Q",
                    "slot3": "R",
                    "slot4": "S"
                }
            },
            200: {
                costsGrowthRate: 1.3,
                functionalityGrowthRate: 1.05,
                upgradeSlots: {
                    "slot1": "Q",
                    "slot2": "R",
                    "slot3": "S",
                    "slot4": "T"
                }
            },
            250: {
                costsGrowthRate: 1.32,
                functionalityGrowthRate: 1.045,
                upgradeSlots: {
                    "slot1": "R",
                    "slot2": "S",
                    "slot3": "T",
                    "slot4": "U"
                }
            },
            300: {
                costsGrowthRate: 1.34,
                functionalityGrowthRate: 1.04,
                upgradeSlots: {
                    "slot1": "S",
                    "slot2": "T",
                    "slot3": "U",
                    "slot4": "V"
                }
            },
            350: {
                costsGrowthRate: 1.36,
                functionalityGrowthRate: 1.035
            }
        },
        productionSpeedUpgrades: {
            10: {
                costsGrowthRate: 1.2,
                functionalityGrowthRate: 1.01,
                upgradeSlots: {
                    "slot1": "R"
                }
            },
            25: {
                costsGrowthRate: 1.25,
                functionalityGrowthRate: 1.005,
                upgradeSlots: {
                    "slot1": "Q",
                    "slot2": "R"
                }
            },
            35: {
                costsGrowthRate: 1.35,
                functionalityGrowthRate: 1.009,
                upgradeSlots: {
                    "slot1": "P",
                    "slot2": "Q",
                    "slot3": "R"
                }
            },
            50: {
                costsGrowthRate: 1.5,
                functionalityGrowthRate: 1.008,
                upgradeSlots: {
                    "slot1": "O",
                    "slot2": "P",
                    "slot3": "Q",
                    "slot4": "R"
                }
            },
            65: {
                costsGrowthRate: 1.3,
                functionalityGrowthRate: 1.006,
                upgradeSlots: {
                    "slot1": "P",
                    "slot2": "Q",
                    "slot3": "R",
                    "slot4": "S"
                }
            },
            80: {
                costsGrowthRate: 1.17,
                functionalityGrowthRate: 1.006,
                upgradeSlots: {
                    "slot1": "Q",
                    "slot2": "R",
                    "slot3": "S",
                    "slot4": "T"
                }
            },
            95: {
                costsGrowthRate: 1.12,
                functionalityGrowthRate: 1.004,
                upgradeSlots: {
                    "slot1": "R",
                    "slot2": "S",
                    "slot3": "T",
                    "slot4": "U"
                }
            },
            100: {
                costsGrowthRate: 1.07,
                functionalityGrowthRate: 1.004,
                upgradeSlots: {
                    "slot1": "S",
                    "slot2": "T",
                    "slot3": "U",
                    "slot4": "V"
                }
            }
        }
    },
    'S': {
        unlocked: false,
        bought: false,
        buyingCosts: {
            "R": 500
        },
        amount: 0,
        productionRate: 1,
        productionInitRate: 1,
        productionRateLevel: 0,
        productionRateInitialCosts: {
            'slot1': 2,
            'slot2': 2,
            'slot3': 2,
            'slot4': 2
        },
        productionSpeed: 37.5,
        productionInitSpeed: 37.5,
        productionSpeedLevel: 0,
        productionSpeedInitialCosts: {
            'slot1': 5,
            'slot2': 5,
            'slot3': 5,
            'slot4': 5
        },
        automatedProduction: false,
        automatedProductionCosts: {
            'S': 500
        },
        productionRateUpgrades: {
            25: {
                costsGrowthRate: 1.1,
                functionalityGrowthRate: 1.2,
                upgradeSlots: {
                    "slot1": "S"
                }
            },
            50: {
                costsGrowthRate: 1.2,
                functionalityGrowthRate: 1.1,
                upgradeSlots: {
                    "slot1": "R",
                    "slot2": "S"
                }
            },
            75: {
                costsGrowthRate: 1.225,
                functionalityGrowthRate: 1.1,
                upgradeSlots: {
                    "slot1": "Q",
                    "slot2": "R",
                    "slot3": "S"
                }
            },
            100: {
                costsGrowthRate: 1.25,
                functionalityGrowthRate: 1.075,
                upgradeSlots: {
                    "slot1": "P",
                    "slot2": "Q",
                    "slot3": "R",
                    "slot4": "S"
                }
            },
            150: {
                costsGrowthRate: 1.275,
                functionalityGrowthRate: 1.06,
                upgradeSlots: {
                    "slot1": "Q",
                    "slot2": "R",
                    "slot3": "S",
                    "slot4": "T"
                }
            },
            200: {
                costsGrowthRate: 1.3,
                functionalityGrowthRate: 1.05,
                upgradeSlots: {
                    "slot1": "R",
                    "slot2": "S",
                    "slot3": "T",
                    "slot4": "U"
                }
            },
            250: {
                costsGrowthRate: 1.32,
                functionalityGrowthRate: 1.045,
                upgradeSlots: {
                    "slot1": "S",
                    "slot2": "T",
                    "slot3": "U",
                    "slot4": "V"
                }
            },
            300: {
                costsGrowthRate: 1.34,
                functionalityGrowthRate: 1.04,
                upgradeSlots: {
                    "slot1": "T",
                    "slot2": "U",
                    "slot3": "V",
                    "slot4": "W"
                }
            },
            350: {
                costsGrowthRate: 1.36,
                functionalityGrowthRate: 1.035
            }
        },
        productionSpeedUpgrades: {
            10: {
                costsGrowthRate: 1.2,
                functionalityGrowthRate: 1.01,
                upgradeSlots: {
                    "slot1": "S"
                }
            },
            25: {
                costsGrowthRate: 1.25,
                functionalityGrowthRate: 1.005,
                upgradeSlots: {
                    "slot1": "R",
                    "slot2": "S"
                }
            },
            35: {
                costsGrowthRate: 1.35,
                functionalityGrowthRate: 1.009,
                upgradeSlots: {
                    "slot1": "Q",
                    "slot2": "R",
                    "slot3": "S"
                }
            },
            50: {
                costsGrowthRate: 1.5,
                functionalityGrowthRate: 1.008,
                upgradeSlots: {
                    "slot1": "P",
                    "slot2": "Q",
                    "slot3": "R",
                    "slot4": "S"
                }
            },
            65: {
                costsGrowthRate: 1.3,
                functionalityGrowthRate: 1.006,
                upgradeSlots: {
                    "slot1": "Q",
                    "slot2": "R",
                    "slot3": "S",
                    "slot4": "T"
                }
            },
            80: {
                costsGrowthRate: 1.17,
                functionalityGrowthRate: 1.006,
                upgradeSlots: {
                    "slot1": "R",
                    "slot2": "S",
                    "slot3": "T",
                    "slot4": "U"
                }
            },
            95: {
                costsGrowthRate: 1.12,
                functionalityGrowthRate: 1.004,
                upgradeSlots: {
                    "slot1": "S",
                    "slot2": "T",
                    "slot3": "U",
                    "slot4": "V"
                }
            },
            100: {
                costsGrowthRate: 1.07,
                functionalityGrowthRate: 1.004,
                upgradeSlots: {
                    "slot1": "T",
                    "slot2": "U",
                    "slot3": "V",
                    "slot4": "W"
                }
            }
        }
    },
    'T': {
        unlocked: false,
        bought: false,
        buyingCosts: {
            "S": 500
        },
        amount: 0,
        productionRate: 1,
        productionInitRate: 1,
        productionRateLevel: 0,
        productionRateInitialCosts: {
            'slot1': 2,
            'slot2': 2,
            'slot3': 2,
            'slot4': 2
        },
        productionSpeed: 40,
        productionInitSpeed: 40,
        productionSpeedLevel: 0,
        productionSpeedInitialCosts: {
            'slot1': 5,
            'slot2': 5,
            'slot3': 5,
            'slot4': 5
        },
        automatedProduction: false,
        automatedProductionCosts: {
            'T': 500
        },
        productionRateUpgrades: {
            25: {
                costsGrowthRate: 1.1,
                functionalityGrowthRate: 1.2,
                upgradeSlots: {
                    "slot1": "T"
                }
            },
            50: {
                costsGrowthRate: 1.2,
                functionalityGrowthRate: 1.1,
                upgradeSlots: {
                    "slot1": "S",
                    "slot2": "T"
                }
            },
            75: {
                costsGrowthRate: 1.225,
                functionalityGrowthRate: 1.1,
                upgradeSlots: {
                    "slot1": "R",
                    "slot2": "S",
                    "slot3": "T"
                }
            },
            100: {
                costsGrowthRate: 1.25,
                functionalityGrowthRate: 1.075,
                upgradeSlots: {
                    "slot1": "Q",
                    "slot2": "R",
                    "slot3": "S",
                    "slot4": "T"
                }
            },
            150: {
                costsGrowthRate: 1.275,
                functionalityGrowthRate: 1.06,
                upgradeSlots: {
                    "slot1": "R",
                    "slot2": "S",
                    "slot3": "T",
                    "slot4": "U"
                }
            },
            200: {
                costsGrowthRate: 1.3,
                functionalityGrowthRate: 1.05,
                upgradeSlots: {
                    "slot1": "S",
                    "slot2": "T",
                    "slot3": "U",
                    "slot4": "V"
                }
            },
            250: {
                costsGrowthRate: 1.32,
                functionalityGrowthRate: 1.045,
                upgradeSlots: {
                    "slot1": "T",
                    "slot2": "U",
                    "slot3": "V",
                    "slot4": "W"
                }
            },
            300: {
                costsGrowthRate: 1.34,
                functionalityGrowthRate: 1.04,
                upgradeSlots: {
                    "slot1": "U",
                    "slot2": "V",
                    "slot3": "W",
                    "slot4": "X"
                }
            },
            350: {
                costsGrowthRate: 1.36,
                functionalityGrowthRate: 1.035
            }
        },
        productionSpeedUpgrades: {
            10: {
                costsGrowthRate: 1.2,
                functionalityGrowthRate: 1.01,
                upgradeSlots: {
                    "slot1": "T"
                }
            },
            25: {
                costsGrowthRate: 1.25,
                functionalityGrowthRate: 1.005,
                upgradeSlots: {
                    "slot1": "S",
                    "slot2": "T"
                }
            },
            35: {
                costsGrowthRate: 1.35,
                functionalityGrowthRate: 1.009,
                upgradeSlots: {
                    "slot1": "R",
                    "slot2": "S",
                    "slot3": "T"
                }
            },
            50: {
                costsGrowthRate: 1.5,
                functionalityGrowthRate: 1.008,
                upgradeSlots: {
                    "slot1": "Q",
                    "slot2": "R",
                    "slot3": "S",
                    "slot4": "T"
                }
            },
            65: {
                costsGrowthRate: 1.3,
                functionalityGrowthRate: 1.006,
                upgradeSlots: {
                    "slot1": "R",
                    "slot2": "S",
                    "slot3": "T",
                    "slot4": "U"
                }
            },
            80: {
                costsGrowthRate: 1.17,
                functionalityGrowthRate: 1.006,
                upgradeSlots: {
                    "slot1": "S",
                    "slot2": "T",
                    "slot3": "U",
                    "slot4": "V"
                }
            },
            95: {
                costsGrowthRate: 1.12,
                functionalityGrowthRate: 1.004,
                upgradeSlots: {
                    "slot1": "T",
                    "slot2": "U",
                    "slot3": "V",
                    "slot4": "W"
                }
            },
            100: {
                costsGrowthRate: 1.07,
                functionalityGrowthRate: 1.004,
                upgradeSlots: {
                    "slot1": "U",
                    "slot2": "V",
                    "slot3": "W",
                    "slot4": "X"
                }
            }
        }
    },
    'U': {
        unlocked: false,
        bought: false,
        buyingCosts: {
            "T": 500
        },
        amount: 0,
        productionRate: 1,
        productionInitRate: 1,
        productionRateLevel: 0,
        productionRateInitialCosts: {
            'slot1': 2,
            'slot2': 2,
            'slot3': 2,
            'slot4': 2
        },
        productionSpeed: 50,
        productionInitSpeed: 50,
        productionSpeedLevel: 0,
        productionSpeedInitialCosts: {
            'slot1': 5,
            'slot2': 5,
            'slot3': 5,
            'slot4': 5
        },
        automatedProduction: false,
        automatedProductionCosts: {
            'U': 500
        },
        productionRateUpgrades: {
            25: {
                costsGrowthRate: 1.1,
                functionalityGrowthRate: 1.2,
                upgradeSlots: {
                    "slot1": "U"
                }
            },
            50: {
                costsGrowthRate: 1.2,
                functionalityGrowthRate: 1.1,
                upgradeSlots: {
                    "slot1": "T",
                    "slot2": "U"
                }
            },
            75: {
                costsGrowthRate: 1.225,
                functionalityGrowthRate: 1.1,
                upgradeSlots: {
                    "slot1": "S",
                    "slot2": "T",
                    "slot3": "U"
                }
            },
            100: {
                costsGrowthRate: 1.25,
                functionalityGrowthRate: 1.075,
                upgradeSlots: {
                    "slot1": "R",
                    "slot2": "S",
                    "slot3": "T",
                    "slot4": "U"
                }
            },
            150: {
                costsGrowthRate: 1.275,
                functionalityGrowthRate: 1.06,
                upgradeSlots: {
                    "slot1": "S",
                    "slot2": "T",
                    "slot3": "U",
                    "slot4": "V"
                }
            },
            200: {
                costsGrowthRate: 1.3,
                functionalityGrowthRate: 1.05,
                upgradeSlots: {
                    "slot1": "T",
                    "slot2": "U",
                    "slot3": "V",
                    "slot4": "W"
                }
            },
            250: {
                costsGrowthRate: 1.32,
                functionalityGrowthRate: 1.045,
                upgradeSlots: {
                    "slot1": "U",
                    "slot2": "V",
                    "slot3": "W",
                    "slot4": "X"
                }
            },
            300: {
                costsGrowthRate: 1.34,
                functionalityGrowthRate: 1.04,
                upgradeSlots: {
                    "slot1": "V",
                    "slot2": "W",
                    "slot3": "X",
                    "slot4": "Y"
                }
            },
            350: {
                costsGrowthRate: 1.36,
                functionalityGrowthRate: 1.035
            }
        },
        productionSpeedUpgrades: {
            10: {
                costsGrowthRate: 1.2,
                functionalityGrowthRate: 1.01,
                upgradeSlots: {
                    "slot1": "U"
                }
            },
            25: {
                costsGrowthRate: 1.25,
                functionalityGrowthRate: 1.005,
                upgradeSlots: {
                    "slot1": "T",
                    "slot2": "U"
                }
            },
            35: {
                costsGrowthRate: 1.35,
                functionalityGrowthRate: 1.009,
                upgradeSlots: {
                    "slot1": "S",
                    "slot2": "T",
                    "slot3": "U"
                }
            },
            50: {
                costsGrowthRate: 1.5,
                functionalityGrowthRate: 1.008,
                upgradeSlots: {
                    "slot1": "R",
                    "slot2": "S",
                    "slot3": "T",
                    "slot4": "U"
                }
            },
            65: {
                costsGrowthRate: 1.3,
                functionalityGrowthRate: 1.006,
                upgradeSlots: {
                    "slot1": "S",
                    "slot2": "T",
                    "slot3": "U",
                    "slot4": "V"
                }
            },
            80: {
                costsGrowthRate: 1.17,
                functionalityGrowthRate: 1.006,
                upgradeSlots: {
                    "slot1": "T",
                    "slot2": "U",
                    "slot3": "V",
                    "slot4": "W"
                }
            },
            95: {
                costsGrowthRate: 1.12,
                functionalityGrowthRate: 1.004,
                upgradeSlots: {
                    "slot1": "U",
                    "slot2": "V",
                    "slot3": "W",
                    "slot4": "X"
                }
            },
            100: {
                costsGrowthRate: 1.07,
                functionalityGrowthRate: 1.004,
                upgradeSlots: {
                    "slot1": "V",
                    "slot2": "W",
                    "slot3": "X",
                    "slot4": "Y"
                }
            }
        }
    },
    'V': {
        unlocked: false,
        bought: false,
        buyingCosts: {
            "U": 500
        },
        amount: 0,
        productionRate: 1,
        productionInitRate: 1,
        productionRateLevel: 0,
        productionRateInitialCosts: {
            'slot1': 2,
            'slot2': 2,
            'slot3': 2,
            'slot4': 2
        },
        productionSpeed: 60,
        productionInitSpeed: 60,
        productionSpeedLevel: 0,
        productionSpeedInitialCosts: {
            'slot1': 5,
            'slot2': 5,
            'slot3': 5,
            'slot4': 5
        },
        automatedProduction: false,
        automatedProductionCosts: {
            'V': 500
        },
        productionRateUpgrades: {
            25: {
                costsGrowthRate: 1.1,
                functionalityGrowthRate: 1.2,
                upgradeSlots: {
                    "slot1": "V"
                }
            },
            50: {
                costsGrowthRate: 1.2,
                functionalityGrowthRate: 1.1,
                upgradeSlots: {
                    "slot1": "U",
                    "slot2": "V"
                }
            },
            75: {
                costsGrowthRate: 1.225,
                functionalityGrowthRate: 1.1,
                upgradeSlots: {
                    "slot1": "T",
                    "slot2": "U",
                    "slot3": "V"
                }
            },
            100: {
                costsGrowthRate: 1.25,
                functionalityGrowthRate: 1.075,
                upgradeSlots: {
                    "slot1": "S",
                    "slot2": "T",
                    "slot3": "U",
                    "slot4": "V"
                }
            },
            150: {
                costsGrowthRate: 1.275,
                functionalityGrowthRate: 1.06,
                upgradeSlots: {
                    "slot1": "T",
                    "slot2": "U",
                    "slot3": "V",
                    "slot4": "W"
                }
            },
            200: {
                costsGrowthRate: 1.3,
                functionalityGrowthRate: 1.05,
                upgradeSlots: {
                    "slot1": "U",
                    "slot2": "V",
                    "slot3": "W",
                    "slot4": "X"
                }
            },
            250: {
                costsGrowthRate: 1.32,
                functionalityGrowthRate: 1.045,
                upgradeSlots: {
                    "slot1": "V",
                    "slot2": "W",
                    "slot3": "X",
                    "slot4": "Y"
                }
            },
            300: {
                costsGrowthRate: 1.34,
                functionalityGrowthRate: 1.04,
                upgradeSlots: {
                    "slot1": "W",
                    "slot2": "X",
                    "slot3": "Y",
                    "slot4": "Z"
                }
            },
            350: {
                costsGrowthRate: 1.36,
                functionalityGrowthRate: 1.035
            }
        },
        productionSpeedUpgrades: {
            10: {
                costsGrowthRate: 1.2,
                functionalityGrowthRate: 1.01,
                upgradeSlots: {
                    "slot1": "V"
                }
            },
            25: {
                costsGrowthRate: 1.25,
                functionalityGrowthRate: 1.005,
                upgradeSlots: {
                    "slot1": "U",
                    "slot2": "V"
                }
            },
            35: {
                costsGrowthRate: 1.35,
                functionalityGrowthRate: 1.009,
                upgradeSlots: {
                    "slot1": "T",
                    "slot2": "U",
                    "slot3": "V"
                }
            },
            50: {
                costsGrowthRate: 1.5,
                functionalityGrowthRate: 1.008,
                upgradeSlots: {
                    "slot1": "S",
                    "slot2": "T",
                    "slot3": "U",
                    "slot4": "V"
                }
            },
            65: {
                costsGrowthRate: 1.3,
                functionalityGrowthRate: 1.006,
                upgradeSlots: {
                    "slot1": "T",
                    "slot2": "U",
                    "slot3": "V",
                    "slot4": "W"
                }
            },
            80: {
                costsGrowthRate: 1.17,
                functionalityGrowthRate: 1.006,
                upgradeSlots: {
                    "slot1": "U",
                    "slot2": "V",
                    "slot3": "W",
                    "slot4": "X"
                }
            },
            95: {
                costsGrowthRate: 1.12,
                functionalityGrowthRate: 1.004,
                upgradeSlots: {
                    "slot1": "V",
                    "slot2": "W",
                    "slot3": "X",
                    "slot4": "Y"
                }
            },
            100: {
                costsGrowthRate: 1.07,
                functionalityGrowthRate: 1.004,
                upgradeSlots: {
                    "slot1": "W",
                    "slot2": "X",
                    "slot3": "Y",
                    "slot4": "Z"
                }
            }
        }
    },
    'W': {
        unlocked: false,
        bought: false,
        buyingCosts: {
            "V": 500
        },
        amount: 0,
        productionRate: 1,
        productionInitRate: 1,
        productionRateLevel: 0,
        productionRateInitialCosts: {
            'slot1': 2,
            'slot2': 2,
            'slot3': 2,
            'slot4': 2
        },
        productionSpeed: 90,
        productionInitSpeed: 90,
        productionSpeedLevel: 0,
        productionSpeedInitialCosts: {
            'slot1': 5,
            'slot2': 5,
            'slot3': 5,
            'slot4': 5
        },
        automatedProduction: false,
        automatedProductionCosts: {
            'W': 500
        },
        productionRateUpgrades: {
            25: {
                costsGrowthRate: 1.1,
                functionalityGrowthRate: 1.2,
                upgradeSlots: {
                    "slot1": "W"
                }
            },
            50: {
                costsGrowthRate: 1.2,
                functionalityGrowthRate: 1.1,
                upgradeSlots: {
                    "slot1": "V",
                    "slot2": "W"
                }
            },
            75: {
                costsGrowthRate: 1.225,
                functionalityGrowthRate: 1.1,
                upgradeSlots: {
                    "slot1": "U",
                    "slot2": "V",
                    "slot3": "W"
                }
            },
            100: {
                costsGrowthRate: 1.25,
                functionalityGrowthRate: 1.075,
                upgradeSlots: {
                    "slot1": "T",
                    "slot2": "U",
                    "slot3": "V",
                    "slot4": "W"
                }
            },
            150: {
                costsGrowthRate: 1.275,
                functionalityGrowthRate: 1.06,
                upgradeSlots: {
                    "slot1": "U",
                    "slot2": "V",
                    "slot3": "W",
                    "slot4": "X"
                }
            },
            200: {
                costsGrowthRate: 1.3,
                functionalityGrowthRate: 1.05,
                upgradeSlots: {
                    "slot1": "V",
                    "slot2": "W",
                    "slot3": "X",
                    "slot4": "Y"
                }
            },
            250: {
                costsGrowthRate: 1.32,
                functionalityGrowthRate: 1.045,
                upgradeSlots: {
                    "slot1": "W",
                    "slot2": "X",
                    "slot3": "Y",
                    "slot4": "Z"
                }
            },
            300: {
                costsGrowthRate: 1.34,
                functionalityGrowthRate: 1.04,
                upgradeSlots: {
                    "slot1": "X",
                    "slot2": "Y",
                    "slot3": "Z"
                }
            },
            350: {
                costsGrowthRate: 1.36,
                functionalityGrowthRate: 1.035
            }
        },
        productionSpeedUpgrades: {
            10: {
                costsGrowthRate: 1.2,
                functionalityGrowthRate: 1.01,
                upgradeSlots: {
                    "slot1": "W"
                }
            },
            25: {
                costsGrowthRate: 1.25,
                functionalityGrowthRate: 1.005,
                upgradeSlots: {
                    "slot1": "V",
                    "slot2": "W"
                }
            },
            35: {
                costsGrowthRate: 1.35,
                functionalityGrowthRate: 1.009,
                upgradeSlots: {
                    "slot1": "U",
                    "slot2": "V",
                    "slot3": "W"
                }
            },
            50: {
                costsGrowthRate: 1.5,
                functionalityGrowthRate: 1.008,
                upgradeSlots: {
                    "slot1": "T",
                    "slot2": "U",
                    "slot3": "V",
                    "slot4": "W"
                }
            },
            65: {
                costsGrowthRate: 1.3,
                functionalityGrowthRate: 1.006,
                upgradeSlots: {
                    "slot1": "U",
                    "slot2": "V",
                    "slot3": "W",
                    "slot4": "X"
                }
            },
            80: {
                costsGrowthRate: 1.17,
                functionalityGrowthRate: 1.006,
                upgradeSlots: {
                    "slot1": "V",
                    "slot2": "W",
                    "slot3": "X",
                    "slot4": "Y"
                }
            },
            95: {
                costsGrowthRate: 1.12,
                functionalityGrowthRate: 1.004,
                upgradeSlots: {
                    "slot1": "W",
                    "slot2": "X",
                    "slot3": "Y",
                    "slot4": "Z"
                }
            },
            100: {
                costsGrowthRate: 1.07,
                functionalityGrowthRate: 1.004,
                upgradeSlots: {
                    "slot1": "X",
                    "slot2": "Y",
                    "slot3": "Z"
                }
            }
        }
    },
    'X': {
        unlocked: false,
        bought: false,
        buyingCosts: {
            "W": 500
        },
        amount: 0,
        productionRate: 1,
        productionInitRate: 1,
        productionRateLevel: 0,
        productionRateInitialCosts: {
            'slot1': 2,
            'slot2': 2,
            'slot3': 2,
            'slot4': 2
        },
        productionSpeed: 150,
        productionInitSpeed: 150,
        productionSpeedLevel: 0,
        productionSpeedInitialCosts: {
            'slot1': 5,
            'slot2': 5,
            'slot3': 5,
            'slot4': 5
        },
        automatedProduction: false,
        automatedProductionCosts: {
            'X': 500
        },
        productionRateUpgrades: {
            25: {
                costsGrowthRate: 1.1,
                functionalityGrowthRate: 1.2,
                upgradeSlots: {
                    "slot1": "X"
                }
            },
            50: {
                costsGrowthRate: 1.2,
                functionalityGrowthRate: 1.1,
                upgradeSlots: {
                    "slot1": "W",
                    "slot2": "X"
                }
            },
            75: {
                costsGrowthRate: 1.225,
                functionalityGrowthRate: 1.1,
                upgradeSlots: {
                    "slot1": "V",
                    "slot2": "W",
                    "slot3": "X"
                }
            },
            100: {
                costsGrowthRate: 1.25,
                functionalityGrowthRate: 1.075,
                upgradeSlots: {
                    "slot1": "U",
                    "slot2": "V",
                    "slot3": "W",
                    "slot4": "X"
                }
            },
            150: {
                costsGrowthRate: 1.275,
                functionalityGrowthRate: 1.06,
                upgradeSlots: {
                    "slot1": "V",
                    "slot2": "W",
                    "slot3": "X",
                    "slot4": "Y"
                }
            },
            200: {
                costsGrowthRate: 1.3,
                functionalityGrowthRate: 1.05,
                upgradeSlots: {
                    "slot1": "W",
                    "slot2": "X",
                    "slot3": "Y",
                    "slot4": "Z"
                }
            },
            250: {
                costsGrowthRate: 1.32,
                functionalityGrowthRate: 1.045,
                upgradeSlots: {
                    "slot1": "X",
                    "slot2": "Y",
                    "slot3": "Z"
                }
            },
            300: {
                costsGrowthRate: 1.34,
                functionalityGrowthRate: 1.04,
                upgradeSlots: {
                    "slot1": "Y",
                    "slot2": "Z"
                }
            },
            350: {
                costsGrowthRate: 1.36,
                functionalityGrowthRate: 1.035
            }
        },
        productionSpeedUpgrades: {
            10: {
                costsGrowthRate: 1.2,
                functionalityGrowthRate: 1.01,
                upgradeSlots: {
                    "slot1": "X"
                }
            },
            25: {
                costsGrowthRate: 1.25,
                functionalityGrowthRate: 1.005,
                upgradeSlots: {
                    "slot1": "W",
                    "slot2": "X"
                }
            },
            35: {
                costsGrowthRate: 1.35,
                functionalityGrowthRate: 1.009,
                upgradeSlots: {
                    "slot1": "V",
                    "slot2": "W",
                    "slot3": "X"
                }
            },
            50: {
                costsGrowthRate: 1.5,
                functionalityGrowthRate: 1.008,
                upgradeSlots: {
                    "slot1": "U",
                    "slot2": "V",
                    "slot3": "W",
                    "slot4": "X"
                }
            },
            65: {
                costsGrowthRate: 1.3,
                functionalityGrowthRate: 1.006,
                upgradeSlots: {
                    "slot1": "V",
                    "slot2": "W",
                    "slot3": "X",
                    "slot4": "Y"
                }
            },
            80: {
                costsGrowthRate: 1.17,
                functionalityGrowthRate: 1.006,
                upgradeSlots: {
                    "slot1": "W",
                    "slot2": "X",
                    "slot3": "Y",
                    "slot4": "Z"
                }
            },
            95: {
                costsGrowthRate: 1.12,
                functionalityGrowthRate: 1.004,
                upgradeSlots: {
                    "slot1": "X",
                    "slot2": "Y",
                    "slot3": "Z"
                }
            },
            100: {
                costsGrowthRate: 1.07,
                functionalityGrowthRate: 1.004,
                upgradeSlots: {
                    "slot1": "Y",
                    "slot2": "Z"
                }
            }
        }
    },
    'Y': {
        unlocked: false,
        bought: false,
        buyingCosts: {
            "X": 500
        },
        amount: 0,
        productionRate: 1,
        productionInitRate: 1,
        productionRateLevel: 0,
        productionRateInitialCosts: {
            'slot1': 2,
            'slot2': 2,
            'slot3': 2,
            'slot4': 2
        },
        productionSpeed: 300,
        productionInitSpeed: 300,
        productionSpeedLevel: 0,
        productionSpeedInitialCosts: {
            'slot1': 5,
            'slot2': 5,
            'slot3': 5,
            'slot4': 5
        },
        automatedProduction: false,
        automatedProductionCosts: {
            'Y': 500
        },
        productionRateUpgrades: {
            25: {
                costsGrowthRate: 1.1,
                functionalityGrowthRate: 1.2,
                upgradeSlots: {
                    "slot1": "Y"
                }
            },
            50: {
                costsGrowthRate: 1.2,
                functionalityGrowthRate: 1.1,
                upgradeSlots: {
                    "slot1": "X",
                    "slot2": "Y"
                }
            },
            75: {
                costsGrowthRate: 1.225,
                functionalityGrowthRate: 1.1,
                upgradeSlots: {
                    "slot1": "W",
                    "slot2": "X",
                    "slot3": "Y"
                }
            },
            100: {
                costsGrowthRate: 1.25,
                functionalityGrowthRate: 1.075,
                upgradeSlots: {
                    "slot1": "V",
                    "slot2": "W",
                    "slot3": "X",
                    "slot4": "Y"
                }
            },
            150: {
                costsGrowthRate: 1.275,
                functionalityGrowthRate: 1.06,
                upgradeSlots: {
                    "slot1": "W",
                    "slot2": "X",
                    "slot3": "Y",
                    "slot4": "Z"
                }
            },
            200: {
                costsGrowthRate: 1.3,
                functionalityGrowthRate: 1.05,
                upgradeSlots: {
                    "slot1": "X",
                    "slot2": "Y",
                    "slot3": "Z"
                }
            },
            250: {
                costsGrowthRate: 1.32,
                functionalityGrowthRate: 1.045,
                upgradeSlots: {
                    "slot1": "Y",
                    "slot2": "Z"
                }
            },
            300: {
                costsGrowthRate: 1.34,
                functionalityGrowthRate: 1.04,
                upgradeSlots: {
                    "slot1": "Z"
                }
            },
            350: {
                costsGrowthRate: 1.36,
                functionalityGrowthRate: 1.035
            }
        },
        productionSpeedUpgrades: {
            10: {
                costsGrowthRate: 1.2,
                functionalityGrowthRate: 1.01,
                upgradeSlots: {
                    "slot1": "Y"
                }
            },
            25: {
                costsGrowthRate: 1.25,
                functionalityGrowthRate: 1.005,
                upgradeSlots: {
                    "slot1": "X",
                    "slot2": "Y"
                }
            },
            35: {
                costsGrowthRate: 1.35,
                functionalityGrowthRate: 1.009,
                upgradeSlots: {
                    "slot1": "W",
                    "slot2": "X",
                    "slot3": "Y"
                }
            },
            50: {
                costsGrowthRate: 1.5,
                functionalityGrowthRate: 1.008,
                upgradeSlots: {
                    "slot1": "V",
                    "slot2": "W",
                    "slot3": "X",
                    "slot4": "Y"
                }
            },
            65: {
                costsGrowthRate: 1.3,
                functionalityGrowthRate: 1.006,
                upgradeSlots: {
                    "slot1": "W",
                    "slot2": "X",
                    "slot3": "Y",
                    "slot4": "Z"
                }
            },
            80: {
                costsGrowthRate: 1.17,
                functionalityGrowthRate: 1.006,
                upgradeSlots: {
                    "slot1": "X",
                    "slot2": "Y",
                    "slot3": "Z"
                }
            },
            95: {
                costsGrowthRate: 1.12,
                functionalityGrowthRate: 1.004,
                upgradeSlots: {
                    "slot1": "Y",
                    "slot2": "Z"
                }
            },
            100: {
                costsGrowthRate: 1.07,
                functionalityGrowthRate: 1.004,
                upgradeSlots: {
                    "slot1": "Z"
                }
            }
        }
    },
    'Z': {
        unlocked: false,
        bought: false,
        buyingCosts: {
            "Y": 500
        },
        amount: 0,
        productionRate: 1,
        productionInitRate: 1,
        productionRateLevel: 0,
        productionRateInitialCosts: {
            'slot1': 2,
            'slot2': 2,
            'slot3': 2,
            'slot4': 2
        },
        productionSpeed: 600,
        productionInitSpeed: 600,
        productionSpeedLevel: 0,
        productionSpeedInitialCosts: {
            'slot1': 5,
            'slot2': 5,
            'slot3': 5,
            'slot4': 5
        },
        automatedProduction: false,
        automatedProductionCosts: {
            'Z': 500
        },
        productionRateUpgrades: {
            25: {
                costsGrowthRate: 1.1,
                functionalityGrowthRate: 1.2,
                upgradeSlots: {
                    "slot1": "Z"
                }
            },
            50: {
                costsGrowthRate: 1.2,
                functionalityGrowthRate: 1.1,
                upgradeSlots: {
                    "slot1": "Y",
                    "slot2": "Z"
                }
            },
            75: {
                costsGrowthRate: 1.225,
                functionalityGrowthRate: 1.1,
                upgradeSlots: {
                    "slot1": "X",
                    "slot2": "Y",
                    "slot3": "Z"
                }
            },
            100: {
                costsGrowthRate: 1.25,
                functionalityGrowthRate: 1.075,
                upgradeSlots: {
                    "slot1": "W",
                    "slot2": "X",
                    "slot3": "Y",
                    "slot4": "Z"
                }
            },
            150: {
                costsGrowthRate: 1.275,
                functionalityGrowthRate: 1.06,
                upgradeSlots: {
                    "slot1": "X",
                    "slot2": "Y",
                    "slot3": "Z"
                }
            },
            200: {
                costsGrowthRate: 1.3,
                functionalityGrowthRate: 1.05,
                upgradeSlots: {
                    "slot1": "Y",
                    "slot2": "Z"
                }
            },
            250: {
                costsGrowthRate: 1.32,
                functionalityGrowthRate: 1.045,
                upgradeSlots: {
                    "slot1": "Z"
                }
            },
            300: {
                costsGrowthRate: 1.34,
                functionalityGrowthRate: 1.04,
                upgradeSlots: {
                    "slot1": "Z"
                }
            },
            350: {
                costsGrowthRate: 1.36,
                functionalityGrowthRate: 1.035
            }
        },
        productionSpeedUpgrades: {
            10: {
                costsGrowthRate: 1.2,
                functionalityGrowthRate: 1.01,
                upgradeSlots: {
                    "slot1": "Z"
                }
            },
            25: {
                costsGrowthRate: 1.25,
                functionalityGrowthRate: 1.005,
                upgradeSlots: {
                    "slot1": "Y",
                    "slot2": "Z"
                }
            },
            35: {
                costsGrowthRate: 1.35,
                functionalityGrowthRate: 1.009,
                upgradeSlots: {
                    "slot1": "X",
                    "slot2": "Y",
                    "slot3": "Z"
                }
            },
            50: {
                costsGrowthRate: 1.5,
                functionalityGrowthRate: 1.008,
                upgradeSlots: {
                    "slot1": "W",
                    "slot2": "X",
                    "slot3": "Y",
                    "slot4": "Z"
                }
            },
            65: {
                costsGrowthRate: 1.3,
                functionalityGrowthRate: 1.006,
                upgradeSlots: {
                    "slot1": "X",
                    "slot2": "Y",
                    "slot3": "Z"
                }
            },
            80: {
                costsGrowthRate: 1.17,
                functionalityGrowthRate: 1.006,
                upgradeSlots: {
                    "slot1": "Y",
                    "slot2": "Z"
                }
            },
            95: {
                costsGrowthRate: 1.12,
                functionalityGrowthRate: 1.004,
                upgradeSlots: {
                    "slot1": "Z"
                }
            },
            100: {
                costsGrowthRate: 1.07,
                functionalityGrowthRate: 1.004,
                upgradeSlots: {
                    "slot1": "Z"
                }
            }
        }
    }
})