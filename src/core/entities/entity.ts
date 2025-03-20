import { UniqueEntityId } from "./unique-entity-id";

export class Entity<PropsType extends object> {
  #id: UniqueEntityId;
  protected props: PropsType;

  constructor(props: PropsType, id?: string) {
    this.props = props;
    this.#id = new UniqueEntityId(id);
  }

  get id(): UniqueEntityId {
    return this.#id;
  }
}
