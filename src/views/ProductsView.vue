<template>
    <div class="product-bg">
<div class="container-fluid" style="padding:0;">
  <subNavbar></subNavbar>
</div>
<div class="outer">
   <p class="title text-center fw-bold" style="color: #F6F6F6; margin:0 auto; padding-top:200px">
   比賽周邊</p>
     <br>
</div>
</div>
<div class="container">
    <div class="fs-1 fw-bold mt-5 text-center">
        
    </div>
     <div class="row card-items  g-5  p-5">
        <productItem></productItem>
     </div>
</div>
    
    <myFooter></myFooter>
</template>

<script>
import subNavbar from '../components/SubNavbar.vue';
import productItem from '../components/ProductItem.vue';
import myFooter from '../components/MyFooter.vue';

export default {
  name: 'ProductsView',
  components: {
    subNavbar,
    productItem,
    myFooter,
  },
};
</script>

<style scoped>
/* main-background */
.product-bg{
  width:100%;
  height: 100vh;
  background: url('https://cdn.wallpapersafari.com/67/87/vOEkuP.jpg');
  background-attachment: fixed;
  background-position: center;
  background-repeat: no-repeat;
 
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
  animation:rotateInDownRight;
  animation-duration: 1s;
}
    /* 卡片內容 */
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
