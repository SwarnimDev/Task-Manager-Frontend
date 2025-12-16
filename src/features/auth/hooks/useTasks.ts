import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query";
import { getTasks, createTask, updateTask, deleteTask } from "../api/tasksApi";
import { TaskInput } from "../api/tasksApi";

export const useTasks = (projectId: string) => {
  const queryClient = useQueryClient();

  const tasksQuery = useQuery({
    queryKey: ["tasks", projectId],
    queryFn: () => getTasks(projectId),
    enabled: !!projectId,
  });

  const addTask = useMutation({
    mutationFn: (data: TaskInput) => createTask(projectId, data),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["tasks", projectId] });
    },
  });

  const editTask = useMutation({
    mutationFn: ({ taskId, data }: { taskId: string; data: TaskInput }) =>
      updateTask(taskId, data),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["tasks", projectId] });
    },
  });

  const removeTask = useMutation({
    mutationFn: (taskId: string) => deleteTask(taskId),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["tasks", projectId] });
    },
  });

  return { tasksQuery, addTask, editTask, removeTask };
};