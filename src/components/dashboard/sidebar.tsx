import Link from "next/link";
import { cn } from "@/lib/utils";

export type SidebarTypes<T = any> = {
  children: React.ReactNode
  className?: string
} & T;

export function Sidebar({className, children}: SidebarTypes) {
  return (
    <aside className={cn([
      'border-r border-border flex flex-col space-y-6', className
    ])}>
      {children}
    </aside>
  )
}

export function SidebarHeader({className, children}: SidebarTypes) {
  return (
    <header className={cn(['px-6 py-3 border-b border-border', className])}>
      {children}
    </header>
  )
}

export function SidebarHeaderTitle({className, children}: SidebarTypes) {
  return (
    <h2 className={cn(['', className])}>
      {children}
    </h2>
  )
}

export function SidebarMain({className, children}: SidebarTypes) {
  return (
    <main className={cn(['px-3', className])}>
      {children}
    </main>
  )
}

export function SidebarNav({className, children}: SidebarTypes) {
  return (
    <nav className={cn(['', className])}>
      {children}
    </nav>
  )
}

export function SidebarNavMain({className, children}: SidebarTypes) {
  return (
    <main className={cn(['flex flex-col', className])}>
      {children}
    </main>
  )
}

export function SidebarNavHeader({className, children}: SidebarTypes) {
  return (
    <header className={cn(['', className])}>
      {children}
    </header>
  )
}

export function SidebarNavHeaderTitle({className, children}: SidebarTypes) {
  return (
    <div className={cn([
      'text-xs uppercase text-muted-foreground ml-3', className
    ])}>
      {children}
    </div>
  )
}

type SidebarNavLinkTypes = {
  href: string
  active?: boolean
}

export function SidebarNavLink({
  className, children, href, active
}: SidebarTypes<SidebarNavLinkTypes>) {
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

export function SidebarFooter({className, children}: SidebarTypes) {
  return (
    <footer className={cn([
      'p-6 mt-auto border-t border-border', className
    ])}>
      {children}
    </footer>
  )
}
