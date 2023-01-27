import React from "react";
import { Typography, Box } from "@mui/material";

const TextContent = ({ anchor, title, children, sx, category }) => {
  return (
    <div
      {...(anchor !== null && { id: anchor })}
      data-label={title}
      className={`  box-border space-y-3 ${anchor && "scroll-mt-16"}`}
    >
      {category ? (
       <p class="mb-2 text-sm leading-6 font-semibold text-sky-500 dark:text-sky-400">{category}</p>
      ) : null}
      {title ? (
        <Typography
          variant="body1"
          className={`text-[#0f172a]  ${sx}    font-inter ${
            anchor ? "mb-5" : "mb-3"
          }`}
        >
          {title}
        </Typography>
      ) : null}

      {children}
    </div>
  );
};

export default TextContent;
