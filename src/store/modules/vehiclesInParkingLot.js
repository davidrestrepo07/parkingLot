export default {
  state: {
    parking: [
      {
        date: "2020-08-23",
        cedula: "1234567890",
        perfil: "empleado",
        vehiculo: "carro",
        placa: "FH3456"
      },
      {
        date: "2020-08-26",
        cedula: "1234567891",
        perfil: "empleado",
        vehiculo: "carro",
        placa: "RTE345"
      },
      {
        date: "2020-08-27",
        cedula: "1234567890",
        perfil: "empleado",
        vehiculo: "moto",
        placa: "YTR14T"
      },
      {
        date: "2020-08-23",
        cedula: "1234567899",
        perfil: "visitante",
        vehiculo: "carro",
        placa: "REW342"
      }
    ]
  },
  mutations: {
    ENTER_VEHICLE(state, data) {
      const enteringVehicle = {
        date: data.date,
        cedula: data.cedula,
        perfil: data.perfil
      };
      state.parking.push(enteringVehicle);
    }
  }
};
