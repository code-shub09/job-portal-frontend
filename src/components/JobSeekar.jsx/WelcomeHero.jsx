import React from "react";

/**
 * WelcomeHero (React + Tailwind, flex layout)
 * -------------------------------------------
 * Same UI, now using flex with responsive row/column.
 */
export default function WelcomeHero({
  name = "Sarah",
  subtitle = "Ready to find your next opportunity? Let's explore some great jobs for you.",
  illustrationSrc,
  className = "w-full",
}) {
  return (
    <section className={`mt-8 ${className}`}>
      <div className="mx-auto w-full rounded-3xl bg-white p-6  shadow-sm">
        <div className="flex flex-row items-center  gap-6 lg:gap-10">
          {/* Left: Text */}
          <div className="flex-1 ">
            <h1 className="text-3xl sm:text-4xl font-bold tracking-tight text-slate-900">
              {`Welcome back, ${name}!`} <span className="align-middle">👋</span>
            </h1>
            <p className="mt-3 text-lg text-slate-600 max-w-4xl">{subtitle}</p>
          </div>

          {/* Right: Illustration */}
          <div className="self-center lg:self-end w-56    rounded-xl  flex items-center justify-center overflow-hidden  shrink-0">
            {illustrationSrc ? (
              <img
                src={illustrationSrc}
                alt="Job seeker illustration"
                className="w-full "
                loading="lazy"
              />
            ) : (
              <div className="text-sm text-indigo-600/80 p-4 text-center">
                Add your illustration image
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}

/* Example usage (JS only)
import WelcomeHero from "./WelcomeHero";

export default function Home() {
  return (
    <WelcomeHero
      name="Sarah"
      illustrationSrc="/assets/jobseekar-hero.png"
    />
  );
}
*/
