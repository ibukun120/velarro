import Container from "@/components/Layouts/Container";

const cookiePolicyData = {
  title: "Cookie Policy",
  introduction: [
    "This Cookie Policy explains how Velarro Estate uses cookies and similar technologies on www.velarroestate.com. It describes what cookies are, how we use them, and your choices regarding their use.",
    "By continuing to use our Website, you agree to the use of cookies as described in this Cookie Policy, unless you have adjusted your browser settings to disable them.",
  ],

  sections: [
    {
      title: "How Cookies Work",
      paragraphs: [
        "Cookies are small text files placed on your device (computer, tablet, or mobile phone) by websites you visit. They are widely used to make websites function efficiently and to provide information to website operators.",
        "Cookies allow the Website to recognize your device and remember certain information about your visit, such as preferences, form inputs, and browsing behavior. This helps improve user experience by reducing the need to re-enter information and enabling more personalized functionality.",
        "Cookies do not typically contain information that directly identifies you as a person. However, they may be linked to other data we hold where you have provided such information.",
      ],
    },
    {
      title: "Cookie Settings",
      paragraphs: [
        "You have the ability to control and manage cookies through your browser settings. Most web browsers automatically accept cookies, but you can modify your settings to decline cookies or to notify you when a cookie is being placed on your device.",
        "You may also delete cookies already stored on your device at any time. These settings are typically found in the 'options' or 'preferences' menu of your browser, and the browser's help function can provide further guidance.",
        "Please note that disabling or refusing cookies may impact the functionality of the Website, and certain features may not operate as intended.",
        "We recommend keeping cookies enabled to ensure optimal performance and usability of the Website.",
      ],
    },
    {
      title: "Web Analysis Services",
      paragraphs: [
        "This Website uses web analytics services, including Google Analytics, provided by Google LLC ('Google'), to understand how users interact with the Website and to improve its performance and content.",
        "Google Analytics uses cookies to collect information such as pages visited, time spent on the Website, and general interaction patterns. This information may include your IP address and is transmitted to and stored by Google on servers located in the United States.",
        "Google uses this information on our behalf to evaluate Website usage, compile reports on Website activity, and provide related services. Google may also transfer this information to third parties where required by law or where such third parties process the data on Google's behalf.",
        "Google does not associate your IP address with other data held by Google.",
        "You may opt out of Google Analytics by adjusting your browser settings to refuse cookies or by using available browser add-ons designed for this purpose. However, doing so may limit certain Website functionalities.",
        "By using this Website, you consent to the processing of data about you by Google in the manner and for the purposes described above.",
      ],
    },
  ],
};

export default function CookiePolicyContent() {
  return (
   <Container className="my-[30px]">
        <h1 className="mb-4 text-5xl font-medium text-neutral-13">
          {cookiePolicyData.title}
        </h1>

        <div className="mb-10 space-y-2">
          {cookiePolicyData.introduction.map((item, index) => (
            <p
              key={index}
              className="text-xl text-light leading-relaxed text-neutral-11/80"
            >
              {item}
            </p>
          ))}
        </div>

        <div className="space-y-10">
          {cookiePolicyData.sections.map((section, index) => (
            <div key={index}>
              <h2 className="mb-4 text-5xl font-medium text-neutral-13">
                {section.title}
              </h2>

              <div className="space-y-3">
                {section.paragraphs.map((paragraph, idx) => (
                  <p
                    key={idx}
                    className="text-xl text-light leading-relaxed text-neutral-11/80"
                  >
                    {paragraph}
                  </p>
                ))}
              </div>
            </div>
          ))}
        </div>
    </Container>
  );
}