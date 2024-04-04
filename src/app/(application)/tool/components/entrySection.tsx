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
                Marketing Digital
              </span>{" "}
              knowledge
            </h1>
            <p className="mx-auto max-w-[700px] text-gray-500 dark:text-gray-400 md:text-xl">
              Enhance your marketing strategy with our comprehensive quiz
              platform. Impress audiences with meticulously designed features,
              seamlessly adaptable to your campaign needs. Accessible.
              Customizable. Open Source
            </p>
          </div>
          <div className="space-x-4"></div>
        </div>
      </div>
    </section>
  );
}
