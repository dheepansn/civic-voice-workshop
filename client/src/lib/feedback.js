export const MAX_FEEDBACK_LENGTH = 500;

export function limitFeedbackMessage(message) {
  return message.slice(0, MAX_FEEDBACK_LENGTH);
}
