import { UniqueEntityID } from './unique-entity-id'

export class Entity<props> {
  private _id: UniqueEntityID
  protected props: props

  get id() {
    return this._id
  }

  protected constructor(props: props, id?: UniqueEntityID) {
    this._id = id ?? new UniqueEntityID()
    this.props = props
  }
}
