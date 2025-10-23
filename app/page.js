import Link from "next/link";

export default function Home() {
  return (
    <div className="min-h-screen bg-black">
      <nav className="flex justify-center text-sm mx-auto py-5 md:px-16 px-3 border-b border-zinc-800 z-30 md:mb-40 mb-10">
        <div className="flex items-center max-w-[60%] mx-auto">
          <Link href="/">
            <img src="/logo.png" alt="logo" className="h-7 w-7" />
          </Link>
        </div>
        <div className="flex flex-col lg:flex-row items-center justify-between max-w-[60%] mx-auto">
          <ul className="flex gap-2 lg:flex-row lg:items-center lg:gap-6">
            {["About", "Contact", "Skills", "Projects"].map((item) => (
              <li key={item}>
                <Link
                  href={`/${item.toLowerCase()}`}
                  className="relative inline-block font-bold hover-underline px-1 py-1 text-slate-100"
                >
                  {item}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </nav>

      <div className="flex flex-col max-w-[80%] md:max-w-[60%] mx-auto sm:w-full">
        <div className="flex flex-col xl:flex-row-reverse xl:justify-between xl:items-start text-3xl">
          <div className="flex justify-center items-center flex-shrink-0">
            <svg
              viewBox="0 0 1273 906"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="lg:w-[450px] w-full h-full"
            >
              <g>
                <path
                  className="path"
                  d="M318.587 315.483V510.936L477.544 431.391V236.949M318.587 315.483L159.63 236.949M318.587 315.483L477.544 236.949M318.587 315.483V509.925L159.63 589.469M318.587 315.483L159.63 237.286L0.673828 315.483M318.587 315.483L159.63 394.016M477.544 236.949L318.587 158.753L159.63 236.949M477.544 236.949V432.402M477.544 236.949L318.587 158.416L477.544 80.2192L636.5 158.416L477.544 236.949ZM159.63 236.949V79.5451M159.63 589.469V394.016M159.63 589.469L0.673828 509.925V315.483M0.673828 315.483L159.63 394.016M159.63 79.5451L318.587 1.34863L477.544 79.5451L318.587 158.079L159.63 79.5451ZM795.457 395.701V237.286M795.457 237.286L636.5 159.09L477.544 237.286M795.457 237.286L636.5 315.82M477.544 237.286V431.728L601.139 491.762M477.544 237.286L636.5 315.82M636.5 315.82V472.887M954.414 668.003V473.561M954.414 473.561L795.457 395.364L636.5 473.561L795.457 552.094M954.414 473.561L795.457 552.094M954.414 473.561V669.014M954.414 473.561L795.457 395.027L954.414 316.831L1113.37 395.027L954.414 473.561ZM795.457 552.094L636.5 473.898L477.544 552.094M795.457 552.094L636.5 630.628M477.544 552.094V746.534L636.5 826.078V630.628M477.544 552.094L636.5 630.628M795.457 709.498V904.949M795.457 709.498L636.5 630.965M795.457 709.498L954.414 630.965M795.457 904.949L954.414 825.404V630.965M795.457 904.949L636.5 825.404V630.965M636.5 630.965L795.457 552.768L954.414 630.965M1113.37 552.431V747.882M1113.37 552.431L954.414 473.898M1113.37 552.431L1272.33 473.898M1113.37 747.882L1272.33 668.34V473.898M1113.37 747.882L954.414 668.34V473.898M954.414 473.898L1113.37 395.701L1272.33 473.898"
                  stroke="url(#paint-linear)"
                  strokeOpacity="0.6"
                  strokeWidth="2"
                ></path>
              </g>
              <defs>
                <linearGradient
                  id="paint-linear"
                  x1="1272.23"
                  y1="479.474"
                  x2="506.242"
                  y2="-216.277"
                  gradientUnits="userSpaceOnUse"
                >
                  <stop stopColor="#27b173"></stop>
                  <stop offset="0.619553" stopColor="#1a663f"></stop>
                  <stop offset="0.93102" stopColor="#26312d"></stop>
                </linearGradient>
              </defs>
            </svg>
          </div>

          <div>
            <h1 className="font-bold text-2xl xl:text-4xl animate-fadeInUp">
              Hey, I'm Krishna Digarse
            </h1>
            <p className="text-sm sm:text-base xl:text-lg mt-4 xl:mt-8 max-w-full xl:max-w-[60%] animate-fadeInUp">
              a CSE undergraduate with a strong focus on AI/ML and backend
              development. I enjoy building intelligent, scalable systems and
              love applying machine learning to solve real-world challenges.
            </p>
          </div>
        </div>

        <div className="flex flex-col gap-2 mt-5 lg:flex-row lg:items-center lg:gap-6 animate-fadeInUp">
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
      </div>

      {/* <div className="max-w-[60%] mx-auto sm:w-full mt-28">
        <h1 className="flex justify-center font-bold text-4xl animate-fadeInUp">
          Projects
        </h1>
      </div> */}
    </div>
  );
}
