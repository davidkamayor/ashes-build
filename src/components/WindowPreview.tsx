import React from "react";
import Paper from "@mui/material/Paper";

interface WindowPreviewProps {
  position: { x: number; y: number };
}

function WindowPreview(props: WindowPreviewProps) {
  const { x, y } = props.position;

  return (
    //inline css used as JS variables cannot be passed to tailwind
    //inline is used to set position; all other styling is done via "className" using tailwind
    <Paper
      elevation={3}
      style={{
        position: "absolute",
        top: y,
        left: x,
      }}
      className="p-1}"
    >
      INTERACTIVE PREVIEW
    </Paper>
  );
}

export default WindowPreview;
