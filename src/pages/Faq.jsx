import { useState, useEffect, useRef } from "react";
import Question from "../components/Question";
import Particles from "../components/Particles";

const theme = {
  eerieBlack: "#1C2127",
  berkeleyBlue: "#0B385F",
  uclaBlue: "#3373B0",
  columbiaBlue: "#BED4E9",
  aliceBlue: "#E7F1FB"
};

const faqSections = [
  {
    title: "General Info",
    faqs: [
      { question: "Who can participate?", answer: "It is open to students from all backgrounds, you are welcome to participate and showcase your skills." },
      { question: "Will this be conducted digitally or physically?", answer: "All the events and workshops will be conducted as an in-person event at the designated venue. Participants are required to be present in the venue to take part in it." },
    ],
  },
  {
    title: "Registration & Participation",
    faqs: [
      { question: "Should I register as a team?", answer: "Only individual registration is required. Participants will have the opportunity to collaborate during the event if needed." },
      { question: "Can we register on the spot?", answer: "Yes, on-spot registrations are allowed. However, it is advisable to register in advance to secure your participation and receive event details early." },
      { question: "Will all participants receive a certificate?", answer: "Yes, every participant will receive a certificate acknowledging their involvement." },
    ],
  },
  {
    title: "Workshops & Event Details",
    faqs: [
      { question: "What is the participation fee?", answer: "The registration fee is ₹500 per person. This includes access to all workshops, events, registration kit, and food during the event." },
      { question: "How should we pay the fees?", answer: "The registration fee should be paid using the ICICI Bank Portal. After making the payment, participants must enter the transaction number for verification. Once verified, the participant’s profile will be updated accordingly." },
      { question: "What events can we attend?", answer: "You can attend all the events of the particular department and workshops irrespective of the department chosen." },
    ],
  },
  {
    title: "Others",
    faqs: [
      { question: "Will accommodation be provided?", answer: "Accommodation is not provided. However, we're more than happy to assist with directions from major railway stations and bus stops." },
      { question: "Will meals be provided?", answer: "Yes, vegetarian meals will be provided during the afternoon for all registered participants." },
    ],
  },
];

const Faq = () => {
  const [openSection, setOpenSection] = useState(0);
  const [openQuestion, setOpenQuestion] = useState({});
  const [isVisible, setIsVisible] = useState(false);
  const faqRef = useRef(null);

  useEffect(() => {
    document.body.classList.add("overflow-x-hidden"); 
    return () => document.body.classList.remove("overflow-x-hidden");
  }, []);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.3 }
    );

    if (faqRef.current) {
      observer.observe(faqRef.current);
    }

    return () => {
      if (faqRef.current) {
        observer.unobserve(faqRef.current);
      }
    };
  }, []);

  const toggleQuestion = (sectionIndex, questionIndex) => {
    setOpenQuestion((prevState) => ({
      ...prevState,
      [sectionIndex]: prevState[sectionIndex] === questionIndex ? null : questionIndex,
    }));
  };

  return (
    <div
  className="relative h-full bg-sky-100 flex items-center justify-center overflow-auto w-full px-3 py-4 sm:px-6 sm:py-8 lg:py-10"
  ref={faqRef}
>

      <div className="absolute inset-0 w-full h-full">
        <Particles
          particleCount={200}
          particleSpread={10}
          speed={0.1}
          particleColors={["#ffffff", "#a2d2ff", "#bde0fe"]}
          moveParticlesOnHover={true}
          particleHoverFactor={2}
          alphaParticles={true}
          particleBaseSize={120}  // Slightly bigger particles
          sizeRandomness={1}
          cameraDistance={20}
          disableRotation={false}
          className="w-full h-full"
        />
      </div>

      {/* FAQ Content */}
      <div
        className={`relative z-10 transition-all duration-1000 ease-in-out w-full max-w-4xl px-3 sm:px-6 lg:px-8 ${
          isVisible ? "opacity-100 scale-100" : "opacity-0 scale-95"
        }`}
      >
        <h1
          className="text-center text-3xl sm:text-5xl font-extrabold tracking-tight"
          style={{
            background: `linear-gradient(to right, ${theme.eerieBlack}, ${theme.berkeleyBlue})`,
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
          }}
        >
          FAQs
        </h1>
        <div
          className="h-1 w-20 sm:w-28 mx-auto mt-2 sm:mt-3 rounded-full"
          style={{
            background: `linear-gradient(to right, ${theme.uclaBlue}, ${theme.columbiaBlue})`,
          }}
        ></div>

        {/* Category Buttons */}
        <div className="flex flex-wrap gap-2 justify-center mt-3 sm:mt-5">
          {faqSections.map((section, index) => (
            <button
              key={index}
              onClick={() => setOpenSection(index)}
              className={`px-4 py-2 sm:px-5 sm:py-2.5 rounded-full font-semibold text-white text-sm sm:text-base transition-all duration-500 shadow-md ${
                openSection === index ? "bg-[#0b385f] scale-105" : "bg-[#3373b0]"
              }`}
            >
              {section.title}
            </button>
          ))}
        </div>

        {/* Questions Section */}
        {openSection !== null && (
          <div className="mt-4 sm:mt-5 bg-white p-3 sm:p-5 rounded-xl shadow-lg w-full max-w-2xl mx-auto">
            {faqSections[openSection].faqs.map((faq, idx) => (
              <Question
                key={idx}
                question={faq.question}
                answer={faq.answer}
                isOpen={openQuestion[openSection] === idx}
                onClick={() => toggleQuestion(openSection, idx)}
              />
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default Faq;