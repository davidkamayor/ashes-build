import React, { useState } from "react";
import Link from "@mui/material/Link";
import Container from "@mui/material/Table";
import Table from "@mui/material/Table";
import TableHead from "@mui/material/Table";
import TableRow from "@mui/material/Table";
import TableCell from "@mui/material/TableCell";
import WindowPreview from "./WindowPreview";

function BuildDisplay() {
  const [showPreview, setShowPreview] = useState(false);

  function handleMouseEnter() {
    setShowPreview(true);
  }

  function handleMouseLeave() {
    setShowPreview(false);
  }

  return (
    <div>
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
                <li>
                  <a
                    href=""
                    onMouseEnter={() => handleMouseEnter()}
                    onMouseLeave={handleMouseLeave}
                  >
                    Meta
                  </a>
                </li>
                <li>
                  <a href="">Great</a>
                </li>
                <li>
                  <a href="">Good</a>
                </li>
                <li>
                  <a href="">All</a>
                </li>
              </ul>
            </TableCell>
            <TableCell>
              <ul>
                <li>
                  <a href="">Testing</a>
                </li>
                <li>
                  <a href="">Proposed</a>
                </li>
              </ul>
            </TableCell>
          </TableRow>
        </Table>
      </Container>
      {showPreview ? <WindowPreview></WindowPreview> : ""}
    </div>
  );
}

export default BuildDisplay;
