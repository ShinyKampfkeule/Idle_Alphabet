import {Button, Grid, Paper, Text, Title} from "@mantine/core";
import {useAtom, useAtomValue} from "jotai";
import {colorsAtom} from "../../../atoms/colors";
import UpgradeButtonInterface from "../../../interfaces/upgradeButton";
import {lettersAtom} from "../../../atoms/letters";
import {useEffect, useState} from "react";
import LetterButtonInterface, {UpgradeCostsInterface} from "../../../interfaces/letterButton";
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

    // const upgradeButtonClick = () => {
    //     const updatedLetters = Object.assign({}, letters)
    //     let currentLevel = 0
    //     let nextLevel = 0
    //     const currentLetterData = updatedLetters[letter]
    //     switch (upgrade) {
    //         case 'Increase Production Speed':
    //             currentLevel = currentLetterData.productionSpeedLevel
    //             nextLevel = currentLevel + 1
    //             updatedLetters[letter].productionSpeed = currentLetterData.productionSpeedUpgrades[nextLevel].newValue
    //             updatedLetters[letter].productionSpeedLevel = nextLevel
    //             Object.keys(currentLetterData.productionSpeedUpgrades[nextLevel].costs).map((key) => {
    //                 updatedLetters[key].amount -= currentLetterData.productionSpeedUpgrades[nextLevel].costs[key]
    //             })
    //             break
    //         case 'Increase Production Rate':
    //             currentLevel = currentLetterData.productionRateLevel
    //             nextLevel = currentLevel + 1
    //             updatedLetters[letter].productionRate = currentLetterData.productionRateUpgrades[nextLevel].newValue
    //             updatedLetters[letter].productionRateLevel = nextLevel
    //             Object.keys(currentLetterData.productionRateUpgrades[nextLevel].costs).map((key) => {
    //                 updatedLetters[key].amount -= currentLetterData.productionRateUpgrades[nextLevel].costs[key]
    //             })
    //             break
    //         case 'Automate Production':
    //             updatedLetters[letter].automatedProduction = true
    //             Object.keys(currentLetterData.automatedProductionCosts).map((key) => {
    //                 updatedLetters[key].amount -= currentLetterData.automatedProductionCosts[key]
    //             })
    //             break
    //     }
    //     setLetters(updatedLetters)
    // }

    useEffect(() => {
        let automateUpgrades: UpgradeCostsInterface = {}
        const levelCapSpeed = findLevelCap(letters[letter].productionSpeedLevel + 1, letters[letter].productionSpeedUpgrades)
        const levelCapRate = findLevelCap(letters[letter].productionRateLevel + 1, letters[letter].productionRateUpgrades)
        const newUpgradeCosts = Object.assign({}, upgradeCosts)
        switch (upgrade) {
            case 'Increase Production Speed':
                setCurrentRate(`${letters[letter].productionSpeed} sec`)
                if (levelCapSpeed && levelCapSpeed.upgradeSlots) {
                    setNextRate(`${calculateDecreasingGrowth(levelCapSpeed.functionalityGrowthRate, letters[letter].productionSpeed, letters[letter].productionSpeedLevel)} sec`)
                    Object.keys(levelCapSpeed.upgradeSlots).map((key) => {
                        if (levelCapSpeed && levelCapSpeed.upgradeSlots) {
                            newUpgradeCosts[key].costs = calculateIncreasingGrowth(levelCapSpeed.costsGrowthRate, letters[letter].productionSpeedInitialCosts, letters[letter].productionSpeedLevel)
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
                            newUpgradeCosts[key].costs = calculateIncreasingGrowth(levelCapRate.costsGrowthRate, letters[letter].productionRateInitialCosts, letters[letter].productionRateLevel)
                            newUpgradeCosts[key].letter = levelCapRate.upgradeSlots[key]
                        }
                    })
                    console.log(newUpgradeCosts)
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
                            <Grid.Col span={3}>
                                {
                                    upgradeCosts[key].costs > 0
                                        ?
                                        <Text>{upgradeCosts[key].letter} {changeNumberDisplay(Math.round(letters[upgradeCosts[key].letter].amount), suffixes)}/{changeNumberDisplay(upgradeCosts[key].costs, suffixes)}</Text>
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
                        // onClick={() => upgradeButtonClick()}
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
        // console.log(costs[key].letter)
        if (costs[key].letter === '') {
            buyable = false
        } else if (costs[key].letter !== '' && letters[costs.slot1.letter].amount < costs.slot1.costs) {
            // console.log(letters[costs.slot1.letter].amount)
            // console.log(costs.slot1.costs)
            buyable = false
        }
    })
    console.log(buyable)
    return buyable
}