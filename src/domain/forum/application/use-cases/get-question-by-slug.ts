import type { Service } from "@/core/types";
import type { QuestionsRepositoryInterface } from "@/domain/forum/application/repositories";
import type { Question } from "@/domain/forum/enterprise/entitites";

type GetQuestionBySlugProps = {
  slug: string;
};

type GetQuestionBySlugResponse = {
  question: Question;
};

export class GetQuestionBySlugUseCase
  implements
    Service<
      QuestionsRepositoryInterface,
      GetQuestionBySlugProps,
      GetQuestionBySlugResponse
    >
{
  constructor(public repository: QuestionsRepositoryInterface) {}

  async run({ slug }: GetQuestionBySlugProps) {
    const question = await this.repository.findBySlug(slug);

    if (!question) {
      throw new Error("Question not found");
    }

    return {
      question,
    };
  }
}
