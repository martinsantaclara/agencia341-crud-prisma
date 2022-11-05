import * as React from 'react';

class ComponentToPrint1 extends React.Component {
    constructor(props) {
        super(props);
    }
    render() {
        return <h1>Imprime prueba print</h1>;
    }
}

export const ComponentToPrint = React.forwardRef((props, ref) => {
    // eslint-disable-line max-len
    return <ComponentToPrint1 ref={ref} />;
});
