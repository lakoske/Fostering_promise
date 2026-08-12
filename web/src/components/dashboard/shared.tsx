import {
  Bell,
  BookOpen,
  GraduationCap,
  HeartHandshake,
  LifeBuoy,
  Menu,
  User,
  Wallet,
  type LucideIcon,
} from "lucide-react";

export const tileIcons: Record<string, LucideIcon> = {
  mentor: HeartHandshake,
  learn: BookOpen,
  wallet: Wallet,
  resources: LifeBuoy,
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

export function PhoneShell({ children }: { children: React.ReactNode }) {
  return (
    <div className="mx-auto flex min-h-dvh w-full max-w-[430px] flex-col bg-surface sm:my-6 sm:min-h-[860px] sm:rounded-[2.5rem] sm:border sm:border-black/10 sm:shadow-2xl overflow-hidden">
      <IconGradientDefs />
      {children}
    </div>
  );
}
