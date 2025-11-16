import axiosClient from "../../../api/axiosClient";

export interface ProjectInput {
  name: string;
  description?: string;
}

export const getProjects = () =>
  axiosClient.get("/projects").then((res) => res.data);

export const createProject = (data: ProjectInput) =>
  axiosClient.post("/projects", data).then((res) => res.data);

export const updateProject = ({
  id,
  data,
}: {
  id: string;
  data: ProjectInput;
}) => axiosClient.put(`/projects/${id}`, data).then((res) => res.data);

export const deleteProject = (id: string) =>
  axiosClient.delete(`/projects/${id}`).then((res) => res.data);
