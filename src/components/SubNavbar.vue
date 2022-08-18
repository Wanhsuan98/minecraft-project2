<template>
 <nav class=" navbar d-flex shadow navbar-expand-lg navbar-light bg-trasparent"
  style="z-index:100;  background-color: rgba(0, 0, 0, .6); position:fixed; width:100%
"
  >
  <div class="container-fluid" style=''>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse justify-content-center fs-5 navbar-collapse ms-5 ps-5" id="navbarNavAltMarkup">
      <div class="navbar-nav" id="navbar">
        <a class="nav-link  px-3" aria-current="page" href="#" id="ahover">
        <router-link to="/" style="color: #F6F6F6; text-decoration: none;" ><spana>首頁</spana></router-link>
        </a>
        <a class="nav-link px-3" href="#"
        style="color: #F6F6F6">
        <router-link to="/about" style="color: #F6F6F6; text-decoration: none;"><spana>關於</spana></router-link>
        </a>
        <a class="nav-link  px-3" href="#">
        <router-link to="/products" style="color: #F6F6F6; text-decoration: none;"><spana >比賽周邊</spana></router-link>
        </a>
        <a class="nav-link  px-3">
        <router-link to="/mineVerse" style="color: #F6F6F6; text-decoration: none;"><spana>元宇宙商圈</spana></router-link>
        </a>
      </div>
    </div>
    <div >
      <a class="nav-link">
        <router-link to="/login" style="color: #F6F6F6; text-decoration: none;"><spana>登入(管理端)</spana></router-link>
      </a>
    </div>
  </div>
</nav>
    <router-view/>
</template>

<script>
export default {
  name: 'SubNavbar',
};
</script>

<style>
spana{
  text-decoration: none;
  list-style: none;
}


spana:hover {
  color:#9e714a;
}
.title{
  font-size: 2.8rem;
}


</style>
