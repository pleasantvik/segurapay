type Props = {
  heading: string;
  subHeading: string;
  text: string;
};
export const CardTextDiv = ({ heading, subHeading, text }: Props) => (
  <div className="flex flex-col items-start justify-center w-[100%]">
    <h3 className="text-[#243AC0] uppercase pt-4">{heading}</h3>
    <h2 className="lg:text-5xl sm:text-2xl font-bold   mb-4">{subHeading}</h2>
    <p className="">{text}</p>
  </div>
);
