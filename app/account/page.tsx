import Link from "next/link";
import { AccountProfile } from "@/components/account-profile";

export const metadata = { title: "My Account | BookLaunch Academy" };

export default function AccountPage() {
  return <main className="mx-auto max-w-3xl px-6 py-10">
    <header className="flex items-center justify-between gap-4">
      <Link href="/dashboard" className="font-bold text-primary">BOOKLAUNCH ACADEMY</Link>
      <Link href="/dashboard" className="text-sm text-muted-foreground hover:text-foreground">Back to dashboard</Link>
    </header>
    <section className="py-10">
      <p className="text-sm font-semibold uppercase tracking-widest text-primary">Your account</p>
      <h1 className="mt-3 text-3xl font-bold sm:text-4xl">Account settings</h1>
      <p className="mt-3 max-w-2xl leading-7 text-muted-foreground">Manage the basic details connected to your BookLaunch Academy learning account.</p>
    </section>
    <AccountProfile />
  </main>;
}
