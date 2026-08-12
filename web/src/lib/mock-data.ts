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
