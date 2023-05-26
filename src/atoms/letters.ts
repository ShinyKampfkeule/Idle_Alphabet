import {atom} from "jotai"
import LetterButtonInterface from "../interfaces/letterButton";

export const lettersAtom = atom<LetterButtonInterface>({
    'A': {
        unlocked: true,
        bought: false,
        amount: 0,
        production_rate: 2000,
        production_rate_level: 0,
        production_speed: 0.1,
        production_speed_level: 0,
        automated_production: false,
        automated_production_costs: {
            'A': 5000
        },
        production_rate_upgrades: {
            1: {
                costs: {
                    'A': 10
                },
                newValue: 1.25
            },
            2: {
                costs: {
                    'A': 15
                },
                newValue: 1.5
            },
            3: {
                costs: {
                    'A': 20
                },
                newValue: 2
            },
            4: {
                costs: {
                    'A': 35
                },
                newValue: 2.25
            },
            5: {
                costs: {
                    'A': 50
                },
                newValue: 2.5
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
        production_rate: 2000,
        production_rate_level: 0,
        production_speed: 0.75,
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
        production_rate: 2000,
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
        production_rate: 2000,
        production_rate_level: 0,
        production_speed: 2,
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