import axiosClient from "../../../api/axiosClient";

export interface TaskInput {
  name: string;
  description?: string;
  status: "todo" | "in-progress" | "done";
  priority: "low" | "medium" | "high";
  dueDate?: string;
}

export const getTasks = (projectId: string) =>
  axiosClient.get(`/tasks/project/${projectId}`).then(res => res.data);

export const createTask = (projectId: string, data: TaskInput) =>
  axiosClient.post(`/tasks/project/${projectId}`, data).then(res => res.data);

export const updateTask = (taskId: string, data: TaskInput) =>
  axiosClient.put(`/tasks/${taskId}`, data).then(res => res.data);

export const deleteTask = (taskId: string) =>
  axiosClient.delete(`/tasks/${taskId}`).then(res => res.data);
