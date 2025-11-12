import React, { useState } from "react";
import { Menu, MenuItem, IconButton, Avatar } from "@mui/material";
import { User } from "lucide-react";
import { useNavigate } from "react-router-dom";

const UserMenu: React.FC = () => {
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);

  const handleClick = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

const navigate = useNavigate();

const handleLogout = () => {
  handleClose(); // 
  localStorage.clear(); 
  navigate("/signin"); 
};

  return (
    <div className="ml-auto">
      <IconButton
        onClick={handleClick}
        sx={{
          backgroundColor: "#f3f4f6",
          borderRadius: "9999px", // fully rounded
          p: 0.5,
          "&:hover": { backgroundColor: "#e5e7eb" },
        }}
      >
        <Avatar sx={{ width: 32, height: 32, bgcolor: "#4f46e5" }}>
          <User className="w-4 h-4 text-white" />
        </Avatar>
      </IconButton>

      <Menu
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        anchorOrigin={{
          vertical: "bottom",
          horizontal: "right",
        }}
        transformOrigin={{
          vertical: "top",
          horizontal: "right",
        }}
        PaperProps={{
          sx: {
            mt: 1,
            borderRadius: "8px",
            boxShadow: "0px 4px 12px rgba(0,0,0,0.1)",
            minWidth: 150,
          },
        }}
      >
        <MenuItem
          onClick={handleLogout}
          sx={{
            color: "#23235F",
            fontWeight: 500,
            "&:hover": { backgroundColor: "#EEF2FF", color: "#4F46E5" },
          }}
        >
          Logout
        </MenuItem>
      </Menu>
    </div>
  );
};

export default UserMenu;
