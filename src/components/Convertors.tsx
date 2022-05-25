import React, { useState } from "react";
import { Currency, ListConvertors } from "../types/currency";
import { Convertor } from "./Convertor";
import { convertCurrency } from "../utilits/convertCurrency";
import { listOfConvertor } from "../constants/constant";
import "../styles/convertors.scss";

interface ConvertorsProps {
  listCurrency: Currency;
}
// { value: "", currency: "USD" }
export const Convertors: React.FC<ConvertorsProps> = ({ listCurrency }) => {
  const [convertorItems, setConvertorItems] = useState<ListConvertors[]>(
    listOfConvertor.map((currency) => ({
      value: convertCurrency(listCurrency, "USD", currency, "1"),
      currency,
    }))
  );

  const [lastChangeCurrency, setLastChangeCurrency] = useState<ListConvertors>({
    value: "1",
    currency: "USD",
  });

  return (
    <div className="convertors">
      <div className="convertors__title">
        {lastChangeCurrency.value}
        <span>{lastChangeCurrency.currency}</span>
        equals:
      </div>
      <div className="convertors__content">
        {convertorItems.map((_, index) => (
          <Convertor
            key={index}
            listCurrency={listCurrency}
            convertorItems={convertorItems}
            setConvertorItems={setConvertorItems}
            setLastChangeCurrency={setLastChangeCurrency}
            indexOfItems={index}
          />
        ))}
      </div>
    </div>
  );
};
