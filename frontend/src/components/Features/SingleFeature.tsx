import { Feature } from "@/types/feature";

const SingleFeature = ({ feature }: { feature: Feature }) => {

  const { icon, title, paragraph } = feature;
  return (
    <div className="w-full flex flex-wrap justify-center ">
      <div className="wow fadeInUp" data-wow-delay=".15s">
        <div className="mb-10 flex items-center justify-center h-[70px] w-[70px] rounded-md bg-primary bg-opacity-10 text-primary mx-auto">
        {icon}
        </div>
        <h3 className="mb-5 text-xl font-bold text-black dark:text-white sm:text-2xl lg:text-xl xl:text-2xl text-center">
        {title}
        </h3>
        <p className="pr-[10px] text-base font-medium leading-relaxed text-body-color text-justify">
        {paragraph}
        </p>
      </div>
    </div>
  );
};

export default SingleFeature;
