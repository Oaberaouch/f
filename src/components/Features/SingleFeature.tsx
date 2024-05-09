import { Feature } from "@/types/feature";
import Image from "next/image";

const SingleFeature = ({ feature }: { feature: Feature }) => {
  const { imageUrl, altText , title, paragraph } = feature;
  return (
    <div className="w-full">
      <div className="wow fadeInUp" data-wow-delay=".15s">
        <div className="mb-10 relative h-[450px] w-[90%] items-center  justify-center rounded-lg bg-primary bg-opacity-10 text-primary">
         {/* {image} */}
         <Image
            src={imageUrl}
            alt={altText}
            layout="fill"
            objectFit="cover"
            className="rounded-lg"
            sizes="(max-width: 768px) 90vw, (max-width: 1200px) 80vw, 700px"
          ></Image>
        </div>
        <h3 className="mb-5 text-xl font-bold text-black dark:text-white sm:text-2xl lg:text-xl xl:text-2xl">
          {title}
        </h3>
        <p className="pr-[10px] text-base font-medium leading-relaxed text-body-color">
          {paragraph}
        </p>
      </div>
    </div>
  );
};

export default SingleFeature;
