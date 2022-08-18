<template>
<div class="bg">
<div class="container-fluid" style="padding:0;">
  <subNavbar></subNavbar>
</div>
<div class="outer">
   <p class="title text-center fw-bold" style="color: #F6F6F6; margin:0 auto; padding-top:200px">
  元宇宙周邊</p>
     <br>
</div>
</div>
<div class="container">
    <div class="fs-1 fw-bold mt-5 text-center">
        
    </div>
     <div class="row card-items  g-5  p-5">
        <mineverseProduct></mineverseProduct>
     </div>
</div>
    
    <myFooter></myFooter>
</template>

<script scoped>
import subNavbar from '../components/SubNavbar.vue';
import mineverseProduct from '../components/MineverseProduct.vue';
import myFooter from '../components/MyFooter.vue';

export default {
  name: '',
  components: {
    subNavbar,
    mineverseProduct,
    myFooter,
  },
};
</script>

<style scoped>
/* main-background */
.bg{
  width:100%;
  height: 100vh;
  background: url('https://fiverr-res.cloudinary.com/images/q_auto,f_auto/gigs2/198755438/original/f623b6cd6726019aaefa56cfd159622883d512f4/create-a-high-quality-minecraft-landscape-for-you.jpg');
  background-attachment: fixed;
  background-position: center;
  background-repeat: no-repeat;
 background-color: rgba(0, 0, 0, .3);
  background-blend-mode: multiply;
    }
.outer{
  text-align: center
}
.title{
  color: #F6F6F6;
  display: inline-block;
  line-height:400px;
  text-align:center;
  font-size: 3rem;
  animation:flipInX;
  animation-duration: 1s;
}
    卡片內容
    .card {
        box-shadow: 0 0 10px rgba(0, 0, 0, 0.2);
    }
    .card:hover {
        cursor: pointer;
        transform: scale(1.1);
        transition: transform 0.5s ease;
    }
    /* .item-img{
        width: 100%;
    } */
    .card-img-top{
        width: 100%;
        height: 20rem;
        object-fit:  scale-down;
    }

    

</style>
