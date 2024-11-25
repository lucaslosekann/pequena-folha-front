import { createColumnHelper, getCoreRowModel, getPaginationRowModel, useReactTable } from "@tanstack/react-table";
import Table from "./Table";
import { activateUser, changePassword, deactivateUser, getUsers, Registration } from "../services/api";
import { useCallback, useEffect, useMemo, useState } from "react";

import { toast } from "react-toastify";
import TextInput from "./TextInput";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { cn, getFirstErrorMessage } from "../lib/utils";
const columnHelper = createColumnHelper<Registration>();

export default function AdminRegistrationsTab() {
    const [data, setData] = useState<Registration[]>(() => []);
    const [loading, setLoading] = useState(false);

    const reload = useCallback(() => {
        setLoading(true);
        getUsers()
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
            columnHelper.accessor("email", {
                header: () => "Email",
            }),
            columnHelper.accessor("phone", {
                header: () => "Telefone",
            }),
            columnHelper.accessor("address", {
                header: () => "Endereço",
            }),
            columnHelper.accessor("houseResidents", {
                header: () => "Residentes",
            }),
            columnHelper.accessor("addressDetails", {
                header: () => "Detalhes",
            }),
            columnHelper.accessor("active", {
                header: () => "Ativo",
                cell: (cell) => {
                    return cell.getValue() ? "Sim" : "Não";
                },
            }),
            columnHelper.accessor("hasPassword", {
                header: () => "Tem senha",
                cell: (cell) => {
                    return cell.getValue() ? "Sim" : "Não";
                },
            }),
            columnHelper.accessor("createdAt", {
                header: () => "Criado em",
                cell: (cell) => {
                    return new Date(cell.getValue()).toLocaleDateString();
                },
            }),
            columnHelper.accessor("updatedAt", {
                header: () => "Atualizado em",
                cell: (cell) => {
                    return new Date(cell.getValue()).toLocaleDateString();
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
                                        <DialogTitle>Editar Usuário</DialogTitle>
                                        <UpsertRegistrationForm
                                            registration={cell.row.original}
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
                        </div>
                    );
                },
            }),
        ];
    }, [reload]);

    useEffect(() => {
        setLoading(true);
        getUsers()
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

type RegistrationFormProps = {
    registration: Registration;
    callback?: (success: boolean) => void;
};

function UpsertRegistrationForm({ registration, callback }: RegistrationFormProps) {
    const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        const formData = new FormData(event.currentTarget);

        const password = formData.get("password") as string;

        changePassword(
            {
                password,
            },
            registration.id,
        )
            .then(() => {
                toast.success("Senha alterada com sucesso.");
                callback?.(true);
            })
            .catch((e) => {
                toast.error(getFirstErrorMessage(e, "Erro ao alterar senha."));
                callback?.(false);
            });
    };

    return (
        <div className="flex flex-col gap-2">
            <form className="flex flex-col gap-3" onSubmit={handleSubmit}>
                <TextInput
                    required={true}
                    label="Senha"
                    placeholder="Senha"
                    type="password"
                    name="password"
                    containerClassName="text-left mt-4"
                    labelClassName="text-black"
                    inputClassName="border-black text-black"
                />
                <button className="rounded bg-blue-500 px-4 py-2 text-white" type="submit">
                    Trocar senha {!registration.active && "(o usuário será ativado automaticamente)"}
                </button>
            </form>
            <div className="h-0.5 rounded-full bg-own-brown" />
            <button
                className={cn("rounded px-4 py-2 text-white", registration.active ? "bg-red-500" : "bg-green-500")}
                onClick={() => {
                    if (registration.active) {
                        deactivateUser(registration.id)
                            .then(() => {
                                toast.success("Usuário desativado com sucesso.");
                                callback?.(true);
                            })
                            .catch((e) => {
                                toast.error(e?.response?.data?.message || "Erro ao desativar usuário.");
                                callback?.(false);
                            });
                    } else {
                        activateUser(registration.id)
                            .then(() => {
                                toast.success("Usuário ativado com sucesso.");
                                callback?.(true);
                            })
                            .catch((e) => {
                                toast.error(e?.response?.data?.message || "Erro ao ativar usuário.");
                                callback?.(false);
                            });
                    }
                }}
            >
                {registration.active ? "Desativar" : "Ativar"}
            </button>
        </div>
    );
}
