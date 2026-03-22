/** Factual practice details — aligned with public directory profile. */

export const practice = {
  therapistName: "Melissa Gobin Borski",
  credentials: "LCSW, LICSW",
  title: "Clinical Social Work / Therapist",
  phoneDisplay: "(860) 390-5189",
  phoneTel: "+18603905189",
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
