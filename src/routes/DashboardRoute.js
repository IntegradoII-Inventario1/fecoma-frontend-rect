import { Route, Routes } from "react-router-dom";
import SidebarComponent from "../components/SidebarComponent";
import DashboardScreen from "../screens/DashboardScreen";
import IngresosScreen from "../screens/IngresosScreen";

const DashboardRoute = () => {


  return (
    <>
      <div className="flex w-full max-h-screen font-sans bg-gray-200 dark:bg-gray-800 transition-colors duration-300">
        <SidebarComponent />
        <div className="flex flex-col flex-1 gap-6 p-4 overflow-auto">
          <Routes>
           
              <Route path="dashboard" element={<DashboardScreen />} />
              <Route path="ingresos" element={<IngresosScreen />} />
              <Route path="/" element={<DashboardScreen />} />
            
          </Routes>
        </div>
      </div>
    </>
  );
};

export default DashboardRoute;
