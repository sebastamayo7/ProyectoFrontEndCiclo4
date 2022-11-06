function ComponenteFuncion(props) {
    return (
        <div>
            <h3>Este es un componente de TIPO FUNCION</h3>
            <p>
                Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                Tenetur a fugiat voluptas obcaecati natus necessitatibus alias,
                iste veniam. Nulla, eum. Tenetur deleniti ratione sint eligendi
                omnis rerum assumenda animi hic!
            </p>
            <br />
            <p>El mensaje es: {props.msn}</p>
        </div>
    );
}

export default ComponenteFuncion;
