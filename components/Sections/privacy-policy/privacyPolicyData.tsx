import React from "react";

export type PolicyElement =
  | { type: "paragraph"; content: React.ReactNode; className?: string }
  | { type: "subheading"; content: string }
  | { type: "list"; items: string[] }
  | { type: "custom"; content: React.ReactNode };

export interface PrivacyPolicySectionData {
  title: string;
  elements: PolicyElement[];
}

export const privacyPolicyData: PrivacyPolicySectionData[] = [
  {
    title: "1. Information We Collect",
    elements: [
      {
        type: "paragraph",
        content:
          "We may collect the following categories of personal information:",
      },
      { type: "subheading", content: "Account Information" },
      {
        type: "paragraph",
        content:
          "We may collect your name, email address, phone number, password or password credentials, account preferences, country, region, date of birth or age-confirmation status, login activity, and communication preferences.",
      },
      { type: "subheading", content: "Order and Checkout Information" },
      {
        type: "paragraph",
        content:
          "We may collect billing address, shipping address, order details, cart contents, purchase history, delivery instructions, refund or return information, and transaction-related records.",
      },
      { type: "subheading", content: "Payment Information" },
      {
        type: "paragraph",
        content:
          "We may collect payment-related information necessary to process your purchase, such as payment method type, billing details, payment authorization status, tokenized payment references, fraud screening results, and limited payment identifiers such as the last four digits of a card. Velarro does not intend to store full payment card numbers unless expressly disclosed and handled through appropriate payment security controls.",
      },
      { type: "subheading", content: "Age Verification Information" },
      {
        type: "paragraph",
        content: (
          <>
            Because Velarro sells age-restricted tobacco products, we may
            collect information necessary to verify your age and legal
            eligibility. This may include date of birth, address information,
            identity verification results, age verification provider references,
            verification timestamps, and pass/fail verification outcomes.
            <br />
            <br />
            Where possible, Velarro avoids storing full government
            identification images and instead stores only the minimum
            verification evidence necessary to demonstrate legal compliance.
          </>
        ),
      },
      { type: "subheading", content: "Device, Browser, and Usage Information" },
      {
        type: "paragraph",
        content:
          "IP address, device type, browser type, operating system, referral source, pages viewed, session identifiers, approximate location, cookie identifiers, and website interaction data.",
      },
      { type: "subheading", content: "Cookies and Tracking" },
      {
        type: "paragraph",
        content:
          "We use cookies to operate our website, maintain your cart, verify age-gate status, secure checkout, remember preferences, measure performance, and support marketing where permitted.",
      },
      { type: "subheading", content: "Marketing, Loyalty & Support" },
      {
        type: "paragraph",
        content:
          "Marketing preferences, email engagement, SMS consent, campaign interactions, loyalty status, rewards activity, event participation, support tickets, call notes, and resolution history.",
      },
      {
        type: "subheading",
        content: "Fraud Prevention & Business Information",
      },
      {
        type: "paragraph",
        content:
          "Login attempts, risk signals, chargeback data, IP reputation, account security logs, plus business contact information for wholesale, distributor, and lounge relationships.",
      },
    ],
  },
  {
    title: "2. How We Use Personal Information",
    elements: [
      {
        type: "list",
        items: [
          "Verify legal age and eligibility",
          "Create and manage accounts",
          "Process orders and payments",
          "Deliver products where legally permitted",
          "Provide customer support",
          "Prevent fraud, abuse, underage access, and unlawful transactions",
          "Manage loyalty, private-client, and event programs",
          "Send marketing communications where permitted",
          "Personalize website experiences where permitted",
          "Comply with tax, tobacco, shipping, legal, and regulatory obligations",
          "Secure our website, systems, and business operations",
          "Improve our products, services, and customer experience",
          "Respond to legal claims, regulatory requests, or law enforcement requests",
        ],
      },
    ],
  },
  {
    title: "3. Legal Bases for Processing",
    elements: [
      { type: "subheading", content: "Contractual Necessity" },
      {
        type: "paragraph",
        content:
          "To create accounts, process purchases, arrange delivery, manage returns, and provide support.",
      },
      { type: "subheading", content: "Legal Obligation" },
      {
        type: "paragraph",
        content:
          "To comply with tobacco age restrictions, tax rules, accounting, customs, payment, fraud prevention, and other legal duties.",
      },
      { type: "subheading", content: "Consent" },
      {
        type: "paragraph",
        content:
          "For certain marketing communications, SMS messages, non-essential cookies, personalized advertising, and loyalty profiling where consent is required.",
      },
      { type: "subheading", content: "Legitimate Interests" },
      {
        type: "paragraph",
        content:
          "For fraud prevention, security, business analytics, service improvement, dispute resolution, and account protection.",
      },
    ],
  },
  {
    title: "4. Age-Restricted Products",
    elements: [
      {
        type: "paragraph",
        className: "mb-4",
        content:
          "Velarro sells tobacco products intended only for adults of legal age.",
      },
      {
        type: "paragraph",
        className: "mb-4",
        content:
          "We may require age verification before allowing account registration, marketing enrollment, browsing, checkout, delivery, or loyalty participation. Orders may be refused, cancelled, or held for review if we cannot verify legal eligibility.",
      },
      {
        type: "paragraph",
        content:
          "Velarro does not knowingly sell to or market tobacco products to minors. If we learn we have collected personal information from a person below the legal age, we will take appropriate steps to delete or restrict the information unless retention is required by law.",
      },
    ],
  },
  {
    title: "5. Cookies and Similar Technologies",
    elements: [
      { type: "subheading", content: "Strictly Necessary Cookies" },
      {
        type: "paragraph",
        content:
          "Required to operate the website, maintain session status, manage privacy preferences, verify age, and secure the website.",
      },
      { type: "subheading", content: "Functional Cookies" },
      {
        type: "paragraph",
        content:
          "Help personalize site content and features based on past interactions.",
      },
      { type: "subheading", content: "Analytics Cookies" },
      {
        type: "paragraph",
        content:
          "Help us understand website performance, product interest, page usage, and customer experience.",
      },
      { type: "subheading", content: "Advertising and Retargeting Cookies" },
      {
        type: "paragraph",
        content:
          "Where permitted, these may help us measure campaigns, personalize ads, and understand marketing performance. You can manage cookie preferences through our cookie settings tool, and may withdraw or change preferences at any time.",
      },
    ],
  },
  {
    title: "6. Marketing Communications",
    elements: [
      {
        type: "paragraph",
        className: "mb-4",
        content:
          "Velarro may send marketing emails, SMS messages, event invitations, product updates, and loyalty communications only where permitted by law and your preferences.",
      },
      {
        type: "paragraph",
        className: "mb-4",
        content:
          "You can unsubscribe from marketing emails by using the unsubscribe link, or opt out of SMS messages by replying STOP where available. Marketing consent is not required to purchase Velarro products. ",
      },
    ],
  },

  {
    title: "7. How We Share Personal Information",
    elements: [
      {
        type: "paragraph",
        content: "We may share personal information with:",
      },
      {
        type: "list",
        items: [
          "Payment processors and acquiring banks",
          "Age veru=ification providers",
          "Fraud prevention provider",
          "Shipping carriers and logistics partners",
          "Tax and accounting providers",
          "Customer support providers",
          "Email, SMS, and marketing providers",
          "Analytics providers",
          "Hosting, infrastructure, and security providers",
          "Professional advisors (lawyers, accountants, auditors, insurers)",
          "Distributors, lounges, hospitality, or fulfillment partners where necessary",
          "Regulators, courts, customs authorities, law enforcement, or government agencies where required or permitted by law",
        ],
      },
      {
        type: "paragraph",
        content: (
          <>
            We do not sell personal information in the ordinary meaning of
            selling customer lists for money. However, some privacy laws define
            &quot; sale &quot;, &quot; sharing &quot;, or &quot; targeted advertising &quot; broadly. Where
            applicable, you may have the right to opt out.
          </>
        ),
      },
    ],
  },
  {
    title: "8. International Transfers",
    elements: [
      {
        type: "paragraph",
        className: "mb-4",
        content:
          "Velarro may process and transfer personal information in countries other than where you live. These countries may have privacy laws that differ from your local laws.",
      },
      {
        type: "paragraph",
        className: "mb-4",
        content:
          "Where required, we use appropriate safeguards such as contractual protections, transfer assessments, approved legal mechanisms, vendor due diligence, access controls, and encryption.",
      },
    ],
  },
  {
    title: "9. Data Retention",
    elements: [
      {
        type: "paragraph",
        content:
          "Velarro retains personal information only as long as reasonably necessary for the purposes described in this Privacy Policy, including legal, tax, accounting, tobacco compliance, age verification, fraud prevention, dispute resolution, security, and business recordkeeping purposes.",
      },
      {
        type: "list",
        items: [
          "Account information may be retained for the life of the account and a reasonable period afterward",
          "Order, invoice, tax, and accounting records may be retained as required by law",
          "Age verification records may be retained as needed to demonstrate compliance",
          "Marketing consent records may be retained to prove consent and honor opt-outs",
          "Security and fraud records may be retained to protect Velarro and its customers",
          "Support records may be retained for service, legal, and operational purposes",
        ],
      },
    ],
  },
  {
    title: "10. Security",
    elements: [
      {
        type: "paragraph",
        className: "mb-4",
        content:
          "Velarro uses administrative, technical, and physical safeguards designed to protect personal information from unauthorized access, loss, misuse, alteration, or disclosure.",
      },
      {
        type: "paragraph",
        className: "mb-4",
        content:
          "No system is completely secure. You are responsible for maintaining the confidentiality of your account credentials and for notifying us if you believe your account has been compromised.",
      },
    ],
  },
  {
    title: "11. Your Privacy Rights",
    elements: [
      {
        type: "paragraph",
        content: "Depending on where you live, you may have rights to:"
      },
      {
        type: "list",
        items: [
          "Request access to personal information",
          "Request correction of inaccurate information",
          "Request deletion of personal information",
          "Request restriction of processing",
          "Object to certain processing",
          "Withdraw consent",
          "Request portability of personal information",
          "Opt out of certain marketing",
          "Opt out of sale, sharing, or targeted advertising where applicable",
          "Appeal a denied privacy request where applicable",
          "Complain to a privacy regulator",

        ]
      },
      {
        type: "paragraph",
        content:
          <>
            To submit a request, contact <a href="mailto:privacy@velarrotobacco.com" className="text-primary-500 cursor-pointer">privacy@velarrotobacco.com</a>.
          </>
      }
    ]
  },
  {
    title: "12. Children and Minors",
    elements: [
      {
        type: "paragraph",
        content: "Velarro products and services are not directed to minors. We do not knowingly collect personal information from individuals who are under the legal age to access or purchase tobacco products in their jurisdiction."
      }
    ]
  },
  {
    title: "13. Automated Decision-Making and Profiling",
    elements: [
      {
        type: "paragraph",
        className: "mb-4",
        content:
          "Velarro may use automated tools to support fraud prevention, age verification, payment risk review, website security, personalization, and marketing preference management."

      },
      {
        type: "paragraph",
        content:
          "Where required by law, you may have the right to request information about automated decisions, object to certain profiling, or request human review."
      },
    ]
  },
  {
    title: "14. Changes to This Privacy Policy",
    elements: [
      {
        type: "paragraph",
        content:
          "We may update this Privacy Policy from time to time. The updated version will be posted on this page with a revised \"Last Updated\" date. If changes are material, we may provide additional notice where required by law."
      },
      {
        type: "custom",
        content: (
          <div className="border border-neutral-5 mt-8 md:mt-12 flex flex-col w-full overflow-hidden">
            <div className="bg-primary-400 px-5 py-4 md:px-6 md:py-5 font-light text-2xl md:text-4xl text-secondary-900 leading-8.75">
              Velarro Privacy Team
            </div>
            <div className="px-5 py-3 md:px-6 md:py-4 border-t border-neutral-5 flex flex-col sm:flex-row sm:items-center gap-1 sm:gap-2 bg-neutral-1">
               <span className="font-bold text-[15px] md:text-[17px] text-secondary-900">Email:</span>
               <a href="mailto:privacy@velarrotobacco.com" className="text-primary-500 font-medium hover:text-primary-600 transition-colors text-base md:text-md break-all sm:break-normal">privacy@velarrotobacco.com</a>
            </div>
            <div className="px-5 py-3 md:px-6 md:py-4 border-t border-neutral-5 flex flex-col sm:flex-row sm:items-center gap-1 sm:gap-2 bg-neutral-1">
               <span className="font-bold text-base md:text-md text-secondary-900">Legal:</span>
               <a href="mailto:legal@velarrotobacco.com" className="text-primary-500 font-medium hover:text-primary-600 transition-colors text-base md:text-md break-all sm:break-normal">legal@velarrotobacco.com</a>
            </div>
          </div>
        )
      }
    ]
  },
  {
    title: "Regional Addendums",
    elements: [
      { type: "subheading", content: "Regional Privacy Notices" },
      {
        type: "paragraph",
        content: (
          <>
            These regional notices supplement the Velarro Privacy Policy and apply to individuals in the regions listed below: United States (incl. California), European Union (Germany, Spain), United Kingdom, Switzerland, Canada, United Arab Emirates, China, India, and Singapore.<br />
            For full regional details or to exercise specific rights, contact <a href="mailto:privacy@velarrotobacco.com" className="text-primary-500 underline text-lg hover:text-primary-600 transition-colors cursor-pointer">privacy@velarrotobacco.com</a>.
          </>
        )
      }
    ]
  }
];
