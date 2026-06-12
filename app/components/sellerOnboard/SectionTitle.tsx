type SectionTitleProps = {
  title: string;
};

export default function SectionTitle({ title }: SectionTitleProps) {
  return (
    <h3 className="font-medium text-lg text-gray-800 pt-2">
      {title}
    </h3>
  );
}