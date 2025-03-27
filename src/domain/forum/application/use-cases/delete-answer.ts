import type { AnswersRepositoryInterface } from "../repositories";

interface DeleteanswerUseCaseRequest {
  authorId: string;

  answerId: string;
}

// eslint-disable-next-line @typescript-eslint/no-empty-object-type
interface DeleteAnswerUseCaseResponse {}

export class DeleteAnswerUseCase {
  constructor(private repository: AnswersRepositoryInterface) {}

  async execute({
    answerId,

    authorId,
  }: DeleteanswerUseCaseRequest): Promise<DeleteAnswerUseCaseResponse> {
    const answer = await this.repository.findById(answerId);

    if (!answer) {
      throw new Error("answer not found.");
    }

    if (authorId !== answer.authorId.toString()) {
      throw new Error("Not allowed.");
    }

    await this.repository.delete(answer);

    return {};
  }
}
