import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import { RouterProvider } from "react-router-dom";
import router from "./router.jsx";
import { ConfigProvider, Typography } from "antd";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <ConfigProvider
      theme={{
        token: {
          fontFamily: "vazir",
          NavyBlue: "#111928",
          formBg: "#1F2A37",
          inputBg: "#374151",
          buttonBg: "#1C64F2",
        },
      }}
    >
      <RouterProvider router={router} />
    </ConfigProvider>
  </StrictMode>
);
