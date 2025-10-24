import Navbar from "../components/Navbar";

export default function About() {
  return (
    <div className="min-h-screen">
      <Navbar />
      <div className="flex justify-center items-center text-slate-100">
        <h1 className="text-3xl font-bold">About Me</h1>
      </div>
    </div>
  );
}
