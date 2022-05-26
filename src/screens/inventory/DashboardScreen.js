import LineChartComponent from "../../components/LineChartComponent";
import StatsCardComponent from "../../components/StatsCardComponent";
import { datos } from "../../utils/datos";
import HeadComponent from "../../components/HeadComponent";

const DashboardScreen = () => {
  return (
    <>
      <HeadComponent titulo="Dashboard"/>
      <StatsCardComponent />
      <div className=" grid grid-cols-1 md:grid-cols-2 gap-6">
        {datos.map((data) => (
          <LineChartComponent
            key={data.id}
            datos={data.datos}
            etiquetas={data.etiquetas}
            titulo={data.titulo}
          />
        ))}
      </div>
    </>
  );
};

export default DashboardScreen;
