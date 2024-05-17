"use client";

import Link from "next/link";
import {HTMLAttributes} from "react";
import {usePathname} from "next/navigation";
import clsx from "clsx";

export interface INavbarLink {
  text: string;
  url: string;
}

interface INavbarLinkProps extends HTMLAttributes<HTMLElement> {
  link: INavbarLink
}

export default function NavbarLink(props: INavbarLinkProps) {
  const pathname = usePathname();

  return (
      <Link {...props} href={props.link.url}
            className={clsx("font-medium hover:text-gray-400 ", {
              "text-gray-600": pathname !== props.link.url,
              "text-blue-600": pathname === props.link.url
            })}>
        {props.link.text}
      </Link>
  );
}