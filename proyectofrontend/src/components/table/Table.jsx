import Header from "./Header";
import Body from "./Body";
function Table(props) {
    return (
        <div className="mx-5">
            <table class="table">
                <caption>{props.name}</caption>
                <Header columns={props.columnsAlias} tools={props.tools} />
                <Body
                    path={props.path}
                    columns={props.columns}
                    tools={props.tools}
                    data={props.data}
                />
            </table>
        </div>
    );
}

export default Table;
