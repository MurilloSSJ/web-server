import { FaWineGlassEmpty } from "react-icons/fa6";
import { BaseOperator, BaseOperatorWithoutFlow } from "./base_operator"
export const EmptyOperator = () => {
    return (
        <BaseOperator operator="Empty Operator" Icon={FaWineGlassEmpty}/>
    )
}

export const EmptyOperatorWithoutFlow = () => {
    return (
        <BaseOperatorWithoutFlow operator="Empty Operator" Icon={FaWineGlassEmpty}/>
    )
}