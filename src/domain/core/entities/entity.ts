import { UniqueEntityID } from "./unique-entity-id"

export class Entity<props> {
  private _id: UniqueEntityID
  protected props: props

  get id() {
    return this._id
  }

  constructor(props: props, id?: string) {
    this._id = new UniqueEntityID(id)
    this.props = props
  }
}