import Navbar from "../components/Navbar";

export default function Contact() {
  return (
    <div className="min-h-screen bg-zinc-900 text-slate-100">
      <Navbar />
      <div className="flex max-w-6xl mx-auto px-6 justify-center">
        <h1 className="flex flex-col mx-auto sm:w-full text-3xl md:text-4xl font-bold animate-fadeInUp">
          Let's Connect!
        </h1>
      </div>
      <main className="max-w-6xl mx-auto px-6 py-12">

        <div className="flex flex-col-reverse lg:flex-row items-center gap-8">
          {/* details (left on large screens) */}
          <section className="lg:w-1/2 w-full animate-fadeInUp">
            <p className="mb-6 text-base md:text-lg">
              I'm always open to discussing new projects, collaborations, or
              opportunities. Reach out using the details below or via the social
              links.
            </p>

            <div className="space-y-4 text-slate-300">
              <div>
                <h3 className="font-semibold text-slate-100">Email</h3>
                <a
                  href="mailto:krishnadigarse2004@gmail.com"
                  className="hover:underline"
                >
                  krishnadigarse2004@gmail.com
                </a>
              </div>

              <div>
                <h3 className="font-semibold text-slate-100">Location</h3>
                <p>Bhopal, India</p>
              </div>

              <div className="mt-4">
                <h3 className="font-semibold text-slate-100 mb-2">Socials</h3>
                <div className="flex gap-4">
                  <a
                    href="https://www.linkedin.com/in/krishnadigarse/"
                    target="_blank"
                    rel="noreferrer"
                    className="hover:text-green-500"
                  >
                    LinkedIn
                  </a>
                  <a
                    href="https://www.github.com/krishnadigarse"
                    target="_blank"
                    rel="noreferrer"
                    className="hover:text-green-500"
                  >
                    GitHub
                  </a>
                </div>
              </div>
            </div>
          </section>
        </div>
      </main>
    </div>
  );
}
