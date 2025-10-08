import Image from 'next/image';

const TestimonialSection = () => {
  return (
    <>
      {/* Divider */}
      <div className="h-px bg-gradient-to-r from-transparent via-gray-600 to-transparent"></div>

      {/* Testimonial Section */}
      <section className="relative min-h-screen flex items-center overflow-hidden bg-black py-16 sm:py-20 md:py-24">
        {/* Background Image */}
        <div
          className="absolute inset-0 z-0"
          style={{
            backgroundImage: 'url("man.png")',
            backgroundSize: 'cover',
            backgroundPosition: 'center',
          }}
        >
          <div className="absolute inset-0 bg-black/60"></div>
        </div>

        {/* Content Container */}
        <div className="relative z-10 w-full max-w-9xl px-2 sm:px-4 md:px-6 lg:px-8 mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 items-center gap-12 sm:gap-16 lg:gap-20">

            {/* Left Column: Text */}
            <div className="text-left">
              <h2 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-[family-name:var(--font-josefin)] font-light text-white leading-tight">
                4,500+ leaders from the world&apos;s top companies are Coaching Mastermind members.
              </h2>
            </div>

            {/* Right Column: Card */}
            <div className="relative w-full lg:w-auto mx-auto">
              <div className="relative max-w-md lg:max-w-lg ml-auto"> {/* Push card to right edge */}
                <div className="relative bg-gradient-to-b from-white/[0.33] via-white/[0.01] to-transparent backdrop-blur-md border border-white/[0.04] rounded-3xl overflow-hidden shadow-2xl shadow-white/20 group">

                  {/* Full Width Image */}
                  <div className="relative">
                    <Image
                      src="/manw.png"
                      alt="Leadership Expert"
                      width={500}
                      height={400}
                      className="w-full h-80 md:h-96 object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent"></div>
                  </div>

                  {/* Card Content */}
                  <div className="relative bg-black/40 backdrop-blur-xl p-6 md:p-8">

                    {/* Role Badge */}
                    <div className="text-center mb-4">
                      <span className="inline-block px-4 py-2 bg-white/10 backdrop-blur-sm rounded-full text-white/90 text-sm md:text-base font-medium font-[family-name:var(--font-josefin)] tracking-wide">
                        Founder
                      </span>
                    </div>

                    {/* Company Name */}
                    <div className="text-center mb-4">
                      <h3 className="text-white font-bold text-lg md:text-xl font-[family-name:var(--font-josefin)] mb-2">
                        CoachingMind
                      </h3>
                      <div className="w-12 h-px bg-white/20 mx-auto mb-3"></div>
                    </div>

                    {/* Description */}
                    <div className="rounded-xl p-4 md:p-5">
                      <p className="text-gray-200 text-sm md:text-base font-[family-name:var(--font-josefin)] leading-relaxed text-center">
                        Teaches to use AI to Enhance Leadership Experience
                      </p>
                    </div>
                  </div>

                  {/* Bottom Fade */}
                  <div className="absolute bottom-0 left-0 right-0 h-20 bg-gradient-to-t from-black/10 to-transparent pointer-events-none"></div>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>
    </>
  );
};




export default TestimonialSection;