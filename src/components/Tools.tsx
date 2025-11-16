import { Palette, MessageSquare, Calendar } from "lucide-react";

const toolCategories = [
  {
    icon: Palette,
    title: "Design & Content",
    tools: ["Canva", "CapCut", "Adobe Express"],
  },
  {
    icon: MessageSquare,
    title: "Communication",
    tools: ["Slack", "Zoom", "Microsoft Teams", "Gmail"],
  },
  {
    icon: Calendar,
    title: "Scheduling & Productivity",
    tools: ["Trello", "Asana", "Google Calendar", "Notion"],
  },
];

const Tools = () => {
  return (
    <section id="tools" className="py-20 bg-secondary">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
            TOOLS & SYSTEM
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-primary to-accent mx-auto" />
        </div>
        
        <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {toolCategories.map((category, index) => {
            const Icon = category.icon;
            return (
              <div
                key={index}
                className="bg-card rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2"
              >
                <div className="flex justify-center mb-6">
                  <div className="w-16 h-16 rounded-full bg-gradient-to-br from-primary to-accent flex items-center justify-center">
                    <Icon className="w-8 h-8 text-primary-foreground" />
                  </div>
                </div>
                
                <h3 className="text-xl font-bold text-card-foreground text-center mb-4">
                  {category.title}
                </h3>
                
                <ul className="space-y-2">
                  {category.tools.map((tool, i) => (
                    <li
                      key={i}
                      className="text-center py-2 px-4 bg-secondary rounded-lg text-foreground"
                    >
                      {tool}
                    </li>
                  ))}
                </ul>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Tools;
