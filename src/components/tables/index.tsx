import { bool } from "prop-types";
import { FlexContainer } from "../containers/flexContainer";
import { BodyStyled, CellStyled, StatusStyled } from "./body/styles";
import { Header } from "./header/styles";
import { ActionButtons } from "../buttons/actionsButton";

interface TableProps {
    data: any[][];
    columns: any[];
}
export const Table = ({ data, columns }: TableProps) => {
    console.log(data)
    return (
        <FlexContainer alignItems="center" justifyContent="center" direction="col">
            <Header>
                {columns.map((column, index) => {
                    return (
                        <FlexContainer key={index} justifyContent="center" alignItems="center">{column}</FlexContainer>
                    )
                })}
            </Header>
            <BodyStyled>
                {data.map((row, index) => {
                    return (
                        <CellStyled key={index}>
                            {row.map((cell, index) => {
                                if (cell.type === "status") {
                                    console.log(cell.value)
                                    return (
                                        <FlexContainer key={index} justifyContent="center" alignItems="center">
                                            <StatusStyled status={cell.value} />
                                        </FlexContainer>
                                    )
                                }
                                if (cell.type === "actions") {
                                    return (
                                        <ActionButtons />
                                    )
                                }
                                return (
                                    <FlexContainer key={index} justifyContent="center" alignItems="center">{cell.value}</FlexContainer>
                                )
                            })}
                        </CellStyled>
                    )
                })}
            </BodyStyled>
        </FlexContainer>
    );
}