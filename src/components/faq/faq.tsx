import {
  Accordion,
  AccordionItem,
  AccordionTrigger,
  AccordionContent,
} from "@/components/ui/accordion";
const questions = [
  {
    question:
      "How can you subscribe to one of these plans?",
    answer:
      "Just join our Discord and open a ticket—I’ll be with you in a minute!",
  },
  {
    question:
      "Why can i need to install AtomOS?",
    answer:
      "Upgrading to a Windows system with 110 fewer background processes and 2GB less RAM usage will elevate your experience to a whole new level.",
  },
  {
    question: "Why should I choose this optimization service instead of using a custom OS ?",
    answer:
      "With the optimization service, I will have access to your device using Anydesk, allowing me to tailor everything specifically to your PC's specifications and usage needs.",
  },
  {
    question:
      "How much more performance will I get with the optimization service and AtomOS compared to stock Windows?",
    answer:
      "You will experience a lighter system with more than three times the efficiency of Windows 10 and a performance boost of over 30%. All of this is proven through various comparisons and benchmarks conducted by our testing team over two full months of experimentation.",
  },
  {
    question: "Is there any form of guarantee, and what about future support?",
    answer:
      "Yes, we offer a lifetime guarantee and lifetime support for everything, in every aspect.",
  },
];

export default function FAQ() {
  return (
    <section id="faq" className="my-16 ">
      <div className="mx-auto flex max-w-container flex-col items-center gap-8">
        <h2 className="text-center text-3xl font-semibold sm:text-5xl">
          Questions and Answers
        </h2>
        {questions.map((q, i) => (
          <Accordion
            key={i}
            type="single"
            collapsible
            className="w-full max-w-[800px] bg-[#15202d]  rounded-lg px-4 border-slate-800 border-t-slate-700 border hover:bg-[#162531] transition-all"
          >
                <AccordionItem
                        className="border-none"
                    value={`item-${i + 1}`}>
              <AccordionTrigger>
                    {q.question}
              </AccordionTrigger>
              <AccordionContent>
                <p className="mb-4 max-w-[640px] text-balance text-muted-foreground">
                  {q.answer}
                </p>
                {/* <p className="mb-4 max-w-[640px] text-balance text-muted-foreground">
                  Launch UI helps you ship faster without compromising on
                  quality.
                </p> */}
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        ))}
      </div>
    </section>
  );
}
