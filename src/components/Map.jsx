import Button from "./Button";

export default function Hero() {
  return (
    <div className="min-h-screen flex flex-col gap-10 items-center justify-center text-center max-w-[800px] w-full mx-auto p-4">
      <div className="flex flex-col gap-4">
        <p>"Get Stronger, Fitter, and Healthier"</p>
        <p>With</p>
        <h1 className="uppercase font-semibold text-4xl sm:text-5xl md:text-6xl lg:text-7xl">
          RR<span className="text-blue-400">Fitness</span>
        </h1>
      </div>

      <p className="text-sm md:text-base font-light">
        RR Fitness is more than just a gym{" "}
        <span className="text-blue-400 font-medium">
          – it’s a community dedicated to helping you grow stronger, fitter, and
          more confident.
        </span>{" "}
        q’re committed to creating a space where your fitness journey is{" "}
        <span className="text-blue-400 font-medium">
          empowered and your goals{" "}
        </span>
        are achieved."
      </p>
      <Button
        func={() => {
          window.location.href = "#generate";
        }}
        text={"Accept & Begin"}
      ></Button>
    </div>
  );
}
