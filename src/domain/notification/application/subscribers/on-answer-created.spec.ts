import { makeAnswer } from 'test/factories/make-answer'
import { InMemoryAnswerAttachmentsRepository } from 'test/repositories/in-memory-answer-attachment-repository'
import { InMemoryAnswersRepository } from 'test/repositories/in-memory-answers-repository'
import { OnAnswerCreated } from './on-answer-created'

let inMemoryANswerAttachmentsRepository: InMemoryAnswerAttachmentsRepository
let inMemoryAnswersRepository: InMemoryAnswersRepository

describe('On Answer Created', () => {
  beforeEach(() => {
    inMemoryANswerAttachmentsRepository =
      new InMemoryAnswerAttachmentsRepository()

    inMemoryAnswersRepository = new InMemoryAnswersRepository(
      inMemoryANswerAttachmentsRepository,
    )
  })

  it('should send a notification when an answer is created', async () => {
    const onAnswerCreated = new OnAnswerCreated()

    const answer = makeAnswer()

    inMemoryAnswersRepository.create(answer)
  })
})
