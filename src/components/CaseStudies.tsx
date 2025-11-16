import { TrendingUp, Users, DollarSign } from "lucide-react";

const caseStudies = [
  {
    client: "TrendyTech Gadgets",
    goal: "Boost social media presence & sales",
    challenge: "Low engagement & brand awareness",
    strategy: [
      "Daily TikTok demos & Instagram Reels",
      "Paid FB & IG ads targeting tech fans",
    ],
    results: [
      { icon: Users, label: "TikTok Growth", value: "1K → 15K followers (2 months)" },
      { icon: TrendingUp, label: "IG Engagement", value: "+120%" },
      { icon: DollarSign, label: "Social Media Sales", value: "+25%" },
    ],
    takeaway: "Short videos + influencer collabs drive fastest growth",
  },
  {
    client: "SweetBloom Bakery",
    goal: "Increase local brand awareness & online orders",
    challenge: "Low Instagram followers & limited engagement",
    strategy: [
      "Daily Instagram Stories & Reels showcasing baked goods",
      "Collaborations with local food influencers",
    ],
    results: [
      { icon: Users, label: "Follower Growth", value: "2K → 8K in 2 months" },
      { icon: TrendingUp, label: "Engagement", value: "+150%" },
      { icon: DollarSign, label: "Online Orders", value: "+30%" },
    ],
    takeaway: "Visual storytelling and local influencer partnerships boost engagement and sales",
  },
];

const CaseStudies = () => {
  return (
    <section id="case-studies" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
            CASE STUDIES
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-primary to-accent mx-auto" />
        </div>
        
        <div className="grid lg:grid-cols-2 gap-8 max-w-7xl mx-auto">
          {caseStudies.map((study, index) => (
            <div
              key={index}
              className="bg-card rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow duration-300"
            >
              <h3 className="text-2xl font-bold text-card-foreground mb-2">
                Case Study {index + 1}
              </h3>
              <p className="text-primary font-semibold text-lg mb-4">
                Client: {study.client}
              </p>
              
              <div className="space-y-4 mb-6">
                <div>
                  <p className="text-sm font-semibold text-muted-foreground">Goal:</p>
                  <p className="text-card-foreground">{study.goal}</p>
                </div>
                
                <div>
                  <p className="text-sm font-semibold text-muted-foreground">Challenge:</p>
                  <p className="text-card-foreground">{study.challenge}</p>
                </div>
                
                <div>
                  <p className="text-sm font-semibold text-muted-foreground mb-2">Strategy:</p>
                  <ul className="list-disc list-inside space-y-1">
                    {study.strategy.map((item, i) => (
                      <li key={i} className="text-card-foreground">{item}</li>
                    ))}
                  </ul>
                </div>
              </div>
              
              <div className="bg-secondary rounded-lg p-6 mb-6">
                <p className="text-sm font-semibold text-foreground mb-4">Results:</p>
                <div className="space-y-3">
                  {study.results.map((result, i) => {
                    const Icon = result.icon;
                    return (
                      <div key={i} className="flex items-center gap-3">
                        <Icon className="w-5 h-5 text-primary flex-shrink-0" />
                        <div>
                          <p className="text-xs text-muted-foreground">{result.label}</p>
                          <p className="font-semibold text-foreground">{result.value}</p>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>
              
              <div className="bg-gradient-to-r from-primary/10 to-accent/10 rounded-lg p-4 border-l-4 border-primary">
                <p className="text-sm font-semibold text-foreground mb-1">Key Takeaway:</p>
                <p className="text-card-foreground">{study.takeaway}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CaseStudies;
