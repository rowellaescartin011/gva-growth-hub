import { Button } from "@/components/ui/button";
import { CheckCircle2 } from "lucide-react";

interface PricingCardProps {
  title: string;
  price: number;
  features: string[];
  featured?: boolean;
}

const PricingCard = ({ title, price, features, featured }: PricingCardProps) => {
  const scrollToContact = () => {
    document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div
      className={`relative rounded-2xl p-8 ${
        featured
          ? "bg-gradient-to-br from-primary to-primary/90 text-primary-foreground shadow-xl scale-105"
          : "bg-card text-card-foreground shadow-lg hover:shadow-xl transition-shadow duration-300"
      }`}
    >
      {featured && (
        <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-accent text-accent-foreground px-6 py-1 rounded-full text-sm font-semibold">
          Most Popular
        </div>
      )}
      
      <div className="text-center mb-8">
        <h3 className="text-2xl font-bold mb-4">{title}</h3>
        <div className="flex items-baseline justify-center gap-2">
          <span className="text-5xl font-bold">${price}</span>
          <span className={featured ? "text-primary-foreground/80" : "text-muted-foreground"}>
            /mo
          </span>
        </div>
      </div>
      
      <ul className="space-y-4 mb-8">
        {features.map((feature, index) => (
          <li key={index} className="flex items-start gap-3">
            <CheckCircle2 
              className={`w-5 h-5 flex-shrink-0 mt-0.5 ${
                featured ? "text-accent" : "text-primary"
              }`}
            />
            <span className="text-sm leading-relaxed">{feature}</span>
          </li>
        ))}
      </ul>
      
      <Button
        onClick={scrollToContact}
        className={`w-full ${
          featured
            ? "bg-accent hover:bg-accent/90 text-accent-foreground"
            : "bg-primary hover:bg-primary/90 text-primary-foreground"
        }`}
      >
        GET STARTED
      </Button>
    </div>
  );
};

export default PricingCard;
