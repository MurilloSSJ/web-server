import { FlexContainer } from "@/components/containers/flexContainer";
import { TitleContainer } from "../style";
import { SectionTitle } from "@/components/texts/sectionTitle";
import { darkBlueTheme } from "@/styles";

const ConfigPage = () => {
    return (
        <FlexContainer direction="col" justifyContent="center" alignItems="center" paddingTop={50} className={darkBlueTheme.className} paddingLeft={50} paddingRight={50}>
            <SectionTitle text="Configurations" gradient="primary" />
            <FlexContainer lightBackground={true} width="100%" marginX={600}>
                teste
            </FlexContainer>
        </FlexContainer>
    );
}

export default ConfigPage;