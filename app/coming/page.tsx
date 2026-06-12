import ComingSoonHero from "../../components/ui/Comingsoon/page";


interface ComingPageProps {
  searchParams: Promise<{
    title?: string;
  }>;
}

export default async function ComingPage({
  searchParams,
}: ComingPageProps) {
  const params = await searchParams;

  return (
    <div className="bg-primary-50">
      <ComingSoonHero
        pageTitle={params.title || "Coming Soon"}
      />
    </div>
  );
}