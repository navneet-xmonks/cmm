"use client"
import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

// Register ScrollTrigger plugin
if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger);
}

const LearningCommunitySection = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const titleRef = useRef<HTMLHeadingElement>(null);
  const subtitleRef = useRef<HTMLParagraphElement>(null);
  const cardsRef = useRef<HTMLDivElement[]>([]);
  const cardRef = useRef<HTMLDivElement>(null);

useEffect(() => {
    if (typeof window === 'undefined') return;

    const tl = gsap.timeline({
        scrollTrigger: {
            trigger: sectionRef.current,
            start: "top 80%",
            end: "bottom 20%",
            toggleActions: "play none none reverse"
        }
    });

    // Animate title — create real span nodes instead of setting innerHTML (avoids showing raw HTML/style text)
    if (titleRef.current) {
        const el = titleRef.current as HTMLElement;
        const rawText = el.textContent || "";
        const words = rawText.trim().split(/\s+/);

        // Hide while we mutate to avoid flashes
        el.style.visibility = "hidden";
        el.textContent = "";

        words.forEach((word, i) => {
            const span = document.createElement("span");
            span.style.display = "inline-block";
            span.style.opacity = "0";
            span.style.transform = "translateY(50px)";
            // keep spacing between words
            span.textContent = word + (i < words.length - 1 ? "\u00A0" : "");
            el.appendChild(span);
        });

        // Reveal the element (spans are still opacity:0 so nothing will flash)
        el.style.visibility = "visible";

        const wordSpans = el.querySelectorAll("span");
        tl.to(wordSpans, {
            opacity: 1,
            y: 0,
            stagger: 0.1,
            duration: 0.6,
            ease: "power3.out",
        });
    }

    // Animate subtitle
    tl.fromTo(
        subtitleRef.current,
        { opacity: 0, y: 30 },
        { opacity: 1, y: 0, duration: 0.8, ease: "power3.out" },
        "-=0.3"
    );

    // Animate cards
    cardsRef.current.forEach((card, index) => {
        if (card) {
            tl.fromTo(
                card,
                { opacity: 0, y: 50 },
                {
                    opacity: 1,
                    y: 0,
                    duration: 0.6,
                    ease: "power3.out"
                },
                `-=${0.5 - index * 0.1}`
            );
        }
    });

    // Animate card
    tl.fromTo(
        cardRef.current,
        { opacity: 0, scale: 0.9, y: 50 },
        { opacity: 1, scale: 1, y: 0, duration: 0.8, ease: "power3.out" },
        "-=0.4"
    );

    return () => {
        ScrollTrigger.getAll().forEach(trigger => trigger.kill());
    };
}, []);

const addToRefs = (el: HTMLDivElement | null) => {
    if (el && !cardsRef.current.includes(el)) {
        cardsRef.current.push(el);
    }
};

  const features = [
    {
      icon: (
        <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" aria-hidden="true">
          <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
          <circle cx="9" cy="7" r="4" stroke="currentColor" strokeWidth="1.5" />
          <path d="M23 21v-2a4 4 0 0 0-3-3.87" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
          <path d="M16 3.13a4 4 0 0 1 0 7.75" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      ),
      title: "Be A Part Of A Group That Holds And Endorses For Your Growth",
      body: "Join a supportive community that believes in your potential and actively contributes to your coaching journey."
    },
    {
      icon: (
        <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" aria-hidden="true">
          <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
          <path d="M10 9h.01" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
          <path d="M14 9h.01" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      ),
      title: "Get Immediate Feedback In A Safe Environment",
      body: "Receive constructive feedback from experienced coaches in a judgment-free zone designed for growth."
    },
    {
      icon: (
        <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" aria-hidden="true">
          <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
          <path d="M9 12l2 2 4-4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      ),
      title: "Be A Part Of A Community That Stands For Your Growth",
      body: "Connect with like-minded professionals who are committed to mutual success and continuous improvement."
    },
    {
      icon: (
        <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" aria-hidden="true">
          <path d="M12 5l7 4-7 4-7-4 7-4z" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round" />
          <path d="M5 13v4l7 4 7-4v-4" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      ),
      title: "Share Successes, Best Practices & Failures Through Dialogue",
      body: "Share your wins, learn from setbacks, and engage in meaningful conversations that drive innovation."
    }
  ];

  return (
    <>
        {/* Divider */}
        <div className="h-px bg-gradient-to-r from-black via-black/60 to-transparent"></div>

        {/* Learning Community Section */}
        <section
            ref={sectionRef}
            className="relative min-h-screen px-4 sm:px-6 md:px-8 lg:px-16 py-12 sm:py-16 md:py-20 lg:py-24"
            style={{
                backgroundImage: "url('/meeting.png')",
                backgroundSize: "cover",
                backgroundPosition: "center",
                backgroundRepeat: "no-repeat",
            }}
        >
            {/* Overlay to improve readability */}
            <div className="absolute inset-0 bg-black/60 pointer-events-none" aria-hidden="true" />

            {/* Content wrapper above overlay */}
            <div className="relative z-10">
                {/* Header Section */}
                <div className="text-center mb-16 sm:mb-20 md:mb-24">
                    <h2
                        ref={titleRef}
                        className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-[family-name:var(--font-josefin)] font-light text-white mb-6 sm:mb-8 leading-tight"
                    >
                        Find A Learning Community To GROW Together.
                    </h2>

                    <p
                        ref={subtitleRef}
                        className="text-base sm:text-lg md:text-xl text-gray-300 font-[family-name:var(--font-josefin)] max-w-4xl mx-auto leading-relaxed"
                    >
                        Network with the top 1% high performing coaches & like-minded people ready to support, 
                        encourage, and inspire each other.
                    </p>
                </div>

                {/* Features in Circular Layout */}
                <div className="relative max-w-7xl mx-auto">
                  <style>{`
                    .glass-card {
                      position: relative;
                      background: linear-gradient(180deg, rgba(255,255,255,0.03), rgba(255,255,255,0.02));
                      -webkit-backdrop-filter: blur(10px) saturate(120%);
                      backdrop-filter: blur(10px) saturate(120%);
                      border: 1px solid rgba(255,255,255,0.08);
                      border-radius: 1rem;
                      transition: transform .25s ease, box-shadow .3s ease, border-color .3s ease;
                      overflow: hidden;
                    }

                    /* Subtle pulsing glow on the border */
                    .glass-card.glow {
                      animation: pulseGlow 3s ease-in-out infinite;
                    }

                    @keyframes pulseGlow {
                      0% {
                        box-shadow: 0 0 6px rgba(255,255,255,0.03), 0 0 0 rgba(255,255,255,0);
                      }
                      50% {
                        box-shadow: 0 0 18px rgba(255,255,255,0.10), 0 0 36px rgba(255,255,255,0.03);
                      }
                      100% {
                        box-shadow: 0 0 6px rgba(255,255,255,0.03), 0 0 0 rgba(255,255,255,0);
                      }
                    }

                    /* stronger glow and lift on hover */
                    .glass-card:hover {
                      transform: translateY(-6px) scale(1.01);
                      border-color: rgba(255,255,255,0.18);
                      box-shadow: 0 10px 30px rgba(0,0,0,0.55), 0 0 40px rgba(255,255,255,0.06);
                    }

                    /* small inner highlight to accent the glass edge */
                    .glass-card::after {
                      content: "";
                      position: absolute;
                      inset: 0;
                      pointer-events: none;
                      border-radius: inherit;
                      background: linear-gradient(180deg, rgba(255,255,255,0.02), rgba(255,255,255,0));
                      mix-blend-mode: overlay;
                    }

                    /* icon container tweaks so it contrasts with glass */
                    .glass-icon {
                      -webkit-backdrop-filter: blur(6px);
                      backdrop-filter: blur(6px);
                      border-radius: 0.5rem;
                      display: inline-flex;
                      align-items: center;
                      justify-content: center;
                      width: 4rem;
                      height: 4rem;
                    }
                  `}</style>

                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-10">
                    {features.map((feature, idx) => (
                      <div
                        key={idx}
                        ref={addToRefs}
                        className="group relative glass-card glow p-8 lg:p-10 text-center transition-all duration-300"
                      >
                        {/* Icon */}
                        <div className="mb-8 flex justify-center">
                          <div className="glass-icon text-white bg-white/5 transition-colors duration-200 group-hover:bg-white group-hover:text-black">
                            {feature.icon}
                          </div>
                        </div>

                        {/* Content */}
                        <div>
                          <h4 className="text-white font-semibold font-[family-name:var(--font-josefin)] text-lg mb-4 leading-tight">
                            {feature.title}
                          </h4>
                          <p className="text-gray-300 text-base leading-relaxed font-sans group-hover:text-gray-100 transition-colors duration-300">
                            {feature.body}
                          </p>
                        </div>

                      </div>
                    ))}
                  </div>
                </div>

                {/* Call to Action */}
                <div className="text-center mt-16 sm:mt-20 md:mt-24">
                    <div className="inline-flex flex-col sm:flex-row items-center gap-6 sm:gap-8">
                        <div className="text-center sm:text-left">
                            <h3 className="text-xl md:text-5xl font-[family-name:var(--font-josefin)] font-light text-white mb-2">
                                Ready to Connect?
                            </h3>
                            <p className="text-gray-400 text-sm md:text-base font-[family-name:var(--font-josefin)]">
                                Join thousands of coaches growing together
                            </p>
                        </div>

                        <button className="bg-transparent border border-white text-white px-8 sm:px-12 py-4 sm:py-5 rounded-full font-normal text-base sm:text-lg transition-all duration-300 hover:scale-105 hover:bg-white hover:text-black relative overflow-hidden font-[family-name:var(--font-josefin)] whitespace-nowrap">
                            <span className="absolute inset-0 bg-white transform -translate-x-full transition-transform duration-300 hover:translate-x-0"></span>
                            <span className="relative z-10">Join Our Community →</span>
                        </button>
                    </div>
                </div>
            </div>
        </section>
    </>
  );
};

export default LearningCommunitySection;