import type { QuestionsRepositoryInterface } from "@/domain/forum/application/repositories";
import type { Question } from "@/domain/forum/enterprise/entitites";

export class QuestionsRepository implements QuestionsRepositoryInterface {
  items: Question[] = [];

  async findById(id: string): Promise<Question | null> {
    const question = this.items.find((item) => item.id.toString() === id);

    if (!question) {
      return null;
    }

    return question;
  }

  async findBySlug(slug: string): Promise<Question | null> {
    const question = this.items.find((item) => item.slug.value === slug);

    if (!question) return null;

    return question;
  }

  async create(question: Question): Promise<void> {
    this.items.push(question);
  }

  async delete(question: Question) {
    const itemIndex = this.items.findIndex((item) => item.id === question.id);

    this.items.splice(itemIndex, 1);
  }
}
