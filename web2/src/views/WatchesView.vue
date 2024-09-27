<template>
  <div>
    <h2>All Watches ({{ allWatches.length }})</h2>
    <hr />
    <div class="watch-grid">
      <watchCard
        v-for="watch in allWatches"
        :key="watch.id"
        v-bind="watch"
      ></watchCard>
    </div>
  </div>
</template>

<script>
import { mapState, mapActions } from "pinia";
import { useWatchesStore } from "../stores/watches";

export default {
  computed: {
    ...mapState(useWatchesStore, ["allWatches"]),
  },
  methods: {
    ...mapActions(useWatchesStore, ["refreshWatches"]),
  },
  async mounted() {
    await this.refreshWatches();
  },
};
</script>

<style scoped>
.watch-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  gap: 16px;
}
</style>
