import { expect, test } from "vitest";
import { AnswerQuestionService } from "./answer-question";
import { Answer } from "../entitites";
import { AnswersRepositoryInterface } from "../repositories";
import { UniqueEntityId } from "@/core/entities/unique-entity-id";

test("create an answer", async () => {
  const fakeAnswersRepository: AnswersRepositoryInterface = {
    create: async (_: Answer) => {
      return;
    },
  };

  const answerQuestion = new AnswerQuestionService(fakeAnswersRepository);

  const answer = await answerQuestion.run({
    questionId: new UniqueEntityId("1"),
    instructorId: new UniqueEntityId("1"),
    content: "Nova resposta",
  });

  expect(answer.content).toEqual("Nova resposta");
});
