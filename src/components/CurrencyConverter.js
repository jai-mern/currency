import React, { useState } from "react";
import { fetchConversionRate } from "../services/api";
import "./CurrencyConverter.css"; // Assuming you have a CSS file for styling

const CurrencyConverter = () => {
    const [fromCurrency, setFromCurrency] = useState("USD");
    const [toCurrency, setToCurrency] = useState("EUR");
    const [amount, setAmount] = useState("");
    const [conversionResult, setConversionResult] = useState(null);
    const [errorMessage, setErrorMessage] = useState("");

    const handleConvert = async () => {
        if (!amount || isNaN(amount) || amount <= 0) {
            setErrorMessage("Please enter a valid amount.");
            setConversionResult(null);
            return;
        }

        try {
            setErrorMessage(""); // Clear any previous error messages
            const result = await fetchConversionRate(fromCurrency, toCurrency, amount);
            setConversionResult(result.convertedAmount);
        } catch (error) {
            console.error("Error converting currency:", error.message || error);
            setErrorMessage("Failed to convert currency. Please try again later.");
            setConversionResult(null);
        }
    };

    return (
        <div className="currency-converter">
            <h1>Currency Converter</h1>

            <div className="converter-form">
                <label>
                    <span>Amount</span>
                    <input
                        type="number"
                        value={amount}
                        onChange={(e) => setAmount(e.target.value)}
                        placeholder="Enter amount"
                    />
                </label>

                <label>
                    <span>From Currency</span>
                    <select
                        value={fromCurrency}
                        onChange={(e) => setFromCurrency(e.target.value)}
                    >
                        <option value="USD">USD</option>
                        <option value="EUR">EUR</option>
                        <option value="INR">INR</option>
                        <option value="CAD">CAD</option>
                        <option value="JPY">JPY</option>
                        {/* Add more currencies as needed */}
                    </select>
                </label>

                <label>
                    <span>To Currency</span>
                    <select
                        value={toCurrency}
                        onChange={(e) => setToCurrency(e.target.value)}
                    >
                        <option value="USD">USD</option>
                        <option value="EUR">EUR</option>
                        <option value="INR">INR</option>
                        <option value="CAD">CAD</option>
                        <option value="JPY">JPY</option>
                        {/* Add more currencies as needed */}
                    </select>
                </label>

                <button onClick={handleConvert} className="convert-button">
                    Convert
                </button>
            </div>

            {errorMessage && <div className="error-message">{errorMessage}</div>}

            {conversionResult !== null && !errorMessage && (
                <div className="conversion-result">
                    {`${amount} ${fromCurrency} = ${conversionResult} ${toCurrency}`}
                </div>
            )}
        </div>
    );
};

export default CurrencyConverter;
