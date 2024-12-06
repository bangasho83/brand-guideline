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
  Grid,
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
    <Container maxWidth="lg" style={{ marginTop: "30px", paddingBottom: "80px" }}>
      <Typography variant="h4" align="center" gutterBottom>
        Professional Service Calculator
      </Typography>
      <Typography variant="subtitle1" align="center" gutterBottom>
        Select services to calculate your total costs.
      </Typography>

      <Grid container spacing={2}>
        {/* Services List */}
        <Grid item xs={12}>
          <Paper elevation={3} style={{ padding: "20px", marginBottom: "20px" }}>
            <List>
              {services.map((service) => (
                <React.Fragment key={service.name}>
                  <ListItem alignItems="flex-start">
                    <Checkbox
                      checked={selectedServices.includes(service.name)}
                      onChange={() => toggleService(service.name)}
                      color="primary"
                    />
                    <ListItemText
                      primary={service.name}
                      secondary={
                        <>
                          <Typography
                            component="span"
                            variant="body2"
                            color="textPrimary"
                          >
                            {service.explanation}
                          </Typography>
                          {` — One-Time Cost: $${service.oneTimeCost}`}
                        </>
                      }
                    />
                  </ListItem>
                  <Divider component="li" />
                </React.Fragment>
              ))}
            </List>
          </Paper>
        </Grid>
      </Grid>

      {/* Sticky Total Cost Box */}
      <Box
        sx={{
          position: "fixed",
          bottom: 0,
          left: 0,
          right: 0,
          backgroundColor: "#ffffff",
          zIndex: 1000,
          boxShadow: "0 -2px 5px rgba(0,0,0,0.1)",
          padding: "10px 20px",
          color: "#000000", // Text color set to black for readability
        }}
      >
        <Container maxWidth="lg">
          <Box
            display="flex"
            justifyContent="space-between"
            alignItems="center"
          >
            <Typography variant="h6" style={{ color: "#000000" }}>
              Total Costs
            </Typography>
            <Typography variant="h6" style={{ fontWeight: "bold", color: "#000000" }}>
              One-Time Cost: ${oneTimeCost}
            </Typography>
          </Box>
        </Container>
      </Box>
    </Container>
  );
};

export default App;
