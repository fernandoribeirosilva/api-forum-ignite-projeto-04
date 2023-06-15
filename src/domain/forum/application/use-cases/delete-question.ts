import { IQuestionRepository } from '../repositories/IQuestion-repository'

interface DeleteQuestionUseCaseRequest {
  authorId: string
  questionId: string
}

interface DeleteQuestionUseCaseRequestResponse { }

export class DeleteQuestionUseCase {
  constructor(private questionRepository: IQuestionRepository) { }

  async execute({
    questionId,
    authorId,
  }: DeleteQuestionUseCaseRequest): Promise<DeleteQuestionUseCaseRequestResponse> {
    const question = await this.questionRepository.findById(questionId)

    if (!question) {
      throw new Error('Question not found.')
    }

    if (authorId !== question.authorId.toString()) {
      throw new Error('Not allowed.')
    }

    await this.questionRepository.delete(question)

    return {}
  }
}
