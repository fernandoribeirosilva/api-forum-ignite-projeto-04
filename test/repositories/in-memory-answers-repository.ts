import { IAnswerRepository } from '@/domain/forum/application/repositories/IAnswers-repository'
import { Answer } from '@/domain/forum/enterprise/entities/answer'

export class InMemoryAnswersRepository implements IAnswerRepository {
  public items: Answer[] = []

  async create(answer: Answer) {
    this.items.push(answer)
  }
}
