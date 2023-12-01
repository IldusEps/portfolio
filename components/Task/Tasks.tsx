import { useState, useEffect } from "react"
import { Flex, Grid, Text, em, Center, Stack } from "@mantine/core";
import { useLocalStorage, useMediaQuery } from '@mantine/hooks';
import Preloader from "../preloader/preloader";
import { IconSticker2 } from "@tabler/icons-react";
import classes from "./task.module.css";
import Column from "./Column";

export default function Tasks() {
    const isMobile = useMediaQuery(`(max-width: ${em(750)})`);
    const [data, setData] = useLocalStorage({
        key: "tasks", defaultValue: [[{
            id: 0,
            label: "Сделать"
        }, {
            id: 1,
            label: "Сделать1"
        }, {
            id: 2,
            label: "Сделать2"
        }], [{ id: 3, label: "В процессе" }], []]
    });
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        setLoading(false) //true
    }, []);

    const columns = ["Планы", "В процессе", "Сделано"].map((label, index) => (
        <Column label={label} index={index} data={data} setData={(data) => setData(data)} />
    ))

    return (
        <Flex
            justify="center"
            align="start"
            direction="row"
            wrap="wrap" style={{ zIndex: 2, width: "100vw", height: "100vh" }}
        >
            {loading && <Preloader Icon={IconSticker2} />}
            <Grid
                wrap
                gutter={{ base: 7, xs: 'lg', md: 'xl', xl: 50 }}
                style={{ width: '100%', height: '80%', width: !isMobile ? '80%' : '90%' }}
                className={classes.root}
            >
                {columns}
            </Grid>
            
        </Flex >
    );
}
