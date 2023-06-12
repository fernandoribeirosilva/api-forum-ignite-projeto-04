import { randomUUID } from "node:crypto"

export class Entity<props> {
  private _id: string
  protected props: props

  get id() {
    return this._id
  }

  constructor(props: props, id?: string) {
    this._id = id ?? randomUUID()
    this.props = props
  }
}