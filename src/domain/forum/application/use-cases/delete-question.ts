import type { QuestionsRepositoryInterface } from "../repositories";

interface DeleteQuestionUseCaseRequest {
  authorId: string;

  questionId: string;
}

// eslint-disable-next-line @typescript-eslint/no-empty-object-type
interface DeleteQuestionUseCaseResponse {}

export class DeleteQuestionUseCase {
  constructor(private questionsRepository: QuestionsRepositoryInterface) {}

  async execute({
    questionId,

    authorId,
  }: DeleteQuestionUseCaseRequest): Promise<DeleteQuestionUseCaseResponse> {
    const question = await this.questionsRepository.findById(questionId);

    if (!question) {
      throw new Error("Question not found.");
    }

    if (authorId !== question.authorId.toString()) {
      throw new Error("Not allowed.");
    }

    await this.questionsRepository.delete(question);

    return {};
  }
}
