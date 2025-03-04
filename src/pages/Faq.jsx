import { useState, useEffect, useRef } from "react";
import Question from "../components/Question";

const faqSections = [
  {
    title: "General Info",
    faqs: [
      { question: "Who can participate?", answer: "It is open to students from all backgrounds, you are welcome to participate and showcase your skills." },
      { question: "Will this be conducted digitally or physically?", answer: "All the events and workshops will be conducted as an in-person event at the designated venue. Participants are required to be present to take part in the competition and activities." },
      { question: "What if I have queries that are not answered in the FAQ?", answer: "If you have any additional questions, feel free to check the Contact Us page for ways to reach out. We are happy to assist you." }
    ],
  },
  {
    title: "Workshops & Event Details",
    faqs: [
      { question: "What is the participation fee?", answer: "The registration fee is ₹500 per person. This includes access to all workshops, events, a registration kit, and food during the event." },
      { question: "What technologies can be used?", answer: "Participants can use any programming language or framework. However, certain events may have specific technology requirements, so it is recommended to check the event guidelines before proceeding." },
      { question: "Do all events have cash prizes?", answer: "Not all events offer cash prizes. Some may provide monetary rewards, while others focus on recognition, certificates, and exposure." },
      { question: "How should we pay the fees?", answer: "The registration fee should be paid using the ICICI Bank Portal. After making the payment, participants must enter the transaction number for verification. Once verified, the participant’s profile will be updated accordingly." },
      { question: "What events can we attend?", answer: "You can attend all the events of the particular department and workshops irrespective of the department chosen." },
    ],
  },
  {
    title: "Registration & Participation",
    faqs: [
      { question: "Should I register as a team?", answer: "Only individual registration is required. Participants will have the opportunity to collaborate during the event if needed." },
      { question: "Can we register on the spot?", answer: "Yes, on-spot registrations are allowed. However, it is advisable to register in advance to secure your participation and receive event details early." },
      { question: "Will all participants receive a certificate?", answer: "Yes, every participant will receive a certificate of participation, acknowledging their involvement." },
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
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.2 }
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
    ref={faqRef}
    style={{
      textAlign: "center",
      padding: "2.5rem 1.5rem",
      paddingBottom: "2.5rem",  // Added padding below the FAQ section
      background: "#e0f2fe",
      color: "#1c2127",
      transition: "all 0.7s ease-in-out",
      opacity: isVisible ? 1 : 0,
      transform: isVisible ? "translateY(0)" : "translateY(10px)",
    }}
  >
  
{/* FAQ Title */}
<h1
  style={{
    fontWeight: "bold",
    fontSize: "4rem", // Equivalent to text-4xl
    paddingBottom: "2.5rem",
    backgroundImage: "linear-gradient(to right, #278092, #278092)", // Solid color using gradient
    WebkitBackgroundClip: "text",
    WebkitTextFillColor: "transparent",
    position: "relative",
    display: "inline-block",
    transition: "opacity 0.7s ease-in-out",
    opacity: isVisible ? 1 : 0,
  }}
  className="sm:text-6xl"
>
  FAQs
</h1>




      {/* Category Buttons */}
      <div
        style={{
          display: "flex",
          flexWrap: "wrap",
          gap: "1rem",
          justifyContent: "center",
          opacity: isVisible ? 1 : 0,
          transition: "opacity 0.7s ease-in-out",
        }}
      >
        {faqSections.map((section, index) => (
          <button
            key={index}
            onClick={() => setOpenSection(index)}
            style={{
              padding: "0.75rem 1.5rem",
              borderRadius: "999px",
              fontSize: "1rem",
              fontWeight: "bold",
              color: "white",
              background: openSection === index ? "#0b385f" : "#3373b0",
              transition: "all 0.5s ease-in-out",
              border: "none",
              cursor: "pointer",
              transform: openSection === index ? "scale(1.05)" : "scale(1)",
              boxShadow: openSection === index ? "0px 4px 10px rgba(0, 0, 0, 0.2)" : "none",
            }}
          >
            {section.title}
          </button>
        ))}
      </div>

      {/* Questions Section */}
      {openSection !== null && (
        <div
          style={{
            marginTop: "1.5rem",
            padding: "1.5rem",
            background: "white",
            borderRadius: "10px",
            boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.1)",
            maxWidth: "800px",
            marginLeft: "auto",
            marginRight: "auto",
            opacity: isVisible ? 1 : 0,
            transition: "opacity 0.7s ease-in-out",
          }}
        >
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
  );
};

export default Faq;