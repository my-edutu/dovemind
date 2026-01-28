const VideoSection = () => {
  return (
    <section className="section-padding bg-background">
      <div className="container-narrow">
        <div className="text-center mb-10">
          <span className="inline-block text-sm font-semibold text-accent uppercase tracking-wider mb-3">
            Learn More
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Understanding Mental Health & Recovery
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Watch our educational content to learn about psychological support, substance abuse prevention, and the journey to recovery.
          </p>
        </div>

        {/* Video embed */}
        <div className="max-w-4xl mx-auto">
          <div className="relative w-full aspect-video rounded-2xl overflow-hidden shadow-2xl">
            <iframe
              className="absolute inset-0 w-full h-full"
              src="https://www.youtube.com/embed/IDYLKGTVa4g?si=EW5laufLdSKrRgbz"
              title="DovesMind Synergy - Mental Health Awareness"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              referrerPolicy="strict-origin-when-cross-origin"
              allowFullScreen
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default VideoSection;
