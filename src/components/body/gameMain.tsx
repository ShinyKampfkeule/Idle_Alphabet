import {Flex} from "@mantine/core"
import {useAtomValue} from "jotai";
import {lettersAtom} from "../../atoms/letters";
import LetterButton from "./letterButton/letterButton";

export default function GameMain() {
    const letters = useAtomValue(lettersAtom)

    const letterKeys = Object.keys(letters)

    return (
        <>
            <Flex
                justify="center"
                align="center"
                direction="row"
                wrap="wrap"
                gap={50}

                h="100%"
            >
                {letterKeys.map((key) => {
                    const letterID = letterKeys.indexOf(key)
                    if (letterID !== 0) {
                        const previousLetter = letterKeys[letterID - 1]
                        if (letters[key].unlocked && letters[previousLetter].bought) {
                            return <LetterButton letter={key} key={key}/>
                        }
                        if (!letters[key].unlocked && letters[previousLetter].unlocked) {
                            return <LetterButton letter={key} key={key}/>
                        }
                    } else {
                        return <LetterButton letter={key} key={key}/>
                    }
                })}
            </Flex>
        </>
    )
}