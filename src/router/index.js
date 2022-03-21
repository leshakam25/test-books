import Vue from "vue";
import VueRouter from "vue-router";
import Books from "../components/Books.vue";
import AddBook from "../components/AddBook.vue";
import EditBook from "../components/EditBook.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Books",
    component: Books,
  },
  {
    path: "/add",
    name: "AddBook",
    component: AddBook,
  },
  {
    path: "/edit/:id",
    name: "EditBook",
    component: EditBook,
  },
  {
    path: "/:id",
    name: "DeleteBook",
    component: Books,
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;
