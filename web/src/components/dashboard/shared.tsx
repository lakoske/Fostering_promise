import {
  Bell,
  BookOpen,
  Briefcase,
  CreditCard,
  FileText,
  GraduationCap,
  HeartHandshake,
  HeartPulse,
  IdCard,
  LifeBuoy,
  Menu,
  PiggyBank,
  Scale,
  ShieldCheck,
  Ticket,
  User,
  Users,
  Wallet,
  type LucideIcon,
} from "lucide-react";

export const tileIcons: Record<string, LucideIcon> = {
  mentor: HeartHandshake,
  learn: BookOpen,
  wallet: Wallet,
  resources: LifeBuoy,
};

export const infoTopicIcons: Record<string, LucideIcon> = {
  vouchers: Ticket,
  credit: CreditCard,
  budget: PiggyBank,
  rights: Scale,
};

export const walletDocumentIcons: Record<string, LucideIcon> = {
  birth: FileText,
  license: IdCard,
  ssn: ShieldCheck,
};

export const resourceServiceIcons: Record<string, LucideIcon> = {
  wellness: HeartPulse,
  education: GraduationCap,
  jobs: Briefcase,
  mentors: Users,
};

export const navIcons: LucideIcon[] = [GraduationCap, Bell, User, Menu];

export const iconGradientId = "duotone-icon-gradient";

/** Shared blue→teal gradient def. Render once per page; icons reference it via color="url(#duotone-icon-gradient)". */
export function IconGradientDefs() {
  return (
    <svg width="0" height="0" className="absolute" aria-hidden="true">
      <defs>
        <linearGradient id={iconGradientId} x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="var(--color-brand-blue)" />
          <stop offset="100%" stopColor="var(--color-brand-teal)" />
        </linearGradient>
      </defs>
    </svg>
  );
}

/** iOS-style status bar: time, signal, wifi, battery. Transparent — takes on whatever background sits behind it. */
export function StatusBar({ light = false }: { light?: boolean }) {
  return (
    <div
      className={`flex shrink-0 items-center justify-between px-6 pb-1 pt-3 text-[14px] font-semibold tabular-nums ${
        light ? "text-white" : "text-ink"
      }`}
    >
      <span>9:41</span>
      <div className="flex items-center gap-1.5">
        <svg width="18" height="12" viewBox="0 0 18 12" fill="currentColor" aria-hidden="true">
          <rect x="0" y="7" width="3" height="5" rx="0.5" />
          <rect x="5" y="5" width="3" height="7" rx="0.5" />
          <rect x="10" y="2.5" width="3" height="9.5" rx="0.5" />
          <rect x="15" y="0" width="3" height="12" rx="0.5" />
        </svg>
        <svg
          width="16"
          height="12"
          viewBox="0 0 16 12"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.5"
          aria-hidden="true"
        >
          <path
            d="M1 4.2a10.2 10.2 0 0 1 14 0M3.4 6.9a6.6 6.6 0 0 1 9.2 0M5.9 9.5a3.1 3.1 0 0 1 4.2 0"
            strokeLinecap="round"
          />
        </svg>
        <svg width="25" height="12" viewBox="0 0 25 12" fill="none" aria-hidden="true">
          <rect
            x="0.5"
            y="0.5"
            width="20"
            height="11"
            rx="2.5"
            stroke="currentColor"
            opacity="0.5"
          />
          <rect x="2" y="2" width="17" height="8" rx="1.5" fill="currentColor" />
          <rect x="22" y="4" width="1.8" height="4" rx="0.9" fill="currentColor" opacity="0.5" />
        </svg>
      </div>
    </div>
  );
}

export function PhoneShell({ children }: { children: React.ReactNode }) {
  return (
    <div className="mx-auto flex min-h-dvh w-full max-w-[430px] flex-col bg-surface sm:my-6 sm:min-h-[860px] sm:rounded-[2.5rem] sm:border sm:border-black/10 sm:shadow-2xl overflow-hidden">
      <IconGradientDefs />
      {children}
    </div>
  );
}
