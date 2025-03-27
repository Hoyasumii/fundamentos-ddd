import type { Question } from "@/domain/forum/enterprise/entitites";

export interface QuestionsRepositoryInterface {
  findById(id: string): Promise<Question | null>;
  findBySlug(slug: string): Promise<Question | null>;
  delete(question: Question): Promise<void>;
  create(question: Question): Promise<void>;
}
