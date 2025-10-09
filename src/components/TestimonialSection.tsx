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

            {/* Left Column: Text + Features */}
            <div className="text-left">
              <div className="max-w-4xl space-y-6">
              <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-[family-name:var(--font-josefin)] font-light text-white leading-tight tracking-tight">
                Get The Secret Competitive Advantage.
              </h2>
              <p className="text-lg md:text-xl text-gray-200 font-sans">
                Refresh your understanding and regain your confidence
              </p>

              <ul className="grid grid-cols-1 sm:grid-cols-2 gap-6 mt-2">
                {[
                  {
                  title: 'Refresh Concepts & Expand Your Toolkit',
                  body: 'Refresh your concepts and expand your tool kit with new techniques you can use immediately.',
                  icon: (
                  <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" aria-hidden="true">
                    <path d="M12 3v18" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                    <path d="M3 12h18" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                  ),
                },
                  {
                  title: 'Learn From Diverse Case Studies',
                  body: 'Learn from diverse case studies and different scenarios to broaden your practical judgement.',
                  icon: (
                  <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" aria-hidden="true">
                    <path d="M12 5l7 4-7 4-7-4 7-4z" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round" />
                    <path d="M5 13v4l7 4 7-4v-4" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                  ),
                },
                {
                  title: 'Discover New Concepts & Strategies',
                  body: 'Discover new concepts, cutting-edge strategies, new frameworks and strengthen your coaching competencies.',
                  icon: (
                  <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" aria-hidden="true">
                    <path d="M12 2v20" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                    <path d="M5 8h14" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                    <path d="M5 16h14" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                  ),
                },


                {
                  title: 'Access Tools, Templates & Practical Knowledge',
                  body: 'Access tools, templates and learn practical knowledge that you can apply in your day-to-day coaching practice.',
                  icon: (
                  <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" aria-hidden="true">
                    <rect x="3" y="3" width="18" height="14" rx="2" stroke="currentColor" strokeWidth="1.2" />
                    <path d="M7 21h10" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                  ),
                },
                ].map((item, idx) => (
                <li
                  key={idx}
                  className="group relative flex items-start gap-4 p-3 rounded-xl transition-transform duration-200 transform-gpu group-hover:scale-105 group-hover:z-10 hover:bg-white/5 focus-within:bg-white/5"
                >
                  <span
                  className="flex-shrink-0 w-11 h-11 rounded-lg bg-white/8 backdrop-blur-sm flex items-center justify-center text-white transition-colors duration-200 group-hover:bg-white group-hover:text-black"
                  aria-hidden="true"
                  >
                  {item.icon}
                  </span>

                  <div className="min-w-0">
                  <h4 className="text-white font-semibold font-[family-name:var(--font-josefin)] text-sm sm:text-base">
                    {item.title}
                  </h4>
                  <p className="text-gray-300 text-sm leading-relaxed font-sans mt-1">
                    {item.body}
                  </p>
                  </div>
                </li>
                ))}
              </ul>
              </div>
            </div>

            {/* Right Column: Card */}
            <div className="relative w-full lg:w-auto mx-auto">
              <div className="relative max-w-md lg:max-w-lg ml-auto"> {/* Push card to right edge */}
                <div className="relative bg-gradient-to-b from-white/[0.33] via-white/[0.01] to-transparent backdrop-blur-md border border-white/[0.04] rounded-3xl overflow-hidden shadow-2xl shadow-white/20 group">

                  {/* Full Width Image */}
                  <div className="relative">
                    <Image
                      src="/gaurav.png"
                      alt="Leadership Expert"
                      width={180}
                      height={180}
                      className="w-full h-80 md:h-96 lg:h-100 object-contain"
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
                        Gaurav Arora
                      </h3>
                      <div className="w-12 h-px bg-white/20 mx-auto mb-3"></div>
                    </div>

                    {/* Description */}
                    <div className="rounded-xl p-4 md:p-5">
                      <p className="text-gray-200 text-sm md:text-base font-[family-name:var(--font-josefin)] leading-relaxed text-center">
                        Coaching leaders to move to the next level in their personal and professional lives I Leadership Development I Coach Training
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