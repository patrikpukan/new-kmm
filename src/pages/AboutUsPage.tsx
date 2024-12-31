import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const AboutUsPage = () => {
  const departments = {
    leadership: {
      title: "Vedení klubu",
      members: [
        {
          name: "Tomáš Kováč",
          role: "Prezident",
          bio: "Cez deň chief executive overthinker, večer partyboy. To znamená, že ak neriešim klub, prácu a školu, riešim random nápad zbúchaný pri raňajkách. A ak nič neriešim, roztáčam to na párty.",
          image: "/images/members/tomas.webp",
        },
        {
          name: "Patrik Pukán",
          role: "Head of Marketing",
          bio: "Študujem IT, no nemusím programovanie, zaujímam sa o urban planning a smart fungovanie miest. Voľnočasovo rád hikujem a pozerám ešporty.",
          image: "/images/members/patrik.webp",
        },
        {
          name: "Samuel Graňák",
          role: "Head of Event Planning",
          bio: "Nájdete ma väčšinou v kníhkupectve, kde rozmýšľam nad novou knihou a rozoberám problémy ľudstva s náhodnými okoloidúcimi.",
          image: "/images/members/samuel.webp",
        },
      ],
    },
    marketing: {
      title: "Marketing",
      members: [
        {
          name: "Martina Sabolová",
          bio: "Dokážem byť produktívna, hladná a pod tlakom zároveň, ale môj beauty sleep mi neberte. Inak som party shaker, trouble maker a challenge taker.",
          image: "/images/members/martina.webp",
        },
        {
          name: "Daniel Maťaš",
          bio: "Pochádzam z Michaloviec, čo je synonymum od 'prdel sveta'. Milujem vtipne spracované príspevky, seriál The Office a kvalitný segedín.",
          image: "/images/members/daniel.webp",
        },
        {
          name: "Veronika Kyselová",
          bio: "Jsem intolerantní na laktózu, ale k obědu si ten smažák klidně dám. Co to o mně vypovídá? Nebojím se výzev a jejich důsledků.",
          image: "/images/members/veronika.webp",
        },
      ],
    },
    eventPlanning: {
      title: "Event Planning",
      members: [
        {
          name: "Zdenka Havlová",
          bio: "Time management je môj najväčší (ne)priateľ. Za to, si rada posedím pri dobrej káve, prečítam knihu alebo vybehnem na túru do Tatier.",
          image: "/images/members/zdenka.webp",
        },
        {
          name: "Ján Kantorák",
          bio: "Raz si dole, raz si hore – taký je šport. Pochádzam z Lučenca, takže si asi viete predstaviť, kde sa na tejto osi nachádzam ja.",
          image: "/images/members/jan.webp",
        },
        {
          name: "Alexandra Šustková",
          image: "/images/members/alexandra.webp",
        },
      ],
    },
    itSupport: {
      title: "IT podpora",
      members: [
        {
          name: "Matej Centko",
          bio: "Neviem, ako som sa tu objavil. 🙂",
          image: "/images/members/matej.webp",
        },
        {
          name: "Tereza Kötelesová",
          bio: "Nerada sa ponáhľam, kebyže mám meškať, radšej neprídem vôbec. Mám rada mačky a kvalitný spánok.",
          image: "/images/members/tereza.webp",
        },
      ],
    },
  };
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const renderMemberCard = (member: any) => (
    <Card key={member.name} className="overflow-hidden">
      <div className="h-48 overflow-hidden">
        <img
          src={member.image}
          alt={member.name}
          className="w-full h-full object-cover"
        />
      </div>
      <CardContent className="p-4">
        <h3 className="font-semibold text-lg">{member.name}</h3>
        {member.role && (
          <p className="text-gray-600 text-sm mb-2">{member.role}</p>
        )}
        {member.bio && <p className="text-sm">{member.bio}</p>}
      </CardContent>
    </Card>
  );

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const renderDepartment = (department: any, data: any) => (
    <section key={department} className="mb-16">
      <h2 className="text-2xl font-primary text-sky-600 mb-6">{data.title}</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {data.members.map(renderMemberCard)}
      </div>
    </section>
  );

  return (
    <div className="min-h-screen bg-gradient-to-b from-sky-50 to-sky-100 dark:from-gray-900 dark:to-gray-800 py-8">
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
                  poměrně unikátní.
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
                  nová hierarchie pro efektivnější rozdělování úkolů.
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
      </div>
    </div>
  );
};

export default AboutUsPage;
