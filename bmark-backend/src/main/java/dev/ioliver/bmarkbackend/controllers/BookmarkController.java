package dev.ioliver.bmarkbackend.controllers;

import dev.ioliver.bmarkbackend.dtos.bookmark.BookmarkCreateRequest;
import dev.ioliver.bmarkbackend.dtos.bookmark.BookmarkResponse;
import dev.ioliver.bmarkbackend.services.BookmarkService;
import io.swagger.v3.oas.annotations.Operation;
import io.swagger.v3.oas.annotations.media.Content;
import io.swagger.v3.oas.annotations.responses.ApiResponse;
import io.swagger.v3.oas.annotations.tags.Tag;
import jakarta.validation.Valid;
import lombok.RequiredArgsConstructor;
import org.apache.coyote.BadRequestException;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.ResponseStatus;
import org.springframework.web.bind.annotation.RestController;

@RestController
@Tag(name = "Bookmark")
@RequiredArgsConstructor
@RequestMapping("/bookmark")
public class BookmarkController {
  private final BookmarkService bookmarkService;

  @GetMapping(path = "/{id}")
  @ResponseStatus(HttpStatus.OK)
  @ApiResponse(responseCode = "400", description = "Bad Request", content = @Content())
  @Operation(description = "This endpoint returns a bookmark by ID",
      summary = "Find bookmark by ID")
  public BookmarkResponse findById(@PathVariable String id) throws BadRequestException {
    return bookmarkService.findById(id);
  }

  @GetMapping(path = "/filter")
  @ResponseStatus(HttpStatus.OK)
  @Operation(description = "This endpoint returns all bookmarks", summary = "Find all bookmarks")
  public Page<BookmarkResponse> filterAllByTitle(@RequestParam(required = false) String title,
      Pageable pageable) {
    return bookmarkService.filterAllByTitle(title, pageable);
  }

  @PostMapping
  @ResponseStatus(HttpStatus.CREATED)
  @ApiResponse(responseCode = "400", description = "Bad Request", content = @Content())
  @Operation(description = "This endpoint creates a new bookmark", summary = "Create new bookmark")
  public BookmarkResponse save(@RequestBody @Valid BookmarkCreateRequest createRequest)
      throws BadRequestException {
    return bookmarkService.save(createRequest);
  }

  @ResponseStatus(HttpStatus.NO_CONTENT)
  @DeleteMapping(path = "/{id}")
  @ApiResponse(responseCode = "400", description = "Bad Request", content = @Content())
  @Operation(description = "This endpoint deletes a bookmark by ID",
      summary = "Delete bookmark by ID")
  public void delete(@PathVariable String id) throws BadRequestException {
    bookmarkService.delete(id);
  }
}
