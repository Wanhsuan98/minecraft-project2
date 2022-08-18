<template>
    <footer class="container-fluid p-3 fs-3 footer">
        <div class="row d-flex justify-content-center">
            <div class="col-10 col-md-4 col-lg-4 p-3">
                <span class="mb-3 fs-2">比賽場次</span>
                <ul>
                    <li class="fs-5">北護場 05/28 舉辦 </li>
                    <li class="fs-5">文大場 05/29 舉辦</li>
                    <li class="fs-5">明道場 07/02 舉辦 </li>
                    <li class="fs-5">真理場 09/~ 舉辦</li>
                </ul>
            </div>
            <div class="col-10 col-md-4 col-lg-4 p-3">
                <span class="mb-3 fs-2">聯絡資訊</span>
                <ul>
                    <li class="fs-5"><i class="bi bi-telephone-fill fs-4"></i> 02-2701 0928<br>
                        (週一至週五12:00 ~ 18:30)
                    </li>
                    <li class="fs-5"><i class="bi bi-envelope-fill"></i> core@codedriven.org</li>
                    <li class="fs-5"><i class="bi bi-geo-alt-fill"></i> 台北市大安區復興南路一段360號3樓</li>
                </ul>
            </div>
        </div>

        <footer class="text-center">
            © 2022 by 程式驅動 | 本站所有素材引用至 Mojang 旗下遊戲 Minecraft
        </footer>
    </footer>
</template>

<script>
export default {
  name: 'MyFooter',
};
</script>

<style scoped>
footer{
    font-size: 0.7rem;
    }

.footer {
        background: linear-gradient(
            rgba(63, 59, 59, 0.5) 0%,
            rgba(0, 0, 0, 0.9) 65%
        ),
        url('https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEh0PULIE33usbtTsZbqqRwY9-Zc-1dXx9TE-RG2FCcJXcaYT0cWPyOOdAdbYDWM2TfOzyZbr9Yx0hHP884CIYDpSgLh4rNzHyu5ul9R9PeKogZfxSZTNreTE3Tv6qADqFrJ_B8rDxl3vP6fY4oZWSTxBLq1lRKYqlbOBQ5kbsB2efjWRUC-PrlnyZYvuQ/s320/footer.png') repeat center / auto 100%;
        background-size: cover;
        color: #F6F6F6;
        margin:0
    }
</style>
