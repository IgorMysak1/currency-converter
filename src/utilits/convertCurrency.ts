import React from "react";
import { Currency } from "../types/currency";

export const convertCurrency = (
  listCurrency: Currency,
  fromCurrency: string,
  toCurrency: string,
  value: string
): string => {
  return Object.keys(listCurrency).length
    ? (
        (listCurrency["USD"] / listCurrency[fromCurrency]) *
        listCurrency[toCurrency] *
        +value
      ).toFixed(2)
    : "...";
};
