import { DeleteQuestionUseCase } from "./delete-question";
import { QuestionsRepository } from "~/test/repositories";
import { makeQuestion } from "test/factories/make-question";
import { UniqueEntityId } from "@/core/entities";

let inMemoryQuestionsRepository: QuestionsRepository;
let sut: DeleteQuestionUseCase;

describe("Delete Question", () => {
  beforeEach(() => {
    inMemoryQuestionsRepository = new QuestionsRepository();

    sut = new DeleteQuestionUseCase(inMemoryQuestionsRepository);
  });

  it("should be able to delete a question", async () => {
    const newQuestion = makeQuestion(
      {
        authorId: new UniqueEntityId("author-1"),
      },

      new UniqueEntityId("question-1")
    );

    await inMemoryQuestionsRepository.create(newQuestion);

    await sut.execute({
      questionId: "question-1",

      authorId: "author-1",
    });

    expect(inMemoryQuestionsRepository.items).toHaveLength(0);
  });

  it("should not be able to delete a question from another user", async () => {
    const newQuestion = makeQuestion(
      {
        authorId: new UniqueEntityId("author-1"),
      },

      new UniqueEntityId("question-1")
    );

    await inMemoryQuestionsRepository.create(newQuestion);

    await expect(() => {
      return sut.execute({
        questionId: "question-1",

        authorId: "author-2",
      });
    }).rejects.toBeInstanceOf(Error);
  });
});
