import { Box, Button, Chip, Typography } from "@mui/material";
import EditRoundedIcon from "@mui/icons-material/EditRounded";
import DeleteRoundedIcon from "@mui/icons-material/DeleteRounded";

const statusColors: any = {
  active: "success",
  "on-hold": "warning",
  completed: "primary",
};

const ProjectHeader = ({ project }: any) => {
  return (
    <Box className="bg-white shadow rounded-xl p-6 flex items-start justify-between">
      <Box>
        <Typography variant="h4" className="font-bold text-[#232360]">
          {project.name}
        </Typography>

        <Box className="flex items-center gap-3 mt-2">
          <Chip
            label={project.status}
            color={statusColors[project.status]}
            variant="filled"
          />

          <Typography variant="body2" className="text-gray-500">
            Updated: {new Date(project.updatedAt).toLocaleDateString()}
          </Typography>
        </Box>
      </Box>

      <Box className="flex gap-2">
        <Button
          variant="contained"
          startIcon={<EditRoundedIcon />}
          sx={{ backgroundColor: "#0ea5e9" }}
        >
          Edit
        </Button>

        <Button
          variant="contained"
          color="error"
          startIcon={<DeleteRoundedIcon />}
        >
          Delete
        </Button>
      </Box>
    </Box>
  );
};

export default ProjectHeader;
