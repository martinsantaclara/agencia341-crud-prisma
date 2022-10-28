import React from 'react';
import Link from 'next/link';
import { Links, LinkWrapper, NavLink } from './headerStyles';
import {
    FcBusinessman,
    FcBarChart,
    FcHome,
    FcSettings,
    FcCellPhone,
} from 'react-icons/fc';
import { AiOutlineSetting } from 'react-icons/ai';
import { IoSettingsSharp } from 'react-icons/io5';
function NavLinks() {
    return (
        <Links>
            <Link href="/product">
                <LinkWrapper left>
                    {/* <NavLink> */}
                    <FcBarChart size={32}></FcBarChart>
                    {/* </NavLink> */}
                    <p
                        style={{
                            color: 'white',
                            fontWeight: '600',
                            marginLeft: '0.5rem',
                            fontSize: '14px',
                        }}
                    >
                        Reportes
                    </p>
                </LinkWrapper>
            </Link>
            <Link href="/vendedores">
                <LinkWrapper right>
                    {/* <NavLink> */}
                    <FcBusinessman size={32}></FcBusinessman>
                    {/* </NavLink> */}
                    <p
                        style={{
                            color: 'white',
                            fontWeight: '600',
                            marginLeft: '0.5rem',
                            fontSize: '14px',
                        }}
                    >
                        Vendedores
                    </p>
                </LinkWrapper>
            </Link>

            <Link href="/maquinas">
                <LinkWrapper>
                    {/* <NavLink> */}
                    <FcCellPhone size={32}></FcCellPhone>
                    {/* </NavLink> */}
                    <p
                        style={{
                            color: 'white',
                            fontWeight: '600',
                            marginLeft: '0.5rem',
                            fontSize: '14px',
                        }}
                    >
                        Máquinas
                    </p>
                </LinkWrapper>
            </Link>
            <Link href="/community">
                <LinkWrapper>
                    {/* <NavLink> */}
                    <IoSettingsSharp size={32} color="white"></IoSettingsSharp>

                    {/* </NavLink> */}
                    <p
                        style={{
                            color: 'white',
                            fontWeight: '600',
                            marginLeft: '0.5rem',
                            fontSize: '14px',
                        }}
                    >
                        Configuración
                    </p>
                </LinkWrapper>
            </Link>
        </Links>
    );
}

export default NavLinks;
