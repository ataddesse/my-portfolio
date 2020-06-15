package com.google.sps.data;

/** An item on with a content and sentiment AI score */
public final class Task {

  private final String content;
  private final double score;

  public Task(String content, double score) {
    this.content = content;
    this.score = score;
  }

}