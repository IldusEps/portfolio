export function degToSideWorld(deg) {
    if (deg > 295 && deg < 335)
        return "С-З"
    else if (deg >= 335 || deg <= 25)
        return "С"
    else if (deg > 25 && deg < 65)
        return "С-В";
    else if (deg >= 65 && deg <= 115)
        return "В"
    else if (deg > 115 && deg < 155)
        return "Ю-В";
    else if (deg >= 155 && deg <= 205)
        return "Ю";
    else if (deg > 205 && deg < 245)
        return "Ю-З"
    else if (deg >= 245 && deg <= 295)
        return "З"
}