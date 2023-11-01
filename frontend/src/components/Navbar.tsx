import Link from "next/link";

function Navbar() {
  return (
    <nav className="flex flex-row items-center justify-between bg-teal-500 p-6">
      <div className="flex items-center flex-shrink-0 text-white mr-6">
        <Link href="/" className="font-semibold text-xl tracking-tight">
          👨‍💻 Pooulad
        </Link>
      </div>
      <div className="w-full flex items-center flex-row justify-end align-middle">
        <div>
          <Link
            href="/login"
            className="inline-block text-sm px-4 py-2 leading-none border rounded text-white border-white hover:border-transparent hover:text-teal-500 hover:bg-white mt-4 lg:mt-0"
          >
            Login
          </Link>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
