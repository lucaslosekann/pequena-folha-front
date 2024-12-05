import React, { useEffect } from "react";
import Wrapper from "../components/Wrapper";
import Slider from "react-slick";
import RightArrow from "../assets/RightArrow.svg";
import LeftArrow from "../assets/LeftArrow.svg";
import { getAgenda, getAgendaImageUrl, Agenda as AgendaType } from "../services/api";
import Button from "../components/Button";
type EventsProps = {
    eventsArray: AgendaType[];
};

const carrosselSettings = (slidesToShow: number = 1) => ({
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: slidesToShow,
    slidesToScroll: 1,
    nextArrow: (
        <div>
            <div className="next-slick-arrow">
                <img src={RightArrow} className="h-[75%] w-[75%] -translate-y-full" />
            </div>
        </div>
    ),
    prevArrow: (
        <div>
            <div className="next-slick-arrow">
                <img src={LeftArrow} className="h-[75%] w-[75%] -translate-y-full" />
            </div>
        </div>
    ),
});

export const CarrosselProximosEventos = () => {
    const [nextEventsArray, setAgenda] = React.useState<AgendaType[]>([]);

    useEffect(() => {
        getAgenda().then((response) => {
            setAgenda(response);
        });
    }, []);

    const settings = carrosselSettings(3);
    const filtered = nextEventsArray.filter((agendaEvents) => new Date(agendaEvents.dateTime).getTime() >= Date.now());
    return filtered.length > 0 ? (
        <div className="slider-container text-left">
            <Slider {...settings}>
                {filtered.map((agendaEvents) => (
                    <div
                        key={agendaEvents.id}
                        className="aspect-video rounded-lg border-4 border-own-green bg-own-green p-4 text-lg text-white shadow-lg"
                    >
                        <div className="flex h-full w-full flex-col justify-center">
                            <h3>📅{new Date(agendaEvents.dateTime).toLocaleDateString("pt-BR", { hour: "2-digit", minute: "2-digit" })}</h3>
                            <h3>📍{agendaEvents.place}</h3>
                            <h3>🌱{agendaEvents.type}</h3>
                            <h3>🗒️{agendaEvents.description}</h3>
                        </div>
                    </div>
                ))}
            </Slider>
        </div>
    ) : (
        <div className="text-center">
            <h3 className="text-2xl">Não há eventos agendados</h3>
        </div>
    );
};

const CarrosselImagesModal = ({ event }: { event: AgendaType }) => {
    const settings = carrosselSettings(1);

    return (
        <div className="slider-container text-left">
            <Slider {...settings}>
                {event.eventsImages.map((image, index) => (
                    <div className="flex items-center">
                        <img
                            key={index}
                            src={getAgendaImageUrl(image.id)}
                            alt={`Event ${event.id} Image ${index + 1}`}
                            className="flex h-auto w-auto object-contain"
                        />
                    </div>
                ))}
            </Slider>
        </div>
    );
};

export const CarrosselEventosAnteriores = ({ eventsArray: previousEventsArray }: EventsProps) => {
    const settings = carrosselSettings(3);

    const [currentSlide, setCurrentSlide] = React.useState<AgendaType | null>(null);
    const [isModalOpen, setIsModalOpen] = React.useState(false);

    const openModal = (slide: AgendaType) => {
        setCurrentSlide(slide);
        setIsModalOpen(true);
    };

    const closeModal = () => {
        setIsModalOpen(false);
        setCurrentSlide(null);
    };

    const slides = previousEventsArray
        .filter((agendaEvents) => new Date(agendaEvents.dateTime).getTime() < Date.now() && agendaEvents.eventsImages.length > 0)
        .map((agendaEvents) => ({
            ...agendaEvents,
            dateTime: new Date(agendaEvents.dateTime).toLocaleDateString(),
        }));

    return slides.length > 0 ? (
        <div className="slider-container text-left">
            <Slider {...settings}>
                {slides.map((slide, index) => (
                    <div
                        key={index}
                        className="flex h-[300px] min-h-40 w-[300px] flex-col gap-5 rounded-lg border-4 border-own-green p-4 shadow-lg"
                    >
                        <div className="mb-5 flex h-[75%] w-full items-center justify-center overflow-hidden">
                            <img
                                src={getAgendaImageUrl(slide.eventsImages[0].id)}
                                alt="Image"
                                className="max-h-full max-w-full rounded-lg object-contain"
                            />
                        </div>
                        <div className="flex w-full flex-col items-center justify-center">
                            <Button children="Ver mais" onClick={() => openModal(slide)}></Button>
                        </div>
                    </div>
                ))}
            </Slider>

            {isModalOpen && (
                <div className="fixed inset-0 z-[1055] flex items-center justify-center bg-black bg-opacity-60" onClick={closeModal}>
                    <div
                        className="flex max-h-[90vh] w-[90%] max-w-[800px] flex-col gap-3 overflow-y-auto rounded-lg bg-white p-5 text-justify"
                        onClick={(e) => e.stopPropagation()}
                    >
                        {currentSlide && (
                            <div className="flex flex-col gap-3 text-xl">
                                <h2>📅{currentSlide.dateTime}</h2>
                                <h2>🌱{currentSlide.type}</h2>
                            </div>
                        )}
                        <div className="mx-auto w-[60%]">
                            <CarrosselImagesModal event={currentSlide!} />
                        </div>
                        <div>
                            {currentSlide && (
                                <div className="w-full">
                                    <div className="ql-editor" dangerouslySetInnerHTML={{ __html: currentSlide.additionalText! }} />
                                    {/* <ReactQuill value={currentSlide.additionalText} readOnly={true} theme={"snow"} /> */}
                                </div>
                            )}
                        </div>
                        <div className="flex justify-end">
                            <div className="w-[25%]">
                                <Button children="Fechar" onClick={closeModal}></Button>
                            </div>
                        </div>
                    </div>
                </div>
            )}
        </div>
    ) : (
        <div className="text-center">
            <h3 className="text-2xl">Não há eventos anteriores</h3>
        </div>
    );
};

export default function Agenda() {
    const [agendaEvents, setAgenda] = React.useState<AgendaType[]>([]);

    useEffect(() => {
        getAgenda().then((response) => {
            setAgenda(response);
        });
    }, []);

    return (
        <Wrapper>
            <div>
                <h2 className="mb-10 text-left text-2xl font-semibold text-own-green sm:text-4xl">PRÓXIMOS EVENTOS</h2>
                <CarrosselProximosEventos />
            </div>
            <div className="h-10"></div>
            <div className="mb-10">
                <h2 className="mb-10 text-left text-2xl font-semibold text-own-green sm:text-4xl">EVENTOS ANTERIORES</h2>
                <CarrosselEventosAnteriores eventsArray={agendaEvents} />
            </div>
        </Wrapper>
    );
}
