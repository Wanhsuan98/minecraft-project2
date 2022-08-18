<template>
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
            
                <input :id="text.id" type="text" :value="text.title"/>
            </div>
            <div class="text-center">
             <input :id="text.id" type="text" :value="text.text"/>
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

</style>