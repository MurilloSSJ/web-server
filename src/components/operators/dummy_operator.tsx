import { FaWineGlassEmpty } from "react-icons/fa6";
import { BaseOperator, BaseOperatorWithoutFlow, BaseOperatorOnlyFlowProps, BaseOperatorWithoutFlowProps } from "./base_operator"
import { useForm } from "react-hook-form";
import { z } from "zod";
import { baseOperatorSchema } from "../../schemas/base_operator";
import { zodResolver } from "@hookform/resolvers/zod";
import { getLayoutedElements } from "../../dagree";
import { useState } from "react";
import { Dialog, DialogContent, DialogTitle, DialogTrigger } from "@radix-ui/react-dialog";
import { Form, FormControl, FormDescription, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";


export const EmptyOperator = (props: BaseOperatorOnlyFlowProps) => {
    return (
        <BaseOperator operator="Empty Operator" Icon={FaWineGlassEmpty} id={props.id} position={props.position} data={props.data} />
    )
}

export const EmptyOperatorWithoutFlow = (props: BaseOperatorWithoutFlowProps) => {
    const operatorForm = useForm<z.infer<typeof baseOperatorSchema>>({
        resolver: zodResolver(baseOperatorSchema),
    })
    const onSubmit = (data: z.infer<typeof baseOperatorSchema>) => {
        const taskNode = {
            id: data.task_id,
            type: 'emptyOperator',
            data: { label: data.task_id, task_group: data.node_group },
            position: { x: 50, y: 50 },  // Ajuste a posição para dentro do nodeGroup
            handles: [
                { type: 'source', position: 'right', id: 'a' },
                { type: 'target', position: 'left', id: 'b' }
            ],
        };
        props.setNodes([...props.nodes, taskNode]);
        setOpen(false)
    }
    const [open, setOpen] = useState(false);
    return (
        <Dialog open={open} onOpenChange={setOpen}>
            <DialogTrigger>
                <div className="focus:outline-none relative">
                    <BaseOperatorWithoutFlow operator="Empty Operator" Icon={FaWineGlassEmpty} />
                </div>
            </DialogTrigger>
            <DialogContent >
                <DialogTitle>Empty Operator Forms</DialogTitle>
                <div className="fixed left-0 right-0 top-1/2 transform -translate-y-1/2 p-10 z-50 w-fit mx-auto border-2 border-black rounded-sm overflow-scroll bg-white">
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
                                name="node_group"
                                render={({ field }) => (
                                    <FormItem>
                                        <FormLabel>Task Group</FormLabel>
                                        <FormControl>
                                            <Input placeholder="task_id" {...field} />
                                        </FormControl>
                                        <FormDescription>
                                            This is name of Task Group (Optional).
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