import { CreateQuestionUseCase } from "./create-question";
import { QuestionsRepository } from "~/test/repositories";

let repo: QuestionsRepository;
let sut: CreateQuestionUseCase; // System Under Test

describe("Create Question Suite", () => {
  beforeEach(() => {
    repo = new QuestionsRepository();
    sut = new CreateQuestionUseCase(repo);
  });

  it("should be able to create a question", async () => {
    const { question } = await sut.run({
      authorId: "1",
      title: "Nova pergunta",
      content: "Conteúdo da pergunta",
    });

    expect(question.id).toBeTruthy();
    expect(repo.items.length).toBe(1);
  });
});
