import Link from "next/link";
import { cn } from "@/lib/utils";

export type DashboardSidebarTypes<T = any> = {
  children: React.ReactNode
  className?: string
} & T;

export function DashboardSidebar({className, children}: DashboardSidebarTypes) {
  return (
    <aside className={cn([
      'border-r border-border flex flex-col space-y-6', className
    ])}>
      {children}
    </aside>
  )
}

export function DashboardSidebarHeader({className, children}: DashboardSidebarTypes) {
  return (
    <header className={cn(['px-6 py-3 border-b border-border', className])}>
      {children}
    </header>
  )
}

export function DashboardSidebarHeaderTitle({className, children}: DashboardSidebarTypes) {
  return (
    <h2 className={cn(['', className])}>
      {children}
    </h2>
  )
}

export function DashboardSidebarMain({className, children}: DashboardSidebarTypes) {
  return (
    <main className={cn(['px-3', className])}>
      {children}
    </main>
  )
}

export function DashboardSidebarNav({className, children}: DashboardSidebarTypes) {
  return (
    <nav className={cn(['', className])}>
      {children}
    </nav>
  )
}

export function DashboardSidebarNavMain({className, children}: DashboardSidebarTypes) {
  return (
    <main className={cn(['flex flex-col', className])}>
      {children}
    </main>
  )
}

export function DashboardSidebarNavHeader({className, children}: DashboardSidebarTypes) {
  return (
    <header className={cn(['', className])}>
      {children}
    </header>
  )
}

export function DashboardSidebarNavHeaderTitle({className, children}: DashboardSidebarTypes) {
  return (
    <div className={cn([
      'text-xs uppercase text-muted-foreground ml-3', className
    ])}>
      {children}
    </div>
  )
}

type DashboardSidebarNavLinkTypes = {
  href: string
  active?: boolean
}

export function DashboardSidebarNavLink({
  className, children, href, active
}: DashboardSidebarTypes<DashboardSidebarNavLinkTypes>) {
  return (
    <Link href={href} className={cn([
      'flex items-center text-xs px-3 py-2 rounded-md',
      active && 'bg-secondary',
      className
    ])}>
      {children}
    </Link>
  )
}

export function DashboardSidebarFooter({className, children}: DashboardSidebarTypes) {
  return (
    <footer className={cn([
      'p-6 mt-auto border-t border-border', className
    ])}>
      {children}
    </footer>
  )
}
