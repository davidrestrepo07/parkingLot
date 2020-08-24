import Vue from "vue";
export default {
  state: {
    parking: [
      {
        date: "2020-08-23",
        cedula: "1234567890",
        perfil: "empleado",
        vehiculo: "carro",
        placa: "FHE456",
        payment: "NO"
      },
      {
        date: "2020-08-26",
        cedula: "1234567891",
        perfil: "empleado",
        vehiculo: "carro",
        placa: "RTE345",
        payment: "SI"
      },
      {
        date: "2020-08-27",
        cedula: "1234567890",
        perfil: "empleado",
        vehiculo: "moto",
        placa: "YTR14T",
        payment: "SI"
      },
      {
        date: "2020-08-23",
        cedula: "1234567899",
        perfil: "visitante",
        vehiculo: "carro",
        placa: "REW342",
        payment: "SI"
      }
    ]
  },
  mutations: {
    ENTER_VEHICLE(state, data) {
      const enteringVehicle = {
        date: data.date,
        cedula: data.cedula,
        perfil: data.perfil,
        vehiculo: data.vehiculo,
        placa: data.placa,
        payment: data.payment
      };
      state.parking.push(enteringVehicle);
    },
    PAYMENT(state, data) {
      var tzoffset = new Date().getTimezoneOffset() * 60000;
      const dateToday = new Date(Date.now() - tzoffset)
        .toISOString()
        .substr(0, 10);
      const index = state.parking.findIndex(
        employee => employee.date === dateToday && employee.placa == data.placa
      );
      //se crea el objeto con las propiedades cambiadas
      const vehicle = Object.assign({}, state.parking[index], {
        payment: "SI"
      });
      Vue.set(state.parking, index, vehicle);
    }
  }
};
