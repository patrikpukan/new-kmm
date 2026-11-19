import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import PartnersCard from "@/components/PartnersCard";
import liIcon from "../assets/icons/LinkedIn_icon.svg.png";

const AboutUsPage = () => {
  const departments = {
    leadership: {
      title: "Vedení klubu",
      members: [
        {
          name: "Eduard Jirásko",
          role: "Prezident",
          bio: "Prezident",
          image: "/images/Members/management/EduardJ.jpg",
          linkedin: "https://www.linkedin.com/in/eduard-jir%C3%A1sko/",
        },
        {
          name: "Matej Lanko",
          role: "Head of Business Development",
          bio: "Ak chceš mať veľký biznis, musíš robiť kruh.",
          image: "/images/Members/management/MatejL.jpeg",
          linkedin: "https://www.linkedin.com/in/matej-lanko-510505274/",
        },

        {
          name: "Štepán Krátký",
          role: "Head of Event Planning",
          bio: "Head of Event Planning",
          image: "/images/Members/management/StepanK.jpg",
          linkedin: "https://www.linkedin.com/in/stepan-kratky-510505274/",
        },
        {
          name: "Eliška Bardynová",
          role: "Head of Marketing",
          bio: "Head of Marketing",
          image: "/images/Members/management/EliskaB.JPG",
          linkedin: "https://www.linkedin.com/in/eliska-bardynova-71714a260/",
        },
      ],
    },
    marketing: {
      title: "Marketing",
      members: [
        {
          name: "Patrik Pukán",
          bio: "Večný študent, občasný nestíhač, ale inak celkom chill guy.",
          image: "/images/Members/marketing/PatrikPuk.jpg",
          linkedin: "https://www.linkedin.com/in/patrik-pukan/",
        },
        {
          name: "Dominik Šebor",
          bio: "Moje svědomí je čisté. Nikdy jsem ho nepoužil.",
          image: "/images/Members/marketing/DominikS.jpg",
          linkedin: "https://www.linkedin.com/in/dominik-sebor-510505274/",
        },

        {
          name: "Eliška Pospíšilová",
          bio: "Permanent Koň",
          image: "/images/Members/marketing/EliskaP.jpg",
          linkedin:
            "https://www.linkedin.com/in/eli%C5%A1ka-posp%C3%AD%C5%A1ilov%C3%A1-5881a6334/",
        },
        {
          name: "Lucie Králová",
          bio: "Marketing",
          image: "/images/Members/marketing/LucieK.jpg",
          linkedin:
            "https://www.linkedin.com/in/lucie-kr%C3%A1lov%C3%A1-873026282/",
        },
        {
          name: "Šárka Koudelková",
          bio: "Marketing",
          image: "/images/Members/marketing/SarkaK.jpg",
          linkedin:
            "https://www.linkedin.com/in/%C5%A1%C3%A1rka-koudelkov%C3%A1-8a992a260/",
        },
        {
          name: "Ondřej Novák",
          bio: "Marketing",
          image: "/images/Members/marketing/OndrejN.jpeg",
          linkedin: "https://www.linkedin.com/in/ondrej-nov%C3%A1k-8a992a260/",
        },
        {
          name: "Lea Jakimičová",
          bio: "Marketing",
          image: "/images/Members/marketing/LeaJ.jpg",
        },
        {
          name: "Jozef Teplický",
          bio: "Marketing",
          image: "/images/Members/marketing/JozefT.jpg",
        },
        {
          name: "Matěj Novák",
          bio: "Marketing",
          image: "/images/Members/marketing/MatejN.jpg",
        },
        {
          name: "Linda Mrníková",
          bio: "Marketing",
          image: "/images/Members/marketing/LindaM.jpg",
        },
      ],
    },
    eventPlanning: {
      title: "Event Planning",
      members: [
        {
          name: "Michal Procházka",
          bio: "Event Planning",
          image: "/images/Members/event/MichalP.jpg",
          linkedin:
            "https://www.linkedin.com/in/alexandra-%C5%A1ustkov%C3%A1-403160263/",
        },
        {
          name: "Richard Tausinger",
          bio: "Ještě jsem se nenaučil jen tak sedět a nic nedělat. To znamená, že furt vymýšlím, co budu dál, a potom občas lituju, kolik jsem si toho zase naplánoval.",
          image: "/images/Members/event/RichardT.jpg",
          linkedin: "https://www.linkedin.com/in/eduard-jir%C3%A1sko/",
        },
        {
          name: "Jakub Horňák",
          bio: "Môj kompas ukazuje vždy tam, kde je vzrušo – či už na horách, pri športoch alebo na ďalšej ceste do neznáma",
          image: "/images/Members/event/JakubH.jpg",
          linkedin: "https://www.linkedin.com/in/jakub-hor%C5%88%C3%A1k/",
        },
        {
          name: "Andrea Havelková",
          bio: "Event Planning",
          image: "/images/Members/event/AndreaH.jpg",
          linkedin: "https://www.linkedin.com/in/jan-kantorak-prague/",
        },

        {
          name: "Klára Taterová",
          bio: "Klidná mysl a kreativní duše, která se nezastaví před žádnou výzvou, ať už jde o nové dobrodružství nebo polemizování o světě.",
          image: "/images/Members/event/KlaraT.jpg",
          linkedin:
            "https://www.linkedin.com/in/kl%C3%A1ra-taterov%C3%A1-347b302b2/",
        },

        {
          name: "Lucie Sečkařová",
          bio: "Můj život je jako dobrá písnička – trochu improvizace, hodně energie a vždycky místo pro nové zážitky. Když zrovna necestuji nebo nezpívám, najdete mě u dobré knihy nebo ve fitku.",
          image: "/images/Members/event/LucieS.jpg",
          linkedin:
            "https://www.linkedin.com/in/lucie-se%C4%8Dka%C5%99ov%C3%A1-914a16352/",
        },
        {
          name: "Vojtěch Černovský",
          bio: "Event Planning",
          image: "/images/Members/event/VojtechC.jpg",
        },
        {
          name: "Timotej Červeň",
          bio: "Event Planning",
          image: "/images/Members/event/TimotejC.jpg",
        },
        {
          name: "Ivana Pardubická",
          bio: "Event Planning",
          image: "/images/Members/event/IvanaP.jpg",
        },
        {
          name: "Nikol Hrubá",
          bio: "Event Planning",
          image: "/images/Members/event/NikolH.jpg",
        },
        {
          name: "Monika Gadasová",
          bio: "Event Planning",
          image: "/images/Members/event/MonikaG.jpg",
        },
      ],
    },
    businessDevelopment: {
      title: "Business Development",
      members: [
        {
          name: "Soňa Tomčalová",
          bio: "Život je jako dobrá káva, někdy tě nakopne, jindy se z toho prostě posreš.",
          image: "/images/Members/bd/SonaT.jpg",
          linkedin: "https://www.linkedin.com/in/so%C5%88atom%C4%8Dalov%C3%A1/",
        },
        {
          name: "Markéta Macháčková",
          bio: "Business Development",
          image: "/images/Members/bd/MarketaM.jpg",
          linkedin: "https://www.linkedin.com/in/marketa-machac-040301254/",
        },
        {
          name: "Patrik Piatka",
          bio: "Business Development",
          image: "/images/Members/bd/PatrikPia.jpg",
          linkedin: "https://www.linkedin.com/in/patrik-piatka-940201254/",
        },
        {
          name: "Kryštof Štěpánek",
          bio: "Business Development",
          image: "/images/Members/bd/KrystofS.jpg",
          linkedin:
            "https://www.linkedin.com/in/kry%C5%A1tof-%C5%A1t%C4%9Bp%C3%A1nek-557505274/",
        },
        {
          name: "Matěj Mirejovský",
          bio: "Business Development",
          image: "/images/Members/bd/MatejMir.jpg",
        },
        {
          name: "Matěj Mach",
          bio: "Business Development",
          image: "/images/Members/bd/MatejMac.jpg",
        },
        {
          name: "Nicol Macasová",
          bio: "Business Development",
          image: "/images/Members/bd/NicolM.jpg",
        },
      ],
    },
  };
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const renderMemberCard = (member: any) => (
    <Card key={member.name} className="overflow-hidden flex flex-col">
      <div className="relative pt-[100%]">
        {" "}
        {/* Creates a perfect square container */}
        <img
          src={member.image}
          alt={member.name}
          className="absolute inset-0 w-full h-full object-cover"
        />
      </div>
      <CardContent className="p-4 flex-1">
        <div className="flex justify-between items-start mb-2">
          <h3 className="font-semibold text-lg">{member.name}</h3>
          {member.linkedin && (
            <a
              href={member.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-700 hover:text-sky-600 transition-colors"
            >
              <img src={liIcon} alt="LinkedIn" className="h-5 w-5" />
            </a>
          )}
        </div>
        {member.role && (
          <p className="text-gray-600 text-sm mb-2">{member.role}</p>
        )}
        {member.bio && <p className="text-sm">{member.bio}</p>}
      </CardContent>
    </Card>
  );

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const renderDepartment = (department: string, data: any) => (
    <section key={department} className="mb-16">
      <h2 className="text-2xl font-primary text-sky-600 mb-6">{data.title}</h2>
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
        {data.members.map(renderMemberCard)}
      </div>
    </section>
  );

  return (
    <div className="min-h-screen bg-gradient-to-b from-sky-50 to-sky-100 dark:from-gray-900 dark:to-gray-800 py-8">
      {" "}
      <div className="max-w-7xl mx-auto px-4">
        {/* About Section */}
        <section className="mb-16">
          <Card className="p-6">
            <CardHeader>
              <CardTitle className="text-2xl font-primary text-sky-600">
                Historie klubu
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div>
                <h3 className="font-semibold text-lg mb-2">
                  Založení klubu (2005)
                </h3>
                <p>
                  Klub mladých manažerů byl založen v roce 2005. Tehdy klub
                  začínal s osmi členy a stejně jako dnes pořádal workshopy s
                  hosty a neformální akce v žižkovských podnicích. V této době
                  nebyli hosté z praxe na škole tak častí, proto byl klub
                  poměrně unikátní. Během začátků ještě neexistoval Facebook a
                  většina lidí měla mobily s tlačítky, hlavním komunikačním
                  kanálem tak byla nástěnka ve druhém patře staré budovy.
                </p>
              </div>
              <div>
                <h3 className="font-semibold text-lg mb-2">
                  KMM Alumni (2014)
                </h3>
                <p>
                  V roce 2014 už byla řada lidí, kteří prošli KMM poměrně
                  dlouhá. Na základě toho se klub rozhodl vytvořit program
                  Alumni. Tato komunita sestavená z bývalých členů klubu se
                  nepravidelně setkává na neformálních akcích a dlouhodobě
                  udržuje dobré vztahy.
                </p>
              </div>
              <div>
                <h3 className="font-semibold text-lg mb-2">
                  Nová perspektiva (2020)
                </h3>
                <p>
                  Velký růst našeho klubu jsme registrovali v roce 2020. Noví
                  členové nám rozproudili krev a začali jsme více rozšiřovat
                  portfolio akcí a projektů. V rámci rozvoje klubu se zavedla
                  nová a účinnější hierarchie pro efektivnější rozdělování
                  úkolů. Dali jsme si úsilí a vytvořili pevnou strukturu
                  oddělení, do které spadá Event Planning, Marketing a Business
                  Development. Každému týmu byl přirazený vedoucí, který začal
                  dohlížet na naplňování klubových cílů. V této fázi rozvoje se
                  klub zároveň rozhodl navázat externí spolupráce s partnery z
                  řad firem, které by studentům a klubu přinesly přidanou
                  hodnotu.
                </p>
              </div>
            </CardContent>
          </Card>
        </section>

        {/* Department Sections */}
        {Object.entries(departments).map(([key, data]) =>
          renderDepartment(key, data),
        )}

        {/* Call to Action */}
        <section className="text-center py-8">
          <Card className="p-6 bg-sky-50">
            <CardContent>
              <h2 className="text-2xl font-primary text-sky-600 mb-4">
                Přidej se k nám!
              </h2>
              <p className="mb-4">
                Kontaktuj nás přes Instagram nebo vyplň formulář na našem
                LinkTree níže.
              </p>
              <a
                href="https://linktr.ee/kmm_vse"
                className="inline-flex items-center bg-sky-600 text-white px-4 py-2 rounded hover:bg-sky-700 transition-colors"
                target="_blank"
                rel="noopener noreferrer"
              >
                Spoj se s námi
              </a>
            </CardContent>
          </Card>
        </section>
        <PartnersCard />
      </div>
    </div>
  );
};

export default AboutUsPage;
