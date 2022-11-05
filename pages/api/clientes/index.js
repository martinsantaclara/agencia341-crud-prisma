import { PrismaClient } from '@prisma/client';
import handleError from '../../../utils/handleErrors';
const prisma = new PrismaClient();

const handler = async (req, res) => {
    if (req.method === 'GET') {
        try {
            const allClientes = await prisma.cliente.findMany();
            // const allClientes = await prisma.cliente.findMany({
            //     include: {
            //         localidades: true, // Return all fields
            //     },
            // });

            res.status(200).json(allClientes);
        } catch (error) {
            handleError(res, error);
        }
    } else if (req.method === 'POST') {
        const { id, nombre, maximo3, entero, nonulo, positivo } = req.body;
        try {
            const cliente = await prisma.cliente.create({
                data: {
                    id: parseInt(id),
                    nombre: nombre,
                    maximo3: maximo3,
                    entero: parseInt(entero),
                    nonulo: nonulo,
                    positivo: parseInt(positivo),
                },
            });
            // if (cliente) {
            //     console.log('cliente creado!!!');
            res.status(201).send({
                type: 'success',
                title: 'Nuevo Cliente',
                message: 'Cliente creado exitosamente!!!',
            });
            // }
            // res.status(201).json(cliente)
        } catch (error) {
            handleError(res, error);
        }
    } else if (req.method === 'PUT') {
        const { id, nombre, maximo3, entero, nonulo, positivo } = req.body;
        try {
            const updateCliente = await prisma.cliente.update({
                where: {
                    id: parseInt(id),
                },
                data: {
                    nombre: nombre,
                    maximo3: maximo3,
                    entero: parseInt(entero),
                    nonulo: nonulo,
                    positivo: parseInt(positivo),
                },
            });
            res.status(200).send({
                type: 'success',
                title: 'Actualización de Cliente',
                message: 'Cliente actualizado exitosamente!!!',
            });
        } catch (error) {
            // console.log(error);
            // console.log(error.message);
            handleError(res, error);
        }
    }
};

export default handler;
