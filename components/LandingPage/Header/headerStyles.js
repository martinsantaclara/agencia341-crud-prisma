import styled from 'styled-components';

export const HeaderContainer = styled.header`
    padding: 1.5rem 0 0;
    position: relative;

    @media ${({ theme }) => theme.breakpoints.md} {
        // padding: 2.625rem 0 5.375rem;
    }

    ::before {
        content: '';
        position: absolute;
        top: 0;
        background: url(/assets/bg-pattern-header-mobile.svg) no-repeat center
            center;
        background-size: cover;
        width: 100%;
        height: 100px;
        @media ${({ theme }) => theme.breakpoints.md} {
            background: url(/assets/bg-pattern-header-tablet.svg) no-repeat
                center center;
            background-size: cover;
        }

        @media ${({ theme }) => theme.breakpoints.xxl} {
            background: url(/assets/bg-pattern-header-desktop.svg) no-repeat
                center center;
            background-size: cover;
        }
    }
`;

export const Logo = styled.img`
    width: 64px;
    height: 64px;
`;

export const NavLink = styled.a`
    display: ${({ linkFooter }) => (linkFooter ? 'block' : 'inline-block')};
    font-size: ${({ mobile, theme, linkFooter }) =>
        linkFooter
            ? theme.fsText_md
            : mobile
            ? theme.fsText_lg
            : theme.fsText_xs}rem;
    font-weight: ${({ mobile, theme, linkFooter }) =>
        linkFooter ? theme.fwRegular : mobile ? theme.fwBold : theme.fwMedium};
    line-height: 1.5;
    letter-spacing: ${({ linkFooter }) => (linkFooter ? '-0.5px' : '-0.29px')};
    color: ${({ theme, linkFooter }) =>
        linkFooter ? theme.onSecondary1 : theme.onBackground};
    margin-bottom: ${({ mobile, linkFooter, lastChild }) =>
        linkFooter ? (lastChild ? 0 : 0.8125) : mobile ? 1.5 : 0}rem;
    margin-left: ${({ mobile, linkFooter }) =>
        mobile || linkFooter ? 0 : 'clamp(0.5rem, 7vw - 2.87rem, 2rem)'};
    cursor: pointer;
    &:hover {
        color: ${({ theme, linkFooter }) =>
            linkFooter ? theme.onSecondaryHover : theme.onBackgroundOpacity};
    }
    &:first-child {
        margin-left: 0;
    }
    &:nth-last-child(1) {
        margin-bottom: ${({ linkFooter }) => (linkFooter ? '' : 0)};
    }
`;

export const Links = styled.nav`
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    flex-grow: 1;
`;

export const DesktopMenu = styled.div`
    flex-grow: 1;
    display: flex;
    justify-content: space-between;
    align-items: center;
    z-index: 1;
`;

export const DarkLightTheme = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 7rem;
    height: 1.25rem;
`;
export const Sun = styled.img`
    width: 1.25rem;
`;
export const ThemeToggle = styled.div`
    display: flex;
    align-items: center;
    width: 3rem;
    height: 1.5rem;
    background-color: ${({ theme }) => theme.btnClr};
    border-radius: 0.75rem;
    position: relative;
    cursor: pointer;
`;
export const SwitchTheme = styled.button`
    position: absolute;
    left: ${({ darkMode }) => (darkMode ? '' : '5px')};
    right: ${({ darkMode }) => (darkMode ? '5px' : '')};
    width: 0.875rem;
    height: 0.875rem;
    background-color: ${({ theme }) => theme.btnBg};
    border: none;
    border-radius: 50%;
    cursor: pointer;
    :hover {
        background-color: ${({ theme }) => theme.btnHoverBg};
    }
`;
export const Moon = styled.img`
    width: 0.75rem;
`;

export const LinkWrapper = styled.a`
    // width: 145px;
    border: 1px solid
        ${({ theme, noHeader }) =>
            noHeader ? theme.onBackground : theme.onPrimary};
    display: flex;
    // flex-direction: column;
    // justify-content: center;
    align-items: center;
    padding: 0.5rem 1rem;
    border-radius: 30px;
    cursor: pointer;
    margin-left: ${({ left, right }) => (left ? '' : right ? '5rem' : '.5rem')};
`;
