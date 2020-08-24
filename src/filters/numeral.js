import numeral from "numeral";

// Función que recibe un argumento (Número o String numérico) y lo devuelve formateado
const formatNumber = num => {
  if (!num) {
    return 0;
  }
  return numeral(Number(num)).format();
};

export { formatNumber };
