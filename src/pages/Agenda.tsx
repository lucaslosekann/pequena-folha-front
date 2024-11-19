//import React from "react";
import Wrapper from "../components/Wrapper";
import Slider from 'react-slick';
import RightArrow from '../assets/RightArrow.svg';
import LeftArrow from '../assets/LeftArrow.svg';

const Carrossel1 = () => {
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 3,  // Quantidade de slides visíveis
        slidesToScroll: 1,  // Quantidade de slides a rolar por vez
        nextArrow: (
            <div>
                <div className="next-slick-arrow">
                    <img src={RightArrow} className="-translate-y-full"/>
                </div>
            </div>
        ),

        prevArrow: (
            <div>
                <div className="next-slick-arrow">
                    <img src={LeftArrow} className="-translate-y-full"/>
                </div>
            </div>
        ),
    };

    return (
        <div className="slider-container text-left ">

            <Slider {...settings} >
                <div className="border-4 border-own-green rounded-lg p-4 shadow-lg h-full">
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

const Carrossel2 = () => {
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 4,  // Quantidade de slides visíveis
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

    const slides = [
        {
            title: 'Slide 1',
            image: 'https://via.placeholder.com/300',
        },
        {
            title: 'Slide 2',
            image: 'https://via.placeholder.com/300',
        },
        {
            title: 'Slide 3',
            image: 'https://via.placeholder.com/300',
        },
        {
            title: 'Slide 4',
            image: 'https://via.placeholder.com/300',
        },
    ]

    return (
        <div className="slider-container text-left ">

            <Slider {...settings}>
                {slides.map((slide, index) => (
                    <div 
                    key={index} 
                    className="border-4 border-own-green rounded-lg p-4 shadow-lg min-h-40"
                    >
                        <div
                        style={{
                            flex: 7,
                            overflow: 'hidden',
                            borderBottom: '2px solid #ccc',
                        }}
                        >
                            <img
                            src={slide.image}
                            alt={slide.title}
                            style={{
                                width: '100%',
                                aspectRatio: 1,
                                objectFit: 'cover',
                            }}
                            />
                        </div>
                        <div
                            style={{
                                flex: 3,
                                display: 'flex',
                                flexDirection: 'column',
                                padding: '1px',
                                justifyContent: 'center',
                            }}
                        >
                            <h3>{slide.title}</h3>
                            <p>Tipo de Atividade</p>
                        </div>
                    </div>
                ))}
            </Slider>
        </div>
    );
};

export default function Agenda() {
    return (
        <Wrapper>
            <div>
                <h2 className="mb-10 text-left text-2xl font-semibold text-own-green sm:text-4xl">PRÓXIMOS EVENTOS</h2>
                <Carrossel1 />
            </div>
            <div className="h-10"></div>
            <div className="mb-10">
                <h2 className="mb-10 text-left text-2xl font-semibold text-own-green sm:text-4xl">EVENTOS ANTERIORES</h2>
                <Carrossel2 />
            </div>
        </Wrapper>
    );
}
