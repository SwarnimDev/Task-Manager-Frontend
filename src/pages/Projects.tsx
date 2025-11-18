import DashboardLayout from "../components/DashboardLayout";
import { Button, CircularProgress, Typography } from "@mui/material";
import Grid from "@mui/system/Grid";
import { useState } from "react";
import { useProjects } from "../features/auth/hooks/useProjects";
import ProjectCard from "../components/ProjectCard";
import ProjectForm from "../components/ProjectForm";
import { ProjectInput } from "../features/auth/api/projectsApi";

const Projects = () => {
  const { projectsQuery, editProject, addProject, removeProject } =
    useProjects();
  const [openForm, setOpenForm] = useState(false);
  const [selectedProject, setSelectedProject] = useState<any>(null);

  if (projectsQuery.isLoading) {
    return (
      <DashboardLayout>
        <div className="flex justify-center mt-20">
          <CircularProgress />
        </div>
      </DashboardLayout>
    );
  }

  return (
    <DashboardLayout>
      <div className="flex justify-between items-center mb-6">
        <Typography variant="h5" className="text-[#232360] font-bold">
          Your Projects
        </Typography>
        <Button
          variant="contained"
          onClick={() => setOpenForm(true)}
          sx={{
            backgroundColor: "1EA7FF",
            color: "#fff",
          }}
        >
          + New Project
        </Button>
      </div>

      <Grid container spacing={2}>
        {projectsQuery.data?.map((project: any) => (
          <Grid
            key={project._id}
            size={{
              xs: 12,
              sm: 6,
              md: 4,
            }}
          >
            <ProjectCard
              project={project}
              onDelete={() => removeProject.mutate(project._id)}
              onEdit={() => {
                setSelectedProject(project);
                setOpenForm(true);
              }}
            />
          </Grid>
        ))}
      </Grid>

      {openForm && (
        <ProjectForm
          open={openForm}
          project={selectedProject}
          onClose={() => {
            setSelectedProject(null); // reset on close
            setOpenForm(false);
          }}
          onSubmit={(data: ProjectInput) => {
            if (selectedProject) {
              // EDIT MODE
              editProject.mutate({
                id: selectedProject._id,
                data,
              });
            } else {
              // CREATE MODE
              addProject.mutate(data);
            }
          }}
        />
      )}
    </DashboardLayout>
  );
};

export default Projects;
