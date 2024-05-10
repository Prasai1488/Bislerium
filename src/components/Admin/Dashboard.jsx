// import React from 'react'

// export default function Dashboard() {
//   return (
//     <div>Dashboard</div>
//   )
// }

import React, { useEffect, useState } from "react";
import $axios from "../../lib/axios/axios.instance";

function Dashboard() {
  const [dashboardDetails, setDashboardDetails] = useState(null);

  useEffect(() => {
    $axios
      .get("dashboard-details")
      .then((response) => {
        setDashboardDetails(response.data.result);
      })
      .catch((error) => {
        console.error("Error fetching dashboard details", error);
      });
  }, []);

  return (
    <div>
      <h1>Dashboard</h1>
      {dashboardDetails && (
        <div>
          <p>Posts: {dashboardDetails.dashboardCount.posts}</p>
          <p>Comments: {dashboardDetails.dashboardCount.comments}</p>
          {/* Add more details as needed */}
        </div>
      )}
    </div>
  );
}

export default Dashboard;
