import type { Question } from "@/domain/forum/enterprise/entitites";

export interface QuestionsRepositoryInterface {
  create(question: Question): Promise<void>;
  findBySlug(slug: string): Promise<Question | null>;
}
