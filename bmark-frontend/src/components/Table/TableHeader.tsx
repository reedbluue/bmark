import {HTMLAttributes} from "react";
import clsx from "clsx";

export interface IHeader {
  text: string;
  size: "sm" | "md" | "lg" | "auto";
}

interface ITableHeaderProps
    extends Omit<HTMLAttributes<HTMLTableHeaderCellElement>, "className">,
        IHeader {
}

export default function TableHeader(props: ITableHeaderProps) {
  return (
      <th {...props} scope="col"
          className={clsx("px-6 py-3 text-start text-xs font-medium text-gray-500 uppercase", {
            "w-12": props.size === "sm",
            "w-24": props.size === "md",
            "w-32": props.size === "lg",
            "w-auto": props.size === "auto",
          })}>
        {props.text}
      </th>
  );
}
