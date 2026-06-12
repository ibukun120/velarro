"use client";

import Container from "@/components/Layouts/Container";
import Link from "next/link";

import AccessibilityHero from "./AccessibilityHero";

// ─── Data ────────────────────────────────────────────────────────────────────

const sections = [
  {
    id: "general",
    title: "General",
    content: `Access to websites and digital services can present challenges for individuals with certain disabilities. Each individual experiences accessibility differently, and what works effectively for one user may not be suitable for another.

Velarro Estate is committed to improving accessibility and usability for all users, including individuals with disabilities. We aim to provide a digital experience that is as accessible as reasonably possible, given our size, resources, and understanding of user needs. Where appropriate, we engage qualified professionals to support and advise on accessibility improvements.`,
  },

  {
    id: "accessibility-on-website",
    title: "Accessibility On This Website",
    content: `Velarro Estate provides various features, methods, and approaches intended to improve access to its website, products, and services.

Users may also rely on accessibility tools provided by third-party platforms, including browser-based accessibility features and assistive technologies.

If you experience difficulty accessing any part of the website even after using built-in accessibility features or third-party tools, you are encouraged to contact us for assistance using the contact information provided below.`,
  },

  {
    id: "specific-features",
    title: "Some Specific Accessibility Features Within This Website",
    content: `This website may include a third-party accessibility widget known as UserWay Website Accessibility (UserWay). This widget is powered by an external accessibility service provider and is intended to assist users in improving site usability for certain accessibility needs.

The UserWay widget is typically located in the bottom-left corner of most pages. It may provide tools designed to assist with visual adjustments, navigation enhancements, and other accessibility-related functions. UserWay states that its features aim to align, in part, with the Web Content Accessibility Guidelines (WCAG 2.1).`,
  },

  {
    id: "enabling-menu",
    title: "Enabling The Accessibility Menu",
    body: "The accessibility menu can be activated by selecting the accessibility icon associated with the UserWay widget. Once selected, the menu may take a brief moment to fully load. Users can then adjust available accessibility settings according to their needs.",
  },

  {
    id: "disclaimer",
    title: "Disclaimer",
    content: `Velarro Estate may periodically update or modify its website, content, and features, including accessibility-related elements. While efforts are made to improve accessibility and usability over time, complete accessibility across all content and features cannot be guaranteed at all times.

Accessibility improvements depend on evolving knowledge, available resources, and technological developments. Users are encouraged to provide feedback regarding any accessibility barriers encountered.`,
  },

  {
    id: "third-party",
    title: "Third Party Applications",
    content: `The website may incorporate or rely on third-party services and plugins, including but not limited to mapping tools, social media integrations, or external content providers.

These third-party components are not controlled by Velarro Estate and may not function uniformly across all assistive technologies or devices. Velarro Estate is not responsible for the accessibility of external websites, platforms, or services linked from or embedded within this website.

Some third-party platforms may include their own accessibility features, which users may review independently.`,
  },

  {
    id: "video",
    title: "Video",
    content: `Velarro Estate may include video content for atmospheric, branding, or product presentation purposes. These videos are typically intended as background or mood-setting media and may include music without spoken dialogue.

Where spoken content is used, captions or equivalent text alternatives will be provided where reasonably possible. Videos will include either closed captions or descriptive text alternatives to support accessibility.`,
  },

  {
    id: "here-for-you",
    title: "We Are Here For You",
    content: `If you experience difficulty accessing any content on velarroestate.com due to a disability, or require assistance navigating the site, you may contact us for support : support@velarroestate.com
.
Support is provided specifically for accessibility-related issues and is not intended for sales or general product inquiries. You may also contact us via email for accessibility-related concerns. Please describe the issue in as much detail as possible so we can better assist you: customercare.us@davidoffgeneva.com

All accessibility-related communications are treated with confidentiality. Users are not required to disclose personal information unless voluntarily included in their communication.`,
  },

  {
    id: "screen-readers",
    title: "Third Party Screen Readers And Resources",
    body: "Velarro Estate recognizes the importance of assistive technologies.",
  },
];

const screenReaders = [
  {
    name: "JAWS Screen Reader",
    url: "https://www.freedomscientific.com/products/software/jaws/",
  },

  {
    name: "American Foundation for the Blind – Screen Reader Information",
    url: " https://www.afb.org/blindness-and-low-vision/using-technology/assistive-technology-products/screen-readers/",
  }, 

  {
    name: "Google Accessibility",
    url: "https://www.google.com/accessibility/products-features/",
  },
  
  {
    name: "Mozilla Firefox Accessibility Tools",
    url: "https://addons.mozilla.org/en-US/firefox/addon/tota11y-accessibility-toolkit",
  },

  {
    name: "Microsoft Edge Accessibility Features",
    url: "https://support.microsoft.com/en-us/microsoft-edge/accessibility-features-in-microsoft-edge-4c696192-338e-9465-b2cd-bd9b698ad19a",
  },

  {
    name: "Adobe Accessibility",
    url: "https://www.adobe.com/trust/accessibility.html",
  },
  
  {
    name: "Eventbrite Accessibility",
    url: "https://www.eventbrite.com/l/accessibility/",
  },

  {
    name: "Vimeo Accessibility",
    url: "https://vimeo.com/blog/post/accessibility-updates-to-the-vimeo-player",
  },

  {
    name: "Facebook Accessibility",
    url: "https://www.facebook.com/help/accessibility",
  },

  {
    name: "Instagram Accessibility",
    url: "https://help.instagram.com/1178723545597542",
  },

  {
    name: "X (formerly Twitter) Accessibility",
    url: "https://help.x.com/en/using-x/picture-descriptions",
  },

   {
    name: "LinkedIn Accessibility",
    url: " https://www.linkedin.com/help",
  },

   {
    name: "Cloudflare Accessibility",
    url: "https://developers.cloudflare.com/cloudflare-one/policies/browser-isolation/accessibility/",
  },
];

// ─── Sub Component ───────────────────────────────────────────────────────────

function SectionBlock({
  title,
  content,
  body,
}: {
  title: string;
  content?: string;
  body?: string;
}) {
  const text = body ?? content ?? "";

  return (
    <section className="flex flex-col items-start gap-8">
      <h2 className="text-5xl text-neutral-12 font-normal text-[clamp(22px,2.5vw,36px)] leading-[1.2] tracking-[-0.01em]">
        {title}
      </h2>

      <div className="text-xl/80 text-neutral-11/80 font-light text-[clamp(14px,1.2vw,20px)] leading-[1.6] whitespace-pre-line">
        {text}
      </div>
    </section>
  );
}

// ─── Main Page ───────────────────────────────────────────────────────────────

export default function AccessibilityPage() {
  return (
    <div className="w-full min-h-screen bg-netral-1 overflow-hidden">
      <main className="w-full flex flex-col gap-5">

        {/* Hero */}
        <AccessibilityHero />

        {/* Content */}
        <Container className="w-full">
          {/* Estate Block */}
          <div className="relative flex-shrink-0 w-full lg:w-auto">
            <div className="mt-10 items-center gap-8 text-center">
              <div className="w-full pb-2">
                <h2 className="text-6xl font-light text-neutral-13/90 leading-[1.2] tracking-[-0.01em]">
                  Velarro Estate
                </h2>

                <hr className="border-1 border-neutral-6 w-3/5 mx-auto mb-0" />
              </div>

              <p className="text-3xl font-light text-neutral-12/90 mt-4 leading-[1]">
                Website: velarroestate.com
              </p>
            </div>
          </div>

          {/* Sections */}
          <div className="flex-1 px-0 md:px-6 max-w-full mt-12">
            <div className="flex flex-col gap-16 max-w-[1243px]">

              {sections.map((s) => (
                <SectionBlock
                  key={s.id}
                  title={s.title}
                  content={s.content}
                  body={s.body}
                />
              ))}

              {/* Screen Readers */}
              <div className="flex flex-col gap-7">
                {screenReaders.map((reader) => (
                  <div
                    key={reader.name}
                    className="flex flex-col gap-3"
                  >
                    <h2 className="text-neutral-12 font-normal text-[clamp(22px,2vw,28px)] leading-[1.2] tracking-[-0.01em]">
                      {reader.name}
                    </h2>

                    <div className="text-neutral-10 font-light text-[clamp(14px,1.2vw,20px)]">
                      <Link
                        href={reader.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="hover:underline break-all"
                      >
                        {reader.url}
                      </Link>
                    </div>
                  </div>
                ))}
              </div>

              {/* Disclaimer */}
              <div className="text-neutral-12/90 font-light text-[clamp(14px,1.2vw,20px)] leading-[1.6] mb-[64px]">
                Velarro Estate does not control or verify the accessibility claims of third-party websites and resources listed above and does not assume responsibility for their content or performan
              </div>
            </div>
          </div>
        </Container>
      </main>
    </div>
  );
}