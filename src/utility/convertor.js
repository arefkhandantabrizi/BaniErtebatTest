export const EnglishToPersian = (s) => s.replace(/\d/g, (d) => "۰۱۲۳۴۵۶۷۸۹"[d]);
export const EnglishToArabic = (s) => s.replace(/\d/g, (d) => "٠١٢٣٤٥٦٧٨٩"[d]);

export const PersianToEnglish = (s) =>
  s.replace(/[۰-۹]/g, (d) => "۰۱۲۳۴۵۶۷۸۹".indexOf(d));
export const ArabicToEnglish = (s) =>
  s.replace(/[٠-٩]/g, (d) => "٠١٢٣٤٥٦٧٨٩".indexOf(d));

export const PersianToArabic = (s) =>
  s.replace(/[۰-۹]/g, (d) => "٠١٢٣٤٥٦٧٨٩"["۰۱۲۳۴۵۶۷۸۹".indexOf(d)]);
export const ArabicToPersian = (s) =>
  s.replace(/[٠-٩]/g, (d) => "۰۱۲۳۴۵۶۷۸۹"["٠١٢٣٤٥٦٧٨٩".indexOf(d)]);
