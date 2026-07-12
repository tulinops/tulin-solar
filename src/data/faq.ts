import type { Locale } from "@/i18n/config";

export type FaqItem = { q: string; a: string };

export const faqData: Record<Locale, FaqItem[]> = {
  en: [
    {
      q: "How much can I save?",
      a: "Most homeowners reduce their electricity bills by 70–90%, depending on system size, roof and usage.",
    },
    {
      q: "How long does installation take?",
      a: "Usually 2–5 working days after the required approvals are in place.",
    },
    {
      q: "Is subsidy available?",
      a: "Yes — Central Government subsidy is available for eligible residential rooftop solar systems, and we assist with the full process.",
    },
    {
      q: "Do you help with net metering?",
      a: "Yes, we handle the complete net-metering process so surplus power is credited to you.",
    },
    {
      q: "How long do solar panels last?",
      a: "Approximately 25–30 years, and our panels carry a 30-year warranty.",
    },
  ],
  hi: [
    {
      q: "मैं कितना बचा सकता हूँ?",
      a: "अधिकांश घर-मालिक सिस्टम आकार, छत और उपयोग के आधार पर अपना बिजली बिल 70–90% तक घटा लेते हैं।",
    },
    {
      q: "इंस्टॉलेशन में कितना समय लगता है?",
      a: "आवश्यक स्वीकृतियाँ मिलने के बाद आमतौर पर 2–5 कार्यदिवस।",
    },
    {
      q: "क्या सब्सिडी उपलब्ध है?",
      a: "हाँ — पात्र आवासीय रूफटॉप सोलर सिस्टम के लिए केंद्र सरकार की सब्सिडी उपलब्ध है, और हम पूरी प्रक्रिया में सहायता करते हैं।",
    },
    {
      q: "क्या आप नेट मीटरिंग में मदद करते हैं?",
      a: "हाँ, हम पूरी नेट-मीटरिंग प्रक्रिया संभालते हैं ताकि अतिरिक्त बिजली आपके खाते में जमा हो।",
    },
    {
      q: "सोलर पैनल कितने समय तक चलते हैं?",
      a: "लगभग 25–30 वर्ष, और हमारे पैनल पर 30-वर्ष की वारंटी होती है।",
    },
  ],
  te: [
    {
      q: "నేను ఎంత ఆదా చేయగలను?",
      a: "చాలామంది ఇంటి యజమానులు సిస్టమ్ పరిమాణం, పైకప్పు మరియు వినియోగం ఆధారంగా తమ కరెంట్ బిల్లును 70–90% వరకు తగ్గించుకుంటారు.",
    },
    {
      q: "ఇన్‌స్టాలేషన్‌కు ఎంత సమయం పడుతుంది?",
      a: "అవసరమైన అనుమతులు వచ్చిన తర్వాత సాధారణంగా 2–5 పని దినాలు.",
    },
    {
      q: "సబ్సిడీ అందుబాటులో ఉందా?",
      a: "అవును — అర్హత గల గృహ రూఫ్‌టాప్ సోలార్ సిస్టమ్‌లకు కేంద్ర ప్రభుత్వ సబ్సిడీ అందుబాటులో ఉంది, పూర్తి ప్రక్రియలో మేము సహాయపడతాం.",
    },
    {
      q: "నెట్ మీటరింగ్‌లో మీరు సహాయం చేస్తారా?",
      a: "అవును, అదనపు విద్యుత్ మీ ఖాతాకు జమ అయ్యేలా పూర్తి నెట్-మీటరింగ్ ప్రక్రియను మేము నిర్వహిస్తాం.",
    },
    {
      q: "సోలార్ ప్యానెల్‌లు ఎంతకాలం ఉంటాయి?",
      a: "సుమారు 25–30 సంవత్సరాలు, మా ప్యానెల్‌లకు 30-సంవత్సరాల వారంటీ ఉంది.",
    },
  ],
};
