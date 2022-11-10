import Table from "../table/Table";
import getData from "../../js/getData";

function ProductosIndex(props) {
    let datosTabla = getData("url", {}, "get", {});
    return (
        <div>
            <h3>Productos</h3>
            <p>Bienvenidos a la pagina de administración de productos</p>
            <Table
                data={datosTabla}
                path={"/productos"}
                name={"Tabla de productos"}
                columns={["id", "title", "description", "price"]}
                columnsAlias={["ID", "PRODUCTO", "DESCRIPCIÓN", "PRECIO"]}
                tools={["update", "delete"]}
            />
        </div>
    );
}

export default ProductosIndex;
