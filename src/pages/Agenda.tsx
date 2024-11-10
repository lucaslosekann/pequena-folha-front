//import React from "react";
import Wrapper from "../components/Wrapper";
import Slider from 'react-slick';
import Modal from 'react-modal';
import RightArrow from '../assets/RightArrow.svg';
import LeftArrow from '../assets/LeftArrow.svg';

const Carrossel = () => {
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 3,  // Quantidade de slides visíveis
        slidesToScroll: 1,  // Quantidade de slides a rolar por vez
        nextArrow: (
            <div>
                <div className="next-slick-arrow">
                    <img src={RightArrow} />
                </div>
            </div>
        ),

        prevArrow: (
            <div>
                <div className="next-slick-arrow">
                    <img src={LeftArrow} />
                </div>
            </div>
        ),
    };

    return (
        <div className="slider-container text-left ">

            <Slider {...settings}>
                <div className="border-4 border-own-green rounded-lg p-4 shadow-lg min-h-40">
                    <h3>Slide 1</h3>
                    <h3>Data e Hora</h3>
                    <h3>Local</h3>
                    <h3>Tipo de Atividade</h3>
                    <h3>Descrição</h3>
                </div>
                <div className="border-4 border-own-green rounded-lg p-4 shadow-lg min-h-40">
                    <h3>Slide 2</h3>
                    <h3>Data e Hora</h3>
                    <h3>Local</h3>
                    <h3>Tipo de Atividade</h3>
                    <h3>Descrição</h3>
                </div>
                <div className="border-4 border-own-green rounded-lg p-4 shadow-lg min-h-40">
                    <h3>Slide 3</h3>
                    <h3>Data e Hora</h3>
                    <h3>Local</h3>
                    <h3>Tipo de Atividade</h3>
                    <h3>Descrição</h3>
                </div>
                <div className="border-4 border-own-green rounded-lg p-4 min-h-40 shadow-lg ">
                    <h3>Slide 4</h3>
                    <h3>Data e Hora</h3>
                    <h3>Local</h3>
                    <h3>Tipo de Atividade</h3>
                    <h3>Descrição</h3>
                </div>
            </Slider>
        </div>
    );
};

export default function Agenda() {
    return (
        <Wrapper >
            <div>
                <h2 className="mb-10 text-left text-2xl font-semibold text-own-green sm:text-4xl">PRÓXIMOS EVENTOS</h2>
                <Carrossel />
            </div>
            <div>
                <h2 className="mb-10 text-left text-2xl font-semibold text-own-green sm:text-4xl">EVENTOS ANTERIORES</h2>
                <Carrossel />
            </div>
        </Wrapper>
    );
}