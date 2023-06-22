import { defineStore } from 'pinia'

import { useStorage } from '@vueuse/core'
import {QuizContent} from "./types";

export const useSettingsStore = defineStore('settings', {
  state: () => ({
    theme: 'light',
    reoccurrencesIfBad: useStorage('reoccurrencesIfBad', 0),
    reoccurrencesOnStart: useStorage('reoccurrencesOnStart', 2),
    maxReoccurrences:  useStorage('maxReoccurrences', 10),
  }),
  actions: {
    setTheme(newTheme) {
      this.theme = newTheme
    },
    setReoccurrencesIfBad(value) {
      this.reoccurrencesIfBad = value
    },
    setReoccurrencesOnStart(value) {
      this.reoccurrencesOnStart = value
    },
    setMaxReoccurrences(value) {
      this.maxReoccurrences = value
    }
  }
})

export const useSavesStore = defineStore('saves', {
  state: () => ({
    saves: useStorage('saves', {})
  }),
  actions: {
    addOccurrence(saveName: string, tag: string) {

    },
    removeOccurrence(saveName: string, tag: string) {

    },
    clearSave(saveName: string) {

    }
  }
})

interface QuizState {
  currentQuiz: QuizContent | null,
  quizStartedTimestamp: Date | null,
}

export const useQuizStore = defineStore('quiz', {
  state: () => ({
    currentQuiz: null,
    quizStartedTimestamp: null,
  } as QuizState),
  actions: {
    setQuizFromRepository(repository: string, quizTag: string) {

    },
    setQuizFromZipFile(file: unknown, quizTag: string) {

    }
  }
})