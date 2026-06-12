// 'use client'

// import { createContext, useContext, useState, useEffect } from "react";
// import { mockTenantBranding, TenantBranding } from "./mockTenantBranding";

// interface ThemeContextType {
//   branding: TenantBranding;
// }

// const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

// export const ThemeProvider = ({
//   tenantId,
//   children,
// }: {
//   tenantId: string;
//   children: React.ReactNode;
// }) => {
//   const [branding, setBranding] = useState<TenantBranding>(
//     mockTenantBranding[tenantId] || mockTenantBranding["tenantA"]
//   );

//   // Simulate fetching data (replace with real API later)
//   useEffect(() => {
//     const data = mockTenantBranding[tenantId];
//     if (data) setBranding(data);
//   }, [tenantId]);

//   // Apply CSS variables for Tailwind dynamic colors
//   useEffect(() => {
//     const root = document.documentElement;
//     root.style.setProperty("--color-primary", branding.primary);
//     root.style.setProperty("--color-secondary", branding.secondary);
//     root.style.setProperty("--color-accent", branding.accent);
//     root.style.setProperty("--color-bg", branding.background);
//     root.style.setProperty("--color-text", branding.text);
//   }, [branding]);

//   return (
//     <ThemeContext.Provider value={{ branding }}>
//       {children}
//     </ThemeContext.Provider>
//   );
// };

// export const useTheme = () => {
//   const context = useContext(ThemeContext);
//   if (!context) throw new Error("useTheme must be used within ThemeProvider");
//   return context;
// };




// 'use client'

// import { createContext, useContext, useEffect,  } from "react";
// import { mockTenantBranding, TenantBranding } from "./mockTenantBranding";

// interface ThemeContextType {
//   branding: TenantBranding;
// }

// const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

// export const ThemeProvider = ({
//   tenantId,
//   children,
// }: {
//   tenantId: string;
//   children: React.ReactNode;
// }) => {
//   // ✅ Only read branding, no need for setBranding now
//   const branding = mockTenantBranding[tenantId] || mockTenantBranding["tenantA"];

//   // Apply CSS variables for Tailwind dynamic colors
//   useEffect(() => {
//     const root = document.documentElement;
//     root.style.setProperty("--color-primary", branding.primary);
//     root.style.setProperty("--color-secondary", branding.secondary);
//     root.style.setProperty("--color-accent", branding.accent);
//     root.style.setProperty("--color-bg", branding.background);
//     root.style.setProperty("--color-text", branding.text);
//   }, [branding]);

//   return (
//     <ThemeContext.Provider value={{ branding }}>
//       {children}
//     </ThemeContext.Provider>
//   );
// };

// export const useTheme = () => {
//   const context = useContext(ThemeContext);
//   if (!context) throw new Error("useTheme must be used within ThemeProvider");
//   return context;
// };








"use client";

import {
  createContext,
  useContext,
  useEffect,
  useState,
} from "react";
import { mockTenantBranding, TenantBranding } from "./mockTenantBranding";

interface ThemeContextType {
  branding: TenantBranding;
  mode: "light" | "dark";
  setMode: (mode: "light" | "dark") => void;
}

const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

export const ThemeProvider = ({
  tenantId,
  children,
}: {
  tenantId: string;
  children: React.ReactNode;
}) => {
  const branding = mockTenantBranding[tenantId] || mockTenantBranding["tenantA"];

  const [mode, setMode] = useState<"light" | "dark">("dark");

   useEffect(() => {
  const root = document.documentElement;
  const theme = branding[mode];

  // Apply CSS variables
  root.style.setProperty("--color-primary", theme.primary);
  root.style.setProperty("--color-secondary", theme.secondary);
  root.style.setProperty("--color-accent", theme.accent);
  root.style.setProperty("--color-bg", theme.background);
  root.style.setProperty("--color-text", theme.text);

  // Apply Tailwind's dark class
  if (mode === "dark") {
    root.classList.add("dark");
  } else {
    root.classList.remove("dark");
  }
}, [branding, mode]);


  return (
    <ThemeContext.Provider value={{ branding, mode, setMode }}>
      {children}
    </ThemeContext.Provider>
  );
};

export const useTheme = () => {
  const context = useContext(ThemeContext);
  if (!context) throw new Error("useTheme must be used within ThemeProvider");
  return context;
};
