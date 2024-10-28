import { useEffect, useState } from "react";
import { fetchSalesData, SaleData } from "./components/Api";
import { Container, Divider, Ring, RingItem } from "./styles/App.styles";
import { TableRow } from "@mui/material";

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
        Hello Guys.
       </Container>

      )}
    </>
  );
};

export default App;
