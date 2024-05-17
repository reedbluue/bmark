"use server";

import IPageable from "@/interfaces/IPageable";
import {baseAxios} from "@/configs/AxiosConfig";
import IPage from "@/interfaces/IPage";
import {BookmarkResponse} from "@/dtos/BookmarkDtos";

export async function filterBookmarks(filter: string, pageable?: IPageable) {
  let response = await baseAxios.get<IPage<BookmarkResponse>>(`/bookmark/filter`,
      {params: {title: filter, ...pageable}});
  return response.data;
}