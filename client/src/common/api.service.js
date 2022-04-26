import Vue from "vue";
import axios from "axios";
import VueAxios from "vue-axios";
import JwtService from "@/common/jwt.service";
import { API_URL } from "@/common/config";

const ApiService = {
  init() {
    Vue.use(VueAxios, axios);
    Vue.axios.defaults.baseURL = API_URL;
  },

  setHeader() {
    Vue.axios.defaults.headers.common[
      "access_token"
    ] = `${JwtService.getToken()}`;
  },

  query(resource, params) {
    return Vue.axios.get(resource, params).catch(error => {
      throw new Error(`[RWV] ApiService ${error}`);
    });
  },

  get(resource, slug = "") {
    return Vue.axios.get(`${resource}/${slug}`).catch(error => {
      throw new Error(`[RWV] ApiService ${error}`);
    });
  },

  post(resource, params) {
    return Vue.axios.post(`${resource}`, params);
  },

  update(resource, slug, params) {
    return Vue.axios.put(`${resource}/${slug}`, params);
  },

  put(resource, params) {
    return Vue.axios.put(`${resource}`, params);
  },

  delete(resource) {
    return Vue.axios.delete(resource).catch(error => {
      throw new Error(`[RWV] ApiService ${error}`);
    });
  }
};

export default ApiService;

export const ProductsService = {
  query(type, params) {
    return ApiService.query("products" + (type === "feed" ? "/feed" : ""), {
      params: params
    });
  },
  get(id) {
    return ApiService.get("products", id);
  },
  getProductList() {
    return ApiService.get("products");
  },
  create(params) {
    return ApiService.post("products", { article: params });
  },
  update(slug, params) {
    return ApiService.update("products", slug, { article: params });
  },
  destroy(slug) {
    return ApiService.delete(`products/${slug}`);
  }
};