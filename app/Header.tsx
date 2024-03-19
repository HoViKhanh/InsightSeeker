import Link from "next/link"
import { Button } from "@/components/ui/button"

export default function Header() {
  return (
    <header className="flex items-center h-20 px-6 w-full md:px-6 bg-slate-950 sticky">
      <Link className="mr-4 flex items-center transition-all text-gray-50 hover:tracking-widest" href="#">
        <img alt="Insight Seeker Logo" className="h-14 w-14 mr-2" src="/logo-retouch.png"/><b>Insight Seeker</b>
      </Link>
      <nav className="flex-1 flex items-center justify-center gap-4 text-base font-semibold text-gray-50">
        <Link
          className="transition-all group inline-flex items-center rounded-md duration-200 ease-in-out hover:text-teal-400 hover:-translate-y-1  dark:hover:text-gray-50 dark:focus:text-gray-50"
          href="/"
        >
          Home
        </Link>
        <Link
          className="group inline-flex items-center rounded-md transition-all duration-200 ease-in-out hover:text-teal-400 hover:-translate-y-1  dark:hover:text-gray-50 dark:focus:text-gray-50"
          href="#"
        >
          Features
        </Link>
        <Link
          className="group inline-flex items-center rounded-md transition-all duration-200 ease-in-out hover:text-teal-400 hover:-translate-y-1  dark:hover:text-gray-50 dark:focus:text-gray-50"
          href="#"
        >
          Pricing
        </Link>
        <Link
          className="group inline-flex items-center rounded-md transition-all duration-200 ease-in-out hover:text-teal-400 hover:-translate-y-1  dark:hover:text-gray-50 dark:focus:text-gray-50"
          href="#"
        >
          Contact
        </Link>
      </nav>
      <Button className="transition-all w-44 font-semibold bg-orange-400 rounded-full text-base" size="default">
        Login
      </Button>
    </header>
  )
}
