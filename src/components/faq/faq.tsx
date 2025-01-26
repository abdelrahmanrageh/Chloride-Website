import {
  Accordion,
  AccordionItem,
  AccordionTrigger,
  AccordionContent,
} from "@/components/ui/accordion";
const questions = [
  {
    question:
      "Why building a great landing page is critical for your business?",
    answer:
      "In today's AI-driven world, standing out is harder than ever. While anyone can build a product, a professional landing page makes the difference between success and failure. Launch UI helps you ship faster without compromising on quality.",
  },
  {
    question: "Why use Launch UI instead of a no-code tool?",
    answer:
      "No-code tools lock you into their ecosystem with recurring fees and limited control. They often come with performance issues and make it difficult to integrate with your product. You can't even change your hosting provider and basic things like web analytics come as extra costs and paid add-ons. What might seem like a convenient solution today could paint you into a corner tomorrow, limiting your ability to scale and adapt. Launch UI gives you full control of your code while maintaining professional quality.",
  },
  {
    question:
      "How Launch UI is different from other components libraries and templates?",
    answer:
      "Launch UI stands out with premium design quality and delightful touches of custom animations and illustrations. All components are carefully crafted to help position your product as a professional tool, avoiding the generic template look. Unlike many libraries that rely on outdated CSS practices and old dependencies, Launch UI is built with modern technologies and best practices in mind.",
  },
  {
    question: "Why exactly does it mean that 'The code is yours'?",
    answer:
      "The basic version of Launch UI is open-source and free forever, under a do-whatever-you-want license. The pro version that contains more components and options is a one-time purchase that gives you lifetime access to all current and future content. Use it for unlimited personal and commercial projects - no recurring fees or restrictions. For complete details about licensing and usage rights, check out the pricing page.",
  },
  {
    question: "Are Figma files included?",
    answer:
      "Yes! The complete Launch UI template is available for free on the Figma community.",
  },
  {
    question: "Can I get a discount?",
    answer:
      "Actually, yes! I'm looking for beta testers and great examples of Launch UI in action to feature on the website. Here's the deal: you provide feedback to help me improve the product, and in return, you get a huge discount plus a solid backlink for your product. If this interests you, don't hesitate to reach out by email.",
  },
];

export default function FAQ() {
  return (
    <section className="my-16 ">
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
