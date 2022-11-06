import React from 'react';
import {
    Container,
    HeaderLeft,
    HeaderPrint,
    HeaderRight,
    HeaderTitle,
} from '../../../styles/globals';
import { Card, CardBody, CardHeader } from 'reactstrap';
import DataTable from 'react-data-table-component';
import { GlobalStyles } from '../../../themes/themes';

class ToPrint1 extends React.Component {
    constructor(props) {
        super(props);
    }
    render() {
        const { clientes } = this.props;
        const columns = [
            {
                name: 'id',
                selector: (row) => row.id,
                sortable: true,
                center: true,
            },
            {
                name: 'nombre',
                selector: (row) => row.nombre,
                sortable: true,
                style: {
                    marginLeft: '15px',
                },
            },
            {
                name: 'maximo3',
                selector: (row) => row.maximo3,
                sortable: true,
            },
            {
                name: 'entero',
                selector: (row) => row.entero,
                center: true,
            },
            {
                name: 'nonulo',
                selector: (row) => row.nonulo,
            },
            {
                name: 'positivo',
                selector: (row) => row.positivo,
                center: true,
            },
        ];
        const customStyles = {
            headCells: {
                style: {
                    fontSize: '16px',
                    fontWeight: 800,
                    justifyContent: 'center',
                },
            },
            headRow: {
                style: {
                    backgroundColor: '#eee',
                },
            },
            rows: {
                style: {
                    backgroundColor: 'hsl(0 0% 100%)',
                    color: 'hsl(219 29% 14%)',
                    border: '1px solid hsl(214 17% 51%)', // override the row height
                },
            },
        };
        return (
            <>
                <GlobalStyles print />
                <Container flxdirection={'column'} crud print>
                    <HeaderPrint>
                        <HeaderLeft>Agencia 341</HeaderLeft>
                        <HeaderTitle>Listado de Clientes</HeaderTitle>
                        <HeaderRight>Puerto Piray - Misiones</HeaderRight>
                    </HeaderPrint>
                    <Card
                        style={{
                            maxWidth: '950px',
                            minWidth: '500px',
                            width: '100%',
                        }}
                    >
                        <CardBody
                            style={{
                                backgroundColor: 'hsl(210 22% 82%)',
                            }}
                        >
                            <DataTable
                                columns={columns}
                                data={clientes}
                                customStyles={customStyles}
                            />
                        </CardBody>
                    </Card>
                </Container>
            </>
        );
    }
}

export const ToPrint = React.forwardRef((props, ref) => {
    // eslint-disable-line max-len
    return <ToPrint1 ref={ref} clientes={props.clientes} />;
});
