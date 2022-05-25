import axios from "axios";
import { DataCurrency } from "../types/currency";

export const getCurrency = async (): Promise<DataCurrency> => {
  const response = await axios.get(
    "https://currencyscoop.p.rapidapi.com/latest",
    {
      headers: {
        "X-RapidAPI-Host": "currencyscoop.p.rapidapi.com",
        "X-RapidAPI-Key": "e7845a5612mshe0f611758efb8f0p1578e6jsncc223770c5e8",
      },
    }
  );
  return response.data.response;
};
