import {Button, Grid, Paper, Text, Title} from "@mantine/core";
import {useAtom, useAtomValue} from "jotai";
import {colorsAtom} from "../../../atoms/colors";
import UpgradeButtonInterface from "../../../interfaces/upgradeButton";
import {lettersAtom} from "../../../atoms/letters";
import {useEffect, useState} from "react";
import LetterButtonInterface, {UpgradeCostsInterface, UpgradeSlotsInterface} from "../../../interfaces/letterButton";
import {suffixesAtom} from "../../../atoms/suffixes";
import changeNumberDisplay from "../../../functions/changeNumberDisplay";
import {IconArrowBigUp} from "@tabler/icons-react";
import CostsUpgradeInterface from "../../../interfaces/upgradeCosts";
import findLevelCap from "../../../functions/findLevelCap";
import {calculateDecreasingGrowth, calculateIncreasingGrowth} from "../../../functions/calculateGrowth";

export default function UpgradeButton({upgrade, letter}: UpgradeButtonInterface) {
    const colors = useAtomValue(colorsAtom)
    const [letters, setLetters] = useAtom(lettersAtom)
    const suffixes = useAtomValue(suffixesAtom)

    const [currentRate, setCurrentRate] = useState("0")
    const [nextRate, setNextRate] = useState("0")
    const [upgradeCosts, setUpgradeCosts] = useState<CostsUpgradeInterface>({
        "slot1": {
            costs: 0,
            letter: ""
        }
    })

    const upgradeButtonClick = () => {
        const updatedLetters = Object.assign({}, letters)
        let currentLevel = 0
        let nextLevel = 0
        let currentLevelCap: { costsGrowthRate: number; functionalityGrowthRate: number; upgradeSlots?: UpgradeSlotsInterface; } | undefined = undefined
        let nextLevelCap: { costsGrowthRate: number; functionalityGrowthRate: number; upgradeSlots?: UpgradeSlotsInterface; } | undefined = undefined
        const currentLetterData = updatedLetters[letter]
        switch (upgrade) {
            case 'Increase Production Speed':
                // console.log(updatedLetters[letter])
                currentLevel = currentLetterData.productionSpeedLevel
                nextLevel = currentLevel + 1
                currentLevelCap = findLevelCap(currentLevel, currentLetterData.productionRateUpgrades)
                nextLevelCap = findLevelCap(nextLevel, currentLetterData.productionRateUpgrades)
                // console.log(currentLevelCap)
                // console.log(nextLevelCap)
                currentLetterData.productionSpeedLevel = nextLevel
                if (nextLevelCap && currentLevelCap) {
                    if (nextLevelCap.costsGrowthRate !== currentLevelCap.costsGrowthRate) {
                        currentLetterData.productionInitSpeed = currentLetterData.productionSpeed
                        if (currentLevelCap.upgradeSlots) {
                            Object.keys(currentLevelCap.upgradeSlots).map((key) => {
                                // console.log(key)
                                if (currentLevelCap) {
                                    currentLetterData.productionSpeedInitialCosts[key] = Math.round(calculateIncreasingGrowth(
                                        currentLevelCap.costsGrowthRate, currentLetterData.productionSpeedInitialCosts[key], currentLevel
                                    ))
                                }
                            })
                        }
                    }
                    currentLetterData.productionSpeed = calculateDecreasingGrowth(
                        nextLevelCap.functionalityGrowthRate, currentLetterData.productionInitSpeed, currentLevel
                    )
                    if (nextLevelCap.upgradeSlots && nextLevelCap.costsGrowthRate) {
                        Object.keys(nextLevelCap.upgradeSlots).map((key) => {
                            if (nextLevelCap && nextLevelCap.upgradeSlots) {
                                // console.log(nextLevelCap.costsGrowthRate)
                                // console.log(currentLetterData.productionSpeedInitialCosts[key])
                                // console.log(nextLevel)
                                // console.log(Math.round(calculateIncreasingGrowth(
                                //     nextLevelCap.costsGrowthRate, currentLetterData.productionSpeedInitialCosts[key], nextLevel
                                // )))
                                updatedLetters[nextLevelCap.upgradeSlots[key]].amount -= Math.round(calculateIncreasingGrowth(
                                    nextLevelCap.costsGrowthRate, currentLetterData.productionSpeedInitialCosts[key], nextLevel
                                ))
                            }
                        })
                    }
                }
                break
            case 'Increase Production Rate':
                // currentLevel = currentLetterData.productionRateLevel
                // nextLevel = currentLevel + 1
                // updatedLetters[letter].productionRate = currentLetterData.productionRateUpgrades[nextLevel].newValue
                // updatedLetters[letter].productionRateLevel = nextLevel
                // Object.keys(currentLetterData.productionRateUpgrades[nextLevel].costs).map((key) => {
                //     updatedLetters[key].amount -= currentLetterData.productionRateUpgrades[nextLevel].costs[key]
                // })
                break
            case 'Automate Production':
                // updatedLetters[letter].automatedProduction = true
                // Object.keys(currentLetterData.automatedProductionCosts).map((key) => {
                //     updatedLetters[key].amount -= currentLetterData.automatedProductionCosts[key]
                // })
                break
        }
        setLetters(updatedLetters)
    }

    useEffect(() => {
        console.log(letters[letter].productionSpeedLevel + 1)
        let automateUpgrades: UpgradeCostsInterface = {}
        const currentLevelCapSpeed = findLevelCap(letters[letter].productionSpeedLevel, letters[letter].productionSpeedUpgrades)
        const currentLevelCapRate = findLevelCap(letters[letter].productionRateLevel, letters[letter].productionRateUpgrades)
        const levelCapSpeed = findLevelCap(letters[letter].productionSpeedLevel + 1, letters[letter].productionSpeedUpgrades)
        const levelCapRate = findLevelCap(letters[letter].productionRateLevel + 1, letters[letter].productionRateUpgrades)
        const newUpgradeCosts = Object.assign({}, upgradeCosts)
        let initalCosts = 0
        switch (upgrade) {
            case 'Increase Production Speed':
                setCurrentRate(`${letters[letter].productionSpeed} sec`)
                if (levelCapSpeed && levelCapSpeed.upgradeSlots) {
                    setNextRate(`${calculateDecreasingGrowth(levelCapSpeed.functionalityGrowthRate, letters[letter].productionSpeed, letters[letter].productionSpeedLevel)} sec`)
                    Object.keys(levelCapSpeed.upgradeSlots).map((key) => {
                        if (levelCapSpeed && levelCapSpeed.upgradeSlots) {
                            if (!Object.keys(newUpgradeCosts).includes(key)) {
                                newUpgradeCosts[key] = {
                                    costs: 0,
                                    letter: 'A'
                                }
                            }
                            if (currentLevelCapSpeed && levelCapSpeed) {
                                console.log(currentLevelCapSpeed.costsGrowthRate)
                                console.log(levelCapSpeed.costsGrowthRate)
                                if (currentLevelCapSpeed.costsGrowthRate !== levelCapSpeed.costsGrowthRate) {
                                    initalCosts = Math.round(calculateIncreasingGrowth(
                                        currentLevelCapSpeed.costsGrowthRate, letters[letter].productionSpeedInitialCosts[key], letters[letter].productionSpeedLevel
                                    ))
                                } else {
                                    initalCosts = letters[letter].productionSpeedInitialCosts[key]
                                }
                            }
                            console.log(levelCapSpeed.costsGrowthRate)
                            console.log(initalCosts)
                            console.log(letters[letter].productionSpeedLevel)
                            console.log(Math.round(calculateIncreasingGrowth(
                                currentLevelCapSpeed.costsGrowthRate,
                                letters[letter].productionSpeedInitialCosts[key],
                                letters[letter].productionSpeedLevel + 1
                            )))
                            newUpgradeCosts[key].costs = Math.round(calculateIncreasingGrowth(
                                levelCapSpeed.costsGrowthRate,
                                initalCosts,
                                letters[letter].productionSpeedLevel + 1
                            ))
                            newUpgradeCosts[key].letter = levelCapSpeed.upgradeSlots[key]
                        }
                    })
                    setUpgradeCosts(newUpgradeCosts)
                }
                break
            case 'Increase Production Rate':
                setCurrentRate(`${letters[letter].productionRate}`)
                if (levelCapRate && levelCapRate.upgradeSlots) {
                    setNextRate(`${calculateIncreasingGrowth(levelCapRate.functionalityGrowthRate, letters[letter].productionRate, letters[letter].productionRateLevel)}`)
                    Object.keys(levelCapRate.upgradeSlots).map((key) => {
                        if (levelCapRate && levelCapRate.upgradeSlots) {
                            if (!Object.keys(newUpgradeCosts).includes(key)) {
                                newUpgradeCosts[key] = {
                                    costs: 0,
                                    letter: 'A'
                                }
                            }
                            newUpgradeCosts[key].costs = calculateIncreasingGrowth(levelCapRate.costsGrowthRate, letters[letter].productionRateInitialCosts[key], letters[letter].productionRateLevel)
                            newUpgradeCosts[key].letter = levelCapRate.upgradeSlots[key]
                        }
                    })
                    setUpgradeCosts(newUpgradeCosts)
                }
                break
            case 'Automate Production':
                automateUpgrades = letters[letter].automatedProductionCosts
                Object.keys(automateUpgrades).map((key, index) => {
                    switch (index) {
                        case 0:
                            newUpgradeCosts["slot1"].costs = automateUpgrades[key]
                            newUpgradeCosts["slot1"].letter = key
                            break
                        case 1:
                            newUpgradeCosts["slot2"].costs = automateUpgrades[key]
                            newUpgradeCosts["slot2"].letter = key
                            break
                        case 2:
                            newUpgradeCosts["slot3"].costs = automateUpgrades[key]
                            newUpgradeCosts["slot3"].letter = key
                            break
                        case 3:
                            newUpgradeCosts["slot4"].costs = automateUpgrades[key]
                            newUpgradeCosts["slot4"].letter = key
                            break
                    }
                })
                setUpgradeCosts(newUpgradeCosts)
                break
        }
    }, [letter, letters, upgrade])

    return (
        <Paper
            shadow="xl"
            radius="md"
            p="md"
            sx={{
                backgroundColor: colors.lightGray,
                marginTop: "3rem",
                width: "100%",
                border: "4px solid",
                borderColor: colors.darkGray,
                borderRadius: 10,
                color: colors.darkGray
            }}
        >
            <Grid
                sx={{
                    borderBottom: "2px solid",
                    borderColor: colors.darkGray
                }}
            >
                <Grid.Col span={7}>
                    <Title order={5}>{upgrade}</Title>
                </Grid.Col>
                <Grid.Col span={2}>
                    {
                        upgrade !== "Automate Production"
                            ? <Title order={5} ta="right">Current:</Title>
                            : <></>
                    }
                </Grid.Col>
                <Grid.Col span={3}>
                    {
                        upgrade !== "Automate Production"
                            ? <Text ta="right">{currentRate}</Text>
                            : <></>
                    }
                </Grid.Col>
            </Grid>
            <Grid
                sx={{
                    marginTop: 10
                }}
            >
                <Grid.Col span={7}>
                    <Title order={5}>Upgrade Costs:</Title>
                </Grid.Col>
                <Grid.Col span={2}>
                    {
                        upgrade !== "Automate Production"
                            ? <Title order={5} ta="right">Next:</Title>
                            : <></>
                    }
                </Grid.Col>
                <Grid.Col span={3}>
                    {
                        upgrade !== "Automate Production"
                            ? <Text ta="right">{nextRate}</Text>
                            : <></>
                    }
                </Grid.Col>
                {
                    Object.keys(upgradeCosts).map((key) => {
                        return (
                            <Grid.Col span={3} key={key}>
                                {
                                    upgradeCosts[key].costs > 0
                                        ?
                                        <Text>{upgradeCosts[key].letter} {letters[upgradeCosts[key].letter].amount > 10000 ? changeNumberDisplay(Math.round(letters[upgradeCosts[key].letter].amount), suffixes) : letters[upgradeCosts[key].letter].amount}/{upgradeCosts[key].costs > 10000 ? changeNumberDisplay(upgradeCosts[key].costs, suffixes) : upgradeCosts[key].costs}</Text>
                                        : <Text></Text>
                                }
                            </Grid.Col>
                        )
                    })
                }
                <Grid.Col span={2}/>
                <Grid.Col span={4}>
                    <Button
                        leftIcon={<IconArrowBigUp/>}
                        disabled={!checkIfBuyable(letters, upgradeCosts)}
                        sx={{
                            position: "relative",
                            bottom: 0,
                            backgroundColor: colors.accent3Color,
                            color: colors.darkGray,
                            "&:hover": {
                                backgroundColor: colors.accent3ColorAccent,
                                color: colors.lightGray
                            }
                        }}
                        onClick={() => upgradeButtonClick()}
                    >
                        Upgrade
                    </Button>
                </Grid.Col>
            </Grid>
        </Paper>
    )
}

function checkIfBuyable(letters: LetterButtonInterface, costs: CostsUpgradeInterface) {
    let buyable = true
    Object.keys(costs).map((key) => {
        if (costs[key].letter === '') {
            buyable = false
        } else if (costs[key].letter !== '' && letters[costs.slot1.letter].amount < costs.slot1.costs) {
            buyable = false
        }
    })
    return buyable
}