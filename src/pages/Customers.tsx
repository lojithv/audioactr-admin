import * as React from "react";
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import Paper from "@mui/material/Paper";
import ReusableTable from "../components/ReusableTable";
import { Box, Button, FormControlLabel, TextField } from "@mui/material";
import { setDialogVisibility } from "../store/DialogStateStore";
import { UserService } from "../services/user";

type Props = {};

const rows = [
  ["16 Mar, 2019", "Elvis Presley", "elvis19@mail.com", "User"],
  ["16 Mar, 2019", "Paul McCartney", "paul@mail.com", "User"],
  ["16 Mar, 2019", "Tom Scholz", "tom@mail.com", "User"],
  ["16 Mar, 2019", "Michael Jackson", "michael@mail.com", "User"],
  ["15 Mar, 2019", "Bruce Springsteen", "bruce@mail.com", "User"],
];

const columns = [
  ["Registered Date"],
  ["Name"],
  ["Email Address"],
  ["User Type"],
];

const AddUserForm = () => {
  const [userData, setUserData] = React.useState({
    firstname: "",
    lastname: "",
    email: "",
    password: "",
  });

  const handleSubmit = () => {
    console.log(userData);
  };

  const handleChange = (
    evt: React.ChangeEvent<HTMLTextAreaElement | HTMLInputElement>,
    key: string
  ) => {
    setUserData((p) => {
      return { ...p, [key]: evt.target.value };
    });
  };

  return (
    <Box component="form" noValidate sx={{ mt: 3 }}>
      <Grid container spacing={2}>
        <Grid item xs={12} sm={6}>
          <TextField
            autoComplete="given-name"
            name="firstName"
            required
            fullWidth
            id="firstName"
            label="First Name"
            value={userData.firstname}
            onChange={(e) => handleChange(e, "firstname")}
            autoFocus
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            required
            fullWidth
            id="lastName"
            label="Last Name"
            name="lastName"
            value={userData.lastname}
            onChange={(e) => handleChange(e, "lastname")}
            autoComplete="family-name"
          />
        </Grid>
        <Grid item xs={12}>
          <TextField
            required
            fullWidth
            id="email"
            label="Email Address"
            name="email"
            autoComplete="email"
            onChange={(e) => handleChange(e, "email")}
            value={userData.email}
          />
        </Grid>
        <Grid item xs={12}>
          <TextField
            required
            fullWidth
            name="password"
            label="Password"
            type="password"
            id="password"
            value={userData.password}
            onChange={(e) => handleChange(e, "password")}
            autoComplete="new-password"
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
          body: <AddUserForm />,
          title: "ADD CUSTOMER",
        })
      }
      sx={{ marginBottom: "10px" }}
    >
      ADD CUSTOMER
    </Button>
  );
};

const Customers = (props: Props) => {
  const [customers, setCustomers] = React.useState([] as any[]);

  React.useEffect(() => {
    UserService.getUsers()
      .then((res) => {
        console.log(res);
        const users: any[] = [];
        res.data.map((u: any) => {
          users.push([u.createdDate, u.firstname, u.email, u.userRole.role]);
        });
        setCustomers(users);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  return (
    <Container maxWidth="lg" sx={{ mt: 4, mb: 4 }}>
      <Grid container spacing={3}>
        {/* Recent Orders */}
        <Grid item xs={12}>
          <TriggerElement />
          <Paper sx={{ p: 2, display: "flex", flexDirection: "column" }}>
            <ReusableTable
              rowData={customers}
              columns={columns}
              title={"Customers"}
            />
          </Paper>
        </Grid>
      </Grid>
    </Container>
  );
};

export default Customers;
