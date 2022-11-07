import { FC } from "react";

interface Props {
  className?: string;
  title: string;
  children: React.ReactNode;
}

const Section: FC<Props> = ({ className, title, children }) => {
  return (
    <section className={`${className} pb-6`}>
      <h2 className="text-lg font-[GmarketSansBold]">{title}</h2>
      {children}
    </section>
  );
};

export { Section };
