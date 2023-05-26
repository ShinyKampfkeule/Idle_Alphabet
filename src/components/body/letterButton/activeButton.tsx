import {ActionIcon, Button, Flex, Text} from "@mantine/core";
import {IconArrowBigUp} from "@tabler/icons-react";
import LetterButtonInterface, {LetterButtonLetterInterface} from "../../../interfaces/letterButton";
import {useAtom, useAtomValue, useSetAtom} from "jotai";
import {colorsAtom} from "../../../atoms/colors";
import {lettersAtom} from "../../../atoms/letters";
import {useEffect} from "react";
import {suffixesAtom} from "../../../atoms/suffixes";
import changeNumberDisplay from "../../../functions/changeNumberDisplay";
import {activeTabAtom} from "../../../atoms/activeTab";

export default function ActiveButton({letter}: LetterButtonLetterInterface) {
    const colors = useAtomValue(colorsAtom)
    const [letters, setLetters] = useAtom(lettersAtom)
    const suffixes = useAtomValue(suffixesAtom)
    const setActiveTab = useSetAtom(activeTabAtom)

    const handleButtonClick = () => {
        const updatedLetters = Object.assign({}, letters)
        updatedLetters[letter].amount += updatedLetters[letter].production_rate
        setLetters(updatedLetters)
    }

    useEffect(() => {
        const intervalID = setInterval(() => {
            const updatedLetters = Object.assign({}, letters)
            updatedLetters[letter].amount += updatedLetters[letter].production_rate
            setLetters(updatedLetters)
        }, 1000 * letters[letter].production_speed)

        return () => {
            clearInterval(intervalID)
        }
    }, [])

    return (
        <Flex
            w={152}
            h={152}
            justify="flex-end"
        >
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
                onClick={() => setActiveTab("Upgrades")}
            >
                <IconArrowBigUp/>
            </ActionIcon>
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
                >
                    <Text
                        size="4rem"
                    >
                        {letter}
                    </Text>
                    <Text
                        size="1.2rem"
                    >
                        {letters[letter].amount > 999999 ? changeNumberDisplay(letters[letter].amount, suffixes) : letters[letter].amount}
                    </Text>
                </Flex>
            </Button>
        </Flex>
    )
}

function checkIfUpgradeBuyable(letters: LetterButtonInterface, letter: string) {
    let buyable = false
    const production_rate_level = letters[letter].production_rate_level + 1
    const production_speed_level = letters[letter].production_speed_level + 1
    Object.keys(letters[letter].production_rate_upgrades[production_rate_level].costs).map((key) => {
        let production_rate_buyable = true
        if (letters[key].amount < letters[letter].production_rate_upgrades[production_rate_level].costs[key]) {
            production_rate_buyable = false
        }
        buyable = production_rate_buyable
    })
    Object.keys(letters[letter].production_speed_upgrades[production_speed_level].costs).map((key) => {
        let production_speed_buyable = true
        if (letters[key].amount < letters[letter].production_speed_upgrades[production_speed_level].costs[key]) {
            production_speed_buyable = false
        }
        if (!buyable) {
            buyable = production_speed_buyable
        }
    })
    Object.keys(letters[letter].automated_production_costs).map((key) => {
        if (letters[key].amount >= letters[letter].automated_production_costs[key]) {
            buyable = true
        }
    })
    return buyable
}