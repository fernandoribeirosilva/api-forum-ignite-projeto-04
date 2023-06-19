import { Either, left, right } from '@/core/either'
import { Question } from '../../enterprise/entities/question'
import { IQuestionRepository } from '../repositories/IQuestion-repository'
import { NotAllowedError } from './errors/not-allowed-error'
import { ResourceNotFoundError } from './errors/resource-not-found-error'

interface EditQuestionUseCaseRequest {
  authorId: string
  questionId: string
  title: string
  content: string
}

type EditQuestionUseCaseRequestResponse = Either<
  ResourceNotFoundError | NotAllowedError,
  {
    question: Question
  }
>

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
      return left(new ResourceNotFoundError())
    }

    if (authorId !== question.authorId.toString()) {
      return left(new NotAllowedError())
    }

    question.title = title
    question.content = content

    await this.questionRepository.save(question)

    return right({
      question,
    })
  }
}
