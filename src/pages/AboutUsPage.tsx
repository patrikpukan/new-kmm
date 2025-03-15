import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import PartnersPage from "./PartnersPage";

const AboutUsPage = () => {
  const departments = {
    leadership: {
      title: "Vedení klubu",
      members: [
        {
          name: "Samuel Graňák",
          role: "Prezident",
          bio: "Nájdete ma väčšinou v kníhkupectve, kde rozmýšľam nad novou knihou a rozoberám problémy ľudstva s náhodnými okoloidúcimi",
          image: "/images/Members/management/SamuelG.jpg",
        },
        {
          name: "Patrik Pukán",
          role: "Head of Marketing",
          bio: "Večný študent, občasný nestíhač, ale inak celkom chill guy.",
          image: "/images/Members/management/PatrikP.jpg",
        },
        {
          name: "Zdenka Havlová",
          role: "Head of Event Planning",
          bio: "Time management je môj najväčší (ne)priateľ. Za to, si rada posedím pri dobrej káve, prečítam knihu alebo vybehnem na túru do Tatier.",
          image: "/images/Members/management/ZdenkaH.jpg",
        },
      ],
    },
    marketing: {
      title: "Marketing",
      members: [
        {
          name: "Dávid Čeliš",
          bio: "Ajťák ze Sudet s duší introverta, energií časované bomby a dochvilností českých drah. Jestli něco hoří, pravděpodobně to není můj problém…",
          image: "/images/Members/marketing/DavidC.webp",
        },
        {
          name: "Eliška Bardynová",
          bio: "Nedokážu moc říct ne, takže když mi řekneš skoč z letadla, tak skočim, ale aspoň pak nemám fomo.",
          image: "/images/Members/marketing/EliskaB.JPG",
        },
        {
          name: "Klára Taterová",
          bio: "Klidná mysl a kreativní duše, která se nezastaví před žádnou výzvou, ať už jde o nové dobrodružství nebo polemizování o světě.",
          image: "/images/Members/marketing/KlaraT.jpg",
        },
        {
          name: "Lucie Benešová",
          bio: "Na fotce vypadám vážně, ale ve skutečnosti se pořád směju.✨️ Když zrovna nepeču dortík🎂, jsem pravděpodobně cooked🎀 – a to nejen v kuchyni. 💅🏻",
          image: "/images/Members/marketing/LucieB.JPG",
        },

        {
          name: "Šárka Koudelková",
          bio: "Miluju kyselé okurky. Fakt.",
          image: "/images/Members/marketing/SarkaK.webp",
        },
        {
          name: "Veronika Kyselová",
          bio: "Jsem intolerantní na laktózu, ale k obědu si ten smažák klidně dám. Co to o mně vypovídá? Nebojím se výzev a jejich důsledků.",
          image: "/images/Members/marketing/VeronikaK.jpg",
        },
      ],
    },
    eventPlanning: {
      title: "Event Planning",
      members: [
        {
          name: "Alexandra Šustková",
          bio: "Doplníme :)",
          image: "/images/Members/event/AlexandraS.webp",
        },
        {
          name: "Eduard Jirásko",
          bio: "Ještě jsem se nenaučil jen tak sedět a nic nedělat. To znamená, že furt vymýšlím, co budu dál, a potom občas lituju, kolik jsem si toho zase naplánoval.",
          image: "/images/Members/event/EduardJ.jpg",
        },
        {
          name: "Jakub Horňák",
          bio: "Môj kompas ukazuje vždy tam, kde je vzrušo – či už na horách, pri športoch alebo na ďalšej ceste do neznáma",
          image: "/images/Members/event/JakubH.jpeg",
        },
        {
          name: "Ján Kantorák",
          bio: "Raz si dole, raz si hore – taký je šport. Pochádzam z Lučenca, takže si asi viete predstaviť, kde sa na tejto osi nachádzam ja.",
          image: "/images/Members/event/JanK.jpg",
        },
        {
          name: "Hoai Nhu Le",
          bio: "Když mě něco baví, tak v tom opravdu vydržím. Např. doteď hraju Hayday:)",
          image: "/images/Members/event/HoaiNhuLe.JPG",
        },
        {
          name: "Lubomír Mach",
          bio: "Doplníme :)",
          image: "/images/Members/event/LubomirM.jpg",
        },
        {
          name: "Michal Procházka",
          bio: "Doplníme :)",
          image: "/images/Members/event/MichalP.jpg",
        },

        {
          name: "Petr Malík",
          bio: "Dvojitý agent - dopoledne člen klubu KMM, odpoledne Ambasador Flex Academy na naší škole. ",
          image: "/images/Members/event/PetrM.jpeg",
        },
        {
          name: "Soňa Tomčalová",
          bio: "Doplníme :)",
          image: "/images/Members/event/SonaTomcalova.jpg",
        },
        {
          name: "Nikola Vožická",
          bio: "Doplníme :)",
          image: "/images/Members/event/NikolaV.jpg",
        },
        {
          name: "Tereza Albertová",
          bio: "Terka cestovatelka",
          image: "/images/Members/event/TerezaA.jpg",
        },
        {
          name: "Adiyza Zhahel",
          bio: "Polyglot mezi ekonomy. Nevyznám se ve fotbalu, ale byla jsem na zápase Ligy mistrů. Neumím plavat, ale půl roku jsem žila u moře ve Španělsku. Asiatka, ale nejím pálivé jídlo.",
          image: "/images/Members/event/AdiyaZ.jpg",
        },
        {
          name: "Lucie Sečkařová",
          bio: "Můj život je jako dobrá písnička – trochu improvizace, hodně energie a vždycky místo pro nové zážitky. Když zrovna necestuji nebo nezpívám, najdete mě u dobré knihy nebo ve fitku.",
          image: "/images/Members/event/LucieS.jpeg",
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
        <h3 className="font-semibold text-lg">{member.name}</h3>
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
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
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
                  oddělení, do které spadá Planning, Marketing, Business
                  Development a Projects. Každému týmu byl přirazený vedoucí,
                  který začal dohlížet na naplňování klubových cílů. V této fázi
                  rozvoje se klub zároveň rozhodl navázat externí spolupráce s
                  partnery z řad firem, které by studentům a klubu přinesly
                  přidanou hodnotu.
                </p>
              </div>
            </CardContent>
          </Card>
        </section>

        {/* Department Sections */}
        {Object.entries(departments).map(([key, data]) =>
          renderDepartment(key, data)
        )}

        {/* Call to Action */}
        <section className="text-center py-8">
          <Card className="p-6 bg-sky-50">
            <CardContent>
              <h2 className="text-2xl font-primary text-sky-600 mb-4">
                Přidej se k nám!
              </h2>
              <p className="mb-4">
                Kontaktuj nás přes facebook nebo vyplň formulář na pravé straně
                webu.
              </p>
              <a
                href="http://www.facebook.com/klubmladychmanazeru/"
                className="inline-flex items-center bg-sky-600 text-white px-4 py-2 rounded hover:bg-sky-700 transition-colors"
                target="_blank"
                rel="noopener noreferrer"
              >
                Spoj se s námi
              </a>
            </CardContent>
          </Card>
        </section>
        <PartnersPage />
      </div>
    </div>
  );
};

export default AboutUsPage;
