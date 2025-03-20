import { QuestionsRepository } from "~/test/repositories";
import { GetQuestionBySlugUseCase } from "./get-question-by-slug";

let repo: QuestionsRepository;
let sut: GetQuestionBySlugUseCase;

describe("Get Question By Slug", () => {
  beforeEach(() => {
    repo = new QuestionsRepository();
    sut = new GetQuestionBySlugUseCase(repo);
  });

  it("should be able to get a question by slug", async () => {
    //   const newQuestion = makeQuestion({
    //     slug: Slug.create('example-question'),
    //   })
    //   await inMemoryQuestionsRepository.create(newQuestion)
    //   const { question } = await sut.execute({
    //     slug: 'example-question',
    //   })
    //   expect(question.id).toBeTruthy()
    //   expect(question.title).toEqual(newQuestion.title)
    // })
  });
});
