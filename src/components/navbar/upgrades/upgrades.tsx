import {Flex, Text, Title} from "@mantine/core";
import {useAtomValue} from "jotai";
import {activeLetterAtom} from "../../../atoms/upgradeLetter";
import {lettersAtom} from "../../../atoms/letters";
import {suffixesAtom} from "../../../atoms/suffixes";
import UpgradeButton from "./upgradeButton";
import formatNumber from "../../../functions/formatNumber";
import changeNumberDisplay from "../../../functions/changeNumberDisplay";

export default function Upgrades() {
    const activeLetter = useAtomValue(activeLetterAtom)
    const letters = useAtomValue(lettersAtom)
    const suffixes = useAtomValue(suffixesAtom)

    // console.log(Math.round(letters[activeLetter].productionRate * (1 / letters[activeLetter].productionSpeed)))

    return (
        <>
            <Flex
                justify="center"
                align="center"
                direction="column"
                wrap="wrap"
                w="95%"
            >
                <Title
                    order={1}
                    size="3rem"
                    sx={{
                        marginBottom: ".75rem"
                    }}
                >
                    {activeLetter}
                </Title>
                {
                    activeLetter !== ""
                        ?
                        <>
                            <Title order={3}>
                                {formatNumber(letters[activeLetter].amount)}
                                {/*{*/}
                                {/*    letters[activeLetter].amount > 999999999*/}
                                {/*        ? changeNumberDisplay(letters[activeLetter].amount, suffixes)*/}
                                {/*        : formatNumber(letters[activeLetter].amount)*/}
                                {/*}*/}
                            </Title>
                            <Text>
                                {
                                    Math.round(
                                        letters[activeLetter].productionRate
                                        * (1 / letters[activeLetter].productionSpeed)) > 999999
                                        ?
                                        changeNumberDisplay(Math.round(letters[activeLetter].productionRate
                                            * (1 / letters[activeLetter].productionSpeed)), suffixes)
                                        :
                                        formatNumber(letters[activeLetter].productionRate
                                            * (1 / letters[activeLetter].productionSpeed))
                                } Letters / Second
                            </Text>
                            <UpgradeButton upgrade="Increase Production Speed" letter={activeLetter}/>
                            <UpgradeButton upgrade="Increase Production Rate" letter={activeLetter}/>
                            {
                                !letters[activeLetter].automatedProduction
                                    ? <UpgradeButton upgrade="Automate Production" letter={activeLetter}/>
                                    : <></>
                            }
                        </>
                        :
                        <></>
                }
            </Flex>
        </>
    )
}