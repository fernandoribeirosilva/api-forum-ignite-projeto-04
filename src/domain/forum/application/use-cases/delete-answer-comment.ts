import { IAnswerCommentsRepository } from '../repositories/IAnswer-comments-repository'

interface DeleteAnswerCommentUseCaseRequest {
  authorId: string
  answerCommentId: string
}

interface DeleteAnswerCommentUseCaseRequestResponse {}

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
      throw new Error('Answer comment not found.')
    }

    if (answerComment.authorId.toString() !== authorId) {
      throw new Error('not allowed.')
    }

    await this.answerCommentsRepository.delete(answerComment)

    return {}
  }
}
