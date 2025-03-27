import { DeleteAnswerUseCase } from "./delete-answer";
import { AnswersRepository } from "~/test/repositories";
import { makeAnswer } from "test/factories";
import { UniqueEntityId } from "@/core/entities";

let inMemoryanswersRepository: AnswersRepository;
let sut: DeleteAnswerUseCase;

describe("Delete answer", () => {
  beforeEach(() => {
    inMemoryanswersRepository = new AnswersRepository();

    sut = new DeleteAnswerUseCase(inMemoryanswersRepository);
  });

  it("should be able to delete a answer", async () => {
    const newanswer = makeAnswer(
      {
        authorId: new UniqueEntityId("author-1"),
      },

      new UniqueEntityId("answer-1")
    );

    await inMemoryanswersRepository.create(newanswer);

    await sut.execute({
      answerId: "answer-1",

      authorId: "author-1",
    });

    expect(inMemoryanswersRepository.items).toHaveLength(0);
  });

  it("should not be able to delete a answer from another user", async () => {
    const newanswer = makeAnswer(
      {
        authorId: new UniqueEntityId("author-1"),
      },

      new UniqueEntityId("answer-1")
    );

    await inMemoryanswersRepository.create(newanswer);

    await expect(() => {
      return sut.execute({
        answerId: "answer-1",

        authorId: "author-2",
      });
    }).rejects.toBeInstanceOf(Error);
  });
});
