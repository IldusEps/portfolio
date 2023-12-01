
import Weather from "@/components/Weather/Weather";
import { Container, Grid } from "@mantine/core";
import "../globals.css";
import { IconCloud, IconCloudBolt, IconCloudRain, IconCloudSnow, IconSun, IconSunElectricity, IconUmbrella } from "@tabler/icons-react";

const Icons = [IconSun, IconCloud, IconCloudBolt, IconCloudSnow, IconCloudRain, IconSun, IconSunElectricity, IconCloudBolt, IconCloudSnow, IconUmbrella]

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
            <Weather />
        </main >
    );
}
