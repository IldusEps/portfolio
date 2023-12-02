import NextImage from 'next/image';
import { Image, Stack, Group } from '@mantine/core';
import ImageSpeaker from '@public/imageSpeaker.jpg';
import MessageDialog from './MessageDialog';

export default function Alina({ }) {
    return (
        <Group justify="space-between" align="start" grow style={{ width: "100%" }}>
            <div style={{ width: "90%" }}>
                <Image
                    component={NextImage}
                    src={ImageSpeaker}
                    fit="contain"
                    w="auto"
                    style={{ height: 'calc(100vh - 70px)' }}
                />
            </div>
            <Stack gap="md" style={{ minWidth: "200px", maxWidth: "400px", padding: "16px" }}>
                <MessageDialog label="Привет, Алина" />
                <MessageDialog label="Привет" start />
                <MessageDialog label="Ничек  хәлләр?" />
                <MessageDialog label="Әйбәт! Сезнең?" start />
            </Stack>
        </Group>
    )
};
