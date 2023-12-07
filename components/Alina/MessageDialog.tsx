import classes from "./Alina.module.css"
import { Paper, Flex, Title, em } from "@mantine/core"
import { useMediaQuery } from '@mantine/hooks'
import { Caveat } from 'next/font/google'

const сaveat = Caveat({
    weight: '400',
    subsets: ['cyrillic'],
    display: 'swap',
})

export default function MessageDialog({ label = "", start = false }) {
    const isMobile = useMediaQuery(`(max-width: ${em(750)})`)

    return (
        <Flex
            justify={start ? "flex-start" : "flex-end"}
            style={{ zIndex: 2, paddingTop: 16 }}
            className={classes.messageDialog}
        >
            <Paper
                shadow="lg"
                radius="xl"
                p="xs"
                style={{ backgroundColor: "white" }}
            >
                <Title
                    order={isMobile ? 4 : 2}
                    className={classes.messageDialogText}
                    style={{ fontWeight: 300 }}
                >
                    {label}
                </Title>
            </Paper>
        </Flex>
    )
}