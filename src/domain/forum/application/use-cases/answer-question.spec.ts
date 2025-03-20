import { AnswerQuestionUseCase } from "./answer-question";
import { UniqueEntityId } from "@/core/entities/unique-entity-id";
import { AnswersRepository } from "~/test/repositories";

let repo: AnswersRepository;
let sut: AnswerQuestionUseCase;

describe("Answer a Question Suite", () => {
  beforeEach(() => {
    repo = new AnswersRepository();
    sut = new AnswerQuestionUseCase(repo);
  });

  it("should create an answer", async () => {
    const answer = await sut.run({
      questionId: new UniqueEntityId("1"),
      instructorId: new UniqueEntityId("1"),
      content: "Nova resposta",
    });

    expect(answer.content).toEqual("Nova resposta");
    expect(repo.items.length).toBe(1);
  });
});
