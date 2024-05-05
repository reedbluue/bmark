package dev.ioliver.bmarkbackend.dtos.bookmark;

import jakarta.validation.constraints.NotEmpty;
import jakarta.validation.constraints.NotNull;
import lombok.Builder;
import org.hibernate.validator.constraints.Length;
import org.hibernate.validator.constraints.URL;

@Builder
public record BookmarkCreateRequest(

    @NotNull @NotEmpty @Length(max = 255) String title,

    String description,

    @NotNull @NotEmpty @URL String url

) {
}
