function Header(props) {
    let toolHeader = undefined;
    if (props.tools && props.tools.length > 0) {
        toolHeader = <th scope="col">Tools</th>;
    }
    return (
        <thead>
            <tr>
                {props.columns.map(function (value, index) {
                    return <th scope="col">{value}</th>;
                })}

                {/* <th scope="col">#</th>
                <th scope="col">First</th>
                <th scope="col">Last</th>
                <th scope="col">Handle</th> */}
                {/* Renderizar un obejto de js cuando estoy en jsx */}
                {toolHeader}
            </tr>
        </thead>
    );
}

export default Header;
