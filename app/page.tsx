"use client";

import "./globals.css";
import { useState, useEffect } from "react"
import { IconDeviceMobileMessage, IconHomeHeart, IconMusic, IconSatellite, IconSignal4g, IconSmartHome, IconVolume, IconPlanet } from "@tabler/icons-react";
import { useMediaQuery } from '@mantine/hooks';
import { AppShell, Flex, em } from '@mantine/core';
import Preloader from "@/components/preloader/preloader";
import Alina from "@/components/Alina/Alina";
import AlinaIcon from "@/components/Alina/AlinaIcon";

const Icons = [IconSmartHome, IconDeviceMobileMessage, IconSignal4g, IconSatellite, IconHomeHeart, IconMusic, IconVolume, IconPlanet]

export default function Home() {
  const isMobile = useMediaQuery(`(max-width: ${em(750)})`)
  const [loading, setLoading] = useState(true)
  useEffect(() => {
    setTimeout(() => setLoading(false), 500)
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
              justify={isMobile ? "center " : "start"}
              align="center"
              direction="row"
              wrap="wrap"
              style={{ height: '100%', padding: 8, paddingLeft: isMobile ? 16 : 32 }}
            >
              <IconHomeHeart />
              <AlinaIcon scale={isMobile ? 0.7 : 1} />
            </Flex>
          </AppShell.Header>
        )}

        <AppShell.Main style={{ background: "white" }}>
          <Alina />
        </AppShell.Main>

      </AppShell>
    </main >
  );
}
