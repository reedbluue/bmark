import {HTMLAttributes, PropsWithChildren} from "react";
import clsx from "clsx";

interface ITableDataProps
    extends Omit<PropsWithChildren<HTMLAttributes<HTMLTableDataCellElement>>, "className"> {
}

export default function TableData(props: ITableDataProps) {
  return (
      <td {...props}
          className="px-6 py-4 text-sm text-gray-800 break-all">{props.children}</td>
  );
}
