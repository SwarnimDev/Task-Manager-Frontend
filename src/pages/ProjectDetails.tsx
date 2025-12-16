import { useParams } from "react-router-dom";
import DashboardLayout from "../components/DashboardLayout";
import { Box, CircularProgress } from "@mui/material";
import ProjectHeader from "../components/ProjectHeader";
import SummaryCard from "../components/SummaryCard";
import TaskTable from "../components/TaskTable";
import { useProjectDetails } from "../features/auth/hooks/useProjectDetails";
import { useTasks } from "../features/auth/hooks/useTasks";

const ProjectDetails = () => {
  const { id } = useParams<{ id: string }>();

  const { projectQuery } = useProjectDetails(id!);
  const { tasksQuery } = useTasks(id!);

  if (projectQuery.isLoading || tasksQuery.isLoading) {
    return (
      <DashboardLayout>
        <Box className="flex justify-center mt-20">
          <CircularProgress />
        </Box>
      </DashboardLayout>
    );
  }

  const project = projectQuery.data;
  console.log("Project Data:", project);
  const tasks = tasksQuery.data || [];

  const total = tasks.length;
  const todo = tasks.filter((t: any) => t.status === "todo").length;
  const inProgress = tasks.filter((t: any) => t.status === "in-progress").length;
  const done = tasks.filter((t: any) => t.status === "done").length;

  return (
    <DashboardLayout>
      <Box className="space-y-6">
        <ProjectHeader project={project} />

        <Box className="bg-white rounded-xl shadow p-5">
          <h2 className="font-semibold text-[#232360]">Description</h2>
          <p className="text-gray-600 mt-2">
            {project.description || "No description provided."}
          </p>
        </Box>

        <Box className="grid grid-cols-1 sm:grid-cols-4 gap-4">
          <SummaryCard title="Total Tasks" value={total} />
          <SummaryCard title="To Do" value={todo} />
          <SummaryCard title="In Progress" value={inProgress} />
          <SummaryCard title="Done" value={done} />
        </Box>

        <TaskTable tasks={tasks} />
      </Box>
    </DashboardLayout>
  );
};

export default ProjectDetails;
