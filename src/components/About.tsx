const About = () => {
  return (
    <section id="about" className="py-20 bg-secondary">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
              ABOUT ROWELLA
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-primary to-accent mx-auto" />
          </div>
          
          <div className="bg-card rounded-2xl p-8 md:p-12 shadow-lg">
            <p className="text-lg md:text-xl text-card-foreground leading-relaxed">
              As a Passionate General Virtual Assistant, with experience in social media management, 
              content creation, and client coordination. Skilled in handling administrative tasks, 
              scheduling, and communication to support daily business operations. Proficient in using 
              digital tools to manage projects efficiently and boost online presence. Known for being 
              adaptable, organized, and proactive in helping businesses grow and stay on track.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
