import React, { Dispatch, SetStateAction } from "react";
import { Currency, ListConvertors } from "../types/currency";
import { convertCurrency } from "../utilits/convertCurrency";
import "../styles/convertor.scss";

interface ConvertorProps {
  listCurrency: Currency;
  convertorItems: ListConvertors[];
  setConvertorItems: Dispatch<SetStateAction<ListConvertors[]>>;
  setLastChangeCurrency: Dispatch<SetStateAction<ListConvertors>>;
  indexOfItems: number;
}

export const Convertor: React.FC<ConvertorProps> = ({
  listCurrency,
  convertorItems,
  setConvertorItems,
  setLastChangeCurrency,
  indexOfItems,
}) => {
  const updateConvertorItem = (
    currentProperty: string,
    field: string,
    fromCurrency: string,
    value: string
  ) =>
    convertorItems.map((item, index) =>
      indexOfItems === index
        ? { ...item, [field]: currentProperty }
        : {
            ...item,
            value: convertCurrency(
              listCurrency,
              fromCurrency,
              item.currency,
              value
            ),
          }
    );

  const changeCurrency = (e: React.ChangeEvent<HTMLSelectElement>): void => {
    const currentCurrency = e.target.value;
    setConvertorItems(
      updateConvertorItem(
        currentCurrency,
        "currency",
        currentCurrency,
        convertorItems[indexOfItems].value
      )
    );
    setLastChangeCurrency({
      currency: currentCurrency,
      value: convertorItems[indexOfItems].value,
    });
  };
  const changeValue = (e: React.ChangeEvent<HTMLInputElement>) => {
    const currentValue = e.target.value;
    setConvertorItems(
      updateConvertorItem(
        currentValue,
        "value",
        convertorItems[indexOfItems].currency,
        currentValue
      )
    );
    setLastChangeCurrency({
      currency: convertorItems[indexOfItems].currency,
      value: currentValue,
    });
  };

  return (
    <div className="convertor">
      <input
        type="number"
        value={convertorItems[indexOfItems].value}
        onChange={changeValue}
      />
      <select
        name="select"
        value={convertorItems[indexOfItems].currency}
        onChange={changeCurrency}
      >
        {Object.keys(listCurrency).map((currency) => (
          <option value={currency} key={currency}>
            {currency}
          </option>
        ))}
      </select>
    </div>
  );
};
