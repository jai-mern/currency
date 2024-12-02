import React from 'react';

const CurrencySelector = ({ selectedCurrency, onChangeCurrency, label }) => {
    const currencies = ['USD', 'EUR', 'GBP', 'INR', 'JPY', 'CAD'];

    return (
        <div>
            <label>{label}</label>
            <select
                value={selectedCurrency}
                onChange={(e) => onChangeCurrency(e.target.value)}
            >
                {currencies.map((currency) => (
                    <option key={currency} value={currency}>
                        {currency}
                    </option>
                ))}
            </select>
        </div>
    );
};

export default CurrencySelector;
