package dev.ioliver.bmarkbackend.repositories;

import dev.ioliver.bmarkbackend.domain.entities.Bookmark;
import java.util.Optional;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.data.mongodb.repository.Query;

public interface BookmarkRepository extends MongoRepository<Bookmark, String> {
  @Query("{'_id': ?0}")
  Optional<Bookmark> optionalById(String id);

  @Query("{'title': { $regex: ?0, $options: 'i' } }")
  Page<Bookmark> filterALlByTitle(String title, Pageable pageable);

  default Page<Bookmark> filterOrReturnAllByTitle(String title, Pageable pageable) {
    if (title == null || title.isEmpty()) {
      return findAll(pageable);
    } else {
      return filterALlByTitle(title, pageable);
    }
  }

  boolean existsByTitleIgnoreCase(String title);
}
