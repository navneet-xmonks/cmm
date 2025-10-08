import Image from "next/image";

const EventsSection = () => {
  return (
    <section className="relative min-h-screen bg-black px-4 sm:px-6 md:px-8 lg:px-16 py-12 sm:py-16 md:py-10 lg:py-10">
      {/* Header */}
      <div className="flex justify-between items-start mb-12">
        <div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-[family-name:var(--font-josefin)] font-light text-white mb-6 leading-tight">
            Stop talking. Start doing.
          </h2>
          <p className="text-base sm:text-lg md:text-xl text-gray-300 font-[family-name:var(--font-josefin)] max-w-xl">
            Learn, vibe code & deploy AI projects at offline events hosted in 11 Indian cities, every week.
          </p>
        </div>
        <button className="w-full sm:w-auto md:w-60 lg:w-80 text-xs sm:text-sm md:text-base lg:text-lg text-white border border-gray-600 px-4 py-3 sm:px-4 sm:py-2 rounded-full hover:bg-white hover:text-black transition-all duration-300 font-[family-name:var(--font-josefin)]">
          See all events →
        </button>
      </div>

      {/* Event Cards Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {/* Card 1 - Build AI Automation */}
        <div className="rounded-2xl overflow-hidden relative h-100">
          <div 
            className="absolute inset-0 bg-cover bg-center"
            style={{ backgroundImage: 'url("https://growthx.club/_next/image?url=https%3A%2F%2Fpublic-cdn.growthx.club%2FMEDIA%2F1a273c0da3-build-a-thon.png&w=3840&q=75")' }}
          >
            <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black/80"></div>
          </div>
          <div className="relative z-10 h-full flex flex-col justify-between p-6 text-white">
            <div className="flex items-center gap-2"></div>
            <div>
              <p className="text-lg font-medium mb-4">Build your first AI automation from scratch</p>
              <div className="flex justify-between items-end">
                <div className="flex items-center gap-3">
                  <Image src="https://public-cdn.growthx.club/MEDIA/karthick_srinivasan_0108e8d16c/362208e075-1758601752594.jpeg" alt="Rishikesh Ranjan" width={32} height={32} className="rounded object-cover" />
                  <span className="text-sm font-medium">Rishikesh Ranjan</span>
                </div>
                <div className="text-right text-sm">
                  <p className="opacity-80">Sun, Nov 2</p>
                  <div className="border-t border-dotted border-white/40 my-1"></div>
                  <p className="opacity-80">Bengaluru</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Card 2 - Read with Sajith */}
        <div className="rounded-2xl overflow-hidden relative h-100">
          <div 
            className="absolute inset-0 bg-cover bg-center"
            style={{ backgroundImage: 'url("https://growthx.club/_next/image?url=https%3A%2F%2Fpublic-cdn.growthx.club%2FMEDIA%2F0fdfc47cc5-Sajit%20Pai.png&w=3840&q=75")' }}
          >
            <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black/80"></div>
          </div>
          <div className="relative z-10 h-full flex flex-col justify-between p-6 text-white">
            <div></div>
            <div>
              <div className="text-center mb-4"></div>
              <p className="text-lg font-medium mb-4">Read w/ Sajith at Blume Villa</p>
              <div className="flex justify-between items-end">
                <div className="flex items-center gap-3">
                  <Image src="https://du2l2d5icvsbf.cloudfront.net/USER/arnima_jain_f1cc3ce613/PROFILE_PHOTO/ff97a956-02f6-4aaa-8b92-0cb23e6ebb43-9A5A91F9_4527_4F7B_8B5A_64B8F6DE667C.jpg" alt="Sajith Pai" width={32} height={32} className="rounded object-cover" />
                  <span className="text-sm font-medium">Sajith Pai</span>
                </div>
                <div className="text-right text-sm">
                  <p className="opacity-80">Thu, Oct 16</p>
                  <div className="border-t border-dotted border-white/40 my-1"></div>
                  <p className="opacity-80">Bengaluru</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Card 3 - Share AI wins */}
        <div className="rounded-2xl overflow-hidden relative h-100">
          <div 
            className="absolute inset-0 bg-cover bg-center"
            style={{ backgroundImage: 'url("https://growthx.club/_next/image?url=https%3A%2F%2Fpublic-cdn.growthx.club%2FMEDIA%2F414dc6b82f-BLR.png&w=3840&q=75")' }}
          >
            <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black/80"></div>
          </div>
          <div className="relative z-10 h-full flex flex-col justify-between p-6 text-white">
            <div className="text-right"></div>
            <div>
              <div className="mb-4"></div>
              <p className="text-lg font-medium mb-4">Share AI wins and misses</p>
              <div className="flex justify-between items-end">
                <div className="flex items-center gap-3">
                  <Image src="https://public-cdn.growthx.club/MEDIA/a026ff1b20-jsfksbfs.png" alt="Arnima Jain" width={32} height={32} className="rounded object-cover" />
                  <span className="text-sm font-medium">Arnima Jain</span>
                </div>
                <div className="text-right text-sm">
                  <p className="opacity-80">Sat, Oct 4</p>
                  <div className="border-t border-dotted border-white/40 my-1"></div>
                  <p className="opacity-80">Bengaluru</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Card 4 - Make $1000 with AI */}
        <div className="rounded-2xl overflow-hidden relative h-100">
          <div 
            className="absolute inset-0 bg-cover bg-center"
            style={{ backgroundImage: 'url("https://growthx.club/_next/image?url=https%3A%2F%2Fpublic-cdn.growthx.club%2FMEDIA%2Fkarthick_srinivasan_0108e8d16c%2F94558c58c6-Untitled_design_20.jpg&w=3840&q=75")' }}
          >
            <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black/80"></div>
          </div>
          <div className="relative z-10 h-full flex flex-col justify-between p-6 text-white">
            <div></div>
            <div>
              <p className="text-lg font-medium mb-4">Make your first $1,000 with AI</p>
              <div className="flex justify-between items-end">
                <div className="flex items-center gap-3">
                  <Image src="https://public-cdn.growthx.club/MEDIA/rishikesh_ranjan_36eb3d7787/a43220fb5f-newsletter_logo_substack.jpg" alt="Vishal Virani" width={32} height={32} className="rounded object-cover" />
                  <span className="text-sm font-medium">Vishal Virani</span>
                </div>
                <div className="text-right text-sm">
                  <p className="opacity-80">Tue, Sep 30</p>
                  <div className="border-t border-dotted border-white/40 my-1"></div>
                  <p className="opacity-80">Virtual Ev...</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default EventsSection;