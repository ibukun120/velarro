import { useRouter } from "next/navigation";

/**
 * useSignOut — call this hook in your profile page
 * and attach the returned `signOut` function to your sign out button.
 *
 * Usage in your profile page:
 *
 *   const signOut = useSignOut();
 *   <button onClick={signOut}>Sign Out</button>
 */
export const useSignOut = () => {
  const router = useRouter();

  const signOut = () => {
    // Clear all auth data from localStorage
    localStorage.removeItem("accessToken");
    localStorage.removeItem("refreshToken");
    localStorage.removeItem("customer");
    localStorage.removeItem("pendingVerificationEmail");

    // Redirect to home page
    router.push("/");
  };

  return signOut;
};


/**
 * getCustomer — call this anywhere to get the logged-in customer's data.
 * Returns null if the user is not logged in.
 *
 * Usage:
 *   const customer = getCustomer();
 *   console.log(customer?.firstName);
 */
export const getCustomer = () => {
  if (typeof window === "undefined") return null; // SSR guard
  const raw = localStorage.getItem("customer");
  if (!raw) return null;
  try {
    return JSON.parse(raw) as {
      id: string;
      firstName: string;
      lastName: string;
      email: string;
      countryCode: string;
      phone: string;
      dateOfBirth: string;
      isEmailVerified: boolean;
      isPhoneVerified: boolean;
      status: string;
    };
  } catch {
    return null;
  }
};


/**
 * getAccessToken — use this when making authenticated API calls.
 *
 * Usage:
 *   const token = getAccessToken();
 *   fetch("/some/protected/route", {
 *     headers: { Authorization: `Bearer ${token}` }
 *   });
 */
export const getAccessToken = () => {
  if (typeof window === "undefined") return null;
  return localStorage.getItem("accessToken");
};
