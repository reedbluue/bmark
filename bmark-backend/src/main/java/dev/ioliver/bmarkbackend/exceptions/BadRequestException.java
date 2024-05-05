package dev.ioliver.bmarkbackend.exceptions;

import org.springframework.http.HttpStatus;

public class BadRequestException extends DefaultException {
  public BadRequestException() {
    super("Bad request", HttpStatus.BAD_REQUEST);
  }

  public BadRequestException(String message) {
    super(message, HttpStatus.BAD_REQUEST);
  }
}
