import {Button, Grid, Paper, Text, Title, Tooltip} from "@mantine/core";
import {useAtom, useAtomValue} from "jotai";
import {colorsAtom} from "../../../atoms/colors";
import UpgradeButtonInterface from "../../../interfaces/upgradeButton";
import {lettersAtom} from "../../../atoms/letters";
import {useEffect, useState} from "react";
import LetterButtonInterface, {UpgradeCostsInterface, UpgradeSlotsInterface} from "../../../interfaces/letterButton";
import {suffixesAtom} from "../../../atoms/suffixes";
import {IconArrowBigUp} from "@tabler/icons-react";
import CostsUpgradeInterface from "../../../interfaces/upgradeCosts";
import findLevelCap from "../../../functions/findLevelCap";
import {calculateDecreasingGrowth, calculateIncreasingGrowth} from "../../../functions/calculateGrowth";
import changeNumberDisplay from "../../../functions/changeNumberDisplay";
import formatNumber from "../../../functions/formatNumber";

export default function UpgradeButton({upgrade, letter}: UpgradeButtonInterface) {
    const colors = useAtomValue(colorsAtom)
    const [letters, setLetters] = useAtom(lettersAtom)
    const suffixes = useAtomValue(suffixesAtom)
    const [currentRate, setCurrentRate] = useState("0")
    const [nextRate, setNextRate] = useState("0")
    const [upgradeCosts, setUpgradeCosts] = useState<CostsUpgradeInterface>({
        "slot1": {
            costs: 0,
            letter: "A"
        }
    })

    const upgradeButtonClick = () => {
        const updatedLetters = Object.assign({}, letters)
        let currentLevel = 0
        let nextLevel = 0
        let currentLevelCap: {
            costsGrowthRate: number;
            functionalityGrowthRate: number;
            upgradeSlots?: UpgradeSlotsInterface;
        } | undefined = undefined
        let nextLevelCap: {
            costsGrowthRate: number;
            functionalityGrowthRate: number;
            upgradeSlots?: UpgradeSlotsInterface;
        } | undefined = undefined
        const currentLetterData = updatedLetters[letter]
        switch (upgrade) {
            case 'Increase Production Speed':
                currentLevel = currentLetterData.productionSpeedLevel
                nextLevel = currentLevel + 1
                currentLevelCap = findLevelCap(currentLevel, currentLetterData.productionSpeedUpgrades)
                nextLevelCap = findLevelCap(nextLevel, currentLetterData.productionSpeedUpgrades)
                currentLetterData.productionSpeedLevel = nextLevel
                if (nextLevelCap && currentLevelCap) {
                    if (nextLevelCap.costsGrowthRate !== currentLevelCap.costsGrowthRate) {
                        currentLetterData.productionInitSpeed = currentLetterData.productionSpeed
                        if (currentLevelCap.upgradeSlots) {
                            Object.keys(currentLevelCap.upgradeSlots).map((key) => {
                                if (currentLevelCap) {
                                    currentLetterData.productionSpeedInitialCosts[key] =
                                        calculateIncreasingGrowth(
                                            currentLevelCap.costsGrowthRate,
                                            currentLetterData.productionSpeedInitialCosts[key],
                                            currentLevel
                                        )
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
                                updatedLetters[nextLevelCap.upgradeSlots[key]].amount =
                                    Number((
                                        updatedLetters[nextLevelCap.upgradeSlots[key]].amount -
                                        calculateIncreasingGrowth(
                                            nextLevelCap.costsGrowthRate,
                                            currentLetterData.productionSpeedInitialCosts[key],
                                            nextLevel
                                        )).toFixed(2)
                                    )
                            }
                        })
                    }
                }
                break
            case 'Increase Production Rate':
                currentLevel = currentLetterData.productionRateLevel
                nextLevel = currentLevel + 1
                currentLevelCap = findLevelCap(currentLevel, currentLetterData.productionRateUpgrades)
                nextLevelCap = findLevelCap(nextLevel, currentLetterData.productionRateUpgrades)
                currentLetterData.productionRateLevel = nextLevel
                if (nextLevelCap && currentLevelCap) {
                    if (nextLevelCap.costsGrowthRate !== currentLevelCap.costsGrowthRate) {
                        currentLetterData.productionInitRate = currentLetterData.productionRate
                        if (currentLevelCap.upgradeSlots) {
                            Object.keys(currentLevelCap.upgradeSlots).map((key) => {
                                if (currentLevelCap) {
                                    currentLetterData.productionRateInitialCosts[key] =
                                        calculateIncreasingGrowth(
                                            currentLevelCap.costsGrowthRate,
                                            currentLetterData.productionRateInitialCosts[key],
                                            currentLevel
                                        )
                                }
                            })
                        }
                    }
                    currentLetterData.productionRate = calculateIncreasingGrowth(
                        nextLevelCap.functionalityGrowthRate,
                        currentLetterData.productionInitRate,
                        currentLevel
                    )
                    if (nextLevelCap.upgradeSlots && nextLevelCap.costsGrowthRate) {
                        Object.keys(nextLevelCap.upgradeSlots).map((key) => {
                            if (nextLevelCap && nextLevelCap.upgradeSlots) {
                                updatedLetters[nextLevelCap.upgradeSlots[key]].amount =
                                    Number((updatedLetters[nextLevelCap.upgradeSlots[key]].amount -
                                        calculateIncreasingGrowth(
                                            nextLevelCap.costsGrowthRate,
                                            currentLetterData.productionRateInitialCosts[key],
                                            nextLevel
                                        )).toFixed(2)
                                    )
                            }
                        })
                    }
                }
                break
            case 'Automate Production':
                updatedLetters[letter].automatedProduction = true
                Object.keys(currentLetterData.automatedProductionCosts).map((key) => {
                    updatedLetters[key].amount = Number((
                        updatedLetters[key].amount -
                        currentLetterData.automatedProductionCosts[key]).toFixed(2)
                    )
                })
                break
        }
        setLetters(updatedLetters)
    }

    useEffect(() => {
        let automateUpgrades: UpgradeCostsInterface = {}
        const currentLevelCapSpeed = findLevelCap(
            letters[letter].productionSpeedLevel, letters[letter].productionSpeedUpgrades
        )
        const currentLevelCapRate = findLevelCap(
            letters[letter].productionRateLevel, letters[letter].productionRateUpgrades
        )
        const levelCapSpeed = findLevelCap(
            letters[letter].productionSpeedLevel + 1, letters[letter].productionSpeedUpgrades
        )
        const levelCapRate = findLevelCap(
            letters[letter].productionRateLevel + 1, letters[letter].productionRateUpgrades
        )
        const newUpgradeCosts: CostsUpgradeInterface = {
            "slot1": {
                costs: 0,
                letter: ""
            }
        }
        let initalCosts = 0
        let initialRate = 0
        switch (upgrade) {
            case 'Increase Production Speed':
                setCurrentRate(`${letters[letter].productionSpeed} sec`)
                if (levelCapSpeed && levelCapSpeed.upgradeSlots) {
                    if (currentLevelCapSpeed && levelCapSpeed) {
                        if (currentLevelCapSpeed.costsGrowthRate !== levelCapSpeed.costsGrowthRate) {
                            initialRate = calculateDecreasingGrowth(
                                currentLevelCapSpeed.functionalityGrowthRate,
                                letters[letter].productionInitSpeed,
                                letters[letter].productionSpeedLevel
                            )
                        } else {
                            initialRate = letters[letter].productionInitSpeed
                        }
                    }
                    setNextRate(
                        `${calculateDecreasingGrowth(
                            levelCapSpeed.functionalityGrowthRate,
                            initialRate,
                            letters[letter].productionSpeedLevel
                        )} sec`
                    )
                    Object.keys(levelCapSpeed.upgradeSlots).map((key) => {
                        if (levelCapSpeed && levelCapSpeed.upgradeSlots) {
                            if (!Object.keys(newUpgradeCosts).includes(key)) {
                                newUpgradeCosts[key] = {
                                    costs: 0,
                                    letter: 'A'
                                }
                            }
                            if (currentLevelCapSpeed && levelCapSpeed) {
                                if (currentLevelCapSpeed.costsGrowthRate !== levelCapSpeed.costsGrowthRate) {
                                    initalCosts = calculateIncreasingGrowth(
                                        currentLevelCapSpeed.costsGrowthRate,
                                        letters[letter].productionSpeedInitialCosts[key],
                                        letters[letter].productionSpeedLevel
                                    )
                                } else {
                                    initalCosts = letters[letter].productionSpeedInitialCosts[key]
                                }
                            }
                            newUpgradeCosts[key].costs = calculateIncreasingGrowth(
                                levelCapSpeed.costsGrowthRate,
                                initalCosts,
                                letters[letter].productionSpeedLevel + 1
                            )
                            newUpgradeCosts[key].letter = levelCapSpeed.upgradeSlots[key]
                        }
                    })
                    setUpgradeCosts(newUpgradeCosts)
                }
                break
            case 'Increase Production Rate':
                setCurrentRate(`${letters[letter].productionRate}`)
                if (levelCapRate && levelCapRate.upgradeSlots) {
                    if (currentLevelCapRate && levelCapRate) {
                        if (currentLevelCapRate.costsGrowthRate !== levelCapRate.costsGrowthRate) {
                            initialRate = calculateIncreasingGrowth(
                                currentLevelCapRate.functionalityGrowthRate,
                                letters[letter].productionInitRate,
                                letters[letter].productionRateLevel - 1
                            )
                        } else {
                            initialRate = letters[letter].productionInitRate
                        }
                    }
                    setNextRate(
                        `${calculateIncreasingGrowth(
                            levelCapRate.functionalityGrowthRate,
                            initialRate,
                            letters[letter].productionRateLevel
                        )}`
                    )
                    Object.keys(levelCapRate.upgradeSlots).map((key) => {
                        if (levelCapRate && levelCapRate.upgradeSlots) {
                            if (!Object.keys(newUpgradeCosts).includes(key)) {
                                newUpgradeCosts[key] = {
                                    costs: 0,
                                    letter: 'A'
                                }
                            }
                            if (currentLevelCapRate && levelCapRate) {
                                if (currentLevelCapRate.costsGrowthRate !== levelCapRate.costsGrowthRate) {
                                    initalCosts = calculateIncreasingGrowth(
                                        currentLevelCapRate.costsGrowthRate,
                                        letters[letter].productionRateInitialCosts[key],
                                        letters[letter].productionRateLevel
                                    )
                                } else {
                                    initalCosts = letters[letter].productionRateInitialCosts[key]
                                }
                            }
                            newUpgradeCosts[key].costs = calculateIncreasingGrowth(
                                levelCapRate.costsGrowthRate,
                                initalCosts,
                                letters[letter].productionRateLevel + 1
                            )
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
                    <Title order={5}>{upgrade}{
                        upgrade !== "Automate Production" ?
                            upgrade === 'Increase Production Speed' ?
                                ` (${letters[letter].productionSpeedLevel})` :
                                ` (${letters[letter].productionRateLevel})`
                            : ''
                    }</Title>
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
                            ? upgrade === "Increase Production Speed" ?
                                <Text ta="right">{currentRate}</Text> :
                                <Tooltip label={formatNumber(Number(currentRate))}>
                                    <Text ta="right">
                                        {
                                            Number(currentRate) > 999999 ?
                                                changeNumberDisplay(Number(currentRate), suffixes) :
                                                currentRate
                                        }
                                    </Text>
                                </Tooltip>
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
                            ? upgrade === "Increase Production Speed" ?
                                <Text ta="right">{nextRate}</Text> :
                                <Tooltip label={formatNumber(Number(nextRate))}>
                                    <Text ta="right">
                                        {
                                            Number(nextRate) > 999999 ?
                                                changeNumberDisplay(Number(nextRate), suffixes) :
                                                nextRate
                                        }
                                    </Text>
                                </Tooltip>
                            : <></>
                    }
                </Grid.Col>
                <Grid.Col span={4} key='slot1'>
                    {
                        Object.keys(upgradeCosts).length >= 1 ?
                            <Tooltip
                                label={
                                    formatNumber(letters[upgradeCosts['slot1'].letter].amount) +
                                    ' / ' +
                                    formatNumber(upgradeCosts['slot1'].costs)
                                }>
                                <Text
                                    style={{
                                        color:
                                            letters[upgradeCosts['slot1'].letter].amount < upgradeCosts['slot1'].costs ?
                                                colors.accent1Color : colors.darkGray
                                    }}
                                >
                                    {upgradeCosts['slot1'].letter}
                                    {letters[upgradeCosts['slot1'].letter].amount > 10000 ?
                                        changeNumberDisplay(Math.round(
                                            letters[upgradeCosts['slot1'].letter].amount), suffixes) :
                                        letters[upgradeCosts['slot1'].letter].amount}/
                                    {upgradeCosts['slot1'].costs > 10000 ?
                                        changeNumberDisplay(Math.round(upgradeCosts['slot1'].costs), suffixes) :
                                        upgradeCosts['slot1'].costs}
                                </Text>
                            </Tooltip> :
                            <Text></Text>
                    }
                </Grid.Col>
                <Grid.Col span={4} key='slot2'>
                    {
                        Object.keys(upgradeCosts).length >= 2 ?
                            <Tooltip
                                label={
                                    formatNumber(letters[upgradeCosts['slot2'].letter].amount) +
                                    ' / ' +
                                    formatNumber(upgradeCosts['slot2'].costs)
                                }>
                                <Text
                                    style={{
                                        color:
                                            letters[upgradeCosts['slot2'].letter].amount < upgradeCosts['slot2'].costs ?
                                                colors.accent1Color : colors.darkGray
                                    }}
                                >
                                    {upgradeCosts['slot2'].letter}
                                    {letters[upgradeCosts['slot2'].letter].amount > 10000 ?
                                        changeNumberDisplay(Math.round(
                                            letters[upgradeCosts['slot2'].letter].amount), suffixes) :
                                        letters[upgradeCosts['slot2'].letter].amount}/
                                    {upgradeCosts['slot2'].costs > 10000 ?
                                        changeNumberDisplay(Math.round(upgradeCosts['slot2'].costs), suffixes) :
                                        upgradeCosts['slot2'].costs}
                                </Text>
                            </Tooltip> :
                            <Text></Text>
                    }
                </Grid.Col>
                <Grid.Col span={4}/>
                <Grid.Col span={4} key='slot3'>
                    {
                        Object.keys(upgradeCosts).length >= 3 ?
                            <Tooltip
                                label={
                                    formatNumber(letters[upgradeCosts['slot3'].letter].amount) +
                                    ' / ' +
                                    formatNumber(upgradeCosts['slot3'].costs)
                                }>
                                <Text
                                    style={{
                                        color:
                                            letters[upgradeCosts['slot3'].letter].amount < upgradeCosts['slot3'].costs ?
                                                colors.accent1Color : colors.darkGray
                                    }}
                                >
                                    {upgradeCosts['slot3'].letter}
                                    {letters[upgradeCosts['slot3'].letter].amount > 10000 ?
                                        changeNumberDisplay(Math.round(
                                            letters[upgradeCosts['slot3'].letter].amount), suffixes) :
                                        letters[upgradeCosts['slot3'].letter].amount}/
                                    {upgradeCosts['slot3'].costs > 10000 ?
                                        changeNumberDisplay(Math.round(upgradeCosts['slot3'].costs), suffixes) :
                                        upgradeCosts['slot3'].costs}
                                </Text>
                            </Tooltip> :
                            <Text></Text>
                    }
                </Grid.Col>
                <Grid.Col span={4} key='slot4'>
                    {
                        Object.keys(upgradeCosts).length >= 4 ?
                            <Tooltip
                                label={
                                    formatNumber(letters[upgradeCosts['slot3'].letter].amount) +
                                    ' / ' +
                                    formatNumber(upgradeCosts['slot3'].costs)
                                }>
                                <Text
                                    style={{
                                        color:
                                            letters[upgradeCosts['slot4'].letter].amount < upgradeCosts['slot4'].costs ?
                                                colors.accent1Color : colors.darkGray
                                    }}
                                >
                                    {upgradeCosts['slot4'].letter}
                                    {letters[upgradeCosts['slot4'].letter].amount > 10000 ?
                                        changeNumberDisplay(Math.round(
                                            letters[upgradeCosts['slot4'].letter].amount), suffixes) :
                                        letters[upgradeCosts['slot4'].letter].amount}/
                                    {upgradeCosts['slot4'].costs > 10000 ?
                                        changeNumberDisplay(Math.round(upgradeCosts['slot4'].costs), suffixes) :
                                        upgradeCosts['slot4'].costs}
                                </Text>
                            </Tooltip> :
                            <Text></Text>
                    }
                </Grid.Col>
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
        } else if (costs[key].letter !== '' && letters[costs[key].letter].amount < costs[key].costs) {
            buyable = false
        }
    })
    return buyable
}