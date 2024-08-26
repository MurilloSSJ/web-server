import { useForm } from "react-hook-form";
import { BaseOperator, BaseOperatorOnlyFlowProps, BaseOperatorWithoutFlow, BaseOperatorWithoutFlowProps } from "./base_operator"
import { TbSql } from "react-icons/tb";
import { z } from "zod";
import { sqlOperatorSchema } from "../../schemas/sql_operator";
import { zodResolver } from "@hookform/resolvers/zod";
import { getLayoutedElements } from "../../utils/dagree";
import { useState } from "react";
import { Dialog, DialogContent, DialogTitle, DialogTrigger } from "@radix-ui/react-dialog";
import { Form, FormControl, FormDescription, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { CodeEditor } from "@/components/aceEditor";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
export const SQLOperator = (props: BaseOperatorOnlyFlowProps) => {
    return (
        <BaseOperator operator="SQL Operator" Icon={TbSql} id={props.id} position={props.position} data={props.data} />
    )
}

export const SQLOperatorWithoutFlow = (props: BaseOperatorWithoutFlowProps) => {
    const operatorForm = useForm<z.infer<typeof sqlOperatorSchema>>({
        resolver: zodResolver(sqlOperatorSchema),
    })
    const default_code = `def sum():\n    return 1+1`
    const captureSQL = (value: string, event?: any) => {
        operatorForm.setValue('sql', value)
    }
    const onSubmit = (data: z.infer<typeof sqlOperatorSchema>) => {
        const nodes = ([...props.nodes, {
            id: data.task_id,
            type: 'sqlOperator',
            data: { label: data.task_id, sql: data.sql, database: data.database, conn_id: data.conn_id },
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
                    <BaseOperatorWithoutFlow operator="SQL Operator" Icon={TbSql} />
                </div>
            </DialogTrigger>
            <DialogContent >
                <div className="fixed left-0 right-0 top-1/2 transform -translate-y-1/2 p-10 z-60 w-fit mx-auto border-2 border-black rounded-sm overflow-scroll bg-white max-h-128">
                    <DialogTitle>SQLOperator Forms</DialogTitle>
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
                                name="sql"
                                render={({ field }) => (
                                    <FormItem>
                                        <FormLabel>SQL</FormLabel>
                                        <CodeEditor defaultValue="SELECT * FROM" onChange={captureSQL} mode='sql' />
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
                            <FormField
                                control={operatorForm.control}
                                name="conn_id"
                                render={({ field }) => (
                                    <FormItem>
                                        <FormLabel>Connection Id</FormLabel>
                                        <FormControl>
                                            <Input placeholder="postgresql_default" {...field} />
                                        </FormControl>
                                        <FormDescription>
                                            This is your connection for database.
                                        </FormDescription>
                                        <FormMessage />
                                    </FormItem>
                                )}
                            />
                            <FormField
                                control={operatorForm.control}
                                name="database"
                                render={({ field }) => (
                                    <FormItem>
                                        <FormLabel>Database Name</FormLabel>
                                        <FormControl>
                                            <Input placeholder="cool_database" {...field} />
                                        </FormControl>
                                        <FormDescription>
                                            This name for your database.
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