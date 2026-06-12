import clsx from "clsx";

/* ================= H1 ================= */
export function H1({
children,
className,
}: {
children: React.ReactNode;
className?: string;
}) {
return (
<h1
className={clsx(
"font-bold",
"text-text-primary",
"leading-tight",
"text-3xl sm:text-4xl md:text-5xl",
className
)}
>
{children} </h1>
);
}

/* ================= H2 ================= */
export function H2({
children,
className,
}: {
children: React.ReactNode;
className?: string;
}) {
return (
<h2
className={clsx(
"font-extralight",
"text-neutral-13",
"leading-snug",
"text-2xl sm:text-3xl md:text-4xl",
className
)}
>
{children} </h2>
);
}

/* ================= H3 ================= */
export function H3({
children,
className,
}: {
children: React.ReactNode;
className?: string;
}) {
return (
<h3
className={clsx(
"font-medium",
"text-neutral-13",
"leading-snug",
"text-lg sm:text-xl md:text-2xl",
className
)}
>
{children} </h3>
);
}

/* ================= TEXT ================= */
export function Text({
children,
variant = "md",
className,
}: {
children: React.ReactNode;
variant?: "sm" | "md" | "lg" | "xl";
className?: string;
}) {
return (
<p
className={clsx(
"text-text-body",


    variant === "sm" &&
      "text-sm leading-5 text-text-secondary",

    variant === "md" &&
      "text-base leading-6 text-text-body",

    variant === "lg" &&
      "text-lg leading-7 text-text-body",

    variant === "xl" &&
      "text-xl md:text-2xl leading-8 text-neutral-13",

    className
  )}
>
  {children}
</p>


);
}

/* ================= LABEL ================= */
export function Label({
children,
className,
}: {
children: React.ReactNode;
className?: string;
}) {
return (
<span
className={clsx(
"text-xs sm:text-sm",
"font-medium",

"tracking-[0.12em]",
"text-neutral-12",
className
)}
>
{children} </span>
);
}
