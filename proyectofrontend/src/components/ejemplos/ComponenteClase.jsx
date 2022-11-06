import React from "react";

class ComponenteClase extends React.Component {
    render() {
        return (
            <div>
                <h2>Este es un componente de tipo CLASE</h2>
                <p>
                    Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                    Cupiditate maxime cumque et necessitatibus, ipsa minima
                    quasi eveniet deserunt quam, quidem explicabo deleniti illo?
                    Delectus reiciendis saepe iste ad beatae atque?
                </p>
                <br />
                <p>El mensaje es: {this.props.msn}</p>
            </div>
        );
    }
}

export default ComponenteClase;
