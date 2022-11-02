import { Box } from "@mui/system";
import React from "react";
import Header from "../../components/Header";

const Dashboard = () => {
  return (
    <Box m="20px">
      <Box display="flex" justifyContent="space-between" alignItems="center">
        <Header title="DASHBOARD" subtitle="Welcome to you Dashboard" />
      </Box>
    </Box>
  );
};

export default Dashboard;