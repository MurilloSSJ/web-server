import { Dialog, DialogContent, DialogTrigger } from "@radix-ui/react-dialog"
import { BaseOperator, BaseOperatorWithoutFlow } from "./base_operator"
import { IoLogoPython } from "react-icons/io"
import { BaseOperatorForm } from "./forms/base_form"
import { Button } from "@/components/ui/button"
import { useState } from "react"
import { Form, FormControl, FormDescription, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form"
import { Input } from "@/components/ui/input"
import { pythonOperatorSchema } from "../../schemas/python_operator"
import { useForm } from "react-hook-form"
import { z } from "zod"
import { zodResolver } from "@hookform/resolvers/zod"
import { CodeEditor } from "@/components/aceEditor"
import { DialogClose } from "@/components/ui/dialog"

export const PythonOperator = () => {
    return (
        <BaseOperator operator="Python Operator" Icon={IoLogoPython}/>
    )
}

type PythonOperatorWithoutFlowProps = {
    setNodes: (nodes: any) => void
    nodes: any
    setFunctions: (functions: any) => void
    functions: any
    onLayout: () => void
}

export const PythonOperatorWithoutFlow = (props: PythonOperatorWithoutFlowProps) => {
    const operatorForm = useForm<z.infer<typeof pythonOperatorSchema>>({
        resolver: zodResolver(pythonOperatorSchema),
      })
    const default_code = `def sum():\n    return 1+1`
    const captureFunction = (value: string, event?: any) => {
        const regex = /def\s+(\w+)\s*\(/
        const match = value.match(regex)
        if (match){
            operatorForm.setValue('python_callable', match[1])
        }
    }
    const onSubmit = (data: z.infer<typeof pythonOperatorSchema>) => {
        console.log(data)
        props.setNodes([...props.nodes, {
            id: data.task_id,
            type: 'pythonOperator',
            data: { label: data.task_id, python_callable: data.python_callable },
            position: [0, 0]
        }]
        )
        setOpen(false)
        props.onLayout()
    }
    const [open, setOpen] = useState(false);
    return (
        
        <Dialog open={open} onOpenChange={setOpen}>
            <DialogTrigger>
                <div className="focus:outline-none relative">
                <BaseOperatorWithoutFlow operator="Python Operator" Icon={IoLogoPython}/>
                </div>
            </DialogTrigger>
            <DialogContent >
                    <div className="fixed left-0 right-0 top-1/2 transform -translate-y-1/2 p-10 z-60 w-fit mx-auto border-2 border-black rounded-sm overflow-scroll">
                    <Form {...operatorForm}>
                        <form onSubmit={operatorForm.handleSubmit(onSubmit)} className="space-y-8">
                        <FormField
                            control={operatorForm.control}
                            name="task_id"
                            render={({ field }) => (
                                <FormItem>
                                <FormLabel>Task Id</FormLabel>
                                <FormControl>
                                    <Input placeholder="task_id" {...field} />
                                </FormControl>
                                <FormDescription>
                                    This is your public display name.
                                </FormDescription>
                                <FormMessage />
                                </FormItem>
                            )}
                            />
                        <FormField
                            control={operatorForm.control}
                            name="python_callable"
                            render={({ field }) => (
                                <FormItem>
                                    <FormLabel>Python Callable</FormLabel>
                                    <CodeEditor defaultValue={default_code} onChange={captureFunction}/>
                                    <FormControl>
                                        <Input type="hidden" {...field} />
                                    </FormControl>
                                    <FormDescription>
                                        This is your executable code.
                                    </FormDescription>
                                    <FormMessage />
                                </FormItem>
                            )}
                        />
                            <Button type="submit">Submit</Button>
                        </form>
                    </Form>
                    </div>
            </DialogContent>
        </Dialog>
    )
}