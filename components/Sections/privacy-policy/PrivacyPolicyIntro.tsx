import Container from "@/components/Layouts/Container";

export default function PrivacyPolicyIntro() {
  return (
    <Container className="w-full pt-16 md:pt-20">
      <h2 className="text-2xl md:text-5xl font-normal mb-4 md:mb-6 text-neutral-13 leading-8.75">
        Introduction
      </h2>
      <p className="text-md md:text-lg font-light text-neutral-11/80 leading-7 tracking-tight">
        Velarro respects your privacy. This Privacy Policy explains how we
        collect, use, disclose, retain, transfer, and protect personal
        information when you visit our website, create an account, purchase
        products, participate in our loyalty or marketing programs, contact
        customer support, attend Velarro events, or otherwise interact with
        Velarro. <br/><br/>Velarro offers age-restricted tobacco products. Our website,
        products, marketing, and services are intended only for adults who meet
        the legal minimum age in their jurisdiction. By using our website or
        purchasing from Velarro, you confirm that you are legally permitted to
        access and purchase tobacco products in your location.
      </p>
    </Container>
  );
}
