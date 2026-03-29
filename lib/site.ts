/** Factual practice details — aligned with public directory profile. */

/** Alt text for professional headshots (hero, about, optional secondary). */
export const therapistHeadshotAlt =
  "Melissa Gobin Borski, LCSW, therapist in Thompson CT" as const;

export const practice = {
  therapistName: "Melissa Gobin Borski",
  credentials: "LCSW, LICSW",
  title: "Clinical Social Work / Therapist",
  phoneDisplay: "(860) 377-2752",
  phoneTel: "+18603772752",
  email: "melissagobin@therapysecure.com",
  /** Short label for meta, footers, cards (sentence-style, not all-caps) */
  audienceShort: "Adults and adolescents 13 and over",
  /** Hero kicker — shown as written (not lowercased) */
  heroKicker: "For adults and adolescents in the Thompson area",
  /** Follows the opening “I’m … LCSW” line on About */
  audienceLine:
    "I work with adults and adolescents 13 and over one-on-one—often around anxiety, trauma, mood shifts, and the patterns that show up in relationships.",
  /** Blended CT + MA without feeling like a separate “jurisdiction list” */
  massachusettsTelehealthLine:
    "I’m licensed in Massachusetts as well, so telehealth there is an option when it’s a good clinical fit.",
  /** Service area line for focus / location blurbs */
  serviceAreaLine:
    "Thompson, Putnam, Woodstock, and Windham County—nearby or by telehealth, including for clients in Massachusetts when we’re a good fit.",
  /** Follows the street address on Services (avoids repeating “Thompson”) */
  officeReachLine:
    "Clients come from Putnam, Woodstock, Windham County, and surrounding Connecticut towns—or connect by telehealth, including from Massachusetts when we’re a good clinical fit.",
  /** Footer — avoids repeating “Thompson” after locality */
  footerServiceArea:
    "Serving Putnam, Woodstock, Windham County, and nearby Connecticut towns—and telehealth for Massachusetts clients when we’re a good fit.",
  addressLine1: "1020 Riverside Drive",
  addressLine2: "Thompson, CT 06255",
  locality: "North Grosvenor Dale & Thompson, Connecticut",
  nearbyAreas: ["Putnam", "Woodstock", "Windham County"] as const,
  education: "Springfield College, MSW, 2005",
  yearsInPractice: 23,
  licenses: [
    { state: "Connecticut", id: "007091" },
    { state: "Massachusetts", id: "120902", note: "2017" },
  ] as const,
} as const;

export const insuranceAccepted = [
  "Aetna",
  "Anthem",
  "BlueCross and BlueShield",
  "HUSKY Health",
  "Medicaid",
  "UnitedHealthcare",
] as const;

export const specialties = [
  "Anxiety",
  "Trauma & PTSD",
  "Depression",
  "Stress",
  "Anger management",
  "OCD",
  "Bipolar disorder",
  "Borderline personality disorder",
  "Behavioral concerns",
  "Coping skills",
  "Emotional distress",
  "Codependency",
  "Peer relationships",
  "Mood disorders",
  "Personality disorders",
  "Self-harm",
] as const;

export const approaches = [
  {
    name: "Cognitive Behavioral Therapy (CBT)",
    plain:
      "Exploring how thoughts, feelings, and behaviors connect—and building practical skills you can use between sessions.",
  },
  {
    name: "Dialectical Behavior Therapy (DBT)",
    plain:
      "Building emotional regulation, distress tolerance, and healthier relationship patterns with steadiness and respect.",
  },
  {
    name: "Interpersonal Therapy",
    plain:
      "Strengthening the way you relate to others and understand your needs within relationships.",
  },
  {
    name: "Motivational Interviewing",
    plain:
      "Collaborative conversation that honors your autonomy and helps meaningful change feel possible.",
  },
  {
    name: "Rational Emotive Behavior Therapy (REBT)",
    plain:
      "Gently examining beliefs that fuel distress and replacing them with more flexible, self-compassionate perspectives.",
  },
  {
    name: "Solution-Focused Brief Therapy",
    plain:
      "Identifying what’s already working and clarifying small, realistic steps toward the life you want.",
  },
  {
    name: "Trauma-Focused Therapy",
    plain:
      "Pacing safety and trust while processing difficult experiences at a speed that respects your nervous system.",
  },
] as const;

export const mapEmbedUrl =
  "https://www.google.com/maps?q=1020+Riverside+Drive%2C+Thompson%2C+CT+06255&output=embed";

export const mapSearchUrl =
  "https://www.google.com/maps/search/?api=1&query=1020+Riverside+Drive+Thompson+CT+06255";
