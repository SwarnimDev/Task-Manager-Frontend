import React from "react";
import DashboardLayout from "../components/DashboardLayout";

const Tasks: React.FC = () => {
  return (
    <DashboardLayout>
      <div className="text-[#23235F] text-lg font-semibold">
        Here are your tasks
      </div>
    </DashboardLayout>
  );
};

export default Tasks;
