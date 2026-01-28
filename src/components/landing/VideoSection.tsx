const VideoSection = () => {
  return (
    <section className="section-padding bg-background">
      <div className="container-narrow">
        <div className="text-center mb-10">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            The Dangers and Regrets of Drug Addicts
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Educational content on the prevalence of drugs in Nigeria. Learn about the real impact of substance abuse and the journey to recovery.
          </p>
        </div>

        {/* Video embed */}
        <div className="max-w-4xl mx-auto">
          <div className="relative w-full aspect-video rounded-2xl overflow-hidden shadow-2xl">
            <iframe
              className="absolute inset-0 w-full h-full"
              src="https://www.youtube.com/embed/IDYLKGTVa4g?start=74"
              title="The Dangers and Regrets of Drug Addicts"
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
