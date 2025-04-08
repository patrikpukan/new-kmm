import { FC } from "react";
import { Card } from "@/components/ui/card";
import ScrollableCards from "@/components/ScrollableCards";
import { useTranslation } from "react-i18next";
import PartnersPage from "./PartnersPage";
import PartnersCard from "@/components/PartnersCard";

const HomePage: FC = () => {
  const { t } = useTranslation();

  return (
    <div className="min-h-screen bg-gradient-to-b from-sky-50 to-sky-100 dark:from-gray-900 dark:to-gray-800">
      {/* Hero Section */}
      <div className="relative w-full">
        <img
          src="/images/DSC4824.jpg"
          alt="Banner"
          className="w-full h-[300px] md:h-[400px] object-cover"
        />
        <div className="absolute inset-0 bg-black/30">
          <div className="h-full flex items-center justify-center px-4">
            <div className="text-center bg-white/80 rounded-lg p-4 md:p-8 max-w-[90%] md:max-w-2xl">
              <h1 className="font-primary text-2xl md:text-4xl font-medium mb-2 md:mb-4 text-sky-600">
                {t("mainInfo.mainTitle")}
              </h1>
              <p className="font-primary text-base md:text-lg text-gray-700">
                {t("mainInfo.mainDescription")}
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* About Section */}
      <div className="w-full max-w-5xl mx-auto px-4 py-8">
        <Card className="p-4 md:p-6 shadow-lg hover:shadow-xl transition-shadow">
          <div className="flex flex-col md:flex-row items-center gap-6">
            <div className="flex-1">
              <h2 className="text-xl font-primary font-semibold text-sky-600 mb-3">
                {t("mainInfo.mainAboutUsTitle")}
              </h2>
              <p className="text-gray-700 leading-relaxed text-sm">
                {t("mainInfo.mainAboutUsText")}
              </p>
            </div>
            <div className="w-full md:w-60 h-48 md:h-60 rounded-lg overflow-hidden">
              <img
                src="/images/HomePage/4.webp"
                alt="KMM Team"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </Card>
      </div>

      <ScrollableCards />

      {/* Feature Cards */}
      <div className="flex flex-col md:flex-row justify-center gap-4 md:gap-8 p-4 md:p-8">
        <Card className="flex-1 p-4 md:p-6 bg-sky-50 hover:bg-sky-300 transition-colors">
          <h3 className="font-primary text-lg md:text-xl text-sky-600 mb-3 md:mb-4">
            {t("mainCards.cardWorkshop.title")}
          </h3>
          <p className="text-gray-700 text-sm md:text-base">
            {t("mainCards.cardWorkshop.text")}{" "}
          </p>
        </Card>
        <Card className="flex-1 p-4 md:p-6 bg-sky-50 hover:bg-sky-300 transition-colors">
          <h3 className="font-primary text-lg md:text-xl text-sky-600 mb-3 md:mb-4">
            {t("mainCards.cardSpeeddating.title")}
          </h3>
          <p className="text-gray-700 text-sm md:text-base">
            {t("mainCards.cardSpeeddating.text")}
          </p>
        </Card>
        <Card className="flex-1 p-4 md:p-6 bg-sky-50 hover:bg-sky-300 transition-colors">
          <h3 className="font-primary text-lg md:text-xl text-sky-600 mb-3 md:mb-4">
            {t("mainCards.cardNetworking.title")}
          </h3>
          <p className="text-gray-700 text-sm md:text-base">
            {t("mainCards.cardNetworking.text")}
          </p>
        </Card>
      </div>

      {/* Quote Section */}
      <div className="w-full max-w-5xl mx-auto px-4 py-8">
        <Card className="p-4 md:p-6 shadow-lg hover:shadow-xl transition-shadow">
          <div className="flex flex-col md:flex-row items-center gap-6">
            <div className="w-full md:w-60 h-48 md:h-60 rounded-lg overflow-hidden">
              <img
                src="/images/Members/management/SamuelG.jpg"
                alt="Tomáš Kováč"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="flex-1 flex flex-col justify-center">
              <div className="mb-4 md:mb-6">
                <p className="text-gray-700 leading-relaxed text-base md:text-lg italic">
                  " Ľudia hovoria, že nemôžem robiť dve veci naraz. Majú pravdu
                  - ja ich robím aspoň štyri. Stačí odhodlanie, priestor,
                  podpora a tím šikovných ľudí - to všetko som v KMM našiel."
                </p>
              </div>
              <div>
                <p className="text-sky-600 font-primary font-semibold">
                  Samuel Graňák
                </p>
                <p className="text-gray-500 text-sm">
                  prezident Klubu mladých manažerů
                </p>
              </div>
            </div>
          </div>
        </Card>
        <PartnersCard />
      </div>
    </div>
  );
};

export default HomePage;
