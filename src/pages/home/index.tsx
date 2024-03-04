import { FlexContainer } from "@/components/containers/flexContainer"
import { BarGraph } from "@/components/graphs/bar";
import { CounterGraph } from "@/components/graphs/counter"
import PieChart from "@/components/graphs/pie";
import { SectionTitle } from "@/components/texts/sectionTitle"
import { PiArchiveBox } from "react-icons/pi";
import { PiFlowerLotus } from "react-icons/pi";
import { PiUsers } from "react-icons/pi";
const Home = () => {
    return (
        <FlexContainer direction="col" alignItems="center" dark height="screen" paddingX={50} paddingY={50}>
            <SectionTitle text="Dashboard" gradient="primary" />
            <FlexContainer justifyContent="center" alignItems="stretch" gapX={50} paddingY={50}>
                <CounterGraph Icon={PiArchiveBox} counter={3} />
                <CounterGraph Icon={PiFlowerLotus} counter={25} />
                <CounterGraph Icon={PiUsers} counter={15} />
            </FlexContainer>
            <FlexContainer justifyContent="center" gapX={50}>
                <></>
                {/* <PieChart />
                <BarGraph data={[1, 2, 3]} labels={[]} title="Dag Status" /> */}
            </FlexContainer>
        </FlexContainer>
    )
}

export default Home