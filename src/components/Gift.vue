<template>
  <div class="col-md-6 col-lg-4 col-xxl-3">
    <div class="card p-3 my-2">
      <img
        :src="gift.opened ? gift.url : 'src/assets/img/gift.png'"
        alt="present"
        class="img-fluid rounded-1 gift-image"
        id="giftImage"
        @click="openGift()"
      />
      <div class="card-body text-center">
        <h5 class="mb-0 mt-3">{{ gift.tag }}</h5>
      </div>
    </div>
  </div>
</template>

<script>
import { Gift } from "../models/Gift.js";
import { giftsService } from "../services/GiftsService.js";
import { logger } from "../utils/Logger.js";
import Pop from "../utils/Pop.js";

export default {
  props: {
    gift: { type: Gift, required: true },
  },
  setup(props) {
    return {
      async openGift() {
        try {
          await giftsService.openGift(props.gift);
        } catch (error) {
          logger.error("[OpenGift]", error);
          Pop.error(error);
        }
      },
    };
  },
};
</script>

<style lang="scss" scoped>
.card {
  min-height: 20rem;
}
</style>
