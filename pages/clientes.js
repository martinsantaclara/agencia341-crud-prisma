import { useEffect, useState } from 'react';
import axios from 'axios';
import DataTable from 'react-data-table-component';
import { useRouter } from 'next/router';
import Link from 'next/link';

import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as Yup from 'yup';
import { Button, Card, CardBody, CardHeader } from 'reactstrap';

import { FaPenAlt, FaTrashAlt } from 'react-icons/fa';

import { Layout } from '../layout/Layout';
import { Container, Printer, TitleCardHeader } from '../styles/globals';
import {
    ModalBodyStyled,
    ModalCardBody,
    ModalCardFooter,
    ModalCardHeader,
    ModalContainer,
    ModalHeaderStyled,
    ModalTitle,
} from '../styles/modalStyles';
import { LinkWrapper } from '../components/LandingPage/Header/headerStyles';
import { FcBusinessman } from 'react-icons/fc';
import ReactTooltip from 'react-tooltip';
import { FaPlusCircle } from 'react-icons/fa';
import { useVentasContext, useStateContext } from '../context/StateContext';
import Dialog from '../components/Commons/DialogBox/dialog';
import { SubmitButton } from '../components/Commons/DialogBox/dialogStyles';

import toast, { Toaster } from 'react-hot-toast';
import handleNotifications from '../utils/handleNotifications';

const modeloCliente = {
    id: 0,
    nombre: '',
    maximo3: '',
    entero: 0,
    nonulo: '',
    positivo: 0,
};

const Customers = () => {
    const [cliente, setCliente] = useState(modeloCliente);
    const [apeynom, setApeynom] = useState('');
    const [pendiente, setPendiente] = useState(true);
    // const [clientes, setClientes] = useState([]);
    const [verModal, setVerModal] = useState(false);

    const { clientes, setClientes } = useVentasContext();

    // const baseUrl = process.env.NEXT_PUBLIC_BASE_URL;
    // console.log(baseUrl);

    // const { data, error } = useSWR('/api/clientes', fetcher);

    const { darkMode } = useStateContext();
    const [dialogBox, setDialogBox] = useState(false);

    const [crud, setCrud] = useState('');
    const [nuevo, setNuevo] = useState(false);
    const validationSchema = Yup.object().shape({
        // ApellidoVendedor: Yup.string().required('Debe ingresar el Apellido!!!'),
    });
    const formOptions = { resolver: yupResolver(validationSchema) };

    // get functions to build form with useForm() hook
    const { register, handleSubmit, formState, setValue, clearErrors } =
        useForm(formOptions);
    const { errors } = formState;

    const handleChange = (e) => {
        let value;
        value = e.target.value;
        setCliente({
            ...cliente,
            [e.target.name]: value,
        });
    };

    const obtenerClientes = async () => {
        try {
            const { data } = await axios.get(`/api/clientes`);
            console.log(data);
            // setClientes(data);
            setClientes([]);
            setPendiente(false);
        } catch (error) {
            console.log(error);

            handleNotifications(
                'danger',
                'Error inesperado!',
                'Contáctese con su Administrador!!!'
            );

            // Ir a una página temporaria
            // router.push('/');
        }
    };

    useEffect(() => {
        obtenerClientes();
    }, []);

    const columns = [
        {
            name: 'id',
            selector: (row) => row.id,
            sortable: true,
            // center: true,
            width: '150px',
            style: {
                paddingLeft: '65px',
            },
        },
        {
            name: 'nombre',
            selector: (row) => row.nombre,
            sortable: true,
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
        {
            name: '',
            cell: (row) => (
                <>
                    <Button
                        color="primary"
                        size="sm"
                        className="me-2"
                        onClick={() => abrirEditarModal(row, false)}
                        data-tip="Modifica Cliente"
                    >
                        <FaPenAlt></FaPenAlt>
                    </Button>

                    <Button
                        color="danger"
                        size="sm"
                        // onClick={() => eliminarVendedor(row.id)}
                        onClick={() => deleteCliente(row)}
                        data-tip="Elimina Cliente"
                    >
                        <FaTrashAlt></FaTrashAlt>
                    </Button>
                    <ReactTooltip type="info" />
                </>
            ),
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
                backgroundColor: darkMode
                    ? 'hsl(219 29% 14%)'
                    : 'hsl(0 0% 100%)',
                color: darkMode ? 'hsl(0 0% 100%)' : 'hsl(219 29% 14%)',
                border: '1px solid hsl(214 17% 51%)', // override the row height
            },
        },
    };

    const paginationComponentOptions = {
        rowsPerPageText: 'Filas por página',
        rangeSeparatorText: 'de',
        selectAllRowsItem: true,
        selectAllRowsItemText: 'Todos',
    };

    const abrirEditarModal = (cliente, esNuevo) => {
        setNuevo(esNuevo);
        setCliente(cliente);
        setValue('id', cliente.id);
        setValue('nombre', cliente.nombre);
        setValue('maximo3', cliente.maximo3);
        setValue('entero', cliente.entero);
        setValue('nonulo', cliente.nonulo);
        setValue('positivo', cliente.positivo);
        setVerModal(true);
    };

    const cerrarModal = (e) => {
        e.preventDefault();
        setCliente(modeloCliente);
        setVerModal(false);
    };

    const deleteCliente = (cliente) => {
        setCliente(cliente);
        setApeynom(`${cliente.nombre}  ${cliente.maximo3}`);
        setCrud('delete');
        setDialogBox(true);
    };

    const eliminaCliente = async (id) => {
        // `http://localhost:3000/api/clientes/${id}`

        const { data } = await axios.delete(`/api/clientes/${id}`);
    };

    const elimina = async (id) => {
        const result = await toast.promise(
            eliminaCliente(id),

            {
                loading: <b>Eliminando Cliente...</b>,
                error: (err) => {
                    handleNotifications(
                        'danger',
                        'Error inesperado!',
                        'Contáctese con su Administrador!!!'
                    );
                    setTimeout(() => {
                        setDialogBox(false);
                    }, 3000);
                },
                success: (data) => {
                    handleNotifications(
                        'success',
                        'Elimina Cliente',
                        'Cliente eliminado exitosamente!!!'
                    );
                    obtenerClientes();
                    setCliente(modeloCliente);
                    setTimeout(() => {
                        setDialogBox(false);
                    }, 3000);
                },
            },
            {
                success: {
                    duration: 1,
                },
                error: {
                    duration: 1,
                },
                loading: {
                    style: {
                        backgroundColor: '#2f96b4',
                        padding: '10px',
                        color: '#ffffff',
                    },
                },
            }
        );
    };

    function onSubmit(cliente) {
        setCrud(nuevo ? 'create' : 'update');
        setApeynom(`${cliente.nombre}  ${cliente.maximo3}`);
        setVerModal(false);
        setDialogBox(true);
    }

    const actualizaCliente = async (cliente) => {
        const body = cliente;
        const header = {
            'Content-Type': 'application/json;charset=utf-8',
        };

        if (nuevo) {
            // 'http://localhost:3000/api/clientes',
            //${baseUrl}

            const { data } = await axios.post(`/api/clientes`, body, header);
            return data;
        } else {
            // 'http://localhost:3000/api/clientes',

            const { data } = await axios.put(`/api/clientes`, body, header);
            return data;
        }
    };

    const actualiza = async (cliente) => {
        const result = await toast.promise(
            actualizaCliente(cliente),

            {
                loading: (
                    <b>{`${
                        nuevo ? 'Agregando' : 'Actualizando'
                    } Cliente...`}</b>
                ),
                error: (err) => {
                    const error = err.response.data;
                    handleNotifications(error.type, error.title, error.message);
                    setTimeout(() => {
                        setDialogBox(false);
                    }, 3000);
                },
                success: (data) => {
                    handleNotifications(data.type, data.title, data.message);
                    obtenerClientes();
                    setCliente(modeloCliente);
                    setTimeout(() => {
                        setDialogBox(false);
                    }, 3000);
                },
            },
            {
                success: {
                    duration: 1,
                },
                error: {
                    duration: 1,
                },
                loading: {
                    style: {
                        backgroundColor: '#2f96b4',
                        padding: '10px',
                        color: '#ffffff',
                    },
                },
            }
        );
    };
    return (
        <>
            <Layout>
                <Container crud>
                    <Card
                        style={{
                            maxWidth: '950px',
                            minWidth: '500px',
                            width: '100%',
                        }}
                    >
                        <CardHeader
                            style={{
                                backgroundColor: 'hsl(235 69% 61%)',
                                color: 'hsl(0 0% 100%)',
                                fontSize: '1rem',
                                fontWeight: '600',
                                display: 'flex',
                                justifyContent: 'space-between',
                                alignItems: 'center',
                                padding: '0.25rem 2rem',
                            }}
                        >
                            <TitleCardHeader>Lista de Clientes</TitleCardHeader>
                            <Link
                                href={`/printer/clientes`}
                                passHref
                                prefetch={false}
                            >
                                <a>
                                    <Printer
                                        src="/assets/imagenes/print-icon.png"
                                        alt="imprime clientes"
                                        data-tip="Imprime clientes"
                                    />
                                </a>
                            </Link>
                        </CardHeader>
                        <CardBody
                            style={{
                                backgroundColor: darkMode
                                    ? 'hsl(219 29% 10%)'
                                    : 'hsl(210 22% 82%)',
                            }}
                        >
                            <LinkWrapper
                                style={{
                                    position: 'relative',
                                    width: '80px',
                                }}
                                data-tip="Nuevo Cliente"
                                onClick={() =>
                                    abrirEditarModal(modeloCliente, true)
                                }
                                noHeader
                            >
                                <FcBusinessman size={32}></FcBusinessman>
                                <FaPlusCircle
                                    size={32}
                                    color="hsl(333 69% 56%)"
                                    style={{
                                        position: 'absolute',
                                        right: '-7px',
                                        zIndex: '1',
                                    }}
                                ></FaPlusCircle>
                            </LinkWrapper>
                            <hr></hr>
                            <DataTable
                                columns={columns}
                                data={clientes}
                                progressPending={pendiente}
                                pagination
                                paginationComponentOptions={
                                    paginationComponentOptions
                                }
                                customStyles={customStyles}
                            />
                        </CardBody>
                    </Card>
                </Container>
                <Toaster />
                <ReactTooltip type="info" />
            </Layout>

            <ModalContainer isOpen={verModal} hide={dialogBox}>
                <ModalHeaderStyled>
                    <ModalTitle>Detalle Cliente</ModalTitle>
                </ModalHeaderStyled>
                <ModalBodyStyled>
                    <div className="card">
                        <form>
                            <ModalCardHeader className="card-header">{`${
                                nuevo ? 'Nuevo ' : 'Actualiza '
                            }Cliente`}</ModalCardHeader>
                            <ModalCardBody className="card-body">
                                <div className="form-group mb-3">
                                    <label>Id</label>
                                    <input
                                        name="id"
                                        type="number"
                                        {...register('id')}
                                        className={`form-control ${
                                            errors.nombre ? 'is-invalid' : ''
                                        }`}
                                        onChange={handleChange}
                                        style={{
                                            backgroundColor: 'transparent',
                                            color: darkMode
                                                ? 'white'
                                                : 'hsl(219 29% 14%)',
                                        }}
                                    />
                                    <div className="invalid-feedback">
                                        {errors.nombre?.message}
                                    </div>
                                </div>
                                <div className="form-group mb-3">
                                    <label>Nombre</label>
                                    <input
                                        name="nombre"
                                        type="text"
                                        {...register('nombre')}
                                        className={`form-control ${
                                            errors.nombre ? 'is-invalid' : ''
                                        }`}
                                        onChange={handleChange}
                                        style={{
                                            backgroundColor: 'transparent',
                                            color: darkMode
                                                ? 'white'
                                                : 'hsl(219 29% 14%)',
                                        }}
                                    />
                                    <div className="invalid-feedback">
                                        {errors.nombre?.message}
                                    </div>
                                </div>
                                <div className="form-group  mb-3">
                                    <label>Maximo3</label>
                                    <input
                                        name="maximo3"
                                        type="text"
                                        {...register('maximo3')}
                                        className="form-control"
                                        onChange={handleChange}
                                        style={{
                                            backgroundColor: 'transparent',
                                            color: darkMode
                                                ? 'white'
                                                : 'hsl(219 29% 14%)',
                                        }}
                                    />
                                </div>
                                <div className="form-group  mb-3">
                                    <label>Entero</label>
                                    <input
                                        name="entero"
                                        type="number"
                                        {...register('entero')}
                                        className="form-control"
                                        onChange={handleChange}
                                        style={{
                                            backgroundColor: 'transparent',
                                            color: darkMode
                                                ? 'white'
                                                : 'hsl(219 29% 14%)',
                                        }}
                                    />
                                </div>
                                <div className="form-group  mb-3">
                                    <label>No Nulo</label>
                                    <input
                                        name="nonulo"
                                        type="text"
                                        {...register('nonulo')}
                                        className="form-control"
                                        onChange={handleChange}
                                        style={{
                                            backgroundColor: 'transparent',
                                            color: darkMode
                                                ? 'white'
                                                : 'hsl(219 29% 14%)',
                                        }}
                                    />
                                </div>
                                <div className="form-group  mb-3">
                                    <label>Positivo</label>
                                    <input
                                        name="positivo"
                                        type="number"
                                        {...register('positivo')}
                                        className="form-control"
                                        onChange={handleChange}
                                        style={{
                                            backgroundColor: 'transparent',
                                            color: darkMode
                                                ? 'white'
                                                : 'hsl(219 29% 14%)',
                                        }}
                                    />
                                </div>
                            </ModalCardBody>
                            <ModalCardFooter
                                className="card-footer"
                                style={{ textAlign: 'right' }}
                            >
                                <SubmitButton
                                    cancel
                                    onClick={cerrarModal}
                                    className="btn btn-secondary"
                                >
                                    Cancelar
                                </SubmitButton>
                                <SubmitButton
                                    type="submit"
                                    disabled={formState.isSubmitting}
                                    className="btn btn-primary"
                                    style={{ marginLeft: '15px' }}
                                    crud
                                    onClick={handleSubmit(onSubmit)}
                                >
                                    {formState.isSubmitting && (
                                        <span className="spinner-border spinner-border-sm me-2"></span>
                                    )}{' '}
                                    <p
                                        style={{
                                            display: 'inline-block',
                                        }}
                                    >
                                        {nuevo ? 'Agrega' : 'Actualiza'}
                                    </p>
                                </SubmitButton>
                            </ModalCardFooter>
                        </form>
                    </div>
                </ModalBodyStyled>
            </ModalContainer>
            {dialogBox && (
                <Dialog
                    primaryMessage={`${
                        crud === 'delete'
                            ? 'Elimina al '
                            : crud === 'create'
                            ? 'Agrega al '
                            : 'Actualiza datos del '
                    } Cliente`}
                    secondaryMessage={apeynom}
                    imprime={false}
                    imprimeCheck={null}
                    setImprimeCheck={null}
                    setDialogBox={setDialogBox}
                    clickSubmit={() =>
                        crud === 'delete'
                            ? elimina(cliente.id)
                            : actualiza(cliente)
                    }
                />
            )}
        </>
    );
};

export default Customers;
