<template>
  <div class="server d-flex justify-content-center" style="">
<!-- <img class="" style="" src="" alt=""> -->
<!-- <p class="">aaa</p> -->
<div class="domainOutside">
  <span class="btn bg-transparent btn-sm text-light ml-auto" @click.stop.prevent="domainCopy">
    {{ domain }}
    <span class="text-light ms-3"><i class="fa-solid fa-copy"></i></span>
  </span>
  <input type="hidden" ref="getCopy" :value="domain" id="domainInput" class="bg-dark text-light domain-input" style="width:220px">

</div>
</div>
</template>

<script>
export default{
  data(){
    return{
      domain: "https://www.google.com",
    }
  },
  methods: {
        domainCopy () {
          let domainNameToCopy = document.querySelector('#domainInput')
          domainNameToCopy.setAttribute('type', 'text')    // 不是 hidden 才能複製
          domainNameToCopy.select()

          try {
            var successful = document.execCommand('copy');
            var msg = successful ? '複製成功!' : '複製失敗!請重新複製';
            Swal.fire({
              background:'#c0dbb3',
              title: '伺服器位置複製成功',
              timer: 2000,
              width:350,
            })
            

          } catch (err) {
            alert('Oops, unable to copy');
          }

          /* unselect the range */
          domainNameToCopy.setAttribute('type', 'hidden')
          window.getSelection().removeAllRanges()
        },
    },

}
</script>
<!-- <script setup>
import { ref } from 'vue'
let domains = ref('https://www.google.com/')
const getCopy = ref(null)
let copy = () => {
    //改變性質變成text，hidden無法複製
    getCopy.value.setAttribute('type', 'text')
    //select()為選取範圍
    getCopy.value.select()
    document.execCommand('copy');
    //單純的alert可以關掉
    try {
        var successful = document.execCommand('copy');
        var msg = successful ? '複製成功' : '複製失敗';
        alert('伺服器位置' + msg);
    } catch (err) {
        alert('Oops, unable to copy');
    }
    /* 讓該input變回hidden 取消選取 */
    getCopy.value.setAttribute('type', 'hidden')
    window.getSelection().removeAllRanges()
}
</script> -->

<style scoped>
.domainOutside{
height: 0px;
padding-top: 1.9rem
}
@media handheld,screen and(max-width: 768px) {
.domainOutside{
padding-top:3rem
}    
}
</style>