import { useEffect, useRef, useState } from "react";
import { Card } from "@/components/ui/card";
import { ChevronLeft, ChevronRight } from "lucide-react";

const images = [
  {
    id: 1,
    src: "/images/HomePage/1.webp",
    alt: "Card 1",
  },
  {
    id: 2,
    src: "/images/HomePage/2.webp",
    alt: "Card 2",
  },
  {
    id: 3,
    src: "/images/HomePage/3.webp",
    alt: "Card 3",
  },
  {
    id: 4,
    src: "/images/HomePage/4.webp",
    alt: "Card 4",
  },
  {
    id: 5,
    src: "/images/HomePage/5.jpeg",
    alt: "Card 5",
  },
  {
    id: 6,
    src: "/images/HomePage/6.jpg",
    alt: "Card 6",
  },
];
const ScrollableCards = () => {
  const scrollRef = useRef<HTMLDivElement>(null);
  const [showLeftButton, setShowLeftButton] = useState(false);
  const [showRightButton, setShowRightButton] = useState(true);
  const [isScrolling, setIsScrolling] = useState(false);

  // Create three sets of images for infinite scroll effect
  const extendedImages = [...images, ...images, ...images];

  const handleScroll = () => {
    if (!scrollRef.current || isScrolling) return;

    const { scrollLeft, scrollWidth, clientWidth } = scrollRef.current;

    // When we reach the end of the first set or start of the last set
    if (
      scrollLeft < scrollWidth / 3 - clientWidth ||
      scrollLeft > (scrollWidth * 2) / 3
    ) {
      // Reset to the middle set
      const middlePosition = scrollWidth / 3;
      scrollRef.current.scrollLeft =
        middlePosition + (scrollLeft % (scrollWidth / 3));
    }

    // Show/hide scroll buttons
    setShowLeftButton(scrollLeft > 0);
    setShowRightButton(scrollLeft < scrollWidth - clientWidth - 10); // Added small buffer
  };

  const scroll = (direction: "left" | "right") => {
    if (!scrollRef.current || isScrolling) return;

    setIsScrolling(true);
    const cardWidth = 320; // Width of each card including gap
    const scrollAmount = direction === "left" ? -cardWidth : cardWidth;

    scrollRef.current.scrollBy({
      left: scrollAmount,
      behavior: "smooth",
    });

    // Reset isScrolling after animation completes
    setTimeout(() => {
      setIsScrolling(false);
    }, 300); // Match this with your transition duration
  };

  useEffect(() => {
    const scrollContainer = scrollRef.current;
    if (scrollContainer) {
      // Start at the middle set of images
      scrollContainer.scrollLeft = scrollContainer.scrollWidth / 3;

      // Debounced scroll handler
      let scrollTimeout: NodeJS.Timeout;
      const debouncedScroll = () => {
        if (scrollTimeout) clearTimeout(scrollTimeout);
        scrollTimeout = setTimeout(() => {
          handleScroll();
        }, 50);
      };

      scrollContainer.addEventListener("scroll", debouncedScroll);
      return () => {
        scrollContainer.removeEventListener("scroll", debouncedScroll);
        if (scrollTimeout) clearTimeout(scrollTimeout);
      };
    }
  }, []);

  return (
    <div className="relative max-w-7xl mx-auto px-4 py-12">
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

      {/* Cards container */}
      <div
        ref={scrollRef}
        className="flex overflow-x-auto snap-x snap-mandatory hide-scrollbar"
        style={{
          scrollbarWidth: "none",
          msOverflowStyle: "none",
        }}
      >
        {extendedImages.map((image, index) => (
          <div
            key={`${image.id}-${index}`}
            className="flex-none w-80 snap-center px-4"
          >
            <Card className="h-64 overflow-hidden shadow-lg hover:shadow-md transition-shadow duration-300">
              <img
                src={image.src}
                alt={image.alt}
                className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                draggable={false}
              />
            </Card>
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

export default ScrollableCards;
