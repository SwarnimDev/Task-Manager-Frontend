import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query";
import { getProjectById, updateProject, deleteProject } from "../api/projectsApi";

export const useProjectDetails = (projectId: string) => {
  const queryClient = useQueryClient();

  const projectQuery = useQuery({
    queryKey: ["project", projectId],
    queryFn: () => getProjectById(projectId),
    enabled: !!projectId,
  });

  const editProject = useMutation({
     mutationFn: (payload: { id: string; data: any }) =>
      updateProject(payload),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["project", projectId] });
      queryClient.invalidateQueries({ queryKey: ["projects"] });
    },
  });

  const removeProject = useMutation({
    mutationFn: (id: string) => deleteProject(id),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["projects"] });
    },
  });

  return { projectQuery, editProject, removeProject };
};
