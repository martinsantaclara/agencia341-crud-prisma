import {
    HeadComision,
    HeadComisionAgencia,
    HeadComisionVendedor,
    HeadDatagridContainer,
    HeadFecha,
    HeadMaquina,
    HeadVendedor,
    HeadVenta,
} from './DatagridStyles';

const HeadDatagrid = ({ print = false }) => {
    return (
        <HeadDatagridContainer print={print}>
            <HeadFecha print={print}>Fecha</HeadFecha>
            <HeadMaquina>Máquina</HeadMaquina>
            <HeadVendedor>Vendedor</HeadVendedor>
            <HeadVenta>Importe Venta</HeadVenta>
            <HeadComision print={print}>Comisión</HeadComision>
            <HeadComisionVendedor>Vendedor</HeadComisionVendedor>
            <HeadComisionAgencia>Agencia</HeadComisionAgencia>
        </HeadDatagridContainer>
    );
};

export default HeadDatagrid;
