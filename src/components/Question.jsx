import PropTypes from "prop-types";

const Question = ({ question, answer, isOpen, onClick }) => {
  return (
    <div className="border-b border-gray-300 transition-all duration-500">
      <button
        onClick={onClick}
        className="w-full flex justify-between items-center px-4 py-3
          text-sm sm:text-base md:text-lg font-semibold text-[#0b385f] 
          focus:outline-none bg-white hover:bg-[#e7f1fb] rounded-md
          transition-all duration-300 ease-in-out shadow-sm hover:shadow-md"
      >
        <span className="transition-all duration-300">{question}</span>
        <span
          className={`transform transition-transform duration-500 ${
            isOpen ? "rotate-180 scale-110" : "scale-100"
          } text-base sm:text-lg md:text-xl`}
        >
          ▼
        </span>
      </button>

      {/* Expanding Answer with Slide & Fade effect */}
      <div
        className={`transition-all duration-500 ease-in-out overflow-hidden ${
          isOpen
            ? "max-h-96 opacity-100 translate-y-0 py-3"
            : "max-h-0 opacity-0 -translate-y-2"
        }`}
      >
        <p className="px-4 py-2 text-sm sm:text-base text-[#1c2127] bg-[#f9fbfc] rounded-md shadow">
          {answer}
        </p>
      </div>
    </div>
  );
};

Question.propTypes = {
  question: PropTypes.string.isRequired,
  answer: PropTypes.string.isRequired,
  isOpen: PropTypes.bool.isRequired,
  onClick: PropTypes.func.isRequired,
};

export default Question;