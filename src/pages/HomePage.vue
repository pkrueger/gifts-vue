<template>
  <div class="container-fluid">
    <div class="row">
      <div class="col-4 col-xxl-3 p-0">
        <div class="side-bar bg-dark"></div>
      </div>
      <div class="col-8 col-xxl-9">
        <div class="row just-keep-scrollin">
          <Gift v-for="gift in gifts" :gift="gift" />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { computed } from "@vue/reactivity";
import { AppState } from "../AppState.js";
import { giftsService } from "../services/GiftsService.js";
import { logger } from "../utils/Logger.js";
import Pop from "../utils/Pop.js";

export default {
  name: "Home",
  setup() {
    async function getGifts() {
      try {
        await giftsService.getGifts();
      } catch (error) {
        logger.error("[Getting Gifts]", error);
        Pop.error(error);
      }
    }
    getGifts();
    console.log(AppState.gifts);
    return {
      gifts: computed(() => AppState.gifts),
    };
  },
};
</script>

<style scoped lang="scss">
.just-keep-scrollin {
  max-height: 100vh;
  overflow: auto;
}

.side-bar {
  height: 100vh;
}
</style>
