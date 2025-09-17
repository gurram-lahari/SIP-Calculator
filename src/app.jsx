import React, { useState } from "react";
import CalculatorForm from "./components/calculatorform";
import ResultChart from "./components/resultchart";

export default function App() {
    const [result, setResult] = useState(null);

    return (
        <div className="min-h-screen flex flex-col items-center justify-center bg-gray-100 p-6">
            <h1 className="text-2xl font-bold mb-6">SIP Calculator</h1>
            <CalculatorForm onCalculate={setResult} />
            <ResultChart result={result} />
        </div>
    );
}
