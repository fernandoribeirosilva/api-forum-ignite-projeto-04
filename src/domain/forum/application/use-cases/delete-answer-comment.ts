import { Either, left, right } from '@/core/either'
import { IAnswerCommentsRepository } from '../repositories/IAnswer-comments-repository'
import { NotAllowedError } from './errors/not-allowed-error'
import { ResourceNotFoundError } from './errors/resource-not-found-error'

interface DeleteAnswerCommentUseCaseRequest {
  authorId: string
  answerCommentId: string
}

type DeleteAnswerCommentUseCaseRequestResponse = Either<
  ResourceNotFoundError | NotAllowedError,
  {}
>

export class DeleteAnswerCommentUseCase {
  constructor(private answerCommentsRepository: IAnswerCommentsRepository) {}

  async execute({
    authorId,
    answerCommentId,
  }: DeleteAnswerCommentUseCaseRequest): Promise<DeleteAnswerCommentUseCaseRequestResponse> {
    const answerComment = await this.answerCommentsRepository.findById(
      answerCommentId,
    )

    if (!answerComment) {
      return left(new ResourceNotFoundError())
    }

    if (answerComment.authorId.toString() !== authorId) {
      return left(new NotAllowedError())
    }

    await this.answerCommentsRepository.delete(answerComment)

    return right({})
  }
}
