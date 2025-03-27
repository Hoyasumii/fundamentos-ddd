import { Answer } from "@/domain/forum/enterprise/entitites";

export interface AnswersRepositoryInterface {
  findById(id: string): Promise<Answer | null>;
  create(answer: Answer): Promise<void>;
  delete(question: Answer): Promise<void>;
  save(answer: Answer): Promise<void>;
}
