import classes from "./Alina.module.css"
import { Paper, Flex, Title } from "@mantine/core"

export default function MessageDialog({ label = "", start = false }) {
    return <div className={classes.messageDialog}>
        <Flex justify={start ? "flex-start" : "flex-end"}>
            <Paper
                shadow="md"
                radius="xl"
                p="xs"
                style={{ backgroundColor: "#1C7ED6" }}
            >
                <Title order={3}>{label}</Title>
            </Paper>
        </Flex>
    </div>;
};
