import { QuestionsRepository } from "~/test/repositories";
import { GetQuestionBySlugUseCase } from "./get-question-by-slug";
import { makeQuestion } from "~/test/factories";
import { Slug } from "@/domain/forum/enterprise/entitites/value-object";

let repo: QuestionsRepository;
let sut: GetQuestionBySlugUseCase;

describe("Get Question By Slug", () => {
  beforeEach(() => {
    repo = new QuestionsRepository();
    sut = new GetQuestionBySlugUseCase(repo);
  });

  it("should be able to get a question by slug", async () => {
    const newQuestion = makeQuestion({
      slug: Slug.create("example-question"),
    });

    await repo.create(newQuestion);

    const { question } = await sut.run({
      slug: "example-question",
    });

    expect(question.id).toBeTruthy();
    expect(question.title).toEqual(newQuestion.title);
  });
});
