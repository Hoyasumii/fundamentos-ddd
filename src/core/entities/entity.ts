import { UniqueEntityId } from "./unique-entity-id";

export class Entity<PropsType extends object> {
  #id: UniqueEntityId;
  protected props: PropsType;

  constructor(props: PropsType, id?: UniqueEntityId) {
    this.props = props;
    this.#id = id ?? new UniqueEntityId();
  }

  get id(): UniqueEntityId {
    return this.#id;
  }
}
