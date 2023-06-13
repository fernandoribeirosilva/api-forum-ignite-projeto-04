import { AnswerRepository } from 'src/domain/forum/application/repositories/IAnswers-repository'
import { AnswerQuestionUseCase } from 'src/domain/forum/application/use-cases/answer-question'
import { Answer } from 'src/domain/forum/enterprise/entities/answer'

const fakeAnswerRepository: AnswerRepository = {
  create: async (answer: Answer) => { },
}

it('create an answer', async () => {
  const answerQuestion = new AnswerQuestionUseCase(fakeAnswerRepository)

  const answer = await answerQuestion.execute({
    questionId: '1',
    instructorId: '1',
    content: 'Nova resposta',
  })

  expect(answer.content).toEqual('Nova resposta')
})
