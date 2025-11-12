import React, { FC, ReactNode } from "react";
import { InputAdornment, TextField } from "@mui/material";
import {
  LayoutDashboard,
  CheckSquare,
  Settings,
  History,
  Search,
} from "lucide-react";
import { Link, useLocation } from "react-router-dom";
import UserMenu from "./UserMenu";

interface SidebarItemProps {
  icon: React.ElementType;
  label: string;
}

const SidebarItem: FC<SidebarItemProps> = ({ icon: Icon, label }) => {
  const location = useLocation();
  const route = `/${label.toLowerCase()}`;
  const isActive =
    location.pathname === route ||
    (label === "Dashboard" && location.pathname === "/dashboard");

  return (
    <Link
      to={route === "/dashboard" ? "/dashboard" : route}
      className={`flex flex-col items-center justify-center space-y-1 p-2 rounded-lg transition ${
        isActive
          ? "bg-indigo-600 text-white"
          : "text-[#5F6388] hover:text-indigo-600"
      }`}
    >
      <Icon className={`w-6 h-6 ${isActive ? "text-white" : "text-[#5F6388]"}`} />
    </Link>
  );
};

interface DashboardLayoutProps {
  children: ReactNode;
}

const DashboardLayout: FC<DashboardLayoutProps> = ({ children }) => {
  return (
    <div className="flex h-screen bg-white text-gray-800">
      {/* Sidebar */}
      <aside className="w-20 flex flex-col items-center  border-gray-200 bg-white py-4">
        {/* Logo (top left) */}
        <div className="flex flex-col items-center mb-10">
          {/* <Avatar src="/logo192.png" alt="Logo" sx={{ width: 40, height: 40 }} /> */}
          <span className="text-md font-bold mt-2 text-indigo-700">
            TaskFlow
          </span>
        </div>

        {/* Icons (centered vertically) */}
        <nav className="flex-1 flex flex-col items-center justify-center space-y-8">
          <SidebarItem icon={LayoutDashboard} label="Dashboard" />
          <SidebarItem icon={CheckSquare} label="Tasks" />
          <SidebarItem icon={Settings} label="Settings" />
          <SidebarItem icon={History} label="Timeline" />
        </nav>
      </aside>

      {/* Main Content */}
      <div className="flex-1 flex flex-col">
        {/* Header */}
        <header className="h-14 flex items-center justify-between px-6 border-b border-gray-200 bg-white relative">
          {/* Centered search bar */}
          <div className="absolute left-1/2 transform -translate-x-1/2 w-1/4">
            <TextField
              variant="outlined"
              placeholder="Search anything..."
              size="small"
              fullWidth
              InputProps={{
                endAdornment: (
                  <InputAdornment position="end">
                    <Search className="w-5 h-5 text-[#23235F]" />
                  </InputAdornment>
                ),
              }}
              sx={{
                "& .MuiOutlinedInput-root": {
                  borderRadius: 0, // square corners
                  backgroundColor: "#f9fafb",
                  color: "#23235F", // text color
                  "& fieldset": { borderColor: "#e5e7eb" },
                  "&:hover fieldset": { borderColor: "#d1d5db" },
                  "&.Mui-focused fieldset": { borderColor: "#3b82f6" },
                },
                "& .MuiInputBase-input::placeholder": {
                  color: "#23235F",
                  opacity: 0.8,
                },
              }}
            />
          </div>

          {/* Right corner user icon */}
        <UserMenu />

        </header>

        {/* Page Content */}
        <main className="flex-1 p-6 overflow-y-auto bg-[#F3F4F8]">
          {children}
        </main>
      </div>
    </div>
  );
};

export default DashboardLayout;
