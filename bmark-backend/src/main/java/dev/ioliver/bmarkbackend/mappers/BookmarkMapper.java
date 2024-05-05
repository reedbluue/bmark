package dev.ioliver.bmarkbackend.mappers;

import dev.ioliver.bmarkbackend.domain.entities.Bookmark;
import dev.ioliver.bmarkbackend.dtos.bookmark.BookmarkCreateRequest;
import dev.ioliver.bmarkbackend.dtos.bookmark.BookmarkResponse;
import org.mapstruct.Mapper;

@Mapper(componentModel = "spring")
public interface BookmarkMapper {

  BookmarkResponse toDto(Bookmark bookmark);

  Bookmark toEntity(BookmarkResponse bookmarkResponse);

  Bookmark toEntity(BookmarkCreateRequest bookmarkCreateRequest);
}
