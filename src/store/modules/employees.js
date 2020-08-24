// import Vue from 'vue'
export default {
  state: {
    employees: [
      {
        cedula: "1234567890",
        nombre: "Jairo",
        apellido: "Martinez",
        carros: [
          {
            modelo: "2009",
            placa: "FHE456",
            puertas: "4",
            imagen:
              "https://api.ferrarinetwork.ferrari.com/v2/network-content/medias/resize/5dd55c230cf6995f44de91fd-line-up-ferrari-portofino?apikey=9QscUiwr5n0NhOuQb463QEKghPrVlpaF&width=800&height=600"
          }
        ],
        motos: [
          {
            placa: "YTR14T",
            cilindraje: "200",
            tiempos: "2T",
            imagen:
              "https://bestrestproducts.com/wp-content/uploads/2019/10/Africa-twin-1000.jpg"
          }
        ]
      },
      {
        cedula: "1234567891",
        nombre: "Juliana",
        apellido: "Berrio",
        carros: [
          {
            modelo: "2010",
            placa: "RTE345",
            puertas: "2",
            imagen:
              "https://api.ferrarinetwork.ferrari.com/v2/network-content/medias/resize/5dd55c230cf6995f44de91fd-line-up-ferrari-portofino?apikey=9QscUiwr5n0NhOuQb463QEKghPrVlpaF&width=800&height=600"
          }
        ],
        motos: [
          {
            placa: "TYR98O",
            cilindraje: "500",
            tiempos: "4T",
            imagen:
              "https://bestrestproducts.com/wp-content/uploads/2019/10/Africa-twin-1000.jpg"
          }
        ]
      },
      {
        cedula: "1234567892",
        nombre: "Marlon",
        apellido: "Moreno",
        carros: [
          {
            modelo: "2020",
            placa: "GRT873",
            puertas: "4",
            imagen:
              "https://api.ferrarinetwork.ferrari.com/v2/network-content/medias/resize/5dd55c230cf6995f44de91fd-line-up-ferrari-portofino?apikey=9QscUiwr5n0NhOuQb463QEKghPrVlpaF&width=800&height=600"
          }
        ],
        motos: [
          {
            placa: "ERT63Y",
            cilindraje: "150",
            tiempos: "4T",
            imagen:
              "https://bestrestproducts.com/wp-content/uploads/2019/10/Africa-twin-1000.jpg"
          }
        ]
      },
      {
        cedula: "1234567893",
        nombre: "Jessica",
        apellido: "Medina",
        carros: [
          {
            modelo: "2019",
            placa: "JUR673",
            puertas: "4",
            imagen:
              "https://api.ferrarinetwork.ferrari.com/v2/network-content/medias/resize/5dd55c230cf6995f44de91fd-line-up-ferrari-portofino?apikey=9QscUiwr5n0NhOuQb463QEKghPrVlpaF&width=800&height=600"
          }
        ],
        motos: [
          {
            placa: "DER23T",
            cilindraje: "1000",
            tiempos: "4T",
            imagen:
              "https://bestrestproducts.com/wp-content/uploads/2019/10/Africa-twin-1000.jpg"
          },
          {
            placa: "DRQ23W",
            cilindraje: "1200",
            tiempos: "4T",
            imagen:
              "https://3j1z6j2up0jr3r2zz2111ri2-wpengine.netdna-ssl.com/wp-content/uploads/2020/02/1290-SuperDuke-R-2020-azul-naranja-4.png"
          }
        ]
      }
    ]
  },

  mutations: {
    EDIT_VEHICLES(state, data) {
      //buscar la cedula del empleado
      const index = state.employees.findIndex(
        employee => employee.cedula === data.cedula
      );
      //ver si el nuevo vehiculo es un carro
      if (data.isVehicle == "1") {
        const newVehicle = {
          modelo: data.modelo,
          placa: data.placa,
          puertas: data.puertas,
          imagen:
            "https://api.ferrarinetwork.ferrari.com/v2/network-content/medias/resize/5dd55c230cf6995f44de91fd-line-up-ferrari-portofino?apikey=9QscUiwr5n0NhOuQb463QEKghPrVlpaF&width=800&height=600"
        };
        state.employees[index].carros.push(newVehicle);
      }
      //si no es una moto
      else {
        const newVehicle = {
          cilindraje: data.cilindraje,
          placa: data.placa,
          tiempos: data.tiempos,
          imagen:
            "https://bestrestproducts.com/wp-content/uploads/2019/10/Africa-twin-1000.jpg"
        };
        state.employees[index].motos.push(newVehicle);
      }
    }
  }
};
