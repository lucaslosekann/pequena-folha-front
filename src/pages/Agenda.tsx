import React, { useEffect } from "react";
import Wrapper from "../components/Wrapper";
import Slider from "react-slick";
import RightArrow from "../assets/RightArrow.svg";
import LeftArrow from "../assets/LeftArrow.svg";
import { getAgenda, Agenda as AgendaType } from "../services/api";

type EventsProps = {
    eventsArray: AgendaType[];
};

const CarrosselProximosEventos = ({ eventsArray: nextEventsArray }: EventsProps) => {
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 3, // Quantidade de slides visíveis
        slidesToScroll: 1, // Quantidade de slides a rolar por vez
        nextArrow: (
            <div>
                <div className="next-slick-arrow">
                    <img src={RightArrow} className="-translate-y-full" />
                </div>
            </div>
        ),

        prevArrow: (
            <div>
                <div className="next-slick-arrow">
                    <img src={LeftArrow} className="-translate-y-full" />
                </div>
            </div>
        ),
    };

    return (
        <div className="slider-container text-left">
            <Slider {...settings}>
                {nextEventsArray.map((nextEvents) => (
                    <div
                        key={nextEvents.id}
                        className="aspect-video rounded-lg border-4 border-own-green bg-own-green p-4 text-lg text-white shadow-lg"
                    >
                        <div className="flex h-full w-full flex-col justify-center">
                            <h3>📅{new Date(nextEvents.dateTime).toLocaleDateString("pt-BR", { hour: "2-digit", minute: "2-digit" })}</h3>
                            <h3>📍{nextEvents.place}</h3>
                            <h3>🌱{nextEvents.type}</h3>
                            <h3>🗒️{nextEvents.description}</h3>
                        </div>
                    </div>
                ))}
            </Slider>
        </div>
    );
};

const CarrosselEventosAnteriores = () => {
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

    const [currentSlide, setCurrentSlide] = React.useState<Slide | null>(null);
    const [isModalOpen, setIsModalOpen] = React.useState(false);

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


    const slides = [
        {
            title: 'Slide 1',
            image: 'https://via.placeholder.com/300',
            type: 'Tipo de Atividade',
            date: 'Data',
            local: 'Local',
            description: 'Descrição',
        },
        {
            title: 'Slide 2',
            image: 'https://via.placeholder.com/300',
            type: 'Tipo de Atividade',
            date: 'Data',
            local: 'Local',
            description: 'Descrição',
        },
        {
            title: 'Slide 3',
            image: 'https://via.placeholder.com/300',
            type: 'Tipo de Atividade',
            date: 'Data',
            local: 'Local',
            description: 'Descrição',
        },
        {
            title: 'Slide 4',
            image: 'https://via.placeholder.com/300',
            type: 'Tipo de Atividade',
            date: 'Data',
            local: 'Local',
            description: 'Descrição',
        },
    ];

    return (
        <div className="slider-container text-left">
            <Slider {...settings}>
                {slides.map((slide, index) => (
                    <div 
                    key={index} 
                    className="min-h-40 border-4 border-own-green rounded-lg p-4 shadow-lg"
                    style={{
                        display: 'flex',
                        height: '300px',
                        width: '300px',
                        flexDirection: 'column',
                    }}
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
                        <div className="flex flex-col justify-center p-1">
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
    const [nextEvents, setAgenda] = React.useState<AgendaType[]>([]);

    useEffect(() => {
        getAgenda().then((response) => {
            setAgenda(response);
        });
    }, []);

    return (
        <Wrapper>
            <div>
                <h2 className="mb-10 text-left text-2xl font-semibold text-own-green sm:text-4xl">PRÓXIMOS EVENTOS</h2>
                <CarrosselProximosEventos eventsArray={nextEvents} />
            </div>
            <div className="h-10"></div>
            <div className="mb-10">
                <h2 className="mb-10 text-left text-2xl font-semibold text-own-green sm:text-4xl">EVENTOS ANTERIORES</h2>
                <CarrosselEventosAnteriores />
            </div>
        </Wrapper>
    );
}
