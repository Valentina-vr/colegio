import React from 'react'
import { TableBody, TableCell, TableContainer, TableHead, TableRow, Table } from "@material-ui/core";

const InformeController = (Props) => {

    console.log("Hola", Props);

    return (
        <div className="App">
            <br />
            <h1> Reporte de las areas</h1>
            
            <TableContainer>
                <Table className="table table-bordered">
                    <TableHead>
                        <TableRow>
                            <TableCell>Número de identificación</TableCell>
                            <TableCell>Nombres</TableCell>
                            <TableCell>Areas</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                    <TableRow>
                        <TableCell>1234567</TableCell>
                        <TableCell>Evelin</TableCell>
                        <TableCell>Hernandez</TableCell>
                    </TableRow>
                    </TableBody>
                </Table>
            </TableContainer>
            <br /><br />
            <h1> Tabla de las Empleados </h1>
            <TableContainer>
                <Table className="table table-bordered">
                    <TableHead>
                        <TableRow>
                            <TableCell>Número de identificación</TableCell>
                            <TableCell>Nombres</TableCell>
                            <TableCell>Apellidos</TableCell>
                            <TableCell>Tipo empleado</TableCell>
                            <TableCell>Tipo de Profesor</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableRow>
                        <TableCell>1111111</TableCell>
                        <TableCell>Juan</TableCell>
                        <TableCell>Perez</TableCell>
                        <TableCell>Adminsitrador</TableCell>
                        <TableCell>Contratista</TableCell>
                    </TableRow>
                    <TableRow>
                        <TableCell>2222222</TableCell>
                        <TableCell>Pedro</TableCell>
                        <TableCell>Ortiz</TableCell>
                        <TableCell>Profesor</TableCell>
                        <TableCell>planta</TableCell>
                    </TableRow>
                    <TableBody>

                    </TableBody>
                </Table>
            </TableContainer>
        </div>
    )
}


export default InformeController;