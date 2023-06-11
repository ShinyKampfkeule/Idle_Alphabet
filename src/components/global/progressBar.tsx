import {Grid} from "@mantine/core";
import {useAtomValue} from "jotai/index";
import {colorsAtom} from "../../atoms/colors";

export default function ProgressBar() {
    const colors = useAtomValue(colorsAtom)

    return (
        <>
            {/*<Container*/}
            {/*    style={{*/}
            {/*        // visibility: letters[letter].automatedProduction ? "visible" : "hidden",*/}
            {/*        // width: `${progressBarValue}%`,*/}
            {/*        width: "100%",*/}
            {/*        height: "6%",*/}
            {/*        backgroundColor: 'red',*/}
            {/*        bottom: 0,*/}
            {/*        left: 0,*/}
            {/*        position: "absolute"*/}
            {/*    }}*/}
            {/*>*/}
            {/*    */}
            {/*</Container>*/}
            <Grid
                columns={10}
                gutter={5}
                style={{
                    // visibility: letters[letter].automatedProduction ? "visible" : "hidden",
                    // width: `${progressBarValue}%`,
                    width: "100%",
                    height: "6%",
                    backgroundColor: 'red',
                    bottom: 0,
                    left: 0,
                    position: "absolute",
                    margin: 0
                }}
            >
                {
                    Array(9).fill(1).map((_, index) => (
                        <Grid.Col
                            span={1}
                            key={index}
                            style={{
                                backgroundColor: 'green',
                                padding: 0
                            }}
                        />
                    ))
                }
            </Grid>
        </>
    )
}