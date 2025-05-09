import { Request, Response } from "express";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export const getTasks = async (req: Request, res: Response): Promise<void> => {
  const { projectId, priority } = req.query;

  try {
    const tasks = await prisma.task.findMany({
      where: {
        ...(projectId && { projectId: Number(projectId) }),
        ...(priority && { priority: priority.toString() })
      },
      include: {
        author: true,
        assignee: true,
        comments: true,
        attachments: true
      }
    });
    res.json(tasks);
  } catch (error: any) {
    res.status(500).json({ message: `Error retrieving tasks: ${error.message}` });
  }
};

export const createTask = async (req: Request, res: Response): Promise<void> => {
  // Destructure and remove id if present
  const { id, ...taskData } = req.body;
  
  try {
    const newTask = await prisma.task.create({
      data: taskData // Only pass fields without id
    });
    res.status(201).json(newTask);
  } catch (error: any) {
    res.status(500).json({ 
      message: `Error creating task: ${error.message}`,
      meta: error.meta // Helps debug which field caused issues
    });
  }
};

export const updateTaskStatus = async (
  req: Request,
  res: Response
): Promise<void> => {
  const { taskId } = req.params;
  const { status } = req.body;
  try {
    const updatedTask = await prisma.task.update({
      where: {
        id: Number(taskId),
      },
      data: {
        status: status,
      },
    });
    res.json(updatedTask);
  } catch (error: any) {
    res.status(500).json({ message: `Error updating task: ${error.message}` });
  }
};

// get tasks associated with a specific user
export const getUserTasks = async (
  req: Request,
  res: Response
): Promise<void> => {
  const { userId } = req.params;
  try {
    const tasks = await prisma.task.findMany({
      where: {
        OR: [
          { authorUserId: Number(userId) },
          { assignedUserId: Number(userId) },
        ],
      },
      include: {
        author: true,
        assignee: true,
      },
    });
    res.json(tasks);
  } catch (error: any) {
    res
      .status(500)
      .json({ message: `Error retrieving user's tasks: ${error.message}` });
  }
};