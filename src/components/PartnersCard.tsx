import { FC, useEffect, useRef, useState } from "react";
import { Card } from "@/components/ui/card";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { useSwipeable } from "react-swipeable";
import { AnimatePresence, motion } from "framer-motion";

interface Partner {
  name: string;
  src: string;
}

const partners: Partner[] = [
  { name: "VSE", src: "/images/PartnersPage/VSE.webp" },
  { name: "CSAS", src: "/images/PartnersPage/CSAS.webp" },
  { name: "EY", src: "/images/PartnersPage/EY.webp" },
];

interface PartnersCardProps {
  name?: string;
}

const PartnersCard: FC<PartnersCardProps> = () => {
  const [index, setIndex] = useState(0);
  const [direction, setDirection] = useState(0);
  const intervalRef = useRef<NodeJS.Timeout | null>(null);
  const isMobile = typeof window !== "undefined" && window.innerWidth < 768;

  const next = () => {
    setDirection(1);
    setIndex((prev) => (prev + 1) % partners.length);
  };

  const prev = () => {
    setDirection(-1);
    setIndex((prev) => (prev - 1 + partners.length) % partners.length);
  };


  useEffect(() => {
    intervalRef.current = setInterval(() => {
      next();
    }, 7000);
    return () => {
      if (intervalRef.current) {
        clearInterval(intervalRef.current);
      }
    };
  }, []);

  const swipeHandlers = useSwipeable({
    onSwipedLeft: () => next(),
    onSwipedRight: () => prev(),
    trackMouse: true,
    delta: 10,
    preventScrollOnSwipe: true
  });

  return (
    <Card className="p-6 shadow-lg hover:shadow-xl transition-shadow my-8">
      <div className="flex flex-col items-center gap-6">
        <h2 className="text-xl font-bold">Podporují nás</h2>
        <div className="relative w-full flex justify-center items-center overflow-hidden" {...(isMobile ? swipeHandlers : {})}>
          {isMobile && (
            <button onClick={prev} className="absolute left-2 z-10 bg-white p-1 rounded-full shadow">
              <ChevronLeft className="text-black w-5 h-5" />
            </button>
          )}

          <div className="flex flex-wrap justify-center gap-8 md:gap-12 w-full">
            {isMobile ? (
              <div className="w-full max-w-xs sm:max-w-sm h-24 relative">
                <AnimatePresence initial={false} custom={direction}>
                  <motion.img
                    key={partners[index].name}
                    src={partners[index].src}
                    alt={partners[index].name}
                    custom={direction}
                    initial={{ x: direction > 0 ? 100 : -100, opacity: 0, scale: 0.95 }}
                    animate={{ x: 0, opacity: 1, scale: 1 }}
                    exit={{ x: direction < 0 ? 100 : -100, opacity: 0, scale: 0.95 }}
                    transition={{ duration: 0.4 }}
                    className="absolute object-contain left-0 right-0 top-0 bottom-0 m-auto max-h-full max-w-full"
                  />
                </AnimatePresence>
              </div>
            ) : (
              partners.map((partner) => (
                <div key={partner.name} className="flex items-center justify-center h-20 w-40 sm:w-48 md:w-52">
                  <img
                    src={partner.src}
                    alt={partner.name}
                    className="max-h-full max-w-full object-contain transition-transform duration-300 hover:scale-105"
                  />
                </div>
              ))
            )}
          </div>

          {isMobile && (
            <button onClick={next} className="absolute right-2 z-10 bg-white p-1 rounded-full shadow">
              <ChevronRight className="text-black w-5 h-5" />
            </button>
          )}
        </div>
      </div>
    </Card>
  );
};

export default PartnersCard;