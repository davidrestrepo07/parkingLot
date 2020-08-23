import Vue from "vue";
import VueRouter from "vue-router";
// import Home from "../views/Home.vue";
// import InVehicle from '../views/InVehicle/Index.vue'
// import Worker from '../views/Worker/Index.vue'
// import Cedula from "../views/Cedula/Index.vue";
// import Vehicle from "../views/Vehicle/Index.vue"
// import OutVehicle from '../views/OutVehicle/Index.vue'
// import Charge from '../views/Charge/Index.vue'
// import Informes from '../views/Informes/Index.vue'
// import InformTable from '../views/InformTable/Index.vue'
// import RegisterVehicle from "../views/RegisterVehicle/Index.vue";
Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Home",
    component: () => import(/* webpackChunkName: "home" */ "../views/Home.vue")
  },
  {
    path: "/ingreso-vehiculo",
    name: "InVehicle",
    component: () =>
      import(/* webpackChunkName: "InVehicle" */ "../views/InVehicle/Index.vue")
  },
  {
    path: "/empleado",
    name: "Worker",
    component: () =>
      import(/* webpackChunkName: "Worker" */ "../views/Worker/Index.vue")
  },
  {
    path: "/visitante",
    name: "Visitor",
    component: () =>
      import(/* webpackChunkName: "Visitor" */ "../views/Visitor/Index.vue")
  },
  {
    path: "/empleado/:cedula",
    name: "Cedula",
    component: () =>
      import(/* webpackChunkName: "Cedula" */ "../views/Cedula/Index.vue")
  },
  {
    path: "/vehiculo/:cedula/:placa",
    name: "Vehicle",
    component: () =>
      import(/* webpackChunkName: "Vehicle" */ "../views/Vehicle/Index.vue")
  },
  {
    path: "/salida-vehiculo",
    name: "OutVehicle",
    component: () =>
      import(
        /* webpackChunkName: "OutVehicle" */ "../views/OutVehicle/Index.vue"
      )
  },
  {
    path: "/informes",
    name: "Informes",
    component: () =>
      import(/* webpackChunkName: "Informes" */ "../views/Informes/Index.vue")
  },
  {
    path: "/registrar",
    name: "Register",
    component: () =>
      import(
        /* webpackChunkName: "Register" */ "../views/RegisterVehicle/Index.vue"
      )
  }
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes
});

export default router;
