import {Container, Flex, Text} from "@mantine/core";
import {useAtomValue} from "jotai";
import {colorsAtom} from "../../../atoms/colors";

export default function LockedButton() {
    const colors = useAtomValue(colorsAtom)

    return (
        <Container
            w={152}
            h={152}
            sx={{
                backgroundColor: colors.accent1Color,
                border: "2px solid",
                borderColor: colors.accent1ColorAccent,
                boxShadow: `6px 6px 8px -2px ${colors.accent1ColorAccent}`,
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
                <Text size="1.5rem" align="center">Unlock previous Letter first</Text>
            </Flex>
        </Container>
    )
}