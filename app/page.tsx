"use client";

import "./globals.css";
import { useState, useEffect } from "react"
import { IconDeviceMobileMessage, IconHomeHeart, IconMusic, IconSatellite, IconSignal4g, IconSmartHome, IconVolume, IconPlanet } from "@tabler/icons-react";
import { useDisclosure } from '@mantine/hooks';
import { AppShell, Flex } from '@mantine/core';
import Preloader from "@/components/preloader/preloader";
import Alina from "@/components/Alina/Alina";
import AlinaIcon from "@/components/Alina/AlinaIcon";

const Icons = [IconSmartHome, IconDeviceMobileMessage, IconSignal4g, IconSatellite, IconHomeHeart, IconMusic, IconVolume, IconPlanet]

export default function Home() {
  const [loading, setLoading] = useState(true)
  useEffect(() => {
    setTimeout(() => setLoading(false), 1500)
  }, [])

  const cubes = Icons.map((Icon) => (<div className="cubeAlina"><Icon className="iconCube" stroke={1.5} /></div>))

  return (
    <main class="cubes">
      {loading && <Preloader children={cubes} />}
      <AppShell
        header={{ height: 70 }}
        style={{ zIndex: 2 }}
      // padding="md"
      >
        {!loading && (
          <AppShell.Header>
            <Flex
              justify="start"
              align="center"
              direction="row"
              wrap="wrap"
              style={{ height: '100%', padding: 8, paddingLeft: 32 }}
            >
              <IconHomeHeart />
              <AlinaIcon />
            </Flex>
          </AppShell.Header>
        )}

        <AppShell.Main><Alina /></AppShell.Main>

      </AppShell>
    </main >
  );
}
