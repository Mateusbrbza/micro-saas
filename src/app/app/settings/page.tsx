import {
  DashboardPage,
  DashboardPageHeader,
  DashboardPageHeaderTitle,
  DashboardPageMain
} from "@/components/dashboard/page";

export default function Settings() {
  return (
    <DashboardPage>
        <DashboardPageHeader>
          <DashboardPageHeaderTitle>
            Configurações
          </DashboardPageHeaderTitle>
        </DashboardPageHeader>

        <DashboardPageMain>
          Configurações
        </DashboardPageMain>
      </DashboardPage>
  )
}
