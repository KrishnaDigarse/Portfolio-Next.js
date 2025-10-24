export default function Footer() {
  return (
    <footer className="border-t border-zinc-800 py-6 text-center text-gray-400 text-sm bg-zinc-900">
      <p>© {new Date().getFullYear()} Krishna Digarse</p>
      {/* <p className="mt-2">
        Built with ❤️ using <span className="text-blue-400">Next.js</span> & <span className="text-blue-400">Tailwind CSS</span>
      </p> */}
    </footer>
  );
}
