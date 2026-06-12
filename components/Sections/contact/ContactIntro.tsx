import Container from "@/components/Layouts/Container";


export default function ContactIntro() {
  return (
    <Container className="w-full pt-16 md:pt-20 text-center">
      <h2 className="text-4xl md:text-6xl font-light mb-4 md:mb-6 text-secondary-900 tracking-[-0.02em] leading-tight">
        We&apos;re always glad to connect with those who appreciate a fine cigar.
      </h2>
      <p className="text-md md:text-[20px] text-secondary-300">
        Fill out the form below and we&apos;ll get back to you in 2-3 buisness days.
      </p>
    </Container>
  );
}
