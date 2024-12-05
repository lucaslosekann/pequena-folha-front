import { createColumnHelper, getCoreRowModel, getPaginationRowModel, useReactTable } from "@tanstack/react-table";
import Table from "./Table";
import { Agenda, createAgenda, deleteAgenda, getAgenda, getAgendaImageUrl, updatePreviousEvent } from "../services/api";
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

const columnHelper = createColumnHelper<Agenda>();

export default function AdminAgendaTab() {
    const [data, setData] = useState<Agenda[]>(() => []);
    const [loading, setLoading] = useState(false);

    const reload = useCallback(() => {
        setLoading(true);
        getAgenda()
            .then((response) => {
                setData(response);
            })
            .finally(() => {
                setLoading(false);
            });
    }, []);

    const columns = useMemo(() => {
        return [
            // id: number;
            // dateTime: string;
            // place: string;
            // type: string;
            // description: string;
            // additionalText?: string;
            // eventsImages: { id: number }[];
            columnHelper.accessor("id", {
                header: () => "ID",
            }),
            columnHelper.accessor("dateTime", {
                header: () => "Data",
                cell: ({ row }) => {
                    return new Date(row.original.dateTime).toLocaleString();
                },
            }),
            columnHelper.accessor("place", {
                header: () => "Local",
            }),
            columnHelper.accessor("type", {
                header: () => "Tipo",
            }),
            columnHelper.accessor("description", {
                header: () => "Descrição",
            }),
            columnHelper.display({
                id: "actions",
                header: () => "Ações",
                cell: (cell) => {
                    const agenda = cell.row.original;
                    const [showForm, setShowForm] = useState(false);
                    return (
                        <div className="flex gap-2">
                            <Dialog open={showForm} onOpenChange={setShowForm}>
                                <DialogTrigger className="ml-2 rounded bg-own-green px-4 py-2 text-white">Editar</DialogTrigger>
                                <DialogContent className="max-h-[70vh] min-w-[50vw] overflow-auto">
                                    <DialogHeader>
                                        <DialogTitle>Editar evento</DialogTitle>
                                    </DialogHeader>
                                    <UpsertEventForm
                                        agenda={cell.row.original}
                                        callback={(success) => {
                                            if (success) {
                                                setShowForm(false);
                                                reload();
                                            }
                                        }}
                                    />
                                </DialogContent>
                            </Dialog>
                            <AlertDialog>
                                <AlertDialogTrigger className="ml-2 rounded bg-red-500 px-4 py-2 text-white">Excluir</AlertDialogTrigger>
                                <AlertDialogContent>
                                    <AlertDialogHeader>
                                        <AlertDialogTitle>Excluir evento</AlertDialogTitle>
                                    </AlertDialogHeader>
                                    <AlertDialogDescription>Tem certeza que deseja excluir o evento?</AlertDialogDescription>
                                    <AlertDialogFooter>
                                        <AlertDialogAction
                                            onClick={async () => {
                                                await deleteAgenda(agenda.id)
                                                    .then(() => {
                                                        toast.success("Evento excluído com sucesso");
                                                        reload();
                                                    })
                                                    .catch(() => {
                                                        toast.error("Erro ao excluir evento");
                                                    });
                                            }}
                                        >
                                            Excluir
                                        </AlertDialogAction>
                                        <AlertDialogCancel>Cancelar</AlertDialogCancel>
                                    </AlertDialogFooter>
                                </AlertDialogContent>
                            </AlertDialog>
                        </div>
                    );
                },
            }),
        ];
    }, []);

    useEffect(() => {
        setLoading(true);
        getAgenda()
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

    const [showForm, setShowForm] = useState(false);
    return (
        <div className="flex flex-1 flex-col gap-4">
            <Dialog open={showForm} onOpenChange={setShowForm}>
                <DialogTrigger asChild>
                    <Button>Adicionar evento</Button>
                </DialogTrigger>
                <DialogContent>
                    <DialogHeader>
                        <DialogTitle>Adicionar evento</DialogTitle>
                        <UpsertEventForm
                            callback={(success) => {
                                if (success) {
                                    setShowForm(false);
                                    reload();
                                }
                            }}
                        />
                    </DialogHeader>
                </DialogContent>
            </Dialog>
            <Table table={table} paginated reload={reload} loading={loading} />
        </div>
    );
}

type AgendaFormProps = {
    agenda?: Agenda;
    callback?: (success: boolean) => void;
};

function UpsertEventForm({ agenda, callback }: AgendaFormProps) {
    const [date, setDate] = useState<Date | undefined>(agenda ? new Date(agenda.dateTime) : undefined);
    const [additionalText, setAdditionalText] = useState(agenda?.additionalText);
    const [imagesToUpload, setImagesToUpload] = useState<
        {
            file: File;
            id: string;
        }[]
    >([]);

    const [imagesToDelete, setImagesToDelete] = useState<number[]>([]);

    const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        const formData = new FormData(event.currentTarget);

        if (agenda) {
            if (date && isBefore(date, new Date())) {
                const newFormData = new FormData();
                //append all new images
                imagesToUpload.forEach(({ file }) => {
                    newFormData.append("image", file);
                });

                newFormData.append("additionalText", additionalText || "");

                imagesToDelete.forEach((id) => {
                    newFormData.append("imagesToDelete", id.toString());
                });

                await updatePreviousEvent(newFormData, agenda.id)
                    .then(() => {
                        toast.success("Evento atualizado com sucesso");
                        callback?.(true);
                    })
                    .catch(() => {
                        toast.error("Erro ao atualizar evento");
                        callback?.(false);
                    });
            }
        } else {
            if (!date) {
                toast.error("Data e hora são obrigatórios");
                return;
            }
            formData.append("date_time", date!.toISOString());
            const data = Object.fromEntries(formData.entries());
            await createAgenda(data as any)
                .then(() => {
                    toast.success("Evento adicionado com sucesso");
                    callback?.(true);
                })
                .catch(() => {
                    toast.error("Erro ao adicionar evento");
                    callback?.(false);
                });
        }
    };

    return (
        <form className="flex flex-col gap-3" onSubmit={handleSubmit}>
            <DateTimePicker
                granularity="minute"
                locale={ptBR}
                placeholder="Escolha a data e hora"
                hourCycle={24}
                value={date}
                onChange={setDate}
                disabledDate={() => false}
            />

            <TextInput
                required
                label="Local"
                type="text"
                name="place"
                containerClassName="text-left w-full"
                labelClassName="text-black"
                inputClassName="border-black text-black"
                defaultValue={agenda?.place}
            />
            <TextInput
                required
                label="Tipo"
                placeholder="Palestra"
                type="text"
                name="type"
                containerClassName="text-left w-full"
                labelClassName="text-black"
                inputClassName="border-black text-black"
                defaultValue={agenda?.type}
            />
            <TextInput
                required
                label="Descrição"
                type="text"
                name="description"
                containerClassName="text-left w-full"
                labelClassName="text-black"
                inputClassName="border-black text-black"
                defaultValue={agenda?.description}
            />
            {agenda && isBefore(new Date(agenda.dateTime), new Date()) && (
                <ReactQuill
                    theme="snow"
                    className="mb-2"
                    value={additionalText}
                    onChange={setAdditionalText}
                    placeholder="Texto adicional"
                    modules={{
                        toolbar: [
                            [{ header: "1" }, { header: "2" }, { font: [] }],
                            [{ size: [] }],
                            ["bold", "italic", "underline", "strike", "blockquote"],

                            [{ align: [] }],
                            [{ color: [] }],
                            [{ list: "ordered" }, { list: "bullet" }],
                            ["link", "image", "video"],
                            ["clean"],
                        ],
                    }}
                />
            )}

            {!agenda && date && isBefore(date, new Date()) && (
                <p className="text-sm text-red-500">Atenção: a data escolhida é anterior à data atual</p>
            )}

            {agenda && isBefore(new Date(agenda.dateTime), new Date()) && (
                <div className="grid grid-cols-2 gap-4">
                    <div className="h-32 w-full rounded-md bg-slate-200">
                        <label
                            htmlFor="upload-photo"
                            className="flex h-full w-full cursor-pointer items-center justify-center text-center text-lg font-thin text-slate-600"
                        >
                            <Image strokeWidth={"2px"} className="mr-2 h-6 w-6" />
                            Adicionar Imagem
                        </label>
                        <input
                            type="file"
                            id="upload-photo"
                            name="image"
                            accept="image/*"
                            className="hidden"
                            multiple
                            onChange={(e) => {
                                const files = e.target.files;
                                if (files) {
                                    // console.log([...imagesToUpload, ...Array.from(files).map((file) => ({ file, id: v4() }))]);
                                    setImagesToUpload([...imagesToUpload, ...Array.from(files).map((file) => ({ file, id: v4() }))]);
                                }
                                e.target.value = "";
                            }}
                        />
                    </div>
                    {agenda?.eventsImages
                        .filter((image) => !imagesToDelete.includes(image.id))
                        .map((image) => (
                            <div className="relative">
                                <img key={image.id} src={getAgendaImageUrl(image.id)} className="h-32 w-full rounded-md object-cover" />
                                <X
                                    strokeWidth={"4px"}
                                    className="absolute right-2 top-2 cursor-pointer text-red-500"
                                    onClick={() => {
                                        setImagesToDelete((prev) => [...prev, image.id]);
                                    }}
                                />
                            </div>
                        ))}

                    {imagesToUpload.map(({ file: image, id }) => (
                        <div className="relative">
                            <img key={image.name} src={URL.createObjectURL(image)} className="h-32 w-full rounded-md object-cover" />
                            <X
                                strokeWidth={"4px"}
                                className="absolute right-2 top-2 cursor-pointer text-red-500"
                                onClick={() => {
                                    setImagesToUpload((prev) => prev.filter((file) => file.id !== id));
                                }}
                            />
                        </div>
                    ))}
                </div>
            )}
            <button className="rounded bg-blue-500 px-4 py-2 text-white" type="submit">
                {agenda ? "Atualizar" : "Adicionar"}
            </button>
        </form>
    );
}
