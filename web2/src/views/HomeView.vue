<!-- Home.vue -->
<template>
  <div>
    <navbar></navbar>

    <section class="welcome-section">
      <h1>Welcome to My Watch Collection</h1>
      <p>Explore a curated selection of premium watches.</p>
    </section>

    <section class="featured-watches">
      <h2>Featured Watches</h2>
      <div class="watches-container">
        <watch-card
          v-for="watch in featuredWatches"
          :key="watch.id"
          v-bind="watch"
        ></watch-card>
      </div>
    </section>
  </div>
</template>

<script>
export default {
  data() {
    return {
      featuredWatches: [
        {
          name: "Patek Philippe Nautilus",
          year: 2022,
          brand: "Patek Philippe",
          reference_number: "5711/1A-010",
          price: 30000,
          sex: "Men",
          automatic: true,
          image: "https://www.patekphilippe.to/wp-content/uploads/2022/01/5711-1A-black-1-1.jpg"
              },
      ],
    };
  },
};
</script>

<style scoped>
.welcome-section {
  text-align: center;
  padding: 50px 0;
}

.featured-watches {
  text-align: center;
  padding: 30px 0;
}

.watches-container {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
}
</style>
