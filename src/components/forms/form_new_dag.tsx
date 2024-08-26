import { Form, FormField, FormControl, FormDescription, FormItem, FormLabel, FormMessage } from "@/components/ui/form"
import { Input } from "@/components/ui/input"
import { format } from "date-fns"
import { dagFormSchema } from "../../schemas/dag_form"
import { Button } from "@/components/ui/button"
import { useForm } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"
import { z } from "zod"
import { Popover } from "@/components/ui/popover"
import { PopoverContent, PopoverTrigger } from "@radix-ui/react-popover"
import { CalendarIcon } from "lucide-react"
import { cn } from "@/lib/utils"
import { Calendar } from "@/components/ui/calendar"

type DagForm = {
  onSubmit: (data: z.infer<typeof dagFormSchema>) => void
}

export const FormNewDag = (props: DagForm) => {
  const dagForm = useForm<z.infer<typeof dagFormSchema>>({
    resolver: zodResolver(dagFormSchema),
  })
  const onSubmit = (data: z.infer<typeof dagFormSchema>) => {
    console.log(data)
  }
  return (
    <Form {...dagForm}>
      <form onSubmit={dagForm.handleSubmit(props.onSubmit)} className="space-y-8">
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
        <FormField
          control={dagForm.control}
          name="scheduler_interval"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Dag Name</FormLabel>
              <FormControl>
                <Input placeholder="* * * * *" {...field} />
              </FormControl>
              <FormDescription>
                This is your public display name.
              </FormDescription>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={dagForm.control}
          name="start_date"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Dag Name</FormLabel>
              <Popover>
                <PopoverTrigger asChild>
                  <FormControl>
                    <Button
                      variant={"outline"}
                      className={cn(
                        "w-full justify-start text-left font-normal",
                        !field.value && "text-muted-foreground",
                      )}
                    >
                      {field.value ? (
                        format(field.value, "PPP")
                      ) : (
                        <span>Pick a date</span>
                      )}
                      <CalendarIcon className="ml-auto h-4 w-4 opacity-50" />
                    </Button>
                  </FormControl>
                </PopoverTrigger>
                <PopoverContent className="w-auto p-0" align="start">
                  <Calendar
                    mode="single"
                    selected={field.value}
                    onSelect={field.onChange}
                    disabled={(date) =>
                      date > new Date() || date < new Date("1900-01-01")
                    }
                    className="bg-slate-50"
                    initialFocus
                  />
                </PopoverContent>
              </Popover>
              <FormDescription>
                This is your public display name.
              </FormDescription>
              <FormMessage />
            </FormItem>
          )} />
        <Button type="submit">Submit</Button>
      </form>
    </Form>
  )
}