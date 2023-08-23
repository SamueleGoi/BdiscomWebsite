//image
import WWD01 from "../resources/images/WhatWeDo/WWD01.jpg";

// international distributors
import BEAMTEC from "../resources/images/InternationalDistributors/beamtec.jpg";
import MANITOU from "../resources/images/InternationalDistributors/manitou.jpg";
import NEYCO from "../resources/images/InternationalDistributors/NEYCO.jpg";
import AOT from "../resources/images/InternationalDistributors/AOT.jpg";
import TRIPLEWINS from "../resources/images/InternationalDistributors/Triplewins.jpg";
import VAC_TECHNICHE from "../resources/images/InternationalDistributors/vac_techniche.jpg";
import NANO_4_ENERGY from "../resources/images/InternationalDistributors/nano4energy.jpg";
import TOSHNIWAL from "../resources/images/InternationalDistributors/TOSHNIWAL.jpg";
import SKYSYS from "../resources/images/InternationalDistributors/SKYSYS.jpg";
import MITEC_GROUP from "../resources/images/InternationalDistributors/mitegroup.jpg";
import YJ from "../resources/images/InternationalDistributors/236_Y&J_TECH_TAIWAN.jpg";

// Representatives
import GENCOA from "../resources/images/Representatives/132_rappresentate_1.jpg";
import TRUMPF from "../resources/images/Representatives/167_TRUMPF_logo.jpg";
import MANITOU_REP from "../resources/images/Representatives/214_manitou.jpg";

export const mockdb = () => {
  return {
    MockRepresentativesCard: [
      {
        image: TRUMPF,
        title: "TRUMPF Hüttinger",
        description:
          "HUETTINGER Elektronik is a world-wide leader in manufacturing of power supplies for plasma applications, induction heating, and CO2 laser excitation.",
        link: "http://www.trumpf-huettinger.com/en.html",
        key: "0",
      },
      {
        image: GENCOA,
        title: "Gencoa",
        description:
          "Gencoa provide sputter based solutions for the vacuum thin film deposition industry",
        link: "http://www.gencoa.com/",
        key: "1",
      },
      {
        image: MANITOU_REP,
        title: "MANITOU SYSTEMS Inc",
        description:
          "Azienda americana specializzata in accessori e dispositivi speciali per generatori e applicazioni 'Plasma Radio Frequenza'",
        link: "http://www.manitousys.com/",
        key: "2",
      },
    ],
    MockProductsCard: [
      {
        image: WWD01,
        title: "BDS.ARC",
        subtitle: "Arc Plasma Generator",
        description:
          "The most reliable high performance generator for high current CAE processes with high efficiency (> 90 %)",
        key: "0",
      },
      {
        image: WWD01,
        title: "BDS.MF",
        description:
          "The newest and most price competitive medium frequency generator for any High/Low Voltage ( 3kV to 7kV ) PECVD and PVD processes",
        key: "1",
      },
      {
        image: WWD01,
        title: "BDS.HF",
        description:
          "New generation of very price competitive and High efficiency 200, 300 and 750 Watt 13.56 MHz Black Box RF generators",
        key: "2",
      },
      {
        image: WWD01,
        title: "BDS.AMN",
        description:
          "BDISCOM is introducing a new generation of automatic matching network units operating at the standard ISM frequency of 13.56 MHz intended for industrial and laboratory use. Typical application include Sputtering process, PECVD deposition, plasma activation, dielectric heating, laser excitation and more.",
        key: "3",
      },
      {
        image: WWD01,
        title: "BDS.SP",
        description:
          "Very price competitive  Table Top RF  13.56 MHz plasma reactor system series for most of the Cleaning/Etching process in R/D or small Industrial pilot  production (from 2.5 to 40 litres SS 304 vacuum chambers)",
        key: "4",
      },
      {
        image: WWD01,
        title: "BDS.HV",
        description:
          "The BDS VIMM - Variable Inductor Manual Matching Unit - is the most compact RF 13.56 MHz inductive manual matching network currently available on the market with some unique features described in the below specifications.",
        key: "5",
      },
      {
        image: WWD01,
        title: "Spare",
        description:
          "New high voltage DC generator with AFP (touch screen Active Front Panel) for glow discharge processes",
        key: "6",
      },
      {
        image: WWD01,
        title: "Spare",
        description:
          "Highly price competitive DC power supply with fast arc detection (< 200 nSec ) and digital interfaces. Suitable for small and medium R/D and industrial sputter tools.",
        key: "7",
      },
      {
        image: WWD01,
        title: "Spare",
        description: "BDS SP 3, 6 and 12 Sputter Power Supplies",
        key: "8",
      },
    ],
    MockInternationalDistributorsCard: [
      {
        image: BEAMTEC,
        link: "http://www.beamtec.de/en/products/",
        key: "0",
      },
      {
        image: MANITOU,
        link: "http://www.manitousys.com/",
        key: "1",
      },
      {
        image: NEYCO,
        link: "http://www.neyco.fr/",
        key: "2",
      },
      {
        image: AOT,
        link: "http://www.aot-tek.com/",
        key: "3",
      },
      {
        image: TRIPLEWINS,
        link: "http://www.www-vacuum.com/",
        key: "4",
      },
      {
        image: VAC_TECHNICHE,
        link: "http://www.vactechniche.com/",
        key: "5",
      },
      {
        image: NANO_4_ENERGY,
        link: "http://www.nano4energy.eu/",
        key: "6",
      },
      {
        image: TOSHNIWAL,
        link: "http://www.toshniwal.net/",
        key: "7",
      },
      {
        image: SKYSYS,
        link: "http://www.skysysgroup.com.au/",
        key: "8",
      },
      {
        image: MITEC_GROUP,
        link: "http://www.mitecgroup.it/",
        key: "9",
      },
      {
        image: YJ,
        link: "http://www.yjtech.com.tw/",
        key: "10",
      },
    ],
  };
};
