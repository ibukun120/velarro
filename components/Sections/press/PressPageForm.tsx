import Container from "@/components/Layouts/Container";

const formFields = [
  {
    label: "First Name",
    type: "text",
    placeholder: "First name",
    colSpan: "half",
  },
  {
    label: "Last Name",
    type: "text",
    placeholder: "Last name",
    colSpan: "half",
  },
  {
    label: "Email Address",
    type: "email",
    placeholder: "Enter your email",
    colSpan: "half",
  },
  {
    label: "Country",
    type: "select",
    placeholder: "Select country",
    colSpan: "half",
    options: ["India", "United States", "United Kingdom", "Canada"],
  },
  {
    label: "Job title",
    type: "text",
    placeholder: "Junior Reporter",
    colSpan: "half",
  },
  {
    label: "Company / Organization",
    type: "text",
    placeholder: "Enter company name",
    colSpan: "half",
  },
  {
    label: "Publication",
    type: "text",
    placeholder: "Enter publication name",
    colSpan: "half",
  },
  {
    label: "Distribution Channel",
    type: "select",
    placeholder: "Select a channel",
    colSpan: "half",
    options: ["Magazine", "News Website", "Television", "Social Media"],
  },
  {
    label: "Country of publication",
    type: "select",
    placeholder: "Select country/ countries",
    colSpan: "full",
    options: ["India", "United States", "Germany", "France"],
  },
  {
    label: "Your message",
    type: "textarea",
    placeholder: "Please type your message",
    colSpan: "full",
  },
];

const agreements = [
  {
    text: "I have read and agree to the Terms and Conditions.",
    linkText: "Terms and Conditions.",
  },
  {
    text: "I have read and agree to the Privacy Notice.",
    linkText: "Privacy Notice.",
  },
];

export default function PressPageForm() {
  return (
    <section className="bg-neutral-1 py-14 md:py-20">
      <Container>
        <div className="mx-auto max-w-5xl text-center">
          {/* Heading */}
          {/* Heading */}
           <div className="flex flex-col items-center">
           <h2 className="text-[32px] md:text-5xl font-light text-neutal-13">
            Velarro Estate
           </h2>
           <div className="mt-3 h-[1px] w-[65%] bg-primary-500" />
           </div>

          {/* Description */}
          <div className="mt-6 space-y-6 text-neutral-11/80 text-base md:text-xl leading-relaxed">
            <p>
              Velarro works with a curated network of journalists, editors, and
              media professionals whose publications reflect the values the
              house was built on. Press Room access includes brand assets, press
              releases, product imagery, and editorial materials available
              exclusively to approved representatives.
            </p>

            <p>
             To request access, please complete the form below. Applications are reviewed by the Velarro communications team and responded to within five business days.
            </p>
          </div>

          {/* Form Card */}
          <div className="mt-10 rounded-[8px] border-1 border-neutral-6 bg-neutral-1 p-6 md:p-10">
            <form className="space-y-8">
              {/* Fields */}
              <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
                {formFields.map((field, index) => (
                  <div
                    key={index}
                    className={
                      field.colSpan === "full"
                        ? "md:col-span-2"
                        : "md:col-span-1"
                    }
                  >
                    <label className="mb-2 block text-left text-sm md:text-base font-medium text-neutral-12/90">
                      {field.label}
                    </label>

                    {field.type === "textarea" ? (
                      <textarea
                        placeholder={field.placeholder}
                        rows={6}
                        className="w-full rounded-[4px] border border-netral-6 bg-neutral-1 px-4 py-3 text-secondary-500 outline-none transition focus:border-primary-500"
                      />
                    ) : field.type === "select" ? (
                      <select
                        className="w-full rounded-[4px] border border-netral-5 bg-neutral-1 px-4 py-3 text-secondary-400 outline-none transition focus:border-primary-500"
                      >
                        <option>{field.placeholder}</option>

                        {field.options?.map((option, idx) => (
                          <option key={idx}>{option}</option>
                        ))}
                      </select>
                    ) : (
                      <input
                        type={field.type}
                        placeholder={field.placeholder}
                        className="w-full rounded-[4px] border border-neutral-6 bg-neutral-1 px-4 py-3 text-secondary-500 outline-none transition focus:border-primary-500"
                      />
                    )}
                  </div>
                ))}
              </div>

              {/* Agreement */}
              <div className="space-y-5 text-left">
                <h3 className="text-2xl font-light text-neutral-12">
                  Agreement
                </h3>

                {agreements.map((agreement, index) => (
                  <label
                    key={index}
                    className="flex items-start gap-3 text-neutral-13/70 text-sm md:text-base"
                  >
                    <input
                      type="checkbox"
                      className="mt-1 h-4 w-4 border border-neutral-13 accent-primary-500"
                    />

                    <span>
                      {agreement.text.split(agreement.linkText)[0]}

                      <span className="text-primary-600 underline cursor-pointer">
                        {agreement.linkText}
                      </span>
                    </span>
                  </label>
                ))}
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                className="w-full rounded-[4px] border-1 border-netral-5 bg-neutral-2 py-4 text-sm md:text-base font-medium uppercase tracking-[2px] text-neutral-12/80 transition duration-300 hover:bg-primary-500 hover:text-neutral-1"
              >
                Submit Application
              </button>

              {/* Footer */}
              <p className="text-center text-neutral-13 text-sm md:text-base">
                Need help? Contact our{" "}
                <span className="text-neutral-6 underline cursor-pointer">
                  support team
                </span>
              </p>
            </form>
          </div>
        </div>
      </Container>
    </section>
  );
}