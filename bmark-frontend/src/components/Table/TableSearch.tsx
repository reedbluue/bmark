import {DetailedHTMLProps, HTMLAttributes, InputHTMLAttributes} from "react";
import {IoSearch} from "react-icons/io5";
import clsx from "clsx";

type ITableSearchProps =
    {}
    & DetailedHTMLProps<InputHTMLAttributes<HTMLInputElement>, HTMLInputElement>

export default function TableSearch({className, ...rest}: ITableSearchProps) {
  return (
      <div className="py-3 px-4">
        <div className="relative max-w-xs">
          <label className="sr-only">Search</label>
          <input placeholder="Search for items" type="text"
                 name="hs-table-with-pagination-search"
                 id="hs-table-with-pagination-search"
                 className={clsx("py-2 px-3 ps-9 block w-full border-gray-200 shadow-sm rounded-lg "
                     + "text-sm focus:z-10 focus:border-blue-500 focus:ring-blue-500 "
                     + "disabled:opacity-50 disabled:pointer-events-none", className)}
                 {...rest}
          />
          <div
              className="absolute inset-y-0 start-0 flex items-center pointer-events-none ps-3">
            <IoSearch className="size-4 text-gray-400"/>
          </div>
        </div>
      </div>
  );
}
