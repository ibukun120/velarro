// import Image from "next/image";
import TermsSection, { TermsParagraph, TermsList } from "./TermsSection";

// ─── ContentSection ───────────────────────────────────────────────────────────
// Full content body: the background hero image + all numbered legal sections.
// ─────────────────────────────────────────────────────────────────────────────

export default function ContentSection() {
  return (
    <div
      className="
        relative flex w-full max-w-[1243px] flex-col items-start
        isolate flex-shrink-0
      "
    >

      {/* All legal content */}
      <div
        className="
          z-10 flex w-full flex-col gap-9 py-5
        "
      >
        {/* ── Overview ─────────────────────────────────────────────────────── */}
        <TermsSection title="Overview">
          <TermsParagraph>
            These Terms and Conditions (&quot;Terms&quot;) govern your access to and use
            of the Velarro website, including any subdomains, mobile versions,
            digital services, or other online properties operated by Velarro
            (&quot;Velarro,&quot; &quot;we,&quot; &quot;us,&quot; &quot;our&quot;).
          </TermsParagraph>
          <TermsParagraph>
            By accessing or using this Website, you agree to be bound by these
            Terms and all applicable laws and regulations in your jurisdiction.
            If you do not agree, you must not use this Website.
          </TermsParagraph>
          <TermsParagraph>
            These Terms apply globally, including but not limited to users
            located in India, the United States (including California), the
            European Union, the United Kingdom, Switzerland, Germany, Spain,
            Canada, the United Arab Emirates, Singapore, and China.
          </TermsParagraph>
        </TermsSection>

        {/* ── 1. Eligibility ───────────────────────────────────────────────── */}
        <TermsSection number="1" title="Eligibility & Legal Capacity">
          <TermsParagraph>
            1.1 The Website is intended solely for individuals who are at least
            21 years of age or the legal age of majority in their jurisdiction,
            whichever is higher.
          </TermsParagraph>
          <TermsParagraph>
            1.2 By using the Website, you represent and warrant that:
          </TermsParagraph>
          <TermsList
            items={[
              "You meet the minimum legal age requirement in your jurisdiction;",
              "You are legally capable of entering into binding contracts;",
              "All information you provide is accurate, current, and complete.",
            ]}
          />
          <TermsParagraph>
            1.3 We reserve the right to refuse access, suspend accounts, or
            cancel orders where we reasonably believe eligibility requirements
            are not met.
          </TermsParagraph>
        </TermsSection>

        {/* ── 2. Territorial Availability ──────────────────────────────────── */}
        <TermsSection number="2" title="Territorial Availability and Compliance">
          <TermsParagraph>
            2.1 Velarro operates internationally and does not guarantee that
            the Website or its content is appropriate or available in all
            jurisdictions.
          </TermsParagraph>
          <TermsParagraph>
            2.2 You are responsible for ensuring that your use of the Website
            complies with all applicable local laws, including import/export
            restrictions, customs regulations, and product legality in your
            jurisdiction.
          </TermsParagraph>
          <TermsParagraph>
            2.3 We reserve the right to restrict access to the Website or
            refuse orders from any country, region, or individual at our
            discretion.
          </TermsParagraph>
        </TermsSection>

        {/* ── 3. Account Registration ──────────────────────────────────────── */}
        <TermsSection number="3" title="Account Registration and Security">
          <TermsParagraph>
            3.1 Certain features may require account registration. You agree to
            provide accurate and complete information during registration.
          </TermsParagraph>
          <TermsParagraph>3.2 You are solely responsible for:</TermsParagraph>
          <TermsList
            items={[
              "Maintaining confidentiality of login credentials;",
              "All activities conducted under your account;",
              "Promptly notifying Velarro of any unauthorized access or breach.",
            ]}
          />
          <TermsParagraph>
            3.3 We are not liable for losses arising from unauthorized account
            use due to your failure to secure credentials.
          </TermsParagraph>
          <TermsParagraph>
            3.4 We may suspend or terminate accounts at our sole discretion,
            including for suspected fraud, misuse, or violation of these Terms.
          </TermsParagraph>
        </TermsSection>

        {/* ── 4. Website Access ────────────────────────────────────────────── */}
        <TermsSection number="4" title="Website access and Limited License">
          <TermsParagraph>
            4.1 Velarro grants you a limited, non-exclusive, non-transferable,
            revocable license to access and use the Website strictly for
            personal, non-commercial use.
          </TermsParagraph>
          <TermsParagraph>4.2 You agree not to:</TermsParagraph>
          <TermsList
            items={[
              "Copy, reproduce, resell, or exploit any part of the Website;",
              "Use automated systems (bots, scrapers, spiders) without written permission;",
              "Interfere with or disrupt Website functionality or security.",
            ]}
          />
          <TermsParagraph>
            4.3 All rights not expressly granted are reserved by Velarro.
          </TermsParagraph>
        </TermsSection>

        {/* ── 5. Product Information ───────────────────────────────────────── */}
        <TermsSection number="5" title="Product Information and Availability">
          <TermsParagraph>
            5.1 All product descriptions, images, pricing, and availability are
            subject to change without notice.
          </TermsParagraph>
          <TermsParagraph>
            5.2 We make reasonable efforts to ensure accuracy but do not
            guarantee that all information is error-free, complete, or current.
          </TermsParagraph>
          <TermsParagraph>
            5.3 Product availability is not guaranteed. We may discontinue or
            modify products at any time.
          </TermsParagraph>
          <TermsParagraph>
            5.4 Slight variations in product appearance may occur due to
            natural materials, aging, packaging differences, or display
            settings.
          </TermsParagraph>
        </TermsSection>

        {/* ── 6. Pricing & Orders ──────────────────────────────────────────── */}
        <TermsSection number="6" title="Pricing, Orders, and Accessories">
          <TermsParagraph>
            6.1 All prices are displayed in applicable currency and may include
            or exclude taxes depending on region.
          </TermsParagraph>
          <TermsParagraph>6.2 We reserve the right to:</TermsParagraph>
          <TermsList
            items={[
              "Refuse or cancel any order;",
              "Limit quantities per customer, household, or order;",
              "Reject orders suspected of fraud, resale, or abuse.",
            ]}
          />
          <TermsParagraph>
            6.3 A contract of sale is formed only upon issuance of a formal
            order confirmation.
          </TermsParagraph>
          <TermsParagraph>
            6.4 We may verify payment details prior to processing any order.
          </TermsParagraph>
        </TermsSection>

        {/* ── 7. Payment Terms ─────────────────────────────────────────────── */}
        <TermsSection number="7" title="Payment Terms">
          <TermsParagraph>
            7.1 You agree to provide valid and authorized payment information.
          </TermsParagraph>
          <TermsParagraph>
            7.2 By submitting payment details, you authorize Velarro to charge
            the total order amount, including taxes, duties, and shipping fees
            where applicable.
          </TermsParagraph>
          <TermsParagraph>
            7.3 We are not responsible for fees imposed by banks, credit card
            issuers, or foreign exchange differences.
          </TermsParagraph>
        </TermsSection>

        {/* ── 8. Shipping & Delivery ───────────────────────────────────────── */}
        <TermsSection number="8" title="Shipping, Delivery, and Risk Transfer">
          <TermsParagraph>
            8.1 Shipping times are estimates only and are not guaranteed.
          </TermsParagraph>
          <TermsParagraph>
            8.2 Risk of loss and title transfer to the customer upon dispatch
            from our facility or fulfillment partner, unless otherwise required
            by applicable law.
          </TermsParagraph>
          <TermsParagraph>
            8.3 We are not responsible for delays caused by:
          </TermsParagraph>
          <TermsList
            items={[
              "Customs clearance;",
              "Carrier disruptions;",
              "Force majeure events;",
              "Local regulatory restrictions.",
            ]}
          />
          <TermsParagraph>
            8.4 Customers are responsible for providing accurate shipping
            information. We are not liable for losses due to incorrect
            information.
          </TermsParagraph>
        </TermsSection>

        {/* ── 9. Returns & Refunds ─────────────────────────────────────────── */}
        <TermsSection number="9" title="Returns & Refunds">
          <TermsParagraph>
            9.1 Returns are accepted only under the following conditions:
          </TermsParagraph>
          <TermsList
            items={[
              "Receipt of defective product; or",
              "Incorrect product shipped.",
            ]}
          />
          <TermsParagraph>
            9.2 Return requests must be submitted within the applicable
            statutory or stated return period, which may vary by jurisdiction.
          </TermsParagraph>
          <TermsParagraph>9.3 Returned items must be:</TermsParagraph>
          <TermsList
            items={[
              "Unused;",
              "In original packaging;",
              "Accompanied by all documentation and accessories.",
            ]}
          />
          <TermsParagraph>
            9.4 We reserve the right to inspect returned goods before issuing
            refunds or replacements.
          </TermsParagraph>
          <TermsParagraph>
            9.5 Refunds, if approved, will be processed using the original
            payment method within a reasonable timeframe.
          </TermsParagraph>
        </TermsSection>

        {/* ── 10. Intellectual Property ────────────────────────────────────── */}
        <TermsSection number="10" title="Intellectual Property Rights">
          <TermsParagraph>
            10.1 All content on the Website, including but not limited to:
          </TermsParagraph>
          <TermsList
            items={[
              "Branding;",
              "Logos;",
              "Product designs;",
              "Text, graphics, images, videos;",
              "Website architecture and design;",
            ]}
          />
          <TermsParagraph>
            is owned or licensed by Velarro and protected under applicable
            intellectual property laws globally.
          </TermsParagraph>
          <TermsParagraph>
            10.2 You may not reproduce, distribute, modify, or create
            derivative works without prior written consent.
          </TermsParagraph>
          <TermsParagraph>
            10.3 Unauthorized use of intellectual property may result in legal
            action.
          </TermsParagraph>
        </TermsSection>

        {/* ── 11. User Conduct ─────────────────────────────────────────────── */}
        <TermsSection number="11" title="User Conduct and Prohibited Uses">
          <TermsParagraph>
            11.1 You agree not to use the Website to:
          </TermsParagraph>
          <TermsList
            items={[
              "Violate any applicable law or regulation;",
              "Infringe intellectual property or privacy rights;",
              "Upload malicious code or attempt system interference;",
              "Engage in fraudulent, deceptive, or harmful activity;",
              "Collect data without authorization;",
              "Impersonate any person or entity;",
              "Attempt unauthorized access to systems or accounts.",
            ]}
          />
          <TermsParagraph>
            11.2 We reserve the right to investigate and take legal action for
            any violations.
          </TermsParagraph>
        </TermsSection>

        {/* ── 12. User Submissions ─────────────────────────────────────────── */}
        <TermsSection number="12" title="User Submissions and Content">
          <TermsParagraph>
            12.1 If you submit content (reviews, feedback, suggestions), you
            grant Velarro a worldwide, perpetual, royalty-free license to use,
            reproduce, modify, and display such content for operational and
            commercial purposes.
          </TermsParagraph>
          <TermsParagraph>
            12.2 You represent that you own or have rights to any submitted
            content.
          </TermsParagraph>
          <TermsParagraph>
            12.3 We are not responsible for user-generated content and disclaim
            liability for its accuracy or legality.
          </TermsParagraph>
        </TermsSection>

        {/* ── 13. Monitoring & Enforcement ─────────────────────────────────── */}
        <TermsSection number="13" title="Monitoring, Enforcement, and Termination">
          <TermsParagraph>13.1 We reserve the right to:</TermsParagraph>
          <TermsList
            items={[
              "Monitor Website activity;",
              "Remove content at our discretion;",
              "Investigate violations;",
              "Suspend or terminate accounts;",
              "Report unlawful conduct to authorities.",
            ]}
          />
          <TermsParagraph>
            13.2 We are not obligated to monitor all activity and assume no
            liability for user conduct.
          </TermsParagraph>
        </TermsSection>

        {/* ── 14. Third Party Links ────────────────────────────────────────── */}
        <TermsSection number="14" title="Third Party Links">
          <TermsParagraph>
            14.1 The Website may contain links to third-party websites.
          </TermsParagraph>
          <TermsParagraph>
            14.2 We do not control, endorse, or assume responsibility for
            third-party content, policies, or practices.
          </TermsParagraph>
          <TermsParagraph>
            14.3 Accessing third-party sites is at your own risk.
          </TermsParagraph>
        </TermsSection>

        {/* ── 15. Disclaimer of Warranties ─────────────────────────────────── */}
        <TermsSection number="15" title="Disclaimer of Warranties">
          <TermsParagraph>
            15.1 The Website and all products/services are provided on an &quot;as
            is&quot; and &quot;as available&quot; basis.
          </TermsParagraph>
          <TermsParagraph>
            15.2 We make no warranties, express or implied, including:
          </TermsParagraph>
          <TermsList
            items={[
              "Merchantability;",
              "Fitness for a particular purpose;",
              "Non-infringement;",
              "Continuous or error-free availability.",
            ]}
          />
          <TermsParagraph>
            15.3 We do not guarantee that the Website will be secure,
            uninterrupted, or free of errors or viruses.
          </TermsParagraph>
        </TermsSection>

        {/* ── 16. Limitation of Liability ──────────────────────────────────── */}
        <TermsSection number="16" title="Limitation of Liability">
          <TermsParagraph>
            16.1 To the maximum extent permitted by law, Velarro shall not be
            liable for:
          </TermsParagraph>
          <TermsList
            items={[
              "Indirect, incidental, special, or consequential damages;",
              "Loss of profits, revenue, data, or business opportunities;",
              "Damages arising from Website use or product use.",
            ]}
          />
          <TermsParagraph>
            16.2 Where liability cannot be excluded under applicable law,
            liability shall be limited to the amount paid for the specific
            product giving rise to the claim.
          </TermsParagraph>
          <TermsParagraph>
            16.3 Nothing in these Terms excludes liability that cannot be
            excluded under applicable law (including certain consumer rights in
            EU, UK, and other jurisdictions).
          </TermsParagraph>
        </TermsSection>

        {/* ── 17. Indemnification ──────────────────────────────────────────── */}
        <TermsSection number="17" title="Indemnification">
          <TermsParagraph>
            You agree to indemnify and hold harmless Velarro, its affiliates,
            officers, employees, and service providers from any claims,
            damages, liabilities, and expenses arising from:
          </TermsParagraph>
          <TermsList
            items={[
              "Your breach of these Terms;",
              "Your misuse of the Website;",
              "Your violation of any law or third-party rights.",
            ]}
          />
        </TermsSection>

        {/* ── 18. Force Majeure ────────────────────────────────────────────── */}
        <TermsSection number="18" title="Force Majeure">
          <TermsParagraph>
            Velarro shall not be liable for any failure or delay in performance
            resulting from events beyond its reasonable control, including but
            not limited to natural disasters, war, civil unrest, governmental
            actions, labor disputes, supply chain disruptions, pandemics, or
            infrastructure failures.
          </TermsParagraph>
        </TermsSection>

        {/* ── 19. Governing Law ────────────────────────────────────────────── */}
        <TermsSection number="19" title="Governing Law and Jurisdiction">
          <TermsParagraph>
            19.1 These Terms shall be governed by and construed in accordance
            with the laws of the jurisdiction in which Velarro is established,
            without regard to conflict of law principles.
          </TermsParagraph>
          <TermsParagraph>
            19.2 Where required by local law (including EU, UK, California,
            India, UAE, and China consumer protection regimes), mandatory
            consumer rights shall apply.
          </TermsParagraph>
          <TermsParagraph>
            19.3 Any disputes shall be subject to the exclusive jurisdiction of
            competent courts, unless otherwise required by mandatory local
            consumer law.
          </TermsParagraph>
        </TermsSection>

        {/* ── 20. Severability ─────────────────────────────────────────────── */}
        <TermsSection number="20" title="Severability">
          <TermsParagraph>
            If any provision of these Terms is found invalid or unenforceable,
            the remaining provisions shall remain in full force and effect.
          </TermsParagraph>
        </TermsSection>

        {/* ── 21. Entire Agreement ─────────────────────────────────────────── */}
        <TermsSection number="21" title="Entire Agreement">
          <TermsParagraph>
            These Terms constitute the entire agreement between you and Velarro
            regarding Website use and supersede any prior agreements or
            understandings.
          </TermsParagraph>
        </TermsSection>
      </div>
    </div>
  );
}