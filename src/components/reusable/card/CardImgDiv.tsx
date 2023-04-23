import Image from "next/image";

type ImgProps = {
  imgSrc: string;
};

export const CardImgDiv = ({ imgSrc = "" }: ImgProps) => (
  <div className="md:w-[100%] m-auto">
    <Image src={imgSrc || ""} alt="desktop" height={400} width={600} />
  </div>
);
