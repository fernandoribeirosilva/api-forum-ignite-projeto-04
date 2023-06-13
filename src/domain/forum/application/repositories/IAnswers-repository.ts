import { Answer } from 'src/domain/forum/enterprise/entities/answer'

export interface AnswerRepository {
  create(answer: Answer): Promise<void>
}
