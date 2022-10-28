import React, { useState, useEffect, useRef } from 'react';
import { useRouter } from 'next/router';

export const Resumen = () => {
    const router = useRouter();
    // const baseUrl = process.env.NEXT_PUBLIC_BASE_URL;

    useEffect(() => {
        setTimeout(() => {
            // router.push('http://localhost:3000/clientes');
            router.push(`/clientes`);
        }, 3000);
    }, []);

    return <h1>Loading...</h1>;
};
