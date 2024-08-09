"use client"

import { ColumnDef } from "@tanstack/react-table"
import { Board } from "./ManagerTable.types"
import { DONE_LIST_ID, PENDING_LIST_ID } from "@/data/trelloKeys"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import Link from "next/link"
import { fetchListChange } from "./ListChange"
import { Pencil2Icon, UpdateIcon, CaretSortIcon } from "@radix-ui/react-icons"
import { cn } from "@/lib/utils"


export const columns: ColumnDef<Board>[] = [
    {
        accessorKey: "idShort",
        header: ({ column }) => {
            return (
                <Button
                    variant="ghost"
                    onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
                >
                    ID
                    <CaretSortIcon className="ml-2 h-4 w-4" />
                </Button>
            )
        },
    },
    {
        accessorKey: "dateLastActivity",
        header: ({ column }) => {
            return (
                <Button
                    variant="ghost"
                    onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
                >
                    Fecha
                    <CaretSortIcon className="ml-2 h-4 w-4" />
                </Button>
            )
        },
        cell: ({ row }) => {
            const date = new Date(row.getValue("dateLastActivity"))
            const formatted = new Intl.DateTimeFormat("es-ES", { formatMatcher: "best fit" }).format(date)

            return <div className="font-medium">{formatted}</div>
        },
    },
    {
        accessorKey: "name",
        header: ({ column }) => {
            return (
                <Button
                    variant="ghost"
                    onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
                >
                    Nombre
                    <CaretSortIcon className="ml-2 h-4 w-4" />
                </Button>
            )
        },
    },
    {
        accessorKey: "labels",
        header: "Prioridad",
        cell: ({ row }) => <Badge className={cn(
            `${row.original.labels[0].color === "orange" ? "bg-orange-500 hover:bg-orange-300" : ""} text-black`,
            `${row.original.labels[0].color === "yellow" ? "bg-yellow-500 hover:bg-yellow-300" : ""} text-black`,
            `${row.original.labels[0].color === "red" ? "bg-red-500 hover:bg-red-300" : ""} text-black`,
            `${row.original.labels[0].color === "blue" ? "bg-blue-500 hover:bg-blue-300" : ""} text-black`,
        )}>
            {row.original.labels[0].name}
        </Badge>
    },
    {
        accessorKey: "idList",
        header: ({ column }) => {
            return (
                <Button
                    variant="ghost"
                    onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
                >
                    Estado
                    <CaretSortIcon className="ml-2 h-4 w-4" />
                </Button>
            )
        },
        cell: ({ row }) =>

            <div className="font-semibold">{row.getValue("idList") === DONE_LIST_ID ? "HECHO" : "PENDIENTE"}</div>
    },
    {
        accessorKey: "actions",
        header: () => <div className="w-[50px]"></div>,
        cell: ({ row }) => <div className="flex flex-col gap-2">
            <Button
                title="Cambiar estado"
                onClick={() => fetchListChange(row.original.id, row.original.idList)}
                className="bg-[#043873] hover:bg-blue-500"
            >
                <UpdateIcon />
            </Button>
            <Button
                title="Editar incidencia"
                asChild
                className="bg-[#043873] hover:bg-blue-500"
            >
                <Link href={`/issue/${row.original.id}`}>
                    <Pencil2Icon />
                </Link>
            </Button>
        </div>
    },
]
