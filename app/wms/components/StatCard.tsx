// import Image from "next/image";

import Image from "next/image";

export default function StatCard({
  title,
  value,
  sub,
  path,
  cl,
}: {
  title: string;
  value: string;
  sub: string;
  path?: string;
  cl?: string
}) {
  return (
    <div className="bg-white border border-[#C59949] rounded-xl p-4">
      <div className="flex items-center gap-2">
        <h3 className="text-gray-600">{title}</h3>
        <div>
          <Image
            // src={path}
            src={path ?? "/icons/default-icon.svg"} 
            width={20}
            height={20}
            alt="stat icon"
            className="w-5 h-5 text-[#C59949]"
            style={{ color: "#C59949" }}
          />
        </div>
      </div>

      <p className="text-4xl font-semibold mt-3">{value}</p>
      <p className={`text-[12px] text-[#8C8C8C] mt-4 ${cl}`}>{sub}</p>
    </div>
  );
}
