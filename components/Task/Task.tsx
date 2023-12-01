import { useState, useRef } from 'react'
import { IconPlus } from "@tabler/icons-react";
import classes from "./task.module.css";
import { Input, Paper, Text, Button, rem, useMantineTheme, Center } from "@mantine/core"
import { useDrag, useDrop } from "react-dnd"

export default function Task({ label = "", id = "", index = null, indexColumn = null, plus = false, data = [], setData = (data) => { } }) {
    const theme = useMantineTheme();
    const [isClickPlus, setClickPlus] = useState(false)

    const [{ opacity }, dragRef] = !plus ? useDrag({
        type: "task",
        item: { label, id },
        canDrag: !isClickPlus,
        collect: (monitor) => ({
            opacity: monitor.isDragging() ? 0.3 : 1,
        }),
    }) : [{ isDragging: false, opacity: 1 }, null];

    const [{ isOver }, dropRef] = !plus ? useDrop({
        accept: "task",
        canDrop: (item) => !(id == item.id),
        hover: (item) => setData((data) => {
            if (indexColumn != null) {
                let myData = {}
                let indexColumn1 = null
                let index1 = null
                for (let i = 0; i < data.length; i++) {
                    const it = data[i]
                    if (it.find(o => o ? (o.hasOwnProperty('id') ? (o.id == item.id) : false) : false)) {
                        indexColumn1 = i
                        index1 = it.findIndex(o => o.id === item.id)
                        myData = data[indexColumn1][index1]
                        it.splice(index1, 1)
                    }
                }
                if (indexColumn1 != null) {
                    data[indexColumn] = [...data[indexColumn].slice(0, index), myData, ...data[indexColumn].slice(index)]
                    data = [[...data[0]], [...data[1]], [...data[2]]]
                }
                return data
            } else
                return data
        }),
        collect: (monitor) => ({
            isOver: monitor.isOver(),
        })
    }) : [{ isOver: null }, null]
    const ref = useRef(null)
    const dragDropRef = !plus ? dragRef(dropRef(ref)) : null

    const [text, setText] = useState(label)
    const saveText = (e) => {
        let isFirst = true
        setData((data) => {
            if (plus == false) {
                if (indexColumn != null) {
                    if (text)
                        data[indexColumn][index].label = text
                    else
                        data[indexColumn].splice(index, 1)
                    data = [[...data[0]], [...data[1]], [...data[2]]]
                }
            } else if (text && isFirst) {
                const newId = +data.reduce((max, arr) => {
                    const newObj = arr.reduce((max, obj) => (obj.id > max ? obj.id : max), 0)
                    return newObj > max ? newObj : max
                }, 0) + 1
                console.log(newId)
                if (plus == 1)
                    data[0] = [{ label: text, id: newId }, ...data[0]]
                else
                    data[0].push({ label: text, id: newId })

                data = [[...data[0]], [...data[1]], [...data[2]]]
                setText("")
            }
            setClickPlus(false)
            isFirst = false
            return data
        })
        e.stopPropagation()
    }

    return <Paper
        className={classes.paper}
        radius="md"
        shadow="md"
        p={plus ? "xs" : "md"}
        key={label}
        style={plus ? { minHeight: rem(10), backgroundColor: theme.colors.gray[4], pointerEvents: "auto" } : { opacity }}
        ref={plus ? null : dragDropRef}
        onClick={() => setClickPlus(true)}
    >
        {isClickPlus ?
            (<Input
                placeholder="Что сделать?"
                value={text}
                onChange={data => setText(data.currentTarget.value)}
                onKeyUp={(e) => {
                    if (e.key === 'Enter')
                        saveText(e)
                }}
                style={{ width: '100%' }}
                rightSectionPointerEvents="auto"
                rightSection={
                    <Button
                        aria-label="ОК"
                        onClick={(e) => saveText(e)}
                    >ОК</Button>
                }
            />)
            : (plus ? (<>
                <IconPlus />
            </>) : (
                <Center style={{ width: '100%' }}>
                    <Text size="lg" lineClamp={10} truncate>
                        {label}
                    </Text>
                </Center>
            ))
        }
    </Paper >
};
