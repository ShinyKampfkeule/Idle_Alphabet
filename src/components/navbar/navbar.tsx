import {Flex, Tabs, Tooltip} from "@mantine/core";
import {IconChartHistogram, IconClock, IconSettings, IconSortAZ, IconStar, IconTrophy} from "@tabler/icons-react";
import {useAtomValue} from "jotai/index";
import {colorsAtom} from "../../atoms/colors";
import {useAtom} from "jotai";
import {activeTabAtom} from "../../atoms/activeTab";

export default function GameNavbar() {
    const colors = useAtomValue(colorsAtom)
    const [activeTab, setActiveTab] = useAtom(activeTabAtom)

    return (
        <Tabs
            value={activeTab}
            onTabChange={(e) => setActiveTab(e)}
            styles={{
                root: {
                    height: "100%"
                },
                tab: {
                    "&:hover": {
                        backgroundColor: colors.mainColorAccent,
                        borderColor: colors.lightGray,
                        borderRadius: 0
                    },
                    "&[data-active]": {
                        borderColor: colors.lightGray
                    },
                    "&[data-active]:hover": {
                        borderColor: colors.lightGray,
                        backgroundColor: "transparent"
                    },
                    borderBottom: "3px solid",
                    borderColor: colors.mainColorAccent
                },
                panel: {
                    color: colors.lightGray,
                    padding: "30px 20px"
                }
            }}
        >
            <Tabs.List grow>
                <Tooltip label="Events">
                    <Tabs.Tab value="Events" icon={<IconClock size={32} style={{color: colors.lightGray}}/>}/>
                </Tooltip>
                <Tooltip label="Alphabets">
                    <Tabs.Tab value="Alphabets" icon={<IconSortAZ size={32} style={{color: colors.lightGray}}/>}/>
                </Tooltip>
                <Tooltip label="Prestige">
                    <Tabs.Tab value="Prestige" icon={<IconStar size={32} style={{color: colors.lightGray}}/>}/>
                </Tooltip>
                <Tooltip label="Statistics">
                    <Tabs.Tab value="Statistics"
                              icon={<IconChartHistogram size={32} style={{color: colors.lightGray}}/>}/>
                </Tooltip>
                <Tooltip label="Achievements">
                    <Tabs.Tab value="Achievements" icon={<IconTrophy size={32} style={{color: colors.lightGray}}/>}/>
                </Tooltip>
                <Tooltip label="Settings">
                    <Tabs.Tab value="Settings" icon={<IconSettings size={32} style={{color: colors.lightGray}}/>}/>
                </Tooltip>
            </Tabs.List>
            <Tabs.Panel value="Events"><Flex align="center" justify="center" h="20%"> Events COMING SOON
                !!!</Flex></Tabs.Panel>
            <Tabs.Panel value="Alphabets"><Flex align="center" justify="center" h="20%"> Alphabets COMING SOON
                !!!</Flex></Tabs.Panel>
            <Tabs.Panel value="Prestige"><Flex align="center" justify="center" h="20%">Prestige COMING SOON
                !!!</Flex></Tabs.Panel>
            <Tabs.Panel value="Statistics"><Flex align="center" justify="center" h="20%">Statistics COMING SOON
                !!!</Flex></Tabs.Panel>
            <Tabs.Panel value="Achievements"><Flex align="center" justify="center" h="20%">Achievements COMING SOON
                !!!</Flex></Tabs.Panel>
            <Tabs.Panel value="Settings"><Flex align="center" justify="center" h="20%">Settings COMING SOON
                !!!</Flex></Tabs.Panel>
            <Tabs.Panel value="Upgrades"><Flex align="center" justify="center" h="20%">Upgrades COMING SOON
                !!!</Flex></Tabs.Panel>
        </Tabs>
    )
}