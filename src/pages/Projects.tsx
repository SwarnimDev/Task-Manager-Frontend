import DashboardLayout from "../components/DashboardLayout";
import { Button, CircularProgress, Typography} from "@mui/material";
import Grid from "@mui/system/Grid";
import { useState } from "react";
import { useProjects } from "../features/auth/hooks/useProjects";
import ProjectCard from "../components/ProjectCard";
import ProjectForm from "../components/ProjectForm";
import { ProjectInput } from "../features/auth/api/projectsApi";

const Projects = () => {
  const { projectsQuery, addProject, removeProject } = useProjects();
  const [openForm, setOpenForm] = useState(false);

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
        <Typography variant="h5" className="text-[#23235F] font-semibold">
          Your Projects
        </Typography>
        <Button
          variant="contained"
          onClick={() => setOpenForm(true)}
          className="bg-[#23235F]"
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
            />
          </Grid>
        ))}
      </Grid>

      {openForm && (
        <ProjectForm
          open={openForm}
          onClose={() => setOpenForm(false)}
          onSubmit={(data: ProjectInput) => addProject.mutate(data)}
        />
      )}
    </DashboardLayout>
  );
};

export default Projects;
