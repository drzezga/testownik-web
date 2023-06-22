import store from '../store'
export default {
  prepareQuizObject (questions, location) {
    const quiz = {
      location: location.replace(/\\/g, '/'),
      numberOfQuestions: questions.length,
      numberOfLearnedQuestions: 0,
      numberOfCorrectAnswers: 0,
      numberOfBadAnswers: 0,
      time: 0,
      reoccurrences: questions.map(q => {
        return {
          tag: q.tag,
          value: store.state.reoccurrencesOnStart
        }
      }),
      questions: questions
    }
    return quiz
  },
  async prepareQuizObjectWithSave (questions, location) {
    const quizString = await readFileAsync(location + '/save.json', 'utf8')
    let quiz = JSON.parse(quizString)
    quiz.questions = questions
    quiz.location = location
    return quiz
  }
}
