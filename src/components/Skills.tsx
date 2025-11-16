import { CheckCircle2 } from "lucide-react";

const skills = [
  "Social Media Management (Instagram, TikTok, Facebook)",
  "Content Creation & Scheduling",
  "Audience Engagement & Community Management",
  "Social Media Analytics & Performance Tracking",
  "E-commerce Product Listing & Optimization (Shopify, Amazon, Etsy)",
  "Inventory & Order Management",
  "Supplier Coordination & Dropshipping Support",
  "Keyword Research & Competitor Analysis",
  "Amazon PPC & Basic Ad Campaign Support",
  "Customer Service & Email Support",
  "Data Entry, Reporting & Excel/Google Sheets Proficiency",
  "Canva & CapCut for Graphic & Video Content",
  "Digital Marketing Support",
  "Attention to Detail, Organization & Task Management",
];

const Skills = () => {
  return (
    <section id="skills" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
              Skills & Expertise
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-primary to-accent mx-auto" />
          </div>
          
          <div className="grid md:grid-cols-2 gap-4">
            {skills.map((skill, index) => (
              <div
                key={index}
                className="flex items-start gap-3 p-4 bg-card rounded-lg hover:shadow-md transition-shadow duration-300"
              >
                <CheckCircle2 className="w-6 h-6 text-primary flex-shrink-0 mt-0.5" />
                <p className="text-card-foreground">{skill}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
