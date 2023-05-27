import {Container, Flex, Text} from "@mantine/core";
import {useAtomValue} from "jotai";
import {colorsAtom} from "../../../atoms/colors";
import {LetterButtonLetterInterface} from "../../../interfaces/letterButton";
import {lettersAtom} from "../../../atoms/letters";
import changeNumberDisplay from "../../../functions/changeNumberDisplay";
import {suffixesAtom} from "../../../atoms/suffixes";

export default function UnboughtButtonUnbuyable({letter}: LetterButtonLetterInterface) {
    const colors = useAtomValue(colorsAtom)
    const letters = useAtomValue(lettersAtom)
    const suffixes = useAtomValue(suffixesAtom)
    const buyingCosts = letters[letter].buyingCosts

    return (
        <Container
            w={152}
            h={152}
            sx={{
                backgroundColor: colors.accent2Color,
                border: "2px solid",
                borderColor: colors.accent2ColorAccent,
                boxShadow: `6px 6px 8px -2px ${colors.accent2ColorAccent}`,
                borderRadius: "10px",
                color: colors.darkGray,
                margin: 0
            }}
        >
            <Flex
                direction="column"
                justify="center"
                align="center"
                gap={1}
                h="100%"
            >
                <Text size="1rem">Unlock {`Letter ${letter}`}</Text>
                {
                    buyingCosts === undefined
                        ? <></>
                        : Object.keys(buyingCosts).map((key) => {
                            return <Text
                                key={key}
                                size=".9rem">{`${letters[key].amount > 999999 ? changeNumberDisplay(Math.round(letters[key].amount), suffixes) : letters[key].amount}/${buyingCosts[key] > 999999 ? changeNumberDisplay(buyingCosts[key], suffixes) : buyingCosts[key]} - ${key}`}
                            </Text>
                        })
                }
            </Flex>
        </Container>
    )
}