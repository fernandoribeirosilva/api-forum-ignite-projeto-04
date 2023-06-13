import { Answer } from 'src/domain/forum/enterprise/entities/answer'

export interface IAnswerRepository {
  create(answer: Answer): Promise<void>
}
