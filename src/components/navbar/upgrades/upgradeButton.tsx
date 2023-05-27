import {Button, Grid, Paper, Text, Title} from "@mantine/core";
import {useAtom, useAtomValue} from "jotai";
import {colorsAtom} from "../../../atoms/colors";
import UpgradeButtonInterface from "../../../interfaces/upgradeButton";
import {lettersAtom} from "../../../atoms/letters";
import {useEffect, useState} from "react";
import LetterButtonInterface, {LetterUpgradeInterface, UpgradeCostsInterface} from "../../../interfaces/letterButton";
import {suffixesAtom} from "../../../atoms/suffixes";
import changeNumberDisplay from "../../../functions/changeNumberDisplay";
import {IconArrowBigUp} from "@tabler/icons-react";
import CostsUpgradeInterface from "../../../interfaces/upgradeCosts";

export default function UpgradeButton({upgrade, letter}: UpgradeButtonInterface) {
    const colors = useAtomValue(colorsAtom)
    const [letters, setLetters] = useAtom(lettersAtom)
    const suffixes = useAtomValue(suffixesAtom)

    const [currentRate, setCurrentRate] = useState("0")
    const [nextRate, setNextRate] = useState("0")
    const [upgradeCosts, setUpgradeCosts] = useState<CostsUpgradeInterface>({
        Slot1: {
            letter: '',
            costs: 0
        },
        Slot2: {
            letter: '',
            costs: 0
        },
        Slot3: {
            letter: '',
            costs: 0
        },
        Slot4: {
            letter: '',
            costs: 0
        },
    })

    const upgradeButtonClick = () => {
        const updatedLetters = Object.assign({}, letters)
        let currentLevel = 0
        let nextLevel = 0
        const currentLetterData = updatedLetters[letter]
        switch (upgrade) {
            case 'Increase Production Speed':
                currentLevel = currentLetterData.production_speed_level
                nextLevel = currentLevel + 1
                updatedLetters[letter].production_speed = currentLetterData.production_speed_upgrades[nextLevel].newValue
                updatedLetters[letter].production_speed_level = nextLevel
                Object.keys(currentLetterData.production_speed_upgrades[nextLevel].costs).map((key) => {
                    updatedLetters[key].amount -= currentLetterData.production_speed_upgrades[nextLevel].costs[key]
                })
                break
            case 'Increase Production Rate':
                currentLevel = currentLetterData.production_rate_level
                nextLevel = currentLevel + 1
                updatedLetters[letter].production_rate = currentLetterData.production_rate_upgrades[nextLevel].newValue
                updatedLetters[letter].production_rate_level = nextLevel
                Object.keys(currentLetterData.production_rate_upgrades[nextLevel].costs).map((key) => {
                    updatedLetters[key].amount -= currentLetterData.production_rate_upgrades[nextLevel].costs[key]
                })
                break
            case 'Automate Production':
                updatedLetters[letter].automated_production = true
                Object.keys(currentLetterData.automated_production_costs).map((key) => {
                    updatedLetters[key].amount -= currentLetterData.automated_production_costs[key]
                })
                break
        }
        setLetters(updatedLetters)
    }

    useEffect(() => {
        let nextLevel = 0
        let upgrades: LetterUpgradeInterface = {}
        let automateUpgrades: UpgradeCostsInterface = {}
        const newUpgradeCosts = Object.assign({}, upgradeCosts)
        switch (upgrade) {
            case 'Increase Production Speed':
                setCurrentRate(`${letters[letter].production_speed} sec`)
                nextLevel = letters[letter].production_speed_level + 1
                upgrades = letters[letter].production_speed_upgrades
                setNextRate(`${upgrades[nextLevel].newValue} sec`)
                Object.keys(upgrades[nextLevel].costs).map((key, index) => {
                    switch (index) {
                        case 0:
                            newUpgradeCosts.Slot1.costs = upgrades[nextLevel].costs[key]
                            newUpgradeCosts.Slot1.letter = key
                            break
                        case 1:
                            newUpgradeCosts.Slot2.costs = upgrades[nextLevel].costs[key]
                            newUpgradeCosts.Slot2.letter = key
                            break
                        case 2:
                            newUpgradeCosts.Slot3.costs = upgrades[nextLevel].costs[key]
                            newUpgradeCosts.Slot3.letter = key
                            break
                        case 3:
                            newUpgradeCosts.Slot4.costs = upgrades[nextLevel].costs[key]
                            newUpgradeCosts.Slot4.letter = key
                            break
                    }
                })
                setUpgradeCosts(newUpgradeCosts)
                break
            case 'Increase Production Rate':
                setCurrentRate(`${letters[letter].production_rate}`)
                nextLevel = letters[letter].production_rate_level + 1
                upgrades = letters[letter].production_rate_upgrades
                setNextRate(`${upgrades[nextLevel].newValue}`)
                Object.keys(upgrades[nextLevel].costs).map((key, index) => {
                    switch (index) {
                        case 0:
                            newUpgradeCosts.Slot1.costs = upgrades[nextLevel].costs[key]
                            newUpgradeCosts.Slot1.letter = key
                            break
                        case 1:
                            newUpgradeCosts.Slot2.costs = upgrades[nextLevel].costs[key]
                            newUpgradeCosts.Slot2.letter = key
                            break
                        case 2:
                            newUpgradeCosts.Slot3.costs = upgrades[nextLevel].costs[key]
                            newUpgradeCosts.Slot3.letter = key
                            break
                        case 3:
                            newUpgradeCosts.Slot4.costs = upgrades[nextLevel].costs[key]
                            newUpgradeCosts.Slot4.letter = key
                            break
                    }
                })
                setUpgradeCosts(newUpgradeCosts)
                break
            case 'Automate Production':
                automateUpgrades = letters[letter].automated_production_costs
                Object.keys(automateUpgrades).map((key, index) => {
                    switch (index) {
                        case 0:
                            newUpgradeCosts.Slot1.costs = automateUpgrades[key]
                            newUpgradeCosts.Slot1.letter = key
                            break
                        case 1:
                            newUpgradeCosts.Slot2.costs = automateUpgrades[key]
                            newUpgradeCosts.Slot2.letter = key
                            break
                        case 2:
                            newUpgradeCosts.Slot3.costs = automateUpgrades[key]
                            newUpgradeCosts.Slot3.letter = key
                            break
                        case 3:
                            newUpgradeCosts.Slot4.costs = automateUpgrades[key]
                            newUpgradeCosts.Slot4.letter = key
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
                <Grid.Col span={3}>
                    {
                        upgradeCosts.Slot1.costs > 0
                            ?
                            <Text>{upgradeCosts.Slot1.letter} {changeNumberDisplay(Math.round(letters[upgradeCosts.Slot1.letter].amount), suffixes)}/{changeNumberDisplay(upgradeCosts.Slot1.costs, suffixes)}</Text>
                            : <></>
                    }
                </Grid.Col>
                <Grid.Col span={3}>
                    {
                        upgradeCosts.Slot2.costs > 0
                            ?
                            <Text>{upgradeCosts.Slot2.letter} {changeNumberDisplay(Math.round(letters[upgradeCosts.Slot2.letter].amount), suffixes)}/{changeNumberDisplay(upgradeCosts.Slot2.costs, suffixes)}</Text>
                            : <></>
                    }
                </Grid.Col>
                <Grid.Col span={6}/>
                <Grid.Col span={3}>
                    {
                        upgradeCosts.Slot3.costs > 0
                            ?
                            <Text>{upgradeCosts.Slot3.letter} {changeNumberDisplay(Math.round(letters[upgradeCosts.Slot3.letter].amount), suffixes)}/{changeNumberDisplay(upgradeCosts.Slot3.costs, suffixes)}</Text>
                            : <></>
                    }
                </Grid.Col>
                <Grid.Col span={3}>
                    {
                        upgradeCosts.Slot4.costs > 0
                            ?
                            <Text>{upgradeCosts.Slot4.letter} {changeNumberDisplay(Math.round(letters[upgradeCosts.Slot4.letter].amount), suffixes)}/{changeNumberDisplay(upgradeCosts.Slot4.costs, suffixes)}</Text>
                            : <></>
                    }
                </Grid.Col>
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
    if (costs.Slot1.letter !== '' && letters[costs.Slot1.letter].amount < costs.Slot1.costs) {
        buyable = false
    }
    if (costs.Slot2.letter !== '' && letters[costs.Slot2.letter].amount < costs.Slot2.costs) {
        buyable = false
    }
    if (costs.Slot3.letter !== '' && letters[costs.Slot3.letter].amount < costs.Slot3.costs) {
        buyable = false
    }
    if (costs.Slot4.letter !== '' && letters[costs.Slot4.letter].amount < costs.Slot4.costs) {
        buyable = false
    }
    return buyable
}