import { useState, useEffect } from "react";
import {
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  Button,
  TextField,
} from "@mui/material";
import { ProjectInput } from "../features/auth/api/projectsApi";

interface ProjectFormProps {
  open: boolean;
  onClose: () => void;
  onSubmit: (data: ProjectInput) => void;
  project?: {
    _id: string;
    name: string;
    description?: string;
  } | null;
}

const ProjectForm = ({
  open,
  onClose,
  onSubmit,
  project,
}: ProjectFormProps) => {
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");

  // Load project info when editing
  useEffect(() => {
    if (project) {
      setName(project.name);
      setDescription(project.description || "");
    } else {
      setName("");
      setDescription("");
    }
  }, [project]);

  const handleSave = () => {
    if (!name.trim()) return alert("Project name is required");

    onSubmit({ name, description });

    onClose();
  };

  return (
    <Dialog open={open} onClose={onClose} fullWidth maxWidth="sm">
      <DialogTitle>{project ? "Edit Project" : "Create Project"}</DialogTitle>

      <DialogContent>
        <TextField
          label="Project Name"
          fullWidth
          required
          margin="normal"
          variant="outlined"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />

        <TextField
          label="Description"
          fullWidth
          multiline
          rows={3}
          margin="normal"
          variant="outlined"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
        />
      </DialogContent>

      <DialogActions>
        <Button onClick={onClose}>Cancel</Button>
        <Button
          variant="contained"
          onClick={handleSave}
          sx={{ backgroundColor: "#23235F", color: "white" }}
        >
          {project ? "Update" : "Create"}
        </Button>
      </DialogActions>
    </Dialog>
  );
};

export default ProjectForm;
