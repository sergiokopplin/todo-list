import { tasks, type TaskType } from "@db/schema";
import { db } from "@db/sql";
import { auth } from "@lib/auth";
import {
  createTaskRequestValidator,
  updateTaskRequestValidator,
} from "@lib/types";
import { and, eq } from "drizzle-orm";
import { v4 } from "uuid";
import { ZodError } from "zod";

async function POST(request: Request) {
  const session = await auth();

  if (!session) return new Response("Unauthorized", { status: 401 });

  try {
    const task = createTaskRequestValidator.parse(await request.json());

    const entity = {
      ...task,
      id: v4(),
      isCompleted: false,
      isImportant: false,
      userId: session.user.id,
    };

    await db.insert(tasks).values(entity);

    const response: TaskType = {
      ...entity,
      description: null,
      createdAt: new Date(),
      updatedAt: new Date(),
      dueDate: entity.dueDate ?? null,
    };

    return new Response(JSON.stringify(response), { status: 201 });
  } catch (error) {
    if (error instanceof ZodError)
      return new Response(JSON.stringify(error.errors), {
        status: 400,
      });

    return new Response("Internal server error", { status: 500 });
  }
}

async function PATCH(request: Request) {
  const session = await auth();

  if (!session) return new Response("Unauthorized", { status: 401 });

  try {
    const task = updateTaskRequestValidator.parse(await request.json());

    await db
      .update(tasks)
      .set(task)
      .where(and(eq(tasks.id, task.id), eq(tasks.userId, session.user.id)));

    const response: TaskType = {
      ...task,
      description: task.description ?? null,
      dueDate: task.dueDate ?? null,
      isCompleted: task.isCompleted ?? false,
      isImportant: task.isImportant ?? false,
      createdAt: new Date(),
      updatedAt: new Date(),
      userId: session.user.id,
    };

    return new Response(JSON.stringify(response), { status: 200 });
  } catch (error) {
    if (error instanceof ZodError)
      return new Response(JSON.stringify(error.errors), {
        status: 400,
      });

    return new Response("Internal server error", { status: 500 });
  }
}

export { POST, PATCH };
