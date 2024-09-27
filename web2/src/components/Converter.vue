<template>
   <div class="currency-converter">
     <h1>Convert kn to eur and vice versa</h1>
     <div>
       <h3>Currency converter</h3>
       <form>
         <div class="input-group">
           <label>Euro</label>
           <div>
             <input type="number" v-model.number="euro" @keyup="convertEuroToKuna" />
           </div>
         </div>
         <div class="input-group">
           <label>Kuna</label>
           <div>
             <input type="number" v-model.number="kuna" @keyup="convertKunaToEuro" />
           </div>
         </div>
       </form>
     </div>
   </div>
 </template>
 
 <script>
 export default {
   data() {
     return {
       euro: 0,
       kuna: 0,
     };
   },
   methods: {
     convertEuroToKuna() {
       this.kuna = this.euro * 7.5345;
     },
     convertKunaToEuro() {
       this.euro = this.kuna / 7.5345;
     },
   },
 };
 </script>
 
 <style scoped>
 .currency-converter {
   max-width: 600px;
   margin: 0 auto;
   padding: 20px;
   background-color: white;
   box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
 }
 
 h1, h3 {
   color: #333;
 }
 
 form {
   display: flex;
   flex-direction: column;
 }
 
 .input-group {
   margin-bottom: 20px;
 }
 
 label {
   font-weight: bold;
   margin-bottom: 5px;
 }
 
 input {
   padding: 10px;
   font-size: 16px;
   border: 1px solid #ccc;
   border-radius: 4px;
 }
 
 </style>
 