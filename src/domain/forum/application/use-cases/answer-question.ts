import type { UniqueEntityId } from "@/core/entities";
import { Answer } from "@/domain/forum/enterprise/entitites";
import type { AnswersRepositoryInterface } from "@/domain/forum/application/repositories";
import type { Service } from "@/core/types";

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
