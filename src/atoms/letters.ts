import {atom} from "jotai"
import LetterButtonInterface from "../interfaces/letterButton";

export const lettersAtom = atom<LetterButtonInterface>({
    'A': {
        unlocked: true,
        bought: false,
        amount: 0,
        production_rate: 1,
        production_rate_level: 0,
        production_speed: 1,
        production_speed_level: 0,
        automated_production: false,
        automated_production_costs: {
            'A': 500
        },
        production_rate_upgrades: {
            1: {
                costs: {
                    'A': 10
                },
                newValue: 1.1
            },
            2: {
                costs: {
                    'A': 15
                },
                newValue: 1.25
            },
            3: {
                costs: {
                    'A': 20
                },
                newValue: 1.4
            },
            4: {
                costs: {
                    'A': 30
                },
                newValue: 1.6
            },
            5: {
                costs: {
                    'A': 45
                },
                newValue: 1.8
            },
            6: {
                costs: {
                    'A': 60
                },
                newValue: 2
            },
            7: {
                costs: {
                    'A': 75
                },
                newValue: 2.2
            },
            8: {
                costs: {
                    'A': 90
                },
                newValue: 2.35
            },
            9: {
                costs: {
                    'A': 100
                },
                newValue: 2.5
            },
            10: {
                costs: {
                    'A': 300
                },
                newValue: 2
            },
            11: {
                costs: {
                    'A': 45
                },
                newValue: 1.8
            },
            12: {
                costs: {
                    'A': 45
                },
                newValue: 1.8
            },
            13: {
                costs: {
                    'A': 45
                },
                newValue: 1.8
            },
            14: {
                costs: {
                    'A': 45
                },
                newValue: 1.8
            },
            15: {
                costs: {
                    'A': 45
                },
                newValue: 1.8
            },
            16: {
                costs: {
                    'A': 45
                },
                newValue: 1.8
            },
            17: {
                costs: {
                    'A': 45
                },
                newValue: 1.8
            },
            18: {
                costs: {
                    'A': 45
                },
                newValue: 1.8
            },
            19: {
                costs: {
                    'A': 45
                },
                newValue: 1.8
            },
            20: {
                costs: {
                    'A': 45
                },
                newValue: 1.8
            },
            21: {
                costs: {
                    'A': 45
                },
                newValue: 1.8
            },
            22: {
                costs: {
                    'A': 45
                },
                newValue: 1.8
            },
            23: {
                costs: {
                    'A': 45
                },
                newValue: 1.8
            },
            24: {
                costs: {
                    'A': 45
                },
                newValue: 1.8
            },
            25: {
                costs: {
                    'A': 45
                },
                newValue: 1.8
            },
            26: {
                costs: {
                    'A': 45
                },
                newValue: 1.8
            },
            27: {
                costs: {
                    'A': 45
                },
                newValue: 1.8
            },
            28: {
                costs: {
                    'A': 45
                },
                newValue: 1.8
            },
            29: {
                costs: {
                    'A': 45
                },
                newValue: 1.8
            },
            30: {
                costs: {
                    'A': 45
                },
                newValue: 1.8
            },
            31: {
                costs: {
                    'A': 45
                },
                newValue: 1.8
            },
            32: {
                costs: {
                    'A': 45
                },
                newValue: 1.8
            },
            33: {
                costs: {
                    'A': 45
                },
                newValue: 1.8
            },
            34: {
                costs: {
                    'A': 45
                },
                newValue: 1.8
            },
            35: {
                costs: {
                    'A': 45
                },
                newValue: 1.8
            },
            36: {
                costs: {
                    'A': 45
                },
                newValue: 1.8
            },
            37: {
                costs: {
                    'A': 45
                },
                newValue: 1.8
            },
            38: {
                costs: {
                    'A': 45
                },
                newValue: 1.8
            },
            39: {
                costs: {
                    'A': 45
                },
                newValue: 1.8
            },
            40: {
                costs: {
                    'A': 45
                },
                newValue: 1.8
            },
            41: {
                costs: {
                    'A': 45
                },
                newValue: 1.8
            },
            42: {
                costs: {
                    'A': 45
                },
                newValue: 1.8
            },
            43: {
                costs: {
                    'A': 45
                },
                newValue: 1.8
            },
            44: {
                costs: {
                    'A': 45
                },
                newValue: 1.8
            },
            45: {
                costs: {
                    'A': 45
                },
                newValue: 1.8
            },
            46: {
                costs: {
                    'A': 45
                },
                newValue: 1.8
            },
            47: {
                costs: {
                    'A': 45
                },
                newValue: 1.8
            },
            48: {
                costs: {
                    'A': 45
                },
                newValue: 1.8
            },
            49: {
                costs: {
                    'A': 45
                },
                newValue: 1.8
            },
            50: {
                costs: {
                    'A': 45
                },
                newValue: 1.8
            }
        },
        production_speed_upgrades: {
            1: {
                costs: {
                    'A': 20
                },
                newValue: 0.95
            },
            2: {
                costs: {
                    'A': 35
                },
                newValue: 0.8
            },
            3: {
                costs: {
                    'A': 50
                },
                newValue: 0.75
            },
            4: {
                costs: {
                    'A': 65
                },
                newValue: 0.68
            },
            5: {
                costs: {
                    'A': 90
                },
                newValue: 0.62
            }
        }
    },
    'B': {
        unlocked: false,
        bought: false,
        buyingCosts: {
            'A': 2000
        },
        amount: 0,
        production_rate: 1,
        production_rate_level: 0,
        production_speed: 1,
        production_speed_level: 0,
        automated_production: false,
        automated_production_costs: {
            'B': 5000
        },
        production_rate_upgrades: {
            1: {
                costs: {
                    'B': 10
                },
                newValue: 1.25
            },
            2: {
                costs: {
                    'B': 15
                },
                newValue: 1.5
            },
            3: {
                costs: {
                    'B': 20
                },
                newValue: 2
            },
            4: {
                costs: {
                    'A': 250,
                    'B': 35
                },
                newValue: 2.25
            },
            5: {
                costs: {
                    'A': 500,
                    'B': 50
                },
                newValue: 2.5
            }
        },
        production_speed_upgrades: {
            1: {
                costs: {
                    'A': 2000,
                    'B': 150
                },
                newValue: 0.95
            },
            2: {
                costs: {
                    'A': 3500,
                    'B': 200
                },
                newValue: 0.8
            },
            3: {
                costs: {
                    'A': 5000,
                    'B': 350
                },
                newValue: 0.75
            },
            4: {
                costs: {
                    'A': 6500,
                    'B': 500
                },
                newValue: 0.68
            },
            5: {
                costs: {
                    'A': 9000,
                    'B': 750
                },
                newValue: 0.62
            }
        }
    },
    'C': {
        unlocked: false,
        bought: false,
        buyingCosts: {
            'A': 4000,
            'B': 2000
        },
        amount: 0,
        production_rate: 1,
        production_rate_level: 0,
        production_speed: 1,
        production_speed_level: 0,
        automated_production: false,
        automated_production_costs: {
            'B': 5000
        },
        production_rate_upgrades: {
            1: {
                costs: {
                    'B': 10
                },
                newValue: 1.25
            },
            2: {
                costs: {
                    'B': 15
                },
                newValue: 1.5
            },
            3: {
                costs: {
                    'B': 20
                },
                newValue: 2
            },
            4: {
                costs: {
                    'A': 250,
                    'B': 35
                },
                newValue: 2.25
            },
            5: {
                costs: {
                    'A': 500,
                    'B': 50
                },
                newValue: 2.5
            }
        },
        production_speed_upgrades: {
            1: {
                costs: {
                    'A': 2000,
                    'B': 150
                },
                newValue: 0.95
            },
            2: {
                costs: {
                    'A': 3500,
                    'B': 200
                },
                newValue: 0.8
            },
            3: {
                costs: {
                    'A': 5000,
                    'B': 350
                },
                newValue: 0.75
            },
            4: {
                costs: {
                    'A': 6500,
                    'B': 500
                },
                newValue: 0.68
            },
            5: {
                costs: {
                    'A': 9000,
                    'B': 750
                },
                newValue: 0.62
            }
        }
    },
    'D': {
        unlocked: false,
        bought: false,
        buyingCosts: {
            'A': 6000000000,
            'B': 4000,
            'C': 2000
        },
        amount: 0,
        production_rate: 1,
        production_rate_level: 0,
        production_speed: 1,
        production_speed_level: 0,
        automated_production: false,
        automated_production_costs: {
            'B': 5000
        },
        production_rate_upgrades: {
            1: {
                costs: {
                    'B': 10
                },
                newValue: 1.25
            },
            2: {
                costs: {
                    'B': 15
                },
                newValue: 1.5
            },
            3: {
                costs: {
                    'B': 20
                },
                newValue: 2
            },
            4: {
                costs: {
                    'A': 250,
                    'B': 35
                },
                newValue: 2.25
            },
            5: {
                costs: {
                    'A': 500,
                    'B': 50
                },
                newValue: 2.5
            }
        },
        production_speed_upgrades: {
            1: {
                costs: {
                    'A': 2000,
                    'B': 150
                },
                newValue: 0.95
            },
            2: {
                costs: {
                    'A': 3500,
                    'B': 200
                },
                newValue: 0.8
            },
            3: {
                costs: {
                    'A': 5000,
                    'B': 350
                },
                newValue: 0.75
            },
            4: {
                costs: {
                    'A': 6500,
                    'B': 500
                },
                newValue: 0.68
            },
            5: {
                costs: {
                    'A': 9000,
                    'B': 750
                },
                newValue: 0.62
            }
        }
    },
    'E': {
        unlocked: false,
        bought: false,
        buyingCosts: {
            'A': 6000000000,
            'B': 4000,
            'C': 2000
        },
        amount: 0,
        production_rate: 1,
        production_rate_level: 0,
        production_speed: 1,
        production_speed_level: 0,
        automated_production: false,
        automated_production_costs: {
            'B': 5000
        },
        production_rate_upgrades: {
            1: {
                costs: {
                    'B': 10
                },
                newValue: 1.25
            },
            2: {
                costs: {
                    'B': 15
                },
                newValue: 1.5
            },
            3: {
                costs: {
                    'B': 20
                },
                newValue: 2
            },
            4: {
                costs: {
                    'A': 250,
                    'B': 35
                },
                newValue: 2.25
            },
            5: {
                costs: {
                    'A': 500,
                    'B': 50
                },
                newValue: 2.5
            }
        },
        production_speed_upgrades: {
            1: {
                costs: {
                    'A': 2000,
                    'B': 150
                },
                newValue: 0.95
            },
            2: {
                costs: {
                    'A': 3500,
                    'B': 200
                },
                newValue: 0.8
            },
            3: {
                costs: {
                    'A': 5000,
                    'B': 350
                },
                newValue: 0.75
            },
            4: {
                costs: {
                    'A': 6500,
                    'B': 500
                },
                newValue: 0.68
            },
            5: {
                costs: {
                    'A': 9000,
                    'B': 750
                },
                newValue: 0.62
            }
        }
    },
    'F': {
        unlocked: false,
        bought: false,
        buyingCosts: {
            'A': 6000000000,
            'B': 4000,
            'C': 2000
        },
        amount: 0,
        production_rate: 1,
        production_rate_level: 0,
        production_speed: 1,
        production_speed_level: 0,
        automated_production: false,
        automated_production_costs: {
            'B': 5000
        },
        production_rate_upgrades: {
            1: {
                costs: {
                    'B': 10
                },
                newValue: 1.25
            },
            2: {
                costs: {
                    'B': 15
                },
                newValue: 1.5
            },
            3: {
                costs: {
                    'B': 20
                },
                newValue: 2
            },
            4: {
                costs: {
                    'A': 250,
                    'B': 35
                },
                newValue: 2.25
            },
            5: {
                costs: {
                    'A': 500,
                    'B': 50
                },
                newValue: 2.5
            }
        },
        production_speed_upgrades: {
            1: {
                costs: {
                    'A': 2000,
                    'B': 150
                },
                newValue: 0.95
            },
            2: {
                costs: {
                    'A': 3500,
                    'B': 200
                },
                newValue: 0.8
            },
            3: {
                costs: {
                    'A': 5000,
                    'B': 350
                },
                newValue: 0.75
            },
            4: {
                costs: {
                    'A': 6500,
                    'B': 500
                },
                newValue: 0.68
            },
            5: {
                costs: {
                    'A': 9000,
                    'B': 750
                },
                newValue: 0.62
            }
        }
    },
    'G': {
        unlocked: false,
        bought: false,
        buyingCosts: {
            'A': 6000000000,
            'B': 4000,
            'C': 2000
        },
        amount: 0,
        production_rate: 1,
        production_rate_level: 0,
        production_speed: 1,
        production_speed_level: 0,
        automated_production: false,
        automated_production_costs: {
            'B': 5000
        },
        production_rate_upgrades: {
            1: {
                costs: {
                    'B': 10
                },
                newValue: 1.25
            },
            2: {
                costs: {
                    'B': 15
                },
                newValue: 1.5
            },
            3: {
                costs: {
                    'B': 20
                },
                newValue: 2
            },
            4: {
                costs: {
                    'A': 250,
                    'B': 35
                },
                newValue: 2.25
            },
            5: {
                costs: {
                    'A': 500,
                    'B': 50
                },
                newValue: 2.5
            }
        },
        production_speed_upgrades: {
            1: {
                costs: {
                    'A': 2000,
                    'B': 150
                },
                newValue: 0.95
            },
            2: {
                costs: {
                    'A': 3500,
                    'B': 200
                },
                newValue: 0.8
            },
            3: {
                costs: {
                    'A': 5000,
                    'B': 350
                },
                newValue: 0.75
            },
            4: {
                costs: {
                    'A': 6500,
                    'B': 500
                },
                newValue: 0.68
            },
            5: {
                costs: {
                    'A': 9000,
                    'B': 750
                },
                newValue: 0.62
            }
        }
    },
    'H': {
        unlocked: false,
        bought: false,
        buyingCosts: {
            'A': 6000000000,
            'B': 4000,
            'C': 2000
        },
        amount: 0,
        production_rate: 1,
        production_rate_level: 0,
        production_speed: 1,
        production_speed_level: 0,
        automated_production: false,
        automated_production_costs: {
            'B': 5000
        },
        production_rate_upgrades: {
            1: {
                costs: {
                    'B': 10
                },
                newValue: 1.25
            },
            2: {
                costs: {
                    'B': 15
                },
                newValue: 1.5
            },
            3: {
                costs: {
                    'B': 20
                },
                newValue: 2
            },
            4: {
                costs: {
                    'A': 250,
                    'B': 35
                },
                newValue: 2.25
            },
            5: {
                costs: {
                    'A': 500,
                    'B': 50
                },
                newValue: 2.5
            }
        },
        production_speed_upgrades: {
            1: {
                costs: {
                    'A': 2000,
                    'B': 150
                },
                newValue: 0.95
            },
            2: {
                costs: {
                    'A': 3500,
                    'B': 200
                },
                newValue: 0.8
            },
            3: {
                costs: {
                    'A': 5000,
                    'B': 350
                },
                newValue: 0.75
            },
            4: {
                costs: {
                    'A': 6500,
                    'B': 500
                },
                newValue: 0.68
            },
            5: {
                costs: {
                    'A': 9000,
                    'B': 750
                },
                newValue: 0.62
            }
        }
    },
    'I': {
        unlocked: false,
        bought: false,
        buyingCosts: {
            'A': 6000000000,
            'B': 4000,
            'C': 2000
        },
        amount: 0,
        production_rate: 1,
        production_rate_level: 0,
        production_speed: 1,
        production_speed_level: 0,
        automated_production: false,
        automated_production_costs: {
            'B': 5000
        },
        production_rate_upgrades: {
            1: {
                costs: {
                    'B': 10
                },
                newValue: 1.25
            },
            2: {
                costs: {
                    'B': 15
                },
                newValue: 1.5
            },
            3: {
                costs: {
                    'B': 20
                },
                newValue: 2
            },
            4: {
                costs: {
                    'A': 250,
                    'B': 35
                },
                newValue: 2.25
            },
            5: {
                costs: {
                    'A': 500,
                    'B': 50
                },
                newValue: 2.5
            }
        },
        production_speed_upgrades: {
            1: {
                costs: {
                    'A': 2000,
                    'B': 150
                },
                newValue: 0.95
            },
            2: {
                costs: {
                    'A': 3500,
                    'B': 200
                },
                newValue: 0.8
            },
            3: {
                costs: {
                    'A': 5000,
                    'B': 350
                },
                newValue: 0.75
            },
            4: {
                costs: {
                    'A': 6500,
                    'B': 500
                },
                newValue: 0.68
            },
            5: {
                costs: {
                    'A': 9000,
                    'B': 750
                },
                newValue: 0.62
            }
        }
    },
    'J': {
        unlocked: false,
        bought: false,
        buyingCosts: {
            'A': 6000000000,
            'B': 4000,
            'C': 2000
        },
        amount: 0,
        production_rate: 1,
        production_rate_level: 0,
        production_speed: 1,
        production_speed_level: 0,
        automated_production: false,
        automated_production_costs: {
            'B': 5000
        },
        production_rate_upgrades: {
            1: {
                costs: {
                    'B': 10
                },
                newValue: 1.25
            },
            2: {
                costs: {
                    'B': 15
                },
                newValue: 1.5
            },
            3: {
                costs: {
                    'B': 20
                },
                newValue: 2
            },
            4: {
                costs: {
                    'A': 250,
                    'B': 35
                },
                newValue: 2.25
            },
            5: {
                costs: {
                    'A': 500,
                    'B': 50
                },
                newValue: 2.5
            }
        },
        production_speed_upgrades: {
            1: {
                costs: {
                    'A': 2000,
                    'B': 150
                },
                newValue: 0.95
            },
            2: {
                costs: {
                    'A': 3500,
                    'B': 200
                },
                newValue: 0.8
            },
            3: {
                costs: {
                    'A': 5000,
                    'B': 350
                },
                newValue: 0.75
            },
            4: {
                costs: {
                    'A': 6500,
                    'B': 500
                },
                newValue: 0.68
            },
            5: {
                costs: {
                    'A': 9000,
                    'B': 750
                },
                newValue: 0.62
            }
        }
    },
    'K': {
        unlocked: false,
        bought: false,
        buyingCosts: {
            'A': 6000000000,
            'B': 4000,
            'C': 2000
        },
        amount: 0,
        production_rate: 1,
        production_rate_level: 0,
        production_speed: 1,
        production_speed_level: 0,
        automated_production: false,
        automated_production_costs: {
            'B': 5000
        },
        production_rate_upgrades: {
            1: {
                costs: {
                    'B': 10
                },
                newValue: 1.25
            },
            2: {
                costs: {
                    'B': 15
                },
                newValue: 1.5
            },
            3: {
                costs: {
                    'B': 20
                },
                newValue: 2
            },
            4: {
                costs: {
                    'A': 250,
                    'B': 35
                },
                newValue: 2.25
            },
            5: {
                costs: {
                    'A': 500,
                    'B': 50
                },
                newValue: 2.5
            }
        },
        production_speed_upgrades: {
            1: {
                costs: {
                    'A': 2000,
                    'B': 150
                },
                newValue: 0.95
            },
            2: {
                costs: {
                    'A': 3500,
                    'B': 200
                },
                newValue: 0.8
            },
            3: {
                costs: {
                    'A': 5000,
                    'B': 350
                },
                newValue: 0.75
            },
            4: {
                costs: {
                    'A': 6500,
                    'B': 500
                },
                newValue: 0.68
            },
            5: {
                costs: {
                    'A': 9000,
                    'B': 750
                },
                newValue: 0.62
            }
        }
    },
    'L': {
        unlocked: false,
        bought: false,
        buyingCosts: {
            'A': 6000000000,
            'B': 4000,
            'C': 2000
        },
        amount: 0,
        production_rate: 1,
        production_rate_level: 0,
        production_speed: 1,
        production_speed_level: 0,
        automated_production: false,
        automated_production_costs: {
            'B': 5000
        },
        production_rate_upgrades: {
            1: {
                costs: {
                    'B': 10
                },
                newValue: 1.25
            },
            2: {
                costs: {
                    'B': 15
                },
                newValue: 1.5
            },
            3: {
                costs: {
                    'B': 20
                },
                newValue: 2
            },
            4: {
                costs: {
                    'A': 250,
                    'B': 35
                },
                newValue: 2.25
            },
            5: {
                costs: {
                    'A': 500,
                    'B': 50
                },
                newValue: 2.5
            }
        },
        production_speed_upgrades: {
            1: {
                costs: {
                    'A': 2000,
                    'B': 150
                },
                newValue: 0.95
            },
            2: {
                costs: {
                    'A': 3500,
                    'B': 200
                },
                newValue: 0.8
            },
            3: {
                costs: {
                    'A': 5000,
                    'B': 350
                },
                newValue: 0.75
            },
            4: {
                costs: {
                    'A': 6500,
                    'B': 500
                },
                newValue: 0.68
            },
            5: {
                costs: {
                    'A': 9000,
                    'B': 750
                },
                newValue: 0.62
            }
        }
    },
    'M': {
        unlocked: false,
        bought: false,
        buyingCosts: {
            'A': 6000000000,
            'B': 4000,
            'C': 2000
        },
        amount: 0,
        production_rate: 1,
        production_rate_level: 0,
        production_speed: 1,
        production_speed_level: 0,
        automated_production: false,
        automated_production_costs: {
            'B': 5000
        },
        production_rate_upgrades: {
            1: {
                costs: {
                    'B': 10
                },
                newValue: 1.25
            },
            2: {
                costs: {
                    'B': 15
                },
                newValue: 1.5
            },
            3: {
                costs: {
                    'B': 20
                },
                newValue: 2
            },
            4: {
                costs: {
                    'A': 250,
                    'B': 35
                },
                newValue: 2.25
            },
            5: {
                costs: {
                    'A': 500,
                    'B': 50
                },
                newValue: 2.5
            }
        },
        production_speed_upgrades: {
            1: {
                costs: {
                    'A': 2000,
                    'B': 150
                },
                newValue: 0.95
            },
            2: {
                costs: {
                    'A': 3500,
                    'B': 200
                },
                newValue: 0.8
            },
            3: {
                costs: {
                    'A': 5000,
                    'B': 350
                },
                newValue: 0.75
            },
            4: {
                costs: {
                    'A': 6500,
                    'B': 500
                },
                newValue: 0.68
            },
            5: {
                costs: {
                    'A': 9000,
                    'B': 750
                },
                newValue: 0.62
            }
        }
    },
    'N': {
        unlocked: false,
        bought: false,
        buyingCosts: {
            'A': 6000000000,
            'B': 4000,
            'C': 2000
        },
        amount: 0,
        production_rate: 1,
        production_rate_level: 0,
        production_speed: 1,
        production_speed_level: 0,
        automated_production: false,
        automated_production_costs: {
            'B': 5000
        },
        production_rate_upgrades: {
            1: {
                costs: {
                    'B': 10
                },
                newValue: 1.25
            },
            2: {
                costs: {
                    'B': 15
                },
                newValue: 1.5
            },
            3: {
                costs: {
                    'B': 20
                },
                newValue: 2
            },
            4: {
                costs: {
                    'A': 250,
                    'B': 35
                },
                newValue: 2.25
            },
            5: {
                costs: {
                    'A': 500,
                    'B': 50
                },
                newValue: 2.5
            }
        },
        production_speed_upgrades: {
            1: {
                costs: {
                    'A': 2000,
                    'B': 150
                },
                newValue: 0.95
            },
            2: {
                costs: {
                    'A': 3500,
                    'B': 200
                },
                newValue: 0.8
            },
            3: {
                costs: {
                    'A': 5000,
                    'B': 350
                },
                newValue: 0.75
            },
            4: {
                costs: {
                    'A': 6500,
                    'B': 500
                },
                newValue: 0.68
            },
            5: {
                costs: {
                    'A': 9000,
                    'B': 750
                },
                newValue: 0.62
            }
        }
    },
    'O': {
        unlocked: false,
        bought: false,
        buyingCosts: {
            'A': 6000000000,
            'B': 4000,
            'C': 2000
        },
        amount: 0,
        production_rate: 1,
        production_rate_level: 0,
        production_speed: 1,
        production_speed_level: 0,
        automated_production: false,
        automated_production_costs: {
            'B': 5000
        },
        production_rate_upgrades: {
            1: {
                costs: {
                    'B': 10
                },
                newValue: 1.25
            },
            2: {
                costs: {
                    'B': 15
                },
                newValue: 1.5
            },
            3: {
                costs: {
                    'B': 20
                },
                newValue: 2
            },
            4: {
                costs: {
                    'A': 250,
                    'B': 35
                },
                newValue: 2.25
            },
            5: {
                costs: {
                    'A': 500,
                    'B': 50
                },
                newValue: 2.5
            }
        },
        production_speed_upgrades: {
            1: {
                costs: {
                    'A': 2000,
                    'B': 150
                },
                newValue: 0.95
            },
            2: {
                costs: {
                    'A': 3500,
                    'B': 200
                },
                newValue: 0.8
            },
            3: {
                costs: {
                    'A': 5000,
                    'B': 350
                },
                newValue: 0.75
            },
            4: {
                costs: {
                    'A': 6500,
                    'B': 500
                },
                newValue: 0.68
            },
            5: {
                costs: {
                    'A': 9000,
                    'B': 750
                },
                newValue: 0.62
            }
        }
    },
    'P': {
        unlocked: false,
        bought: false,
        buyingCosts: {
            'A': 6000000000,
            'B': 4000,
            'C': 2000
        },
        amount: 0,
        production_rate: 1,
        production_rate_level: 0,
        production_speed: 1,
        production_speed_level: 0,
        automated_production: false,
        automated_production_costs: {
            'B': 5000
        },
        production_rate_upgrades: {
            1: {
                costs: {
                    'B': 10
                },
                newValue: 1.25
            },
            2: {
                costs: {
                    'B': 15
                },
                newValue: 1.5
            },
            3: {
                costs: {
                    'B': 20
                },
                newValue: 2
            },
            4: {
                costs: {
                    'A': 250,
                    'B': 35
                },
                newValue: 2.25
            },
            5: {
                costs: {
                    'A': 500,
                    'B': 50
                },
                newValue: 2.5
            }
        },
        production_speed_upgrades: {
            1: {
                costs: {
                    'A': 2000,
                    'B': 150
                },
                newValue: 0.95
            },
            2: {
                costs: {
                    'A': 3500,
                    'B': 200
                },
                newValue: 0.8
            },
            3: {
                costs: {
                    'A': 5000,
                    'B': 350
                },
                newValue: 0.75
            },
            4: {
                costs: {
                    'A': 6500,
                    'B': 500
                },
                newValue: 0.68
            },
            5: {
                costs: {
                    'A': 9000,
                    'B': 750
                },
                newValue: 0.62
            }
        }
    },
    'Q': {
        unlocked: false,
        bought: false,
        buyingCosts: {
            'A': 6000000000,
            'B': 4000,
            'C': 2000
        },
        amount: 0,
        production_rate: 1,
        production_rate_level: 0,
        production_speed: 1,
        production_speed_level: 0,
        automated_production: false,
        automated_production_costs: {
            'B': 5000
        },
        production_rate_upgrades: {
            1: {
                costs: {
                    'B': 10
                },
                newValue: 1.25
            },
            2: {
                costs: {
                    'B': 15
                },
                newValue: 1.5
            },
            3: {
                costs: {
                    'B': 20
                },
                newValue: 2
            },
            4: {
                costs: {
                    'A': 250,
                    'B': 35
                },
                newValue: 2.25
            },
            5: {
                costs: {
                    'A': 500,
                    'B': 50
                },
                newValue: 2.5
            }
        },
        production_speed_upgrades: {
            1: {
                costs: {
                    'A': 2000,
                    'B': 150
                },
                newValue: 0.95
            },
            2: {
                costs: {
                    'A': 3500,
                    'B': 200
                },
                newValue: 0.8
            },
            3: {
                costs: {
                    'A': 5000,
                    'B': 350
                },
                newValue: 0.75
            },
            4: {
                costs: {
                    'A': 6500,
                    'B': 500
                },
                newValue: 0.68
            },
            5: {
                costs: {
                    'A': 9000,
                    'B': 750
                },
                newValue: 0.62
            }
        }
    },
    'R': {
        unlocked: false,
        bought: false,
        buyingCosts: {
            'A': 6000000000,
            'B': 4000,
            'C': 2000
        },
        amount: 0,
        production_rate: 1,
        production_rate_level: 0,
        production_speed: 1,
        production_speed_level: 0,
        automated_production: false,
        automated_production_costs: {
            'B': 5000
        },
        production_rate_upgrades: {
            1: {
                costs: {
                    'B': 10
                },
                newValue: 1.25
            },
            2: {
                costs: {
                    'B': 15
                },
                newValue: 1.5
            },
            3: {
                costs: {
                    'B': 20
                },
                newValue: 2
            },
            4: {
                costs: {
                    'A': 250,
                    'B': 35
                },
                newValue: 2.25
            },
            5: {
                costs: {
                    'A': 500,
                    'B': 50
                },
                newValue: 2.5
            }
        },
        production_speed_upgrades: {
            1: {
                costs: {
                    'A': 2000,
                    'B': 150
                },
                newValue: 0.95
            },
            2: {
                costs: {
                    'A': 3500,
                    'B': 200
                },
                newValue: 0.8
            },
            3: {
                costs: {
                    'A': 5000,
                    'B': 350
                },
                newValue: 0.75
            },
            4: {
                costs: {
                    'A': 6500,
                    'B': 500
                },
                newValue: 0.68
            },
            5: {
                costs: {
                    'A': 9000,
                    'B': 750
                },
                newValue: 0.62
            }
        }
    },
    'S': {
        unlocked: false,
        bought: false,
        buyingCosts: {
            'A': 6000000000,
            'B': 4000,
            'C': 2000
        },
        amount: 0,
        production_rate: 1,
        production_rate_level: 0,
        production_speed: 1,
        production_speed_level: 0,
        automated_production: false,
        automated_production_costs: {
            'B': 5000
        },
        production_rate_upgrades: {
            1: {
                costs: {
                    'B': 10
                },
                newValue: 1.25
            },
            2: {
                costs: {
                    'B': 15
                },
                newValue: 1.5
            },
            3: {
                costs: {
                    'B': 20
                },
                newValue: 2
            },
            4: {
                costs: {
                    'A': 250,
                    'B': 35
                },
                newValue: 2.25
            },
            5: {
                costs: {
                    'A': 500,
                    'B': 50
                },
                newValue: 2.5
            }
        },
        production_speed_upgrades: {
            1: {
                costs: {
                    'A': 2000,
                    'B': 150
                },
                newValue: 0.95
            },
            2: {
                costs: {
                    'A': 3500,
                    'B': 200
                },
                newValue: 0.8
            },
            3: {
                costs: {
                    'A': 5000,
                    'B': 350
                },
                newValue: 0.75
            },
            4: {
                costs: {
                    'A': 6500,
                    'B': 500
                },
                newValue: 0.68
            },
            5: {
                costs: {
                    'A': 9000,
                    'B': 750
                },
                newValue: 0.62
            }
        }
    },
    'T': {
        unlocked: false,
        bought: false,
        buyingCosts: {
            'A': 6000000000,
            'B': 4000,
            'C': 2000
        },
        amount: 0,
        production_rate: 1,
        production_rate_level: 0,
        production_speed: 1,
        production_speed_level: 0,
        automated_production: false,
        automated_production_costs: {
            'B': 5000
        },
        production_rate_upgrades: {
            1: {
                costs: {
                    'B': 10
                },
                newValue: 1.25
            },
            2: {
                costs: {
                    'B': 15
                },
                newValue: 1.5
            },
            3: {
                costs: {
                    'B': 20
                },
                newValue: 2
            },
            4: {
                costs: {
                    'A': 250,
                    'B': 35
                },
                newValue: 2.25
            },
            5: {
                costs: {
                    'A': 500,
                    'B': 50
                },
                newValue: 2.5
            }
        },
        production_speed_upgrades: {
            1: {
                costs: {
                    'A': 2000,
                    'B': 150
                },
                newValue: 0.95
            },
            2: {
                costs: {
                    'A': 3500,
                    'B': 200
                },
                newValue: 0.8
            },
            3: {
                costs: {
                    'A': 5000,
                    'B': 350
                },
                newValue: 0.75
            },
            4: {
                costs: {
                    'A': 6500,
                    'B': 500
                },
                newValue: 0.68
            },
            5: {
                costs: {
                    'A': 9000,
                    'B': 750
                },
                newValue: 0.62
            }
        }
    },
    'U': {
        unlocked: false,
        bought: false,
        buyingCosts: {
            'A': 6000000000,
            'B': 4000,
            'C': 2000
        },
        amount: 0,
        production_rate: 1,
        production_rate_level: 0,
        production_speed: 1,
        production_speed_level: 0,
        automated_production: false,
        automated_production_costs: {
            'B': 5000
        },
        production_rate_upgrades: {
            1: {
                costs: {
                    'B': 10
                },
                newValue: 1.25
            },
            2: {
                costs: {
                    'B': 15
                },
                newValue: 1.5
            },
            3: {
                costs: {
                    'B': 20
                },
                newValue: 2
            },
            4: {
                costs: {
                    'A': 250,
                    'B': 35
                },
                newValue: 2.25
            },
            5: {
                costs: {
                    'A': 500,
                    'B': 50
                },
                newValue: 2.5
            }
        },
        production_speed_upgrades: {
            1: {
                costs: {
                    'A': 2000,
                    'B': 150
                },
                newValue: 0.95
            },
            2: {
                costs: {
                    'A': 3500,
                    'B': 200
                },
                newValue: 0.8
            },
            3: {
                costs: {
                    'A': 5000,
                    'B': 350
                },
                newValue: 0.75
            },
            4: {
                costs: {
                    'A': 6500,
                    'B': 500
                },
                newValue: 0.68
            },
            5: {
                costs: {
                    'A': 9000,
                    'B': 750
                },
                newValue: 0.62
            }
        }
    },
    'V': {
        unlocked: false,
        bought: false,
        buyingCosts: {
            'A': 6000000000,
            'B': 4000,
            'C': 2000
        },
        amount: 0,
        production_rate: 1,
        production_rate_level: 0,
        production_speed: 1,
        production_speed_level: 0,
        automated_production: false,
        automated_production_costs: {
            'B': 5000
        },
        production_rate_upgrades: {
            1: {
                costs: {
                    'B': 10
                },
                newValue: 1.25
            },
            2: {
                costs: {
                    'B': 15
                },
                newValue: 1.5
            },
            3: {
                costs: {
                    'B': 20
                },
                newValue: 2
            },
            4: {
                costs: {
                    'A': 250,
                    'B': 35
                },
                newValue: 2.25
            },
            5: {
                costs: {
                    'A': 500,
                    'B': 50
                },
                newValue: 2.5
            }
        },
        production_speed_upgrades: {
            1: {
                costs: {
                    'A': 2000,
                    'B': 150
                },
                newValue: 0.95
            },
            2: {
                costs: {
                    'A': 3500,
                    'B': 200
                },
                newValue: 0.8
            },
            3: {
                costs: {
                    'A': 5000,
                    'B': 350
                },
                newValue: 0.75
            },
            4: {
                costs: {
                    'A': 6500,
                    'B': 500
                },
                newValue: 0.68
            },
            5: {
                costs: {
                    'A': 9000,
                    'B': 750
                },
                newValue: 0.62
            }
        }
    },
    'W': {
        unlocked: false,
        bought: false,
        buyingCosts: {
            'A': 6000000000,
            'B': 4000,
            'C': 2000
        },
        amount: 0,
        production_rate: 1,
        production_rate_level: 0,
        production_speed: 1,
        production_speed_level: 0,
        automated_production: false,
        automated_production_costs: {
            'B': 5000
        },
        production_rate_upgrades: {
            1: {
                costs: {
                    'B': 10
                },
                newValue: 1.25
            },
            2: {
                costs: {
                    'B': 15
                },
                newValue: 1.5
            },
            3: {
                costs: {
                    'B': 20
                },
                newValue: 2
            },
            4: {
                costs: {
                    'A': 250,
                    'B': 35
                },
                newValue: 2.25
            },
            5: {
                costs: {
                    'A': 500,
                    'B': 50
                },
                newValue: 2.5
            }
        },
        production_speed_upgrades: {
            1: {
                costs: {
                    'A': 2000,
                    'B': 150
                },
                newValue: 0.95
            },
            2: {
                costs: {
                    'A': 3500,
                    'B': 200
                },
                newValue: 0.8
            },
            3: {
                costs: {
                    'A': 5000,
                    'B': 350
                },
                newValue: 0.75
            },
            4: {
                costs: {
                    'A': 6500,
                    'B': 500
                },
                newValue: 0.68
            },
            5: {
                costs: {
                    'A': 9000,
                    'B': 750
                },
                newValue: 0.62
            }
        }
    },
    'X': {
        unlocked: false,
        bought: false,
        buyingCosts: {
            'A': 6000000000,
            'B': 4000,
            'C': 2000
        },
        amount: 0,
        production_rate: 1,
        production_rate_level: 0,
        production_speed: 1,
        production_speed_level: 0,
        automated_production: false,
        automated_production_costs: {
            'B': 5000
        },
        production_rate_upgrades: {
            1: {
                costs: {
                    'B': 10
                },
                newValue: 1.25
            },
            2: {
                costs: {
                    'B': 15
                },
                newValue: 1.5
            },
            3: {
                costs: {
                    'B': 20
                },
                newValue: 2
            },
            4: {
                costs: {
                    'A': 250,
                    'B': 35
                },
                newValue: 2.25
            },
            5: {
                costs: {
                    'A': 500,
                    'B': 50
                },
                newValue: 2.5
            }
        },
        production_speed_upgrades: {
            1: {
                costs: {
                    'A': 2000,
                    'B': 150
                },
                newValue: 0.95
            },
            2: {
                costs: {
                    'A': 3500,
                    'B': 200
                },
                newValue: 0.8
            },
            3: {
                costs: {
                    'A': 5000,
                    'B': 350
                },
                newValue: 0.75
            },
            4: {
                costs: {
                    'A': 6500,
                    'B': 500
                },
                newValue: 0.68
            },
            5: {
                costs: {
                    'A': 9000,
                    'B': 750
                },
                newValue: 0.62
            }
        }
    },
    'Y': {
        unlocked: false,
        bought: false,
        buyingCosts: {
            'A': 6000000000,
            'B': 4000,
            'C': 2000
        },
        amount: 0,
        production_rate: 1,
        production_rate_level: 0,
        production_speed: 1,
        production_speed_level: 0,
        automated_production: false,
        automated_production_costs: {
            'B': 5000
        },
        production_rate_upgrades: {
            1: {
                costs: {
                    'B': 10
                },
                newValue: 1.25
            },
            2: {
                costs: {
                    'B': 15
                },
                newValue: 1.5
            },
            3: {
                costs: {
                    'B': 20
                },
                newValue: 2
            },
            4: {
                costs: {
                    'A': 250,
                    'B': 35
                },
                newValue: 2.25
            },
            5: {
                costs: {
                    'A': 500,
                    'B': 50
                },
                newValue: 2.5
            }
        },
        production_speed_upgrades: {
            1: {
                costs: {
                    'A': 2000,
                    'B': 150
                },
                newValue: 0.95
            },
            2: {
                costs: {
                    'A': 3500,
                    'B': 200
                },
                newValue: 0.8
            },
            3: {
                costs: {
                    'A': 5000,
                    'B': 350
                },
                newValue: 0.75
            },
            4: {
                costs: {
                    'A': 6500,
                    'B': 500
                },
                newValue: 0.68
            },
            5: {
                costs: {
                    'A': 9000,
                    'B': 750
                },
                newValue: 0.62
            }
        }
    },
    'Z': {
        unlocked: false,
        bought: false,
        buyingCosts: {
            'A': 6000000000,
            'B': 4000,
            'C': 2000
        },
        amount: 0,
        production_rate: 1,
        production_rate_level: 0,
        production_speed: 1,
        production_speed_level: 0,
        automated_production: false,
        automated_production_costs: {
            'B': 5000
        },
        production_rate_upgrades: {
            1: {
                costs: {
                    'B': 10
                },
                newValue: 1.25
            },
            2: {
                costs: {
                    'B': 15
                },
                newValue: 1.5
            },
            3: {
                costs: {
                    'B': 20
                },
                newValue: 2
            },
            4: {
                costs: {
                    'A': 250,
                    'B': 35
                },
                newValue: 2.25
            },
            5: {
                costs: {
                    'A': 500,
                    'B': 50
                },
                newValue: 2.5
            }
        },
        production_speed_upgrades: {
            1: {
                costs: {
                    'A': 2000,
                    'B': 150
                },
                newValue: 0.95
            },
            2: {
                costs: {
                    'A': 3500,
                    'B': 200
                },
                newValue: 0.8
            },
            3: {
                costs: {
                    'A': 5000,
                    'B': 350
                },
                newValue: 0.75
            },
            4: {
                costs: {
                    'A': 6500,
                    'B': 500
                },
                newValue: 0.68
            },
            5: {
                costs: {
                    'A': 9000,
                    'B': 750
                },
                newValue: 0.62
            }
        }
    }
})