/* eslint-disable react-hooks/static-components */
"use client";

import React, { useState, useRef, useEffect } from "react";
import Link from "next/link";
import Input from "@/components/ui/FormElements/Input";
// import Input from "@/components/FormElements/Input";

const COUNTRIES = [
  { code: "AF", flag: "🇦🇫", name: "Afghanistan", dial: "+93" },
  { code: "AL", flag: "🇦🇱", name: "Albania", dial: "+355" },
  { code: "DZ", flag: "🇩🇿", name: "Algeria", dial: "+213" },
  { code: "AD", flag: "🇦🇩", name: "Andorra", dial: "+376" },
  { code: "AO", flag: "🇦🇴", name: "Angola", dial: "+244" },
  { code: "AR", flag: "🇦🇷", name: "Argentina", dial: "+54" },
  { code: "AM", flag: "🇦🇲", name: "Armenia", dial: "+374" },
  { code: "AU", flag: "🇦🇺", name: "Australia", dial: "+61" },
  { code: "AT", flag: "🇦🇹", name: "Austria", dial: "+43" },
  { code: "AZ", flag: "🇦🇿", name: "Azerbaijan", dial: "+994" },
  { code: "BS", flag: "🇧🇸", name: "Bahamas", dial: "+1-242" },
  { code: "BH", flag: "🇧🇭", name: "Bahrain", dial: "+973" },
  { code: "BD", flag: "🇧🇩", name: "Bangladesh", dial: "+880" },
  { code: "BB", flag: "🇧🇧", name: "Barbados", dial: "+1-246" },
  { code: "BY", flag: "🇧🇾", name: "Belarus", dial: "+375" },
  { code: "BE", flag: "🇧🇪", name: "Belgium", dial: "+32" },
  { code: "BZ", flag: "🇧🇿", name: "Belize", dial: "+501" },
  { code: "BJ", flag: "🇧🇯", name: "Benin", dial: "+229" },
  { code: "BT", flag: "🇧🇹", name: "Bhutan", dial: "+975" },
  { code: "BO", flag: "🇧🇴", name: "Bolivia", dial: "+591" },
  { code: "BA", flag: "🇧🇦", name: "Bosnia & Herzegovina", dial: "+387" },
  { code: "BW", flag: "🇧🇼", name: "Botswana", dial: "+267" },
  { code: "BR", flag: "🇧🇷", name: "Brazil", dial: "+55" },
  { code: "BN", flag: "🇧🇳", name: "Brunei", dial: "+673" },
  { code: "BG", flag: "🇧🇬", name: "Bulgaria", dial: "+359" },
  { code: "BF", flag: "🇧🇫", name: "Burkina Faso", dial: "+226" },
  { code: "BI", flag: "🇧🇮", name: "Burundi", dial: "+257" },
  { code: "KH", flag: "🇰🇭", name: "Cambodia", dial: "+855" },
  { code: "CM", flag: "🇨🇲", name: "Cameroon", dial: "+237" },
  { code: "CA", flag: "🇨🇦", name: "Canada", dial: "+1" },
  { code: "CF", flag: "🇨🇫", name: "Central African Republic", dial: "+236" },
  { code: "TD", flag: "🇹🇩", name: "Chad", dial: "+235" },
  { code: "CL", flag: "🇨🇱", name: "Chile", dial: "+56" },
  { code: "CN", flag: "🇨🇳", name: "China", dial: "+86" },
  { code: "CO", flag: "🇨🇴", name: "Colombia", dial: "+57" },
  { code: "CR", flag: "🇨🇷", name: "Costa Rica", dial: "+506" },
  { code: "HR", flag: "🇭🇷", name: "Croatia", dial: "+385" },
  { code: "CU", flag: "🇨🇺", name: "Cuba", dial: "+53" },
  { code: "CY", flag: "🇨🇾", name: "Cyprus", dial: "+357" },
  { code: "CZ", flag: "🇨🇿", name: "Czech Republic", dial: "+420" },
  { code: "DK", flag: "🇩🇰", name: "Denmark", dial: "+45" },
  { code: "DJ", flag: "🇩🇯", name: "Djibouti", dial: "+253" },
  { code: "DO", flag: "🇩🇴", name: "Dominican Republic", dial: "+1-809" },
  { code: "EC", flag: "🇪🇨", name: "Ecuador", dial: "+593" },
  { code: "EG", flag: "🇪🇬", name: "Egypt", dial: "+20" },
  { code: "SV", flag: "🇸🇻", name: "El Salvador", dial: "+503" },
  { code: "ER", flag: "🇪🇷", name: "Eritrea", dial: "+291" },
  { code: "EE", flag: "🇪🇪", name: "Estonia", dial: "+372" },
  { code: "ET", flag: "🇪🇹", name: "Ethiopia", dial: "+251" },
  { code: "FJ", flag: "🇫🇯", name: "Fiji", dial: "+679" },
  { code: "FI", flag: "🇫🇮", name: "Finland", dial: "+358" },
  { code: "FR", flag: "🇫🇷", name: "France", dial: "+33" },
  { code: "GA", flag: "🇬🇦", name: "Gabon", dial: "+241" },
  { code: "GM", flag: "🇬🇲", name: "Gambia", dial: "+220" },
  { code: "GE", flag: "🇬🇪", name: "Georgia", dial: "+995" },
  { code: "DE", flag: "🇩🇪", name: "Germany", dial: "+49" },
  { code: "GH", flag: "🇬🇭", name: "Ghana", dial: "+233" },
  { code: "GR", flag: "🇬🇷", name: "Greece", dial: "+30" },
  { code: "GT", flag: "🇬🇹", name: "Guatemala", dial: "+502" },
  { code: "GN", flag: "🇬🇳", name: "Guinea", dial: "+224" },
  { code: "GY", flag: "🇬🇾", name: "Guyana", dial: "+592" },
  { code: "HT", flag: "🇭🇹", name: "Haiti", dial: "+509" },
  { code: "HN", flag: "🇭🇳", name: "Honduras", dial: "+504" },
  { code: "HU", flag: "🇭🇺", name: "Hungary", dial: "+36" },
  { code: "IS", flag: "🇮🇸", name: "Iceland", dial: "+354" },
  { code: "IN", flag: "🇮🇳", name: "India", dial: "+91" },
  { code: "ID", flag: "🇮🇩", name: "Indonesia", dial: "+62" },
  { code: "IR", flag: "🇮🇷", name: "Iran", dial: "+98" },
  { code: "IQ", flag: "🇮🇶", name: "Iraq", dial: "+964" },
  { code: "IE", flag: "🇮🇪", name: "Ireland", dial: "+353" },
  { code: "IL", flag: "🇮🇱", name: "Israel", dial: "+972" },
  { code: "IT", flag: "🇮🇹", name: "Italy", dial: "+39" },
  { code: "JM", flag: "🇯🇲", name: "Jamaica", dial: "+1-876" },
  { code: "JP", flag: "🇯🇵", name: "Japan", dial: "+81" },
  { code: "JO", flag: "🇯🇴", name: "Jordan", dial: "+962" },
  { code: "KZ", flag: "🇰🇿", name: "Kazakhstan", dial: "+7" },
  { code: "KE", flag: "🇰🇪", name: "Kenya", dial: "+254" },
  { code: "KW", flag: "🇰🇼", name: "Kuwait", dial: "+965" },
  { code: "KG", flag: "🇰🇬", name: "Kyrgyzstan", dial: "+996" },
  { code: "LA", flag: "🇱🇦", name: "Laos", dial: "+856" },
  { code: "LV", flag: "🇱🇻", name: "Latvia", dial: "+371" },
  { code: "LB", flag: "🇱🇧", name: "Lebanon", dial: "+961" },
  { code: "LS", flag: "🇱🇸", name: "Lesotho", dial: "+266" },
  { code: "LR", flag: "🇱🇷", name: "Liberia", dial: "+231" },
  { code: "LY", flag: "🇱🇾", name: "Libya", dial: "+218" },
  { code: "LI", flag: "🇱🇮", name: "Liechtenstein", dial: "+423" },
  { code: "LT", flag: "🇱🇹", name: "Lithuania", dial: "+370" },
  { code: "LU", flag: "🇱🇺", name: "Luxembourg", dial: "+352" },
  { code: "MG", flag: "🇲🇬", name: "Madagascar", dial: "+261" },
  { code: "MW", flag: "🇲🇼", name: "Malawi", dial: "+265" },
  { code: "MY", flag: "🇲🇾", name: "Malaysia", dial: "+60" },
  { code: "MV", flag: "🇲🇻", name: "Maldives", dial: "+960" },
  { code: "ML", flag: "🇲🇱", name: "Mali", dial: "+223" },
  { code: "MT", flag: "🇲🇹", name: "Malta", dial: "+356" },
  { code: "MR", flag: "🇲🇷", name: "Mauritania", dial: "+222" },
  { code: "MU", flag: "🇲🇺", name: "Mauritius", dial: "+230" },
  { code: "MX", flag: "🇲🇽", name: "Mexico", dial: "+52" },
  { code: "MD", flag: "🇲🇩", name: "Moldova", dial: "+373" },
  { code: "MC", flag: "🇲🇨", name: "Monaco", dial: "+377" },
  { code: "MN", flag: "🇲🇳", name: "Mongolia", dial: "+976" },
  { code: "ME", flag: "🇲🇪", name: "Montenegro", dial: "+382" },
  { code: "MA", flag: "🇲🇦", name: "Morocco", dial: "+212" },
  { code: "MZ", flag: "🇲🇿", name: "Mozambique", dial: "+258" },
  { code: "MM", flag: "🇲🇲", name: "Myanmar", dial: "+95" },
  { code: "NA", flag: "🇳🇦", name: "Namibia", dial: "+264" },
  { code: "NP", flag: "🇳🇵", name: "Nepal", dial: "+977" },
  { code: "NL", flag: "🇳🇱", name: "Netherlands", dial: "+31" },
  { code: "NZ", flag: "🇳🇿", name: "New Zealand", dial: "+64" },
  { code: "NI", flag: "🇳🇮", name: "Nicaragua", dial: "+505" },
  { code: "NE", flag: "🇳🇪", name: "Niger", dial: "+227" },
  { code: "NG", flag: "🇳🇬", name: "Nigeria", dial: "+234" },
  { code: "NO", flag: "🇳🇴", name: "Norway", dial: "+47" },
  { code: "OM", flag: "🇴🇲", name: "Oman", dial: "+968" },
  { code: "PK", flag: "🇵🇰", name: "Pakistan", dial: "+92" },
  { code: "PA", flag: "🇵🇦", name: "Panama", dial: "+507" },
  { code: "PG", flag: "🇵🇬", name: "Papua New Guinea", dial: "+675" },
  { code: "PY", flag: "🇵🇾", name: "Paraguay", dial: "+595" },
  { code: "PE", flag: "🇵🇪", name: "Peru", dial: "+51" },
  { code: "PH", flag: "🇵🇭", name: "Philippines", dial: "+63" },
  { code: "PL", flag: "🇵🇱", name: "Poland", dial: "+48" },
  { code: "PT", flag: "🇵🇹", name: "Portugal", dial: "+351" },
  { code: "QA", flag: "🇶🇦", name: "Qatar", dial: "+974" },
  { code: "RO", flag: "🇷🇴", name: "Romania", dial: "+40" },
  { code: "RU", flag: "🇷🇺", name: "Russia", dial: "+7" },
  { code: "RW", flag: "🇷🇼", name: "Rwanda", dial: "+250" },
  { code: "SA", flag: "🇸🇦", name: "Saudi Arabia", dial: "+966" },
  { code: "SN", flag: "🇸🇳", name: "Senegal", dial: "+221" },
  { code: "RS", flag: "🇷🇸", name: "Serbia", dial: "+381" },
  { code: "SG", flag: "🇸🇬", name: "Singapore", dial: "+65" },
  { code: "SK", flag: "🇸🇰", name: "Slovakia", dial: "+421" },
  { code: "SI", flag: "🇸🇮", name: "Slovenia", dial: "+386" },
  { code: "SO", flag: "🇸🇴", name: "Somalia", dial: "+252" },
  { code: "ZA", flag: "🇿🇦", name: "South Africa", dial: "+27" },
  { code: "SS", flag: "🇸🇸", name: "South Sudan", dial: "+211" },
  { code: "ES", flag: "🇪🇸", name: "Spain", dial: "+34" },
  { code: "LK", flag: "🇱🇰", name: "Sri Lanka", dial: "+94" },
  { code: "SD", flag: "🇸🇩", name: "Sudan", dial: "+249" },
  { code: "SR", flag: "🇸🇷", name: "Suriname", dial: "+597" },
  { code: "SE", flag: "🇸🇪", name: "Sweden", dial: "+46" },
  { code: "CH", flag: "🇨🇭", name: "Switzerland", dial: "+41" },
  { code: "SY", flag: "🇸🇾", name: "Syria", dial: "+963" },
  { code: "TW", flag: "🇹🇼", name: "Taiwan", dial: "+886" },
  { code: "TJ", flag: "🇹🇯", name: "Tajikistan", dial: "+992" },
  { code: "TZ", flag: "🇹🇿", name: "Tanzania", dial: "+255" },
  { code: "TH", flag: "🇹🇭", name: "Thailand", dial: "+66" },
  { code: "TG", flag: "🇹🇬", name: "Togo", dial: "+228" },
  { code: "TO", flag: "🇹🇴", name: "Tonga", dial: "+676" },
  { code: "TT", flag: "🇹🇹", name: "Trinidad & Tobago", dial: "+1-868" },
  { code: "TN", flag: "🇹🇳", name: "Tunisia", dial: "+216" },
  { code: "TR", flag: "🇹🇷", name: "Turkey", dial: "+90" },
  { code: "TM", flag: "🇹🇲", name: "Turkmenistan", dial: "+993" },
  { code: "UG", flag: "🇺🇬", name: "Uganda", dial: "+256" },
  { code: "UA", flag: "🇺🇦", name: "Ukraine", dial: "+380" },
  { code: "AE", flag: "🇦🇪", name: "United Arab Emirates", dial: "+971" },
  { code: "GB", flag: "🇬🇧", name: "United Kingdom", dial: "+44" },
  { code: "US", flag: "🇺🇸", name: "United States", dial: "+1" },
  { code: "UY", flag: "🇺🇾", name: "Uruguay", dial: "+598" },
  { code: "UZ", flag: "🇺🇿", name: "Uzbekistan", dial: "+998" },
  { code: "VE", flag: "🇻🇪", name: "Venezuela", dial: "+58" },
  { code: "VN", flag: "🇻🇳", name: "Vietnam", dial: "+84" },
  { code: "YE", flag: "🇾🇪", name: "Yemen", dial: "+967" },
  { code: "ZM", flag: "🇿🇲", name: "Zambia", dial: "+260" },
  { code: "ZW", flag: "🇿🇼", name: "Zimbabwe", dial: "+263" },
];

const DEFAULT_COUNTRY = COUNTRIES.find((c) => c.code === "IN")!;

const inputStyle: React.CSSProperties = {
  width: "100%",
  backgroundColor: "#FFFBF3",
  border: "1px solid #bfbfbf",
  borderRadius: "6px",
  padding: "9px 10px",
  fontSize: "14px",
  lineHeight: "23px",
  color: "#262626",
  outline: "none",
  boxSizing: "border-box",
};

const labelStyle: React.CSSProperties = {
  fontSize: "14px",
  fontWeight: 400,
  color: "#262626",
  lineHeight: "1.2",
  marginBottom: "4px",
  display: "block",
};

const errorStyle: React.CSSProperties = {
  color: "#ef4444",
  fontSize: "12px",
  marginTop: "2px",
};

export default function SignupPage() {
  const [formData, setFormData] = useState({
    phone: "",
    first_name: "",
    last_name: "",
    email: "",
    password: "",
    confirm_password: "",
  });
  const [errors, setErrors] = useState<{ [key: string]: string }>({});
  const [selectedCountry, setSelectedCountry] = useState(DEFAULT_COUNTRY);
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [search, setSearch] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [showPasswordHint, setShowPasswordHint] = useState(false);

  const dropdownRef = useRef<HTMLDivElement>(null);
  const hintRef = useRef<HTMLDivElement>(null);
  const searchRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    const handler = (e: MouseEvent) => {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(e.target as Node)
      ) {
        setDropdownOpen(false);
        setSearch("");
      }
      if (hintRef.current && !hintRef.current.contains(e.target as Node)) {
        setShowPasswordHint(false);
      }
    };
    document.addEventListener("mousedown", handler);
    return () => document.removeEventListener("mousedown", handler);
  }, []);

  useEffect(() => {
    if (dropdownOpen) setTimeout(() => searchRef.current?.focus(), 50);
  }, [dropdownOpen]);

  const filteredCountries = COUNTRIES.filter(
    (c) =>
      c.name.toLowerCase().includes(search.toLowerCase()) ||
      c.dial.includes(search),
  );

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    if (errors[name]) setErrors((prev) => ({ ...prev, [name]: "" }));
  };

  const validate = () => {
    const newErrors: { [key: string]: string } = {};
    if (!formData.phone) newErrors.phone = "Phone number is required";
    if (!formData.first_name) newErrors.first_name = "First name is required";
    if (!formData.last_name) newErrors.last_name = "Last name is required";
    if (!formData.email) {
      newErrors.email = "Email is required";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = "Enter a valid email address";
    }
    if (!formData.password) {
      newErrors.password = "Password is required";
    } else if (formData.password.length < 8) {
      newErrors.password = "Password must be at least 8 characters";
    } else if (
      !/(?=.*[A-Z])(?=.*[a-z])(?=.*\d)(?=.*[!@#$%^&*()_+=[\]{};':"\\|,.<>/?])/.test(
        formData.password,
      )
    ) {
      newErrors.password = "Password doesn't meet requirements";
    }
    if (!formData.confirm_password) {
      newErrors.confirm_password = "Please confirm your password";
    } else if (formData.password !== formData.confirm_password) {
      newErrors.confirm_password = "Password must same";
    }
    return newErrors;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const newErrors = validate();
    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    }
    console.log("Submitting:", { ...formData, dialCode: selectedCountry.dial });
  };

  const EyeIcon = () => (
    <svg
      width="18"
      height="18"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
    >
      <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z" />
      <circle cx="12" cy="12" r="3" />
    </svg>
  );

  const EyeOffIcon = () => (
    <svg
      width="18"
      height="18"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
    >
      <path d="M17.94 17.94A10.07 10.07 0 0 1 12 20c-7 0-11-8-11-8a18.45 18.45 0 0 1 5.06-5.94" />
      <path d="M9.9 4.24A9.12 9.12 0 0 1 12 4c7 0 11 8 11 8a18.5 18.5 0 0 1-2.16 3.19" />
      <line x1="1" y1="1" x2="23" y2="23" />
    </svg>
  );

  return (
    <div className="min-h-screen flex items-center justify-center bg-[#F5F5F0]">
      {/* Card — exactly matches login card style */}
      <div
        className="flex flex-col box-border"
        style={{
          width: "563px",
          minHeight: "1024px",
          background: "#FFFFFFF2",
          borderBottom: "1px solid #C59949",
          backdropFilter: "blur(8px)",
          boxShadow: "0px 4px 4px 0px #C5994940",
          padding: "80px 62px",
        }}
      >
        {/* Header */}
        <div style={{ marginBottom: "32px" }}>
          <h1
            className="font-bold text-secondary-600"
            style={{ fontSize: "32px", lineHeight: "1.2", marginBottom: "6px" }}
          >
            Sign up
          </h1>
          <p 
          className="text-secondary-200"
          style={{ fontSize: "15px" }}>
            Create a free account
          </p>
        </div>

        {/* Form */}
        <form
          onSubmit={handleSubmit}
          className="flex flex-col w-full"
          style={{ gap: "16px" }}
        >
          {/* Phone Number */}
          <div className="flex flex-col w-full" style={{ gap: "4px" }}>
            <span style={labelStyle}>Phone number</span>
            <div className="flex items-stretch" style={{ gap: "8px" }}>
              {/* Country selector */}
              <div className="relative shrink-0" ref={dropdownRef}>
                <button
                  type="button"
                  onClick={() => {
                    setDropdownOpen((v) => !v);
                    setSearch("");
                  }}
                  className="flex items-center font-medium cursor-pointer h-full box-border"
                  style={{
                    gap: "6px",
                    backgroundColor: "#FFFBF3",
                    border: dropdownOpen
                      ? "1px solid #C59949"
                      : "1px solid #bfbfbf",
                    borderRadius: "6px",
                    padding: "9px 10px",
                    fontSize: "13px",
                    color: "#262626",
                    whiteSpace: "nowrap",
                  }}
                >
                  <svg width="10" height="10" viewBox="0 0 12 12" fill="none">
                    <path
                      d={dropdownOpen ? "M2 8l4-4 4 4" : "M2 4l4 4 4-4"}
                      stroke="#C59949"
                      strokeWidth="1.8"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                  <span style={{ fontSize: "17px", lineHeight: 1 }}>
                    {selectedCountry.flag}
                  </span>
                  <span>{selectedCountry.dial}</span>
                </button>

                {/* Dropdown */}
                {dropdownOpen && (
                  <div
                    className="absolute z-[200] bg-white overflow-hidden"
                    style={{
                      top: "calc(100% + 4px)",
                      left: 0,
                      border: "1px solid #C59949",
                      borderRadius: "6px",
                      boxShadow: "0 8px 24px rgba(0,0,0,0.13)",
                      width: "270px",
                    }}
                  >
                    <div
                      style={{
                        padding: "8px 8px 6px",
                        borderBottom: "1px solid #f0f0f0",
                      }}
                    >
                      <input
                        ref={searchRef}
                        type="text"
                        placeholder="Search country or dial code…"
                        value={search}
                        onChange={(e) => setSearch(e.target.value)}
                        className="w-full outline-none box-border text-[#262626]"
                        style={{
                          border: "1px solid #bfbfbf",
                          borderRadius: "4px",
                          padding: "6px 9px",
                          fontSize: "12px",
                        }}
                      />
                    </div>
                    <div style={{ maxHeight: "230px", overflowY: "auto" }}>
                      {filteredCountries.length === 0 ? (
                        <div
                          style={{
                            padding: "14px",
                            fontSize: "13px",
                            color: "#8c8c8c",
                            textAlign: "center",
                          }}
                        >
                          No results found
                        </div>
                      ) : (
                        filteredCountries.map((country) => {
                          const isSelected =
                            selectedCountry.code === country.code;
                          return (
                            <button
                              key={country.code}
                              type="button"
                              onClick={() => {
                                setSelectedCountry(country);
                                setDropdownOpen(false);
                                setSearch("");
                              }}
                              className="flex items-center w-full cursor-pointer text-left text-[#262626]"
                              style={{
                                gap: "10px",
                                padding: "8px 12px",
                                background: isSelected
                                  ? "#FFF8EE"
                                  : "transparent",
                                border: "none",
                                borderBottom: "1px solid #faf6f0",
                                fontSize: "13px",
                              }}
                              onMouseEnter={(e) => {
                                if (!isSelected)
                                  (
                                    e.currentTarget as HTMLButtonElement
                                  ).style.background = "#f9f5ed";
                              }}
                              onMouseLeave={(e) => {
                                if (!isSelected)
                                  (
                                    e.currentTarget as HTMLButtonElement
                                  ).style.background = "transparent";
                              }}
                            >
                              <span
                                style={{
                                  fontSize: "17px",
                                  lineHeight: 1,
                                  flexShrink: 0,
                                }}
                              >
                                {country.flag}
                              </span>
                              <span className="flex-1 overflow-hidden text-ellipsis whitespace-nowrap">
                                {country.name}
                              </span>
                              <span
                                style={{
                                  color: "#C59949",
                                  fontWeight: 600,
                                  flexShrink: 0,
                                  fontSize: "12px",
                                }}
                              >
                                {country.dial}
                              </span>
                            </button>
                          );
                        })
                      )}
                    </div>
                  </div>
                )}
              </div>

              {/* Phone input */}
              <input
                type="tel"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                placeholder="Enter phone number"
                className="flex-1"
                style={inputStyle}
                onFocus={(e) =>
                  (e.currentTarget.style.border = "1px solid #C59949")
                }
                onBlur={(e) =>
                  (e.currentTarget.style.border = "1px solid #bfbfbf")
                }
              />
            </div>
            {errors.phone && <span style={errorStyle}>{errors.phone}</span>}
          </div>

          {/* First Name */}
          <Input
            label="First Name"
            name="first_name"
            type="text"
            value={formData.first_name}
            onChange={handleChange}
            errors={errors}
          />

          {/* Last Name */}
          <Input
            label="Last Name"
            name="last_name"
            type="text"
            value={formData.last_name}
            onChange={handleChange}
            errors={errors}
          />

          {/* Email */}
          <Input
            label="Email-id"
            name="email"
            type="email"
            value={formData.email}
            onChange={handleChange}
            errors={errors}
          />

          {/* Password */}
          <div className="flex flex-col w-full" style={{ gap: "4px" }}>
            <span style={labelStyle}>Password</span>
            <div className="relative">
              <input
                type={showPassword ? "text" : "password"}
                name="password"
                value={formData.password}
                onChange={handleChange}
                style={{ ...inputStyle, paddingRight: "40px" }}
                onFocus={(e) =>
                  (e.currentTarget.style.border = "1px solid #C59949")
                }
                onBlur={(e) =>
                  (e.currentTarget.style.border = "1px solid #bfbfbf")
                }
              />
              <button
                type="button"
                onClick={() => setShowPassword((v) => !v)}
                className="absolute flex items-center bg-transparent border-none cursor-pointer p-0 text-[#8c8c8c]"
                style={{
                  right: "10px",
                  top: "50%",
                  transform: "translateY(-50%)",
                }}
              >
                {showPassword ? <EyeOffIcon /> : <EyeIcon />}
              </button>
            </div>

            {/* Password hint row */}
            <div
              ref={hintRef}
              className="flex items-center justify-between relative"
              style={{ marginTop: "4px" }}
            >
              <span style={{ fontSize: "12px", color: "#8c8c8c" }}>
                Password must include
              </span>
              <button
                type="button"
                onClick={() => setShowPasswordHint((v) => !v)}
                className="flex items-center bg-transparent border-none cursor-pointer p-0"
              >
                <svg
                  width="18"
                  height="18"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="#C59949"
                  strokeWidth="2"
                >
                  <circle cx="12" cy="12" r="10" />
                  <line
                    x1="12"
                    y1="8"
                    x2="12"
                    y2="8"
                    strokeWidth="2.5"
                    strokeLinecap="round"
                  />
                  <line
                    x1="12"
                    y1="12"
                    x2="12"
                    y2="16"
                    strokeWidth="2"
                    strokeLinecap="round"
                  />
                </svg>
              </button>
              {showPasswordHint && (
                <div
                  className="absolute right-0 z-50 bg-white text-[#262626]"
                  style={{
                    top: "28px",
                    border: "1px solid #C59949",
                    borderRadius: "6px",
                    padding: "12px 16px",
                    width: "260px",
                    boxShadow: "0px 4px 12px rgba(0,0,0,0.1)",
                    fontSize: "12px",
                    lineHeight: "1.7",
                  }}
                >
                  <p
                    style={{
                      fontWeight: 600,
                      marginBottom: "6px",
                      fontSize: "12px",
                    }}
                  >
                    Passwords must include:
                  </p>
                  <ul
                    style={{
                      paddingLeft: "16px",
                      margin: 0,
                      listStyleType: "disc",
                    }}
                  >
                    <li>At least one uppercase letter (A-Z)</li>
                    <li>At least one lowercase letter (a-z)</li>
                    <li>At least one number (0-9)</li>
                    <li>
                      At least one special character
                      (!@#$%^&amp;*()_+[]&#123;&#125;;&apos;:&quot;,&lt;&gt;/?)
                    </li>
                  </ul>
                </div>
              )}
            </div>
            {errors.password && (
              <span style={errorStyle}>{errors.password}</span>
            )}
          </div>

          {/* Confirm Password */}
          <div className="flex flex-col w-full" style={{ gap: "4px" }}>
            <span style={labelStyle}>Confirm Password</span>
            <div className="relative">
              <input
                type={showConfirmPassword ? "text" : "password"}
                name="confirm_password"
                value={formData.confirm_password}
                onChange={handleChange}
                style={{ ...inputStyle, paddingRight: "40px" }}
                onFocus={(e) =>
                  (e.currentTarget.style.border = "1px solid #C59949")
                }
                onBlur={(e) =>
                  (e.currentTarget.style.border = "1px solid #bfbfbf")
                }
              />
              <button
                type="button"
                onClick={() => setShowConfirmPassword((v) => !v)}
                className="absolute flex items-center bg-transparent border-none cursor-pointer p-0 text-[#8c8c8c]"
                style={{
                  right: "10px",
                  top: "50%",
                  transform: "translateY(-50%)",
                }}
              >
                {showConfirmPassword ? <EyeOffIcon /> : <EyeIcon />}
              </button>
            </div>
            {errors.confirm_password && (
              <span style={errorStyle}>{errors.confirm_password}</span>
            )}
          </div>

          {/* Sign-up Button */}
          <div className="flex justify-center" style={{ marginTop: "8px" }}>
            <button
              type="submit"
              className="text-neutral-1 border-none cursor-pointer font-semibold"
              style={{
                background: "#C59949",
                borderRadius: "4px",
                padding: "12px 48px",
                fontSize: "15px",
                letterSpacing: "0.3px",
              }}
            >
              Sign-up
            </button>
          </div>
        </form>

        {/* Footer */}
        <p
          className="text-center"
          style={{ marginTop: "24px", fontSize: "15px", color: "#6b7280" }}
        >
          Already have an account?{" "}
          <Link
            href="/auth/login"
            className="text-[#C59949] no-underline font-medium"
          >
            Sign in
          </Link>
        </p>
      </div>
    </div>
  );
}
