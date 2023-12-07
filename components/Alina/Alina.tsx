import { Image, Stack, Group, Input, Title, Mark, Blockquote, em } from '@mantine/core';
import { useMediaQuery } from '@mantine/hooks';
import ImageSpeaker from '@public/imageSpeaker.jpg';
import MessageDialog from './MessageDialog';
import classes from "./Alina.module.css"
import { IconMicrophone } from '@tabler/icons-react';

export default function Alina({ }) {
    const isMobile = useMediaQuery(`(max-width: ${em(750)})`)

    return (
        <Group justify="space-between" align="start" className={classes.messageContainer}>
            <div style={{ position: "relative", width: "100px" }}>
                <Image
                    src="/imageSpeaker.jpg"
                    fit="contain"
                    w="auto"
                    style={{ height: 'calc(100vh - 70px)' }}
                />
                <Blockquote
                    color="indigo"
                    mt="xl"
                    className={classes.messageDialogText}
                    style={{ position: "absolute", left: 32, top: 32, minWidth: "500px", maxWidth: "70vw", color: "white" }}
                    visibleFrom="sm"
                >
                    <Title order={2}>
                        <Mark color="#1c7ed6">Голосовой помощник</Mark>, который говорит и на <u>русском</u> и на <u>татарском</u>. Переключается в зависимости от того, на каком языке вы к нему обращаетесь и кто обращается
                    </Title>
                </Blockquote>
                <Blockquote
                    color="blue"
                    mt="xl"
                    style={{ position: "absolute", left: 32, top: 32, minwidth: "25%", maxWidth: "50vw", fontFamily: '"Caveat", cursive', color: "white" }}
                    hiddenFrom="sm"
                >
                    <Mark color="#1c7ed6">Голосовой помощник</Mark>, который говорит и на русском и на татарском. Переключается в зависимости от того, на каком языке вы к нему обращаетесь
                </Blockquote>
            </div>
            <div style={{ maxWidth: "50%", minWidth: isMobile ? "30%" : "calc((100vh - 70px) / 1.49)", height: "100%" }}>
                <Stack gap="md" className={classes.messageDialogs}>
                    <MessageDialog label="Привет, Алина" />
                    <MessageDialog label="Привет" start />
                    <MessageDialog label="Ничек  хәлләр?" />
                    <MessageDialog label="Әйбәт! Сезнең?" start />
                    <div style={{ marginTop: "16px", padding: "8px" }}>
                        <Input
                            placeholder="Языгыз..."
                            size="md"
                            readonly="readonly"
                            style={{ pointerEvents: "none" }}
                            rightSection={<IconMicrophone />}
                        />
                    </div>
                </Stack>
            </div>
        </Group >
    )
}