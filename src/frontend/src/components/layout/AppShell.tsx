import { Outlet } from '@tanstack/react-router';
import { HeaderNav } from './HeaderNav';
import { Footer } from './Footer';
import { FloatingWhatsAppButton } from '../contact/FloatingWhatsAppButton';

export function AppShell() {
  return (
    <div className="min-h-screen flex flex-col">
      <HeaderNav />
      <main className="flex-1">
        <Outlet />
      </main>
      <Footer />
      <FloatingWhatsAppButton />
    </div>
  );
}
