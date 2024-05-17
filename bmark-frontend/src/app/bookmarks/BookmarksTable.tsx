"use client";

import TableSearch from "@/components/Table/TableSearch";
import TableData from "@/components/Table/TableData";
import Link from "next/link";
import {IoLink} from "react-icons/io5";
import Table from "@/components/Table/Table";
import {IHeader} from "@/components/Table/TableHeader";
import {filterBookmarks} from "@/services/BookmarkService";
import IPage from "@/interfaces/IPage";
import {BookmarkResponse} from "@/dtos/BookmarkDtos";
import {useEffect, useState} from "react";
import TableContainer from "@/components/Table/TableContainer";
import {toast} from "react-toastify";

const headers: IHeader[] = [
  {
    text: "Title",
    size: "auto",
  },
  {
    text: "Description",
    size: "auto",
  },
  {
    text: "URL",
    size: "auto",
  }
]

export default function BookmarsTable() {
  const [bookmarks, setBookmarks] = useState<IPage<BookmarkResponse>>();
  const [filter, setFilter] = useState<string>("");
  const [page, setPage] = useState<number>(0);

  const handle = async () => {
    try {
      setBookmarks(await filterBookmarks(filter, {size: 5, page}));
    } catch (e) {
      toast.error("Failed to load bookmarks");
    }
  }

  useEffect(() => {
    handle();
  }, [filter, page]);

  return (
      <div>
        <TableContainer>
          <TableSearch value={filter} onChange={e => setFilter(e.target.value)}/>
          <Table headers={headers}>
            {bookmarks?.content.map(b => (
                <tr key={b.id}>
                  <TableData>{b.title}</TableData>
                  <TableData>{b.description}</TableData>
                  <TableData>
                    <Link href={b.url} target={"_blank"}>
                      <IoLink className={"size-4"}/>
                    </Link>
                  </TableData>
                </tr>
            ))}
          </Table>
          <div className="py-1 px-4 flex">
            <nav className="flex items-center space-x-1">
              <button type="button"
                      onClick={() => setPage(p => p - 1)}
                      disabled={bookmarks?.first}
                      className="p-2.5 min-w-[40px] inline-flex justify-center items-center gap-x-2 text-sm rounded-full text-gray-800 hover:bg-gray-100 disabled:opacity-50 disabled:pointer-events-none">
                <span aria-hidden="true">«</span>
                <span className="sr-only">Previous</span>
              </button>
              <button type="button"
                      onClick={() => setPage(p => p + 1)}
                      disabled={bookmarks?.last}
                      className="p-2.5 min-w-[40px] inline-flex justify-center items-center gap-x-2 text-sm rounded-full text-gray-800 hover:bg-gray-100 disabled:opacity-50 disabled:pointer-events-none">
                <span className="sr-only">Next</span>
                <span aria-hidden="true">»</span>
              </button>
            </nav>
          </div>
        </TableContainer>
      </div>

  );
}
