import React from "react";
import { Currency } from "../types/currency";
import { convertCurrency } from "../utilits/convertCurrency";
import { listOfCurrencyInHeader } from "../constants/constant";
import "../styles/header.scss";

interface HeaderProps {
  listCurrency: Currency;
}

export const Header: React.FC<HeaderProps> = ({ listCurrency }) => {
  return (
    <div className="header">
      {listOfCurrencyInHeader.map((currency) => (
        <p className="header__currency currency-header" key={currency}>
          <span className="currency-header__name">{currency}</span>
          <span className="currency-header__value">
            {convertCurrency(listCurrency, currency, "UAH", "1")}
          </span>
        </p>
      ))}
    </div>
  );
};
