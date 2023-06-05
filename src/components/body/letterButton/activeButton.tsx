import {ActionIcon, Button, Flex, Text, Tooltip} from "@mantine/core";
import {IconArrowBigUp} from "@tabler/icons-react";
import LetterButtonInterface, {LetterButtonLetterInterface} from "../../../interfaces/letterButton";
import {useAtom, useAtomValue, useSetAtom} from "jotai";
import {colorsAtom} from "../../../atoms/colors";
import {lettersAtom} from "../../../atoms/letters";
import {useEffect, useState} from "react";
import {suffixesAtom} from "../../../atoms/suffixes";
import changeNumberDisplay from "../../../functions/changeNumberDisplay";
import {activeTabAtom} from "../../../atoms/activeTab";
import {activeLetterAtom} from "../../../atoms/upgradeLetter";
import findLevelCap from "../../../functions/findLevelCap";
import {calculateIncreasingGrowth} from "../../../functions/calculateGrowth";

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
                updatedLetters[letter].amount = Number((updatedLetters[letter].amount + updatedLetters[letter].productionRate).toFixed(2))
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

    useEffect(() => {
        const intervalID = setInterval(() => {
            if (letters[letter].automatedProduction) {
                setIsIntervalRunning(true)
                const updatedLetters = Object.assign({}, letters)
                updatedLetters[letter].amount = Number((updatedLetters[letter].amount + updatedLetters[letter].productionRate).toFixed(2))
                setLetters(updatedLetters)
            }
        }, 1000 * letters[letter].productionSpeed)

        return () => {
            clearInterval(intervalID)
        }
    }, [letters])

    return (
        <Flex
            w={152}
            h={152}
            justify="flex-end"
        >
            <Tooltip label="Upgrades">
                <ActionIcon
                    variant="filled"
                    sx={{
                        zIndex: 5,
                        backgroundColor: checkIfUpgradeBuyable(letters, letter) ? colors.accent3Color : colors.accent2Color,
                        color: colors.darkGray,
                        right: 3,
                        top: 2,
                        borderTopLeftRadius: 0,
                        borderTopRightRadius: 10,
                        borderBottomRightRadius: 0,
                        borderBottomLeftRadius: 10,
                        "&:hover": {
                            backgroundColor: checkIfUpgradeBuyable(letters, letter) ? colors.accent3ColorAccent : colors.accent2ColorAccent,
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
                // className={isIntervalRunning ? classes.animatedButton + ' active' : classes.animatedButton}
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
                >
                    <Text
                        size="4rem"
                    >
                        {letter}
                    </Text>
                    <Text
                        size="1.2rem"
                    >
                        {letters[letter].amount > 9999 ? changeNumberDisplay(Number(letters[letter].amount.toFixed(0)), suffixes) : letters[letter].amount}
                    </Text>
                </Flex>
            </Button>
        </Flex>
    )
}

function checkIfUpgradeBuyable(letters: LetterButtonInterface, letter: string) {
    let buyable = false
    const productionRateLevel = letters[letter].productionRateLevel + 1
    const productionSpeedLevel = letters[letter].productionSpeedLevel + 1
    let productionRateBuyable = true
    const productionRateLevelCap = findLevelCap(productionRateLevel, letters[letter].productionRateUpgrades)
    if (productionRateLevelCap && productionRateLevelCap.upgradeSlots) {
        Object.keys(productionRateLevelCap.upgradeSlots).map((key) => {
            if (productionRateLevelCap && productionRateLevelCap.upgradeSlots) {
                let upgradeCosts = 0
                if (productionRateLevelCap) {
                    if (productionRateLevelCap.upgradeSlots) {
                        Object.keys(productionRateLevelCap.upgradeSlots).map((key) => {
                            upgradeCosts += calculateIncreasingGrowth(
                                productionRateLevelCap.costsGrowthRate,
                                letters[letter].productionSpeedInitialCosts[key],
                                letters[letter].productionRateLevel + 1
                            )
                        })
                    }
                }
                if (letters[productionRateLevelCap.upgradeSlots[key]].amount < upgradeCosts) {
                    productionRateBuyable = false
                }
            }
        })
    }
    if (productionRateBuyable) {
        buyable = productionRateBuyable
    }
    let productionSpeedBuyable = true
    const productionSpeedLevelCap = findLevelCap(productionSpeedLevel, letters[letter].productionSpeedUpgrades)
    if (productionSpeedLevelCap && productionSpeedLevelCap.upgradeSlots) {
        Object.keys(productionSpeedLevelCap.upgradeSlots).map((key) => {
            if (productionSpeedLevelCap && productionSpeedLevelCap.upgradeSlots) {
                let upgradeCosts = 0
                if (productionSpeedLevelCap) {
                    if (productionSpeedLevelCap.upgradeSlots) {
                        Object.keys(productionSpeedLevelCap.upgradeSlots).map((key) => {
                            upgradeCosts += calculateIncreasingGrowth(
                                productionSpeedLevelCap.costsGrowthRate,
                                letters[letter].productionSpeedInitialCosts[key],
                                letters[letter].productionSpeedLevel + 1
                            )
                        })
                    }
                }
                if (letters[productionSpeedLevelCap.upgradeSlots[key]].amount < upgradeCosts) {
                    productionSpeedBuyable = false
                }
            }
        })
    }
    if (productionSpeedBuyable) {
        buyable = productionSpeedBuyable
    }
    if (!letters[letter].automatedProduction) {
        Object.keys(letters[letter].automatedProductionCosts).map((key) => {
            if (letters[key].amount >= letters[letter].automatedProductionCosts[key]) {
                buyable = true
            }
        })
    }
    return buyable
}