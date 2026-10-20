export type ServicePlan = {
  number: string;
  name: string;
  price: string;
  description: string;
  items: readonly string[];
  featured?: boolean;
};

export const servicePlans = [
  {
    number: "01",
    name: "START",
    price: "From 1,500,000₫",
    description:
      "For businesses that need a focused website interface.",
    items: [
      "Focused landing page UI layout",
      "Responsive desktop, tablet, and mobile designs",
      "Clear call to action layout",
      "Core interface components",
      "Design handoff",
    ],
  },
  {
    number: "02",
    name: "BUSINESS",
    price: "From 3,000,000₫",
    featured: true,
    description:
      "For businesses that need a complete, professional website interface.",
    items: [
      "Multi-section website UI layouts",
      "Responsive desktop, tablet, and mobile designs",
      "Services / menu / gallery layouts",
      "Contact and location layouts",
      "Visual system and interface components",
      "Design handoff",
    ],
  },
  {
    number: "03",
    name: "CUSTOM",
    price: "From 6,000,000₫",
    description:
      "For businesses with specific requirements that call for a more tailored interface.",
    items: [
      "Tailored website UI design",
      "Advanced page layouts or flows",
      "Custom interface components",
      "More complex content structures",
      "Detailed design handoff",
    ],
  },
] satisfies readonly ServicePlan[];
