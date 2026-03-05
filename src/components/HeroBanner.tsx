"use client";


export default function HeroBanner() {
  return (
    <section
      id="top"
      className="w-full bg-botequim-bg border-b border-botequim-secondary/10 overflow-hidden pt-20 relative"
    >
      {/* Subtle background decoration */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none opacity-40">
        <div className="absolute -top-[20%] -right-[10%] w-[50%] h-[50%] rounded-full bg-botequim-highlight/20 blur-3xl" />
        <div className="absolute top-[40%] -left-[10%] w-[40%] h-[40%] rounded-full bg-botequim-primary/10 blur-3xl" />
      </div>

      {/* Hero Logo */}
      <div className="max-w-6xl mx-auto px-4 py-4 flex flex-col items-center text-center relative z-10">
        <div className="w-full max-w-[180px] sm:max-w-[280px] lg:max-w-[350px] animate-fade-in transition-all duration-700 hover:scale-102">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img 
            src="/images/logo.png" 
            alt="Seu Chico Botequim" 
            className="w-full h-auto object-contain drop-shadow-xl"
          />
        </div>
      </div>
    </section>
  );
}
