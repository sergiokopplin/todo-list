"use client";

import Form from "./form";
import Sort from "./sort";
import Task from "./task";
import { httpGet } from "@api/client";
import { TaskDto } from "@api/dtos/TaskDto";
import { queryKeys } from "@hooks/redux";
import { sortMethods, SortingOptions } from "@lib/sort";
import { useQuery } from "@tanstack/react-query";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@ui/accordion";
import { useState } from "react";

type Props = {
  initialData: TaskDto[];
  token: string;
};

function App({ initialData, token }: Props) {
  const { data: tasks } = useQuery({
    queryKey: [queryKeys.tasks],
    queryFn: () =>
      httpGet(
        "/tasks",
        {
          page: 1,
          pageSize: 100,
        },
        token
      ).then((res) => (res ? res.data : [])),
    initialData: initialData,
  });

  const defaultSorting: SortingOptions = {
    fn: "sortTasksByImportance",
    order: "desc",
  };
  const [sorting, setSorting] = useState<SortingOptions>(defaultSorting);

  const notFinishedTasks = tasks
    .filter((x) => !x.isCompleted)
    .sort((a, b) => {
      if (sorting.order === "asc") return sortMethods[sorting.fn](a, b);
      return sortMethods[sorting.fn](b, a);
    });

  const finishedTasks = tasks
    .filter((x) => x.isCompleted)
    .sort((a, b) => {
      if (sorting.order === "asc") return sortMethods[sorting.fn](a, b);
      return sortMethods[sorting.fn](b, a);
    });

  return (
    <>
      <Sort
        sorting={sorting}
        defaultSorting={defaultSorting}
        setSorting={setSorting}
      />

      <Form />

      {notFinishedTasks.length > 0 && (
        <ul className="flex flex-col gap-y-2">
          {notFinishedTasks.map((task) => (
            <Task key={task.id} {...task} />
          ))}
        </ul>
      )}

      {finishedTasks.length > 0 && (
        <Accordion type="single" collapsible className="mt-4">
          <AccordionItem value="finished-tasks">
            <AccordionTrigger className="hover:no-underline">
              <div className="flex items-center gap-x-4 text-sm">
                <p>Completed</p>
                <span className="font-normal text-neutral-600 dark:text-neutral-400">
                  {finishedTasks.length}
                </span>
              </div>
            </AccordionTrigger>
            <AccordionContent>
              <ul className="flex flex-col gap-y-2">
                {finishedTasks.map((task) => (
                  <Task key={task.id} {...task} />
                ))}
              </ul>
            </AccordionContent>
          </AccordionItem>
        </Accordion>
      )}
    </>
  );
}

export default App;
