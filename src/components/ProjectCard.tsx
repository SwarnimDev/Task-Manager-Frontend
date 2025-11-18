import { Card, CardContent, Typography, Button, Box } from "@mui/material";
import VisibilityRoundedIcon from "@mui/icons-material/VisibilityRounded";
import EditRoundedIcon from "@mui/icons-material/EditRounded";
import DeleteRoundedIcon from "@mui/icons-material/DeleteRounded";

interface Project {
  _id: string;
  name: string;
  description: string;
  updatedAt: string;
}

interface ProjectCardProps {
  project: Project;
  onDelete: () => void;
  onEdit: (project: Project) => void;
}

const ProjectCard: React.FC<ProjectCardProps> = ({
  project,
  onDelete,
  onEdit,
}) => {
  const handleView = () => {
    // This is safe to use in a web context
    window.location.href = `/projects/${project._id}`;
  };

  return (
    // Card styling for equal height, rounded corners, and smooth hover effects
    <Card
      className="h-full rounded-xl shadow-lg border border-gray-100 
                 transition-all duration-300 ease-in-out 
                 transform hover:-translate-y-1 hover:shadow-2xl"
      sx={{ display: "flex", flexDirection: "column" }}
    >
      <CardContent sx={{ flexGrow: 1 }}>
        {/* Project Name */}
        <Typography
          variant="h6"
          className="font-bold text-[#232360] mb-2"
          sx={{
            overflow: "hidden",
            textOverflow: "ellipsis",
            whiteSpace: "nowrap",
          }}
        >
          {project.name}
        </Typography>

        {/* Description - Limited height for uniform card size */}
        <Typography
          variant="body2"
          color="#768396"
          className="mb-4 overflow-hidden" // Fixed height for 2-3 lines of text
          sx={{
            display: "-webkit-box",
            WebkitLineClamp: 3,
            WebkitBoxOrient: "vertical",
          }}
        >
          {project.description || "No description provided for this project."}
        </Typography>

        {/* Last Updated */}
        <Typography
          variant="caption"
          className="text-[#232360] font-bold block mt-2"
        >
          Updated: {new Date(project.updatedAt).toLocaleDateString()}
        </Typography>
      </CardContent>

      {/* Actions: Added bg-slate-50 */}
      <Box className="flex gap-2 p-4 justify-end">
        {/* VIEW BUTTON */}
        <Button
          size="small"
          variant="contained"
          startIcon={<VisibilityRoundedIcon />}
          onClick={handleView}
          sx={{
            backgroundColor: "#4f46e5",
            color: "#fff",
            textTransform: "none",
            fontWeight: 500,
            "&:hover": { backgroundColor: "#4338ca" },
          }}
        >
          View
        </Button>

        {/* EDIT BUTTON */}
        <Button
          size="small"
          variant="contained"
          startIcon={<EditRoundedIcon />}
          onClick={() => onEdit(project)}
          sx={{
            backgroundColor: "#0ea5e9",
            color: "#fff",
            textTransform: "none",
            fontWeight: 500,
            "&:hover": { backgroundColor: "#0284c7" },
          }}
        >
          Edit
        </Button>

        {/* DELETE BUTTON */}
        <Button
          size="small"
          variant="contained"
          startIcon={<DeleteRoundedIcon />}
          onClick={onDelete}
          sx={{
            backgroundColor: "#dc2626",
            color: "#fff",
            textTransform: "none",
            fontWeight: 500,
            "&:hover": { backgroundColor: "#b91c1c" },
          }}
        >
          Delete
        </Button>
      </Box>
    </Card>
  );
};

export default ProjectCard;
