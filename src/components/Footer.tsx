import React from "react";
import salaVerde from "../assets/sala_verde.gif";
import univali from "../assets/logo_univali.webp";
import youtube from "../assets/youtube.svg"
import facebook from "../assets/facebook.svg"
import whatsapp from "../assets/whatsapp.svg"

export default function Footer() {
    return (

        // Div para a cor ocupar toda a tela
        <div className="w-full bg-[#3A2C1F] py-3">
            {/* mx auto -> margin horizontal(x) automatica */}
            <footer className="container mx-auto text-white h-auto flex justify-between items-center 
            sm:flex-row flex-col sm:gap-0 gap-4">
                {/* items == align-Items */}
                {/* text-base == padrao
                    text-sm == small
                */}
                <div className="flex flex-col gap-2 sm:items-start items-center sm:text-base text-sm"> 
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
                    <div className="flex gap-3">
                        <a href="https://www.youtube.com/c/Laborat%C3%B3rioEduca%C3%A7%C3%A3oAmbiental">
                            <img src={youtube} alt="YouTube" className="h-6 sm:h-8 "/>
                        </a>
                        <a href="https://www.facebook.com/salaverdeitajaisc/">
                            <img src={facebook} alt="Facebook" className="h-6 sm:h-8 "/>
                        </a>
                        <a href="">
                            <img src={whatsapp} alt="WhatsApp" className="h-6 sm:h-8 "/>
                        </a>
                    </div>
                </div>
                <div className="flex gap-3 items-center">
                    <img src={salaVerde} alt="Logo Sala Verde" className="h-[75px] sm:h-[95px]" />
                    <div className="border-l-[1px] border-white  h-20 sm:h-28"></div>
                    <img src={univali} alt="Logo Univali" className="h-[75px] sm:h-[95px]" />
                </div>
            </footer >
        </div >
    )
}