import { Answer } from "../entitites";

export interface AnswersRepositoryInterface {
  create(answer: Answer): Promise<void>;
}
