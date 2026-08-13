export const mockUser = {
  name: "Amara",
  unreadMessages: 3,
};

export const mockNavigator = {
  title: "Housing Navigator",
  stage: "Co-signer",
  stepIndex: 3,
  stepCount: 5,
};

export const mockNavigatorTask = {
  title: "Proof Of Income",
  description:
    "Proof that you have a steady way to pay rent (like pay stubs or your SILP/THP stipend).",
  primaryCta: "I Have It",
  secondaryCta: "How Do I Get It?",
};

export const mockInfoTopics: { key: string; label: string }[] = [
  { key: "vouchers", label: "How to use vouchers" },
  { key: "credit", label: "Establish credit" },
  { key: "budget", label: "Budgets and credit score" },
  { key: "rights", label: "Renter's rights" },
];

export const mockWalletDescription =
  "This secure repository is where you can store and access all the documents you need to apply for housing, schools, jobs and more...";

export const mockWalletDocuments: { key: string; label: string }[] = [
  { key: "birth", label: "Birth records" },
  { key: "license", label: "Driver's license" },
  { key: "ssn", label: "Social Security" },
];

export const mockCalendar = {
  month: "March",
  weekDays: ["SU", "MO", "TU", "WE", "TH", "FR", "SA"],
  // 6 rows x 7 cols, March starting on Sunday; 0 = blank/prev-month filler
  days: [
    [0, 0, 1, 2, 3, 4, 5],
    [6, 7, 8, 9, 10, 11, 12],
    [13, 14, 15, 16, 17, 18, 19],
    [20, 21, 22, 23, 24, 25, 26],
    [27, 28, 29, 30, 31, 0, 0],
  ],
  highlighted: [15, 24],
  proposedDates: ["March 15", "March 24"],
};

export const mockResourceServices: { key: string; label: string }[] = [
  { key: "wellness", label: "Access wellness / care services" },
  { key: "education", label: "Discover education programs" },
  { key: "jobs", label: "Connect to a job network" },
  { key: "mentors", label: "Connect with mentors" },
];

export const mockHousingUnits = [
  { image: "/images/mockup-assets/apartment-1.png", units: 10, city: "Gilroy, CA" },
  { image: "/images/mockup-assets/apartment-2.png", units: 2, city: "San Francisco, CA" },
  { image: "/images/mockup-assets/apartment-3.png", units: 4, city: "San Francisco, CA" },
  { image: "/images/mockup-assets/apartment-4.png", units: 2, city: "Stockton, CA" },
  { image: "/images/mockup-assets/apartment-5.png", units: 15, city: "Hollister, CA" },
  { image: "/images/mockup-assets/apartment-6.png", units: 2, city: "Gilroy, CA" },
] as const;

export const mockTiles: {
  key: string;
  label: string;
  badge?: number;
  href: string;
}[] = [
  {
    key: "mentor",
    label: "Mentor Connect",
    badge: 1,
    href: "/mentor",
  },
  {
    key: "learn",
    label: "Housing 101 Info Portal",
    href: "/learn",
  },
  {
    key: "wallet",
    label: "Your Digital Wallet",
    href: "/wallet",
  },
  {
    key: "resources",
    label: "Resources",
    href: "/resources",
  },
];
