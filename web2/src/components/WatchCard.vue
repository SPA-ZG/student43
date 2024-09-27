<template>
   <small-card class="d-flex flex-column justify-content-between">
     <img class="card-img-top watch-image" :src="image" />
 
     <div class="card-body">
       <h5 class="card-title">{{ name }}</h5>
       <p class="card-text">{{ brand }}</p>
       <ul class="list-group">
         <li class="list-group-item">Year: {{ year }}</li>
         <li class="list-group-item">Reference Number: {{ reference_number }}</li>
         <li class="list-group-item">Price: {{ price }} EUR</li>
         <li class="list-group-item red">Discounted Price: {{ discount }}</li>
         <li class="list-group-item">Sex: {{ sex }}</li>
       </ul>
       
       <button @click="showAvailabilityAlert" class="btn btn-primary mt-3">
         Check Availability
       </button>
     </div>
   </small-card>
 </template>
 
 <script>
 export default {
   props: [
     "image",
     "name",
     "brand",
     "year",
     "reference_number",
     "price",
     "sex",
     "isAvailable"
   ],
   computed: {
     discount() {
       return this.price - this.price * 0.1;
     }
   },
   methods: {
     showAvailabilityAlert() {
       const availabilityMessage = this.isAvailable
         ? "This item is available!"
         : "Sorry, this item is not available.";
       alert(availabilityMessage);
     }
   }
 };
 </script>
 
 <style scoped>
 .watch-image {
   width: 100%; /* Set the width to 100% to ensure responsiveness */
  height: 200px; /* Set a fixed height for the images */
  object-fit: cover;   
}
 .red {
   color: red;
 }
 </style>
 