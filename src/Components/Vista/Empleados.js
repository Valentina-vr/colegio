import React from 'react'
import { CardGroup, Card, CardImg, CardBody, CardTitle, CardSubtitle, CardText } from 'reactstrap';
import { Button } from '@material-ui/core'; 
import Imagenes from '../assets/Imagenes';

export const Empleados = () => {
    return (
        <div>
            <CardGroup>
                <Card>
                    <CardImg
                        alt="Card image cap"
                        src={Imagenes.Administrativos}

                        top
                        width="100%"
                    />
                    <CardBody>
                        <br />
                        <CardTitle tag="h5">
                            Administrativos
                        </CardTitle>
                        <CardSubtitle
                            className="mb-2 text-muted"
                            tag="h6"
                        >
                            Tabla de los administrativos
                        </CardSubtitle>
                        <CardText>
                            En esta tabla vas a poder Ingresar, Ver, Modificar y Eliminar todos los datos referentes a los administrativos del colegio Cambridge.
                        </CardText>
                        <Button
                            color='primary'
                            variant='contained'
                            href='//localhost:3000/Administrativos'
                        
                        >
                            Ver tabla
                        </Button>
                    </CardBody>
                </Card>
                <Card>
                    <CardImg
                        alt="Card image cap"
                        src={Imagenes.Profesores}
                        top
                        width="100%"
                    />
                    <CardBody>
                        <CardTitle tag="h5">
                        Profesores
                        </CardTitle>
                        <CardSubtitle
                            className="mb-2 text-muted"
                            tag="h6"
                        >
                            Tabla de los profesores
                        </CardSubtitle>
                        <CardText>
                            En esta tabla vas a poder Ingresar, Ver, Modificar y Eliminar todos los datos referentes a los administrativos del colegio Cambridge.
                        </CardText>
                        <Button
                            color='primary'
                            variant='contained'
                            href='//localhost:3000/Profesores'
                        >
                            Ver tabla
                        </Button>
                    </CardBody>
                </Card>
            </CardGroup>

        </div>
    )
}

