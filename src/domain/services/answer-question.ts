import { UniqueEntityId } from "@/core/entities/unique-entity-id";
import { Answer } from "../entitites";
import { AnswersRepositoryInterface } from "../repositories";
import { Service } from "./service";

interface AnswerQuestionProps {
  instructorId: UniqueEntityId;
  questionId: UniqueEntityId;
  content: string;
}

export class AnswerQuestionService
  implements Service<AnswersRepositoryInterface, AnswerQuestionProps, Answer>
{
  constructor(public repository: AnswersRepositoryInterface) {}

  async run({ instructorId, questionId, content }: AnswerQuestionProps) {
    const answer = new Answer({
      content,
      questionId,
      authorId: instructorId,
      createdAt: new Date(),
    });

    return answer;
  }
}
