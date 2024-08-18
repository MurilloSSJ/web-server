import { Form, FormField, FormControl, FormDescription, FormItem, FormLabel, FormMessage } from "@/components/ui/form"
import { Input } from "@/components/ui/input"
import { dagFormSchema } from "../schemas/dag_form"
import { Button } from "@/components/ui/button"
import { useForm } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"
import { z } from "zod"
export const FormNewDag = () => {
    const dagForm = useForm<z.infer<typeof dagFormSchema>>({
        resolver: zodResolver(dagFormSchema),
      })
    const onSubmit = (data: z.infer<typeof dagFormSchema>) => {
        console.log(data)
    }
    return (
    <Form {...dagForm}>
      <form onSubmit={dagForm.handleSubmit(onSubmit)} className="space-y-8">
        <FormField
          control={dagForm.control}
          name="dag_name"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Dag Name</FormLabel>
              <FormControl>
                <Input placeholder="shadcn" {...field} />
              </FormControl>
              <FormDescription>
                This is your public display name.
              </FormDescription>
              <FormMessage />
            </FormItem>
          )}
        />
        <Button type="submit">Submit</Button>
      </form>
    </Form>
    )
}