import Wrapper from "../components/Wrapper";
import React, { useState } from "react";
import TextInput from "../components/TextInput";
import Button from "../components/Button";
import lixoSeco from "../assets/LIXOSECO.jpg";
import MultiSelect from "../components/MultiSelect";
import lixoOrganico from "../assets/lixo_organico.jpg";
import { toast } from "react-toastify";
import { submitForm } from "../services/api";
import { useAuth } from "../contexts/AuthContext";

const Form = () => {
    const [inorganicVolume, setInorganicVolume] = useState("");
    const [organicVolume, setOrganicVolume] = useState("");
    const [inorganicDescription, setInorganicDescription] = useState<string[]>([]);
    const [organicDescription, setOrganicDescription] = useState<string[]>([]);
    const { user, logout } = useAuth();

    const handleForm = (e: React.FormEvent) => {
        e.preventDefault();
        const formData = new FormData(e.target as HTMLFormElement);
        if (inorganicDescription.length == 0) {
            return toast.error("Descrição do material inorganico não pode ser vazia");
        }

        if (organicDescription.length == 0) {
            return toast.error("Descrição do material organico não pode ser vazia");
        }

        if (formData.getAll("organicResidueComposition").length > 5) {
            return toast.error("O número máximo de fotos é 5");
        }

        if (formData.getAll("inorganicResidueComposition").length > 5) {
            return toast.error("O número máximo de fotos é 5");
        }

        for (const desc of inorganicDescription) {
            formData.append("inorganicDescription[]", desc);
        }

        for (const desc of organicDescription) {
            formData.append("organicDescription[]", desc);
        }

        submitForm(formData)
            .then(() => {
                toast.success("Formulário enviado com sucesso");
                (e.target as HTMLFormElement).reset();
                setInorganicDescription([]);
                setOrganicDescription([]);
            })
            .catch((er) => {
                console.error(er);
                toast.error("Erro ao enviar formulário");
            });
    };

    return (
        <div className="bg-[rgb(240,236,220)]">
            <Wrapper className="my-3 flex w-[95%] flex-col gap-8 rounded-md bg-white px-1 sm:max-w-[620px] sm:px-4">
                <div>
                    <div className="mb-10">
                        <h2 className="text-own-black mb-2 mt-5 flex justify-center text-center text-2xl font-semibold sm:text-3xl">
                            Formulário de Compostagem Caseira
                        </h2>
                        <p className="px-4">
                            Logado como: <strong>{user?.name}</strong>, para trocar de conta{" "}
                            <span className="cursor-pointer text-blue-500" onClick={logout}>
                                clique aqui
                            </span>
                        </p>
                    </div>

                    <form onSubmit={handleForm} className="flex flex-col justify-center gap-8 px-4">
                        <div className="flex flex-col justify-center gap-8">
                            <TextInput
                                required
                                label="Data"
                                placeholder="mm/dd/aa"
                                type="date"
                                name="date"
                                containerClassName="text-left w-full"
                                labelClassName="text-black"
                                inputClassName="border-black text-black"
                            />
                        </div>

                        <div className="flex flex-col gap-6">
                            <div>
                                <h3 className="mb-2 flex justify-center text-left text-2xl">Lixo Seco - Inorgânico - Recicláveis</h3>
                                <img src={lixoSeco} className="mx-auto w-[90%] rounded-md" />
                            </div>

                            <div className="text-left">
                                <label htmlFor="volume" className="text-lg">
                                    1 - Volume total estimado (em litros):
                                </label>

                                <select
                                    id="volume"
                                    value={inorganicVolume}
                                    onChange={(e) => setInorganicVolume(e.target.value)}
                                    name="inorganicVolume"
                                    required
                                    className="mt-2 w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-gray-900"
                                >
                                    <option value="Sacola de supermercado (5 Litros)">Sacola de supermercado (5 Litros)</option>
                                    <option value="Saco de lixo (15 Litros)">Saco de lixo (15 Litros)</option>
                                    <option value="Saco de lixo (30 Litros)">Saco de lixo (30 Litros)</option>
                                    <option value="Saco de lixo (50 Litros)">Saco de lixo (50 Litros)</option>
                                    <option value="outro">Outro</option>
                                </select>

                                {inorganicVolume === "outro" && (
                                    <TextInput
                                        required
                                        label="Especifique o Volume:"
                                        placeholder="Volume"
                                        type="text"
                                        name="inorganicVolumeOther"
                                        containerClassName="text-left w-full mt-4"
                                        labelClassName="text-black"
                                        inputClassName="border-black text-black"
                                    />
                                )}
                            </div>

                            <div>
                                <TextInput
                                    required
                                    label="2 - Peso total (em gramas):"
                                    placeholder="Peso (gramas)"
                                    type="text"
                                    name="inorganicWeight"
                                    containerClassName="text-left w-full"
                                    labelClassName="text-black"
                                    inputClassName="border-black text-black"
                                    inputMode="numeric"
                                    pattern="[0-9]*"
                                />
                            </div>

                            <div className="flex flex-col">
                                <label className="text-xl">3 - Descrição do material:</label>

                                <MultiSelect
                                    options={[
                                        { value: "Garrafa PET", label: "Garrafa PET" },
                                        { value: "Isopor", label: "Isopor" },
                                        { value: "Vidro", label: "Vidro" },
                                        { value: "Papel", label: "Papel" },
                                        { value: "Plástico", label: "Plástico" },
                                        { value: "Papelão", label: "Papelão" },
                                        { value: "Metal", label: "Metal" },
                                        { value: "Tetra Pak", label: "Tetra Pak" },
                                        { value: "outro", label: "Outro" },
                                    ]}
                                    onChange={setInorganicDescription}
                                    selected={inorganicDescription}
                                />
                                {inorganicDescription.includes("outro") && (
                                    <>
                                        <TextInput
                                            required
                                            label="Especifique o material:"
                                            placeholder="Material"
                                            type="text"
                                            name="inorganicDescriptionOther"
                                            containerClassName="text-left w-full mt-4"
                                            labelClassName="text-black"
                                            inputClassName="border-black text-black"
                                        />
                                    </>
                                )}
                            </div>
                            <div>
                                <h2 className="text-lg">Poste aqui a foto evidenciando a composição do seu resíduo: (max 5)</h2>
                                <input type="file" name="inorganicResidueComposition" multiple accept="image/*" />
                            </div>
                        </div>

                        <div className="mt- flex flex-col gap-6">
                            <div>
                                <h3 className="mb-2 flex justify-center text-left text-2xl">Lixo Úmido - Orgânico</h3>
                                <img src={lixoOrganico} className="mx-auto w-[90%] rounded-md" />
                            </div>

                            <div className="text-left">
                                <label htmlFor="volume" className="text-lg">
                                    4 - Volume (Litros):
                                </label>

                                <select
                                    id="volume"
                                    value={organicVolume}
                                    onChange={(e) => setOrganicVolume(e.target.value)}
                                    name="organicVolume"
                                    required
                                    className="mt-2 w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-gray-900"
                                >
                                    <option value="1 pote de sorvete cheio">1 pote de sorvete cheio</option>
                                    <option value="1/2 pote de sorvete">1/2 pote de sorvete</option>
                                    <option value="2 potes de sorvete cheios">2 potes de sorvete cheios</option>
                                    <option value="1 pote e 1/2 de sorvete">1 pote e 1/2 de sorvete</option>
                                    <option value="outro">Outro</option>
                                </select>

                                {organicVolume === "outro" && (
                                    <TextInput
                                        required
                                        label="Especifique o Volume:"
                                        placeholder="Volume"
                                        type="text"
                                        name="organicVolumeOther"
                                        containerClassName="text-left w-full mt-4"
                                        labelClassName="text-black"
                                        inputClassName="border-black text-black"
                                    />
                                )}
                            </div>

                            <div>
                                <TextInput
                                    required
                                    label="5- Peso (em gramas):"
                                    placeholder="Peso"
                                    type="text"
                                    name="organicWeight"
                                    containerClassName="text-left w-full"
                                    labelClassName="text-black"
                                    inputClassName="border-black text-black"
                                    inputMode="numeric"
                                    pattern="[0-9]*"
                                />
                            </div>

                            <div className="flex flex-col">
                                <label className="text-lg">6 - Descrição do material orgânico:</label>

                                <MultiSelect
                                    options={[
                                        { value: "Verduras", label: "Verduras" },
                                        { value: "Legumes", label: "Legumes" },
                                        { value: "Frutas", label: "Frutas" },
                                        { value: "Filtro e borra de café", label: "Filtro e borra de café" },
                                        { value: "Sachê de chá", label: "Sachê de chá" },
                                        { value: "Casca de ovo", label: "Casca de ovo" },
                                        { value: "outro", label: "Outro" },
                                    ]}
                                    onChange={setOrganicDescription}
                                    selected={organicDescription}
                                />
                                {organicDescription.includes("outro") && (
                                    <>
                                        <TextInput
                                            required
                                            label="Especifique o material:"
                                            placeholder="Material"
                                            type="text"
                                            name="organicDescriptionOther"
                                            containerClassName="text-left w-full mt-4"
                                            labelClassName="text-black"
                                            inputClassName="border-black text-black"
                                        />
                                    </>
                                )}
                            </div>
                            <div>
                                <h2 className="text-lg">Poste aqui a foto evidenciando a composição do seu resíduo orgânico: (max 5)</h2>
                                <input type="file" name="organicResidueComposition" multiple accept="image/*" />
                            </div>
                        </div>

                        <div className="mt- flex flex-col gap-6">
                            <div>
                                <h3 className="mb-2 flex justify-center text-left text-2xl">Rejeitos (materiais não recicláveis)</h3>
                            </div>

                            <div>
                                <TextInput
                                    required
                                    label="7 - Rejeitos: Descreva os rejeitos gerados:"
                                    placeholder="Descrição de rejeitos"
                                    type="text"
                                    name="wastes"
                                    containerClassName="text-left w-full"
                                    labelClassName="text-black"
                                    inputClassName="border-black text-black"
                                />
                            </div>

                            <div>
                                <TextInput
                                    required
                                    type="text"
                                    label="8 - Rejeitos: Descreva o volume dos rejeitos gerados:"
                                    placeholder="volume de rejeitos"
                                    name="wastesVolume"
                                    containerClassName="text-left w-full"
                                    labelClassName="text-black"
                                    inputClassName="border-black text-black"
                                />
                            </div>
                        </div>

                        <Button>Salvar</Button>
                    </form>
                </div>
            </Wrapper>
        </div>
    );
};

export default Form;
