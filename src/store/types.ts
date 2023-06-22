
export interface Question {
    contentType: 'text' | 'image',
    content: string,
    type: 'single' | 'multiple',
    answers: Answer[],
}

export interface Answer {
    id: number,
    type: 'text' | 'image',
    content: string,
    isCorrect: boolean,
}

export interface QuizSave {
    numberOfLearnedQuestions: 0,
    numberOfCorrectAnswers: 0,
    numberOfBadAnswers: 0,
    time: 0,
    reoccurrences: Record<string, number>,
}

export interface QuizContent {
    tag: string,
    questions: Question[],
}
