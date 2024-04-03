import Link from "next/link";

export default function EntrySection() {
  return (
    <section className="  w-full py-12 ">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center space-y-4 text-center">
          <div className="space-y-2">
            <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl/none">
              Validate your{" "}
              <span className="bg-gradient-to-r from-green-500 via-green-900 to-green-500 bg-clip-text   tracking-tighter text-transparent ">
                S
              </span>
              <span className="bg-gradient-to-r from-green-500 via-green-900 to-green-500 bg-clip-text   tracking-tighter text-transparent ">
                Q
              </span>
              <span className="bg-gradient-to-r from-green-500 via-green-900 to-green-500 bg-clip-text   tracking-tighter text-transparent ">
                L
              </span>{" "}
              code below
            </h1>
            <p className="mx-auto max-w-[700px] text-gray-500 dark:text-gray-400 md:text-xl">
              Elevate your SQL coding standards with our validator app. Impress
              stakeholders with meticulously crafted components, ready to
              integrate seamlessly into your database projects. Accessible.
              Customizable. Open Source.
            </p>
          </div>
          <div className="space-x-4"></div>
        </div>
      </div>
    </section>
  );
}
