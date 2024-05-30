import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";

export default function Page() {
  return (
    <Card>
      <CardHeader className="border-b border-border">
        <CardTitle>Uso de plano</CardTitle>
        <CardDescription>
          Atualmente você está utilizando o [current_plan]. Data de uso do
          plano: [next_due_date].
        </CardDescription>
      </CardHeader>

      <CardContent className="pt-6">
        <div className="space-y-2">
          <header className="flex items-center justify-between">
            <span className="text-muted-foreground text-sm">1/5</span>
            <span className="text-muted-foreground text-sm">20%</span>
          </header>
          <main>
            <Progress value={20} />
          </main>
        </div>
      </CardContent>

      <CardFooter className="flex items-center justify-between border-t border-border pt-6">
        <span>Para um maior limite de plano, assine o PRO</span>
        <Button>Atualizar para o PRO</Button>
      </CardFooter>
    </Card>
  );
}
