import React from 'react';
import { SidebarNavigation, MobileNavigation } from '@/components/Navigation';

export default function RootTemplate({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex min-h-screen">
      <SidebarNavigation />
      <div className="flex-1 pb-20 lg:pb-0 relative overflow-x-hidden">
        {children}
        <MobileNavigation />
      </div>
    </div>
  );
}
