import React, { useState } from "react";
import Wrapper from "../components/Wrapper";
import Slider from 'react-slick';
import Modal from 'react-modal';
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

const Carrossel2 = () => {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [currentSlide, setCurrentSlide] = useState<Slide | null>(null);

    interface Slide {
        title: string;
        image: string;
        tipo: string;
        data: string;
        local: string;
        descricao: string;
    }

    const openModal = (slide: Slide) => {
        setCurrentSlide(slide);
        setIsModalOpen(true);
    };

    const closeModal = () => {
        setIsModalOpen(false);
        setCurrentSlide(null);
    };

    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 4,  // Quantidade de slides visíveis
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

    const slides = [
        {
            title: 'Slide 1',
            image: 'https://via.placeholder.com/300',
            tipo: 'Tipo de Atividade',
            data: 'Data e Hora',
            local: 'Local',
            descricao: 'Descrição',
        },
        {
            title: 'Slide 2',
            image: 'https://via.placeholder.com/300',
            tipo: 'Tipo de Atividade',
            data: 'Data e Hora',
            local: 'Local',
            descricao: 'Descrição',
        },
        {
            title: 'Slide 3',
            image: 'https://via.placeholder.com/300',
            tipo: 'Tipo de Atividade',
            data: 'Data e Hora',
            local: 'Local',
            descricao: 'Descrição',
        },
        {
            title: 'Slide 4',
            image: 'https://via.placeholder.com/300',
            tipo: 'Tipo de Atividade',
            data: 'Data e Hora',
            local: 'Local',
            descricao: 'Descrição',
        },
    ];

    return (
        <div className="slider-container text-left ">

            <Slider {...settings}>
                {slides.map((slide, index) => (
                    <div
                        key={index}
                        className="border-4 border-own-green rounded-lg p-4 shadow-lg h-full"
                        style={{
                            height: '100%',
                            width: '100%',
                            objectFit: 'cover',
                            aspectRatio: 1,
                        }}
                        onClick={() => openModal(slide)}
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
                                    height: '100%',
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

            {isModalOpen &&(
                <div
                    style={{
                        position: 'fixed',
                        top: 0,
                        left: 0,
                        width: '100%',
                        height: '100%',
                        background: 'rgba(0, 0, 0, 0.5)',
                        display: 'flex',
                        justifyContent: 'center',
                        alignItems: 'center',
                        zIndex:'1000',
                    }}
                    onClick={closeModal} 
                >
                    <div
                        style={{
                            background: '#fff',
                            borderRadius: '8px',
                            padding: '20px',
                            maxWidth: '500px',
                            textAlign: 'center',
                        }}
                        onClick={(e) => e.stopPropagation()} 
                    >
                        {currentSlide && (
                            <>
                                <h2>{currentSlide.title}</h2>
                                <h2>{currentSlide.tipo}</h2>
                                <h2>{currentSlide.data}</h2>
                                <h2>{currentSlide.local}</h2>
                                <h2>{currentSlide.descricao}</h2>
                            </>
                        )}
                        <button
                            onClick={closeModal}
                            style={{
                                padding: '10px 20px',
                                background: '#28a745',
                                color: '#fff',
                                border: 'none',
                                borderRadius: '5px',
                                cursor: 'pointer',
                            }}
                        >
                            Fechar
                        </button>
                    </div>    
                </div>
            )}
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