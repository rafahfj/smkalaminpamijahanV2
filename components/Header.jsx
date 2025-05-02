export default function Header({ data }) {
  return (
    <div className="relative -mb-40 500:-mb-28 max-h-[500px] 500:max-h-[600px] overflow-hidden">
      <div className="w-full overflow-hidden">
        <img
          src={data.image}
          alt=""
          className="w-full 500:max-h-[600px] object-center object-cover"
        />
      </div>
      <div className="absolute inset-0 bg-black/40" />
      <div className="flex justify-center items-center">
        <div className="-top-[80vw] 500:-top-[400px] md:-top-[500px] relative flex flex-col items-center">
          <img
            src={data.logo}
            alt={data.alt}
            className="mb-3 w-[30vw] 500:w-[20vw] md:w-[17vw]"
          />
          <h1 className="font-bold text-white text-2xl md:text-4xl">
            {data.tfirst}
          </h1>
          <h2 className="font-bold text-white text-lg md:text-xl">
            {data.tsec}
          </h2>
          <p className="my-2 px-4 font-semibold text-white text-sm md:text-base text-center">
            {data.motto && data.motto}
          </p>
        </div>
      </div>
    </div>
  );
}
