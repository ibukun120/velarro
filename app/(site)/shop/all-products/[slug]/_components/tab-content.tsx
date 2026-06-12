import Image from "next/image";
import { ProductTab } from "@/types/product";

type Props = {
  tab: ProductTab;
};

export default function TabContent({ tab }: Props) {
  const { content } = tab;
  if (!content) return null;

  const imageOnLeft = content.imagePosition === "left";

  return (
    <section className="grid grid-cols-1 md:grid-cols-2 items-center">
      {imageOnLeft && content.image && (
        <Image
          src={content.image}
          alt={tab.label}
          width={800}
          height={400}
          className="rounded-none object-cover"
        />
      )}

      <div>
        {content.text && (
          <p className="text-[#333333] mb-6">{content.text}</p>
        )}

        {content.items?.map((item) => (
          <div key={item.title} className={`mb-6 ${imageOnLeft ? 'ml-10' : 'ml-0'}`}>
            <h4 className="font-normal text-3xl text-[#333333]">{item.title}</h4>
            <p className="text-[#333333] max-w-md text-xl">{item.description}</p>
            {(item.format || item.size || item.intensity) && (
              <p className="text-sm text-[#333333]">
                {item.format} · {item.size} · Intensity: {item.intensity}
              </p>
            )}
          </div>
        ))}
      </div>

      {!imageOnLeft && content.image && (
        <Image
          src={content.image}
          alt={tab.label}
          width={800}
          height={400}
          className="object-cover"
        />
      )}
    </section>
  );
}
