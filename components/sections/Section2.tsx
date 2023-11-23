import Image from "next/image";
function Section1() {
  return (
    <div className="flex flex-col justify-center items-center">
      <h1 className="title">About Us</h1>
      <div className="flex justify-center items-center gap-8">
        <Image
          height={354}
          width={548}
          alt="rectangle5"
          className="rounded"
          src="/assets/main-hero/Rectangle5.jpg"
        />
        <div className="flex-col justify-start items-start gap-6 inline-flex">
          <div className="w-96 text-zinc-600 text-xl font-normal font-arial leading-10">
            We are a specialized team committed to providing reliable car rental
            services. One of the advantages of renting a car from us is offering
            competitive and transparent prices. By providing services such as
            comprehensive insurance
          </div>
          <div className="rounded justify-center items-center gap-2 inline-flex ">
            <div className="text-orange-500 text-xl font-semibold font-poppins">
              Read More
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Section1;
