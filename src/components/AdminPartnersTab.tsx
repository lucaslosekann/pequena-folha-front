import { createColumnHelper, getCoreRowModel, getPaginationRowModel, useReactTable } from "@tanstack/react-table";
import Table from "./Table";
import { createPartner, deletePartner, getPartnerImageUrl, getPartners, Partner, updatePartner } from "../services/api";
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
const columnHelper = createColumnHelper<Partner>();

export default function AdminPartnersTab() {
    const [data, setData] = useState<Partner[]>(() => []);
    const [loading, setLoading] = useState(false);

    const reload = useCallback(() => {
        setLoading(true);
        getPartners()
            .then((response) => {
                setData(response);
            })
            .finally(() => {
                setLoading(false);
            });
    }, []);

    const columns = useMemo(() => {
        return [
            columnHelper.accessor("id", {
                header: () => "ID",
            }),
            columnHelper.accessor("name", {
                header: () => "Nome",
            }),
            columnHelper.accessor("description", {
                header: () => "Descrição",
            }),
            columnHelper.display({
                id: "image",
                header: () => "Imagem",
                cell: (cell) => {
                    return (
                        <div className="py-1">
                            <a
                                className="rounded bg-blue-500 px-4 py-2 text-white"
                                target="_blank"
                                href={getPartnerImageUrl(cell.row.original.id)}
                            >
                                Ver
                            </a>
                        </div>
                    );
                },
            }),
            columnHelper.display({
                id: "actions",
                header: () => "Ações",
                cell: (cell) => {
                    const [showForm, setShowForm] = useState(false);
                    return (
                        <div className="py-1">
                            <Dialog open={showForm} onOpenChange={setShowForm}>
                                <DialogTrigger className="ml-2 rounded bg-own-green px-4 py-2 text-white">Editar</DialogTrigger>
                                <DialogContent>
                                    <DialogHeader>
                                        <DialogTitle>Editar parceiro</DialogTitle>
                                        <UpsertPartenerForm
                                            partner={cell.row.original}
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
                            <AlertDialog>
                                <AlertDialogTrigger className="ml-2 rounded bg-red-500 px-4 py-2 text-white">Excluir</AlertDialogTrigger>
                                <AlertDialogContent>
                                    <AlertDialogHeader>
                                        <AlertDialogTitle>Você tem certeza absoluta?</AlertDialogTitle>
                                        <AlertDialogDescription>Esta ação é irreversível.</AlertDialogDescription>
                                    </AlertDialogHeader>
                                    <AlertDialogFooter>
                                        <AlertDialogCancel>Cancelar</AlertDialogCancel>
                                        <AlertDialogAction
                                            onClick={async () => {
                                                deletePartner(cell.row.original.id)
                                                    .then(() => {
                                                        toast.success("Parceiro excluído com sucesso.");
                                                        reload();
                                                    })
                                                    .catch(() => {
                                                        toast.error("Erro ao excluir parceiro.");
                                                    });
                                            }}
                                        >
                                            Excluir
                                        </AlertDialogAction>
                                    </AlertDialogFooter>
                                </AlertDialogContent>
                            </AlertDialog>
                        </div>
                    );
                },
            }),
        ];
    }, [reload]);

    useEffect(() => {
        setLoading(true);
        getPartners()
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
                    <Button>Adicionar parceiro</Button>
                </DialogTrigger>
                <DialogContent>
                    <DialogHeader>
                        <DialogTitle>Adicionar parceiro</DialogTitle>
                        <UpsertPartenerForm
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

type PartnerFormProps = {
    partner?: Partner;
    callback?: (success: boolean) => void;
};

function UpsertPartenerForm({ partner, callback }: PartnerFormProps) {
    const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        const formData = new FormData(event.currentTarget);
        const name = formData.get("name") as string;
        const description = formData.get("description") as string;
        const image = formData.get("image") as File;

        if (partner) {
            const newFormData = new FormData();
            if (name) {
                newFormData.set("name", name);
            }
            if (description) {
                newFormData.set("description", description);
            }
            if (image?.size > 0) {
                newFormData.set("image", image);
            }
            await updatePartner(newFormData, partner.id)
                .then(() => {
                    toast.success("Parceiro adicionado com sucesso.");
                    callback?.(true);
                })
                .catch((e) => {
                    console.log(e);
                    toast.error("Erro ao adicionar parceiro.");
                    callback?.(false);
                });
        } else {
            await createPartner(formData)
                .then(() => {
                    toast.success("Parceiro adicionado com sucesso.");
                    callback?.(true);
                })
                .catch((e) => {
                    console.log(e);
                    toast.error("Erro ao adicionar parceiro.");
                    callback?.(false);
                });
        }
    };

    return (
        <form className="flex flex-col gap-3" onSubmit={handleSubmit}>
            <TextInput
                required={!partner}
                label="Nome"
                placeholder="Nome"
                type="text"
                name="name"
                containerClassName="text-left mt-4"
                labelClassName="text-black"
                inputClassName="border-black text-black"
                defaultValue={partner?.name}
            />
            <TextInput
                required={!partner}
                label="Descrição"
                placeholder="Descrição"
                type="text"
                name="description"
                containerClassName="text-left mt-4"
                labelClassName="text-black"
                inputClassName="border-black text-black"
                defaultValue={partner?.description}
            />
            <input required={!partner} type="file" name="image" accept="image/*" className="border-black text-black" />
            <button className="rounded bg-blue-500 px-4 py-2 text-white" type="submit">
                {partner ? "Atualizar" : "Adicionar"}
            </button>
        </form>
    );
}
