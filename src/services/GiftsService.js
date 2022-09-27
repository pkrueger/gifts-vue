import { AppState } from "../AppState.js";
import { Gift } from "../models/Gift.js";
import { GiftsServer } from "./AxiosService.js";

class GiftsService {
  async getGifts() {
    const res = await GiftsServer.get();
    AppState.gifts = res.data.map((g) => new Gift(g));
  }

  async openGift(gift) {
    gift.opened = true;
  }
}

export const giftsService = new GiftsService();
