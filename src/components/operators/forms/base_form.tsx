import { Form, FormControl, FormDescription, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form"
import { Input } from "@/components/ui/input"
import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import { z } from "zod"
import { baseOperatorSchema } from "../../../schemas/base_operator"
import { Button } from "@/components/ui/button"

type BaseOperatorFormProps = {
    children: React.ReactNode
    object: z.ZodObject<any, any, any>
    onSubmit: (data: any) => void
}

export const BaseOperatorForm = (props: BaseOperatorFormProps) => {
    const operatorForm = useForm<z.infer<typeof props.object>>({
        resolver: zodResolver(baseOperatorSchema),
    })
    return (
        <div></div>
    )
}