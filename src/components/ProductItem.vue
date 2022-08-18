<template>
  <div class="container">
    <div>
        <div class="row row-cols-1 row-cols-md-2 row-cols-lg-3">
            <div class="d-flex justify-content-center px-2 h-100" v-for="product in products" :key="product.id">
            <span>
            <div class="card my-4">
            <div class="d-flex px-0 img-hover-outer">
                <img :src="product.imgUrl" class="card-img-top product-image " alt="產品照片"
                style="width:100%">
            </div>   
                    <div class="card-body product-content">
                        <pa>
                        <span class="card-title fw-bold">{{product.name}}</span>
                        <br>
                        <span class="card-text">{{product.description}}</span>
                        
                        </pa>
                        
                    </div>
                    
            </div>
            </span>
    </div>
</div>
</div>
</div>
</template>

<script>
export default {
  name: 'ProductItem',
  data() {
    return{
      products:[
        {
          id: 1,
          name: "真理場特色吊飾-馬偕醫生",
          description: "",
          imgUrl: "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEhZdWMK-u5SLSJBOemxXM1LNjjMm-lWjy-NiwMZ2BkH_RV_nbXBHbsDP32XmYgFxIukLKlH505zynPkAwoBDPx2VmDh2jJ2apH8K9o30ey14GwhnojcNt45ls4I7A0QzkRezH9fUW2nu9OQ1puv1QbOe2xHrqfDBlicsERrZ-Lz3cPCY11zCyVJiA82qg/s320/S__24092692.jpg"
        },
        {
          id: 2,
          name: "驅動程式X賣塊大賽口罩(乙入)",
          description: "",
          imgUrl: "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEhmfifW_rl0j8xIwXTo0Ua1y_1E2psUwC37ZLrCwbQoZZQfrIjrFHms9iwoY9HdsnP2mxNdnHHXKiBDdGgZ4YfHXjOqeRio013XPy6ooZ8yaWJEoYzkVJX03_cAY3dK5Gd6mnHQ-G8gfbpRF1pFsDtj0U8dAc39HxtoMeRCqSHgkRWz06-jSbXTRpxyeQ/s320/S__24092691.jpg"
        },
        {
          id: 3,
          name: "挑戰合格貼紙(乙入)",
          description: "",
          imgUrl: "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEi0QWlmZ7MY7KBqbvPKNvE7a4HNlgIW_k2FQmK5QiU5Ht87YVYc9dRVvXG6Pq92M2f3e9Q3wDR54BrgeVa4gPogPbkTpBkXTsfdLedz2263mEY71Zysf_MZ64VVdrvDOCvrPLqBOEEEMQU39XUs-lN2A_RFk9EJQcv4UdLkpF22bvqA4csIz27e2SiOHg/s320/S__24092690.jpg"
        },
        {
          id: 4,
          name: "初選合格貼紙(乙入)",
          description: "",
          imgUrl: "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEhSOotN62rSvJAsiQf2g-RezSiTr5gCAT9ln_Lty7fRaPIzlPgap6jAkVcZ81mQthNPbGZIGcLIpDk6GGBfjdZrk0P3fsceRJeFKCfT4mdCYTMTfEaSFosWR3GQ8QT-Ty3KGcVx2v-uv99wt5s15pQKZLRk_eVZER8sc1LxGJF83l0pC1MKXp1o0D8csA/s320/S__24092689.jpg"
        },
        {
          id: 5,
          name: "邀請賽貼紙(乙入)",
          description: "",
          imgUrl: "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEhQcij_bzu-2x-YF-QHLxE71vX9Pfkydn42_qmcLcS8_bPqdZF--1J56KZN5429v9AEvKAhfMa2gslLHhCe4sJoxao9rBIUA_8pIe6UxtEOECT4rL2JflTmsfLr4nmStG4iOxuUoqH9eV86ianv0Zdm7ZygkZ8tUXACdkc50KKh4XO1aJ6NdeXJyr74zA/s320/S__24092688.jpg"
        },
        {
          id: 6,
          name: "還原學校貼紙(乙入)",
          description: "",
          imgUrl: "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEggPgHl1CGU21vW-SuEjfcSWT4Q_N7kNV9jLoPfSfUeCHyYqcb_usi8aDOnHAY2450TOPW9fjXfbpnrHQ3KbvCaoyK2BsldsgCFGmrD3wd6DzkA2JTtGDnDxMD0ORtiGLkf3wW7ombdsKB9Vj2TR-y5_It6NjeNN5TlnHRLpcPBlQiIcymyG2YU-dwrgg/s320/S__24092686.jpg"
        },
      ]
    };
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
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

    .bi-star-fill {
    color: rgb(255, 208, 0);
    }

</style>
