import Container from "@/components/Layouts/Container";
import Image from "next/image";

const heritageData = [
  {
    title: "Origins of Velarro",
    image:
      "https://lpnrhpvmrnoqkzoxukov.supabase.co/storage/v1/object/public/product-images/1779964421697-craftsmanship-and-heritage-origins-of-velarro.webp",
    quote:
      "A century of dedication to the art of the cigar. Every leaf a quiet testament to the extraordinary.",
    paragraphs: [
      'Velarro did not arrive with fanfare. It arrived with a standard set quietly in a curing room that smelled of cedar and slow time, in a year that gave no indication it was the beginning of anything at all.',
      'From 1919, the approach to tobacco has remained unchanged in its fundamentals. Only the top five percent of harvested leaf has ever been considered selected by hand, by those with the trained eye to distinguish what is merely good from what is genuinely exceptional. No machinery has ever touched the leaf. No production schedule has ever shortened the aging process. The minimum rest period in cedar-lined rooms has always been six months not as a marketing claim, but as a non-negotiable condition of quality.',
      'The result is a cigar that carries within it the full complexity of its origin the soil, the altitude, the particular character of the growing season undiluted by shortcuts and uncompromised by the pressure to produce more than the standard allows.',
    ],
  },
  {
    title: "The Expansion of Craft 1919",
    image:
      "https://lpnrhpvmrnoqkzoxukov.supabase.co/storage/v1/object/public/product-images/1779964444414-craftsmanship-and-heritage-the-expansion-of-craft-1919-.webp",
    quote:
      "Each piece carried the mark of the hand that made it not as evidence of imperfection, but as proof of presence.",
    paragraphs: [
      'The move into handcrafted lifestyle accessories in 1919 was not a diversification. It was a natural extension of the same philosophy that governed the cigar.',
      'The objects produced in that first period wooden ashtrays, smoking stands, handcrafted accessories were conceived to inhabit the same world as the cigar. To be worthy of it. Each piece carved and finished by hand using woodworking techniques developed and refined over generations. Natural wood grain was never concealed beneath lacquer or artificial finish. The hand polish was never replaced by a mechanical equivalent. The time each piece required was treated not as a cost to be reduced but as a condition of the outcome.',
    ],
  },
  {
    title: "The Artisan's Touch",
    image:
      "https://lpnrhpvmrnoqkzoxukov.supabase.co/storage/v1/object/public/product-images/1779965298160-craftsmanship-and-heritage-the-artisantouch-1-.webp",
    quote:
      "A Velarro product is not an object. It is the accumulated result of knowledge, patience, and the kind of pride that only comes from work done properly present in every detail, legible to anyone who takes the time to look.",
    paragraphs: [
      'Every handcrafted piece is designed slowly and intentionally. Small imperfections are celebrated because they represent authenticity, individuality, and the presence of the maker. Precision and uniformity are not the same thing and the distinction matters considerably.',
      'Mechanical precision produces consistency. Human precision produces something more difficult to define and considerably more difficult to replicate a quality that lives in the judgment calls made at every stage of the process. The assessment of a wrapper leaf held to the light. The pressure applied during a roll. The decision to pass or reject a finished piece based on criteria that no machine has yet been built to evaluate.',
      'The artisan\'s role at Velarro has never been ceremonial. Every cigar that leaves the rolling room has passed through hands with a minimum of twelve years of practiced experience. Every wooden accessory has been finished by someone whose training was measured not in weeks but in years. The result is a product that carries within it the accumulated judgment of the person who made it present in every detail, apparent to anyone who engages with it seriously.',
    ],
  },
  {
    title: "Coffee Farming Heritage",
    image:
      "https://lpnrhpvmrnoqkzoxukov.supabase.co/storage/v1/object/public/product-images/1780575966309-craftsmanship-coffee.webp",
    quote:
      "Work with the land rather than against it. Harvest at the right moment rather than the convenient one. Never mistake volume for value.",
    paragraphs: [
      'Coffee at Velarro was never a category extension. It was an inevitability.',
      'The same philosophy that governs the selection of a tobacco leaf patience, natural cultivation, and an absolute refusal to compromise the integrity of the raw material applies without exception to the way Velarro approaches coffee. The standard does not change depending on the product. It is the standard. And it travels with the house into everything the house produces.',
      'Beans are cultivated in carefully selected growing regions where altitude, soil composition, and seasonal climate produce genuine complexity rather than manufactured consistency. Harvested at the precise peak of ripeness and processed through methods that preserve what the plant spent months developing. No industrial shortcuts. No artificial enhancement. Nothing added that was not already present in the bean itself.',
    ],
  },
  {
    title: "Tea & Tobacco Farming Traditions",
    image:
      "https://lpnrhpvmrnoqkzoxukov.supabase.co/storage/v1/object/public/product-images/1779965226766-craftsmanship-and-heritage-tea-&-tobacco-farming-traditions-1.webp",
    quote:
      "The quality of the finished product is determined long before it reaches any workshop or rolling room. At Velarro, cultivation is not a supply chain function. It is the first act of craftsmanship.",
    paragraphs: [
      "Tea and tobacco share more than a harvest. They share a philosophy. Both require the kind of patience that industrial farming has largely abandoned a willingness to let the plant develop at its own pace, in its own climate, without interference from a production schedule that prioritizes yield over quality. At Velarro, neither has ever been grown any other way.",
      "Tobacco leaves are cultivated naturally, allowed to develop fully before they are harvested by hand and entered into a curing process that cannot be rushed without consequence. The slow cure is not tradition for tradition's sake. It is the process by which the leaf develops the richness, smoothness, and depth of character that defines a Velarro cigar. Accelerate it and you lose precisely what you were trying to preserve.",
      "Tea follows the same principle. Grown in elevated, climate-sensitive environments where temperature, rainfall, and seasonal variation shape the leaf in ways no controlled process can replicate. The character of a great tea, like the character of a great tobacco, is inseparable from the conditions in which it was grown. It cannot be engineered after the fact. It cannot be corrected at a later stage. It is either there present in the leaf from the moment it was cultivated or it is not.",
    ],
  },
  {
    title: "Organic & Natural Philosophy",
    image:
      "https://lpnrhpvmrnoqkzoxukov.supabase.co/storage/v1/object/public/product-images/1779965298160-craftsmanship-and-heritage-the-artisantouch-1-.webp",
    quote:
      "Every material sourced is chosen for what it is not what it can be made to appear. The soil, the climate, the season are not conditions to be overcome. They are the craftsmanship itself.",
    paragraphs: [
      "The commitment to natural materials and organic cultivation predates the commercial language now used to describe it.",
      "The decision to work exclusively with natural materials and organically farmed ingredients was not made in response to consumer demand. It was made because no other method was capable of producing the quality the standard required. Synthetic materials do not age with the same grace. Industrially farmed tobacco does not develop the same complexity. Processes that prioritize volume over time do not produce the same depth of flavor or character.",
      "Natural cedar, used in aging rooms, actively regulates humidity and imparts a quality to the aging tobacco that no synthetic lining replicates. Wood grain, in the hands of a skilled artisan, reveals over time a richness that only improves with age and handling. A properly rested tobacco wrapper develops a complexity that cannot be accelerated without loss.",
    ],
  },
  {
    title: "The Meaning of Craftsmanship",
    image:
      "https://lpnrhpvmrnoqkzoxukov.supabase.co/storage/v1/object/public/product-images/1779965233083-craftsmanship-and-heritage-the-meaning-of-craftsmanship-1.webp",
    quote:
      "The word is used imprecisely almost everywhere. Here it carries a specific meaning. Craftsmanship at Velarro describes a complete approach to making one that governs every stage of production, from agricultural sourcing through to final quality assessment. It is not a marketing category applied after the fact. It is the condition under which everything is made.",
    paragraphs: [
      "The word is used imprecisely almost everywhere. Here it carries a specific meaning.",
      "Craftsmanship at Velarro describes a complete approach to making one that governs every stage of production, from agricultural sourcing through to final quality assessment. It is not a marketing category applied after the fact. It is the condition under which everything is made. It requires that every decision at every stage be made in favor of quality over convenience, longevity over volume, and the integrity of the finished product over the efficiency of the process that creates it.",
      "This means working with materials that take longer to source. With artisans whose training takes years to complete. With aging processes that cannot be shortened without consequence. With a quality standard that makes no accommodation for production pressure or commercial",
    ],
  },
  {
    title: "Heritage Meets Modern Luxury",
    image:
      "https://lpnrhpvmrnoqkzoxukov.supabase.co/storage/v1/object/public/product-images/1779965239119-craftsmanship-and-heritageheritage-meets-modern-luxury-1.webp",
    quote:
      "Every product carries the weight of what came before it. Every detail reflects a culture of care built over a century. Every experience honors a standard that has not once been compromised in all the years since it was set.",
    paragraphs: [
      "The range has expanded. The global reach has grown. The products have evolved to reflect both the development of the craft and the sophistication of the market it serves.",
      "What has not changed and what will not change is the standard that governs how every product is made, every material sourced, and every decision taken at every stage of the process. In a market that has increasingly rewarded volume, speed, and the appearance of quality over its substance, the original terms have held. One leaf selected with full attention. One hand applied with full experience. One decision made, at every stage, in favor of the product rather than the production schedule.",
      "The result is not a brand that competes on the terms the market has established. It is a house that has established its own and held them, quietly and without exception, for more than a hundred years. This is Velarro. This is what it has always been. And this is what it will remain.",
    ],
  },
];

export default function CraftsmanshipHeritage() {
  return (
    <section className="bg-neutral-1 py-10 md:py-16">
      <Container className="space-y-20">
        {heritageData.map((item) => (
          <div
            key={item.title}
            className="rounded-[12px] border-2 border-primary-300 bg-neutral-2 p-6 md:p-8"
          >
            <div className="flex flex-col lg:flex-row gap-8 lg:gap-10">
              {/* Content */}
              <div className="flex-1">
                <div className="pl-5">
                  <h2 className="mb-5 text-[32px] md:text-5xl font-light text-neutral-13 leading-tight">
                    {item.title}
                  </h2>

                  <div className="space-y-5">
                    {item.paragraphs.map((paragraph, index) => (
                      <p
                        key={index}
                        className="text-neutral-11 font-light text-base md:text-xl leading-relaxed"
                      >
                        {paragraph}
                      </p>
                    ))}
                  </div>

                  <blockquote className="mt-8 border-l border-neutral-6 pl-4 italic text-neutral-10 text-base md:text-lg">
                    {`"${item.quote}"`}
                  </blockquote>
                </div>
              </div>

              {/* Image */}
<div className="w-full lg:w-[380px] xl:w-[420px] shrink-0">
  <div className="relative min-h-[300px] lg:h-full w-full overflow-hidden rounded-[10px]">
    <Image
      src={item.image}
      alt={item.title}
      fill
      unoptimized
      className="object-cover hover:scale-105 transition duration-500 cursor-pointer"
    />

    {/* Gradient Overlay */}
    <div className="absolute inset-0 bg-gradient-to-t from-[#151414]/40 via-[#151414]/50 to-transparent pointer-events-none z-10" />
  </div>
</div>
            </div>
          </div>
        ))}
      </Container>
    </section>
  );
}