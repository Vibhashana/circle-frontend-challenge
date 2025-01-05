import Image from "next/image";

const Hero = () => {
  return (
    <section className="relative grid h-auto place-items-center overflow-hidden pb-12 pt-8 before:absolute before:inset-0 before:z-10 before:bg-blue-900/80 sm:h-[400px]">
      <Image
        src="https://images.unsplash.com/photo-1520545255830-2511979f3636?q=80&w=2094&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        width={1920}
        height={600}
        alt=""
        className="absolute inset-0 size-full object-cover"
        priority
      />
      <div className="content-container relative z-20 text-center text-white">
        <h1 className="mb-4 text-3xl font-bold sm:text-5xl">
          Welcome to BookNest
        </h1>
        <p className="mx-auto max-w-[60ch] text-sm leading-relaxed">
          We believe in the power of books to inspire and transform. Whether
          you&apos;re after a new release, a classic, or something fresh,
          you&apos;ll find your perfect read here.
        </p>
      </div>
    </section>
  );
};

export default Hero;
