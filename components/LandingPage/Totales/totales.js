import { useDeviceContext } from '../../../context/StateContext';
import {
    Comision,
    ComisionAgencia,
    ComisionVendedor,
    EncabezadoDatagrid,
    Fecha,
    ImporteVenta,
    LineaTotales,
    Maquina,
    TotalesContainer,
    TotalesWrapper,
    Vendedor,
    Venta,
} from './totalesStyles';

const Totales = ({ resumenDiario, print = false }) => {
    const { screenWidth } = useDeviceContext();
    const totalesVenta =
        resumenDiario?.VentaAgencia + resumenDiario?.VentaVendedores;
    return (
        <TotalesWrapper>
            <TotalesContainer print={print}>
                <Fecha print={print}></Fecha>
                <Maquina></Maquina>
                <Vendedor>Agencia</Vendedor>
                <ImporteVenta print={print}>
                    {resumenDiario?.VentaAgencia.toFixed(2)}
                </ImporteVenta>
                <div></div>
                <ComisionAgencia print={print}>
                    {resumenDiario?.ComisionAgencia.toFixed(2)}
                </ComisionAgencia>
                <Fecha print={print}></Fecha>
                <Maquina></Maquina>
                <Vendedor>Vendedores</Vendedor>
                <ImporteVenta print={print}>
                    {resumenDiario?.VentaVendedores.toFixed(2)}
                </ImporteVenta>
                <ComisionVendedor print={print}>
                    {resumenDiario?.ComisionVendedores.toFixed(2)}
                </ComisionVendedor>
                <div></div>
                <Fecha print={print}></Fecha>
                <Maquina></Maquina>
                <Vendedor totales>TOTALES DEL DÍA</Vendedor>
                <ImporteVenta totales print={print}>
                    {totalesVenta.toFixed(2)}
                </ImporteVenta>
                <ComisionVendedor noMoneda={false} totales print={print}>
                    {resumenDiario?.ComisionVendedores.toFixed(2)}
                </ComisionVendedor>
                <ComisionAgencia totales print={print}>
                    {resumenDiario?.ComisionAgencia.toFixed(2)}
                </ComisionAgencia>
            </TotalesContainer>
            <LineaTotales
                screenWidth={screenWidth <= 1237 ? screenWidth : 1237}
                print={print}
            ></LineaTotales>
        </TotalesWrapper>
    );
};

export default Totales;
