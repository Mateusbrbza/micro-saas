import { cn } from "@/lib/utils";

export type PageGenericTypes<T = any> = {
  children: React.ReactNode
  className?: string
} & T;

export function DashboardPage({
  className,
  children,
}: PageGenericTypes) {
  return <section className={cn(['h-screen', className])}>{children}</section>
}

export function DashboardPageHeader({
  className,
  children,
}: PageGenericTypes) {
  return (
    <header
      className={cn([
        'px-6 h-12 border-b border-border flex items-center justify-between',
        className,
      ])}
    >
      {children}
    </header>
  )
}

export function DashboardPageHeaderTitle({
  className,
  children,
}: PageGenericTypes) {
  return (
    <span
      className={cn(['text-sm text-muted-foreground uppercase', className])}
    >
      {children}
    </span>
  )
}

export function DashboardPageHeaderNav({
  className,
  children,
}: PageGenericTypes) {
  return <nav className={cn(['', className])}>{children}</nav>
}

export function DashboardPageMain({
  className,
  children,
}: PageGenericTypes) {
  return <main className={cn(['p-6', className])}>{children}</main>
}
