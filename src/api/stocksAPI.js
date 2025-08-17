

const API_KEY = 'd0pk2mhr01qgccu9k1t0d0pk2mhr01qgccu9k1tg';
const BASE_URL = "https://finnhub.io/api/v1";

const stocksApi = {
    getStocks: async () => {
        const response = await fetch(`${BASE_URL}/stock/symbol?exchange=US&token=${API_KEY}`);
        const data = await response.json();
        return data;
    }
}

export default stocksApi;