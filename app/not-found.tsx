"use client"

import { Flex, Text } from "@mantine/core";
import "./globals.css";
import { IconError404 } from "@tabler/icons-react";

const Icons = [IconError404, "Страница не найдена", IconError404, "Ошибка", IconError404, "Ошибка", IconError404, "Ошибка"]

export default function Home() {
    const mainProps = {
        display: 'flex',
        minHeight: '100vh',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'space-between',
        padding: '1rem',
        backgroundColor: '',
        //background: `linear-gradient(to bottom,transparent,rgb(255, 255, 255)) rgb(214, 219, 220)`
    }

    const cubes = Icons.map((Icon, ind) => (ind % 2 == 0) ? (<div className="cube"><Icon className="iconCube" stroke={1.5} /></div>)
        : (<div className="cube"><Text size={(ind == 1) ? "sm" : "md"}>{Icon}</Text></div>))

    return (
        <main style={...mainProps} class="cubes">
            {cubes}
        </main >
    );
}
