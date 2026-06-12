import Container from "@/components/Layouts/Container";
// import ContactFAQ from "./ContactFAQ";
import ContactForm from "./ContactForm";
import ContactInfo from "./ContactInfo";
import ContactLocation from "./ContactLocation";
// import ContactIntro from "./ContactIntro";

export default function ContactSection() {
  return (
    <>
      
      <div className="w-full bg-primary-50 flex justify-center">
        <Container className="w-full pb-16 md:pb-20 flex flex-col lg:flex-row gap-12 lg:gap-20 justify-between items-start">
            {/* <ContactIntro /> */}
          {/* Left side: Form */}
          <div className="w-full lg:w-[60%] min-w-0">
            <ContactForm />
          </div>

          {/* Right side: Info */}
          <div className="w-full lg:flex-1 min-w-0 flex flex-col justify-between lg:mt-2">
            <ContactInfo />
          </div>
        </Container>
      </div>
      <div className="">
        {/* <ContactFAQ /> */}
        <ContactLocation />
      </div>
    </>
  );
}
