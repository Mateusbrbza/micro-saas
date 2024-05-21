import {
  DashboardPage,
  DashboardPageHeader,
  DashboardPageHeaderNav,
  DashboardPageHeaderTitle,
  DashboardPageMain
} from "@/components/dashboard/page";
import { TodoDataTable } from "./_components/todo-data-table";
import { TodoUpsertSheet } from "./_components/todo-upsert-sheet";
import { Button } from "@/components/ui/button";

export default async function Page() {
    return (
      <DashboardPage>
        <DashboardPageHeader>
          <DashboardPageHeaderTitle>Tarefas</DashboardPageHeaderTitle>
          <DashboardPageHeaderNav>
            <TodoUpsertSheet>
              <Button>Add todo</Button>
            </TodoUpsertSheet>
          </DashboardPageHeaderNav>
        </DashboardPageHeader>

        <DashboardPageMain>
          <TodoDataTable />
        </DashboardPageMain>
      </DashboardPage>
    )
}
