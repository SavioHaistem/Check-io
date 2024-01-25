import { defineStore } from 'pinia'

export const usethemeStore = defineStore('theme', {
  state: () => ({
    theme: "white",
  }),
  getters: {
    getTheme: (state)=> state.theme
  },
  actions: {
    changeTheme(newTheme: string) {
        this.theme = newTheme
    }
  }
})