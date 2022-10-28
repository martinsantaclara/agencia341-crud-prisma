import { PrismaClient } from '@prisma/client';
import handleError from '../../../utils/handleErrors';
const prisma = new PrismaClient();

const handler = async (req, res) => {
    const { id } = req.query;
    switch (req.method) {
        case 'DELETE':
            try {
                const deleteCliente = await prisma.cliente.delete({
                    where: {
                        id: parseInt(id),
                    },
                });
                // res.status(200).send({
                //     type: 'success',
                //     title: 'Elimina Cliente',
                //     message: 'Cliente eliminado exitosamente!!!',
                // });
                res.status(200).send('ok');
            } catch (error) {
                // res.status(500).send({
                //     type: 'danger',
                //     title: 'Error inesperado!',
                //     message: 'Contáctese con su Administrador',
                // });
                // handleError(res, error);
                res.status(500).send(error);
            }
            break;
    }
};

export default handler;
