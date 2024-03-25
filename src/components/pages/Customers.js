import * as React from "react";
import Box from "@mui/material/Box";
import { DataGrid, GridColDef } from "@mui/x-data-grid";
import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
} from "@mui/material";
import dotsIcon from "../../assets/dots.png";
import ActionComponent from "./Action";

const columns = [
  {
    field: "customerName",
    headerName: "CUSTOMER NAME",
    width: 200,
    renderCell: (params) => (
      <div style={{ display: "flex", alignItems: "center" }}>
        <img
          src={params.row.image}
          alt="Avatar"
          style={{ width: 30, height: 30, marginRight: 10 }}
        />
        {params.row.customerName}
      </div>
    ),
  },
  {
    field: "email",
    headerName: "EMAIL",
    width: 250,
    editable: true,
  },
  {
    field: "location",
    headerName: "LOCATION",
    width: 110,
    editable: true,
  },
  {
    field: "machine",
    headerName: "MACHINE",
    width: 160,
  },
  {
    field: "wallet",
    headerName: "WALLET",
    width: 160,
  },
  {
    field: "subscription",
    headerName: "SUBSCRIPTION",
    width: 160,
  },
  {
    field: "action",
    headerName: "ACTION",
    width: 100,
    renderCell: (props) => ActionComponent(props),
  },
];

function ActionButton({ row }) {
  const [open, setOpen] = React.useState(false);

  const handleActionClick = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div>
      <Dialog open={open} onClose={handleClose}>
        <DialogTitle>Choose Action</DialogTitle>
        <div style={{}}>
          <Button onClick={() => handleEdit(row.id)}>Edit</Button>
          <Button onClick={() => handleDelete(row.id)}>Delete</Button>
        </div>
        <DialogActions>
          <Button onClick={handleClose} color="primary">
            Cancel
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}

function handleEdit(id) {
  // Handle edit action
}

function handleDelete(id) {
  // Handle delete action
}
const customers = [
  {
    id: 1,
    customerName: "John Doe",
    email: "john.doe@example.com",
    location: "New York",
    machine: 3,
    wallet: 100,
    subscription: "Premium",
    image:
      "https://media.dev.to/cdn-cgi/image/width=320,height=320,fit=cover,gravity=auto,format=auto/https%3A%2F%2Fdev-to-uploads.s3.amazonaws.com%2Fuploads%2Fuser%2Fprofile_image%2F162111%2Fdad4b788-80d2-4c14-8f9e-b91a7590adca.jpeg",
  },
  {
    id: 2,
    customerName: "Jane Smith",
    email: "jane.smith@example.com",
    location: "Los Angeles",
    machine: 7,
    wallet: 50,
    subscription: "Normal",
    image:
      "https://media.dev.to/cdn-cgi/image/width=320,height=320,fit=cover,gravity=auto,format=auto/https%3A%2F%2Fdev-to-uploads.s3.amazonaws.com%2Fuploads%2Fuser%2Fprofile_image%2F162111%2Fdad4b788-80d2-4c14-8f9e-b91a7590adca.jpeg",
  },
  {
    id: 3,
    customerName: "Alice Johnson",
    email: "alice.johnson@example.com",
    location: "Chicago",
    machine: 2,
    wallet: 200,
    subscription: "Basic",
    image:
      "https://media.dev.to/cdn-cgi/image/width=320,height=320,fit=cover,gravity=auto,format=auto/https%3A%2F%2Fdev-to-uploads.s3.amazonaws.com%2Fuploads%2Fuser%2Fprofile_image%2F162111%2Fdad4b788-80d2-4c14-8f9e-b91a7590adca.jpeg",
  },
  {
    id: 4,
    customerName: "Bob Brown",
    email: "bob.brown@example.com",
    location: "Houston",
    machine: 5,
    wallet: 150,
    subscription: "Premium",
    image:
      "https://media.dev.to/cdn-cgi/image/width=320,height=320,fit=cover,gravity=auto,format=auto/https%3A%2F%2Fdev-to-uploads.s3.amazonaws.com%2Fuploads%2Fuser%2Fprofile_image%2F162111%2Fdad4b788-80d2-4c14-8f9e-b91a7590adca.jpeg",
  },
  {
    id: 5,
    customerName: "Emma Wilson",
    email: "emma.wilson@example.com",
    location: "San Francisco",
    machine: 1,
    wallet: 300,
    subscription: "Normal",
    image:
      "https://media.dev.to/cdn-cgi/image/width=320,height=320,fit=cover,gravity=auto,format=auto/https%3A%2F%2Fdev-to-uploads.s3.amazonaws.com%2Fuploads%2Fuser%2Fprofile_image%2F162111%2Fdad4b788-80d2-4c14-8f9e-b91a7590adca.jpeg",
  },
  {
    id: 6,
    customerName: "Michael Lee",
    email: "michael.lee@example.com",
    location: "Miami",
    machine: 9,
    wallet: 75,
    subscription: "Basic",
    image:
      "https://media.dev.to/cdn-cgi/image/width=320,height=320,fit=cover,gravity=auto,format=auto/https%3A%2F%2Fdev-to-uploads.s3.amazonaws.com%2Fuploads%2Fuser%2Fprofile_image%2F162111%2Fdad4b788-80d2-4c14-8f9e-b91a7590adca.jpeg",
  },
  {
    id: 7,
    customerName: "Sarah Garcia",
    email: "sarah.garcia@example.com",
    location: "Dallas",
    machine: 4,
    wallet: 120,
    subscription: "Premium",
    image:
      "https://media.dev.to/cdn-cgi/image/width=320,height=320,fit=cover,gravity=auto,format=auto/https%3A%2F%2Fdev-to-uploads.s3.amazonaws.com%2Fuploads%2Fuser%2Fprofile_image%2F162111%2Fdad4b788-80d2-4c14-8f9e-b91a7590adca.jpeg",
  },
  {
    id: 8,
    customerName: "David Martinez",
    email: "david.martinez@example.com",
    location: "Seattle",
    machine: 6,
    wallet: 90,
    subscription: "Normal",
    image:
      "https://media.dev.to/cdn-cgi/image/width=320,height=320,fit=cover,gravity=auto,format=auto/https%3A%2F%2Fdev-to-uploads.s3.amazonaws.com%2Fuploads%2Fuser%2Fprofile_image%2F162111%2Fdad4b788-80d2-4c14-8f9e-b91a7590adca.jpeg",
  },
  {
    id: 9,
    customerName: "Olivia Rodriguez",
    email: "olivia.rodriguez@example.com",
    location: "Boston",
    machine: 8,
    wallet: 180,
    subscription: "Basic",
    image:
      "https://media.dev.to/cdn-cgi/image/width=320,height=320,fit=cover,gravity=auto,format=auto/https%3A%2F%2Fdev-to-uploads.s3.amazonaws.com%2Fuploads%2Fuser%2Fprofile_image%2F162111%2Fdad4b788-80d2-4c14-8f9e-b91a7590adca.jpeg",
  },
  {
    id: 10,
    customerName: "James Taylor",
    email: "james.taylor@example.com",
    location: "Atlanta",
    machine: 3,
    wallet: 250,
    subscription: "Premium",
    image:
      "https://media.dev.to/cdn-cgi/image/width=320,height=320,fit=cover,gravity=auto,format=auto/https%3A%2F%2Fdev-to-uploads.s3.amazonaws.com%2Fuploads%2Fuser%2Fprofile_image%2F162111%2Fdad4b788-80d2-4c14-8f9e-b91a7590adca.jpeg",
  },
];

function Customers() {
  return (
    <div>
      <div
        style={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "space-between",
          alignItems: "center",
          padding: "0px 100px",
          gap: "10px",
        }}
      >
        <h3>Recent Customers</h3>
        <h3>See All</h3>
      </div>
      <Box
        sx={{
          height: 400,
          width: "70%",
          margin: "auto",
          padding: "32px 0 0 0",
        }}
      >
        <DataGrid
          rows={customers}
          columns={columns}
          initialState={{
            pagination: {
              paginationModel: {
                pageSize: 5,
              },
            },
          }}
          pageSizeOptions={[5]}
          checkboxSelection
          disableRowSelectionOnClick
        />
      </Box>
    </div>
  );
}

export default Customers;
