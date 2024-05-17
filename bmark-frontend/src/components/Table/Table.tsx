import {HTMLAttributes, PropsWithChildren} from "react";
import TableHeader, {IHeader} from "@/components/Table/TableHeader";

interface ITableProps
    extends Omit<PropsWithChildren<HTMLAttributes<HTMLTableElement>>, "className"> {
  headers: IHeader[];
}

export default function Table(props: ITableProps) {


  return (
      <table {...props} className="min-w-full divide-y divide-gray-200">
        <thead className="bg-gray-50">
        <tr>
          {props.headers.map(h => <TableHeader key={h.text} {...h}/>)}
        </tr>
        </thead>

        <tbody className="divide-y divide-gray-200">
        {props.children}
        </tbody>
      </table>
  );
}
