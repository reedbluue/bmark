package dev.ioliver.bmarkbackend.domain.entities;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;

@Data
@NoArgsConstructor
@AllArgsConstructor
@Document(collation = "bookmarks")
public class Bookmark {
  private String id;
  private String url;
  private String title;
  private String description;
}
