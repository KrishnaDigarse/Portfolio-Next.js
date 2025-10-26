import About from "./components/About";
import Navbar from "./components/Navbar";
import Image from "next/image";

export default function Home() {
  return (
    <div className="min-h-screen bg-zinc-900">
      <Navbar />
      <div className="flex flex-col max-w-[80%] md:max-w-[60%] mx-auto sm:w-full">
        <div className="flex flex-col xl:flex-row-reverse xl:justify-between xl:items-start text-3xl">
          <div className="flex flex-col-reverse lg:flex-row items-center gap-8">
            <aside className="lg:w-full lg:h-full w-1/2 h-1/2  flex justify-center lg:justify-end animate-fadeInUp">
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

          <div>
            <h1 className="font-bold text-2xl xl:text-4xl animate-fadeInUp">
              Hey, I'm Krishna Digarse
            </h1>
            <p className="text-sm sm:text-base xl:text-lg mt-4 xl:mt-8 max-w-full xl:max-w-[60%] animate-fadeInUp">
              a Computer Science student at the School of Information Technology, RGPV, specializing in Artificial Intelligence and Machine Learning. I have hands-on experience in developing AI-driven systems, including HTR, OCR with NLP-based correction, and RAG models using TensorFlow and PyTorch. My interests lie in deep learning, NLP, and backend development, with a focus on building scalable and privacy-focused solutions that deliver real-world impact.
            </p>
          </div>
        </div>

        <div className="flex flex-col gap-2 mt-8 lg:flex-row lg:items-center lg:gap-6 animate-fadeInUp">
          <ul className="flex flex-row items-center gap-6">
            <li>
              <a
                href="https://www.linkedin.com/in/krishnadigarse/"
                target="_blank"
                rel="noreferrer"
                aria-label="Link to LinkedIn profile"
                title="LinkedIn"
                className="text-slate-100"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 256 256"
                  className="w-5 h-5"
                  fill="currentColor"
                  aria-hidden="true"
                >
                  <g transform="scale(5.12,5.12)">
                    <path d="M41,4h-32c-2.76,0 -5,2.24 -5,5v32c0,2.76 2.24,5 5,5h32c2.76,0 5,-2.24 5,-5v-32c0,-2.76 -2.24,-5 -5,-5zM17,20v19h-6v-19zM11,14.47c0,-1.4 1.2,-2.47 3,-2.47c1.8,0 2.93,1.07 3,2.47c0,1.4 -1.12,2.53 -3,2.53c-1.8,0 -3,-1.13 -3,-2.53zM39,39h-6c0,0 0,-9.26 0,-10c0,-2 -1,-4 -3.5,-4.04h-0.08c-2.42,0 -3.42,2.06 -3.42,4.04c0,0.91 0,10 0,10h-6v-19h6v2.56c0,0 1.93,-2.56 5.81,-2.56c3.97,0 7.19,2.73 7.19,8.26z"></path>
                  </g>
                </svg>
              </a>
            </li>
            <li>
              <a
                href="https://github.com/krishnadigarse"
                target="_blank"
                rel="noreferrer"
                aria-label="Link to GitHub profile"
                title="GitHub"
                className="text-slate-100"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 256 256"
                  className="w-5 h-5"
                  fill="currentColor"
                  aria-hidden="true"
                >
                  <g transform="scale(10.66667,10.66667)">
                    <path d="M10.9,2.1c-4.6,0.5 -8.3,4.2 -8.8,8.7c-0.5,4.7 2.2,8.9 6.3,10.5c0.3,0.1 0.6,-0.1 0.6,-0.5v-1.6c0,0 -0.4,0.1 -0.9,0.1c-1.4,0 -2,-1.2 -2.1,-1.9c-0.1,-0.4 -0.3,-0.7 -0.6,-1c-0.3,-0.1 -0.4,-0.1 -0.4,-0.2c0,-0.2 0.3,-0.2 0.4,-0.2c0.6,0 1.1,0.7 1.3,1c0.5,0.8 1.1,1 1.4,1c0.4,0 0.7,-0.1 0.9,-0.2c0.1,-0.7 0.4,-1.4 1,-1.8c-2.3,-0.5 -4,-1.8 -4,-4c0,-1.1 0.5,-2.2 1.2,-3c-0.1,-0.2 -0.2,-0.7 -0.2,-1.4c0,-0.4 0,-1 0.3,-1.6c0,0 1.4,0 2.8,1.3c0.5,-0.2 1.2,-0.3 1.9,-0.3c0.7,0 1.4,0.1 2,0.3c1.3,-1.3 2.8,-1.3 2.8,-1.3c0.2,0.6 0.2,1.2 0.2,1.6c0,0.8 -0.1,1.2 -0.2,1.4c0.7,0.8 1.2,1.8 1.2,3c0,2.2 -1.7,3.5 -4,4c0.6,0.5 1,1.4 1,2.3v2.6c0,0.3 0.3,0.6 0.7,0.5c3.7,-1.5 6.3,-5.1 6.3,-9.3c0,-6 -5.1,-10.7 -11.1,-10z"></path>
                  </g>
                </svg>
              </a>
            </li>
          </ul>
          <a
            href="/Krishna_Resume.pdf"
            target="_blank"
            rel="noreferrer"
            className="font-semibold hover-underline flex items-center gap-1"
          >
            Resume
          </a>
        </div>
      
        <div className="mt-30">
          <h2 className="font-bold text-2xl mb-6 animate-fadeInUp">
            Currently Hacking
          </h2>
        </div>

        <div>
          <About/>
        </div>
      </div>
    </div>
  );
}
