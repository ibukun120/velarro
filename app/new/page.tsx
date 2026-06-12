import OopsPage from "@/components/Sections/new/Oops";
import OopsPage1 from "@/components/Sections/new/OopsPageProps";
import OopsPage2 from "@/components/Sections/new/Unveiling";

function errorscreens() {
  return (
    <div className="relative">
      <OopsPage
      code="500"
      title="Error"
      description="It appears you have strayed from the path. Let's get you back on track."
      />
      <OopsPage
      code="400"
      title="Error"
      description="It appears you have strayed from the path. Let's get you back on track."
      />
      <OopsPage1
      title="Error"
      description="No internet found, check your connection and try again"
      />
      <OopsPage2
      code="Unveiling"
      title="Soon"
      description="We're creating an experience worthy of the Velarro name. Thank you for your patience while we prepare its arrival."
      />
    </div>
  );
}

export default errorscreens;