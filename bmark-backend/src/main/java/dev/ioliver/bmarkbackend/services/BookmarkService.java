package dev.ioliver.bmarkbackend.services;

import dev.ioliver.bmarkbackend.domain.entities.Bookmark;
import dev.ioliver.bmarkbackend.dtos.bookmark.BookmarkCreateRequest;
import dev.ioliver.bmarkbackend.dtos.bookmark.BookmarkResponse;
import dev.ioliver.bmarkbackend.mappers.BookmarkMapper;
import dev.ioliver.bmarkbackend.repositories.BookmarkRepository;
import lombok.RequiredArgsConstructor;
import org.apache.coyote.BadRequestException;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;
import org.springframework.validation.annotation.Validated;

@Service
@Validated
@RequiredArgsConstructor
public class BookmarkService {
  private final BookmarkRepository bookmarkRepository;
  private final BookmarkMapper bookmarkMapper;

  @Transactional(readOnly = true)
  public BookmarkResponse findById(String id) throws BadRequestException {
    Bookmark bookmark = bookmarkRepository.findById(id)
        .orElseThrow(() -> new BadRequestException("Bookmark not found: " + id));

    return bookmarkMapper.toDto(bookmark);
  }

  @Transactional(readOnly = true)
  public Page<BookmarkResponse> filterAllByTitle(String title, Pageable pageable) {
    return bookmarkRepository.filterOrReturnAllByTitle(title, pageable).map(bookmarkMapper::toDto);
  }

  @Transactional
  public BookmarkResponse save(BookmarkCreateRequest createRequest) throws BadRequestException {
    if (bookmarkRepository.existsByTitleIgnoreCase(createRequest.title()))
      throw new BadRequestException("Bookmark already exists: " + createRequest.title());

    Bookmark bookmark = bookmarkMapper.toEntity(createRequest);
    return bookmarkMapper.toDto(bookmarkRepository.save(bookmark));
  }

  @Transactional
  public void delete(String id) throws BadRequestException {
    BookmarkResponse bookmarkResponse = findById(id);
    bookmarkRepository.deleteById(bookmarkResponse.id());
  }
}
