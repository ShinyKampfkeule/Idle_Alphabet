import {MantineProvider} from "@mantine/core";
import Game from "./pages/game";

export default function App() {
    return (
        <MantineProvider withGlobalStyles withNormalizeCSS>
            <Game/>
        </MantineProvider>
    );
}