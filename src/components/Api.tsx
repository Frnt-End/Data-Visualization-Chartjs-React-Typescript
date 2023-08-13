import axios from "axios";

export interface SaleData {
  period: number;
  stateDescription: string;
  sectorName: string;
  sales: number;
}

export const fetchSalesData = async (): Promise<SaleData[]> => {
  try {
    const response = await axios.get<{
      response: { data: SaleData[] };
    }>(
      "https://api.eia.gov/v2/seriesid/ELEC.SALES.CO-RES.A?api_key=nIa7SZTCOf4VWCgh5fQUqXKNVdTZWzmzDDBVukfI"
    );
    return response.data.response.data;
  } catch (error) {
    console.error("Error fetching data:", error);
    throw error;
  }
};
