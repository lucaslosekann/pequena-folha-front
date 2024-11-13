import Wrapper from "../components/Wrapper";
import React, { useState } from "react";
import TextInput from "../components/TextInput";
import {Text, StyleSheet} from 'react-native';

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
    
      <h2  className= "flex text-left text-2xl font-semibold text-own-black sm:text-4xl justify-center ">
   
        Formulário de Compostagem Caseira
        
         </h2>
        <form onSubmit={handleForm} className="flex  flex-col grid gap-8 justify-center ">
        
        <TextInput
                            required
                            label="Nome Completo "
                            placeholder="Nome"
                            type="text"
                            name="Nome"
                            containerClassName=" text-left w-full"
                            labelClassName="text-black"
                            inputClassName="border-black text-black"
                        />

<TextInput
                            required
                            label="Data"
                            placeholder="mm/dd/aa"
                            type="date"
                            name="Data"
                            containerClassName="text-left w-full"
                            labelClassName="text-black"
                            inputClassName="border-black text-black"
                        />
            
          
          <h3 className= "flex text-left text-2xl font-semibold text-own-black sm:text-2xl justify-center ">Lixo Seco - Inorgânico - Recicláveis</h3>

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
            <TextInput
                            required
                            label="Especifique o Volume:"
                            placeholder="Volume"
                            type="text"
                            name="Volume"
                            containerClassName="text-left w-full"
                            labelClassName="text-black"
                            inputClassName="border-black text-black"
                        />
              
            </>
          )}

          <label>2 - Peso total (em gramas):</label>
          <TextInput
                            required
                            label="Especifique o peso:"
                            placeholder="Peso (gramas)"
                            type="number"
                            name="weight"
                            containerClassName="text-left w-full"
                            labelClassName="text-black"
                            inputClassName="border-black text-black"
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
             <TextInput
                            required
                            label="Especifique o material:"
                            placeholder="Material"
                            type="text"
                            name="descriptionOther"
                            containerClassName="text-left w-full"
                            labelClassName="text-black"
                            inputClassName="border-black text-black"
                        />
            </>
          )}

          <h3 className= "flex text-left text-2xl font-semibold text-own-black sm:text-2xl justify-center ">Lixo Úmido - Orgânico</h3>

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
            <TextInput
                            required
                            label="Especifique o volume:"
                            placeholder="volume"
                            type="text"
                            name="organicVolumeOther"
                            containerClassName="text-left w-full"
                            labelClassName="text-black"
                            inputClassName="border-black text-black"
                        />
            </>
          )}


          <TextInput
                            required
                            label="5- Peso (em gramas):"
                            placeholder="Peso"
                            type="text"
                            name="organicWeight"
                            containerClassName="text-left w-full"
                            labelClassName="text-black"
                            inputClassName="border-black text-black"
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
            <TextInput
                            required
                            label="Especifique o material orgânico:"
                            placeholder="Descrição de material"
                            type="text"
                            name="organicDescriptionOther"
                            containerClassName="text-left w-full"
                            labelClassName="text-black"
                            inputClassName="border-black text-black"
                        />
            </>
          )}
 <TextInput
                            required
                            label="7 - Rejeitos: Descreva os rejeitos gerados (materiais não recicláveis):"
                            placeholder="Descrição de rejeitos"
                            type="text"
                            name="rejeitos"
                            containerClassName="text-left w-full"
                            labelClassName="text-black"
                            inputClassName="border-black text-black"
                        />

<TextInput
                            required
                            label="8 - Rejeitos: Descreva o volume dos rejeitos gerados:"
                            placeholder="volume de rejeitos"
                            type="number"
                            name="rejeitos"
                            containerClassName="text-left w-full"
                            labelClassName="text-black"
                            inputClassName="border-black text-black"
                        />
          <button className= "flex text-left text-2xl font-semibold text-own-black sm:text-2xl justify-center " type="submit">Salvar</button>
        </form>
      </div>
    </Wrapper>
  );
};





export default Form;