import { Fragment } from 'react';
import MainHeader from '../mainHeader/MainHeader';

type Props = {
    children: JSX.Element;
};

const Layout: React.FC<Props> = ({ children }) => (
    <Fragment>
        <MainHeader />
        <main>{children}</main>
    </Fragment>
);

export default Layout;
