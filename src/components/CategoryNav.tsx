"use client";

import { useEffect, useRef, useState } from "react";
import { useLanguage } from "@/context/LanguageContext";
import { menuCategories } from "@/data/menu"; // Data source for category navigation
import { Translation } from "@/data/translations";

export default function CategoryNav() {
  const { t } = useLanguage();
  const [activeId, setActiveId] = useState<string>("");
  const [showRightFade, setShowRightFade] = useState(true);
  const scrollRef = useRef<HTMLDivElement>(null);

  // Observe sections to highlight the active category
  useEffect(() => {
    const sections = menuCategories.map((c) =>
      document.getElementById(`section-${c.id}`)
    );

    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((e) => e.isIntersecting)
          .sort((a, b) => a.boundingClientRect.top - b.boundingClientRect.top);
        if (visible.length > 0) {
          const id = visible[0].target.id.replace("section-", "");
          setActiveId(id);
        }
      },
      { rootMargin: "-120px 0px -60% 0px", threshold: 0 }
    );

    sections.forEach((s) => s && observer.observe(s));
    return () => observer.disconnect();
  }, []);

  // Scroll the active tab into view horizontally (avoiding page jumps)
  useEffect(() => {
    if (!scrollRef.current || !activeId) return;
    const container = scrollRef.current;
    const btn = container.querySelector(`[data-id="${activeId}"]`) as HTMLElement;

    if (btn) {
      const scrollPos =
        btn.offsetLeft - container.offsetWidth / 2 + btn.offsetWidth / 2;
      container.scrollTo({
        left: scrollPos,
        behavior: "smooth",
      });
    }
  }, [activeId]);

  // P3 fix: show/hide the right fade based on scroll position
  useEffect(() => {
    const container = scrollRef.current;
    if (!container) return;

    const updateFade = () => {
      const { scrollLeft, scrollWidth, clientWidth } = container;
      setShowRightFade(scrollLeft + clientWidth < scrollWidth - 4);
    };

    updateFade();
    container.addEventListener("scroll", updateFade, { passive: true });
    window.addEventListener("resize", updateFade, { passive: true });
    return () => {
      container.removeEventListener("scroll", updateFade);
      window.removeEventListener("resize", updateFade);
    };
  }, []);

  return (
    <div className="sticky top-20 z-40 w-full">
      {/* Scrollable nav */}
      <nav
        ref={scrollRef}
        className="relative w-full bg-white/95 backdrop-blur-md border-b border-stone-200 shadow-xs overflow-x-auto scrollbar-hide"
      >
        <div className="flex items-center gap-2 px-4 py-3 min-w-max mx-auto">
          {menuCategories.map((cat) => {
            const label = t[cat.nameKey as keyof Translation] as string;
            const isActive = activeId === cat.id;
            return (
              <a
                key={cat.id}
                href={`#section-${cat.id}`}
                data-id={cat.id}
                className={`shrink-0 px-5 py-2 rounded-full text-sm font-heading font-medium uppercase tracking-wider whitespace-nowrap transition-all duration-300 ${
                  isActive
                    ? "bg-botequim-secondary text-white shadow-md scale-105"
                    : "bg-transparent border border-transparent text-botequim-secondary hover:bg-botequim-secondary/10"
                }`}
              >
                {label}
              </a>
            );
          })}
        </div>

        {/* Right-edge scroll fade indicator (P3 fix) */}
        <div
          aria-hidden="true"
          className={`pointer-events-none absolute right-0 top-0 h-full w-12 bg-linear-to-l from-white/90 to-transparent transition-opacity duration-300 ${
            showRightFade ? "opacity-100" : "opacity-0"
          }`}
        />
      </nav>
    </div>
  );
}
