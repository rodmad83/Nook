import Image from "next/image";

export default function Awards() {
  return (
    <section className="py-16 md:py-24 bg-hei-peach/20">
      <div className="container">
        <h2 className="section-heading text-3xl md:text-4xl mb-16">
          AWARDS & RECOGNITION
        </h2>

        <div className="flex justify-center">
          <div className="max-w-4xl">
            <Image
              src="/images/awards.png"
              alt="Nook Junior School Awards and Recognition"
              width={1000}
              height={300}
              className="w-full h-auto"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
