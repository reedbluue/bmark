import {DetailedHTMLProps, HTMLAttributes, PropsWithChildren} from "react";
import clsx from "clsx";

type ITableContainerProps =
    {}
    & PropsWithChildren<DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement>>;

export default function TableContainer({children, className, ...rest}: ITableContainerProps) {

  return (
      <div className={clsx("flex flex-col", className)} {...rest}>
        <div className="-m-1.5 overflow-x-auto">
          <div className="p-1.5 min-w-full inline-block align-middle">
            <div className="border rounded-lg divide-y divide-gray-200">
              {children}
            </div>
          </div>
        </div>
      </div>
  );
}
