import axios from 'axios';

const API_URL = 'http://localhost:5000/api'; // Replace with your backend URL.

export const fetchConversionRate = async (baseCurrency, targetCurrency, amount) => {
    try {
        const response = await axios.get(`${API_URL}/convert`, {
            params: { base: baseCurrency, target: targetCurrency, amount },
        });
        return response.data; // Expected: { convertedAmount: 123.45 }
    } catch (error) {
        console.error('API error:', error);
        throw error;
    }
};
