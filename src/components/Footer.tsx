import React from "react";
import salaVerde from "../assets/sala_verde.gif";
import univali from "../assets/logo_univali.webp";

export default function Footer() {
    return (

        // Div para a cor ocupar toda a tela
        <div className="w-full bg-[#3A2C1F]">
            {/* mx auto -> margin horizontal(x) automatica */}
            <footer className="container mx-auto text-white h-auto flex justify-between items-center">
                <div className="flex flex-col gap-2">
                    <div className="leading-5">
                        <p>Sala Verde Itajaí - UNIVALI</p>
                        <p>E-mail: salaverde@univali.br</p>
                    </div>
                    <div className="leading-5">
                        <p>Projeto Pequena Folha - Sala Verde Univali</p>
                        <p>E-mail: pequenafolhacompostagem@gmail.com</p>
                    </div>
                    <div>
                        <p>UNIVALI - Rua: Uruguai, 458 - Centro - Itajaí (SC). CEP.: 88302-901</p>
                    </div>
                    <div>
                        --icones
                    </div>
                </div>
                <div className="flex">
                    <img src={salaVerde} alt="Logo Sala Verde" />
                    <div className="border-l-2 border-white h-25"></div>
                    <img src={univali} alt="Logo Univali" />
                </div>
            </footer >
        </div >
    )
}