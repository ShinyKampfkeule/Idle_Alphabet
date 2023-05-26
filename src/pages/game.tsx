import {AppShell, Header, Navbar} from "@mantine/core";
import GameHeader from "../components/header/header";
import GameNavbar from "../components/navbar/navbar";
import {colorsAtom} from "../atoms/colors";
import {useAtomValue} from "jotai";
import GameMain from "../components/body/gameMain";

export default function Game() {
    const colors = useAtomValue(colorsAtom)

    return (
        <AppShell
            sx={{
                backgroundColor: colors.lightGray
            }}
            header={
                <Header
                    height={80}
                    p={0}
                    sx={{
                        backgroundColor: colors.mainColor,
                        borderBottom: "4px solid",
                        borderBottomColor: colors.mainColorAccent
                    }}
                >
                    <GameHeader/>
                </Header>
            }
            navbar={
                <Navbar
                    width={{base: 520}}
                    height="100%"
                    p={0}
                    sx={{
                        backgroundColor: colors.mainColor,
                        borderRight: "4px solid",
                        borderColor: colors.mainColorAccent
                    }}
                >
                    <GameNavbar/>
                </Navbar>
            }
        >
            <GameMain/>
        </AppShell>
    )
}