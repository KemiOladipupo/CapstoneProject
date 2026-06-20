import {
  Accordion,
  AccordionSummary,
  AccordionDetails,
  Typography,
  Container,
} from "@mui/material";
import { div } from "framer-motion/client";
import { BiExpand } from "react-icons/bi";
import { CgExpand } from "react-icons/cg";

import { FaExpand } from "react-icons/fa";
import { MdExpandCircleDown } from "react-icons/md";

const faqData = [
  {
    question: "What services does Toriah Daisy Events offer?",
    answer:
      "We specialize in event decoration, styling, and creative event setups for weddings, birthdays, corporate events, proposals, and special celebrations.",
  },
  {
    question: "How do I book your decoration services?",
    answer:
      "We recommend booking at least 2–6 weeks in advance, especially for large events like weddings, to ensure proper planning and availability.",
  },
  {
    question: "Can I request a custom theme or design?",
    answer:
      "Yes. We specialize in custom themes. You can share your inspiration, colour palette, or reference images, and we’ll bring your vision to life.",
  },
  {
    question: "How do I get a quote for my event?",
    answer:
      "Simply send your event date, location, theme idea, and budget range. We’ll provide a tailored quotation based on your needs.",
  },
  {
    question: "Do you also provide event planning or just decoration?",
    answer:
      "Our core focus is decoration and styling, but we can collaborate with planners or recommend trusted vendors if needed",
  },
];

function FAQ() {
  return (
    <div className="px-[16px] md:px-[60px] lg:px-[100px] py-[50px] bg-[var(--text-color)]">
      <Container maxWidth="md" sx={{ py: 6 }}>
        <Typography
          variant="h4"
          fontWeight={600}
          gutterBottom
          className="text-xl md:text-4xl lg:text-6xl font-bold uppercase leading-tight  mt-4 text-[var(--textColor)] text-center"
        >
          Frequently Asked Questions
        </Typography>

        {faqData.map((item, index) => (
          <Accordion
            key={index}
            disableGutters
            elevation={0}
            square
            sx={{
              border: "1px solid #e5e7eb",
              mb: 1.5,
              "&:before": { display: "none" },
              borderRadius: "10px",
              overflow: "hidden",
            }}
          >
            <AccordionSummary
              expandIcon={
                <MdExpandCircleDown className="text-[var(--tertiary-color)]" />
              }
              sx={{
                backgroundColor: "#fff",
                "&:hover": { backgroundColor: "#f9fafb" },
                px: 2,
              }}
            >
              <Typography fontWeight={500}>{item.question}</Typography>
            </AccordionSummary>

            <AccordionDetails sx={{ px: 2, pb: 2 }}>
              <Typography variant="body2" color="text.secondary">
                {item.answer}
              </Typography>
            </AccordionDetails>
          </Accordion>
        ))}
      </Container>
    </div>
  );
}
export default FAQ;
