import Wrapper from "../components/Wrapper";
import React, { useState } from "react";

const Form = () => {
  const [name, setName] = useState("");
  const [date, setDate] = useState("");
  const [volume, setVolume] = useState("");
  const [volumeOther, setVolumeOther] = useState("");
  const [weight, setWeight] = useState("");
  const [description, setDescription] = useState([]);
  const [descriptionOther, setDescriptionOther] = useState("");
  const [organicVolume, setOrganicVolume] = useState("");
  const [organicVolumeOther, setOrganicVolumeOther] = useState("");
  const [organicWeight, setOrganicWeight] = useState("");
  const [organicDescription, setOrganicDescription] = useState([]);
  const [organicDescriptionOther, setOrganicDescriptionOther] = useState("");
  const [rejeitos, setRejeitos] = useState("");

  const handleForm = (e) => {
    e.preventDefault();
    console.log("Formulário enviado!");
  };

  return (
    <Wrapper className="flex flex-col gap-8 px-3 sm:px-0">
      <div>
        <h2>Formulário de Compostagem Caseira</h2>
        <form onSubmit={handleForm} className="flex flex-col">
          <label>1) Nome Completo:</label>
          <input
            type="text"
            placeholder="Nome completo"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />

          <label>Data do registro:</label>
          <input
            type="date"
            placeholder="Data"
            value={date}
            onChange={(e) => setDate(e.target.value)}
          />

          <h3>Lixo Seco - Inorgânico - Recicláveis</h3>

          <label>1 - Volume total estimado (em litros):</label>
          <select name="volume" value={volume} onChange={(e) => setVolume(e.target.value)}>
            <option value="5">Sacola de supermercado (5 Litros)</option>
            <option value="15">Saco de lixo (15 Litros)</option>
            <option value="30">Saco de lixo (30 Litros)</option>
            <option value="50">Saco de lixo (50 Litros)</option>
            <option value="outro">Outro</option>
          </select>

          {volume === "outro" && (
            <>
              <label>Especifique o volume:</label>
              <input
                type="text"
                name="volumeOther"
                placeholder="Outro"
                value={volumeOther}
                onChange={(e) => setVolumeOther(e.target.value)}
              />
            </>
          )}

          <label>2 - Peso total (em gramas):</label>
          <input
            type="number"
            name="weight"
            placeholder="Peso (gramas)"
            value={weight}
            onChange={(e) => setWeight(e.target.value)}
          />

          <label>3 - Descrição do material:</label>
          <select
            name="description"
            multiple
            value={description}
            onChange={(e) =>
              setDescription(Array.from(e.target.selectedOptions, (option) => option.value))
            }
          >
            <option value="garrafa_pet">Garrafa PET</option>
            <option value="isopor">Isopor</option>
            <option value="vidro">Vidro</option>
            <option value="papel">Papel</option>
            <option value="plastico">Plástico</option>
            <option value="papelao">Papelão</option>
            <option value="metal">Metal</option>
            <option value="tetra_pak">Tetra Pak</option>
            <option value="outro">Outro</option>
          </select>

          {description.includes("outro") && (
            <>
              <label>Especifique o material:</label>
              <input
                type="text"
                name="descriptionOther"
                placeholder="Outro"
                value={descriptionOther}
                onChange={(e) => setDescriptionOther(e.target.value)}
              />
            </>
          )}

          <h3>Lixo Úmido - Orgânico</h3>

          <label>4 - Volume (Litros):</label>
          <select name="organicVolume" value={organicVolume} onChange={(e) => setOrganicVolume(e.target.value)}>
            <option value="2">1 pote de sorvete cheio</option>
            <option value="1">1/2 pote de sorvete</option>
            <option value="4">2 potes de sorvete cheios</option>
            <option value="3">1 pote e 1/2 de sorvete</option>
            <option value="outro">Outro</option>
          </select>

          {organicVolume === "outro" && (
            <>
              <label>Especifique o volume:</label>
              <input
                type="text"
                name="organicVolumeOther"
                placeholder="Outro"
                value={organicVolumeOther}
                onChange={(e) => setOrganicVolumeOther(e.target.value)}
              />
            </>
          )}

          <label>5 - Peso (em gramas):</label>
          <input
            type="number"
            name="organicWeight"
            placeholder="Peso"
            value={organicWeight}
            onChange={(e) => setOrganicWeight(e.target.value)}
          />

          <label>6 - Descrição do material orgânico:</label>
          <select
            name="organicDescription"
            multiple
            value={organicDescription}
            onChange={(e) =>
              setOrganicDescription(Array.from(e.target.selectedOptions, (option) => option.value))
            }
          >
            <option value="verduras">Verduras</option>
            <option value="legumes">Legumes</option>
            <option value="frutas">Frutas</option>
            <option value="cafe">Filtro e borra de café</option>
            <option value="cha">Sachê de chá</option>
            <option value="casca_ovo">Casca de ovo</option>
            <option value="outro">Outro</option>
          </select>

          {organicDescription.includes("outro") && (
            <>
              <label>Especifique o material orgânico:</label>
              <input
                type="text"
                name="organicDescriptionOther"
                placeholder="Outro"
                value={organicDescriptionOther}
                onChange={(e) => setOrganicDescriptionOther(e.target.value)}
              />
            </>
          )}

          <label>7 - Rejeitos: Descreva os rejeitos gerados (materiais não recicláveis) e o volume</label>
          <textarea
            name="rejeitos"
            placeholder="Rejeitos e Volume"
            value={rejeitos}
            onChange={(e) => setRejeitos(e.target.value)}
          />

          <button type="submit">Salvar</button>
        </form>
      </div>
    </Wrapper>
  );
};

export default Form;