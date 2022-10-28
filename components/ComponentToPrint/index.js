import * as React from 'react';
import { formatoFechaArgentina } from '../LandingPage/Datagrid/DatagridRow';
import {
    ComisionAgencia,
    ComisionVendedor,
    Fecha,
    NumeroMaquina,
    RowContainer,
    Vendedor,
} from '../LandingPage/Datagrid/DatagridStyles';
import HeadDatagrid from '../LandingPage/Datagrid/HeadDatagrid';
import {
    FechaContainer,
    ResumenContainer,
    ResumenContent,
    ResumenWrapper,
    TitleResumen,
} from '../LandingPage/Resumen/resumenStyles';
import Totales from '../LandingPage/Totales/totales';
import { ImporteVenta } from '../LandingPage/Totales/totalesStyles';

const formatoFechaLarga = (fecha) => {
    let fechaLarga = new Date(fecha.concat(' 00:00:00'))
        .toLocaleDateString('es-AR', {
            weekday: 'long',
            year: 'numeric',
            month: 'long',
            day: 'numeric',
        })
        .replace(',', '');
    const index = fechaLarga.search('de');
    fechaLarga = [
        fechaLarga[0].toUpperCase(),
        fechaLarga.slice(1, index + 3),
        fechaLarga[index + 3].toUpperCase(),
        fechaLarga.slice(index + 4),
    ].join('');
    // console.log(fechaLarga);

    // let weekday = new Date(fecha.concat(' 00:00:00')).toLocaleDateString(
    //     'es-AR',
    //     { weekday: 'long' }
    // );
    // weekday = weekday[0].toUpperCase() + weekday.slice(1);
    // console.log(weekday);
    // const day = new Date(fecha.concat(' 00:00:00')).toLocaleDateString(
    //     'es-AR',
    //     { day: 'numeric' }
    // );
    // let month = new Date(fecha.concat(' 00:00:00')).toLocaleDateString(
    //     'es-AR',
    //     { month: 'long' }
    // );
    // month = month[0].toUpperCase() + month.slice(1);
    // console.log(weekday);
    // const year = new Date(fecha.concat(' 00:00:00')).toLocaleDateString(
    //     'es-AR',
    //     { year: 'numeric' }
    // );

    return fechaLarga;
};

class ComponentToPrint1 extends React.Component {
    constructor(props) {
        super(props);
    }
    render() {
        const { ventas, resumenDiario } = this.props;
        const fechaLarga = formatoFechaLarga(ventas[0].FechaVenta);
        return (
            <ResumenContainer print>
                {/* <style type="text/css" media="print">
                    {
                        '\
                        @page { size: portrait; }\
                    '
                    }
                </style> */}
                <ResumenWrapper print={true}>
                    <ResumenContent>
                        <FechaContainer print>
                            <TitleResumen print>
                                Resumen del día:{' '}
                                <span style={{ marginLeft: '5px' }}>
                                    {fechaLarga}
                                </span>{' '}
                            </TitleResumen>
                        </FechaContainer>
                        <HeadDatagrid print={true}></HeadDatagrid>
                        {ventas.map((venta, index) => {
                            {
                                return (
                                    <RowContainer print={true}>
                                        <Fecha print={true}>
                                            {formatoFechaArgentina(
                                                venta.FechaVenta
                                            )}
                                        </Fecha>
                                        <NumeroMaquina>
                                            {venta.NroMaquina}
                                        </NumeroMaquina>
                                        <Vendedor>{venta.Vendedor}</Vendedor>

                                        <ImporteVenta print>
                                            {parseFloat(
                                                venta?.ImporteVenta
                                            ).toFixed(2)}
                                        </ImporteVenta>

                                        <ComisionVendedor print>
                                            {/* {!venta.vendedor.Agencia
                                    ? `$ ${comisionVendedor.toFixed(2)}`
                                    : ' '}{' '} */}
                                            {venta.ComisionVendedor.toFixed(2)}
                                        </ComisionVendedor>
                                        <ComisionAgencia print>
                                            {/* {!venta.vendedor.Agencia
                                    ? `$ ${comisionVendedor.toFixed(2)}`
                                    : ' '}{' '} */}
                                            {venta.ComisionAgencia.toFixed(2)}
                                        </ComisionAgencia>
                                    </RowContainer>
                                );
                            }
                        })}

                        <Totales
                            resumenDiario={resumenDiario}
                            print={true}
                        ></Totales>
                    </ResumenContent>
                </ResumenWrapper>
            </ResumenContainer>
        );
    }
}

export const ComponentToPrint = React.forwardRef((props, ref) => {
    // eslint-disable-line max-len
    return (
        <ComponentToPrint1
            ref={ref}
            ventas={props.ventas}
            resumenDiario={props.resumenDiario}
        />
    );
});
