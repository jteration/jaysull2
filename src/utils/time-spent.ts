import { Path } from "vue-i18n";

const msInDay = 86400000;

export function getTimeSpent(start: Date, t: (key: Path | number) => string): string {
  const now = new Date();
  const diff = now.getTime() - start.getTime();
  const years = Math.floor(diff / (msInDay * 365));
  const diffMinusYears = diff - years * (msInDay * 365);
  const months = Math.floor(diffMinusYears / (msInDay * 30));
  const diffMinusYearsAndMonths = diffMinusYears - months * (msInDay * 30);
  const days = Math.floor(diffMinusYearsAndMonths / msInDay);

  return `${years} ${years > 1 || years === 0 ? t("pages.Experience.years") : t("pages.Experience.year")}, ${months} ${
    months > 1 || months === 0 ? t("pages.Experience.months") : t("pages.Experience.month")
  }, ${t("pages.Experience.and")} ${days} ${
    days > 1 || days === 0 ? t("pages.Experience.days") : t("pages.Experience.day")
  }`;
}
