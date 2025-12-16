import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  Chip,
  IconButton,
} from "@mui/material";

import EditRoundedIcon from "@mui/icons-material/EditRounded";
import DeleteRoundedIcon from "@mui/icons-material/DeleteRounded";

const statusColorMap: any = {
  "todo": { label: "To Do", color: "default" },
  "in-progress": { label: "In Progress", color: "warning" },
  "done": { label: "Completed", color: "success" },
};

const priorityColorMap: any = {
  low: { label: "Low", color: "info" },
  medium: { label: "Medium", color: "primary" },
  high: { label: "High", color: "error" },
};

const TaskTable = ({ tasks, onEdit, onDelete }: any) => {
  return (
    <TableContainer component={Paper} className="rounded-xl shadow">
      <Table>
        <TableHead className="bg-gray-100">
          <TableRow>
            <TableCell className="font-bold">Task Name</TableCell>
            <TableCell className="font-bold">Status</TableCell>
            <TableCell className="font-bold">Priority</TableCell>
            <TableCell className="font-bold">Due Date</TableCell>
            <TableCell className="font-bold">Actions</TableCell>
          </TableRow>
        </TableHead>

        <TableBody>
          {tasks.map((task: any) => (
            <TableRow key={task._id}>
              <TableCell>{task.name}</TableCell>

              {/* Status Chip */}
              <TableCell>
                <Chip
                  label={statusColorMap[task.status].label}
                  color={statusColorMap[task.status].color}
                />
              </TableCell>

              {/* Priority Chip */}
              <TableCell>
                <Chip
                  label={priorityColorMap[task.priority].label}
                  color={priorityColorMap[task.priority].color}
                />
              </TableCell>

              <TableCell>
                {task.dueDate
                  ? new Date(task.dueDate).toLocaleDateString()
                  : "—"}
              </TableCell>

              {/* Actions */}
              <TableCell>
                <IconButton onClick={() => onEdit(task)}>
                  <EditRoundedIcon color="primary" />
                </IconButton>

                <IconButton onClick={() => onDelete(task._id)}>
                  <DeleteRoundedIcon color="error" />
                </IconButton>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default TaskTable;
