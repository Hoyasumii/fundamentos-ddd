import { UniqueEntityId } from "@/core/entities";
import {
  Question,
  type QuestionProps,
} from "@/domain/forum/enterprise/entitites";

export function makeQuestion(override: Partial<QuestionProps> = {}) {
  const question = Question.create({
    authorId: new UniqueEntityId(),
    title: "Example",
    content: "Example content",
    ...override,
  });

  return question;
}
