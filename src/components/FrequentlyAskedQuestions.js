import { faChevronCircleDown } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useState } from "react";

export default function FrequentlyAskedQuestions({ items }) {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleAccordion = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="mx-auto w-small-container max-w-full flex flex-col gap-2">
      {items.map((item, index) => (
        <div
          key={index}
          className="border-green border-2 rounded-3xl transition-all hover:bg-light-green"
        >
          <button
            onClick={() => toggleAccordion(index)}
            className="w-full flex justify-between gap-2 items-center p-4"
          >
            <h4 className="text-left">{item.question}</h4>
            <FontAwesomeIcon
              icon={faChevronCircleDown}
              className={`text-green transition-all text-xl ${
                openIndex === index ? "rotate-180" : ""
              }`}
            />
          </button>
          {openIndex === index && <p className="px-4 pb-4">{item.answer}</p>}
        </div>
      ))}
    </div>
  );
}
