import Navbar from "../components/Navbar";
import Image from "next/image";

const languages = [
    { name: "Python", logo: "/icons/Python.svg" },
    { name: "Java", logo: "/icons/java.svg" },
    { name: "JavaScript", logo: "/icons/javascript.svg" },
    { name: "HTML", logo: "/icons/html.svg" },
    { name: "CSS", logo: "/icons/css.svg" },
  ];

const libs = [
    { name: "TensorFlow", logo: "/icons/tensorflow.svg" },
    { name: "PyTorch", logo: "/icons/pytorch.svg" },
    { name: "Next.js", logo: "/icons/nextjs.svg" },
    { name: "React", logo: "/icons/react.svg" },
    { name: "Node.js", logo: "/icons/nodejs.svg" },
    { name: "Spring", logo: "/icons/spring.svg" },
  ];

const databases = [
    { name: "MySQL", logo: "/icons/mysql.svg" },
    { name: "MongoDB", logo: "/icons/mongodb.svg" },
    { name: "PostgreSQL", logo: "/icons/postgressql.svg" },
    { name: "AWS", logo: "/icons/aws.svg" },
    { name: "Prometheus", logo: "/icons/prometheus.svg" },
  ];

const tools = [
    { name: "Git", logo: "/icons/git.svg" },
    { name: "GitHub", logo: "/icons/github.svg" },
    { name: "Docker", logo: "/icons/docker.svg" },
    { name: "Postman", logo: "/icons/postman.svg" },
    { name: "RabbitMQ", logo: "/icons/rabbitmq.svg" },
    { name: "VS Code", logo: "/icons/vscode.svg" },
    { name: "IntelliJ", logo: "/icons/intellij.svg" },
    { name: "Linux", logo: "/icons/linux.svg" },
    { name: "Windows", logo: "/icons/windows.svg" },
    { name: "Bash", logo: "/icons/bash.svg" },
];


export default function About() {
  return (
    <div className="min-h-screen bg-zinc-900">
      <Navbar />
      <div className="max-w-6xl mx-auto">
        <div className="flex max-w-6xl mx-auto px-6 justify-center">
          <h1 className="flex flex-col mx-auto sm:w-full text-3xl md:text-4xl font-bold animate-fadeInUp">
            About Me
          </h1>
        </div>
        <main className="max-w-6xl mx-auto px-6 py-12">
          <div className="flex flex-col-reverse lg:flex-row items-center gap-8">
            {/* details (left on large screens) */}
            <section className="lg:w-1/2 w-full animate-fadeInUp">
              <p className="mb-6 text-base md:text-lg">
                I’m Krishna Digarse, a Computer Science student at the School of Information Technology, RGPV, specializing in Artificial Intelligence and Machine Learning. I have hands-on experience in developing AI-driven systems, including HTR, OCR with NLP-based correction, and RAG models using TensorFlow and PyTorch. My interests lie in deep learning, NLP, and backend development, with a focus on building scalable and privacy-focused solutions that deliver real-world impact.
              </p>
            </section>

            <aside className="lg:w-1/2 w-full flex justify-center lg:justify-end animate-fadeInUp">
              <div className="w-40 h-40 sm:w-72 sm:h-72 rounded-2xl overflow-hidden shadow-lg">
                <Image
                  src="/krishna.jpg"
                  alt="Krishna Digarse"
                  width={288}
                  height={288}
                  className="object-cover w-full h-full"
                  priority
                />
              </div>
            </aside>
            
          </div>

          <div className="lg:w-1/2 w-full mb-6 text-base md:text-lg mt-10 animate-fadeInUp">
            These are the tools and languages that fuel most of my projects.
          </div>

          <div className="flex mt-10 animate-fadeInUp">
            <section className="text-white flex flex-col">
              <h1 className="flex text-2xl font-bold mb-5">Programming Languages</h1>
              <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 lg:gap-8 gap-4">
                {languages.map((language, index) => (
                  <div
                    key={index}
                    className="w-40 border border-zinc-700 hover:border-green-400 rounded-xl p-2 flex flex-row items-center transition duration-300 shadow-md"
                  >
                    <img src={language.logo} alt={language.name} className="w-7 h-7 mx-2 my-1" />
                    <p className="text-md font-medium">{language.name}</p>
                  </div>
                ))}
              </div>
            </section>
          </div>
          <div className="flex mt-10 animate-fadeInUp">
            <section className="text-white flex flex-col">
              <h1 className="flex text-2xl font-bold mb-5">Frameworks & Libraries</h1>
              <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 lg:gap-8 gap-4">
                {libs.map((lib, index) => (
                  <div
                    key={index}
                    className="w-40 border border-zinc-700 hover:border-green-400 rounded-xl p-2 flex flex-row items-center transition duration-300 shadow-md"
                  >
                    <img src={lib.logo} alt={lib.name} className="w-7 h-7 mx-2 my-1" />
                    <p className="text-md font-medium">{lib.name}</p>
                  </div>
                ))}
              </div>
            </section>
          </div>

          <div className="flex mt-10 animate-fadeInUp">
            <section className="text-white flex flex-col">
              <h1 className="flex text-2xl font-bold mb-5">Databases & Cloud Platforms</h1>
              <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 lg:gap-8 gap-4">
                {databases.map((databases, index) => (
                  <div
                    key={index}
                    className="w-40 border border-zinc-700 hover:border-green-400 rounded-xl p-2 flex flex-row items-center transition duration-300 shadow-md"
                  >
                    <img src={databases.logo} alt={databases.name} className="w-7 h-7 mx-2 my-1" />
                    <p className="text-md font-medium">{databases.name}</p>
                  </div>
                ))}
              </div>
            </section>
          </div>

          <div className="flex mt-10 animate-fadeInUp">
            <section className="text-white flex flex-col">
              <h1 className="flex text-2xl font-bold mb-5">Tools & Environments</h1>
              <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 lg:gap-8 gap-4">
                {tools.map((tool, index) => (
                  <div
                    key={index}
                    className="w-40 border border-zinc-700 hover:border-green-400 rounded-xl p-2 flex flex-row items-center transition duration-300 shadow-md"
                  >
                    <img src={tool.logo} alt={tool.name} className="w-7 h-7 mx-2 my-1" />
                    <p className="text-md font-medium">{tool.name}</p>
                  </div>
                ))}
              </div>
            </section>
          </div>

        </main>
      </div>
    </div>
  );
}
