import SectionTitle from "../Common/SectionTitle";
import SingleFeature from "./SingleFeature";
import featuresData from "./featuresData";

const Features = () => {
  return (
    <>
      <section id="features" className="py-16 md:py-20 lg:py-36">
        <div className="container">
          <SectionTitle
            title="¿Qué Talento buscas?"
            paragraph="De acuerdo a su especialidad y aplicación de tecnologías, nuestros talentos se dividen en las siguientes categorías:"
            center
          />

          <div className="grid grid-cols-1 gap-x-48 gap-y-20 md:grid-cols-2 lg:grid-cols-2">
            {featuresData.map((feature) => (
              <SingleFeature key={feature.id} feature={feature} />
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default Features;
