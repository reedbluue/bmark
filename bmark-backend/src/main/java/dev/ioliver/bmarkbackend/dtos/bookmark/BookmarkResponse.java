package dev.ioliver.bmarkbackend.dtos.bookmark;

import lombok.Builder;

@Builder
public record BookmarkResponse(

    String id,

    String title,

    String description,

    String url

) {
}
