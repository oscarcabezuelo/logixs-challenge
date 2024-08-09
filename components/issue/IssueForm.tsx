"use client"

import { z } from "zod"
import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import { useRouter } from "next/navigation"
import {
    Form,
    FormControl,
    FormDescription,
    FormField,
    FormItem,
    FormLabel,
    FormMessage,
} from "@/components/ui/form"
import { Input } from "@/components/ui/input"
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select"
import { Button } from "@/components/ui/button"
import { cn } from "@/lib/utils"
import { API_KEY, PENDING_LIST_ID, TOKEN } from "@/data/trelloKeys"
import { useToast } from "../ui/use-toast"


const formSchema = z.object({
    title: z.string().min(5).max(50),
    desc: z.string().max(200),
    priority: z.string()
})

// TODO: Campos necesarios del formulario: Título, Descripción y Prioridad (select)

type dataProps = {
    data?: {
        id: string,
        title: string,
        desc: string,
        priority?: string
    },
    labels: [{
        id: string,
        idBoard: string,
        name: string,
        color: string,
        uses: number
    }]
}

export default function IssueForm({ data, labels }: dataProps) {

    const router = useRouter()
    const { toast } = useToast()
    const form = useForm<z.infer<typeof formSchema>>({
        resolver: zodResolver(formSchema),
        defaultValues: {
            title: data?.title,
            desc: data?.desc,
            priority: data?.priority
        }
    })

    function handleSubmit(values: z.infer<typeof formSchema>) {
        if (data) {
            if (values.title === data.title && values.desc === data.desc && values.priority === data.priority) {
                return toast({
                    title: "¡No puedes dejar una incidencia igual!",
                    description: "Tienes que cambiar al menos un valor de la incidencia para poder editarla."
                })
            }
            const url = `https://api.trello.com/1/cards/${data.id}?name=${values.title}&desc=${values.desc}&idLabels=${[values.priority]}&key=${API_KEY}&token=${TOKEN}`
            return fetch(
                url,
                {
                    method: 'PUT',
                    headers: {
                        'Accept': 'application/json'
                    },
                    cache: "no-cache"
                }
            ).then(res => {
                toast({
                    title: "¡Incidencia editada correctamente!",
                    description: "¡Buenas noticias! Se ha editado correctamente la incidencia."
                })
                router.push("/manager")
            }).catch(err => toast({
                variant: "destructive",
                title: "Houston, tenemos un problema.",
                description: "Ha habido un error al crear la incidencia. Por favor, habla con el equipo para solucionarlo."
            }))
        } else {
            const url = `https://api.trello.com/1/cards?idList=${PENDING_LIST_ID}&name=${values.title}&desc=${values.desc}&idLabels=${[values.priority]}&key=${API_KEY}&token=${TOKEN}`
            return fetch(
                url,
                {
                    method: 'POST',
                    headers: {
                        'Accept': 'application/json'
                    }
                }
            ).then(res => {
                toast({
                    title: "Incidencia creada.",
                    description: "¡Buenas noticias! Se ha creado correctamente la incidencia."
                })
                router.push("/manager")
            }).catch(err => toast({
                variant: "destructive",
                title: "Houston, tenemos un problema.",
                description: "Ha habido un error al crear la incidencia. Por favor, habla con el equipo para solucionarlo."
            }))

        }
    }

    return (
        <div>
            <h2 className="font-bold text-2xl md:mx-auto mx-8 text-center mb-4">Formulario de incidencias</h2>
            <Form {...form}>
                <form onSubmit={form.handleSubmit(handleSubmit)} className="space-y-8 md:w-1/3 w-full md:mx-0 mx-8">
                    <FormField
                        control={form.control}
                        name="title"
                        render={({ field }) => (
                            <FormItem>
                                <FormLabel className="font-bold">Título de la incidencia</FormLabel>
                                <FormControl>
                                    <Input placeholder="Título" {...field} />
                                </FormControl>
                                <FormDescription>

                                </FormDescription>
                                <FormMessage />
                            </FormItem>
                        )}
                    />
                    <FormField
                        control={form.control}
                        name="desc"
                        render={({ field }) => (
                            <FormItem>
                                <FormLabel className="font-bold">Descripción</FormLabel>
                                <FormControl>
                                    <Input placeholder="Descripción" {...field} />
                                </FormControl>
                                <FormDescription>

                                </FormDescription>
                                <FormMessage />
                            </FormItem>
                        )}
                    />
                    <FormField
                        control={form.control}
                        name="priority"
                        render={({ field }) => (
                            <FormItem>
                                <FormLabel className="font-bold">Prioridad</FormLabel>
                                <Select onValueChange={field.onChange} defaultValue={field.value}>
                                    <FormControl>
                                        <SelectTrigger>
                                            <SelectValue placeholder="Selecciona una prioridad" />
                                        </SelectTrigger>
                                    </FormControl>
                                    <SelectContent >
                                        {labels.map(label => (
                                            label.name !== "" ? <SelectItem key={label.id} className={cn(
                                                `${label.color === "orange" ? "text-orange-300 focus:text-orange-500 focus:font-bold" : ""}`,
                                                `${label.color === "yellow" ? "text-yellow-300 focus:text-yellow-500 focus:font-bold" : ""}`,
                                                `${label.color === "red" ? "text-red-300 focus:text-red-500 focus:font-bold" : ""}`,
                                                `${label.color === "blue" ? "text-blue-300 focus:text-blue-500 focus:font-bold" : ""}`,
                                            )} value={label.id}>{label.name}</SelectItem> : null
                                        ))}

                                    </SelectContent>
                                </Select>
                                <FormDescription>

                                </FormDescription>
                                <FormMessage />
                            </FormItem>
                        )}
                    />
                    <Button className="bg-[#043873] hover:bg-blue-500" type="submit">{data ? "Editar" : "Crear"} incidencia</Button>
                </form>
            </Form>
        </div>

    )
}
