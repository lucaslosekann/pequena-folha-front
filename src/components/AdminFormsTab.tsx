import { createColumnHelper, getCoreRowModel, getPaginationRowModel, useReactTable } from "@tanstack/react-table";
import Table from "./Table";
import {
    Agenda,
    createAgenda,
    deleteAgenda,
    getAgenda,
    getAgendaImageUrl,
    getFormImageUrl,
    getForms,
    SubmitedForm,
    updatePreviousEvent,
} from "../services/api";
import { useCallback, useEffect, useMemo, useState } from "react";
import {
    AlertDialog,
    AlertDialogAction,
    AlertDialogCancel,
    AlertDialogContent,
    AlertDialogDescription,
    AlertDialogFooter,
    AlertDialogHeader,
    AlertDialogTitle,
    AlertDialogTrigger,
} from "@/components/ui/alert-dialog";
import { toast } from "react-toastify";
import TextInput from "./TextInput";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import Button from "./Button";
import { DateTimePicker } from "./DateTimePicker";
import { isBefore } from "date-fns";
import { ptBR } from "date-fns/locale";
import ReactQuill from "react-quill";
import { Image, X } from "lucide-react";
import { v4 } from "uuid";

const columnHelper = createColumnHelper<SubmitedForm>();

export default function AdminFormsTab() {
    const [data, setData] = useState<SubmitedForm[]>(() => []);
    const [loading, setLoading] = useState(false);

    const reload = useCallback(() => {
        setLoading(true);
        getForms()
            .then((response) => {
                setData(response);
            })
            .finally(() => {
                setLoading(false);
            });
    }, []);

    const columns = useMemo(() => {
        return [
            // export type SubmitedForm = {
            //     id: number;
            //     userId: number;
            //     date: string;
            //     inorganicVolume: number;
            //     inorganicWeight: number;
            //     inorganicDescriptionOther: any;
            //     organicVolume: number;
            //     organicWeight: number;
            //     organicDescriptionOther: any;
            //     wastes: string;
            //     wastesVolume: number;
            //     createdAt: string;
            //     updatedAt: string;
            //     inorganicDescription: {
            //         id: number;
            //         text: string;
            //         formId: number;
            //     }[];
            //     organicDescription: {
            //         id: number;
            //         text: string;
            //         formId: number;
            //     }[];
            //     residueComposition: {
            //         id: number;
            //         type: string;
            //     }[];
            //     User: {
            //         name: string;
            //     };
            // };

            columnHelper.accessor("id", {
                header: () => "ID",
            }),
            columnHelper.accessor("userId", {
                header: () => "Usuário",
                cell: ({ row }) => {
                    return row.original.User.name;
                },
            }),
            columnHelper.accessor("date", {
                header: () => "Data de coleta",
                cell: ({ row }) => {
                    return new Date(row.original.date).toLocaleDateString("pt-BR");
                },
            }),
            columnHelper.display({
                id: "actions",
                header: () => "Ações",
                cell: ({ row }) => {
                    return <DisplayFormData form={row.original} />;
                },
            }),
        ];
    }, []);

    useEffect(() => {
        setLoading(true);
        getForms()
            .then((response) => {
                setData(response);
            })
            .finally(() => {
                setLoading(false);
            });
    }, []);

    const table = useReactTable({
        data,
        columns,
        getCoreRowModel: getCoreRowModel(),
        getPaginationRowModel: getPaginationRowModel(),
        initialState: {
            pagination: {
                pageSize: 5,
            },
        },
    });

    return (
        <div className="flex flex-1 flex-col gap-4">
            <Table table={table} paginated reload={reload} loading={loading} />
        </div>
    );
}

type FormProps = {
    form: SubmitedForm;
};

function DisplayFormData({ form }: FormProps) {
    return (
        <div>
            <Dialog>
                <DialogTrigger className="ml-2 rounded bg-own-green px-4 py-2 text-white">Vizualizar</DialogTrigger>
                <DialogContent className="max-h-[70vh] min-w-[50vw] overflow-auto">
                    <div className="flex w-full flex-col gap-6">
                        <div className="flex flex-1 flex-row gap-6 text-lg">
                            <div className="flex flex-col gap-1">
                                <h2 className="font-semibold uppercase tracking-wide text-own-green">Inorgânico</h2>
                                <p className="relative">
                                    Volume:
                                    <span className="absolute left-24 font-semibold">{form.inorganicVolume}</span>
                                </p>
                                <p className="relative">
                                    Peso:
                                    <span className="absolute left-24 font-semibold">{form.inorganicWeight} g</span>
                                </p>
                                <p className="relative">
                                    Descrição:
                                    <span className="absolute left-24 font-semibold">
                                        {form.inorganicDescription
                                            .map((desc) => desc.text)
                                            .concat(capitalizeFirstLetter(form.inorganicDescriptionOther))
                                            .filter((desc) => desc && desc != "outro")
                                            .join(", ")}
                                    </span>
                                </p>
                                {/* fotos do inorganico */}
                                <h3 className="font-medium">Fotos:</h3>
                                <div className="grid grid-cols-5 gap-3">
                                    {form.residueComposition
                                        .filter((comp) => comp.type === "INORGANIC")
                                        .map((comp) => (
                                            <img
                                                key={comp.id}
                                                className="ospanject-cover w-full cursor-pointer rounded-md"
                                                src={getFormImageUrl(comp.id)}
                                                onClick={() => window.open(getFormImageUrl(comp.id), "_spanlank")}
                                            />
                                        ))}
                                </div>
                            </div>

                            <div className="flex flex-col gap-1">
                                <h2 className="font-semibold uppercase tracking-wide text-own-green">Orgânico</h2>
                                <p className="relative">
                                    Volume:
                                    <span className="absolute left-24 font-semibold">{form.organicVolume}</span>
                                </p>
                                <p className="relative">
                                    Peso:
                                    <span className="absolute left-24 font-semibold">{form.organicWeight} g</span>
                                </p>
                                <p className="relative">
                                    Descrição:
                                    <span className="absolute left-24 font-semibold">
                                        {form.organicDescription
                                            .map((desc) => capitalizeFirstLetter(desc.text))
                                            .concat(capitalizeFirstLetter(form.organicDescriptionOther))
                                            .filter((desc) => desc && desc != "outro")
                                            .join(", ")}
                                    </span>
                                </p>
                                {/* fotos do organico */}
                                <h3 className="font-medium">Fotos:</h3>
                                <div className="grid grid-cols-5 gap-3">
                                    {form.residueComposition
                                        .filter((comp) => comp.type === "ORGANIC")
                                        .map((comp) => (
                                            <img
                                                key={comp.id}
                                                className="w-full cursor-pointer rounded-md object-cover"
                                                src={getFormImageUrl(comp.id)}
                                                onClick={() => window.open(getFormImageUrl(comp.id), "_blank")}
                                            />
                                        ))}
                                </div>
                            </div>
                        </div>
                        <div className="flex flex-1 flex-col gap-1">
                            <h2 className="font-semibold uppercase tracking-wide text-own-green">Resíduos</h2>
                            <p className="relative">
                                Tipo:
                                <span className="absolute left-24 font-semibold">{form.wastes}</span>
                            </p>
                            <p className="relative">
                                Volume:
                                <span className="absolute left-24 font-semibold">{form.wastesVolume}</span>
                            </p>
                        </div>
                    </div>
                </DialogContent>
            </Dialog>
        </div>
    );
}

function capitalizeFirstLetter(string?: string) {
    return string ? string.charAt(0).toUpperCase() + string.slice(1) : "";
}
