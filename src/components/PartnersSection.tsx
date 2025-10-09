import Image from "next/image";
import styles from "./PartnersSection.module.css";

const PartnersSection = () => {
  const logos = [
    "https://public-cdn.growthx.club/platform/icons/icon-3/sarvam-icon-3.webp",
    "https://public-cdn.growthx.club/platform/icons/icon-3/11-labs-icon-3.webp",
    "https://public-cdn.growthx.club/platform/icons/icon-3/microsoft-icon-3.webp",
    "https://public-cdn.growthx.club/platform/icons/icon-3/meta-icon-3.webp",
    "https://public-cdn.growthx.club/platform/icons/icon-3/lovable-icon-3.webp",
    "https://public-cdn.growthx.club/platform/icons/icon-3/google-icon-3.webp",
    "https://public-cdn.growthx.club/platform/icons/icon-3/adobe-icon-3.webp",
    "https://public-cdn.growthx.club/platform/icons/icon-3/zoho-icon-3.webp",
    "https://public-cdn.growthx.club/platform/icons/icon-3/freshworks-icon-3.webp",
    "https://public-cdn.growthx.club/platform/icons/icon-3/samsung-icon-3.webp",
    "https://public-cdn.growthx.club/platform/icons/icon-3/yellow-ai-icon-3.webp",
    "https://public-cdn.growthx.club/platform/icons/icon-3/razorpay-icon-3.webp",
    "https://public-cdn.growthx.club/platform/icons/icon-3/gojek-icon-3.webp",
    "https://public-cdn.growthx.club/platform/icons/icon-3/spotify-icon-3.webp",
  ];

  // Duplicate the logos array to allow a seamless infinite loop
  const looped = [...logos, ...logos];

  return (
  <section className="bg-black py-8 overflow-x-hidden">
      <div className="max-w-full h-10 mx-auto px-4 sm:px-6 lg:px-8">
        <div className="relative">
          {/* fading edges */}
          <div className="pointer-events-none absolute left-0 top-0 bottom-0 w-24 bg-gradient-to-r from-black/100 to-transparent z-20"></div>
          <div className="pointer-events-none absolute right-0 top-0 bottom-0 w-24 bg-gradient-to-l from-black/100 to-transparent z-20"></div>

          {/* track */}
          <div
            className={`${styles.partnersTrack} flex items-center gap-8 will-change-transform`}
            role="list"
            aria-label="Partner logos carousel"
          >
              {looped.map((logo, i) => (
                <div key={i} className={`${styles.logoItem} flex-shrink-0`} role="listitem">
                  <Image
                    src={logo}
                    alt={`Partner ${i + 1}`}
                    width={220}
                    height={48}
                    sizes="(max-width: 640px) 180px, (max-width: 1024px) 120px, 160px"
                    className="object-contain filter grayscale opacity-90 transition-all duration-300 hover:grayscale-0 hover:opacity-100 hover:scale-105"
                    loading="lazy"
                  />
                </div>
              ))}
          </div>
        </div>
      </div>

      {/* styles moved to PartnersSection.module.css for scoped CSS and better Next.js practices */}
    </section>
  );
};

export default PartnersSection;