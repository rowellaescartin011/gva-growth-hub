import PricingCard from "./PricingCard";

const smmPlans = [
  {
    title: "Standard",
    price: 750,
    features: [
      "2-week content calendar & posting schedule",
      "8 high-quality posts + 2 short videos",
      "Captions optimized for engagement & hashtag suggestions",
      "Basic profile review: bio & highlight covers",
      "Weekly performance check",
      "1 round of revisions with feedback within 48 hours",
    ],
  },
  {
    title: "Premium",
    price: 1500,
    featured: true,
    features: [
      "3-week content calendar & platform-specific posting schedule",
      "12 high-quality posts + 4 short videos",
      "Captions optimized for engagement & hashtag strategy",
      "Profile review: bio, highlight covers & consistent branding",
      "Weekly performance summary",
      "2 rounds of revisions with feedback within 48 hours",
    ],
  },
  {
    title: "Elite",
    price: 2500,
    features: [
      "4-week content calendar & tailored posting schedule",
      "Audience research, competitor analysis & growth strategy",
      "20 high-quality posts + 6 short-form videos",
      "Captions optimized for engagement & trending hashtags",
      "Profile optimization: bio, highlight covers & consistent branding",
      "Weekly performance reports with actionable insights",
      "3 rounds of revisions with priority 24-hour feedback",
      "1 strategy consultation session",
    ],
  },
];

const ecommercePlans = [
  {
    title: "Standard",
    price: 750,
    features: [
      "Product listing & catalog management (up to 50 products)",
      "Basic data entry & database updates",
      "Inventory monitoring & stock updates",
      "Order processing & tracking (up to 50 orders)",
      "Spreadsheet creation & simple reporting",
      "1 round of revisions with feedback within 48 hours",
    ],
  },
  {
    title: "Premium",
    price: 1500,
    featured: true,
    features: [
      "Product listing & catalog management (up to 100 products)",
      "Data entry & database updates",
      "Inventory monitoring & stock updates",
      "Order processing & tracking (up to 100 orders)",
      "Spreadsheet creation, cleaning & reporting",
      "Product research & competitor analysis",
      "2 rounds of revisions with feedback within 48 hours",
    ],
  },
  {
    title: "Elite",
    price: 2500,
    features: [
      "Product listing & catalog management (up to 200 products)",
      "Data entry & database updates",
      "Inventory monitoring & stock updates",
      "Order processing & tracking (up to 200 orders)",
      "Spreadsheet creation, cleaning & advanced reporting",
      "Product research & competitor analysis",
      "Image editing & uploading for listings",
      "3 rounds of revisions with priority 24-hour feedback",
      "Consultation session for optimizing store operations",
    ],
  },
];

const Pricing = () => {
  return (
    <section id="pricing" className="py-20 bg-secondary">
      <div className="container mx-auto px-4">
        {/* SMM Pricing */}
        <div className="mb-20">
          <div className="text-center mb-16">
            <p className="text-primary font-semibold text-lg mb-2">SOCIAL MEDIA PRESENCE</p>
            <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
              SMM Package Pricing
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-primary to-accent mx-auto" />
          </div>
          
          <div className="grid md:grid-cols-3 gap-8 max-w-7xl mx-auto">
            {smmPlans.map((plan) => (
              <PricingCard key={plan.title} {...plan} />
            ))}
          </div>
        </div>

        {/* E-commerce Pricing */}
        <div>
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
              E-Commerce Package Pricing
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-primary to-accent mx-auto" />
          </div>
          
          <div className="grid md:grid-cols-3 gap-8 max-w-7xl mx-auto">
            {ecommercePlans.map((plan) => (
              <PricingCard key={plan.title} {...plan} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Pricing;
