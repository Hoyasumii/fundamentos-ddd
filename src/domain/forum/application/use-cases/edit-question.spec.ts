import { EditQuestionUseCase } from "./edit-question";

import { QuestionsRepository } from "~/test/repositories";

import { makeQuestion } from "test/factories/make-question";

import { UniqueEntityId } from "@/core/entities/unique-entity-id";

let inMemoryQuestionsRepository: QuestionsRepository;

let sut: EditQuestionUseCase;

describe("Edit Question", () => {
  beforeEach(() => {
    inMemoryQuestionsRepository = new QuestionsRepository();

    sut = new EditQuestionUseCase(inMemoryQuestionsRepository);
  });

  it("should be able to edit a question", async () => {
    const newQuestion = makeQuestion(
      {
        authorId: new UniqueEntityId("author-1"),
      },

      new UniqueEntityId("question-1")
    );

    await inMemoryQuestionsRepository.create(newQuestion);

    await sut.execute({
      questionId: newQuestion.id.toValue(),

      authorId: "author-1",

      title: "Pergunta teste",

      content: "Conteúdo teste",
    });

    expect(inMemoryQuestionsRepository.items[0]).toMatchObject({
      title: "Pergunta teste",

      content: "Conteúdo teste",
    });
  });

  it("should not be able to edit a question from another user", async () => {
    const newQuestion = makeQuestion(
      {
        authorId: new UniqueEntityId("author-1"),
      },

      new UniqueEntityId("question-1")
    );

    await inMemoryQuestionsRepository.create(newQuestion);

    expect(() => {
      return sut.execute({
        questionId: newQuestion.id.toValue(),

        authorId: "author-2",

        title: "Pergunta teste",

        content: "Conteúdo teste",
      });
    }).rejects.toBeInstanceOf(Error);
  });
});
