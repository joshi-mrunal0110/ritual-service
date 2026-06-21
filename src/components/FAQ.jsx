import { useState } from "react";
import "./FAQ.css";

const faqData = [
  {
    question: "What rituals do you perform at Ramkund, Nashik?",
    answer:
      "We perform Asthi Visarjan, Pind Daan, Shraddha Vidhi, Dashakriya Vidhi, Narayan Nagbali, Tripindi Shraddha, Pitru Dosh Nivaran and other traditional Vedic rituals."
  },
  {
    question: "What is Asthi Visarjan?",
    answer:
      "Asthi Visarjan is the sacred ritual of immersing the ashes of a departed soul in the holy Godavari River according to Hindu traditions."
  },
  {
    question: "Do you provide Namawali (ancestral records)?",
    answer:
      "Yes. We assist families in accessing traditional ancestral records preserved through generations at Nashik."
  },
  {
    question: "Which communities do you serve?",
    answer:
      "We primarily serve families from Maharashtra, Uttar Pradesh, Gujarat, Telugu communities and other regions of India."
  },
  {
    question: "Can rituals be booked during Simhastha Kumbh Mela 2027?",
    answer:
      "Yes. Advance booking is highly recommended due to the large number of pilgrims visiting Nashik during Simhastha."
  },
  {
    question: "Do you assist outstation families?",
    answer:
      "Yes. We guide families regarding rituals, required materials, local arrangements and scheduling."
  }
];

export default function FAQ() {
  const [activeIndex, setActiveIndex] = useState(null);

  const toggleFAQ = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <section id="faq" className="faq">
      <div className="faq-container">

        <div className="section-subtitle">
          <span></span>
          FREQUENTLY ASKED QUESTIONS
          <span></span>
        </div>

        <h2 className="faq-title">
          Frequently Asked <span>Questions</span>
        </h2>

        <div className="faq-list">
          {faqData.map((faq, index) => (
            <div
              key={index}
              className={`faq-item ${
                activeIndex === index ? "active" : ""
              }`}
            >
              <button
                className="faq-question"
                onClick={() => toggleFAQ(index)}
              >
                {faq.question}
                <span>
                  {activeIndex === index ? "−" : "+"}
                </span>
              </button>

              {activeIndex === index && (
                <div className="faq-answer">
                  <p>{faq.answer}</p>
                </div>
              )}
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}