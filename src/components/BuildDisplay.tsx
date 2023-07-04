import React from "react";
import Link from "@mui/material/Link";
import Container from "@mui/material/Table";
import Table from "@mui/material/Table";
import TableHead from "@mui/material/Table";
import TableRow from "@mui/material/Table";
import TableCell from "@mui/material/TableCell";

const BuildDisplay = () => {
  return (
    <Container>
      <h1>Builds by Category</h1>
      <Table>
        <TableHead>
          <TableRow>
            <TableCell>Category</TableCell>
            <TableCell>Working</TableCell>
            <TableCell>Untested</TableCell>
          </TableRow>
        </TableHead>
        <TableRow>
          <TableCell>Solo PvX</TableCell>
          <TableCell>
            <ul>
              <li>Meta</li>
              <li>Great</li>
              <li>Good</li>
              <li>All</li>
            </ul>
          </TableCell>
          <TableCell>
            <ul>
              <li>Testing</li>
              <li>Proposed</li>
            </ul>
          </TableCell>
        </TableRow>
      </Table>
    </Container>
  );
};

export default BuildDisplay;
