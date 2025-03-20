import type { QuestionsRepositoryInterface } from "@/domain/forum/application/repositories";
import type { Question } from "@/domain/forum/enterprise/entitites";

export class QuestionsRepository implements QuestionsRepositoryInterface {
  items: Question[] = [];

  async create(question: Question): Promise<void> {
    this.items.push(question);
  }

  async findBySlug(slug: string): Promise<Question | null> {
    const question = this.items.find((item) => item.slug.value === slug);

    if (!question) return null;

    return question;
  }
}
