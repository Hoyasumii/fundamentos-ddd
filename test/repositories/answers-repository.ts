import type { AnswersRepositoryInterface } from "@/domain/forum/application/repositories";
import type { Answer } from "@/domain/forum/enterprise/entitites";

export class AnswersRepository implements AnswersRepositoryInterface {
  items: Answer[] = [];

  async create(answer: Answer): Promise<void> {
    this.items.push(answer);
  }

  async findById(id: string): Promise<Answer | null> {
    const targetAnswer = this.items.find((item) => item.id.toString() === id);

    if (!targetAnswer) return null;

    return targetAnswer;
  }

  async delete(answer: Answer): Promise<void> {
    const targetAnswer = this.items.findIndex(
      (item) => item.id.toString() === answer.id.toString()
    );

    this.items.splice(targetAnswer, 1);
  }

  async save(answer: Answer) {
    const itemIndex = this.items.findIndex((item) => item.id === answer.id);

    this.items[itemIndex] = answer;
  }
}
