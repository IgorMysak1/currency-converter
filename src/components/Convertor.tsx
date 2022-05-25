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
  // changeCurrency and changeValue is very similar,
  // I would be happy to discuss with you about best way to combine them because I have problems with that
  const changeCurrency = (e: React.ChangeEvent<HTMLSelectElement>): void => {
    const currentCurrency = e.target.value;
    const newConvertorItems = convertorItems.map((item, index) =>
      indexOfItems === index
        ? { ...item, currency: currentCurrency }
        : {
            ...item,
            value: convertCurrency(
              listCurrency,
              currentCurrency,
              item.currency,
              convertorItems[indexOfItems].value
            ),
          }
    );
    setConvertorItems(newConvertorItems);
    setLastChangeCurrency({
      value: convertorItems[indexOfItems].value,
      currency: currentCurrency,
    });
  };
  const changeValue = (e: React.ChangeEvent<HTMLInputElement>) => {
    const currentValue = e.target.value;
    const newConvertorItems = convertorItems.map((item, index) =>
      indexOfItems === index
        ? { ...item, value: currentValue }
        : {
            ...item,
            value: convertCurrency(
              listCurrency,
              convertorItems[indexOfItems].currency,
              item.currency,
              currentValue
            ),
          }
    );
    setConvertorItems(newConvertorItems);
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
      <select name="select" defaultValue={"DEFAULT"} onChange={changeCurrency}>
        {Object.keys(listCurrency).map((currency) => (
          <option
            value={
              currency === convertorItems[indexOfItems].currency
                ? "DEFAULT"
                : currency
            }
            disabled={currency === convertorItems[indexOfItems].currency}
            key={currency}
          >
            {currency}
          </option>
        ))}
      </select>
    </div>
  );
};
