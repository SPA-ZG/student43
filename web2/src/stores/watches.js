import { defineStore } from "pinia";

export const useWatchesStore = defineStore("watches", {
  state: () => ({
    _allWatches: [],
  }),
  getters: {
    allWatches: (state) => state._allWatches || [],
  },
  actions: {
    async refreshWatches() {
      // dodati boolean arg da se može forsirati refresh
      if (this.allWatches.length === 0) {
        console.log("fetching watches...");
        try {
          let response = await fetch("http://127.0.0.1:8888/watches");
          if (response.ok) {
            // Update the state using the provided set method
            this.$state._allWatches = await response.json();
          } else {
            throw new Error("HTTP-Error: " + response.status);
          }
        } catch (error) {
          console.error(error);
        }
      }
    },
  },
});
