import { useState } from "react";
import { Dialog, DialogActions, DialogContent, DialogTitle, Button, TextField } from "@mui/material";

const ProjectForm = ({ open, onClose, onSubmit }: any) => {
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");

  const handleSave = () => {
    if (!name.trim()) return alert("Name required");
    onSubmit({ name, description });
    setName("");
    setDescription("");
    onClose();
  };

  return (
    <Dialog open={open} onClose={onClose}>
      <DialogTitle>Create Project</DialogTitle>
      <DialogContent>
        <TextField
          label="Project Name"
          fullWidth
          variant="outlined"
          required
          margin="normal"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <TextField
          label="Description"
          fullWidth
          variant="outlined"
          multiline
          rows={3}
          margin="normal"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
        />
      </DialogContent>
      <DialogActions>
        <Button onClick={onClose}>Cancel</Button>
        <Button variant="contained" onClick={handleSave} className="bg-[#23235F]">
          Save
        </Button>
      </DialogActions>
    </Dialog>
  );
};

export default ProjectForm;
