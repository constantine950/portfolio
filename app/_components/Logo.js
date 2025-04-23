import Link from "next/link";

function Logo() {
  return (
    <Link
      href="/"
      className="text-2xl font-bold tracking-tighter text-indigo-700"
    >
      James
      <span className="text-gray-900">Codes</span>
    </Link>
  );
}

export default Logo;
