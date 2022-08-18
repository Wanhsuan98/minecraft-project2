<template>
    <div class="container-fluid d-flex justify-content-center">
        
            
            <div class="contactForm">
            <h3>編輯消息</h3>
            <div class="inputBox">
                <input v-model="formdata.date" name="date" type="date" placeholder="date">
            </div>
            <div class="inputBox">
                <input v-model="formdata.title" name="title" type="text" placeholder="標題">
            </div>
            <div class="inputBox">
                <textarea v-model="formdata.text" name="text" placeholder="text"></textarea>
            </div>
            <div class="inputBox">
                <input type="submit" @click="sentNews(formdata)" value="送出">
            </div>
        </div>           

    </div>
</template>

<script>
import axios from 'axios';


export default {
    data() {
        return {
            editor: null,
            formdata: {
                title: "",
                text: "",
                date: ""
            },

        }
    },
    methods: {
        async sentNews() {
            await axios({
                method: "POST",
                url: "http://localhost:5002/api/latestnews",
                data: this.formdata,
            })
            
        }
    },
}
</script>

<style scoped>

.contactForm
{
    padding: 75px 50px;
    background: #fff;
    box-shadow: 0 15px 50px rgba(0, 0, 0 ,0.1);
    max-width: 500px;
    margin-top: 50px;
}
.contactForm h3
{
    color:#111;
    font-size: 1.2em;
    margin-bottom: 20px;
    font-weight: 500;
}
.contactForm .inputBox
{
    position: relative;
    width: 100%;
    margin-bottom: 20px;
}
.contactForm .inputBox input,
.contactForm .inputBox textarea
{
    width: 100%;
    border: 1px solid #555;
    padding: 10px;
    color: #111;
    outline: none;
    font-size: 16px;
    font-weight: 300;
    resize: none;
}
.contactForm .inputBox input[type="submit"]
{
    font-size: 1.2rem;
    color: #fff;
    background: #479154;
    display: inline-block;
    text-decoration: none;
    max-width: 100px;
    border: none;
    cursor: pointer;
    padding: 5px 10px;
}

</style>