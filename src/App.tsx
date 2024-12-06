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
    const oneTimeCost = selected.reduce((acc, service) => acc + service.oneTimeCost, 0);
    const monthlyCost = selected.reduce((acc, service) => acc + (service.monthlyCost || 0), 0);

    return { oneTimeCost, monthlyCost };
  };

  const { oneTimeCost, monthlyCost } = calculateCosts();

  return (
    <div>
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
          </li>
        ))}
      </ul>
      <h2>Total Costs</h2>
      <p>One-Time Cost: ${oneTimeCost}</p>
      <p>Monthly Cost: ${monthlyCost}</p>
    </div>
  );
};

export default App;
