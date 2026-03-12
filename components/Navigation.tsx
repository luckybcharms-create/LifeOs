import React from 'react';
import Link from 'next/link';
import { 
  Home, 
  Activity, 
  Wallet, 
  Car, 
  Trophy, 
  ShieldCheck, 
  Menu,
  Settings,
  LogOut
} from "lucide-react";
import { Button } from "@/components/ui/button";

export function SidebarNavigation() {
  const links = [
    { name: 'Dashboard', href: '/', icon: Home },
    { name: 'Fitness', href: '/fitness', icon: Activity },
    { name: 'Finances', href: '/finances', icon: Wallet },
    { name: 'Vehicles', href: '/vehicles', icon: Car },
    { name: 'Sports Hub', href: '/sports', icon: Trophy },
    { name: 'Vault', href: '/vault', icon: ShieldCheck },
  ];

  return (
    <aside className="hidden lg:flex flex-col w-64 border-r border-border h-screen sticky top-0 bg-card/30 backdrop-blur-sm">
      <div className="p-8">
        <h2 className="text-2xl font-headline font-bold text-primary tracking-tight">LifeOS</h2>
      </div>
      
      <nav className="flex-1 px-4 space-y-1">
        {links.map((link) => (
          <Link key={link.name} href={link.href}>
            <span className="flex items-center gap-3 px-4 py-3 rounded-lg text-sm font-medium hover:bg-primary/10 hover:text-primary transition-all group">
              <link.icon className="size-5 text-muted-foreground group-hover:text-primary" />
              {link.name}
            </span>
          </Link>
        ))}
      </nav>

      <div className="p-4 border-t border-border space-y-2">
        <Button variant="ghost" className="w-full justify-start gap-3 text-muted-foreground">
          <Settings className="size-5" />
          Settings
        </Button>
        <Button variant="ghost" className="w-full justify-start gap-3 text-destructive hover:bg-destructive/10">
          <LogOut className="size-5" />
          Logout
        </Button>
      </div>
    </aside>
  );
}

export function MobileNavigation() {
  return (
    <div className="lg:hidden fixed bottom-0 left-0 right-0 z-50 bg-card/80 backdrop-blur-lg border-t border-border px-6 py-3 flex justify-between items-center">
      <Link href="/"><Home className="size-6" /></Link>
      <Link href="/fitness"><Activity className="size-6" /></Link>
      <Link href="/finances"><Wallet className="size-6" /></Link>
      <Link href="/sports"><Trophy className="size-6" /></Link>
      <Link href="/vault"><ShieldCheck className="size-6" /></Link>
    </div>
  );
}
