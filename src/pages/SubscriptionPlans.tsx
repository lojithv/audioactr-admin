import * as React from "react";
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import Paper from "@mui/material/Paper";
import ReusableTable from "../components/ReusableTable";
import { Box, Button, TextField } from "@mui/material";
import { setDialogVisibility } from "../store/DialogStateStore";

type Props = {};

const rows = [
  [
    "Free",
    "Free",
    { type: "DURATION", months: "NONE" },
    { type: "PRICE", amount: 0 },
  ],
  [
    "Pro",
    "Paid",
    { type: "DURATION", months: 12 },
    { type: "PRICE", amount: 15 },
  ],
];

const columns = [
  ["Plan Name"],
  ["Plan Type"],
  ["Expiration Period (Months)"],
  ["Amount"],
];

const AddPlanForm = () => {
  const [planData, setPlanData] = React.useState({
    planName: "",
    planDetails: "",
    price: 0,
    expirationPeriod: 0,
  });

  const handleSubmit = () => {
    console.log(planData);
  };

  const handleChange = (
    evt: React.ChangeEvent<HTMLTextAreaElement | HTMLInputElement>,
    key: string
  ) => {
    setPlanData((p) => {
      return { ...p, [key]: evt.target.value };
    });
  };

  return (
    <Box component="form" noValidate sx={{ mt: 3 }}>
      <Grid container spacing={2}>
        <Grid item xs={12} sm={6}>
          <TextField
            name="planName"
            required
            fullWidth
            id="planName"
            label="Plan Name"
            value={planData.planName}
            onChange={(e) => handleChange(e, "planName")}
            autoFocus
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            required
            fullWidth
            id="expirationPeriod"
            label="Expiration Period"
            name="expirationPeriod"
            value={planData.expirationPeriod}
            onChange={(e) => handleChange(e, "expirationPeriod")}
          />
        </Grid>
        <Grid item xs={12}>
          <TextField
            required
            fullWidth
            id="price"
            label="Price"
            name="price"
            value={planData.price}
            onChange={(e) => handleChange(e, "price")}
          />
        </Grid>
        <Grid item xs={12}>
          <TextField
            required
            fullWidth
            name="planDetails"
            label="Plan Details"
            id="planDetails"
            value={planData.planDetails}
            onChange={(e) => handleChange(e, "planDetails")}
            multiline
            maxRows={4}
          />
        </Grid>
      </Grid>
      <Button
        fullWidth
        variant="contained"
        sx={{ mt: 3, mb: 2 }}
        onClick={handleSubmit}
      >
        ADD
      </Button>
      <Button
        fullWidth
        variant="contained"
        sx={{ mt: 3, mb: 2 }}
        onClick={() =>
          setDialogVisibility({ open: false, body: "", title: "" })
        }
      >
        Cancel
      </Button>
    </Box>
  );
};

const TriggerElement = () => {
  return (
    <Button
      variant="outlined"
      onClick={() =>
        setDialogVisibility({
          open: true,
          body: <AddPlanForm />,
          title: "ADD PLAN",
        })
      }
      sx={{ marginBottom: "10px" }}
    >
      ADD PLAN
    </Button>
  );
};

const SubscriptionPlans = (props: Props) => {
  return (
    <Container maxWidth="lg" sx={{ mt: 4, mb: 4 }}>
      <Grid container spacing={3}>
        {/* Recent Orders */}
        <Grid item xs={12}>
          <TriggerElement />
          <Paper sx={{ p: 2, display: "flex", flexDirection: "column" }}>
            <ReusableTable
              rowData={rows}
              columns={columns}
              title={"Subscription Plans"}
            />
          </Paper>
        </Grid>
      </Grid>
    </Container>
  );
};

export default SubscriptionPlans;
