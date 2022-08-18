<template>

  <div class="col-8 col-md-8 tab">
    <input class="tabcheck" type="checkbox" name="tabs" />
    <label >111</label>
    <div class="tab-content">
      <p>222} </p>
      <button
        type="button"
        class="btn"
        data-bs-toggle="modal"
        data-bs-target="#staticBackdrop">
        更新
      </button>
      <button>刪除</button>
    </div>
  </div>

  <!-- Modal -->
  <div
    class="modal fade"
    id="staticBackdrop"
    data-bs-backdrop="static"
    data-bs-keyboard="false"
    tabindex="-1"
    aria-labelledby="staticBackdropLabel"
    aria-hidden="true"
  >
    <div class="modal-dialog">
      <div class="modal-content">
        <div class="modal-header">
          <h5 class="modal-title" id="staticBackdropLabel">更新內容</h5>
          <button
            type="button"
            class="btn-close"
            data-bs-dismiss="modal"
            aria-label="Close"
          ></button>
        </div>
        <div class="modal-body d-flex">
          <div class="container">
            <div class="text-center">
            
                <input type="text"/>
            </div>
            <div class="text-center">
             <input type="text"/>
            </div>
          </div>
        </div>
        <div class="modal-footer">
          <button type="button" class="btn btn-success" data-bs-dismiss="modal">
            儲存更新
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { useStore } from "vuex";
import { computed, onMounted } from "@vue/runtime-core";

export default {
  props: ["text"],
  setup() {
    const store = useStore();
    onMounted(() => {
      store.dispatch("texts");
    });
    const texts = computed(() => store.state.texts);
    return { texts };
  },
};
</script>

<style>
/* Acordian styles */
.tab {
  position: relative;
  margin-bottom: 0.01em;
  width: 800px;
  color: #fff;
  overflow: hidden;
}
.tabcheck {
  opacity: 0;
  z-index: -1;
}
.jacordian label {
  position: relative;
  display: block;
  padding: 0 0 0 1em;
  background: #52975f;
  font-weight: bold;
  line-height: 3;
  cursor: pointer;
}

.tab-content {
  max-height: 0;
  overflow: hidden;
  background: #9ccfa6;
  -webkit-transition: max-height 0.35s;
  -o-transition: max-height 0.35s;
  transition: max-height 0.35s;
}

.tab-content p {
  margin: 1em;
}
/* :checked */
.jacordian input:checked ~ .tab-content {
  max-height: 50em;
  padding-bottom: 5px;
}
/* Icon */
.jacordian label::after {
  position: absolute;
  right: 0;
  top: 0;
  display: block;
  width: 3em;
  height: 3em;
  line-height: 3;
  text-align: center;
  -webkit-transition: all 0.35s;
  -o-transition: all 0.35s;
  transition: all 0.35s;
}
.jacordian input[type="checkbox"] + label::after {
  content: "\2795";
}
.jacordian input[type="radio"] + label::after {
  content: "\25BC";
}
.jacordian input[type="checkbox"]:checked + label::after {
  transform: rotate(315deg);
}
.jacordian input[type="radio"]:checked + label::after {
  transform: rotateX(180deg);
}
</style>