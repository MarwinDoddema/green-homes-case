import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Button from "./Button";
import { useState } from "react";
import { faCheck, faMinus, faPlus } from "@fortawesome/free-solid-svg-icons";
import Tag from "./Tag";

export default function AssemblyTool() {
  const options = {
    sizeOptions: {
      0: { size: 50, price: 90000, image: "/house-render.png" },
      1: { size: 62, price: 105000, image: "/house-render.png" },
      2: { size: 80, price: 140000, image: "/house-render.png" },
    },
    expansionOptions: {
      0: { name: "Schuifpui", price: 1200, image: "/house-render.png" },
      1: { name: "Terras", price: 8500, image: "/house-render.png" },
      2: { name: "Terras + Dak", price: 12000, image: "/house-render.png" },
    },
  };

  const [selectedSize, setSelectedSize] = useState(options.sizeOptions[0]);
  const [selectedExpansion, setSelectedExpansion] = useState(
    options.expansionOptions[0]
  );

  const selectedSizePrice = selectedSize.price;
  const selectedExpansionPrice = selectedExpansion.price;

  const [sliderValue, setSliderValue] = useState(6);
  const handleSliderChange = (e) => {
    setSliderValue(e.target.value);
  };

  const priceIncrement = 100;
  const solarPanelPrice =
    sliderValue === "0" ? 0 : 1000 + (sliderValue - 1) * priceIncrement;

  const [count, setCount] = useState(1);

  const increment = () => setCount(count < 6 ? count + 1 : 6);
  const decrement = () => setCount(count > 1 ? count - 1 : 1);
  const handleCountChange = (e) => {
    const value = parseInt(e.target.value, 10);
    setCount(isNaN(value) ? 0 : value);
  };

  const energyConsumption =
    count * 250 + selectedSize.size * 5 - sliderValue * 12;
  const estimatedEnergyCost = Math.max(energyConsumption * 0.25, 0);

  function formatCurrency(amount) {
    return new Intl.NumberFormat("nl-NL", {
      style: "currency",
      currency: "EUR",
      minimumFractionDigits: 2,
      maximumFractionDigits: 2,
    }).format(amount);
  }

  return (
    <div>
      <div className="bg-light-background-green p-4 md:p-7 rounded-t-2xl md:rounded-t-3xl flex flex-col gap-10">
        <div className="flex flex-col gap-2.5">
          <h2>Kies de grootte</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-2.5">
            {Object.values(options.sizeOptions).map((option) => (
              <label
                key={option.size}
                className={`p-5 bg-white border-2 rounded-xl md:rounded-3xl cursor-pointer transition-all hover:border-green ${
                  selectedSize.size === option.size
                    ? "border-green"
                    : "border-light-green"
                }`}
              >
                <input
                  type="radio"
                  name="size"
                  id={`size-${option.size}`}
                  value={option.size}
                  checked={selectedSize.size === option.size}
                  onChange={() => setSelectedSize(option)}
                  className="hidden"
                />
                <div className="flex justify-between items-center">
                  <div className="flex items-center gap-3">
                    <h3>{option.size}M²</h3>
                    <img
                      src={option.image}
                      alt="Woning"
                      className={`transition-all md:hidden block w-20 ${
                        selectedSize.size === option.size
                          ? ""
                          : "opacity-30 grayscale"
                      }`}
                    />
                  </div>

                  <div
                    className={`h-7 w-7 flex items-center justify-center rounded-lg border-2 transition-colors ${
                      selectedSize.size === option.size
                        ? "bg-dark-green border-dark-green"
                        : "bg-white border-light-green"
                    }`}
                  >
                    <FontAwesomeIcon
                      className="text-white text-xl"
                      icon={faCheck}
                    />
                  </div>
                </div>
                <img
                  src={option.image}
                  alt="Woning"
                  className={`transition-all hidden md:block ${
                    selectedSize.size === option.size
                      ? ""
                      : "opacity-30 grayscale"
                  }`}
                />
              </label>
            ))}
          </div>
        </div>
        <div className="flex flex-col gap-2.5">
          <h2>Opties voor buitenruimte</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-2.5">
            {Object.values(options.expansionOptions).map((option) => (
              <label
                key={option.name}
                className={`p-5 bg-white border-2  rounded-xl md:rounded-3xl cursor-pointer transition-all hover:border-green ${
                  selectedExpansion.name === option.name
                    ? "border-green"
                    : "border-light-green"
                }`}
              >
                <input
                  type="radio"
                  name="expansion"
                  id={`expansion-${option.name}`}
                  value={option.name}
                  checked={selectedExpansion.name === option.name}
                  onChange={() => setSelectedExpansion(option)}
                  className="hidden"
                />
                <div className="flex justify-between items-center">
                  <div className="flex items-center gap-3">
                    <h3>{option.name}</h3>
                    <img
                      src={option.image}
                      alt="Woning"
                      className={`transition-all md:hidden block w-20 ${
                        selectedExpansion.name === option.name
                          ? ""
                          : "opacity-30 grayscale"
                      }`}
                    />
                  </div>

                  <div
                    className={`h-7 w-7 flex items-center justify-center rounded-lg border-2 transition-colors ${
                      selectedExpansion.name === option.name
                        ? "bg-dark-green border-dark-green"
                        : "bg-white border-light-green"
                    }`}
                  >
                    <FontAwesomeIcon
                      className="text-white text-xl"
                      icon={faCheck}
                    />
                  </div>
                </div>
                <img
                  src={option.image}
                  alt="Woning"
                  className={`transition-all hidden md:block ${
                    selectedExpansion.name === option.name
                      ? ""
                      : "opacity-30 grayscale"
                  }`}
                />
              </label>
            ))}
          </div>
        </div>
        <div className="flex flex-col gap-3">
          <div className="flex flex-col gap-2">
            <label
              htmlFor="solarPanelRange"
              className="font-heading text-2xl md:text-3xl font-bold text-dark-green"
            >
              Aantal zonnepanelen
            </label>
            <input
              id="solarPanelRange"
              type="range"
              min={0}
              max={20}
              step="1"
              value={sliderValue}
              onChange={handleSliderChange}
              className="w-full max-w-96 h-2 bg-light-green rounded-lg appearance-none cursor-pointer accent-dark-green"
            />
            <span className="text-dark-green font-heading font-semibold">
              Aantal: {sliderValue}
            </span>
          </div>
        </div>
        <div className="flex flex-col gap-2.5">
          <label
            htmlFor="residentCount"
            className="font-heading text-2xl md:text-3xl font-bold text-dark-green"
          >
            Geef het aantal bewoners aan
          </label>
          <div className="flex items-center">
            <button
              onClick={decrement}
              className="w-9 h-9 flex items-center justify-center bg-white border-2 border-green transition-all hover:bg-light-green rounded-l-xl"
            >
              <FontAwesomeIcon
                icon={faMinus}
                className="font-heading text-dark-green font-bold"
              />
            </button>
            <input
              id="residentCount"
              type="text"
              value={count}
              onChange={handleCountChange}
              className="cursor-not-allowed pointer-events-none w-9 h-9 flex items-center justify-center font-heading text-dark-green text-center font-bold border-y-2 border-green"
            />
            <button
              onClick={increment}
              className="w-9 h-9 flex items-center justify-center bg-white border-2 border-green transition-all hover:bg-light-green rounded-r-xl"
            >
              <FontAwesomeIcon
                icon={faPlus}
                className="font-heading text-dark-green font-bold"
              />
            </button>
          </div>
        </div>
      </div>
      <div className="bg-dark-green p-7 rounded-b-3xl">
        <div className="flex justify-between flex-col md:flex-row gap-6 md:items-center">
          <div className="flex flex-col md:flex-row gap-6">
            <div>
              <p className="text-white font-bold text-heading mb-1">
                Geschatte energiekosten per maand
              </p>
              <Tag>{formatCurrency(estimatedEnergyCost.toFixed(2))}</Tag>
            </div>
            <div>
              <p className="text-white font-bold text-heading mb-1">
                Prijs van duurzame woning
              </p>
              <Tag>
                {formatCurrency(
                  selectedSizePrice + selectedExpansionPrice + solarPanelPrice
                )}
              </Tag>
            </div>
          </div>
          <Button variant="secondary">Vraag Offerte Aan!</Button>
        </div>
      </div>
    </div>
  );
}
