import { Card, CardContent, Typography, Button } from "@mui/material";

const ProjectCard = ({ project, onDelete }: any) => {
  const handleView = () => {
    window.location.href = `/projects/${project._id}`;
  };

  return (
    <Card className="shadow hover:shadow-lg transition">
      <CardContent>
        <Typography variant="h6" className="font-semibold">
          {project.name}
        </Typography>
        <Typography variant="body2" color="textSecondary">
          {project.description || "No description"}
        </Typography>
        <Typography variant="caption" className="text-gray-500">
          Updated: {new Date(project.updatedAt).toLocaleDateString()}
        </Typography>

        <div className="flex gap-2 mt-3">
          <Button size="small" onClick={handleView}>
            View
          </Button>
          <Button size="small" color="error" onClick={onDelete}>
            Delete
          </Button>
        </div>
      </CardContent>
    </Card>
  );
};

export default ProjectCard;
