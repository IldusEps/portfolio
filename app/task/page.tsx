"use client"

import "../globals.css";
import { IconDragDrop, IconPencil, IconStack, IconSticker2, IconSubtask } from "@tabler/icons-react";
import Tasks from "@/components/Task/Tasks";
import { DndProvider, useDrop } from "react-dnd";
import { HTML5Backend } from 'react-dnd-html5-backend'

const Icons = [IconSticker2, IconPencil, IconSubtask, IconPencil, IconSubtask, IconStack, IconDragDrop, IconDragDrop]

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

    const cubes = Icons.map((Icon) => (<div className="cube"><Icon className="iconCube" stroke={1.5} /></div>))

    return (
        <main style={...mainProps} class="cubes">
            {cubes}

            <DndProvider backend={HTML5Backend}>
                <Tasks />
            </DndProvider>
        </main >
    );
}
