export interface BookmarkResponse {
  id: string;
  title: string;
  description: string;
  url: string;
}

export interface BookmarkCreateRequest {
  title: string;
  description: string;
  url: string;
}