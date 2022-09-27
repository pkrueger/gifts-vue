import { reactive } from "vue";
import { Gift } from "./models/Gift";

// NOTE AppState is a reactive object to contain app level data
export const AppState = reactive({
  user: {},
  /**@type {import('./models/Account.js').Account} */
  account: {},

  /**@type {import('./models/Gift').Gift[]} */
  gifts: [],
});
