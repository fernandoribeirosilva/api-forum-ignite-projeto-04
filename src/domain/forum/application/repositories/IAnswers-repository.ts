import { PaginationParams } from '@/core/repositories/pagination-params'
import { Answer } from 'src/domain/forum/enterprise/entities/answer'

export interface IAnswerRepository {
  findById(id: string): Promise<Answer | null>
  findManyByQuestionId(
    questionId: string,
    params: PaginationParams,
  ): Promise<Answer[]>
  save(answer: Answer): Promise<void>
  create(answer: Answer): Promise<void>
  delete(answer: Answer): Promise<void>
}
