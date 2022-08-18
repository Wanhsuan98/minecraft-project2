<template>
<div class="bg">
<div class="container-fluid" style="padding:0;">
  <subNavbar ></subNavbar>
</div>
<div class="outer">
   <p class="title text-center fw-bold" style="color: #F6F6F6; margin:0 auto; padding-top:200px">了解大賽</p>
     <br>
</div>
</div>

<div class="container col-sm-11 col-md-9 my-5" >
<div class="text-center">
  <p>
    <span class="px-2 fs-3 fw-bold">為何要舉辦麥塊建築大賽</span>
    <i class="fa-solid fa-question fs-3"></i>
</p>
  <div class="card card-body fs-5 border-0 border-bottom">
    <i class="fa-solid fa-quote-left text-start"></i>
    
                當身為家長的我們，
                看到從2020年起許多大學、高中、國中開始有不同麥塊愛好者，
                因疫情設計虛擬校園及虛擬畢業典禮，
                我們認為可以引導小朋友在創意創造及程式學習上使用Minecraft，
                並因應108新課綱高中以下可能需要學習歷程(研習/獎勵證書)在未來升學使用，
                故與國立臺北護理健康大學合作並邀請全台大專院校共襄盛舉，
                讓小朋友在開心的創作中參與競賽，獲得學習歷程證明也充足自己團隊協做的信心，
                因此舉辦麥塊建築大賽。
    <i class="fa-solid fa-quote-right text-end"></i>
    </div>
</div>

<div class="text-center my-5">
  <p>
    <span class="px-2 fs-3 fw-bold">Minecraft(也稱麥塊)是遊戲還是教育</span>
    <i class="fa-solid fa-question fs-3"></i>
</p>
  <div class="card card-body fs-5 border-0 border-bottom">
        <i class="fa-solid fa-quote-left text-start"></i>

    <figure>
      <blockquote class="blockquote">
        <p>「Minecraft」（我的世界）是一款風靡全世界的沙盒遊戲，玩家在遊戲裡可以跟整個世界進行各種互動，
        從挖礦、生存到建築，創造出屬於自己獨一無二的世界。</p>
      </blockquote>
    <figcaption class="blockquote-footer">
        摘自 <cite title="Source Title">電腦玩物, Minecraft 中文教育版推出！免費下載教學與特色介紹</cite>
    </figcaption>
    </figure>
    <figure>
      <blockquote class="blockquote">
         <p>Majong 研究中心主管賽克斯·佩爾森（Saxs Persson）表示 : 讓人們可以建造屬於自己的 Minecraft，這很重要」，「這款遊戲最強調的就是個人體驗」。
      「這樣能鼓勵更多的人們去建造自己想要建造的東西」。</p>
      </blockquote>
     <figcaption class="blockquote-footer">
        摘自 <cite title="Source Title">科技報橘,《Minecraft》: 為什麼一款沒有目標、點陣風格的遊戲可以風靡全世界？</cite>
     </figcaption>
    </figure>
    <br>
    所以我們可以說，Minecraft結合了遊戲與教育，是寓教於樂的完美詮釋。
        <i class="fa-solid fa-quote-right text-end"></i>

    </div>
</div>
</div>

</template>

<script>
import subNavbar from '../components/SubNavbar.vue';
import myFooter from '../components/MyFooter.vue';

export default {
  name: 'AboutView',
  components: {
    subNavbar,
    myFooter,
  },
  data() {
    return {
    };
  },
};
</script>

<style scoped>

.bg{
  width:100%;
  height: 100vh;
  background: url('https://images8.alphacoders.com/479/479393.jpg');
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
  animation:rotateInDownLeft;
  animation-duration: 1s;
}

.info{
  width: 80%;
  height: 80vh;
  margin: 0 auto;
  margin-top: -70px;
  margin-bottom: 50px;
  white-space: normal;
  /* z-index:-100; */
  position: relative;
  background: white;
}

p{
  font-family: 'Josefin Sans', sans-serif;
    display: inline-block;
}

    @media screen and (max-width: 768px){
      .info{
        width:100%;
        margin-top: 0;
        margin-bottom: 0;
        padding-top: 20px

      }
      .content{
        font-size: 15px;
        /* flex-grow: 1; */
      }
    }
</style>

