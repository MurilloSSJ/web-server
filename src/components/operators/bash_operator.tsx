import { Dialog, DialogContent, DialogTitle, DialogTrigger } from "@radix-ui/react-dialog"
import { BaseOperator, BaseOperatorWithoutFlow, BaseOperatorOnlyFlowProps } from "./base_operator"
import { SiGnubash } from "react-icons/si";
import { Button } from "@/components/ui/button"
import { useState } from "react"
import { Form, FormControl, FormDescription, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form"
import { Input } from "@/components/ui/input"
import { bashOperatorSchema } from "../../schemas/bash_operator"
import { useForm } from "react-hook-form"
import { z } from "zod"
import { zodResolver } from "@hookform/resolvers/zod"
import { CodeEditor } from "@/components/aceEditor"


export const BashOperator = (props: BaseOperatorOnlyFlowProps) => {
    return (
        <BaseOperator operator="Bash Operator" Icon={SiGnubash} id={props.id} position={props.position} data={props.data} task_group={props.data.task_group} />
    )
}

type BashOperatorWithoutFlowProps = {
    setNodes: (nodes: any) => void
    nodes: any
    edges: any
    setEdges: (edges: any) => void
}

export const BashOperatorWithoutFlow = (props: BashOperatorWithoutFlowProps) => {
    const operatorForm = useForm<z.infer<typeof bashOperatorSchema>>({
        resolver: zodResolver(bashOperatorSchema),
    })
    const default_code = `echo "Hello World"`
    const captureFunction = (value: string, event?: any) => {
        operatorForm.setValue('bash_command', value)
    }
    const onSubmit = (data: z.infer<typeof bashOperatorSchema>) => {
        const nodes = ([...props.nodes, {
            id: data.task_id,
            type: 'bashOperator',
            task_group: data.task_group,
            data: { label: data.task_id, task_group: data.task_group, bash_command: data.bash_command },
            position: { x: 0, y: 0 },
            handles: [
                { type: 'source', position: 'right', id: 'a' },
                { type: 'target', position: 'left', id: 'b' }
            ]
        }]
        )
        props.setNodes([...nodes]);
        props.setEdges([...props.edges]);
        setOpen(false)
    }
    const [open, setOpen] = useState(false);
    return (
        <Dialog open={open} onOpenChange={setOpen}>
            <DialogTrigger>
                <div className="focus:outline-none relative">
                    <BaseOperatorWithoutFlow operator="Bash Operator" Icon={SiGnubash} />
                </div>
            </DialogTrigger>
            <DialogContent >
                <div className="fixed left-0 right-0 top-1/2 transform -translate-y-1/2 p-10 z-60 w-fit mx-auto border-2 border-black rounded-sm overflow-scroll bg-white">
                    <DialogTitle>Bash Operator Forms</DialogTitle>
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
                                name="task_group"
                                render={({ field }) => (
                                    <FormItem>
                                        <FormLabel>Task Group</FormLabel>
                                        <FormControl>
                                            <Input placeholder="task_group" {...field} />
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
                                name="bash_command"
                                render={({ field }) => (
                                    <FormItem>
                                        <FormLabel>Bash Executable</FormLabel>
                                        <CodeEditor defaultValue={default_code} onChange={captureFunction} mode="sh" />
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