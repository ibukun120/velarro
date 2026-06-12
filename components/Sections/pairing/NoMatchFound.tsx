import PairingButton from "./PairingButton";
import { useRouter } from "next/navigation";

export default function NoMatchFound() {
  const router = useRouter();

  return (
    <div className="flex flex-col items-center gap-8 my-12">
      <div className="w-full border border-neutral-6 bg-white py-16 px-8 flex flex-col items-center gap-3">
        <h2 className="text-xl md:text-4xl text-secondary-900">
          No Exact Match Found
        </h2>
        <p className="text-sm text-secondary-300">Try adjusting body strength or drink type</p>
      </div>

      <PairingButton onClick={() => router.push("/pairing")}>
        ← Start Over
      </PairingButton>
    </div>
  );
}
