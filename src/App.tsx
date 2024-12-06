import React, { useState } from "react";
import { services } from "./data";

const App: React.FC = () => {
  const [selectedServices, setSelectedServices] = useState<string[]>([]);

  const toggleService = (serviceName: string) => {
    setSelectedServices((prev) =>
      prev.includes(serviceName)
        ? prev.filter((s) => s !== serviceName)
        : [...prev, serviceName]
    );
  };

  const calculateCosts = () => {
    const selected = services.filter((service) =>
      selectedServices.includes(service.name)
    );
    const oneTimeCost = selected.reduce(
      (acc, service) => acc + service.oneTimeCost,
      0
    );

    return { oneTimeCost };
  };

  const { oneTimeCost } = calculateCosts();

  return (
    <div style={{ fontFamily: "Arial, sans-serif", padding: "20px" }}>
      <h1>Service Calculator</h1>
      <ul>
        {services.map((service) => (
          <li key={service.name}>
            <label>
              <input
                type="checkbox"
                checked={selectedServices.includes(service.name)}
                onChange={() => toggleService(service.name)}
              />
              {service.name} (${service.oneTimeCost})
            </label>
            <p style={{ margin: "0 0 10px 20px", fontSize: "0.9em" }}>
              {service.explanation}
            </p>
          </li>
        ))}
      </ul>
      <h2>Total Costs</h2>
      <p>One-Time Cost: ${oneTimeCost}</p>
    </div>
  );
};

export default App;
