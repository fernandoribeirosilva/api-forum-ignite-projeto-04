import { Answer } from 'src/domain/forum/enterprise/entities/answer'

export interface IAnswerRepository {
  findById(id: string): Promise<Answer | null>
  create(answer: Answer): Promise<void>
  delete(answer: Answer): Promise<void>
}
