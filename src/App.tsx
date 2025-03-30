import { useEffect, useState } from "react";
import DataTable from "./components/DataTable";
import BarChart from "./components/chart/BarChart";
import { fetchSalesData, SaleData } from "./components/Api";
import { Container, Divider, Ring, RingItem } from "./styles/App.styles";

const App: React.FC = () => {
  const [salesData, setSalesData] = useState<SaleData[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await fetchSalesData();
        setSalesData(data);
        setIsLoading(false);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };
    void fetchData();
  }, []);

  return (
    <>
      {isLoading ? (
        <Ring>
          <RingItem />
          <RingItem />
          <RingItem />
        </Ring>
      ) : (
        <Container>
          <div>
            <div className="top-chart">
              <div className="header-box">
                <p>Electricity annual sales overview</p>
                <h3>Electricity Annual Chart</h3>
              </div>
            </div>
            <div className="bottom-chart">
              <BarChart data={salesData} startColor={""} endColor={""} />
            </div>
          </div>
          <div>
            <div className="top-table">
              <div className="header-box">
                <p>Sales data overview</p>
                <h3>Electricity Annual Details</h3>
              </div>
            </div>
            <Divider></Divider>
            <div className="bottom-table">
              <DataTable data={salesData} />
            </div>
          </div>
        </Container>
      )}
    </>
  );
};

export default App;
