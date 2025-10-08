const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-end overflow-hidden bg-black">
      {/* Background Image - Artistic journey/professional */}
      <div 
        className="absolute inset-0 z-0"
        style={{
          backgroundImage: 'url("journey.jpg")',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      >
        {/* Lighter Dark Overlay - Image is more visible */}
        <div className="absolute inset-0 bg-black/10"></div>
        
        {/* Gradient Overlay - Bottom to top */}
        <div className="absolute inset-0 bg-gradient-to-t from-black via-black/2 to-transparent"></div>
      </div>

      {/* Content - Bottom Aligned with Two Columns - RESPONSIVE */}
      <div className="relative z-10 w-full px-4 sm:px-6 md:px-8 lg:px-16 pb-12 sm:pb-16 md:pb-20 lg:pb-24">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-12 lg:gap-20 items-end">
          {/* Column 1: Heading and Subheading - RESPONSIVE */}
          <div className="order-1 lg:order-1">
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl 2xl:text-9xl font-[family-name:var(--font-josefin)] font-light text-white mb-4 sm:mb-6 md:mb-8 leading-tight">
              Become an<br />
              AI-first leader
            </h1>
            
            <p className="text-lg sm:text-xl md:text-2xl font-normal text-gray-300 font-[family-name:var(--font-josefin)] max-w-2xl">
              Find people, content & credits to integrate AI into your work.
            </p>
          </div>

          {/* Column 2: Button Only - RESPONSIVE */}
            <div className="order-2 lg:order-2 flex items-end justify-start lg:justify-end mt-8 lg:mt-0">
            <button className="bg-transparent border border-white text-white px-6 sm:px-8 md:px-12 py-4 sm:py-5 md:py-6 rounded-full font-normal text-base sm:text-lg md:text-xl transition-all duration-300 hover:scale-105 hover:bg-white hover:text-black relative overflow-hidden font-[family-name:var(--font-josefin)] w-full sm:w-auto">
              <span className="absolute inset-0 bg-white transform -translate-x-full transition-transform duration-300 hover:translate-x-0"></span>
              <span className="relative z-10">Become a member →</span>
            </button>
            </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
