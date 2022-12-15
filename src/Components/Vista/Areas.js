import React from 'react'
import { CardGroup, Card, CardImg, CardBody, CardTitle, CardSubtitle, CardText } from 'reactstrap';
import { Button } from '@material-ui/core'; 
import Imagenes from '../assets/Imagenes';
import "../Style/App.css";

export const Areas = () => {
    return (
        <div>
             <CardGroup>
                <Card>
                    <CardImg
                        alt="Card image cap"
                        src={Imagenes.Oficinas}

                        top
                        width="100%"
                    />
                    <CardBody>
                        <CardTitle tag="h5">
                            Oficinas
                        </CardTitle>
                        <CardSubtitle
                            className="mb-2 text-muted"
                            tag="h6"
                        >
                            Tabla de las Oficinas
                        </CardSubtitle>
                        <CardText>
                            En esta tabla vas a poder Ingresar, Ver, Modificar y Eliminar todos los datos referentes a las oficinas del colegio Cambridge.
                        </CardText>
                        <Button
                            color='primary'
                            variant='contained'
                            href='//localhost:3000/Oficinas'
                        
                        >
                            Ver tabla
                        </Button>
                    </CardBody>
                </Card>
                <Card>
                    <CardImg
                        alt="Card image cap"
                        src={Imagenes.Salones}
                        top
                        width="100%"
                    />
                    <CardBody>
                        <CardTitle tag="h5">
                        Salones
                        </CardTitle>
                        <CardSubtitle
                            className="mb-2 text-muted"
                            tag="h6"
                        >
                            Tabla de los salones de clase
                        </CardSubtitle>
                        <CardText>
                            En esta tabla vas a poder Ingresar, Ver, Modificar y Eliminar todos los datos referentes a los salones de clase del colegio Cambridge.
                        </CardText>
                        <Button
                            color='primary'
                            variant='contained'
                            href='//localhost:3000/Salones'
                        >
                            Ver tabla
                        </Button>
                    </CardBody>
                </Card>
            </CardGroup>

        </div>
    )
}
