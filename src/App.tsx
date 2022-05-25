import React, { useEffect, useState } from "react";
import { Header } from "./components/Header";
import { Convertors } from "./components/Convertors";
import { getCurrency } from "./services/api";
import { DataCurrency, Currency } from "./types/currency";
import { Loader } from "./components/Loader";

function App() {
  const [dataCurrency, setDataCurrency] = useState<DataCurrency>({
    base: "",
    date: "",
    rates: {},
  });

  useEffect(() => {
    (async () => {
      const response = await getCurrency();
      setDataCurrency(response);
    })();
  }, []);

  return (
    <div className="_container">
      <Header listCurrency={dataCurrency.rates} />
      {Object.keys(dataCurrency.rates).length ? (
        <Convertors listCurrency={dataCurrency.rates} />
      ) : (
        <Loader />
      )}
    </div>
  );
}

export default App;
