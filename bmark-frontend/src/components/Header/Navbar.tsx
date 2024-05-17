import {IoMenu, IoClose} from "react-icons/io5";
import NavbarLink, {INavbarLink} from "@/components/Header/NavbarLink";
import Link from "next/link";

const links: INavbarLink[] = [
  {
    text: "Bookmarks",
    url: "/bookmarks",
  }
];

export default function Navbar() {
  return (
      <header
          className="flex flex-wrap sm:justify-start sm:flex-nowrap w-full bg-white text-sm py-4">
        <nav
            className="max-w-[85rem] w-full mx-auto px-4 sm:flex sm:items-center sm:justify-between">
          <div className="flex items-center justify-between">
            <Link className="flex-none text-xl font-semibold" href="/">BMark</Link>
            <div className="sm:hidden">
              <button type="button"
                      className={"hs-collapse-toggle p-2 inline-flex justify-center items-center "
                          + "gap-x-2 rounded-lg border border-gray-200 bg-white text-gray-800 "
                          + "shadow-sm hover:bg-gray-50"}
                      data-hs-collapse="#navbar-with-collapse"
                      aria-controls="navbar-with-collapse" aria-label="Toggle navigation">
                <IoMenu className={"block hs-collapse-open:hidden size-4"}/>
                <IoClose className={"hidden hs-collapse-open:block size-4"}/>
              </button>
            </div>
          </div>
          <div id="navbar-with-collapse"
               className="hidden transition-all duration-100 overflow-hidden basis-full grow sm:block">
            <div
                className="flex flex-col gap-5 mt-5 sm:flex-row sm:items-center sm:justify-end sm:mt-0 sm:ps-5">
              {links.map(l => <NavbarLink key={l.url} link={l}/>)}
            </div>
          </div>
        </nav>
      </header>
  );
}