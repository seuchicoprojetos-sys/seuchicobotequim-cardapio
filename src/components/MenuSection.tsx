"use client";

import { useLanguage } from "@/context/LanguageContext";
import { MenuCategory, MenuItem, LocalizedString, PromotionSchedule } from "@/data/menu";
import { Translation, Locale } from "@/data/translations";

function formatPrice(price: number) {
  return price.toLocaleString("pt-BR", { style: "currency", currency: "BRL" });
}

function getLocalizedString(str: LocalizedString, locale: Locale): string {
  if (typeof str === "string") return str;
  return str[locale] || str["pt-BR"];
}

function PromotionScheduleBadge({
  schedule,
  locale,
}: {
  schedule: PromotionSchedule;
  locale: Locale;
}) {
  const label =
    locale === "pt-BR" ? "Horários da Promoção" :
    locale === "en"    ? "Promotion Hours" :
    locale === "es"    ? "Horarios de la Promoción" :
    locale === "fr"    ? "Horaires de la Promotion" :
                         "Orari della Promozione";

  return (
    <div className="mb-5 rounded-xl overflow-hidden border border-yellow-400/40 bg-gradient-to-br from-yellow-400/20 to-orange-400/10">
      {/* Header */}
      <div className="flex items-center gap-2 px-4 py-2.5 bg-yellow-400/30">
        <span className="text-xl">🕐</span>
        <span className="text-sm font-black uppercase tracking-widest text-yellow-900">
          {label}
        </span>
      </div>
      {/* Schedule rows */}
      <div className="px-4 py-3 flex flex-col gap-1.5 text-sm font-body">
        <div className="flex items-center justify-between gap-3">
          <span className="font-semibold text-yellow-900">
            {getLocalizedString(schedule.weekdays, locale)}
          </span>
          <span className="text-yellow-800 font-bold bg-yellow-300/50 px-2 py-0.5 rounded-full text-xs">
            {getLocalizedString(schedule.weekdaysUntil, locale)}
          </span>
        </div>
        <div className="flex items-center justify-between gap-3">
          <span className="font-semibold text-yellow-900">
            {getLocalizedString(schedule.weekends, locale)}
          </span>
          <span className="text-yellow-800 font-bold bg-yellow-300/50 px-2 py-0.5 rounded-full text-xs">
            {getLocalizedString(schedule.weekendsUntil, locale)}
          </span>
        </div>
        {schedule.disclaimer && (
          <p className="mt-1 text-xs text-yellow-800/70 italic">
            * {getLocalizedString(schedule.disclaimer, locale)}
          </p>
        )}
      </div>
    </div>
  );
}

function MenuItemRow({
  item,
  hasDoseGarrafa,
  t,
  locale,
}: {
  item: MenuItem;
  hasDoseGarrafa?: boolean;
  t: Translation;
  locale: Locale;
}) {
  const showDoseGarrafa = hasDoseGarrafa && (item.priceDose || item.priceGarrafa);

  return (
    <li className="flex items-start justify-between gap-2 py-4 border-b border-dashed border-[#D1D1D1] last:border-0 hover:bg-black/5 transition-colors px-2 -mx-2 rounded-lg">
      {/* Left: code + name + note */}
      <div className="flex-1 min-w-0 overflow-hidden">
        <div className="flex items-baseline gap-2 flex-wrap">
          {item.code && (
            <span className="text-[#7C3A00] text-[10px] font-bold shrink-0 bg-botequim-highlight px-1.5 py-0.5 rounded-[4px] shadow-sm">
              {item.code}
            </span>
          )}
          <span className="text-botequim-text text-[16px] font-subtitle font-semibold leading-snug break-words">
            {getLocalizedString(item.name, locale)}
          </span>
        </div>
        {item.note && (
          <p className="text-botequim-muted text-xs mt-1.5 leading-relaxed italic break-words font-body">
            {getLocalizedString(item.note, locale)}
          </p>
        )}
      </div>

      {/* Right: price(s) */}
      <div className="shrink-0 pl-3">
        {showDoseGarrafa ? (
          <div className="grid grid-cols-[80px_80px] sm:grid-cols-[100px_100px] gap-2">
            <div className="flex flex-col items-center">
              {item.priceDose !== undefined ? (
                <span className="text-botequim-text font-semibold font-subtitle text-sm tabular-nums">
                  {formatPrice(item.priceDose)}
                </span>
              ) : (
                <span className="text-botequim-muted/20 text-sm">—</span>
              )}
            </div>
            <div className="flex flex-col items-center">
              {item.priceGarrafa !== undefined ? (
                <span className="text-botequim-secondary font-semibold font-subtitle text-sm tabular-nums bg-botequim-secondary/10 px-1.5 py-0.5 rounded-sm">
                  {formatPrice(item.priceGarrafa)}
                </span>
              ) : (
                <span className="text-botequim-muted/20 text-sm">—</span>
              )}
            </div>
          </div>
        ) : (
          item.price > 0 && (
            <div className="text-right">
              <span className="text-botequim-text font-semibold font-subtitle text-base tabular-nums">
                {formatPrice(item.price)}
              </span>
            </div>
          )
        )}
      </div>
    </li>
  );
}

export default function MenuSection({ category }: { category: MenuCategory }) {
  const { t, locale } = useLanguage();
  const label = t[category.nameKey as keyof Translation] as string;

  return (
    <section
      id={`section-${category.id}`}
      className="scroll-mt-36 animate-fade-in w-full"
    >
      {/* Category Header */}
      <div className="flex items-center mb-6 relative px-2 sm:px-0">
        <div className="relative inline-flex items-center justify-center min-w-[240px] sm:min-w-[300px]">
          <div
            className="absolute inset-0 w-full h-full pointer-events-none opacity-95"
            style={{
              backgroundImage: 'url("/images/brush.svg")',
              backgroundSize: "100% 100%",
              backgroundRepeat: "no-repeat",
              backgroundPosition: "center",
            }}
          ></div>
          <h2 className="relative z-10 px-12 py-5 text-2xl sm:text-3xl font-heading font-bold text-white uppercase tracking-tight text-center">
            {label}
          </h2>
        </div>
      </div>

      {/* Items */}
      <div className="bg-botequim-card border-0 rounded-2xl p-4 sm:p-6 shadow-[0_4px_6px_rgba(0,0,0,0.05)] w-full relative">
        {/* Promotion schedule badge */}
        {category.promotionSchedule && (
          <PromotionScheduleBadge
            schedule={category.promotionSchedule}
            locale={locale}
          />
        )}

        {category.hasDoseGarrafa && (
          <div className="flex justify-end pr-2 pb-3 mb-2 border-b border-dashed border-[#D1D1D1]">
            <div className="grid grid-cols-[80px_80px] sm:grid-cols-[100px_100px] gap-2 text-[10px] font-black uppercase tracking-widest text-botequim-muted text-center">
              <span>{t.dose}</span>
              <span>{t.garrafa}</span>
            </div>
          </div>
        )}
        <ul className="w-full">
          {category.items.map((item, i) => (
            <MenuItemRow
              key={`${item.code}-${i}`}
              item={item}
              hasDoseGarrafa={category.hasDoseGarrafa}
              t={t}
              locale={locale}
            />
          ))}
        </ul>
      </div>
    </section>
  );
}
