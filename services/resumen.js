import axios from 'axios';

export const creaResumen = async (
    fecha,
    ventas,
    resumenDiario,
    ventasxvendedor
) => {
    const body = {
        fechaVenta: fecha,
        ventas: ventas,
        resumenDiario: resumenDiario,
        ventasxvendedor: ventasxvendedor,
    };
    const { data } = await axios.post('http://localhost:3000/api/ventas', body);
    return data;
};

// export const destroySummary = async (date) => {
//     // const body = {
//     //     date: date,
//     // };
//     const { data } = await axios.delete('http://localhost:3000/api/ventas', {
//         data: date,
//     });
//     return data;
// };

export const actualizaResumen = async (
    fecha,
    ventas,
    resumenDiario,
    ventasxvendedor
) => {
    const body = {
        fechaVenta: fecha,
        ventas: ventas,
        resumenDiario: resumenDiario,
        ventasxvendedor: ventasxvendedor,
    };
    const { data } = await axios.put('http://localhost:3000/api/ventas', body);
    // console.log(data);
    return data;
};
