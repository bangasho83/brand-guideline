import React, { useState } from "react";
import { services } from "./data";
import {
  Container,
  Typography,
  List,
  ListItem,
  ListItemText,
  Checkbox,
  Divider,
  Box,
  Paper,
} from "@mui/material";

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
    <Container maxWidth="md" style={{ marginTop: "30px" }}>
      <Typography variant="h4" align="center" gutterBottom>
        Professional Service Calculator
      </Typography>
      <Typography variant="subtitle1" align="center" gutterBottom>
        Select services to calculate your total costs.
      </Typography>

      <Paper elevation={3} style={{ padding: "20px", marginBottom: "20px" }}>
        <List>
          {services.map((service) => (
            <React.Fragment key={service.name}>
              <ListItem>
                <Checkbox
                  checked={selectedServices.includes(service.name)}
                  onChange={() => toggleService(service.name)}
                  color="primary"
                />
                <ListItemText
                  primary={service.name}
                  secondary={`${service.explanation} (One-Time Cost: $${service.oneTimeCost})`}
                />
              </ListItem>
              <Divider />
            </React.Fragment>
          ))}
        </List>
      </Paper>

      <Paper elevation={3} style={{ padding: "20px" }}>
        <Typography variant="h5" gutterBottom>
          Total Costs
        </Typography>
        <Box display="flex" justifyContent="space-between" mt={2}>
          <Typography variant="body1">One-Time Cost:</Typography>
          <Typography variant="body1" style={{ fontWeight: "bold" }}>
            ${oneTimeCost}
          </Typography>
        </Box>
      </Paper>
    </Container>
  );
};

export default App;
