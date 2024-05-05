package dev.ioliver.bmarkbackend.domain.entities;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
import org.springframework.data.mongodb.core.index.Indexed;
import org.springframework.data.mongodb.core.mapping.Document;

@Data
@NoArgsConstructor
@AllArgsConstructor
@Document("bookmarks")
public class Bookmark {
  private String id;
  private String url;
  @Indexed(unique = true) private String title;
  private String description;
}
