// import React from "react";
// import { Pie } from "react-chartjs-2";
// import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";

// ChartJS.register(ArcElement, Tooltip, Legend);

// const PieChart = () => {
//   const data = {
//     labels: ["Chairs", "Tables", "Sofas", "Beds"],
//     datasets: [
//       {
//         data: [30, 20, 25, 25],
//         backgroundColor: ["#ff6384", "#36a2eb", "#ffcd56", "#4bc0c0"],
//       },
//     ],
//   };

//   return <Pie data={data} />;
// };

// export default PieChart;





import React from "react";
import { Pie } from "react-chartjs-2";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";

ChartJS.register(ArcElement, Tooltip, Legend);

const PieChart = () => {
  const data = {
    labels: ["Chairs", "Tables", "Sofas", "Beds"],
    datasets: [
      {
        data: [30, 20, 25, 25],
        backgroundColor: ["#ff6384", "#36a2eb", "#ffcd56", "#4bc0c0"],
      },
    ],
  };

  return <Pie data={data} />;
};

export default PieChart;

