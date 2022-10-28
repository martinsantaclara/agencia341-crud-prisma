import styled from 'styled-components';
import { GlobalContainer } from '../../../styles/globals';
import DatePicker from 'react-datepicker';

export const ResumenContainer = styled.section`
    ${GlobalContainer}
    margin: 5.25rem auto 2rem;
    display: grid;
    grid-template-columns: 1fr;
    justify-content: center;
    row-gap: 3rem;
    @media ${({ theme }) => theme.breakpoints.md} {
        max-width: ${({ print }) => (print ? '730px' : '69.375rem')};
    }

    @media ${({ theme }) => theme.breakpoints.xxl} {
        max-width: ${({ print }) => (print ? '730px' : '69.375rem')};
    }
`;

export const ResumenWrapper = styled.div`
    width: 100%;
    padding: 0 2rem 1rem;
    background-color: ${({ theme }) => theme.surface};
    border-radius: 0.375rem;
    max-width: ${({ print }) => (print ? '738px' : '')};

    // @media ${({ theme }) => theme.breakpoints.md} {
    //     padding: 0 1rem 2.25rem 2rem;
    // }
`;

export const ResumenContent = styled.article`
    margin: -4rem auto 0;
`;

export const HeadResumen = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-bottom: 20px;
`;

export const FechaContainer = styled.div`
    display: flex;
    align-items: center;
    width: ${({ print }) => (print ? '100%' : '500px')};
`;

export const TitleResumen = styled.h1`
    font-size: 24px;
    width: ${({ print }) => (print ? '100%' : '200px')};
    color: ${({ theme }) => theme.clrHeading};
    margin-bottom: ${({ print }) => (print ? '1rem' : '')};
`;

export const FechaPicker = styled(DatePicker)`
    width: 150px;
    border-radius: 10px;
    font-size: 1.5rem;
    text-align: center;
    cursor: pointer;
`;

export const BtnIr = styled.div`
    border-radius: 20px;
    width: 75px;
    // margin: 2rem 0 2rem auto;
    padding: 0.5rem 2rem;
    background-color: ${({ theme }) => theme.primary};
    color: ${({ theme }) => theme.onPrimary};
    cursor: pointer;
    text-align: center;
    &:focus,
    &:hover {
        background-color: ${({ theme }) => theme.btnHoverBg};
    }
`;

export const Printer = styled.img`
    width: 64px;
    height: 64px;
`;

export const BtnGuardar = styled.div`
    border-radius: 30px;
    width: ${({ actualiza }) => (actualiza ? '210px' : '180px')};
    margin: 2rem 0 2rem auto;
    padding: 1rem 2rem;
    background-color: ${({ theme }) => theme.primary};
    color: ${({ theme, disable }) =>
        disable ? theme.onSurface2 : theme.onPrimary};
    cursor: pointer;
    text-align: center;
    font-weight: ${({ theme }) => theme.fwBold};
    &:focus,
    &:hover {
        background-color: ${({ theme }) => theme.btnHoverBg};
    }
`;

// display: flex;
//     justify-content: center;
//     align-items: center;
