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
  const [previewPosition, setPreviewPosition] = useState({ x: 0, y: 0 });

  function handleMouseEnter() {
    setShowPreview(true);
    //need to find modern replacment for "event" API
    setPreviewPosition({ x: event.clientX, y: event.clientY });
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
              <TableCell>Archetype</TableCell>
              <TableCell>Working</TableCell>
              <TableCell>Untested</TableCell>
            </TableRow>
          </TableHead>
          <TableRow>
            <TableCell>Fighter</TableCell>
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
      {showPreview ? (
        <WindowPreview position={previewPosition}></WindowPreview>
      ) : (
        ""
      )}
    </div>
  );
}

export default BuildDisplay;
