import {Flex, Text} from "@mantine/core";
import {useAtomValue} from "jotai";
import {colorsAtom} from "../../atoms/colors";

export default function GameHeader() {
    const colors = useAtomValue(colorsAtom)

    return (
        <>
            <Flex
                align="Center"
                h="100%"
                pl={10}
            >
                <Text
                    sx={{
                        fontSize: "1.75rem",
                        paddingLeft: 10,
                        color: colors.lightGray
                    }}
                >
                    Idle Alphabet
                </Text>
            </Flex>
        </>
    )
}