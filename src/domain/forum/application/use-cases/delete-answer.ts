import { Either, left, right } from '@/core/either'
import { IAnswerRepository } from '../repositories/IAnswers-repository'
import { NotAllowedError } from './errors/not-allowed-error'
import { ResourceNotFoundError } from './errors/resource-not-found-error'

interface DeleteAnswerUseCaseRequest {
  authorId: string
  answerId: string
}

type DeleteAnswerUseCaseRequestResponse = Either<
  ResourceNotFoundError | NotAllowedError,
  {}
>

export class DeleteAnswerUseCase {
  constructor(private answerRepository: IAnswerRepository) {}

  async execute({
    answerId,
    authorId,
  }: DeleteAnswerUseCaseRequest): Promise<DeleteAnswerUseCaseRequestResponse> {
    const answer = await this.answerRepository.findById(answerId)

    if (!answer) {
      return left(new ResourceNotFoundError())
    }

    if (authorId !== answer.authorId.toString()) {
      return left(new NotAllowedError())
    }

    await this.answerRepository.delete(answer)

    return right({})
  }
}
