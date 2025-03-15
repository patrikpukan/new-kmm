import { FC } from "react";
import { Card } from "@/components/ui/card";

const PartnersPage: FC = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-sky-50 to-sky-100 dark:from-gray-900 dark:to-gray-800 py-8">
      <div className="max-w-7xl mx-auto px-4 space-y-8">
        <h1 className="text-3xl font-primary font-semibold text-sky-600 text-center">
          Naši partneři
        </h1>
        {/* First Partner Card */}
        <Card className="p-6 shadow-lg hover:shadow-xl transition-shadow">
          <div className="flex flex-col md:flex-row gap-6">
            {/* Image container with preserved aspect ratio */}
            <div className="w-full md:w-1/3 flex items-center">
              <img
                src="/images/PartnersPage/VSE.webp"
                alt="Partner 1"
                className="w-full max-h-64 object-contain rounded-lg"
              />
            </div>
            {/* Text on right */}
            <div className="flex-1 flex flex-col justify-center">
              <h2 className="text-2xl font-primary font-semibold text-sky-600 mb-4">
                <a
                  target="_blank"
                  rel="noopener noreferrer"
                  href="https://www.vse.cz"
                >
                  Vysoká škola ekonomická v Praze
                </a>
              </h2>
              <p className="text-gray-700 leading-relaxed">
                Vysoká škola ekonomická zaštiťuje působení našeho klubu již od
                začátku. Díky VŠE máme možnost vybírat do našich řad aktivní,
                spolehlivé a pracovité členy, kteří se podílejí na dalším
                rozvoji školy a klubu. S takovým partnerem máme možnost vytvářet
                něco nového, poznávat zajímavé lidi a prosazovat zajímavé
                projekty. VŠE nám jsou k dispozici taky se svými prostory, ktoré
                slouží k naši seberealizaci a projektovému plánování.
              </p>
            </div>
          </div>
        </Card>

        {/* Second Partner Card */}
        <Card className="p-6 shadow-lg hover:shadow-xl transition-shadow">
          <div className="flex flex-col md:flex-row-reverse gap-6">
            {/* Image container with preserved aspect ratio */}
            <div className="w-full md:w-1/3 flex items-center">
              <img
                src="/images/PartnersPage/CSAS.webp"
                alt="Partner 2"
                className="w-full max-h-64 object-contain rounded-lg"
              />
            </div>
            {/* Text on left */}
            <div className="flex-1 flex flex-col justify-center">
              <h2 className="text-2xl font-primary font-semibold text-sky-600 mb-4">
                <a
                  target="_blank"
                  rel="noopener noreferrer"
                  href="https://www.csas.cz"
                >
                  Česká spořitelna
                </a>
              </h2>
              <p className="text-gray-700 leading-relaxed">
                Česká spořitelna je generálním partnerem VŠE a studentských
                spolků a již dlouhé roky přispívá k rozvoji a vzdělávání
                studentů. Zástupci ČS s náma aktivně spolupracují a snaží se
                přizpůsobit našim potřebám aby jejich pomoc byla co
                nejúčinnější.Česká Spořka patří zároveň mezi největší
                zaměstnavatele v ČR a poskytují tak studentům příležitost začít
                nebo posunout jejich kariéru přímo na svých židlích.
              </p>
            </div>
          </div>
        </Card>

        {/* Third Partner Card */}
        <Card className="p-6 shadow-lg hover:shadow-xl transition-shadow">
          <div className="flex flex-col md:flex-row gap-6">
            {/* Image container with preserved aspect ratio */}
            <div className="w-full md:w-1/3 flex items-center">
              <img
                src="/images/PartnersPage/EY.webp"
                alt="Partner 3"
                className="w-full max-h-64 object-contain rounded-lg"
              />
            </div>
            {/* Text on right */}
            <div className="flex-1 flex flex-col justify-center">
              <h2 className="text-2xl font-primary font-semibold text-sky-600 mb-4">
                <a
                  target="_blank"
                  rel="noopener noreferrer"
                  href="https://www.cestasey.cz"
                >
                  EY
                </a>
              </h2>
              <p className="text-gray-700 leading-relaxed">
                EY působí v České republice již od roku 1991. V současné době má
                přes 1 400 zaměstnanců, kteří pracují v kancelářích v Praze,
                Brně a Ostravě. Služby z oblasti auditu, daní, práva,
                consultingu, IT, strategií a transakcí EY poskytuje téměř dvěma
                tisícovkám českých a mezinárodních klientů. Mezi ně se řadí
                dvacet firem z české TOP 30, ale radí i start-upům nebo
                začínajícím podnikatelům. Studentům a absolventům EY nabízí řadu
                pracovních příležitostí, které pomohou nastartovat kariéru ve
                světě byznysu.
              </p>
            </div>
          </div>
        </Card>
      </div>
    </div>
  );
};

export default PartnersPage;
