import Button from "./Button";

export default function Hero() {
  return (
    <div className="min-h-screen flex flex-col gap-10 items-center justify-center text-center max-w-[800px] w-full mx-auto p-4">
      <div className="flex flex-col gap-4">
        <p>"Get Stronger, Fitter, and Healthier"</p>
        <p>With</p>
        <h1 className="uppercase font-semibold text-4xl sm:text-5xl md:text-6xl lg:text-7xl ">
          RR<span className="text-blue-400 animate-pulse" >Fitness</span>
        </h1>
      </div>
      <p className="text-sm md:text-base font-light">
        RR Fitness is more than just a gym{" "}
        <span className="text-blue-400 font-medium">
          – it’s a community dedicated to helping you grow stronger, fitter, and
          more confident.
        </span>{" "}
        We’re committed to creating a space where your fitness journey is{" "}
        <span className="text-blue-400 font-medium">
          empowered and your goals
        </span>{" "}
        are achieved.
      </p>
      <Button
        func={() => {
          window.location.href = "#generate";
        }}
        text={"Accept & Begin"}
      />

      <footer>
        <p>
          <span>Contact Gym Owner</span>:
          <a href="tel:7425859194" className="underline text-blue-400"> 7425859194</a>
        </p>
        <p>Location:</p>
        {/* <iframe
          src="https://www.google.com/maps/embed?pb=!4m6!3m5!1s0x3972995293f8d4c7:0xf5f87dd5e67951e7!8m2!3d27.5657243!4d76.6326605!16s%2Fg%2F11v69yxv__"
          style={{ border: 0 }}
          allowFullScreen=""
          loading="lazy"
        ></iframe> */}
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3537.092976793224!2d76.6099408753298!3d27.559624776267555!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39729939407a303b%3A0x5c3bcb8a8126870c!2sMama%20Mea%20Pizza!5e0!3m2!1sen!2sin!4v1728925313401!5m2!1sen!2sin"
          style={{ border: 0 }}
          allowFullScreen=""
          loading="lazy"
        ></iframe>

        <p>
          <span>Contact</span> the{" "}
          <a
            href="https://www.linkedin.com/in/deveshyadav1/"
            className="underline text-blue-400"
            target="_blank"
            rel="noopener noreferrer"
          >
            Developer
          </a>
          <br />
        </p>
      </footer>
    </div>
  );
}
