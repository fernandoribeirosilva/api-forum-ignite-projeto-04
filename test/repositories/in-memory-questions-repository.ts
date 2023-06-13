import { IQuestionRepository } from '@/domain/forum/application/repositories/IQuestion-repository'
import { Question } from '@/domain/forum/enterprise/entities/question'

export class InMemoryQuestionsRepository implements IQuestionRepository {
  public items: Question[] = []

  async create(question: Question) {
    this.items.push(question)
  }
}
