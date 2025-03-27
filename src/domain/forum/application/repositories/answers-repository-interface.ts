import { Answer } from "@/domain/forum/enterprise/entitites";

export interface AnswersRepositoryInterface {
  create(answer: Answer): Promise<void>;
}
