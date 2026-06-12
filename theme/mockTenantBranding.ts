// export interface TenantBranding {
//   primary: string;
//   secondary: string;
//   accent: string;
//   background: string;
//   text: string;
// }

// export const mockTenantBranding: Record<string, TenantBranding> = {
//   tenantA: {
//     primary: "#C59949",
//     secondary: "#f5f5f5",
//     accent: "#000000",
//     background: "#ffffff",
//     text: "#000000",
//   },
//   tenantB: {
//     primary: "#0070f3",
//     secondary: "#eaeaea",
//     accent: "#ff0080",
//     background: "#ffffff",
//     text: "#333333",
//   },
// };





// export interface TenantBranding {
//   primary: string;
//   secondary: string;
//   accent: string;
//   background: string;
//   text: string;
// }

// export const mockTenantBranding: Record<string, TenantBranding> = {
//   tenantA: {
//     primary: "#C59949",
//     secondary: "#f5f5f5",
//     accent: "#000000",
//     background: "#ffffff",
//     text: "#000000",
//   },
//   tenantB: {
//     primary: "#0070f3",
//     secondary: "#eaeaea",
//     accent: "#ff0080",
//     background: "#ffffff",
//     text: "#333333",
//   },
//   tenantC: {
//     primary: "#4CAF50",       // green primary
//     secondary: "#DFF2E1",     // light green secondary
//     accent: "#FFC107",        // amber accent
//     background: "#F9FFF5",    // very light background
//     text: "#1B1B1B",          // dark text
//   },
// };



export interface TenantBrandingVariant {
  primary: string;
  secondary: string;
  accent: string;
  background: string;
  text: string;
}

export interface TenantBranding {
  light: TenantBrandingVariant;
  dark: TenantBrandingVariant;
}

export const mockTenantBranding: Record<string, TenantBranding> = {
  tenantA: {
    light: {
      primary: "#C59949",
      secondary: "#f5f5f5",
      accent: "#000000",
      background: "#ffffff",
      text: "#000000",
    },
    dark: {
      primary: "#C59949",
      secondary: "#333333",
      accent: "#ffffff",
      background: "#000000",
      text: "#ffffff",
    },
  },

  tenantB: {
    light: {
      primary: "#0070f3",
      secondary: "#eaeaea",
      accent: "#ff0080",
      background: "#ffffff",
      text: "#333333",
    },
    dark: {
      primary: "#60A5FA",
      secondary: "#1f2937",
      accent: "#ff80d4",
      background: "#111827",
      text: "#ffffff",
    },
  },

  tenantC: {
    light: {
      primary: "#4CAF50",
      secondary: "#DFF2E1",
      accent: "#FFC107",
      background: "#F9FFF5",
      text: "#1B1B1B",
    },
    dark: {
      primary: "#4CAF50",
      secondary: "#294b2f",
      accent: "#FFD34D",
      background: "#0F1A11",
      text: "#ffffff",
    },
  },
};
