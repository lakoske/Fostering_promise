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

export function PhoneShell({ children }: { children: React.ReactNode }) {
  return (
    <div className="mx-auto flex min-h-dvh w-full max-w-[430px] flex-col bg-surface sm:my-6 sm:min-h-[860px] sm:rounded-[2.5rem] sm:border sm:border-black/10 sm:shadow-2xl overflow-hidden">
      {children}
    </div>
  );
}
