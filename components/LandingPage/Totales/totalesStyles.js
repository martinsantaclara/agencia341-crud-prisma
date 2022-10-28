import styled from 'styled-components';

export const TotalesWrapper = styled.div`
    position: relative;
`;

export const TotalesContainer = styled.div`
    display: grid;
    grid-template-columns: ${({ print }) =>
        print
            ? '80px 200px 130px repeat(2, 120px)'
            : '120px 100px 200px repeat(3, 150px)'};
    grid-template-rows: repeat(2, 30px) 40px;
    column-gap: 5px;
    max-width: 920px;
    margin: 0 auto;

    // position: absolute;
    // right: -22px;
`;

export const Fecha = styled.div`
    display: ${({ print }) => (print ? 'none' : '')};
`;

export const Maquina = styled.div``;

export const Vendedor = styled.div`
    padding: 5px;
    font-size: 1rem;
    margin-right: 5px;
    margin-top: ${({ totales }) => (totales ? '10px' : '')};
`;

export const ImporteVenta = styled.div`
    position: relative;
    font-size: 1rem;
    text-align: right;
    padding: 5px 10px 5px 5px;
    background-color: ${({ totales, theme }) =>
        totales ? theme.secondary : ''};
    color: ${({ totales }) => (totales ? 'white' : '')};
    margin-top: ${({ totales }) => (totales ? '10px' : '')};
    width: ${({ print }) => (print ? '130px' : '150px')};
    &:before {
        content: '$';
        position: absolute;
        left: 5px;
        // color: black;
        z-index: 1;
    }
`;

export const ComisionVendedor = styled.div`
    position: relative;
    // font-size: 1rem;
    width: ${({ print }) => (print ? '120px' : '150px')};
    text-align: right;
    color: ${({ totales }) => (totales ? 'white' : '')};
    background-color: ${({ totales, theme }) =>
        totales ? theme.secondary : ''};
    padding: 5px;
    margin-top: ${({ totales }) => (totales ? '10px' : '')};
    &:before {
        content: '$';
        position: absolute;
        left: 10px;
    }
`;

export const ComisionAgencia = styled.div`
    position: relative;
    // font-size: 1rem;
    width: ${({ print }) => (print ? '120px' : '150px')};
    text-align: right;
    color: ${({ totales }) => (totales ? 'white' : '')};
    background-color: ${({ totales, theme }) =>
        totales ? theme.secondary : ''};
    padding: 5px;
    margin-top: ${({ totales }) => (totales ? '10px' : '')};
    &:before {
        content: '$';
        position: absolute;
        left: 10px;
    }
`;

export const LineaTotales = styled.div`
    position: absolute;
    height: 2px;
    background-color: ${({ theme }) => theme.secondary};
    width: ${({ print }) => (print ? '600px' : '685px')};
    right: 0;
    bottom: 38px;
    @media screen and (min-width: 1064px) {
        right: ${({ screenWidth, print }) =>
            print ? '0' : `calc((${screenWidth}px - 1064px) * 0.51)`};
    }
`;
