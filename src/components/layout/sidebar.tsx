import { Link, NavLink } from 'react-router-dom';
import {
  Building2,
  LayoutDashboard,
  LogOut,
  Settings,
  Users2,
  FolderKanban,
  Briefcase,
} from 'lucide-react';
import { cn } from '@/lib/utils';
import { Button } from '@/components/ui/button';
import { ScrollArea } from '@/components/ui/scroll-area';
import { Separator } from '@/components/ui/separator';

const sidebarNavItems = [
  {
    title: 'Dashboard',
    icon: LayoutDashboard,
    href: 'dashboard',
  },
  {
    title: 'Organization',
    icon: Building2,
    href: 'organization',
  },
  {
    title: 'Projects',
    icon: FolderKanban,
    href: '/projects',
  },
  {
    title: 'Employees',
    icon: Users2,
    href: '/employees',
  },
];

export function Sidebar() {
  return (
    <div className="flex h-screen flex-col border-r bg-background">
      <div className="p-6">
        <Link to="/" className="flex items-center gap-2" relative="path">
          <Briefcase className="h-6 w-6" />
          <span className="font-semibold">Acme Corp</span>
        </Link>
      </div>
      <Separator />
      <ScrollArea className="flex-1 px-4">
        <nav className="grid gap-2 p-2">
          {sidebarNavItems.map((item, index) => (
            <NavLink
              key={item.href}
              to={item.href}
              relative="route"
              className={({ isActive }) => {
                return cn(
                  'flex items-center gap-3 rounded-lg px-3 py-2 text-sm font-medium hover:bg-accent hover:text-accent-foreground transition-colors',
                  isActive && 'bg-accent'
                );
              }}
            >
              <item.icon className="h-4 w-4" />
              {item.title}
            </NavLink>
          ))}
        </nav>
      </ScrollArea>
      <Separator />
      <div className="p-4 grid gap-2">
        <Button variant="ghost" className="w-full justify-start gap-2">
          <Settings className="h-4 w-4" />
          Settings
        </Button>
        <Button
          variant="ghost"
          className="w-full justify-start gap-2 text-destructive hover:text-destructive hover:bg-destructive/10"
        >
          <LogOut className="h-4 w-4" />
          Log out
        </Button>
      </div>
    </div>
  );
}
