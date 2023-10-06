import PersistentDrawerLeft from "./SideBar";
import LineChartCard from "./charts/LineChart";
import PieChartCard from "./charts/PieChartCard";
import RadarChartCard from "./charts/RadarChart";
import BarChartCard from "./charts/BarChartCard";
import VerticalChartCard from "./charts/VerticalChartCard";
import PolarChartCard from "./charts/PolarChartCard";

export default function AdminDashboard() {

  const pieChartData = {
    labels: ["Red", "Blue", "Yellow", "Green", "Purple"],
    datasets: [
      {
        data: [12, 19, 3, 5, 2],
        backgroundColor: [
          "#FF6384",
          "#36A2EB",
          "#FFCE56",
          "#4CAF50",
          "#9C27B0",
        ],
      },
    ],
  };

  const radarChartData = {
    labels: [
      "Eating",
      "Drinking",
      "Sleeping",
      "Designing",
      "Coding",
      "Cycling",
      "Running",
    ],
    datasets: [
      {
        label: "Dataset 1",
        data: [65, 59, 90, 81, 56, 55, 40],
        backgroundColor: "rgba(75, 192, 192, 0.2)",
        borderColor: "rgba(75, 192, 192, 1)",
        pointBackgroundColor: "rgba(75, 192, 192, 1)",
      },
      // Add more datasets if needed
    ],
  };


  const labels = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];

  const lineChartData = {
    labels, 

    datasets: [
      {
        label: 'Dataset 1',
        data: [65, 59, 90, 81, 56, 55, 40, 443, 20, 12, 10, 12],
        borderColor: 'rgb(255, 99, 132)',
        backgroundColor: 'rgba(255, 99, 132, 0.5)',
      },
      {
        label: 'Dataset 2',
        data: [65, 59, 90, 81, 56, 55, 40, 443, 20, 12, 10, 12],
        borderColor: 'rgb(53, 162, 235)',
        backgroundColor: 'rgba(53, 162, 235, 0.5)',
      },
    ],
  };
  


  return (
    <PersistentDrawerLeft>
        <div className="flex flex-col w-full justify-center items-center">
            <p className="mb-10 mt-16 text-primary text-center text-5xl">Dashboard</p>
            <div className="grid grid-cols-3 gap-6 p-8">
                <LineChartCard title="Line Chart" data={lineChartData} />
                <PieChartCard title="Pie Chart" data={pieChartData} />
                <RadarChartCard title="Radar Chart" data={radarChartData} />
                <BarChartCard title="Horizontal Bar Chart" data={lineChartData} />
                <VerticalChartCard title="Vertical Bar Chart" data={lineChartData} />
                <PolarChartCard title="Polar Bar Chart" data={pieChartData} />
            </div>    
        </div>
    </PersistentDrawerLeft>
  );
}
