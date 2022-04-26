import Vue from "vue";
import {
  ProductsService
} from "@/common/api.service";
import {
  FETCH_PRODUCTS,
  FETCH_PRODUCT,
  PRODUCT_RESET_STATE
} from "./actions.type";
import {
  RESET_STATE,
  SET_PRODUCT,
  SET_PRODUCTS
} from "./mutations.type";

const initialState = {
  product: {
    name: "",
    description: "",
    stock: 0,
    price: 0,
    imageUrl: "",
    status: "",
  },
  products: [],
  comments: []
};

export const state = { ...initialState };

export const actions = {
  async [FETCH_PRODUCT](context, id, prevProduct) {
    // avoid extronuous network call if article exists
    if (prevProduct !== undefined) {
      return context.commit(SET_PRODUCT, prevProduct);
    }
    const { data } = await ProductsService.get(id);
    context.commit(SET_PRODUCT, data.Product);
    return data;
  },
  [PRODUCT_RESET_STATE]({ commit }) {
    commit(RESET_STATE);
  },
  async [FETCH_PRODUCTS](context) {
    const { data } = await ProductsService.getProductList();
    console.log(data)
    context.commit(SET_PRODUCTS, data.Products);
    return data;
  },
};

/* eslint no-param-reassign: ["error", { "props": false }] */
export const mutations = {
  [SET_PRODUCT](state, product) {
    state.product = product;
  },
  [SET_PRODUCTS](state, products) {
    state.products = products;
  },
  [RESET_STATE]() {
    for (let f in state) {
      Vue.set(state, f, initialState[f]);
    }
  }
};

const getters = {
  product(state) {
    return state.product;
  },
  products(state) {
    return state.products;
  },
  comments(state) {
    return state.comments;
  }
};

export default {
  state,
  actions,
  mutations,
  getters
};