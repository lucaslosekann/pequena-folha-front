import React, { useEffect } from "react";
import Wrapper from "../components/Wrapper";
import Slider from "react-slick";
import RightArrow from "../assets/RightArrow.svg";
import LeftArrow from "../assets/LeftArrow.svg";
import { getAgenda, Agenda as AgendaType } from "../services/api";

export const CarrosselProximosEventos = () => {
    const [nextEventsArray, setAgenda] = React.useState<AgendaType[]>([]);

    useEffect(() => {
        getAgenda().then((response) => {
            setAgenda(response);
        });
    }, []);

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
        slidesToShow: 3, // Quantidade de slides visíveis
        slidesToScroll: 1, // Quantidade de slides a rolar por vez
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
            title: "Slide 1",
            image: "https://via.placeholder.com/300",
        },
        {
            title: "Slide 2",
            image: "https://via.placeholder.com/300",
        },
        {
            title: "Slide 3",
            image: "https://via.placeholder.com/300",
        },
        {
            title: "Slide 4",
            image: "https://via.placeholder.com/300",
        },
    ];

    return (
        <div className="slider-container text-left">
            <Slider {...settings}>
                {slides.map((slide, index) => (
                    <div key={index} className="min-h-40 rounded-lg border-4 border-own-green shadow-lg">
                        <div>
                            <img src={slide.image} alt={slide.title} className="aspect-video w-full object-cover" />
                        </div>
                        <div className="flex flex-col justify-center p-1">
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
                <CarrosselProximosEventos />
            </div>
            <div className="h-10"></div>
            <div className="mb-10">
                <h2 className="mb-10 text-left text-2xl font-semibold text-own-green sm:text-4xl">EVENTOS ANTERIORES</h2>
                <CarrosselEventosAnteriores />
            </div>
        </Wrapper>
    );
}
