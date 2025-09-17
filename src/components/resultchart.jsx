import React from "react";
import {
    BarChart,
    Bar,
    XAxis,
    YAxis,
    Tooltip,
    Legend,
    ResponsiveContainer,
} from "recharts";

export default function ResultChart({ result }) {
    if (!result) return null;

    const data = [
        { name: "Invested Amount", value: parseFloat(result.totalInvested) },
        { name: "Final Maturity", value: parseFloat(result.maturityAmount) },
    ];

    return (
        <div className="mt-6 w-full max-w-lg bg-white p-4 rounded-lg shadow-md">
            <h2 className="text-lg font-semibold mb-2">Results:</h2>
            <p>Total Invested: ₹{result.totalInvested}</p>
            <p>Final Maturity: ₹{result.maturityAmount}</p>
            <p>Total Returns: ₹{result.totalReturns}</p>

            <div className="mt-4" style={{ width: "100%", height: 300 }}>
                <ResponsiveContainer>
                    <BarChart data={data}>
                        <XAxis dataKey="name" />
                        <YAxis />
                        <Tooltip />
                        <Legend />
                        <Bar dataKey="value" fill="#8884d8" />
                    </BarChart>
                </ResponsiveContainer>
            </div>
        </div>
    );
}
