import { IQuestionRepository } from '../repositories/IQuestion-repository'

interface EditQuestionUseCaseRequest {
  authorId: string
  questionId: string
  title: string
  content: string
}

interface EditQuestionUseCaseRequestResponse {}

export class EditQuestionUseCase {
  constructor(private questionRepository: IQuestionRepository) {}

  async execute({
    questionId,
    authorId,
    title,
    content,
  }: EditQuestionUseCaseRequest): Promise<EditQuestionUseCaseRequestResponse> {
    const question = await this.questionRepository.findById(questionId)

    if (!question) {
      throw new Error('Question not found.')
    }

    if (authorId !== question.authorId.toString()) {
      throw new Error('Not allowed.')
    }

    question.title = title
    question.content = content

    await this.questionRepository.save(question)

    return {}
  }
}
