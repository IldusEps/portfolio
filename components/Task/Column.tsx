import { Center, Grid, Paper, ScrollArea, Stack, Text } from "@mantine/core"
import { useDrop } from "react-dnd"
import Task from "./Task";
import { useEffect } from "react";

export default function Column({ index = 0, label = "", data = [], setData = (data) => { } }) {
    const [{ isOver }, dropRef] = useDrop({
        accept: "task",
        hover: (item) => setData((data) => {
            if (!data[index].find(o => o.id == item.id)) {
                const myData = [...data[index], item]
                for (let i = 0; i < data.length; i++) {
                    const it = data[i]
                    if (it.find(o => o.id == item.id)) {
                        const id = it.findIndex(o => o.id === item.id)
                        it.splice(id, 1)
                    }
                }
                data[index] = myData
                data = [[...data[0]], [...data[1]], [...data[2]]]
            }
            return data
        }),
        collect: (monitor) => ({
            isOver: monitor.isOver(),
        }),
    });

    const tasks = data.slice(index, index + 1)[0].map((tod, ind) => (
        <Task label={tod.label} id={tod.id} data={data} setData={(data) => setData(data)} index={ind} indexColumn={index} />
    ))

    return <Grid.Col span={4} key={index} ref={dropRef} >
        {/*  */}
        <ScrollArea>
            <Stack>
                {/* gap={{ base: 3, xs: 'sm', md: 'sm', xl: 30 }} */}
                <Center>
                    <Text size="xl" fw={700} c="rgba(13, 2, 2, 1)">{label}</Text>
                </Center>
                {(index == 0) && (
                    <Task plus={1} setData={(data) => setData(data)} />
                )}
                {tasks}
                {(index == 0) && (
                    <Task plus={2} setData={(data) => setData(data)} />
                )}
            </Stack>
        </ScrollArea>
    </Grid.Col>
};
