import {ActionIcon, Button, Flex, Text, Tooltip} from "@mantine/core";
import {IconArrowBigUp} from "@tabler/icons-react";
import LetterButtonInterface, {
    LetterButtonLetterInterface,
    SingleUpgradeInterface,
    UpgradeSlotsInitialCostsInterface
} from "../../../interfaces/letterButton";
import {useAtom, useAtomValue, useSetAtom} from "jotai";
import {colorsAtom} from "../../../atoms/colors";
import {lettersAtom} from "../../../atoms/letters";
import {useState} from "react";
import {suffixesAtom} from "../../../atoms/suffixes";
import changeNumberDisplay from "../../../functions/changeNumberDisplay";
import {activeTabAtom} from "../../../atoms/activeTab";
import {activeLetterAtom} from "../../../atoms/upgradeLetter";
import findLevelCap from "../../../functions/findLevelCap";
import {calculateIncreasingGrowth} from "../../../functions/calculateGrowth";
import {useSynchronizedInterval} from "interval-hooks";
import CostsUpgradeInterface from "../../../interfaces/upgradeCosts";

export default function ActiveButton({letter}: LetterButtonLetterInterface) {
    const colors = useAtomValue(colorsAtom)
    const [letters, setLetters] = useAtom(lettersAtom)
    const suffixes = useAtomValue(suffixesAtom)
    const setActiveTab = useSetAtom(activeTabAtom)
    const setActiveLetter = useSetAtom(activeLetterAtom)

    const [isIntervalRunning, setIsIntervalRunning] = useState(false)

    // const borderFill = keyframes({
    //     "0%": {
    //         borderBottomWidth: 0
    //     },
    //     "100%": {
    //         borderBottomWidth: "100%"
    //     }
    // })

    // const useStyles = createStyles((theme) => ({
    //     animatedButton: {
    //         position: "relative",
    //         overflow: "hidden",
    //         border: "2px solid #F3G5H7",
    //         borderRadius: "4px",
    //         padding: "10px",
    //         backgroundColor: "transparent",
    //         color: "#000",
    //         fontSize: "16px",
    //         transition: `$border-color 0.5s`,
    //         '&.active': {
    //             borderColor: "#F3G5H7",
    //             animation: `${borderFill} 1s ease-in-out`
    //         }
    //     },
    // }))
    //
    // const {classes} = useStyles()

    const handleButtonClick = () => {
        if (!isIntervalRunning) {
            setIsIntervalRunning(true)
            const interval = setInterval(() => {
                const updatedLetters = Object.assign({}, letters)
                updatedLetters[letter].amount = Number(
                    (updatedLetters[letter].amount + updatedLetters[letter].productionRate).toFixed(2)
                )
                setLetters(updatedLetters)
                clearInterval(interval)
                setIsIntervalRunning(false)
            }, 1000 * letters[letter].productionSpeed)
        }
    }

    const handleUpgradeClick = () => {
        setActiveLetter(letter)
        setActiveTab("Upgrades")
    }

    const updateAmount = () => {
        const updatedLetters = Object.assign({}, letters)
        updatedLetters[letter].amount = Number(
            (updatedLetters[letter].amount + updatedLetters[letter].productionRate).toFixed(2)
        )
        setLetters(updatedLetters)
    }

    useSynchronizedInterval(
        () => {
            updateAmount()
        },
        letters[letter].automatedProduction ? 1000 * letters[letter].productionSpeed : null
    )

    return (
        <Flex
            w={152}
            h={152}
            justify="flex-end"
        >
            {/*<Progress*/}
            {/*    size="sm"*/}
            {/*    value={progressBarValue}*/}
            {/*    h="100%"*/}
            {/*    w="100%"*/}
            {/*    sx={{*/}
            {/*        zIndex: 0,*/}
            {/*        bottom: 0,*/}
            {/*        position: "absolute"*/}
            {/*    }}*/}
            {/*/>*/}
            <Tooltip label="Upgrades">
                <ActionIcon
                    variant="filled"
                    sx={{
                        zIndex: 5,
                        backgroundColor:
                            checkIfUpgradeBuyable(letters, letter) ?
                                colors.accent3Color :
                                colors.accent2Color,
                        color: colors.darkGray,
                        right: 3,
                        top: 2,
                        borderTopLeftRadius: 0,
                        borderTopRightRadius: 10,
                        borderBottomRightRadius: 0,
                        borderBottomLeftRadius: 10,
                        "&:hover": {
                            backgroundColor:
                                checkIfUpgradeBuyable(letters, letter) ?
                                    colors.accent3ColorAccent :
                                    colors.accent2ColorAccent,
                            color: colors.lightGray
                        }
                    }}
                    onClick={() => handleUpgradeClick()}
                >
                    <IconArrowBigUp/>
                </ActionIcon>
            </Tooltip>
            <Button
                w={152}
                h={152}
                sx={{
                    position: "absolute",
                    backgroundColor: colors.mainColor,
                    border: "2px solid",
                    borderColor: colors.mainColorAccent,
                    boxShadow: `6px 6px 8px -2px ${colors.mainColorAccent}`,
                    borderRadius: "10px",
                    color: colors.lightGray,
                    margin: 0,
                    "&:hover": {
                        backgroundColor: colors.mainColorAccent
                    }
                }}
                onClick={() => handleButtonClick()}
            >
                <Flex
                    direction="column"
                    justify="center"
                    align="center"
                    gap={3}
                    h="100%"
                >
                    <Text
                        size="4rem"
                        style={{
                            zIndex: 1
                        }}
                    >
                        {letter}
                    </Text>
                    <Text
                        size="1.2rem"
                        style={{
                            zIndex: 1
                        }}
                    >
                        {
                            letters[letter].amount > 9999 ?
                                changeNumberDisplay(Number(letters[letter].amount.toFixed(0)), suffixes) :
                                letters[letter].amount
                        }
                    </Text>
                </Flex>
            </Button>
        </Flex>
    )
}

function checkIfUpgradeBuyable(letters: LetterButtonInterface, letter: string) {
    let buyable = false
    const productionRateLevelCurrent = letters[letter].productionRateLevel
    const productionSpeedLevelCurrent = letters[letter].productionSpeedLevel
    const productionRateLevelCap = findLevelCap(productionRateLevelCurrent + 1, letters[letter].productionRateUpgrades)
    const productionRateLevelCapCurrent = findLevelCap(productionRateLevelCurrent, letters[letter].productionRateUpgrades)
    const productionSpeedLevelCap = findLevelCap(productionSpeedLevelCurrent + 1, letters[letter].productionSpeedUpgrades)
    const productionSpeedLevelCapCurrent = findLevelCap(productionSpeedLevelCurrent, letters[letter].productionSpeedUpgrades)
    if (productionRateLevelCap && productionRateLevelCapCurrent && !buyable) {
        buyable = checkIfSingleUpgradeBuyable(
            productionRateLevelCap.upgradeData,
            productionRateLevelCapCurrent.upgradeData,
            letters[letter].productionRateInitialCosts,
            productionRateLevelCurrent,
            letters
        )
    }
    if (productionSpeedLevelCap && productionSpeedLevelCapCurrent && !buyable) {
        buyable = checkIfSingleUpgradeBuyable(
            productionSpeedLevelCap.upgradeData,
            productionSpeedLevelCapCurrent.upgradeData,
            letters[letter].productionSpeedInitialCosts,
            productionSpeedLevelCurrent,
            letters
        )
    }
    if (!letters[letter].automatedProduction && !buyable) {
        Object.keys(letters[letter].automatedProductionCosts).map((key) => {
            if (letters[key].amount >= letters[letter].automatedProductionCosts[key]) {
                buyable = true
            }
        })
    }
    return buyable
}

function checkIfSingleUpgradeBuyable(
    levelCap: SingleUpgradeInterface,
    levelCapCurrent: SingleUpgradeInterface,
    currentInitialCosts: UpgradeSlotsInitialCostsInterface,
    levelCurrent: number,
    letters: LetterButtonInterface
) {
    const upgradeCosts: CostsUpgradeInterface = {
        'slot1': {
            costs: 0,
            letter: 'A'
        },
        'slot2': {
            costs: 0,
            letter: 'A'
        },
        'slot3': {
            costs: 0,
            letter: 'A'
        },
        'slot4': {
            costs: 0,
            letter: 'A'
        }
    }
    let futureInitialCosts = 0
    let buyable = true
    if (levelCap.upgradeSlots) {
        Object.keys(levelCap.upgradeSlots).map((key) => {
            if (levelCapCurrent.costsGrowthRate !== levelCap.costsGrowthRate) {
                futureInitialCosts = calculateIncreasingGrowth(
                    levelCapCurrent.costsGrowthRate,
                    currentInitialCosts[key],
                    levelCurrent
                )
            } else {
                futureInitialCosts = currentInitialCosts[key]
            }
            if (levelCap.upgradeSlots) {
                Object.keys(levelCap.upgradeSlots).map((key) => {
                    upgradeCosts[key].costs = calculateIncreasingGrowth(
                        levelCap.costsGrowthRate,
                        futureInitialCosts,
                        levelCurrent + 1
                    )
                })
                if (
                    upgradeCosts[key].costs > 0 && letters[levelCap.upgradeSlots[key]].amount < upgradeCosts[key].costs
                ) {
                    buyable = false
                }
            }
        })
        return buyable
    } else {
        return buyable
    }
}