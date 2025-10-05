import React from "react";
import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper, Button, Chip } from "@mui/material";

const orders = [
  { id: 1, customer: "Amit Kumar", product: "Wooden Chair", amount: "$150", status: "Pending" },
  { id: 2, customer: "Rohit Sharma", product: "Dining Table", amount: "$300", status: "Shipped" },
  { id: 3, customer: "Neha Singh", product: "Sofa Set", amount: "$500", status: "Delivered" },
  { id: 4, customer: "Pooja Verma", product: "Bed Frame", amount: "$450", status: "Cancelled" },
];

const getStatusColor = (status) => {
  switch (status) {
    case "Pending":
      return "warning";
    case "Shipped":
      return "primary";
    case "Delivered":
      return "success";
    case "Cancelled":
      return "error";
    default:
      return "default";
  }
};

const Orders = () => {
  return (
    <div style={{ padding: "20px" }}>
      <h2>Orders Page</h2>
      <TableContainer component={Paper}>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell><b>Order ID</b></TableCell>
              <TableCell><b>Customer</b></TableCell>
              <TableCell><b>Product</b></TableCell>
              <TableCell><b>Amount</b></TableCell>
              <TableCell><b>Status</b></TableCell>
              <TableCell><b>Action</b></TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {orders.map((order) => (
              <TableRow key={order.id}>
                <TableCell>{order.id}</TableCell>
                <TableCell>{order.customer}</TableCell>
                <TableCell>{order.product}</TableCell>
                <TableCell>{order.amount}</TableCell>
                <TableCell>
                  <Chip label={order.status} color={getStatusColor(order.status)} />
                </TableCell>
                <TableCell>
                  <Button variant="contained" color="primary" size="small" style={{ marginRight: "10px" }}>
                    View
                  </Button>
                  <Button variant="contained" color="error" size="small">
                    Cancel
                  </Button>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </div>
  );
};

export default Orders;
