import "./App.css";
import { useRef } from "react";
import Container from "./components/Container";
import Nav from "./components/Nav";
import FlexibleGrid from "./components/FlexibleGrid";
import Button from "./components/Button";
import UniqueSellingPoint from "./components/UniqueSellingPoint";
import { faBox } from "@fortawesome/free-solid-svg-icons";
import ReviewBlock from "./components/ReviewBlock";
import Footer from "./components/Footer";
import FrequentlyAskedQuestions from "./components/FrequentlyAskedQuestions";
import AssemblyTool from "./components/AssemblyTool";

export default function App() {
  const scrollRef = useRef();
  return (
    <>
      <Nav />
      <Container header={true} className="bg-light-green">
        <FlexibleGrid
          layout="1-1"
          align="center"
          reverseOrder={true}
          leftContent={
            <div className="flex flex-col gap-4 -mt-8">
              <div className="flex flex-col gap-0 md:gap-4">
                <h1>Jouw modulaire en duurzame starterswoning.</h1>
                <h2 className="text-green">Exact zoals jij het wilt!</h2>
              </div>
              <p>
                Stel jouw modulaire starterswoningwoning samen, bepaal de
                grootte, kies duurzame opties en zie direct hoe jouw droomhuis
                tot leven komt.
              </p>
              <Button
                variant="primary"
                onClick={() => {
                  const offsetTop = scrollRef.current?.offsetTop || 0;
                  window.scrollTo({
                    top: offsetTop - 100,
                    behavior: "smooth",
                  });
                }}
              >
                Stel Mijn Droomhuis Samen!
              </Button>
            </div>
          }
          rightContent={
            <img
              className="opacity-30 md:opacity-100"
              src="/header-house.png"
              alt="Bungalow modulair huis"
            />
          }
        />
      </Container>
      <Container>
        <FlexibleGrid
          layout="1-1"
          align="center"
          leftContent={
            <img
              src="/heat-pump.png"
              alt="Warmte pomp"
              className="h-32 md:h-auto object-cover rounded-3xl md:rounded-image"
            />
          }
          rightContent={
            <div className="flex flex-col gap-4">
              <h2>De woningen beschikken over een warmtepomp</h2>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce
                sed dolor quis ex accumsan volutpat. Maecenas molestie gravida
                eleifend.
              </p>
              <ul className="flex flex-col gap-2">
                <UniqueSellingPoint icon={faBox}>USP 1</UniqueSellingPoint>
                <UniqueSellingPoint icon={faBox}>USP 1</UniqueSellingPoint>
                <UniqueSellingPoint icon={faBox}>USP 1</UniqueSellingPoint>
              </ul>
            </div>
          }
        />
        <FlexibleGrid
          layout="1-1"
          align="center"
          reverseOrder={true}
          leftContent={
            <div className="flex flex-col gap-4">
              <h2>Maak zelf de keuze of, en hoeveel zonnepanelen je wilt</h2>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce
                sed dolor quis ex accumsan volutpat. Maecenas molestie gravida
                eleifend.
              </p>
              <ul className="flex flex-col gap-2">
                <UniqueSellingPoint icon={faBox}>USP 1</UniqueSellingPoint>
                <UniqueSellingPoint icon={faBox}>USP 1</UniqueSellingPoint>
              </ul>
            </div>
          }
          rightContent={
            <img
              src="/solar-panels.png"
              alt="Warmte pomp"
              className="h-32 md:h-auto object-cover rounded-3xl md:rounded-image"
            />
          }
        />
        <div ref={scrollRef}>
          <AssemblyTool />
        </div>
      </Container>
      <Container className="bg-light-green">
        <h2 className="text-center">Deze personen waren je voor</h2>
        <FlexibleGrid
          layout="1-1-1"
          leftContent={
            <ReviewBlock
              profilePicture="/user.png"
              title="Super blij met ons nieuwe huis!"
              body="We zijn zo blij met onze nieuwe woning! Het is energiezuinig, ruim en snel gebouwd. De zonnepanelen en slimme technologie maken het huis nog duurzamer. We raden het zeker aan!"
              rating={5}
            />
          }
          centerContent={
            <ReviewBlock
              profilePicture="/user.png"
              title="Perfecte oplossing voor onze eerste woning"
              body="Het huis is precies wat we zochten! Energiezuinig, comfortabel en met slimme technologieën. We zijn erg tevreden met de keuze die we hebben gemaakt!"
              rating={5}
            />
          }
          rightContent={
            <ReviewBlock
              profilePicture="/user.png"
              title="Echt een droomhuis!"
              body="Dit huis is precies wat we wilden! Energiezuinig, flexibel en met een geweldige indeling. Het bouwproces was snel en het voelt echt als thuis."
              rating={5}
            />
          }
        />
      </Container>
      <Container>
        <h2 className="text-center">Veelgestelde vragen</h2>
        <FrequentlyAskedQuestions
          items={[
            {
              question: "Hoe lang duurt het plaatsen van een woning?",
              answer:
                "Het plaatsen van een woning duurt meestal tussen de 2 en 4 weken, afhankelijk van het type woning en de locatie. Dankzij de modulaire opzet kunnen we snel en efficiënt bouwen, zodat je snel in je nieuwe huis kunt wonen.",
            },
            {
              question: "Zijn de woningen modulair?",
              answer:
                "Ja, onze woningen zijn volledig modulair. Dit betekent dat we de woningen kunnen aanpassen aan je wensen en snel kunnen bouwen. We bieden flexibele indelingen en kunnen de woning naar jouw behoeften configureren.",
            },
            {
              question: "Kan ik zelf de indeling bepalen?",
              answer:
                "Absoluut! We bieden verschillende modulaire indelingen, maar je hebt de vrijheid om de woning naar jouw smaak en behoeften aan te passen. Onze adviseurs helpen je graag bij het maken van de beste keuze.",
            },
            {
              question: "Hebben jullie een showroom?",
              answer:
                "Ja, we hebben een showroom waar je onze modulaire woningen in het echt kunt zien. Hier kun je de materialen en afwerkingen bekijken, en ervaren hoe het is om in een van onze woningen te wonen.",
            },
            {
              question: "Hoeveel woningen hebben jullie succesvol geplaatst?",
              answer:
                "We hebben al tientallen woningen succesvol geplaatst, en onze klanten zijn zeer tevreden over de kwaliteit en het comfort. We blijven groeien en zijn trots op elke woning die we afleveren.",
            },
          ]}
        />
        <h3 className="text-center">Heeft u nog andere vragen?</h3>
        <Button className="mx-auto" variant="secondary">
          Neem Contact Met Ons Op
        </Button>
      </Container>
      <Footer />
    </>
  );
}
