import { Table as TableType } from "@tanstack/react-table";
import { flexRender } from "@tanstack/react-table";
import { cn } from "../lib/utils";
import { ChevronLeft, ChevronRight } from "lucide-react";

type TableProps<T> = {
    table: TableType<T>;
    paginated?: boolean;
    reload?: () => void;
    loading?: boolean;
};

export default function Table<T>({ table, reload, paginated, loading }: TableProps<T>) {
    return (
        <div className="mb-6 flex flex-1 flex-col justify-between rounded-2xl border border-gray-300 bg-gray-200 p-4 shadow-md">
            <table className="w-full border-collapse">
                <thead>
                    {table.getHeaderGroups().map((headerGroup) => (
                        <tr key={headerGroup.id} className="rounded-xl bg-gray-300 text-gray-700">
                            {headerGroup.headers.map((header) => (
                                <th key={header.id} className="px-4 py-3 text-left text-sm font-semibold uppercase">
                                    {header.isPlaceholder ? null : flexRender(header.column.columnDef.header, header.getContext())}
                                </th>
                            ))}
                        </tr>
                    ))}
                </thead>
                <tbody>
                    {table.getRowModel().rows.map((row, rowIndex) => (
                        <tr key={row.id} className={rowIndex % 2 === 0 ? "bg-white" : "bg-gray-100"}>
                            {row.getVisibleCells().map((cell) => (
                                <td key={cell.id} className="border-2 px-2 py-2 text-sm text-gray-800">
                                    {flexRender(cell.column.columnDef.cell, cell.getContext())}
                                </td>
                            ))}
                        </tr>
                    ))}
                </tbody>
            </table>
            <div className="flex items-center justify-end">
                {reload && (
                    <div className="py-2 text-sm text-gray-800">
                        <button
                            onClick={() => {
                                reload();
                            }}
                            disabled={loading}
                            className="inline-flex rounded bg-blue-500 px-4 py-2 font-bold text-white hover:bg-blue-700"
                        >
                            {loading && (
                                <svg
                                    className="-ml-1 mr-3 h-5 w-5 animate-spin text-white"
                                    xmlns="http://www.w3.org/2000/svg"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                >
                                    <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                                    <path
                                        className="opacity-75"
                                        fill="currentColor"
                                        d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                                    ></path>
                                </svg>
                            )}
                            Recarregar
                        </button>
                    </div>
                )}
                {paginated && (
                    <div className="flex gap-2 py-2 text-sm text-gray-800">
                        <div className="flex justify-center">
                            <button
                                onClick={() => {
                                    table.previousPage();
                                }}
                                disabled={!table.getCanPreviousPage()}
                                className={cn(
                                    "px-4 py-2 font-bold text-gray-800",
                                    !table.getCanPreviousPage() && "cursor-default opacity-50",
                                )}
                            >
                                <ChevronLeft />
                            </button>
                            <button
                                onClick={() => {
                                    table.nextPage();
                                }}
                                disabled={!table.getCanNextPage()}
                                className={cn("px-4 py-2 font-bold text-gray-800", !table.getCanNextPage() && "cursor-default opacity-50")}
                            >
                                <ChevronRight />
                            </button>
                        </div>
                        <div className="flex items-center gap-1">
                            <div>Página</div>
                            <strong>
                                {table.getState().pagination.pageIndex + 1} de {table.getPageCount().toLocaleString()}
                            </strong>
                        </div>
                        <select
                            className="rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-gray-900"
                            value={table.getState().pagination.pageSize}
                            onChange={(e) => {
                                table.setPageSize(Number(e.target.value));
                            }}
                        >
                            {[5, 10, 20, 30, 40, 50].map((pageSize) => (
                                <option key={pageSize} value={pageSize}>
                                    Mostrar {pageSize}
                                </option>
                            ))}
                        </select>
                    </div>
                )}
            </div>
        </div>
    );
}
