import "./App.css";
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
                <h1>Jouw modulaire en duurzame droomwoning.</h1>
                <h2 className="text-green">Exact zoals jij het wilt!</h2>
              </div>
              <p>
                Stel jouw modulaire woning samen, bepaal de grootte, kies
                duurzame opties en zie direct hoe jouw droomhuis tot leven komt.
              </p>
              <Button variant="primary">Stel Mijn Droomhuis Samen!</Button>
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
        <AssemblyTool />
      </Container>
      <Container className="bg-light-green">
        <h2 className="text-center">Deze personen waren je voor</h2>
        <FlexibleGrid
          layout="1-1-1"
          leftContent={
            <ReviewBlock
              profilePicture="/user.png"
              title="Title 1"
              body="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce sed dolor quis ex accumsan volutpat. Maecenas molestie gravida eleifend."
              rating={4.5}
            />
          }
          centerContent={
            <ReviewBlock
              profilePicture="/user.png"
              title="Title 2"
              body="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce sed dolor quis ex accumsan volutpat. Maecenas molestie gravida eleifend."
              rating={5}
            />
          }
          rightContent={
            <ReviewBlock
              profilePicture="/user.png"
              title="Title 3"
              body="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce sed dolor quis ex accumsan volutpat. Maecenas molestie gravida eleifend."
              rating={0.5}
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
                "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce sed dolor quis ex accumsan volutpat. Maecenas molestie gravida eleifend.",
            },
            {
              question: "Zijn de woningen modulair?",
              answer:
                "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce sed dolor quis ex accumsan volutpat. Maecenas molestie gravida eleifend.",
            },
            {
              question: "Kan ik zelf de indeling bepalen?",
              answer:
                "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce sed dolor quis ex accumsan volutpat. Maecenas molestie gravida eleifend.",
            },
            {
              question: "Hebben jullie een showroom?",
              answer:
                "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce sed dolor quis ex accumsan volutpat. Maecenas molestie gravida eleifend.",
            },
            {
              question: "Hoeveel woningen hebben jullie succesvol geplaatst?",
              answer:
                "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce sed dolor quis ex accumsan volutpat. Maecenas molestie gravida eleifend.",
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
