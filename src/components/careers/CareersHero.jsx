import { useSiteConfig } from "../../context/SiteConfigContext";

export const CareersHero = () => {
  const { config } = useSiteConfig();
  const config_global = config.global;
  return (
    <section className="relative h-[500px] w-full overflow-hidden">
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage:
            "url(https://images.unsplash.com/photo-1521737604893-d14cc237f11d?q=80&w=2084&auto=format&fit=crop)",
        }}
      />
      <div className="absolute inset-0 bg-black/40" />
      <div className="relative z-10 h-full flex flex-col items-start justify-end pb-20 px-8 md:px-16 lg:px-24 max-w-6xl mx-auto">
        <p
          className="text-white/70 text-sm font-black tracking-[0.4em] mb-6 cursor-pointer hover:text-primary-blue transition-colors uppercase"
          onClick={() => (window.location.href = "/")}
        >
          ← BACK TO HOME
        </p>
        <h1
          className="text-5xl md:text-7xl font-black mb-6 tracking-tighter leading-[1.1] uppercase"
          style={{
            color: config_global.design?.hero?.heading || "#ffffff",
          }}
        >
          Open{" "}
          <span
            style={{
              color:
                config_global.design?.hero?.subheading ||
                config_global.primaryBlue,
            }}
          >
            Positions
          </span>
          <br />
          At Growus
        </h1>
        <p className="text-gray-100 max-w-2xl text-lg leading-relaxed font-medium">
          Join our team of 700+ engineering experts. We're looking for
          passionate individuals who strive for excellence in industrial quality
          and technical solutions.
        </p>
        <div
          className="w-24 h-1.5 mt-10 rounded-full"
          style={{
            backgroundColor:
              config_global.design?.hero?.subheading ||
              config_global.primaryBlue,
          }}
        />
      </div>
    </section>
  );
};
