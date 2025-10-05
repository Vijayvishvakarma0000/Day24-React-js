import React from "react";
import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper, Button, Chip } from "@mui/material";
import { Edit, Delete } from "@mui/icons-material";

const products = [
  { id: 1, name: "Wooden Chair", price: "$150", stock: "In Stock" },
  { id: 2, name: "Dining Table", price: "$300", stock: "Out of Stock" },
  { id: 3, name: "Sofa Set", price: "$500", stock: "In Stock" },
  { id: 4, name: "Bed Frame", price: "$450", stock: "Low Stock" },
];

const getStockColor = (stock) => {
  switch (stock) {
    case "In Stock":
      return "success";
    case "Out of Stock":
      return "error";
    case "Low Stock":
      return "warning";
    default:
      return "default";
  }
};

const Products = () => {
  return (
    <div style={{ padding: "20px" }}>
      <h2>Products Page</h2>
      <TableContainer component={Paper}>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell><b>Product ID</b></TableCell>
              <TableCell><b>Name</b></TableCell>
              <TableCell><b>Price</b></TableCell>
              <TableCell><b>Stock Status</b></TableCell>
              <TableCell><b>Actions</b></TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {products.map((product) => (
              <TableRow key={product.id}>
                <TableCell>{product.id}</TableCell>
                <TableCell>{product.name}</TableCell>
                <TableCell>{product.price}</TableCell>
                <TableCell>
                  <Chip label={product.stock} color={getStockColor(product.stock)} />
                </TableCell>
                <TableCell>
                  <Button variant="contained" color="primary" size="small" startIcon={<Edit />} style={{ marginRight: "10px" }}>
                    Edit
                  </Button>
                  <Button variant="contained" color="error" size="small" startIcon={<Delete />}>
                    Delete
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

export default Products;
