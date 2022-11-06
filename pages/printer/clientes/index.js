import React, { useState, useEffect, useRef, useCallback } from 'react';
import { useRouter } from 'next/router';
import { useReactToPrint } from 'react-to-print';

import { ToPrint } from '../../../components/ToPrint/Clientes';
import { useVentasContext } from '../../../context/StateContext';

const ImprimeClientes = () => {
    const router = useRouter();
    const componentRef = useRef(null);

    const onBeforeGetContentResolve = useRef(null);

    const [loading, setLoading] = useState(false);
    // const [text, setText] = useState('old boring text');
    const { clientes } = useVentasContext();

    const timeNow = new Date();

    const fecha = new Date()
        .toLocaleDateString('es-AR', {
            year: 'numeric',
            month: 'numeric',
            day: 'numeric',
        })
        .replaceAll('/', '-');
    const time = new Date().toLocaleTimeString('es-AR', {
        hour: 'numeric',
        minute: 'numeric',
    });

    let hora = Array.from(time).map((digit) => {
        return digit === ':' ? 'h' : digit;
    });
    hora.push('m');
    hora = hora.join('');
    console.log(hora);

    // .replace(',', '');
    // const fechaLarga = new Date().toLocaleString().replace(',', '');
    console.log(fecha);
    console.log(hora);

    const titulo = `ListadoClientes ${fecha} ${hora}`;

    // console.log(ventas);

    const handleAfterPrint = useCallback(() => {
        router.push('/');

        // console.log('`onAfterPrint` called'); // tslint:disable-line no-console
    }, []);

    // const handleBeforePrint = useCallback(() => {
    //     console.log('`onBeforePrint` called'); // tslint:disable-line no-console
    // }, []);

    const handleOnBeforeGetContent = useCallback(() => {
        // console.log('`onBeforeGetContent` called'); // tslint:disable-line no-console
        setLoading(true);
        // setText('Loading new text...');

        return new Promise((resolve) => {
            onBeforeGetContentResolve.current = resolve;

            setTimeout(() => {
                setLoading(false);
                // setText('New, Updated Text!');
                resolve();
            }, 3000);
        });
    }, [setLoading]);

    const reactToPrintContent = useCallback(() => {
        return componentRef.current;
    }, [componentRef.current]);

    const handlePrint = useReactToPrint({
        content: reactToPrintContent,
        documentTitle: titulo,
        onBeforeGetContent: handleOnBeforeGetContent,
        // onBeforePrint: handleBeforePrint,
        onAfterPrint: handleAfterPrint,
        removeAfterPrint: true,
    });

    // useEffect(() => {
    //     if (
    //         text === 'New, Updated Text!' &&
    //         typeof onBeforeGetContentResolve.current === 'function'
    //     ) {
    //         onBeforeGetContentResolve.current();
    //     }
    // }, [onBeforeGetContentResolve.current, text]);

    useEffect(() => {
        setTimeout(() => {
            handlePrint();
        }, 2000);
    }, []);

    return (
        <div>
            {loading && <p className="indicator">Creando Impresión...</p>}
            <ToPrint ref={componentRef} clientes={clientes} />
        </div>
    );
};

export default ImprimeClientes;
