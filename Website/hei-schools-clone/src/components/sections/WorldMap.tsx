import Image from "next/image";

export default function WorldMap() {
  return (
    <section className="py-16 md:py-24 bg-hei-light">
      <div className="container">
        <h2 className="section-heading text-3xl md:text-4xl mb-16">
          WORLD OF NOOK
        </h2>

        <div className="max-w-5xl mx-auto">
          <div className="relative rounded-lg overflow-hidden shadow-md">
            <Image
              src="/images/hei-map.webp"
              alt="Nook Junior Schools around the world"
              width={1024}
              height={600}
              className="w-full h-auto"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
