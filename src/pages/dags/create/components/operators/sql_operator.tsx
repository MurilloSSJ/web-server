import { BaseOperator, BaseOperatorWithoutFlow } from "./base_operator"
import { TbSql } from "react-icons/tb";
export const SQLOperator = () => {
    return (
        <BaseOperator operator="SQL Operator" Icon={TbSql}/>
    )
}

export const SQLOperatorWithoutFlow = () => {
    return (
        <BaseOperatorWithoutFlow operator="SQL Operator" Icon={TbSql}/>
    )
}