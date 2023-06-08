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
                costsGrowthRate: 1.35,
                functionalityGrowthRate: 1.35,
                upgradeSlots: {
                    "slot1": "B",
                    "slot2": "C"
                }
            },
            100: {
                costsGrowthRate: 1.5,
                functionalityGrowthRate: 1.5,
                upgradeSlots: {
                    "slot1": "B",
                    "slot2": "C"
                }
            },
            150: {
                costsGrowthRate: 1.3,
                functionalityGrowthRate: 1.3,
                upgradeSlots: {
                    "slot1": "A",
                    "slot2": "B",
                    "slot3": "C"
                }
            },
            200: {
                costsGrowthRate: 1.17,
                functionalityGrowthRate: 1.17,
                upgradeSlots: {
                    "slot1": "A",
                    "slot2": "B",
                    "slot3": "C",
                    "slot4": "D"
                }
            },
            250: {
                costsGrowthRate: 1.12,
                functionalityGrowthRate: 1.12,
                upgradeSlots: {
                    "slot1": "B",
                    "slot2": "C",
                    "slot3": "D",
                    "slot4": "E"
                }
            },
            300: {
                costsGrowthRate: 1.07,
                functionalityGrowthRate: 1.07,
                upgradeSlots: {
                    "slot1": "C",
                    "slot2": "D",
                    "slot3": "E",
                    "slot4": "F"
                }
            },
            350: {
                costsGrowthRate: 1.03,
                functionalityGrowthRate: 1.03,
            }
        },
        productionSpeedUpgrades: {
            10: {
                costsGrowthRate: 1.2,
                functionalityGrowthRate: 1.07,
                upgradeSlots: {
                    "slot1": "B"
                }
            },
            25: {
                costsGrowthRate: 1.25,
                functionalityGrowthRate: 1.04,
                upgradeSlots: {
                    "slot1": "B"
                }
            },
            35: {
                costsGrowthRate: 1.35,
                functionalityGrowthRate: 1.02,
                upgradeSlots: {
                    "slot1": "B",
                    "slot2": "C"
                }
            },
            50: {
                costsGrowthRate: 1.5,
                functionalityGrowthRate: 1.05,
                upgradeSlots: {
                    "slot1": "B",
                    "slot2": "C"
                }
            },
            65: {
                costsGrowthRate: 1.3,
                functionalityGrowthRate: 1.01,
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
                functionalityGrowthRate: 1.002,
                upgradeSlots: {
                    "slot1": "B",
                    "slot2": "C",
                    "slot3": "D",
                    "slot4": "E"
                }
            },
            100: {
                costsGrowthRate: 1.07,
                functionalityGrowthRate: 1.001,
                upgradeSlots: {
                    "slot1": "C",
                    "slot2": "D",
                    "slot3": "E",
                    "slot4": "F"
                }
            },
            1000000000: {
                costsGrowthRate: 1.03,
                functionalityGrowthRate: 1.0008,
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
            'slot1': 5,
            'slot2': 5,
            'slot3': 5,
            'slot4': 5

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
            'C': 100
        },
        productionRateUpgrades: {
            10: {
                costsGrowthRate: 1.2,
                functionalityGrowthRate: 1.2,
                upgradeSlots: {
                    "slot1": "C"
                }
            },
            25: {
                costsGrowthRate: 1.25,
                functionalityGrowthRate: 1.25,
                upgradeSlots: {
                    "slot1": "B",
                    "slot2": "C"
                }
            },
            35: {
                costsGrowthRate: 1.35,
                functionalityGrowthRate: 1.35,
                upgradeSlots: {
                    "slot1": "B",
                    "slot2": "C"
                }
            },
            50: {
                costsGrowthRate: 1.5,
                functionalityGrowthRate: 1.5,
                upgradeSlots: {
                    "slot1": "A",
                    "slot2": "B",
                    "slot3": "C"
                }
            },
            65: {
                costsGrowthRate: 1.3,
                functionalityGrowthRate: 1.3,
                upgradeSlots: {
                    "slot1": "A",
                    "slot2": "B",
                    "slot3": "C"
                }
            },
            80: {
                costsGrowthRate: 1.17,
                functionalityGrowthRate: 1.17,
                upgradeSlots: {
                    "slot1": "A",
                    "slot2": "B",
                    "slot3": "C",
                    "slot4": "D"
                }
            },
            95: {
                costsGrowthRate: 1.12,
                functionalityGrowthRate: 1.12,
                upgradeSlots: {
                    "slot1": "B",
                    "slot2": "C",
                    "slot3": "D",
                    "slot4": "E"
                }
            },
            100: {
                costsGrowthRate: 1.07,
                functionalityGrowthRate: 1.07,
                upgradeSlots: {
                    "slot1": "C",
                    "slot2": "D",
                    "slot3": "E",
                    "slot4": "F"
                }
            },
            1000000000: {
                costsGrowthRate: 1.03,
                functionalityGrowthRate: 1.03,
            }
        },
        productionSpeedUpgrades: {
            10: {
                costsGrowthRate: 1.2,
                functionalityGrowthRate: 1.07,
                upgradeSlots: {
                    "slot1": "C"
                }
            },
            25: {
                costsGrowthRate: 1.25,
                functionalityGrowthRate: 1.04,
                upgradeSlots: {
                    "slot1": "B",
                    "slot2": "C"
                }
            },
            35: {
                costsGrowthRate: 1.35,
                functionalityGrowthRate: 1.02,
                upgradeSlots: {
                    "slot1": "B",
                    "slot2": "C"
                }
            },
            50: {
                costsGrowthRate: 1.5,
                functionalityGrowthRate: 1.05,
                upgradeSlots: {
                    "slot1": "A",
                    "slot2": "B",
                    "slot3": "C"
                }
            },
            65: {
                costsGrowthRate: 1.3,
                functionalityGrowthRate: 1.01,
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
                functionalityGrowthRate: 1.002,
                upgradeSlots: {
                    "slot1": "B",
                    "slot2": "C",
                    "slot3": "D",
                    "slot4": "E"
                }
            },
            100: {
                costsGrowthRate: 1.07,
                functionalityGrowthRate: 1.001,
                upgradeSlots: {
                    "slot1": "C",
                    "slot2": "D",
                    "slot3": "E",
                    "slot4": "F"
                }
            },
            1000000000: {
                costsGrowthRate: 1.03,
                functionalityGrowthRate: 1.0008,
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
            'slot1': 5,
            'slot2': 5,
            'slot3': 5,
            'slot4': 5

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
            'D': 100
        },
        productionRateUpgrades: {
            10: {
                costsGrowthRate: 1.2,
                functionalityGrowthRate: 1.2,
                upgradeSlots: {
                    "slot1": "D"
                }
            },
            25: {
                costsGrowthRate: 1.25,
                functionalityGrowthRate: 1.25,
                upgradeSlots: {
                    "slot1": "C",
                    "slot2": "D"
                }
            },
            35: {
                costsGrowthRate: 1.35,
                functionalityGrowthRate: 1.35,
                upgradeSlots: {
                    "slot1": "B",
                    "slot2": "C",
                    "slot3": "D"
                }
            },
            50: {
                costsGrowthRate: 1.5,
                functionalityGrowthRate: 1.5,
                upgradeSlots: {
                    "slot1": "A",
                    "slot2": "B",
                    "slot3": "C",
                    "slot4": "D"
                }
            },
            65: {
                costsGrowthRate: 1.3,
                functionalityGrowthRate: 1.3,
                upgradeSlots: {
                    "slot1": "B",
                    "slot2": "C",
                    "slot3": "D",
                    "slot4": "E"
                }
            },
            80: {
                costsGrowthRate: 1.17,
                functionalityGrowthRate: 1.17,
                upgradeSlots: {
                    "slot1": "C",
                    "slot2": "D",
                    "slot3": "E",
                    "slot4": "F"
                }
            },
            95: {
                costsGrowthRate: 1.12,
                functionalityGrowthRate: 1.12,
                upgradeSlots: {
                    "slot1": "D",
                    "slot2": "E",
                    "slot3": "F",
                    "slot4": "G"
                }
            },
            100: {
                costsGrowthRate: 1.07,
                functionalityGrowthRate: 1.07,
                upgradeSlots: {
                    "slot1": "E",
                    "slot2": "F",
                    "slot3": "G",
                    "slot4": "H"
                }
            },
            1000000000: {
                costsGrowthRate: 1.03,
                functionalityGrowthRate: 1.03,
            }
        },
        productionSpeedUpgrades: {
            10: {
                costsGrowthRate: 1.2,
                functionalityGrowthRate: 1.07,
                upgradeSlots: {
                    "slot1": "D"
                }
            },
            25: {
                costsGrowthRate: 1.25,
                functionalityGrowthRate: 1.04,
                upgradeSlots: {
                    "slot1": "C",
                    "slot2": "D"
                }
            },
            35: {
                costsGrowthRate: 1.35,
                functionalityGrowthRate: 1.02,
                upgradeSlots: {
                    "slot1": "B",
                    "slot2": "C",
                    "slot3": "D"
                }
            },
            50: {
                costsGrowthRate: 1.5,
                functionalityGrowthRate: 1.05,
                upgradeSlots: {
                    "slot1": "A",
                    "slot2": "B",
                    "slot3": "C",
                    "slot4": "D"
                }
            },
            65: {
                costsGrowthRate: 1.3,
                functionalityGrowthRate: 1.01,
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
                functionalityGrowthRate: 1.002,
                upgradeSlots: {
                    "slot1": "D",
                    "slot2": "E",
                    "slot3": "F",
                    "slot4": "G"
                }
            },
            100: {
                costsGrowthRate: 1.07,
                functionalityGrowthRate: 1.001,
                upgradeSlots: {
                    "slot1": "E",
                    "slot2": "F",
                    "slot3": "G",
                    "slot4": "H"
                }
            },
            1000000000: {
                costsGrowthRate: 1.03,
                functionalityGrowthRate: 1.0008,
            }
        }
    },
    // 'E': {
    //     unlocked: false,
    //     bought: false,
    //     buyingCosts: {
    //         "D": 500
    //     },
    //     amount: 0,
    //     productionRate: 1,
    //     productionRateLevel: 0,
    //     productionRateInitialCosts: 10,
    //     productionSpeed: 1,
    //     productionSpeedLevel: 0,
    //     productionSpeedInitialCosts: 10,
    //     automatedProduction: false,
    //     automatedProductionCosts: {
    //         'E': 500
    //     },
    //     productionRateUpgrades: {
    //         10: {
    //             growthRate: 1.2,
    //             upgradeSlots: {
    //                 "slot1": "E"
    //             }
    //         },
    //         25: {
    //             growthRate: 1.25,
    //             upgradeSlots: {
    //                 "slot1": "D",
    //                 "slot2": "E"
    //             }
    //         },
    //         35: {
    //             growthRate: 1.25,
    //             upgradeSlots: {
    //                 "slot1": "C",
    //                 "slot2": "D",
    //                 "slot3": "E"
    //             }
    //         },
    //         50: {
    //             growthRate: 1.25,
    //             upgradeSlots: {
    //                 "slot1": "B",
    //                 "slot2": "C",
    //                 "slot3": "D",
    //                 "slot4": "E"
    //             }
    //         },
    //         65: {
    //             growthRate: 1.25,
    //             upgradeSlots: {
    //                 "slot1": "C",
    //                 "slot2": "D",
    //                 "slot3": "E",
    //                 "slot4": "F"
    //             }
    //         },
    //         80: {
    //             growthRate: 1.25,
    //             upgradeSlots: {
    //                 "slot1": "D",
    //                 "slot2": "E",
    //                 "slot3": "F",
    //                 "slot4": "G"
    //             }
    //         },
    //         95: {
    //             growthRate: 1.25,
    //             upgradeSlots: {
    //                 "slot1": "E",
    //                 "slot2": "F",
    //                 "slot3": "G",
    //                 "slot4": "H"
    //             }
    //         },
    //         100: {
    //             growthRate: 1.25,
    //             upgradeSlots: {
    //                 "slot1": "F",
    //                 "slot2": "G",
    //                 "slot3": "H",
    //                 "slot4": "I"
    //             }
    //         },
    //         1000000000: {
    //             growthRate: 1.25
    //         }
    //     },
    //     productionSpeedUpgrades: {
    //         10: {
    //             growthRate: 1.2,
    //             upgradeSlots: {
    //                 "slot1": "E"
    //             }
    //         },
    //         25: {
    //             growthRate: 1.25,
    //             upgradeSlots: {
    //                 "slot1": "D",
    //                 "slot2": "E"
    //             }
    //         },
    //         35: {
    //             growthRate: 1.25,
    //             upgradeSlots: {
    //                 "slot1": "C",
    //                 "slot2": "D",
    //                 "slot3": "E"
    //             }
    //         },
    //         50: {
    //             growthRate: 1.25,
    //             upgradeSlots: {
    //                 "slot1": "B",
    //                 "slot2": "C",
    //                 "slot3": "D",
    //                 "slot4": "E"
    //             }
    //         },
    //         65: {
    //             growthRate: 1.25,
    //             upgradeSlots: {
    //                 "slot1": "C",
    //                 "slot2": "D",
    //                 "slot3": "E",
    //                 "slot4": "F"
    //             }
    //         },
    //         80: {
    //             growthRate: 1.25,
    //             upgradeSlots: {
    //                 "slot1": "D",
    //                 "slot2": "E",
    //                 "slot3": "F",
    //                 "slot4": "G"
    //             }
    //         },
    //         95: {
    //             growthRate: 1.25,
    //             upgradeSlots: {
    //                 "slot1": "E",
    //                 "slot2": "F",
    //                 "slot3": "G",
    //                 "slot4": "H"
    //             }
    //         },
    //         100: {
    //             growthRate: 1.25,
    //             upgradeSlots: {
    //                 "slot1": "F",
    //                 "slot2": "G",
    //                 "slot3": "H",
    //                 "slot4": "I"
    //             }
    //         },
    //         1000000000: {
    //             growthRate: 1.25
    //         }
    //     }
    // },
    // 'F': {
    //     unlocked: false,
    //     bought: false,
    //     buyingCosts: {
    //         "E": 500
    //     },
    //     amount: 0,
    //     productionRate: 1,
    //     productionRateLevel: 0,
    //     productionRateInitialCosts: 10,
    //     productionSpeed: 1,
    //     productionSpeedLevel: 0,
    //     productionSpeedInitialCosts: 10,
    //     automatedProduction: false,
    //     automatedProductionCosts: {
    //         'F': 500
    //     },
    //     productionRateUpgrades: {
    //         10: {
    //             growthRate: 1.2,
    //             upgradeSlots: {
    //                 "slot1": "F"
    //             }
    //         },
    //         25: {
    //             growthRate: 1.25,
    //             upgradeSlots: {
    //                 "slot1": "E",
    //                 "slot2": "F"
    //             }
    //         },
    //         35: {
    //             growthRate: 1.25,
    //             upgradeSlots: {
    //                 "slot1": "D",
    //                 "slot2": "E",
    //                 "slot3": "F"
    //             }
    //         },
    //         50: {
    //             growthRate: 1.25,
    //             upgradeSlots: {
    //                 "slot1": "C",
    //                 "slot2": "D",
    //                 "slot3": "E",
    //                 "slot4": "F"
    //             }
    //         },
    //         65: {
    //             growthRate: 1.25,
    //             upgradeSlots: {
    //                 "slot1": "D",
    //                 "slot2": "E",
    //                 "slot3": "F",
    //                 "slot4": "G"
    //             }
    //         },
    //         80: {
    //             growthRate: 1.25,
    //             upgradeSlots: {
    //                 "slot1": "E",
    //                 "slot2": "F",
    //                 "slot3": "G",
    //                 "slot4": "H"
    //             }
    //         },
    //         95: {
    //             growthRate: 1.25,
    //             upgradeSlots: {
    //                 "slot1": "F",
    //                 "slot2": "G",
    //                 "slot3": "H",
    //                 "slot4": "I"
    //             }
    //         },
    //         100: {
    //             growthRate: 1.25,
    //             upgradeSlots: {
    //                 "slot1": "G",
    //                 "slot2": "H",
    //                 "slot3": "I",
    //                 "slot4": "J"
    //             }
    //         },
    //         1000000000: {
    //             growthRate: 1.25
    //         }
    //     },
    //     productionSpeedUpgrades: {
    //         10: {
    //             growthRate: 1.2,
    //             upgradeSlots: {
    //                 "slot1": "F"
    //             }
    //         },
    //         25: {
    //             growthRate: 1.25,
    //             upgradeSlots: {
    //                 "slot1": "E",
    //                 "slot2": "F"
    //             }
    //         },
    //         35: {
    //             growthRate: 1.25,
    //             upgradeSlots: {
    //                 "slot1": "D",
    //                 "slot2": "E",
    //                 "slot3": "F"
    //             }
    //         },
    //         50: {
    //             growthRate: 1.25,
    //             upgradeSlots: {
    //                 "slot1": "C",
    //                 "slot2": "D",
    //                 "slot3": "E",
    //                 "slot4": "F"
    //             }
    //         },
    //         65: {
    //             growthRate: 1.25,
    //             upgradeSlots: {
    //                 "slot1": "D",
    //                 "slot2": "E",
    //                 "slot3": "F",
    //                 "slot4": "G"
    //             }
    //         },
    //         80: {
    //             growthRate: 1.25,
    //             upgradeSlots: {
    //                 "slot1": "E",
    //                 "slot2": "F",
    //                 "slot3": "G",
    //                 "slot4": "H"
    //             }
    //         },
    //         95: {
    //             growthRate: 1.25,
    //             upgradeSlots: {
    //                 "slot1": "F",
    //                 "slot2": "G",
    //                 "slot3": "H",
    //                 "slot4": "I"
    //             }
    //         },
    //         100: {
    //             growthRate: 1.25,
    //             upgradeSlots: {
    //                 "slot1": "G",
    //                 "slot2": "H",
    //                 "slot3": "I",
    //                 "slot4": "J"
    //             }
    //         },
    //         1000000000: {
    //             growthRate: 1.25
    //         }
    //     }
    // },
    // 'G': {
    //     unlocked: false,
    //     bought: false,
    //     buyingCosts: {
    //         "F": 500
    //     },
    //     amount: 0,
    //     productionRate: 1,
    //     productionRateLevel: 0,
    //     productionRateInitialCosts: 10,
    //     productionSpeed: 1,
    //     productionSpeedLevel: 0,
    //     productionSpeedInitialCosts: 10,
    //     automatedProduction: false,
    //     automatedProductionCosts: {
    //         'G': 500
    //     },
    //     productionRateUpgrades: {
    //         10: {
    //             growthRate: 1.2,
    //             upgradeSlots: {
    //                 "slot1": "G"
    //             }
    //         },
    //         25: {
    //             growthRate: 1.25,
    //             upgradeSlots: {
    //                 "slot1": "F",
    //                 "slot2": "G"
    //             }
    //         },
    //         35: {
    //             growthRate: 1.25,
    //             upgradeSlots: {
    //                 "slot1": "E",
    //                 "slot2": "F",
    //                 "slot3": "G"
    //             }
    //         },
    //         50: {
    //             growthRate: 1.25,
    //             upgradeSlots: {
    //                 "slot1": "D",
    //                 "slot2": "E",
    //                 "slot3": "F",
    //                 "slot4": "G"
    //             }
    //         },
    //         65: {
    //             growthRate: 1.25,
    //             upgradeSlots: {
    //                 "slot1": "E",
    //                 "slot2": "F",
    //                 "slot3": "G",
    //                 "slot4": "H"
    //             }
    //         },
    //         80: {
    //             growthRate: 1.25,
    //             upgradeSlots: {
    //                 "slot1": "F",
    //                 "slot2": "G",
    //                 "slot3": "H",
    //                 "slot4": "I"
    //             }
    //         },
    //         95: {
    //             growthRate: 1.25,
    //             upgradeSlots: {
    //                 "slot1": "G",
    //                 "slot2": "H",
    //                 "slot3": "I",
    //                 "slot4": "J"
    //             }
    //         },
    //         100: {
    //             growthRate: 1.25,
    //             upgradeSlots: {
    //                 "slot1": "H",
    //                 "slot2": "I",
    //                 "slot3": "J",
    //                 "slot4": "K"
    //             }
    //         },
    //         1000000000: {
    //             growthRate: 1.25
    //         }
    //     },
    //     productionSpeedUpgrades: {
    //         10: {
    //             growthRate: 1.2,
    //             upgradeSlots: {
    //                 "slot1": "G"
    //             }
    //         },
    //         25: {
    //             growthRate: 1.25,
    //             upgradeSlots: {
    //                 "slot1": "F",
    //                 "slot2": "G"
    //             }
    //         },
    //         35: {
    //             growthRate: 1.25,
    //             upgradeSlots: {
    //                 "slot1": "E",
    //                 "slot2": "F",
    //                 "slot3": "G"
    //             }
    //         },
    //         50: {
    //             growthRate: 1.25,
    //             upgradeSlots: {
    //                 "slot1": "D",
    //                 "slot2": "E",
    //                 "slot3": "F",
    //                 "slot4": "G"
    //             }
    //         },
    //         65: {
    //             growthRate: 1.25,
    //             upgradeSlots: {
    //                 "slot1": "E",
    //                 "slot2": "F",
    //                 "slot3": "G",
    //                 "slot4": "H"
    //             }
    //         },
    //         80: {
    //             growthRate: 1.25,
    //             upgradeSlots: {
    //                 "slot1": "F",
    //                 "slot2": "G",
    //                 "slot3": "H",
    //                 "slot4": "I"
    //             }
    //         },
    //         95: {
    //             growthRate: 1.25,
    //             upgradeSlots: {
    //                 "slot1": "G",
    //                 "slot2": "H",
    //                 "slot3": "I",
    //                 "slot4": "J"
    //             }
    //         },
    //         100: {
    //             growthRate: 1.25,
    //             upgradeSlots: {
    //                 "slot1": "H",
    //                 "slot2": "I",
    //                 "slot3": "J",
    //                 "slot4": "K"
    //             }
    //         },
    //         1000000000: {
    //             growthRate: 1.25
    //         }
    //     }
    // },
    // 'H': {
    //     unlocked: false,
    //     bought: false,
    //     buyingCosts: {
    //         "G": 500
    //     },
    //     amount: 0,
    //     productionRate: 1,
    //     productionRateLevel: 0,
    //     productionRateInitialCosts: 10,
    //     productionSpeed: 1,
    //     productionSpeedLevel: 0,
    //     productionSpeedInitialCosts: 10,
    //     automatedProduction: false,
    //     automatedProductionCosts: {
    //         'H': 500
    //     },
    //     productionRateUpgrades: {
    //         10: {
    //             growthRate: 1.2,
    //             upgradeSlots: {
    //                 "slot1": "H"
    //             }
    //         },
    //         25: {
    //             growthRate: 1.25,
    //             upgradeSlots: {
    //                 "slot1": "G",
    //                 "slot2": "H"
    //             }
    //         },
    //         35: {
    //             growthRate: 1.25,
    //             upgradeSlots: {
    //                 "slot1": "F",
    //                 "slot2": "G",
    //                 "slot3": "H"
    //             }
    //         },
    //         50: {
    //             growthRate: 1.25,
    //             upgradeSlots: {
    //                 "slot1": "E",
    //                 "slot2": "F",
    //                 "slot3": "G",
    //                 "slot4": "H"
    //             }
    //         },
    //         65: {
    //             growthRate: 1.25,
    //             upgradeSlots: {
    //                 "slot1": "F",
    //                 "slot2": "G",
    //                 "slot3": "H",
    //                 "slot4": "I"
    //             }
    //         },
    //         80: {
    //             growthRate: 1.25,
    //             upgradeSlots: {
    //                 "slot1": "G",
    //                 "slot2": "H",
    //                 "slot3": "I",
    //                 "slot4": "J"
    //             }
    //         },
    //         95: {
    //             growthRate: 1.25,
    //             upgradeSlots: {
    //                 "slot1": "H",
    //                 "slot2": "I",
    //                 "slot3": "J",
    //                 "slot4": "K"
    //             }
    //         },
    //         100: {
    //             growthRate: 1.25,
    //             upgradeSlots: {
    //                 "slot1": "I",
    //                 "slot2": "J",
    //                 "slot3": "K",
    //                 "slot4": "L"
    //             }
    //         },
    //         1000000000: {
    //             growthRate: 1.25
    //         }
    //     },
    //     productionSpeedUpgrades: {
    //         10: {
    //             growthRate: 1.2,
    //             upgradeSlots: {
    //                 "slot1": "H"
    //             }
    //         },
    //         25: {
    //             growthRate: 1.25,
    //             upgradeSlots: {
    //                 "slot1": "G",
    //                 "slot2": "H"
    //             }
    //         },
    //         35: {
    //             growthRate: 1.25,
    //             upgradeSlots: {
    //                 "slot1": "F",
    //                 "slot2": "G",
    //                 "slot3": "H"
    //             }
    //         },
    //         50: {
    //             growthRate: 1.25,
    //             upgradeSlots: {
    //                 "slot1": "E",
    //                 "slot2": "F",
    //                 "slot3": "G",
    //                 "slot4": "H"
    //             }
    //         },
    //         65: {
    //             growthRate: 1.25,
    //             upgradeSlots: {
    //                 "slot1": "F",
    //                 "slot2": "G",
    //                 "slot3": "H",
    //                 "slot4": "I"
    //             }
    //         },
    //         80: {
    //             growthRate: 1.25,
    //             upgradeSlots: {
    //                 "slot1": "G",
    //                 "slot2": "H",
    //                 "slot3": "I",
    //                 "slot4": "J"
    //             }
    //         },
    //         95: {
    //             growthRate: 1.25,
    //             upgradeSlots: {
    //                 "slot1": "H",
    //                 "slot2": "I",
    //                 "slot3": "J",
    //                 "slot4": "K"
    //             }
    //         },
    //         100: {
    //             growthRate: 1.25,
    //             upgradeSlots: {
    //                 "slot1": "I",
    //                 "slot2": "J",
    //                 "slot3": "K",
    //                 "slot4": "L"
    //             }
    //         },
    //         1000000000: {
    //             growthRate: 1.25
    //         }
    //     }
    // },
    // 'I': {
    //     unlocked: false,
    //     bought: false,
    //     buyingCosts: {
    //         "H": 500
    //     },
    //     amount: 0,
    //     productionRate: 1,
    //     productionRateLevel: 0,
    //     productionRateInitialCosts: 10,
    //     productionSpeed: 1,
    //     productionSpeedLevel: 0,
    //     productionSpeedInitialCosts: 10,
    //     automatedProduction: false,
    //     automatedProductionCosts: {
    //         'I': 500
    //     },
    //     productionRateUpgrades: {
    //         10: {
    //             growthRate: 1.2,
    //             upgradeSlots: {
    //                 "slot1": "I"
    //             }
    //         },
    //         25: {
    //             growthRate: 1.25,
    //             upgradeSlots: {
    //                 "slot1": "H",
    //                 "slot2": "I"
    //             }
    //         },
    //         35: {
    //             growthRate: 1.25,
    //             upgradeSlots: {
    //                 "slot1": "G",
    //                 "slot2": "H",
    //                 "slot3": "I"
    //             }
    //         },
    //         50: {
    //             growthRate: 1.25,
    //             upgradeSlots: {
    //                 "slot1": "F",
    //                 "slot2": "G",
    //                 "slot3": "H",
    //                 "slot4": "I"
    //             }
    //         },
    //         65: {
    //             growthRate: 1.25,
    //             upgradeSlots: {
    //                 "slot1": "G",
    //                 "slot2": "H",
    //                 "slot3": "I",
    //                 "slot4": "J"
    //             }
    //         },
    //         80: {
    //             growthRate: 1.25,
    //             upgradeSlots: {
    //                 "slot1": "H",
    //                 "slot2": "I",
    //                 "slot3": "J",
    //                 "slot4": "K"
    //             }
    //         },
    //         95: {
    //             growthRate: 1.25,
    //             upgradeSlots: {
    //                 "slot1": "I",
    //                 "slot2": "J",
    //                 "slot3": "K",
    //                 "slot4": "L"
    //             }
    //         },
    //         100: {
    //             growthRate: 1.25,
    //             upgradeSlots: {
    //                 "slot1": "J",
    //                 "slot2": "K",
    //                 "slot3": "L",
    //                 "slot4": "M"
    //             }
    //         },
    //         1000000000: {
    //             growthRate: 1.25
    //         }
    //     },
    //     productionSpeedUpgrades: {
    //         10: {
    //             growthRate: 1.2,
    //             upgradeSlots: {
    //                 "slot1": "I"
    //             }
    //         },
    //         25: {
    //             growthRate: 1.25,
    //             upgradeSlots: {
    //                 "slot1": "H",
    //                 "slot2": "I"
    //             }
    //         },
    //         35: {
    //             growthRate: 1.25,
    //             upgradeSlots: {
    //                 "slot1": "G",
    //                 "slot2": "H",
    //                 "slot3": "I"
    //             }
    //         },
    //         50: {
    //             growthRate: 1.25,
    //             upgradeSlots: {
    //                 "slot1": "F",
    //                 "slot2": "G",
    //                 "slot3": "H",
    //                 "slot4": "I"
    //             }
    //         },
    //         65: {
    //             growthRate: 1.25,
    //             upgradeSlots: {
    //                 "slot1": "G",
    //                 "slot2": "H",
    //                 "slot3": "I",
    //                 "slot4": "J"
    //             }
    //         },
    //         80: {
    //             growthRate: 1.25,
    //             upgradeSlots: {
    //                 "slot1": "H",
    //                 "slot2": "I",
    //                 "slot3": "J",
    //                 "slot4": "K"
    //             }
    //         },
    //         95: {
    //             growthRate: 1.25,
    //             upgradeSlots: {
    //                 "slot1": "I",
    //                 "slot2": "J",
    //                 "slot3": "K",
    //                 "slot4": "L"
    //             }
    //         },
    //         100: {
    //             growthRate: 1.25,
    //             upgradeSlots: {
    //                 "slot1": "J",
    //                 "slot2": "K",
    //                 "slot3": "L",
    //                 "slot4": "M"
    //             }
    //         },
    //         1000000000: {
    //             growthRate: 1.25
    //         }
    //     }
    // },
    // 'J': {
    //     unlocked: false,
    //     bought: false,
    //     buyingCosts: {
    //         "I": 500
    //     },
    //     amount: 0,
    //     productionRate: 1,
    //     productionRateLevel: 0,
    //     productionRateInitialCosts: 10,
    //     productionSpeed: 1,
    //     productionSpeedLevel: 0,
    //     productionSpeedInitialCosts: 10,
    //     automatedProduction: false,
    //     automatedProductionCosts: {
    //         'J': 500
    //     },
    //     productionRateUpgrades: {
    //         10: {
    //             growthRate: 1.2,
    //             upgradeSlots: {
    //                 "slot1": "J"
    //             }
    //         },
    //         25: {
    //             growthRate: 1.25,
    //             upgradeSlots: {
    //                 "slot1": "I",
    //                 "slot2": "J"
    //             }
    //         },
    //         35: {
    //             growthRate: 1.25,
    //             upgradeSlots: {
    //                 "slot1": "H",
    //                 "slot2": "I",
    //                 "slot3": "J"
    //             }
    //         },
    //         50: {
    //             growthRate: 1.25,
    //             upgradeSlots: {
    //                 "slot1": "G",
    //                 "slot2": "H",
    //                 "slot3": "I",
    //                 "slot4": "J"
    //             }
    //         },
    //         65: {
    //             growthRate: 1.25,
    //             upgradeSlots: {
    //                 "slot1": "H",
    //                 "slot2": "I",
    //                 "slot3": "J",
    //                 "slot4": "K"
    //             }
    //         },
    //         80: {
    //             growthRate: 1.25,
    //             upgradeSlots: {
    //                 "slot1": "I",
    //                 "slot2": "J",
    //                 "slot3": "K",
    //                 "slot4": "L"
    //             }
    //         },
    //         95: {
    //             growthRate: 1.25,
    //             upgradeSlots: {
    //                 "slot1": "J",
    //                 "slot2": "K",
    //                 "slot3": "L",
    //                 "slot4": "M"
    //             }
    //         },
    //         100: {
    //             growthRate: 1.25,
    //             upgradeSlots: {
    //                 "slot1": "K",
    //                 "slot2": "L",
    //                 "slot3": "M",
    //                 "slot4": "N"
    //             }
    //         },
    //         1000000000: {
    //             growthRate: 1.25
    //         }
    //     },
    //     productionSpeedUpgrades: {
    //         10: {
    //             growthRate: 1.2,
    //             upgradeSlots: {
    //                 "slot1": "J"
    //             }
    //         },
    //         25: {
    //             growthRate: 1.25,
    //             upgradeSlots: {
    //                 "slot1": "I",
    //                 "slot2": "J"
    //             }
    //         },
    //         35: {
    //             growthRate: 1.25,
    //             upgradeSlots: {
    //                 "slot1": "H",
    //                 "slot2": "I",
    //                 "slot3": "J"
    //             }
    //         },
    //         50: {
    //             growthRate: 1.25,
    //             upgradeSlots: {
    //                 "slot1": "G",
    //                 "slot2": "H",
    //                 "slot3": "I",
    //                 "slot4": "J"
    //             }
    //         },
    //         65: {
    //             growthRate: 1.25,
    //             upgradeSlots: {
    //                 "slot1": "H",
    //                 "slot2": "I",
    //                 "slot3": "J",
    //                 "slot4": "K"
    //             }
    //         },
    //         80: {
    //             growthRate: 1.25,
    //             upgradeSlots: {
    //                 "slot1": "I",
    //                 "slot2": "J",
    //                 "slot3": "K",
    //                 "slot4": "L"
    //             }
    //         },
    //         95: {
    //             growthRate: 1.25,
    //             upgradeSlots: {
    //                 "slot1": "J",
    //                 "slot2": "K",
    //                 "slot3": "L",
    //                 "slot4": "M"
    //             }
    //         },
    //         100: {
    //             growthRate: 1.25,
    //             upgradeSlots: {
    //                 "slot1": "K",
    //                 "slot2": "L",
    //                 "slot3": "M",
    //                 "slot4": "N"
    //             }
    //         },
    //         1000000000: {
    //             growthRate: 1.25
    //         }
    //     }
    // },
    // 'K': {
    //     unlocked: false,
    //     bought: false,
    //     buyingCosts: {
    //         "J": 500
    //     },
    //     amount: 0,
    //     productionRate: 1,
    //     productionRateLevel: 0,
    //     productionRateInitialCosts: 10,
    //     productionSpeed: 1,
    //     productionSpeedLevel: 0,
    //     productionSpeedInitialCosts: 10,
    //     automatedProduction: false,
    //     automatedProductionCosts: {
    //         'K': 500
    //     },
    //     productionRateUpgrades: {
    //         10: {
    //             growthRate: 1.2,
    //             upgradeSlots: {
    //                 "slot1": "K"
    //             }
    //         },
    //         25: {
    //             growthRate: 1.25,
    //             upgradeSlots: {
    //                 "slot1": "J",
    //                 "slot2": "K"
    //             }
    //         },
    //         35: {
    //             growthRate: 1.25,
    //             upgradeSlots: {
    //                 "slot1": "I",
    //                 "slot2": "J",
    //                 "slot3": "K"
    //             }
    //         },
    //         50: {
    //             growthRate: 1.25,
    //             upgradeSlots: {
    //                 "slot1": "H",
    //                 "slot2": "I",
    //                 "slot3": "J",
    //                 "slot4": "K"
    //             }
    //         },
    //         65: {
    //             growthRate: 1.25,
    //             upgradeSlots: {
    //                 "slot1": "I",
    //                 "slot2": "J",
    //                 "slot3": "K",
    //                 "slot4": "L"
    //             }
    //         },
    //         80: {
    //             growthRate: 1.25,
    //             upgradeSlots: {
    //                 "slot1": "J",
    //                 "slot2": "K",
    //                 "slot3": "L",
    //                 "slot4": "M"
    //             }
    //         },
    //         95: {
    //             growthRate: 1.25,
    //             upgradeSlots: {
    //                 "slot1": "K",
    //                 "slot2": "L",
    //                 "slot3": "M",
    //                 "slot4": "N"
    //             }
    //         },
    //         100: {
    //             growthRate: 1.25,
    //             upgradeSlots: {
    //                 "slot1": "L",
    //                 "slot2": "M",
    //                 "slot3": "N",
    //                 "slot4": "O"
    //             }
    //         },
    //         1000000000: {
    //             growthRate: 1.25
    //         }
    //     },
    //     productionSpeedUpgrades: {
    //         10: {
    //             growthRate: 1.2,
    //             upgradeSlots: {
    //                 "slot1": "K"
    //             }
    //         },
    //         25: {
    //             growthRate: 1.25,
    //             upgradeSlots: {
    //                 "slot1": "J",
    //                 "slot2": "K"
    //             }
    //         },
    //         35: {
    //             growthRate: 1.25,
    //             upgradeSlots: {
    //                 "slot1": "I",
    //                 "slot2": "J",
    //                 "slot3": "K"
    //             }
    //         },
    //         50: {
    //             growthRate: 1.25,
    //             upgradeSlots: {
    //                 "slot1": "H",
    //                 "slot2": "I",
    //                 "slot3": "J",
    //                 "slot4": "K"
    //             }
    //         },
    //         65: {
    //             growthRate: 1.25,
    //             upgradeSlots: {
    //                 "slot1": "I",
    //                 "slot2": "J",
    //                 "slot3": "K",
    //                 "slot4": "L"
    //             }
    //         },
    //         80: {
    //             growthRate: 1.25,
    //             upgradeSlots: {
    //                 "slot1": "J",
    //                 "slot2": "K",
    //                 "slot3": "L",
    //                 "slot4": "M"
    //             }
    //         },
    //         95: {
    //             growthRate: 1.25,
    //             upgradeSlots: {
    //                 "slot1": "K",
    //                 "slot2": "L",
    //                 "slot3": "M",
    //                 "slot4": "N"
    //             }
    //         },
    //         100: {
    //             growthRate: 1.25,
    //             upgradeSlots: {
    //                 "slot1": "L",
    //                 "slot2": "M",
    //                 "slot3": "N",
    //                 "slot4": "O"
    //             }
    //         },
    //         1000000000: {
    //             growthRate: 1.25
    //         }
    //     }
    // },
    // 'L': {
    //     unlocked: false,
    //     bought: false,
    //     buyingCosts: {
    //         "K": 500
    //     },
    //     amount: 0,
    //     productionRate: 1,
    //     productionRateLevel: 0,
    //     productionRateInitialCosts: 10,
    //     productionSpeed: 1,
    //     productionSpeedLevel: 0,
    //     productionSpeedInitialCosts: 10,
    //     automatedProduction: false,
    //     automatedProductionCosts: {
    //         'L': 500
    //     },
    //     productionRateUpgrades: {
    //         10: {
    //             growthRate: 1.2,
    //             upgradeSlots: {
    //                 "slot1": "L"
    //             }
    //         },
    //         25: {
    //             growthRate: 1.25,
    //             upgradeSlots: {
    //                 "slot1": "K",
    //                 "slot2": "L"
    //             }
    //         },
    //         35: {
    //             growthRate: 1.25,
    //             upgradeSlots: {
    //                 "slot1": "J",
    //                 "slot2": "K",
    //                 "slot3": "L"
    //             }
    //         },
    //         50: {
    //             growthRate: 1.25,
    //             upgradeSlots: {
    //                 "slot1": "I",
    //                 "slot2": "J",
    //                 "slot3": "K",
    //                 "slot4": "L"
    //             }
    //         },
    //         65: {
    //             growthRate: 1.25,
    //             upgradeSlots: {
    //                 "slot1": "J",
    //                 "slot2": "K",
    //                 "slot3": "L",
    //                 "slot4": "M"
    //             }
    //         },
    //         80: {
    //             growthRate: 1.25,
    //             upgradeSlots: {
    //                 "slot1": "K",
    //                 "slot2": "L",
    //                 "slot3": "M",
    //                 "slot4": "N"
    //             }
    //         },
    //         95: {
    //             growthRate: 1.25,
    //             upgradeSlots: {
    //                 "slot1": "L",
    //                 "slot2": "M",
    //                 "slot3": "N",
    //                 "slot4": "O"
    //             }
    //         },
    //         100: {
    //             growthRate: 1.25,
    //             upgradeSlots: {
    //                 "slot1": "O",
    //                 "slot2": "P",
    //                 "slot3": "Q",
    //                 "slot4": "R"
    //             }
    //         },
    //         1000000000: {
    //             growthRate: 1.25
    //         }
    //     },
    //     productionSpeedUpgrades: {
    //         10: {
    //             growthRate: 1.2,
    //             upgradeSlots: {
    //                 "slot1": "L"
    //             }
    //         },
    //         25: {
    //             growthRate: 1.25,
    //             upgradeSlots: {
    //                 "slot1": "K",
    //                 "slot2": "L"
    //             }
    //         },
    //         35: {
    //             growthRate: 1.25,
    //             upgradeSlots: {
    //                 "slot1": "J",
    //                 "slot2": "K",
    //                 "slot3": "L"
    //             }
    //         },
    //         50: {
    //             growthRate: 1.25,
    //             upgradeSlots: {
    //                 "slot1": "I",
    //                 "slot2": "J",
    //                 "slot3": "K",
    //                 "slot4": "L"
    //             }
    //         },
    //         65: {
    //             growthRate: 1.25,
    //             upgradeSlots: {
    //                 "slot1": "J",
    //                 "slot2": "K",
    //                 "slot3": "L",
    //                 "slot4": "M"
    //             }
    //         },
    //         80: {
    //             growthRate: 1.25,
    //             upgradeSlots: {
    //                 "slot1": "K",
    //                 "slot2": "L",
    //                 "slot3": "M",
    //                 "slot4": "N"
    //             }
    //         },
    //         95: {
    //             growthRate: 1.25,
    //             upgradeSlots: {
    //                 "slot1": "L",
    //                 "slot2": "M",
    //                 "slot3": "N",
    //                 "slot4": "O"
    //             }
    //         },
    //         100: {
    //             growthRate: 1.25,
    //             upgradeSlots: {
    //                 "slot1": "O",
    //                 "slot2": "P",
    //                 "slot3": "Q",
    //                 "slot4": "R"
    //             }
    //         },
    //         1000000000: {
    //             growthRate: 1.25
    //         }
    //     }
    // },
    // 'M': {
    //     unlocked: false,
    //     bought: false,
    //     buyingCosts: {
    //         "L": 500
    //     },
    //     amount: 0,
    //     productionRate: 1,
    //     productionRateLevel: 0,
    //     productionRateInitialCosts: 10,
    //     productionSpeed: 1,
    //     productionSpeedLevel: 0,
    //     productionSpeedInitialCosts: 10,
    //     automatedProduction: false,
    //     automatedProductionCosts: {
    //         'M': 500
    //     },
    //     productionRateUpgrades: {
    //         10: {
    //             growthRate: 1.2,
    //             upgradeSlots: {
    //                 "slot1": "M"
    //             }
    //         },
    //         25: {
    //             growthRate: 1.25,
    //             upgradeSlots: {
    //                 "slot1": "L",
    //                 "slot2": "M"
    //             }
    //         },
    //         35: {
    //             growthRate: 1.25,
    //             upgradeSlots: {
    //                 "slot1": "K",
    //                 "slot2": "L",
    //                 "slot3": "M"
    //             }
    //         },
    //         50: {
    //             growthRate: 1.25,
    //             upgradeSlots: {
    //                 "slot1": "J",
    //                 "slot2": "K",
    //                 "slot3": "L",
    //                 "slot4": "M"
    //             }
    //         },
    //         65: {
    //             growthRate: 1.25,
    //             upgradeSlots: {
    //                 "slot1": "K",
    //                 "slot2": "L",
    //                 "slot3": "M",
    //                 "slot4": "N"
    //             }
    //         },
    //         80: {
    //             growthRate: 1.25,
    //             upgradeSlots: {
    //                 "slot1": "L",
    //                 "slot2": "M",
    //                 "slot3": "N",
    //                 "slot4": "O"
    //             }
    //         },
    //         95: {
    //             growthRate: 1.25,
    //             upgradeSlots: {
    //                 "slot1": "M",
    //                 "slot2": "N",
    //                 "slot3": "O",
    //                 "slot4": "P"
    //             }
    //         },
    //         100: {
    //             growthRate: 1.25,
    //             upgradeSlots: {
    //                 "slot1": "N",
    //                 "slot2": "O",
    //                 "slot3": "P",
    //                 "slot4": "Q"
    //             }
    //         },
    //         1000000000: {
    //             growthRate: 1.25
    //         }
    //     },
    //     productionSpeedUpgrades: {
    //         10: {
    //             growthRate: 1.2,
    //             upgradeSlots: {
    //                 "slot1": "M"
    //             }
    //         },
    //         25: {
    //             growthRate: 1.25,
    //             upgradeSlots: {
    //                 "slot1": "L",
    //                 "slot2": "M"
    //             }
    //         },
    //         35: {
    //             growthRate: 1.25,
    //             upgradeSlots: {
    //                 "slot1": "K",
    //                 "slot2": "L",
    //                 "slot3": "M"
    //             }
    //         },
    //         50: {
    //             growthRate: 1.25,
    //             upgradeSlots: {
    //                 "slot1": "J",
    //                 "slot2": "K",
    //                 "slot3": "L",
    //                 "slot4": "M"
    //             }
    //         },
    //         65: {
    //             growthRate: 1.25,
    //             upgradeSlots: {
    //                 "slot1": "K",
    //                 "slot2": "L",
    //                 "slot3": "M",
    //                 "slot4": "N"
    //             }
    //         },
    //         80: {
    //             growthRate: 1.25,
    //             upgradeSlots: {
    //                 "slot1": "L",
    //                 "slot2": "M",
    //                 "slot3": "N",
    //                 "slot4": "O"
    //             }
    //         },
    //         95: {
    //             growthRate: 1.25,
    //             upgradeSlots: {
    //                 "slot1": "M",
    //                 "slot2": "N",
    //                 "slot3": "O",
    //                 "slot4": "P"
    //             }
    //         },
    //         100: {
    //             growthRate: 1.25,
    //             upgradeSlots: {
    //                 "slot1": "N",
    //                 "slot2": "O",
    //                 "slot3": "P",
    //                 "slot4": "Q"
    //             }
    //         },
    //         1000000000: {
    //             growthRate: 1.25
    //         }
    //     }
    // },
    // 'N': {
    //     unlocked: false,
    //     bought: false,
    //     buyingCosts: {
    //         "M": 500
    //     },
    //     amount: 0,
    //     productionRate: 1,
    //     productionRateLevel: 0,
    //     productionRateInitialCosts: 10,
    //     productionSpeed: 1,
    //     productionSpeedLevel: 0,
    //     productionSpeedInitialCosts: 10,
    //     automatedProduction: false,
    //     automatedProductionCosts: {
    //         'N': 500
    //     },
    //     productionRateUpgrades: {
    //         10: {
    //             growthRate: 1.2,
    //             upgradeSlots: {
    //                 "slot1": "N"
    //             }
    //         },
    //         25: {
    //             growthRate: 1.25,
    //             upgradeSlots: {
    //                 "slot1": "M",
    //                 "slot2": "N"
    //             }
    //         },
    //         35: {
    //             growthRate: 1.25,
    //             upgradeSlots: {
    //                 "slot1": "L",
    //                 "slot2": "M",
    //                 "slot3": "N"
    //             }
    //         },
    //         50: {
    //             growthRate: 1.25,
    //             upgradeSlots: {
    //                 "slot1": "K",
    //                 "slot2": "L",
    //                 "slot3": "M",
    //                 "slot4": "N"
    //             }
    //         },
    //         65: {
    //             growthRate: 1.25,
    //             upgradeSlots: {
    //                 "slot1": "L",
    //                 "slot2": "M",
    //                 "slot3": "N",
    //                 "slot4": "O"
    //             }
    //         },
    //         80: {
    //             growthRate: 1.25,
    //             upgradeSlots: {
    //                 "slot1": "M",
    //                 "slot2": "N",
    //                 "slot3": "O",
    //                 "slot4": "P"
    //             }
    //         },
    //         95: {
    //             growthRate: 1.25,
    //             upgradeSlots: {
    //                 "slot1": "N",
    //                 "slot2": "O",
    //                 "slot3": "P",
    //                 "slot4": "Q"
    //             }
    //         },
    //         100: {
    //             growthRate: 1.25,
    //             upgradeSlots: {
    //                 "slot1": "O",
    //                 "slot2": "P",
    //                 "slot3": "Q",
    //                 "slot4": "R"
    //             }
    //         },
    //         1000000000: {
    //             growthRate: 1.25
    //         }
    //     },
    //     productionSpeedUpgrades: {
    //         10: {
    //             growthRate: 1.2,
    //             upgradeSlots: {
    //                 "slot1": "N"
    //             }
    //         },
    //         25: {
    //             growthRate: 1.25,
    //             upgradeSlots: {
    //                 "slot1": "M",
    //                 "slot2": "N"
    //             }
    //         },
    //         35: {
    //             growthRate: 1.25,
    //             upgradeSlots: {
    //                 "slot1": "L",
    //                 "slot2": "M",
    //                 "slot3": "N"
    //             }
    //         },
    //         50: {
    //             growthRate: 1.25,
    //             upgradeSlots: {
    //                 "slot1": "K",
    //                 "slot2": "L",
    //                 "slot3": "M",
    //                 "slot4": "N"
    //             }
    //         },
    //         65: {
    //             growthRate: 1.25,
    //             upgradeSlots: {
    //                 "slot1": "L",
    //                 "slot2": "M",
    //                 "slot3": "N",
    //                 "slot4": "O"
    //             }
    //         },
    //         80: {
    //             growthRate: 1.25,
    //             upgradeSlots: {
    //                 "slot1": "M",
    //                 "slot2": "N",
    //                 "slot3": "O",
    //                 "slot4": "P"
    //             }
    //         },
    //         95: {
    //             growthRate: 1.25,
    //             upgradeSlots: {
    //                 "slot1": "N",
    //                 "slot2": "O",
    //                 "slot3": "P",
    //                 "slot4": "Q"
    //             }
    //         },
    //         100: {
    //             growthRate: 1.25,
    //             upgradeSlots: {
    //                 "slot1": "O",
    //                 "slot2": "P",
    //                 "slot3": "Q",
    //                 "slot4": "R"
    //             }
    //         },
    //         1000000000: {
    //             growthRate: 1.25
    //         }
    //     }
    // },
    // 'O': {
    //     unlocked: false,
    //     bought: false,
    //     buyingCosts: {
    //         "N": 500
    //     },
    //     amount: 0,
    //     productionRate: 1,
    //     productionRateLevel: 0,
    //     productionRateInitialCosts: 10,
    //     productionSpeed: 1,
    //     productionSpeedLevel: 0,
    //     productionSpeedInitialCosts: 10,
    //     automatedProduction: false,
    //     automatedProductionCosts: {
    //         'O': 500
    //     },
    //     productionRateUpgrades: {
    //         10: {
    //             growthRate: 1.2,
    //             upgradeSlots: {
    //                 "slot1": "O"
    //             }
    //         },
    //         25: {
    //             growthRate: 1.25,
    //             upgradeSlots: {
    //                 "slot1": "N",
    //                 "slot2": "O"
    //             }
    //         },
    //         35: {
    //             growthRate: 1.25,
    //             upgradeSlots: {
    //                 "slot1": "M",
    //                 "slot2": "N",
    //                 "slot3": "O"
    //             }
    //         },
    //         50: {
    //             growthRate: 1.25,
    //             upgradeSlots: {
    //                 "slot1": "L",
    //                 "slot2": "M",
    //                 "slot3": "N",
    //                 "slot4": "O"
    //             }
    //         },
    //         65: {
    //             growthRate: 1.25,
    //             upgradeSlots: {
    //                 "slot1": "M",
    //                 "slot2": "N",
    //                 "slot3": "O",
    //                 "slot4": "P"
    //             }
    //         },
    //         80: {
    //             growthRate: 1.25,
    //             upgradeSlots: {
    //                 "slot1": "N",
    //                 "slot2": "O",
    //                 "slot3": "P",
    //                 "slot4": "Q"
    //             }
    //         },
    //         95: {
    //             growthRate: 1.25,
    //             upgradeSlots: {
    //                 "slot1": "O",
    //                 "slot2": "P",
    //                 "slot3": "Q",
    //                 "slot4": "R"
    //             }
    //         },
    //         100: {
    //             growthRate: 1.25,
    //             upgradeSlots: {
    //                 "slot1": "P",
    //                 "slot2": "Q",
    //                 "slot3": "R",
    //                 "slot4": "S"
    //             }
    //         },
    //         1000000000: {
    //             growthRate: 1.25
    //         }
    //     },
    //     productionSpeedUpgrades: {
    //         10: {
    //             growthRate: 1.2,
    //             upgradeSlots: {
    //                 "slot1": "O"
    //             }
    //         },
    //         25: {
    //             growthRate: 1.25,
    //             upgradeSlots: {
    //                 "slot1": "N",
    //                 "slot2": "O"
    //             }
    //         },
    //         35: {
    //             growthRate: 1.25,
    //             upgradeSlots: {
    //                 "slot1": "M",
    //                 "slot2": "N",
    //                 "slot3": "O"
    //             }
    //         },
    //         50: {
    //             growthRate: 1.25,
    //             upgradeSlots: {
    //                 "slot1": "L",
    //                 "slot2": "M",
    //                 "slot3": "N",
    //                 "slot4": "O"
    //             }
    //         },
    //         65: {
    //             growthRate: 1.25,
    //             upgradeSlots: {
    //                 "slot1": "M",
    //                 "slot2": "N",
    //                 "slot3": "O",
    //                 "slot4": "P"
    //             }
    //         },
    //         80: {
    //             growthRate: 1.25,
    //             upgradeSlots: {
    //                 "slot1": "N",
    //                 "slot2": "O",
    //                 "slot3": "P",
    //                 "slot4": "Q"
    //             }
    //         },
    //         95: {
    //             growthRate: 1.25,
    //             upgradeSlots: {
    //                 "slot1": "O",
    //                 "slot2": "P",
    //                 "slot3": "Q",
    //                 "slot4": "R"
    //             }
    //         },
    //         100: {
    //             growthRate: 1.25,
    //             upgradeSlots: {
    //                 "slot1": "P",
    //                 "slot2": "Q",
    //                 "slot3": "R",
    //                 "slot4": "S"
    //             }
    //         },
    //         1000000000: {
    //             growthRate: 1.25
    //         }
    //     }
    // },
    // 'P': {
    //     unlocked: false,
    //     bought: false,
    //     buyingCosts: {
    //         "O": 500
    //     },
    //     amount: 0,
    //     productionRate: 1,
    //     productionRateLevel: 0,
    //     productionRateInitialCosts: 10,
    //     productionSpeed: 1,
    //     productionSpeedLevel: 0,
    //     productionSpeedInitialCosts: 10,
    //     automatedProduction: false,
    //     automatedProductionCosts: {
    //         'P': 500
    //     },
    //     productionRateUpgrades: {
    //         10: {
    //             growthRate: 1.2,
    //             upgradeSlots: {
    //                 "slot1": "P"
    //             }
    //         },
    //         25: {
    //             growthRate: 1.25,
    //             upgradeSlots: {
    //                 "slot1": "O",
    //                 "slot2": "P"
    //             }
    //         },
    //         35: {
    //             growthRate: 1.25,
    //             upgradeSlots: {
    //                 "slot1": "N",
    //                 "slot2": "O",
    //                 "slot3": "P"
    //             }
    //         },
    //         50: {
    //             growthRate: 1.25,
    //             upgradeSlots: {
    //                 "slot1": "M",
    //                 "slot2": "N",
    //                 "slot3": "O",
    //                 "slot4": "P"
    //             }
    //         },
    //         65: {
    //             growthRate: 1.25,
    //             upgradeSlots: {
    //                 "slot1": "N",
    //                 "slot2": "O",
    //                 "slot3": "P",
    //                 "slot4": "Q"
    //             }
    //         },
    //         80: {
    //             growthRate: 1.25,
    //             upgradeSlots: {
    //                 "slot1": "O",
    //                 "slot2": "P",
    //                 "slot3": "Q",
    //                 "slot4": "R"
    //             }
    //         },
    //         95: {
    //             growthRate: 1.25,
    //             upgradeSlots: {
    //                 "slot1": "P",
    //                 "slot2": "Q",
    //                 "slot3": "R",
    //                 "slot4": "S"
    //             }
    //         },
    //         100: {
    //             growthRate: 1.25,
    //             upgradeSlots: {
    //                 "slot1": "Q",
    //                 "slot2": "R",
    //                 "slot3": "S",
    //                 "slot4": "T"
    //             }
    //         },
    //         1000000000: {
    //             growthRate: 1.25
    //         }
    //     },
    //     productionSpeedUpgrades: {
    //         10: {
    //             growthRate: 1.2,
    //             upgradeSlots: {
    //                 "slot1": "P"
    //             }
    //         },
    //         25: {
    //             growthRate: 1.25,
    //             upgradeSlots: {
    //                 "slot1": "O",
    //                 "slot2": "P"
    //             }
    //         },
    //         35: {
    //             growthRate: 1.25,
    //             upgradeSlots: {
    //                 "slot1": "N",
    //                 "slot2": "O",
    //                 "slot3": "P"
    //             }
    //         },
    //         50: {
    //             growthRate: 1.25,
    //             upgradeSlots: {
    //                 "slot1": "M",
    //                 "slot2": "N",
    //                 "slot3": "O",
    //                 "slot4": "P"
    //             }
    //         },
    //         65: {
    //             growthRate: 1.25,
    //             upgradeSlots: {
    //                 "slot1": "N",
    //                 "slot2": "O",
    //                 "slot3": "P",
    //                 "slot4": "Q"
    //             }
    //         },
    //         80: {
    //             growthRate: 1.25,
    //             upgradeSlots: {
    //                 "slot1": "O",
    //                 "slot2": "P",
    //                 "slot3": "Q",
    //                 "slot4": "R"
    //             }
    //         },
    //         95: {
    //             growthRate: 1.25,
    //             upgradeSlots: {
    //                 "slot1": "P",
    //                 "slot2": "Q",
    //                 "slot3": "R",
    //                 "slot4": "S"
    //             }
    //         },
    //         100: {
    //             growthRate: 1.25,
    //             upgradeSlots: {
    //                 "slot1": "Q",
    //                 "slot2": "R",
    //                 "slot3": "S",
    //                 "slot4": "T"
    //             }
    //         },
    //         1000000000: {
    //             growthRate: 1.25
    //         }
    //     }
    // },
    // 'Q': {
    //     unlocked: false,
    //     bought: false,
    //     buyingCosts: {
    //         "P": 500
    //     },
    //     amount: 0,
    //     productionRate: 1,
    //     productionRateLevel: 0,
    //     productionRateInitialCosts: 10,
    //     productionSpeed: 1,
    //     productionSpeedLevel: 0,
    //     productionSpeedInitialCosts: 10,
    //     automatedProduction: false,
    //     automatedProductionCosts: {
    //         'Q': 500
    //     },
    //     productionRateUpgrades: {
    //         10: {
    //             growthRate: 1.2,
    //             upgradeSlots: {
    //                 "slot1": "Q"
    //             }
    //         },
    //         25: {
    //             growthRate: 1.25,
    //             upgradeSlots: {
    //                 "slot1": "P",
    //                 "slot2": "Q"
    //             }
    //         },
    //         35: {
    //             growthRate: 1.25,
    //             upgradeSlots: {
    //                 "slot1": "O",
    //                 "slot2": "P",
    //                 "slot3": "Q"
    //             }
    //         },
    //         50: {
    //             growthRate: 1.25,
    //             upgradeSlots: {
    //                 "slot1": "N",
    //                 "slot2": "O",
    //                 "slot3": "P",
    //                 "slot4": "Q"
    //             }
    //         },
    //         65: {
    //             growthRate: 1.25,
    //             upgradeSlots: {
    //                 "slot1": "O",
    //                 "slot2": "P",
    //                 "slot3": "Q",
    //                 "slot4": "R"
    //             }
    //         },
    //         80: {
    //             growthRate: 1.25,
    //             upgradeSlots: {
    //                 "slot1": "P",
    //                 "slot2": "Q",
    //                 "slot3": "R",
    //                 "slot4": "S"
    //             }
    //         },
    //         95: {
    //             growthRate: 1.25,
    //             upgradeSlots: {
    //                 "slot1": "Q",
    //                 "slot2": "R",
    //                 "slot3": "S",
    //                 "slot4": "T"
    //             }
    //         },
    //         100: {
    //             growthRate: 1.25,
    //             upgradeSlots: {
    //                 "slot1": "R",
    //                 "slot2": "S",
    //                 "slot3": "T",
    //                 "slot4": "U"
    //             }
    //         },
    //         1000000000: {
    //             growthRate: 1.25
    //         }
    //     },
    //     productionSpeedUpgrades: {
    //         10: {
    //             growthRate: 1.2,
    //             upgradeSlots: {
    //                 "slot1": "Q"
    //             }
    //         },
    //         25: {
    //             growthRate: 1.25,
    //             upgradeSlots: {
    //                 "slot1": "P",
    //                 "slot2": "Q"
    //             }
    //         },
    //         35: {
    //             growthRate: 1.25,
    //             upgradeSlots: {
    //                 "slot1": "O",
    //                 "slot2": "P",
    //                 "slot3": "Q"
    //             }
    //         },
    //         50: {
    //             growthRate: 1.25,
    //             upgradeSlots: {
    //                 "slot1": "N",
    //                 "slot2": "O",
    //                 "slot3": "P",
    //                 "slot4": "Q"
    //             }
    //         },
    //         65: {
    //             growthRate: 1.25,
    //             upgradeSlots: {
    //                 "slot1": "O",
    //                 "slot2": "P",
    //                 "slot3": "Q",
    //                 "slot4": "R"
    //             }
    //         },
    //         80: {
    //             growthRate: 1.25,
    //             upgradeSlots: {
    //                 "slot1": "P",
    //                 "slot2": "Q",
    //                 "slot3": "R",
    //                 "slot4": "S"
    //             }
    //         },
    //         95: {
    //             growthRate: 1.25,
    //             upgradeSlots: {
    //                 "slot1": "Q",
    //                 "slot2": "R",
    //                 "slot3": "S",
    //                 "slot4": "T"
    //             }
    //         },
    //         100: {
    //             growthRate: 1.25,
    //             upgradeSlots: {
    //                 "slot1": "R",
    //                 "slot2": "S",
    //                 "slot3": "T",
    //                 "slot4": "U"
    //             }
    //         },
    //         1000000000: {
    //             growthRate: 1.25
    //         }
    //     }
    // },
    // 'R': {
    //     unlocked: false,
    //     bought: false,
    //     buyingCosts: {
    //         "Q": 500
    //     },
    //     amount: 0,
    //     productionRate: 1,
    //     productionRateLevel: 0,
    //     productionRateInitialCosts: 10,
    //     productionSpeed: 1,
    //     productionSpeedLevel: 0,
    //     productionSpeedInitialCosts: 10,
    //     automatedProduction: false,
    //     automatedProductionCosts: {
    //         'R': 500
    //     },
    //     productionRateUpgrades: {
    //         10: {
    //             growthRate: 1.2,
    //             upgradeSlots: {
    //                 "slot1": "R"
    //             }
    //         },
    //         25: {
    //             growthRate: 1.25,
    //             upgradeSlots: {
    //                 "slot1": "Q",
    //                 "slot2": "R"
    //             }
    //         },
    //         35: {
    //             growthRate: 1.25,
    //             upgradeSlots: {
    //                 "slot1": "P",
    //                 "slot2": "Q",
    //                 "slot3": "R"
    //             }
    //         },
    //         50: {
    //             growthRate: 1.25,
    //             upgradeSlots: {
    //                 "slot1": "O",
    //                 "slot2": "P",
    //                 "slot3": "Q",
    //                 "slot4": "R"
    //             }
    //         },
    //         65: {
    //             growthRate: 1.25,
    //             upgradeSlots: {
    //                 "slot1": "P",
    //                 "slot2": "Q",
    //                 "slot3": "R",
    //                 "slot4": "S"
    //             }
    //         },
    //         80: {
    //             growthRate: 1.25,
    //             upgradeSlots: {
    //                 "slot1": "Q",
    //                 "slot2": "R",
    //                 "slot3": "S",
    //                 "slot4": "T"
    //             }
    //         },
    //         95: {
    //             growthRate: 1.25,
    //             upgradeSlots: {
    //                 "slot1": "R",
    //                 "slot2": "S",
    //                 "slot3": "T",
    //                 "slot4": "U"
    //             }
    //         },
    //         100: {
    //             growthRate: 1.25,
    //             upgradeSlots: {
    //                 "slot1": "S",
    //                 "slot2": "T",
    //                 "slot3": "U",
    //                 "slot4": "V"
    //             }
    //         },
    //         1000000000: {
    //             growthRate: 1.25
    //         }
    //     },
    //     productionSpeedUpgrades: {
    //         10: {
    //             growthRate: 1.2,
    //             upgradeSlots: {
    //                 "slot1": "R"
    //             }
    //         },
    //         25: {
    //             growthRate: 1.25,
    //             upgradeSlots: {
    //                 "slot1": "Q",
    //                 "slot2": "R"
    //             }
    //         },
    //         35: {
    //             growthRate: 1.25,
    //             upgradeSlots: {
    //                 "slot1": "P",
    //                 "slot2": "Q",
    //                 "slot3": "R"
    //             }
    //         },
    //         50: {
    //             growthRate: 1.25,
    //             upgradeSlots: {
    //                 "slot1": "O",
    //                 "slot2": "P",
    //                 "slot3": "Q",
    //                 "slot4": "R"
    //             }
    //         },
    //         65: {
    //             growthRate: 1.25,
    //             upgradeSlots: {
    //                 "slot1": "P",
    //                 "slot2": "Q",
    //                 "slot3": "R",
    //                 "slot4": "S"
    //             }
    //         },
    //         80: {
    //             growthRate: 1.25,
    //             upgradeSlots: {
    //                 "slot1": "Q",
    //                 "slot2": "R",
    //                 "slot3": "S",
    //                 "slot4": "T"
    //             }
    //         },
    //         95: {
    //             growthRate: 1.25,
    //             upgradeSlots: {
    //                 "slot1": "R",
    //                 "slot2": "S",
    //                 "slot3": "T",
    //                 "slot4": "U"
    //             }
    //         },
    //         100: {
    //             growthRate: 1.25,
    //             upgradeSlots: {
    //                 "slot1": "S",
    //                 "slot2": "T",
    //                 "slot3": "U",
    //                 "slot4": "V"
    //             }
    //         },
    //         1000000000: {
    //             growthRate: 1.25
    //         }
    //     }
    // },
    // 'S': {
    //     unlocked: false,
    //     bought: false,
    //     buyingCosts: {
    //         "R": 500
    //     },
    //     amount: 0,
    //     productionRate: 1,
    //     productionRateLevel: 0,
    //     productionRateInitialCosts: 10,
    //     productionSpeed: 1,
    //     productionSpeedLevel: 0,
    //     productionSpeedInitialCosts: 10,
    //     automatedProduction: false,
    //     automatedProductionCosts: {
    //         'S': 500
    //     },
    //     productionRateUpgrades: {
    //         10: {
    //             growthRate: 1.2,
    //             upgradeSlots: {
    //                 "slot1": "S"
    //             }
    //         },
    //         25: {
    //             growthRate: 1.25,
    //             upgradeSlots: {
    //                 "slot1": "R",
    //                 "slot2": "S"
    //             }
    //         },
    //         35: {
    //             growthRate: 1.25,
    //             upgradeSlots: {
    //                 "slot1": "Q",
    //                 "slot2": "R",
    //                 "slot3": "S"
    //             }
    //         },
    //         50: {
    //             growthRate: 1.25,
    //             upgradeSlots: {
    //                 "slot1": "P",
    //                 "slot2": "Q",
    //                 "slot3": "R",
    //                 "slot4": "S"
    //             }
    //         },
    //         65: {
    //             growthRate: 1.25,
    //             upgradeSlots: {
    //                 "slot1": "Q",
    //                 "slot2": "R",
    //                 "slot3": "S",
    //                 "slot4": "T"
    //             }
    //         },
    //         80: {
    //             growthRate: 1.25,
    //             upgradeSlots: {
    //                 "slot1": "R",
    //                 "slot2": "S",
    //                 "slot3": "T",
    //                 "slot4": "U"
    //             }
    //         },
    //         95: {
    //             growthRate: 1.25,
    //             upgradeSlots: {
    //                 "slot1": "S",
    //                 "slot2": "T",
    //                 "slot3": "U",
    //                 "slot4": "V"
    //             }
    //         },
    //         100: {
    //             growthRate: 1.25,
    //             upgradeSlots: {
    //                 "slot1": "T",
    //                 "slot2": "U",
    //                 "slot3": "V",
    //                 "slot4": "W"
    //             }
    //         },
    //         1000000000: {
    //             growthRate: 1.25
    //         }
    //     },
    //     productionSpeedUpgrades: {
    //         10: {
    //             growthRate: 1.2,
    //             upgradeSlots: {
    //                 "slot1": "S"
    //             }
    //         },
    //         25: {
    //             growthRate: 1.25,
    //             upgradeSlots: {
    //                 "slot1": "R",
    //                 "slot2": "S"
    //             }
    //         },
    //         35: {
    //             growthRate: 1.25,
    //             upgradeSlots: {
    //                 "slot1": "Q",
    //                 "slot2": "R",
    //                 "slot3": "S"
    //             }
    //         },
    //         50: {
    //             growthRate: 1.25,
    //             upgradeSlots: {
    //                 "slot1": "P",
    //                 "slot2": "Q",
    //                 "slot3": "R",
    //                 "slot4": "S"
    //             }
    //         },
    //         65: {
    //             growthRate: 1.25,
    //             upgradeSlots: {
    //                 "slot1": "Q",
    //                 "slot2": "R",
    //                 "slot3": "S",
    //                 "slot4": "T"
    //             }
    //         },
    //         80: {
    //             growthRate: 1.25,
    //             upgradeSlots: {
    //                 "slot1": "R",
    //                 "slot2": "S",
    //                 "slot3": "T",
    //                 "slot4": "U"
    //             }
    //         },
    //         95: {
    //             growthRate: 1.25,
    //             upgradeSlots: {
    //                 "slot1": "S",
    //                 "slot2": "T",
    //                 "slot3": "U",
    //                 "slot4": "V"
    //             }
    //         },
    //         100: {
    //             growthRate: 1.25,
    //             upgradeSlots: {
    //                 "slot1": "T",
    //                 "slot2": "U",
    //                 "slot3": "V",
    //                 "slot4": "W"
    //             }
    //         },
    //         1000000000: {
    //             growthRate: 1.25
    //         }
    //     }
    // },
    // 'T': {
    //     unlocked: false,
    //     bought: false,
    //     buyingCosts: {
    //         "S": 500
    //     },
    //     amount: 0,
    //     productionRate: 1,
    //     productionRateLevel: 0,
    //     productionRateInitialCosts: 10,
    //     productionSpeed: 1,
    //     productionSpeedLevel: 0,
    //     productionSpeedInitialCosts: 10,
    //     automatedProduction: false,
    //     automatedProductionCosts: {
    //         'T': 500
    //     },
    //     productionRateUpgrades: {
    //         10: {
    //             growthRate: 1.2,
    //             upgradeSlots: {
    //                 "slot1": "T"
    //             }
    //         },
    //         25: {
    //             growthRate: 1.25,
    //             upgradeSlots: {
    //                 "slot1": "S",
    //                 "slot2": "T"
    //             }
    //         },
    //         35: {
    //             growthRate: 1.25,
    //             upgradeSlots: {
    //                 "slot1": "R",
    //                 "slot2": "S",
    //                 "slot3": "T"
    //             }
    //         },
    //         50: {
    //             growthRate: 1.25,
    //             upgradeSlots: {
    //                 "slot1": "Q",
    //                 "slot2": "R",
    //                 "slot3": "S",
    //                 "slot4": "T"
    //             }
    //         },
    //         65: {
    //             growthRate: 1.25,
    //             upgradeSlots: {
    //                 "slot1": "R",
    //                 "slot2": "S",
    //                 "slot3": "T",
    //                 "slot4": "U"
    //             }
    //         },
    //         80: {
    //             growthRate: 1.25,
    //             upgradeSlots: {
    //                 "slot1": "S",
    //                 "slot2": "T",
    //                 "slot3": "U",
    //                 "slot4": "V"
    //             }
    //         },
    //         95: {
    //             growthRate: 1.25,
    //             upgradeSlots: {
    //                 "slot1": "T",
    //                 "slot2": "U",
    //                 "slot3": "V",
    //                 "slot4": "W"
    //             }
    //         },
    //         100: {
    //             growthRate: 1.25,
    //             upgradeSlots: {
    //                 "slot1": "U",
    //                 "slot2": "V",
    //                 "slot3": "W",
    //                 "slot4": "X"
    //             }
    //         },
    //         1000000000: {
    //             growthRate: 1.25
    //         }
    //     },
    //     productionSpeedUpgrades: {
    //         10: {
    //             growthRate: 1.2,
    //             upgradeSlots: {
    //                 "slot1": "T"
    //             }
    //         },
    //         25: {
    //             growthRate: 1.25,
    //             upgradeSlots: {
    //                 "slot1": "S",
    //                 "slot2": "T"
    //             }
    //         },
    //         35: {
    //             growthRate: 1.25,
    //             upgradeSlots: {
    //                 "slot1": "R",
    //                 "slot2": "S",
    //                 "slot3": "T"
    //             }
    //         },
    //         50: {
    //             growthRate: 1.25,
    //             upgradeSlots: {
    //                 "slot1": "Q",
    //                 "slot2": "R",
    //                 "slot3": "S",
    //                 "slot4": "T"
    //             }
    //         },
    //         65: {
    //             growthRate: 1.25,
    //             upgradeSlots: {
    //                 "slot1": "R",
    //                 "slot2": "S",
    //                 "slot3": "T",
    //                 "slot4": "U"
    //             }
    //         },
    //         80: {
    //             growthRate: 1.25,
    //             upgradeSlots: {
    //                 "slot1": "S",
    //                 "slot2": "T",
    //                 "slot3": "U",
    //                 "slot4": "V"
    //             }
    //         },
    //         95: {
    //             growthRate: 1.25,
    //             upgradeSlots: {
    //                 "slot1": "T",
    //                 "slot2": "U",
    //                 "slot3": "V",
    //                 "slot4": "W"
    //             }
    //         },
    //         100: {
    //             growthRate: 1.25,
    //             upgradeSlots: {
    //                 "slot1": "U",
    //                 "slot2": "V",
    //                 "slot3": "W",
    //                 "slot4": "X"
    //             }
    //         },
    //         1000000000: {
    //             growthRate: 1.25
    //         }
    //     }
    // },
    // 'U': {
    //     unlocked: false,
    //     bought: false,
    //     buyingCosts: {
    //         "T": 500
    //     },
    //     amount: 0,
    //     productionRate: 1,
    //     productionRateLevel: 0,
    //     productionRateInitialCosts: 10,
    //     productionSpeed: 1,
    //     productionSpeedLevel: 0,
    //     productionSpeedInitialCosts: 10,
    //     automatedProduction: false,
    //     automatedProductionCosts: {
    //         'U': 500
    //     },
    //     productionRateUpgrades: {
    //         10: {
    //             growthRate: 1.2,
    //             upgradeSlots: {
    //                 "slot1": "U"
    //             }
    //         },
    //         25: {
    //             growthRate: 1.25,
    //             upgradeSlots: {
    //                 "slot1": "T",
    //                 "slot2": "U"
    //             }
    //         },
    //         35: {
    //             growthRate: 1.25,
    //             upgradeSlots: {
    //                 "slot1": "S",
    //                 "slot2": "T",
    //                 "slot3": "U"
    //             }
    //         },
    //         50: {
    //             growthRate: 1.25,
    //             upgradeSlots: {
    //                 "slot1": "R",
    //                 "slot2": "S",
    //                 "slot3": "T",
    //                 "slot4": "U"
    //             }
    //         },
    //         65: {
    //             growthRate: 1.25,
    //             upgradeSlots: {
    //                 "slot1": "S",
    //                 "slot2": "T",
    //                 "slot3": "U",
    //                 "slot4": "V"
    //             }
    //         },
    //         80: {
    //             growthRate: 1.25,
    //             upgradeSlots: {
    //                 "slot1": "T",
    //                 "slot2": "U",
    //                 "slot3": "V",
    //                 "slot4": "W"
    //             }
    //         },
    //         95: {
    //             growthRate: 1.25,
    //             upgradeSlots: {
    //                 "slot1": "U",
    //                 "slot2": "V",
    //                 "slot3": "W",
    //                 "slot4": "X"
    //             }
    //         },
    //         100: {
    //             growthRate: 1.25,
    //             upgradeSlots: {
    //                 "slot1": "V",
    //                 "slot2": "W",
    //                 "slot3": "X",
    //                 "slot4": "Y"
    //             }
    //         },
    //         1000000000: {
    //             growthRate: 1.25
    //         }
    //     },
    //     productionSpeedUpgrades: {
    //         10: {
    //             growthRate: 1.2,
    //             upgradeSlots: {
    //                 "slot1": "U"
    //             }
    //         },
    //         25: {
    //             growthRate: 1.25,
    //             upgradeSlots: {
    //                 "slot1": "T",
    //                 "slot2": "U"
    //             }
    //         },
    //         35: {
    //             growthRate: 1.25,
    //             upgradeSlots: {
    //                 "slot1": "S",
    //                 "slot2": "T",
    //                 "slot3": "U"
    //             }
    //         },
    //         50: {
    //             growthRate: 1.25,
    //             upgradeSlots: {
    //                 "slot1": "R",
    //                 "slot2": "S",
    //                 "slot3": "T",
    //                 "slot4": "U"
    //             }
    //         },
    //         65: {
    //             growthRate: 1.25,
    //             upgradeSlots: {
    //                 "slot1": "S",
    //                 "slot2": "T",
    //                 "slot3": "U",
    //                 "slot4": "V"
    //             }
    //         },
    //         80: {
    //             growthRate: 1.25,
    //             upgradeSlots: {
    //                 "slot1": "T",
    //                 "slot2": "U",
    //                 "slot3": "V",
    //                 "slot4": "W"
    //             }
    //         },
    //         95: {
    //             growthRate: 1.25,
    //             upgradeSlots: {
    //                 "slot1": "U",
    //                 "slot2": "V",
    //                 "slot3": "W",
    //                 "slot4": "X"
    //             }
    //         },
    //         100: {
    //             growthRate: 1.25,
    //             upgradeSlots: {
    //                 "slot1": "V",
    //                 "slot2": "W",
    //                 "slot3": "X",
    //                 "slot4": "Y"
    //             }
    //         },
    //         1000000000: {
    //             growthRate: 1.25
    //         }
    //     }
    // },
    // 'V': {
    //     unlocked: false,
    //     bought: false,
    //     buyingCosts: {
    //         "U": 500
    //     },
    //     amount: 0,
    //     productionRate: 1,
    //     productionRateLevel: 0,
    //     productionRateInitialCosts: 10,
    //     productionSpeed: 1,
    //     productionSpeedLevel: 0,
    //     productionSpeedInitialCosts: 10,
    //     automatedProduction: false,
    //     automatedProductionCosts: {
    //         'V': 500
    //     },
    //     productionRateUpgrades: {
    //         10: {
    //             growthRate: 1.2,
    //             upgradeSlots: {
    //                 "slot1": "V"
    //             }
    //         },
    //         25: {
    //             growthRate: 1.25,
    //             upgradeSlots: {
    //                 "slot1": "U",
    //                 "slot2": "V"
    //             }
    //         },
    //         35: {
    //             growthRate: 1.25,
    //             upgradeSlots: {
    //                 "slot1": "T",
    //                 "slot2": "U",
    //                 "slot3": "V"
    //             }
    //         },
    //         50: {
    //             growthRate: 1.25,
    //             upgradeSlots: {
    //                 "slot1": "S",
    //                 "slot2": "T",
    //                 "slot3": "U",
    //                 "slot4": "V"
    //             }
    //         },
    //         65: {
    //             growthRate: 1.25,
    //             upgradeSlots: {
    //                 "slot1": "T",
    //                 "slot2": "U",
    //                 "slot3": "V",
    //                 "slot4": "W"
    //             }
    //         },
    //         80: {
    //             growthRate: 1.25,
    //             upgradeSlots: {
    //                 "slot1": "U",
    //                 "slot2": "V",
    //                 "slot3": "W",
    //                 "slot4": "X"
    //             }
    //         },
    //         95: {
    //             growthRate: 1.25,
    //             upgradeSlots: {
    //                 "slot1": "V",
    //                 "slot2": "W",
    //                 "slot3": "X",
    //                 "slot4": "Y"
    //             }
    //         },
    //         100: {
    //             growthRate: 1.25,
    //             upgradeSlots: {
    //                 "slot1": "W",
    //                 "slot2": "X",
    //                 "slot3": "Y",
    //                 "slot4": "Z"
    //             }
    //         },
    //         1000000000: {
    //             growthRate: 1.25
    //         }
    //     },
    //     productionSpeedUpgrades: {
    //         10: {
    //             growthRate: 1.2,
    //             upgradeSlots: {
    //                 "slot1": "V"
    //             }
    //         },
    //         25: {
    //             growthRate: 1.25,
    //             upgradeSlots: {
    //                 "slot1": "U",
    //                 "slot2": "V"
    //             }
    //         },
    //         35: {
    //             growthRate: 1.25,
    //             upgradeSlots: {
    //                 "slot1": "T",
    //                 "slot2": "U",
    //                 "slot3": "V"
    //             }
    //         },
    //         50: {
    //             growthRate: 1.25,
    //             upgradeSlots: {
    //                 "slot1": "S",
    //                 "slot2": "T",
    //                 "slot3": "U",
    //                 "slot4": "V"
    //             }
    //         },
    //         65: {
    //             growthRate: 1.25,
    //             upgradeSlots: {
    //                 "slot1": "T",
    //                 "slot2": "U",
    //                 "slot3": "V",
    //                 "slot4": "W"
    //             }
    //         },
    //         80: {
    //             growthRate: 1.25,
    //             upgradeSlots: {
    //                 "slot1": "U",
    //                 "slot2": "V",
    //                 "slot3": "W",
    //                 "slot4": "X"
    //             }
    //         },
    //         95: {
    //             growthRate: 1.25,
    //             upgradeSlots: {
    //                 "slot1": "V",
    //                 "slot2": "W",
    //                 "slot3": "X",
    //                 "slot4": "Y"
    //             }
    //         },
    //         100: {
    //             growthRate: 1.25,
    //             upgradeSlots: {
    //                 "slot1": "W",
    //                 "slot2": "X",
    //                 "slot3": "Y",
    //                 "slot4": "Z"
    //             }
    //         },
    //         1000000000: {
    //             growthRate: 1.25
    //         }
    //     }
    // },
    // 'W': {
    //     unlocked: false,
    //     bought: false,
    //     buyingCosts: {
    //         "V": 500
    //     },
    //     amount: 0,
    //     productionRate: 1,
    //     productionRateLevel: 0,
    //     productionRateInitialCosts: 10,
    //     productionSpeed: 1,
    //     productionSpeedLevel: 0,
    //     productionSpeedInitialCosts: 10,
    //     automatedProduction: false,
    //     automatedProductionCosts: {
    //         'W': 500
    //     },
    //     productionRateUpgrades: {
    //         10: {
    //             growthRate: 1.2,
    //             upgradeSlots: {
    //                 "slot1": "W"
    //             }
    //         },
    //         25: {
    //             growthRate: 1.25,
    //             upgradeSlots: {
    //                 "slot1": "V",
    //                 "slot2": "W"
    //             }
    //         },
    //         35: {
    //             growthRate: 1.25,
    //             upgradeSlots: {
    //                 "slot1": "U",
    //                 "slot2": "V",
    //                 "slot3": "W"
    //             }
    //         },
    //         50: {
    //             growthRate: 1.25,
    //             upgradeSlots: {
    //                 "slot1": "T",
    //                 "slot2": "U",
    //                 "slot3": "V",
    //                 "slot4": "W"
    //             }
    //         },
    //         65: {
    //             growthRate: 1.25,
    //             upgradeSlots: {
    //                 "slot1": "U",
    //                 "slot2": "V",
    //                 "slot3": "W",
    //                 "slot4": "X"
    //             }
    //         },
    //         80: {
    //             growthRate: 1.25,
    //             upgradeSlots: {
    //                 "slot1": "V",
    //                 "slot2": "W",
    //                 "slot3": "X",
    //                 "slot4": "Y"
    //             }
    //         },
    //         95: {
    //             growthRate: 1.25,
    //             upgradeSlots: {
    //                 "slot1": "W",
    //                 "slot2": "X",
    //                 "slot3": "Y",
    //                 "slot4": "Z"
    //             }
    //         },
    //         100: {
    //             growthRate: 1.25,
    //             upgradeSlots: {
    //                 "slot1": "X",
    //                 "slot2": "Y",
    //                 "slot3": "Z"
    //             }
    //         },
    //         1000000000: {
    //             growthRate: 1.25
    //         }
    //     },
    //     productionSpeedUpgrades: {
    //         10: {
    //             growthRate: 1.2,
    //             upgradeSlots: {
    //                 "slot1": "W"
    //             }
    //         },
    //         25: {
    //             growthRate: 1.25,
    //             upgradeSlots: {
    //                 "slot1": "V",
    //                 "slot2": "W"
    //             }
    //         },
    //         35: {
    //             growthRate: 1.25,
    //             upgradeSlots: {
    //                 "slot1": "U",
    //                 "slot2": "V",
    //                 "slot3": "W"
    //             }
    //         },
    //         50: {
    //             growthRate: 1.25,
    //             upgradeSlots: {
    //                 "slot1": "T",
    //                 "slot2": "U",
    //                 "slot3": "V",
    //                 "slot4": "W"
    //             }
    //         },
    //         65: {
    //             growthRate: 1.25,
    //             upgradeSlots: {
    //                 "slot1": "U",
    //                 "slot2": "V",
    //                 "slot3": "W",
    //                 "slot4": "X"
    //             }
    //         },
    //         80: {
    //             growthRate: 1.25,
    //             upgradeSlots: {
    //                 "slot1": "V",
    //                 "slot2": "W",
    //                 "slot3": "X",
    //                 "slot4": "Y"
    //             }
    //         },
    //         95: {
    //             growthRate: 1.25,
    //             upgradeSlots: {
    //                 "slot1": "W",
    //                 "slot2": "X",
    //                 "slot3": "Y",
    //                 "slot4": "Z"
    //             }
    //         },
    //         100: {
    //             growthRate: 1.25,
    //             upgradeSlots: {
    //                 "slot1": "X",
    //                 "slot2": "Y",
    //                 "slot3": "Z"
    //             }
    //         },
    //         1000000000: {
    //             growthRate: 1.25
    //         }
    //     }
    // },
    // 'X': {
    //     unlocked: false,
    //     bought: false,
    //     buyingCosts: {
    //         "W": 500
    //     },
    //     amount: 0,
    //     productionRate: 1,
    //     productionRateLevel: 0,
    //     productionRateInitialCosts: 10,
    //     productionSpeed: 1,
    //     productionSpeedLevel: 0,
    //     productionSpeedInitialCosts: 10,
    //     automatedProduction: false,
    //     automatedProductionCosts: {
    //         'X': 500
    //     },
    //     productionRateUpgrades: {
    //         10: {
    //             growthRate: 1.2,
    //             upgradeSlots: {
    //                 "slot1": "X"
    //             }
    //         },
    //         25: {
    //             growthRate: 1.25,
    //             upgradeSlots: {
    //                 "slot1": "W",
    //                 "slot2": "X"
    //             }
    //         },
    //         35: {
    //             growthRate: 1.25,
    //             upgradeSlots: {
    //                 "slot1": "V",
    //                 "slot2": "W",
    //                 "slot3": "X"
    //             }
    //         },
    //         50: {
    //             growthRate: 1.25,
    //             upgradeSlots: {
    //                 "slot1": "U",
    //                 "slot2": "V",
    //                 "slot3": "W",
    //                 "slot4": "X"
    //             }
    //         },
    //         65: {
    //             growthRate: 1.25,
    //             upgradeSlots: {
    //                 "slot1": "V",
    //                 "slot2": "W",
    //                 "slot3": "X",
    //                 "slot4": "Y"
    //             }
    //         },
    //         80: {
    //             growthRate: 1.25,
    //             upgradeSlots: {
    //                 "slot1": "W",
    //                 "slot2": "X",
    //                 "slot3": "Y",
    //                 "slot4": "Z"
    //             }
    //         },
    //         95: {
    //             growthRate: 1.25,
    //             upgradeSlots: {
    //                 "slot1": "X",
    //                 "slot2": "Y",
    //                 "slot3": "Z"
    //             }
    //         },
    //         100: {
    //             growthRate: 1.25,
    //             upgradeSlots: {
    //                 "slot1": "Y",
    //                 "slot2": "Z"
    //             }
    //         },
    //         1000000000: {
    //             growthRate: 1.25
    //         }
    //     },
    //     productionSpeedUpgrades: {
    //         10: {
    //             growthRate: 1.2,
    //             upgradeSlots: {
    //                 "slot1": "X"
    //             }
    //         },
    //         25: {
    //             growthRate: 1.25,
    //             upgradeSlots: {
    //                 "slot1": "W",
    //                 "slot2": "X"
    //             }
    //         },
    //         35: {
    //             growthRate: 1.25,
    //             upgradeSlots: {
    //                 "slot1": "V",
    //                 "slot2": "W",
    //                 "slot3": "X"
    //             }
    //         },
    //         50: {
    //             growthRate: 1.25,
    //             upgradeSlots: {
    //                 "slot1": "U",
    //                 "slot2": "V",
    //                 "slot3": "W",
    //                 "slot4": "X"
    //             }
    //         },
    //         65: {
    //             growthRate: 1.25,
    //             upgradeSlots: {
    //                 "slot1": "V",
    //                 "slot2": "W",
    //                 "slot3": "X",
    //                 "slot4": "Y"
    //             }
    //         },
    //         80: {
    //             growthRate: 1.25,
    //             upgradeSlots: {
    //                 "slot1": "W",
    //                 "slot2": "X",
    //                 "slot3": "Y",
    //                 "slot4": "Z"
    //             }
    //         },
    //         95: {
    //             growthRate: 1.25,
    //             upgradeSlots: {
    //                 "slot1": "X",
    //                 "slot2": "Y",
    //                 "slot3": "Z"
    //             }
    //         },
    //         100: {
    //             growthRate: 1.25,
    //             upgradeSlots: {
    //                 "slot1": "Y",
    //                 "slot2": "Z"
    //             }
    //         },
    //         1000000000: {
    //             growthRate: 1.25
    //         }
    //     }
    // },
    // 'Y': {
    //     unlocked: false,
    //     bought: false,
    //     buyingCosts: {
    //         "X": 500
    //     },
    //     amount: 0,
    //     productionRate: 1,
    //     productionRateLevel: 0,
    //     productionRateInitialCosts: 10,
    //     productionSpeed: 1,
    //     productionSpeedLevel: 0,
    //     productionSpeedInitialCosts: 10,
    //     automatedProduction: false,
    //     automatedProductionCosts: {
    //         'Y': 500
    //     },
    //     productionRateUpgrades: {
    //         10: {
    //             growthRate: 1.2,
    //             upgradeSlots: {
    //                 "slot1": "Y"
    //             }
    //         },
    //         25: {
    //             growthRate: 1.25,
    //             upgradeSlots: {
    //                 "slot1": "X",
    //                 "slot2": "Y"
    //             }
    //         },
    //         35: {
    //             growthRate: 1.25,
    //             upgradeSlots: {
    //                 "slot1": "W",
    //                 "slot2": "X",
    //                 "slot3": "Y"
    //             }
    //         },
    //         50: {
    //             growthRate: 1.25,
    //             upgradeSlots: {
    //                 "slot1": "V",
    //                 "slot2": "W",
    //                 "slot3": "X",
    //                 "slot4": "Y"
    //             }
    //         },
    //         65: {
    //             growthRate: 1.25,
    //             upgradeSlots: {
    //                 "slot1": "W",
    //                 "slot2": "X",
    //                 "slot3": "Y",
    //                 "slot4": "Z"
    //             }
    //         },
    //         80: {
    //             growthRate: 1.25,
    //             upgradeSlots: {
    //                 "slot1": "X",
    //                 "slot2": "Y",
    //                 "slot3": "Z"
    //             }
    //         },
    //         95: {
    //             growthRate: 1.25,
    //             upgradeSlots: {
    //                 "slot1": "Y",
    //                 "slot2": "Z"
    //             }
    //         },
    //         100: {
    //             growthRate: 1.25,
    //             upgradeSlots: {
    //                 "slot1": "Z"
    //             }
    //         },
    //         1000000000: {
    //             growthRate: 1.25
    //         }
    //     },
    //     productionSpeedUpgrades: {
    //         10: {
    //             growthRate: 1.2,
    //             upgradeSlots: {
    //                 "slot1": "Y"
    //             }
    //         },
    //         25: {
    //             growthRate: 1.25,
    //             upgradeSlots: {
    //                 "slot1": "X",
    //                 "slot2": "Y"
    //             }
    //         },
    //         35: {
    //             growthRate: 1.25,
    //             upgradeSlots: {
    //                 "slot1": "W",
    //                 "slot2": "X",
    //                 "slot3": "Y"
    //             }
    //         },
    //         50: {
    //             growthRate: 1.25,
    //             upgradeSlots: {
    //                 "slot1": "V",
    //                 "slot2": "W",
    //                 "slot3": "X",
    //                 "slot4": "Y"
    //             }
    //         },
    //         65: {
    //             growthRate: 1.25,
    //             upgradeSlots: {
    //                 "slot1": "W",
    //                 "slot2": "X",
    //                 "slot3": "Y",
    //                 "slot4": "Z"
    //             }
    //         },
    //         80: {
    //             growthRate: 1.25,
    //             upgradeSlots: {
    //                 "slot1": "X",
    //                 "slot2": "Y",
    //                 "slot3": "Z"
    //             }
    //         },
    //         95: {
    //             growthRate: 1.25,
    //             upgradeSlots: {
    //                 "slot1": "Y",
    //                 "slot2": "Z"
    //             }
    //         },
    //         100: {
    //             growthRate: 1.25,
    //             upgradeSlots: {
    //                 "slot1": "Z"
    //             }
    //         },
    //         1000000000: {
    //             growthRate: 1.25
    //         }
    //     }
    // },
    // 'Z': {
    //     unlocked: false,
    //     bought: false,
    //     buyingCosts: {
    //         "Y": 500
    //     },
    //     amount: 0,
    //     productionRate: 1,
    //     productionRateLevel: 0,
    //     productionRateInitialCosts: 10,
    //     productionSpeed: 1,
    //     productionSpeedLevel: 0,
    //     productionSpeedInitialCosts: 10,
    //     automatedProduction: false,
    //     automatedProductionCosts: {
    //         'Z': 500
    //     },
    //     productionRateUpgrades: {
    //         10: {
    //             growthRate: 1.2,
    //             upgradeSlots: {
    //                 "slot1": "Z"
    //             }
    //         },
    //         25: {
    //             growthRate: 1.25,
    //             upgradeSlots: {
    //                 "slot1": "Y",
    //                 "slot2": "Z"
    //             }
    //         },
    //         35: {
    //             growthRate: 1.25,
    //             upgradeSlots: {
    //                 "slot1": "X",
    //                 "slot2": "Y",
    //                 "slot3": "Z"
    //             }
    //         },
    //         50: {
    //             growthRate: 1.25,
    //             upgradeSlots: {
    //                 "slot1": "W",
    //                 "slot2": "X",
    //                 "slot3": "Y",
    //                 "slot4": "Z"
    //             }
    //         },
    //         65: {
    //             growthRate: 1.25,
    //             upgradeSlots: {
    //                 "slot1": "X",
    //                 "slot2": "Y",
    //                 "slot3": "Z"
    //             }
    //         },
    //         80: {
    //             growthRate: 1.25,
    //             upgradeSlots: {
    //                 "slot1": "Y",
    //                 "slot2": "Z"
    //             }
    //         },
    //         95: {
    //             growthRate: 1.25,
    //             upgradeSlots: {
    //                 "slot1": "Z"
    //             }
    //         },
    //         100: {
    //             growthRate: 1.25,
    //             upgradeSlots: {
    //                 "slot1": "Z"
    //             }
    //         },
    //         1000000000: {
    //             growthRate: 1.25
    //         }
    //     },
    //     productionSpeedUpgrades: {
    //         10: {
    //             growthRate: 1.2,
    //             upgradeSlots: {
    //                 "slot1": "Z"
    //             }
    //         },
    //         25: {
    //             growthRate: 1.25,
    //             upgradeSlots: {
    //                 "slot1": "Y",
    //                 "slot2": "Z"
    //             }
    //         },
    //         35: {
    //             growthRate: 1.25,
    //             upgradeSlots: {
    //                 "slot1": "X",
    //                 "slot2": "Y",
    //                 "slot3": "Z"
    //             }
    //         },
    //         50: {
    //             growthRate: 1.25,
    //             upgradeSlots: {
    //                 "slot1": "W",
    //                 "slot2": "X",
    //                 "slot3": "Y",
    //                 "slot4": "Z"
    //             }
    //         },
    //         65: {
    //             growthRate: 1.25,
    //             upgradeSlots: {
    //                 "slot1": "X",
    //                 "slot2": "Y",
    //                 "slot3": "Z"
    //             }
    //         },
    //         80: {
    //             growthRate: 1.25,
    //             upgradeSlots: {
    //                 "slot1": "Y",
    //                 "slot2": "Z"
    //             }
    //         },
    //         95: {
    //             growthRate: 1.25,
    //             upgradeSlots: {
    //                 "slot1": "Z"
    //             }
    //         },
    //         100: {
    //             growthRate: 1.25,
    //             upgradeSlots: {
    //                 "slot1": "Z"
    //             }
    //         },
    //         1000000000: {
    //             growthRate: 1.25
    //         }
    //     }
    // }
})