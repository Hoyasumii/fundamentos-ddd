import type { AnswersRepositoryInterface } from "@/domain/forum/application/repositories";
import type { Answer } from "@/domain/forum/enterprise/entitites";

export class AnswersRepository implements AnswersRepositoryInterface {
  items: Answer[] = [];

  async create(answer: Answer): Promise<void> {
    this.items.push(answer);
  }
}
