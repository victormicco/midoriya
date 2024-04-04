import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

export function AboutAccordion() {
  return (
    <Accordion type="single" collapsible className="w-full">
      <AccordionItem value="item-1">
        <AccordionTrigger>Can I contribute to this project?</AccordionTrigger>
        <AccordionContent>
          Of course, feel free to contribute on the{" "}
          <span
            className="cursor-pointer text-primary"
            onClick={() =>
              window.open("https://github.com/victormicco/midoriya")
            }
          >
            Github Repository
          </span>
        </AccordionContent>
      </AccordionItem>
      <AccordionItem value="item-2">
        <AccordionTrigger>Technologies</AccordionTrigger>
        <AccordionContent>
          It was used: Next, Tailwind, Spline, Typebot, Lucide, shadcn
        </AccordionContent>
      </AccordionItem>
      <AccordionItem value="item-3">
        <AccordionTrigger>How do I can contact you?</AccordionTrigger>
        <AccordionContent>
          Look at the footer, there is some information about me that you can
          get in touch
        </AccordionContent>
      </AccordionItem>
    </Accordion>
  );
}
