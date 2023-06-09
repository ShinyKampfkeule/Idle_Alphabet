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
            cap: number,
            upgradeData: {
                costsGrowthRate: number;
                functionalityGrowthRate: number;
                upgradeSlots?: UpgradeSlotsInterface;
            }
        } | undefined = undefined
        let nextLevelCap: {
            cap: number,
            upgradeData: {
                costsGrowthRate: number;
                functionalityGrowthRate: number;
                upgradeSlots?: UpgradeSlotsInterface;
            }
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
                    if (nextLevelCap.upgradeData.costsGrowthRate !== currentLevelCap.upgradeData.costsGrowthRate) {
                        currentLetterData.productionInitSpeed = currentLetterData.productionSpeed
                        if (currentLevelCap.upgradeData.upgradeSlots) {
                            Object.keys(currentLevelCap.upgradeData.upgradeSlots).map((key) => {
                                if (currentLevelCap) {
                                    currentLetterData.productionSpeedInitialCosts[key] =
                                        calculateIncreasingGrowth(
                                            currentLevelCap.upgradeData.costsGrowthRate,
                                            currentLetterData.productionSpeedInitialCosts[key],
                                            currentLevel
                                        )
                                }
                            })
                        }
                    }
                    currentLetterData.productionSpeed = calculateDecreasingGrowth(
                        nextLevelCap.upgradeData.functionalityGrowthRate, currentLetterData.productionInitSpeed, nextLevel
                    )
                    if (nextLevelCap.upgradeData.upgradeSlots && nextLevelCap.upgradeData.costsGrowthRate) {
                        Object.keys(nextLevelCap.upgradeData.upgradeSlots).map((key) => {
                            if (nextLevelCap && nextLevelCap.upgradeData.upgradeSlots) {
                                updatedLetters[nextLevelCap.upgradeData.upgradeSlots[key]].amount =
                                    Number((
                                        updatedLetters[nextLevelCap.upgradeData.upgradeSlots[key]].amount -
                                        calculateIncreasingGrowth(
                                            nextLevelCap.upgradeData.costsGrowthRate,
                                            currentLetterData.productionSpeedInitialCosts[key],
                                            currentLevel
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
                    if (currentLevelCap.cap !== currentLevel && nextLevelCap.upgradeData.costsGrowthRate !== currentLevelCap.upgradeData.costsGrowthRate) {
                        currentLetterData.productionInitRate = currentLetterData.productionRate
                        if (currentLevelCap.upgradeData.upgradeSlots) {
                            Object.keys(currentLevelCap.upgradeData.upgradeSlots).map((key) => {
                                if (currentLevelCap) {
                                    currentLetterData.productionRateInitialCosts[key] =
                                        calculateIncreasingGrowth(
                                            currentLevelCap.upgradeData.costsGrowthRate,
                                            currentLetterData.productionRateInitialCosts[key],
                                            currentLevel
                                        )
                                    updatedLetters[letter].productionRateInitialCosts[key] = currentLetterData.productionRateInitialCosts[key]
                                }
                            })
                        }
                    }
                    let initialProductionRate = currentLetterData.productionInitRate
                    if (nextLevelCap.cap !== currentLevelCap.cap) {
                        initialProductionRate = calculateIncreasingGrowth(
                            currentLevelCap.upgradeData.functionalityGrowthRate,
                            initialProductionRate,
                            currentLevel
                        )
                    }
                    updatedLetters[letter].productionInitRate = initialProductionRate
                    currentLetterData.productionRate = calculateIncreasingGrowth(
                        nextLevelCap.upgradeData.functionalityGrowthRate,
                        initialProductionRate,
                        nextLevel
                    )
                    if (nextLevelCap.upgradeData.upgradeSlots && nextLevelCap.upgradeData.costsGrowthRate) {
                        Object.keys(nextLevelCap.upgradeData.upgradeSlots).map((key) => {
                            if (nextLevelCap && nextLevelCap.upgradeData.upgradeSlots) {
                                updatedLetters[nextLevelCap.upgradeData.upgradeSlots[key]].amount =
                                    Number((updatedLetters[nextLevelCap.upgradeData.upgradeSlots[key]].amount -
                                        calculateIncreasingGrowth(
                                            nextLevelCap.upgradeData.costsGrowthRate,
                                            currentLetterData.productionRateInitialCosts[key],
                                            currentLevel
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
                if (levelCapSpeed && levelCapSpeed.upgradeData.upgradeSlots) {
                    if (currentLevelCapSpeed && levelCapSpeed) {
                        if (currentLevelCapSpeed.upgradeData.costsGrowthRate !== levelCapSpeed.upgradeData.costsGrowthRate) {
                            initialRate = calculateDecreasingGrowth(
                                currentLevelCapSpeed.upgradeData.functionalityGrowthRate,
                                letters[letter].productionInitSpeed,
                                letters[letter].productionSpeedLevel
                            )
                        } else {
                            initialRate = letters[letter].productionInitSpeed
                        }
                    }
                    setNextRate(
                        `${calculateDecreasingGrowth(
                            levelCapSpeed.upgradeData.functionalityGrowthRate,
                            initialRate,
                            letters[letter].productionSpeedLevel + 1
                        )} sec`
                    )
                    Object.keys(levelCapSpeed.upgradeData.upgradeSlots).map((key) => {
                        if (levelCapSpeed && levelCapSpeed.upgradeData.upgradeSlots) {
                            if (!Object.keys(newUpgradeCosts).includes(key)) {
                                newUpgradeCosts[key] = {
                                    costs: 0,
                                    letter: 'A'
                                }
                            }
                            if (currentLevelCapSpeed && levelCapSpeed) {
                                if (currentLevelCapSpeed.upgradeData.costsGrowthRate !== levelCapSpeed.upgradeData.costsGrowthRate) {
                                    initalCosts = calculateIncreasingGrowth(
                                        currentLevelCapSpeed.upgradeData.costsGrowthRate,
                                        letters[letter].productionSpeedInitialCosts[key],
                                        letters[letter].productionSpeedLevel - 1
                                    )
                                } else {
                                    initalCosts = letters[letter].productionSpeedInitialCosts[key]
                                }
                            }
                            newUpgradeCosts[key].costs = calculateIncreasingGrowth(
                                levelCapSpeed.upgradeData.costsGrowthRate,
                                initalCosts,
                                letters[letter].productionSpeedLevel
                            )
                            newUpgradeCosts[key].letter = levelCapSpeed.upgradeData.upgradeSlots[key]
                        }
                    })
                    setUpgradeCosts(newUpgradeCosts)
                }
                break
            case 'Increase Production Rate':
                setCurrentRate(`${letters[letter].productionRate}`)
                if (levelCapRate && levelCapRate.upgradeData.upgradeSlots) {
                    if (currentLevelCapRate && levelCapRate) {
                        if (currentLevelCapRate.upgradeData.costsGrowthRate !== levelCapRate.upgradeData.costsGrowthRate) {
                            initialRate = calculateIncreasingGrowth(
                                currentLevelCapRate.upgradeData.functionalityGrowthRate,
                                letters[letter].productionInitRate,
                                letters[letter].productionRateLevel
                            )
                        } else {
                            initialRate = letters[letter].productionInitRate
                        }
                    }
                    setNextRate(
                        `${calculateIncreasingGrowth(
                            levelCapRate.upgradeData.functionalityGrowthRate,
                            initialRate,
                            letters[letter].productionRateLevel + 1
                        )}`
                    )
                    Object.keys(levelCapRate.upgradeData.upgradeSlots).map((key) => {
                        if (levelCapRate && levelCapRate.upgradeData.upgradeSlots) {
                            if (!Object.keys(newUpgradeCosts).includes(key)) {
                                newUpgradeCosts[key] = {
                                    costs: 0,
                                    letter: 'A'
                                }
                            }
                            if (currentLevelCapRate && levelCapRate) {
                                if (currentLevelCapRate.cap === letters[letter].productionRateLevel && currentLevelCapRate.upgradeData.costsGrowthRate !== levelCapRate.upgradeData.costsGrowthRate) {
                                    initalCosts = calculateIncreasingGrowth(
                                        currentLevelCapRate.upgradeData.costsGrowthRate,
                                        letters[letter].productionRateInitialCosts[key],
                                        letters[letter].productionRateLevel - 1
                                    )
                                } else {
                                    initalCosts = letters[letter].productionRateInitialCosts[key]
                                }
                            }
                            newUpgradeCosts[key].costs = calculateIncreasingGrowth(
                                levelCapRate.upgradeData.costsGrowthRate,
                                initalCosts,
                                letters[letter].productionRateLevel
                            )
                            newUpgradeCosts[key].letter = levelCapRate.upgradeData.upgradeSlots[key]
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