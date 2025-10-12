import { FC, useRef, useState, useEffect } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { ChevronLeft, ChevronRight } from "lucide-react";
import PartnersCard from "@/components/PartnersCard";

// Define event data structure
interface EventImage {
  id: number;
  src: string;
  alt: string;
}

interface EventDate {
  id: number;
  date: string;
  title: string;
  location: string;
}

interface Event {
  id: string;
  title: string;
  description: string;
  images: EventImage[];
  dates: EventDate[];
}

// Mock data for the events
const events: Event[] = [
  {
    id: "career-speeddating",
    title: "Kariérní Speed-Dating",
    description: `🔥 Hledáš ideální start své kariéry? Nebojíš se nových výzev a chceš se setkat s top firmami na trhu? 🔥 
Přijď na náš jedinečný Kariérní Speed-Dating a najdi svůj "match"! 🎯 
Připoj se k nám na akci, která spojuje ambiciózní studenty zajímající se o project management, HR a marketing s předními společnostmi ze svých oblastí. Čeká tě rychlé a efektivní setkání se zástupci firem, kde máš 7 minut na to, abys je zaujal a zjistil, zda jste pro sebe ti praví.`,
    images: [
      {
        id: 1,
        src: "/images/Events/speedDating1.JPG",
        alt: "Career Speeddating 1",
      },
      {
        id: 2,
        src: "/images/Events/speedDating2.JPG",
        alt: "Career Speeddating 2",
      },
      {
        id: 3,
        src: "/images/Events/speedDating3.jpg",
        alt: "Career Speeddating 3",
      },
      {
        id: 4,
        src: "/images/Events/speedDating4.webp",
        alt: "Career Speeddating 4",
      },
      {
        id: 5,
        src: "/images/Events/SpeedDating5.JPG",
        alt: "Career Speeddating 4",
      },
      {
        id: 6,
        src: "/images/Events/SpeedDating6.JPG",
        alt: "Career Speeddating 4",
      },
    ],
    dates: [
      {
        id: 1,
        date: "2026-04-04",
        title: "Kariérní Speeddating 2026",
        location: "VŠE, Quattro Modulare",
      },
      // {
      //   id: 2,
      //   date: "TBD",
      //   title: "Podzimní Kariérní Speeddating",
      //   location: "VŠE, ",
      // },
    ],
  },
  {
    id: "informal-events",
    title: "Neformální akce",
    description: `Připojte se k nám a zažijte neformální networking v uvolněné atmosféře. Naše neformální akce jsou ideální pro navazování nových přátel, sdílení zkušeností a budování spojení v rámci univerzitní komunity v zábavném a beztlakém prostředí.`,
    images: [
      { id: 1, src: "/images/Events/Informal1.jpeg", alt: "Informal Event 1" },
      { id: 2, src: "/images/Events/Informal2.jpg", alt: "Informal Event 2" },
      {
        id: 3,
        src: "/images/Events/Informal3.jpg",
        alt: "Informal Event 3",
      },
      {
        id: 4,
        src: "/images/Events/Informal4.jpg",
        alt: "Informal Event 3",
      },
      {
        id: 5,
        src: "/images/Events/Informal5.jpg",
        alt: "Informal Event 3",
      },
    ],
    dates: [
      {
        id: 1,
        date: "2025-10-23",
        title: "Karaoke Night",
        location: "The Quays Bar",
      },
      {
        id: 2,
        date: "2025-11-20",
        title: "TBD",
        location: "TBD",
      },
      // {
      //   id: 3,
      //   date: "2025-09-25",
      //   title: "TBD",
      //   location: "TBD",
      // },
    ],
  },
  {
    id: "lectures",
    title: "Přednášky",
    description: `Rozšiřte své znalosti pomocí naší série přednášek, na kterých se představí odborníci z oboru. Tyto sezení poskytují hluboké ponory do současných trendů, inovativních nápadů a praktických poznatků v různých oblastech podnikání a managementu.`,
    images: [
      { id: 1, src: "/images/Events/prednasky1.webp", alt: "Lecture 1" },
      { id: 2, src: "/images/Events/prednasky2.webp", alt: "Lecture 2" },
      { id: 3, src: "/images/Events/prednasky3.jpg", alt: "Lecture 3" },
      {
        id: 4,
        src: "/images/Events/Prednasky4.jpg",
        alt: "Lecture 4",
      },
    ],
    dates: [
      {
        id: 1,
        date: "2025-04-10",
        title: "TBD",
        location: "TBD",
      },
      // {
      //   id: 2,
      //   date: "2025-05-12",
      //   title: "TBD",
      //   location: "TBD",
      // },
      // {
      //   id: 3,
      //   date: "2025-11-07",
      //   title: "TBD",
      //   location: "TBD",
      // },
    ],
  },
  {
    id: "workshops",
    title: "Workshopy",
    description: `Rozvíjejte praktické dovednosti prostřednictvím našich praktických workshopů. Tato interaktivní setkání vedená zkušenými profesionály se zaměřují na budování konkrétních kompetencí, které rozšíří vaši profesionální sadu nástrojů a poskytnou vám konkurenční výhodu ve vaší kariéře.,`,
    images: [
      { id: 1, src: "/images/HomePage/6.jpg", alt: "Workshop 1" },
      { id: 2, src: "/images/HomePage/5.jpeg", alt: "Workshop 2" },
      { id: 3, src: "/images/HomePage/4.webp", alt: "Workshop 3" },
      { id: 3, src: "/images/Events/Workshopy1.jpg", alt: "Workshop 4" },
      { id: 3, src: "/images/Events/Workshopy2.jpg", alt: "Workshop 5" },
    ],
    dates: [
      {
        id: 1,
        date: "2025-10-13",
        title: "Excelovani s EY",
        location: "EY",
      },
      {
        id: 2,
        date: "2025-10-15",
        title: "EMCO Exkurze",
        location: "EMCO",
      },

      // {
      //   id: 3,
      //   date: "2025-10-15",
      //   title: "Effective Presentation Skills",
      //   location: "VŠE, RB 309",
      // },
    ],
  },
];

// Component for scrollable image gallery
const ImageGallery: FC<{ images: EventImage[] }> = ({ images }) => {
  const scrollRef = useRef<HTMLDivElement>(null);
  const [showLeftButton, setShowLeftButton] = useState(false);
  const [showRightButton, setShowRightButton] = useState(true);
  const [isScrolling, setIsScrolling] = useState(false);

  const handleScroll = () => {
    if (!scrollRef.current || isScrolling) return;

    const { scrollLeft, scrollWidth, clientWidth } = scrollRef.current;

    // Show/hide scroll buttons
    setShowLeftButton(scrollLeft > 0);
    setShowRightButton(scrollLeft < scrollWidth - clientWidth - 10);
  };

  const scroll = (direction: "left" | "right") => {
    if (!scrollRef.current || isScrolling) return;

    setIsScrolling(true);
    const scrollAmount = direction === "left" ? -300 : 300;

    scrollRef.current.scrollBy({
      left: scrollAmount,
      behavior: "smooth",
    });

    // Reset isScrolling after animation completes
    setTimeout(() => {
      setIsScrolling(false);
    }, 300);
  };

  useEffect(() => {
    const scrollContainer = scrollRef.current;
    if (scrollContainer) {
      scrollContainer.addEventListener("scroll", handleScroll);
      return () => {
        scrollContainer.removeEventListener("scroll", handleScroll);
      };
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div className="relative">
      {/* Left scroll button */}
      <button
        onClick={() => scroll("left")}
        className={`absolute left-0 top-1/2 -translate-y-1/2 z-10 bg-white/80 hover:bg-white rounded-full p-2 shadow-lg transition-opacity ${
          showLeftButton ? "opacity-100" : "opacity-0"
        }`}
        aria-label="Scroll left"
        disabled={isScrolling}
      >
        <ChevronLeft className="h-6 w-6 text-gray-600" />
      </button>

      {/* Images container */}
      <div
        ref={scrollRef}
        className="flex overflow-x-auto snap-x snap-mandatory hide-scrollbar"
        style={{
          scrollbarWidth: "none",
          msOverflowStyle: "none",
        }}
      >
        {images.map((image) => (
          <div
            key={image.id}
            className="flex-none w-full md:w-80 snap-center px-2"
          >
            <div className="h-64 overflow-hidden rounded-lg">
              <img
                src={image.src}
                alt={image.alt}
                className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                draggable={false}
              />
            </div>
          </div>
        ))}
      </div>

      {/* Right scroll button */}
      <button
        onClick={() => scroll("right")}
        className={`absolute right-0 top-1/2 -translate-y-1/2 z-10 bg-white/80 hover:bg-white rounded-full p-2 shadow-lg transition-opacity ${
          showRightButton ? "opacity-100" : "opacity-0"
        }`}
        aria-label="Scroll right"
        disabled={isScrolling}
      >
        <ChevronRight className="h-6 w-6 text-gray-600" />
      </button>

      {/* Custom CSS for hiding scrollbar */}
      <style>{`
        .hide-scrollbar::-webkit-scrollbar {
          display: none;
        }
      `}</style>
    </div>
  );
};

// Component for displaying event dates
const EventDates: FC<{ dates: EventDate[] }> = ({ dates }) => {
  return (
    <div className="space-y-4">
      {dates.map((eventDate) => (
        <Card
          key={eventDate.id}
          className="shadow hover:shadow-md transition-shadow"
        >
          <CardContent className="p-4">
            <div className="flex flex-col sm:flex-row justify-between items-start gap-2">
              <div>
                <h4 className="font-semibold">{eventDate.title}</h4>
                <p className="text-gray-600 text-sm">{eventDate.location}</p>
              </div>
              <div className="bg-sky-100 text-sky-800 px-3 py-1 rounded-full text-sm font-medium self-start sm:self-center">
                {new Date(eventDate.date).toLocaleDateString("cs-CZ", {
                  day: "numeric",
                  month: "long",
                  year: "numeric",
                })}
              </div>
            </div>
          </CardContent>
        </Card>
      ))}
    </div>
  );
};

// Main EventPage component
const EventsPage: FC = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-sky-50 to-sky-100 dark:from-gray-900 dark:to-gray-800 py-8">
      {/* Hero Section */}
      <div className="relative w-full">
        <img
          src="/images/RBtitle.jpg"
          alt="Banner"
          className="w-full h-[300px] md:h-[400px] object-cover"
        />
        <div className="absolute inset-0 bg-black/30">
          <div className="h-full flex items-center justify-center px-4">
            <div className="text-center bg-white/80 rounded-lg p-4 md:p-8 max-w-[90%] md:max-w-2xl">
              <h1 className="font-primary text-2xl md:text-4xl font-medium mb-2 md:mb-4 text-sky-600">
                Naše Akce
              </h1>
            </div>
          </div>
        </div>
      </div>
      <div className="max-w-7xl mx-auto px-4">
        {/* Event cards */}
        <div className="space-y-12">
          {events.map((event) => (
            <Card
              key={event.id}
              className="p-4 md:p-6 shadow-lg hover:shadow-xl transition-shadow"
            >
              <CardHeader className="px-0 md:px-2">
                <CardTitle className="text-2xl font-primary text-sky-600">
                  {event.title}
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-6 p-0 md:p-2">
                {/* Image gallery */}
                <div className="mb-6">
                  <ImageGallery images={event.images} />
                </div>

                {/* Two column layout for description and dates on desktop */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {/* Description */}
                  <Card className="shadow">
                    <CardContent className="p-4">
                      <h3 className="text-lg font-medium mb-2 text-sky-600">
                        O akci
                      </h3>
                      {event.id === "career-speeddating" ? (
                        <p className="text-gray-700">
                          🔥 Hledáš ideální start své kariéry? Nebojíš se nových
                          výzev a chceš se setkat s top firmami na trhu? 🔥{" "}
                          <br />
                          Přijď na náš jedinečný Kariérní Speed-Dating a najdi
                          svůj "match"! 🎯 <br />
                          Připoj se k nám na akci, která spojuje ambiciózní
                          studenty zajímající se o project management, HR a
                          marketing s předními společnostmi ze svých oblastí.
                          Čeká tě rychlé a efektivní setkání se zástupci firem,
                          kde máš 7 minut na to, abys je zaujal a zjistil, zda
                          jste pro sebe ti praví. <br />
                          Registrace: ještě nezačala{" "}
                        </p>
                      ) : (
                        <p className="text-gray-700">{event.description}</p>
                      )}
                    </CardContent>
                  </Card>

                  {/* Dates */}
                  <div>
                    <h3 className="text-lg font-medium mb-2 text-sky-600">
                      Nadcházející termíny
                    </h3>
                    <EventDates dates={event.dates} />
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
        <PartnersCard />
      </div>
    </div>
  );
};

export default EventsPage;
