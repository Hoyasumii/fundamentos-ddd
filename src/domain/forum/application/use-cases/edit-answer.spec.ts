import { EditAnswerUseCase } from "./edit-answer";

import { AnswersRepository } from "~/test/repositories";

import { makeAnswer } from "test/factories/make-answer";

import { UniqueEntityId } from "@/core/entities/unique-entity-id";

let inMemoryAnswersRepository: AnswersRepository;

let sut: EditAnswerUseCase;

describe("Edit Answer", () => {
  beforeEach(() => {
    inMemoryAnswersRepository = new AnswersRepository();

    sut = new EditAnswerUseCase(inMemoryAnswersRepository);
  });

  it("should be able to edit a answer", async () => {
    const newAnswer = makeAnswer(
      {
        authorId: new UniqueEntityId("author-1"),
      },

      new UniqueEntityId("answer-1")
    );

    await inMemoryAnswersRepository.create(newAnswer);

    await sut.execute({
      answerId: newAnswer.id.toValue(),

      authorId: "author-1",

      content: "Conteúdo teste",
    });

    expect(inMemoryAnswersRepository.items[0]).toMatchObject({
      content: "Conteúdo teste",
    });
  });

  it("should not be able to edit a answer from another user", async () => {
    const newAnswer = makeAnswer(
      {
        authorId: new UniqueEntityId("author-1"),
      },

      new UniqueEntityId("answer-1")
    );

    await inMemoryAnswersRepository.create(newAnswer);

    expect(() => {
      return sut.execute({
        answerId: newAnswer.id.toValue(),

        authorId: "author-2",

        content: "Conteúdo teste",
      });
    }).rejects.toBeInstanceOf(Error);
  });
});
