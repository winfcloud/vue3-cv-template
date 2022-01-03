import { defineStore, acceptHMRUpdate } from 'pinia'

export const useAboutStore = defineStore({
  id: 'about',
  state: () => ({
    name: 'About',
    msg: 'This message in store',
  }),
  actions: {},
})

if (import.meta.hot) {
  import.meta.hot.accept(acceptHMRUpdate(useAboutStore, import.meta.hot))
}
