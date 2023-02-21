import { globalStyle } from "@vanilla-extract/css";

globalStyle("html, body", {
  vars: {
    '--global-color': 'pink'
  },
  backgroundColor: "salmon",
  color: "var(--global-color)",
})
