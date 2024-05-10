import {IoMenuSharp} from "react-icons/io5";
import Link from "next/link";

interface INavbarLink {
  label: string;
  url: string;
}

const links: INavbarLink[] = [
  {label: "Home", url: "/"},
  {label: "About", url: "/about"},
];

export default function Navbar() {
  return (
      <div className="navbar bg-base-300">
        <div className="navbar-start">
          <div className="dropdown">
            <button className="btn btn-ghost lg:hidden">
              <IoMenuSharp size={30}/>
            </button>
            <ul className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
              {links.map((link) => (
                  <li key={link.label}><Link href={link.url}>{link.label}</Link></li>
              ))}
            </ul>
          </div>
          <Link href={"/"} className="btn btn-ghost text-xl">BMark</Link>
        </div>
        <div className="navbar-end hidden lg:flex">
          <ul className="menu menu-horizontal px-1 gap-2">
            {links.map((link) => (
                <li key={link.label}><Link href={link.url}>{link.label}</Link></li>
            ))}
          </ul>
        </div>
      </div>
  );
}