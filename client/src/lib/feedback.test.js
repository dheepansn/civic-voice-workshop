import { describe, expect, it } from "vitest";
import { limitFeedbackMessage, MAX_FEEDBACK_LENGTH } from "./feedback";

describe("limitFeedbackMessage", () => {
  it("keeps messages at or below the feedback limit", () => {
    const message = "a".repeat(MAX_FEEDBACK_LENGTH);

    expect(limitFeedbackMessage(message)).toBe(message);
  });

  it("truncates messages beyond the feedback limit", () => {
    const message = "a".repeat(MAX_FEEDBACK_LENGTH + 1);

    expect(limitFeedbackMessage(message)).toHaveLength(MAX_FEEDBACK_LENGTH);
  });
});
