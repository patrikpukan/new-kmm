import { FC } from "react";
import { Card } from "@/components/ui/card";
import PartnersCard from "@/components/PartnersCard";

const ContactPage: FC = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-sky-50 to-sky-100 dark:from-gray-900 dark:to-gray-800">
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
                Kontakt
              </h1>
            </div>
          </div>
        </div>
      </div>

      {/* Contact Info Section */}
      <div className="max-w-7xl mx-auto px-4 py-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Leadership Section */}
          <Card className="p-6 shadow-lg">
            <h2 className="text-xl font-primary font-semibold text-sky-600 mb-6">
              Vedení klubu
            </h2>

            <div className="space-y-8">
              {/* President */}
              <div>
                <h3 className="text-lg font-semibold mb-1">Prezidentka</h3>
                <p className="font-primary font-semibold">Soňa Tomčalová</p>
                <a
                  href="mailto:sont07@vse.cz"
                  className="text-sky-600 hover:text-sky-700"
                >
                  toms07@vse.cz{" "}
                </a>
              </div>
              {/* BD */}
              <div>
                <h3 className="text-lg font-semibold mb-1">
                  Head of Business Development
                </h3>
                <p className="font-primary font-semibold">Samuel Graňák</p>
                <a
                  href="mailto:gras03@vse.cz"
                  className="text-sky-600 hover:text-sky-700"
                >
                  gras03@vse.cz
                </a>
              </div>
              {/* Event Planning */}
              <div>
                <h3 className="text-lg font-semibold mb-1">
                  Head of Event Planning
                </h3>
                <p className="font-primary font-semibold">Michal Procházka</p>
                <a
                  href="mailto:gras03@vse.cz"
                  className="text-sky-600 hover:text-sky-700"
                >
                  prom30@vse.cz
                </a>
              </div>

              {/* Marketing */}
              <div>
                <h3 className="text-lg font-semibold mb-1">
                  Head of Marketing
                </h3>
                <p className="font-primary font-semibold">Šárka Koudelková</p>
                <a
                  href="mailto:pukp00@vse.cz"
                  className="text-sky-600 hover:text-sky-700"
                >
                  kous09@vse.cz
                </a>
              </div>
            </div>
          </Card>

          {/* Contact Info Card */}
          <Card className="p-6 shadow-lg">
            <h2 className="text-xl font-primary font-semibold text-sky-600 mb-6">
              Kontaktní informace
            </h2>

            <div className="space-y-6">
              <div>
                <h3 className="text-lg font-semibold mb-2">Email</h3>
                <a
                  href="mailto:tym@kmm.cz"
                  className="text-sky-600 hover:text-sky-700"
                >
                  tym@kmm.cz
                </a>
              </div>

              <div>
                <h3 className="text-lg font-semibold mb-2">Adresa</h3>
                <div className="space-y-1">
                  <p className="font-semibold">Klub mladých manažerů, z.s.</p>
                  <p>nám. W. Churchilla 1938/4</p>
                  <p>130 67 Praha 3 - Žižkov</p>
                  <p>IČ: 193 132 50</p>
                </div>
              </div>
            </div>
          </Card>
        </div>

        {/* Map */}
        <div className="mt-8">
          <Card className="p-6 shadow-lg">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d538.1991330385772!2d14.440492920613048!3d50.08402820442391!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x470b95e2efaa4db9%3A0x9007d9c1f752550c!2zVsWgRQ!5e0!3m2!1scs!2scz!4v1660322281650!5m2!1scs!2scz"
              className="w-full h-96 rounded-lg"
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </Card>
        </div>
        <PartnersCard />
      </div>
    </div>
  );
};

export default ContactPage;
