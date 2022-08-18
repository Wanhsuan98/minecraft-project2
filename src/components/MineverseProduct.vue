<template>
  <div class="fs-2 text-center mb-5">Comming Soon</div>
</template>

<script>
export default {
  name: 'ProductItem',
  data() {
    return {
      // images: url(''),
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
