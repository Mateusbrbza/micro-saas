"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetFooter,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { useRef } from "react";
import {
  Form,
  FormField,
  FormItem,
  FormLabel,
  FormControl,
  FormDescription,
  FormMessage,
} from "@/components/ui/form";
import { useForm } from "react-hook-form";
import { Todo } from "../types";
import { upsertTodo } from "../actions";
import { zodResolver } from "@hookform/resolvers/zod";
import { upsertTodoSchema } from "../schema";
import { useRouter } from "next/navigation";
import { toast } from "@/components/ui/use-toast";

type TodoUpsertSheetProps = {
  children?: React.ReactNode;
  defaultValue?: Todo;
};

export function TodoUpsertSheet({ children }: TodoUpsertSheetProps) {
  const ref = useRef<HTMLDivElement>(null);
  const router = useRouter();

  const form = useForm({
    resolver: zodResolver(upsertTodoSchema),
  });

  const onSubmit = form.handleSubmit(async (data) => {
    await upsertTodo(data);
    router.refresh();

    ref.current?.click();

    toast({
      title: "Successo",
      description: "Sua tarefa foi atualizada com sucesso.",
    });
  });

  return (
    <Sheet>
      <SheetTrigger asChild>
        <div ref={ref}>{children}</div>
      </SheetTrigger>
      <SheetContent>
        <Form {...form}>
          <form onSubmit={onSubmit} className="space-y-8 h-screen">
            <SheetHeader>
              <SheetTitle>Adicionar Tarefa</SheetTitle>
              <SheetDescription>
                Adicione ou edite sua tarefa aqui. Clique em salvar quando
                finalizado.
              </SheetDescription>
            </SheetHeader>

            <FormField
              control={form.control}
              name="title"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Título</FormLabel>
                  <FormControl>
                    <Input
                      placeholder="Adicionar título da tarefa"
                      {...field}
                    />
                  </FormControl>
                  <FormDescription>
                    Este será mostrado como título da tarefa.
                  </FormDescription>
                  <FormMessage />
                </FormItem>
              )}
            />

            <SheetFooter className="mt-auto">
              <Button type="submit">Salvar alterações</Button>
            </SheetFooter>
          </form>
        </Form>
      </SheetContent>
    </Sheet>
  );
}
