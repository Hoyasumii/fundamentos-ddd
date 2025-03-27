import { UniqueEntityId } from "@/core/entities";
import { Question } from "@/domain/forum/enterprise/entitites";
import type { QuestionsRepositoryInterface } from "@/domain/forum/application/repositories";
import type { Service } from "@/core/types";

interface CreateQuestionProps {
  authorId: string;
  title: string;
  content: string;
}

export class CreateQuestionUseCase
  implements
    Service<
      QuestionsRepositoryInterface,
      CreateQuestionProps,
      { question: Question }
    >
{
  constructor(public repository: QuestionsRepositoryInterface) {}

  async run({ authorId, content, title }: CreateQuestionProps) {
    const question = Question.create({
      authorId: new UniqueEntityId(authorId),
      content,
      title,
    });

    await this.repository.create(question);

    return { question };
  }
}
