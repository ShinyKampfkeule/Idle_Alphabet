import {Button, Flex, Text} from "@mantine/core";
import {IconCheck} from "@tabler/icons-react"
import {colorsAtom} from "../../../atoms/colors";
import {LetterButtonLetterInterface} from "../../../interfaces/letterButton";
import {useAtom, useAtomValue} from "jotai";
import {lettersAtom} from "../../../atoms/letters";

export default function UnboughtButtonBuyable({letter}: LetterButtonLetterInterface) {
    const colors = useAtomValue(colorsAtom)
    const [letters, setLetters] = useAtom(lettersAtom)

    const handleClick = () => {
        const lettersArr = Object.keys(letters)
        const letterIndex = lettersArr.indexOf(letter)
        const nextLetter = lettersArr[letterIndex + 1]
        const updatedLetters = Object.assign({}, letters)
        const buyingCosts = updatedLetters[letter].buyingCosts
        if (buyingCosts !== undefined) {
            Object.keys(buyingCosts).map((key) => {
                updatedLetters[key].amount -= buyingCosts[key]
            })
        }
        updatedLetters[letter].bought = true
        updatedLetters[nextLetter].unlocked = true
        setLetters(updatedLetters)
    }

    return (
        <Button
            w={152}
            h={152}
            sx={{
                backgroundColor: colors.accent3Color,
                border: "2px solid",
                borderColor: colors.accent3ColorAccent,
                boxShadow: `6px 6px 8px -2px ${colors.accent3ColorAccent}`,
                borderRadius: "10px",
                color: colors.darkGray,
                '&:hover': {
                    backgroundColor: colors.accent3ColorAccent,
                    color: colors.lightGray
                }
            }}
            onClick={() => handleClick()}
        >
            <Flex
                direction="column"
                justify="center"
                align="center"
                gap={3}
            >
                <Text size="1.25rem">Unlock</Text>
                <Text size="1.25rem">{`Letter ${letter}`}</Text>
                <IconCheck size={48}/>
            </Flex>
        </Button>
    )
}