import LetterButtonInterface, {LetterButtonLetterInterface} from "../../../interfaces/letterButton";
import {lettersAtom} from "../../../atoms/letters";
import UnboughtButtonBuyable from "./unboughtButtonBuyable";
import UnboughtButtonUnbuyable from "./unboughtButtonUnbuyable";
import ActiveButton from "./activeButton";
import LockedButton from "./lockedButton";
import {useAtomValue} from "jotai";

export default function LetterButton({letter}: LetterButtonLetterInterface) {
    const letters = useAtomValue(lettersAtom)

    return (
        <>
            {
                letters[letter].unlocked
                    ? letters[letter].bought
                        ? <ActiveButton letter={letter}/>
                        : checkIfBuyable(letters, letter)
                            ? <UnboughtButtonBuyable letter={letter}/>
                            : <UnboughtButtonUnbuyable letter={letter}/>
                    : <LockedButton/>
            }
        </>
    )
}

function checkIfBuyable(letters: LetterButtonInterface, letter: string) {
    let buyable = true
    const buyingCosts = letters[letter].buyingCosts
    if (buyingCosts !== undefined) {
        Object.keys(buyingCosts).map((key) => {
            if (letters[key].amount < buyingCosts[key]) {
                buyable = false
            }
        })
    }
    return buyable
}