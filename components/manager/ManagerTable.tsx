"use client"

import {
    ColumnDef,
    ColumnFiltersState,
    SortingState,
    flexRender,
    getPaginationRowModel,
    getCoreRowModel,
    getFilteredRowModel,
    getSortedRowModel,
    useReactTable,
} from "@tanstack/react-table"
import {
    Table,
    TableBody,
    TableCell,
    TableHead,
    TableHeader,
    TableRow,
} from "@/components/ui/table"
import { Input } from "@/components/ui/input"
import { Board } from "./ManagerTable.types"
import { useState } from "react"

type ManagerTableProps<TData, TValue> = {
    columns: ColumnDef<Board, TValue>[]
    data: Board[],
}

export default function ManagerTable<TData, TValue>({ columns, data }: ManagerTableProps<TData, TValue>) {
    const [sorting, setSorting] = useState<SortingState>([])
    const [columnFilters, setColumnFilters] = useState<ColumnFiltersState>(
        []
    )
    const table = useReactTable({
        data,
        columns,
        getCoreRowModel: getCoreRowModel(),
        onSortingChange: setSorting,
        getSortedRowModel: getSortedRowModel(),
        onColumnFiltersChange: setColumnFilters,
        getFilteredRowModel: getFilteredRowModel(),
        state: {
            sorting,
            columnFilters,
        }
    })

    return (
        <div className="md:max-w-screen md:w-auto w-screen">
            <h2 className="font-bold text-2xl md:mx-auto mx-8 text-center mb-4">Gestor de incidencias</h2>
            <div className="flex items-center justify-between py-4">
                <div></div>
                <Input
                    placeholder="Filtrar por nombre..."
                    value={(table.getColumn("name")?.getFilterValue() as string) ?? ""}
                    onChange={(event) =>
                        table.getColumn("name")?.setFilterValue(event.target.value)
                    }
                    className="md:max-w-sm w-[90%] md:mx-0 mx-4"
                />

            </div>
            <Table className="mb-8">

                <TableHeader>
                    {table.getHeaderGroups().map((headerGroup) => (
                        <TableRow key={headerGroup.id}>
                            {headerGroup.headers.map((header) => {
                                return (
                                    <TableHead key={header.id}>
                                        {header.isPlaceholder
                                            ? null
                                            : flexRender(
                                                header.column.columnDef.header,
                                                header.getContext()
                                            )}
                                    </TableHead>
                                )
                            })}
                        </TableRow>
                    ))}
                </TableHeader>
                <TableBody>
                    {table.getRowModel().rows?.length ? (
                        table.getRowModel().rows.map((row) => (
                            <TableRow
                                key={row.id}
                                data-state={row.getIsSelected() && "selected"}
                            >
                                {row.getVisibleCells().map((cell) => (
                                    <TableCell key={cell.id}>
                                        {flexRender(cell.column.columnDef.cell, cell.getContext())}
                                    </TableCell>
                                ))}
                            </TableRow>
                        ))
                    ) : (
                        <TableRow>
                            <TableCell colSpan={columns.length} className="h-24 text-center">
                                No hay resultados.
                            </TableCell>
                        </TableRow>
                    )}
                </TableBody>
            </Table>

        </div>


    )
}
