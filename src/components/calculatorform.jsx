import React, { useState } from "react";

export default function CalculatorForm({ onCalculate }) {
    const [monthlyInvestment, setMonthlyInvestment] = useState(5000);
    const [years, setYears] = useState(10);
    const [annualRate, setAnnualRate] = useState(12);

    const handleSubmit = (e) => {
        e.preventDefault();
        const P = parseFloat(monthlyInvestment);
        const n = parseInt(years) * 12;
        const r = parseFloat(annualRate) / 12 / 100;

        if (P <= 0 || n <= 0 || r <= 0) {
            alert("Please enter valid values!");
            return;
        }

        // SIP formula
        const maturityAmount = P * (((Math.pow(1 + r, n) - 1) / r) * (1 + r));
        const totalInvested = P * n;
        const totalReturns = maturityAmount - totalInvested;

        onCalculate({
            maturityAmount: maturityAmount.toFixed(2),
            totalInvested: totalInvested.toFixed(2),
            totalReturns: totalReturns.toFixed(2),
        });
    };

    return (
        <form
            onSubmit={handleSubmit}
            className="bg-white p-6 rounded-lg shadow-md w-80"
        >
            <label className="block mb-2">Monthly Investment (₹):</label>
            <input
                type="number"
                value={monthlyInvestment}
                onChange={(e) => setMonthlyInvestment(e.target.value)}
                className="w-full border rounded p-2 mb-4"
            />

            <label className="block mb-2">Duration (Years):</label>
            <input
                type="number"
                value={years}
                onChange={(e) => setYears(e.target.value)}
                className="w-full border rounded p-2 mb-4"
            />

            <label className="block mb-2">Expected Annual Return (%):</label>
            <input
                type="number"
                value={annualRate}
                onChange={(e) => setAnnualRate(e.target.value)}
                className="w-full border rounded p-2 mb-4"
            />

            <button
                type="submit"
                className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 w-full"
            >
                Calculate
            </button>
        </form>
    );
}
