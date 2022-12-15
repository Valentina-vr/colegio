import React from 'react';
import { Card, CardBody, CardTitle, CardSubtitle, CardText, CardImg, Button } from 'reactstrap';
/* import { Button } from '@material-ui/core'; */
import Imagenes from '../assets/Imagenes';

export const Home = () => {
    return (
        <div>
            <Card>
                <CardBody className="intro">
                    <CardTitle tag="h5" className="title">
                        Bienvenido al Módulo Administrativo
                    </CardTitle>
                    <CardSubtitle
                        className="mb-2 text-muted"
                        tag="h6"
                    >
                        Aquí encontrarás las instalaciones y empleados del colegio
                    </CardSubtitle>
                    <br />
                    <CardText>
                        El colegio Jaime Isazas Cadavid es una institución de edución básica con excelencia académica ubicada en Medellin, Antioquia
                    </CardText>
                    <CardText>
                        Esta aplicación web está pensada para ayudar con la planeación de espacios y asignación de docentes
                    </CardText>
                    <br />
                    <CardText>
                        El proyecto fue desarrollado en las siguientes tecnologías
                    </CardText>
                    <br />
                    <div >
                        <img src={Imagenes.Tecnologias} alt="Nosotros" className="img-tecnologias" />
                    </div>

                </CardBody>
            </Card>
            <Card className="card-details">
                <CardBody className="details">
                    <CardSubtitle
                        className="mb-3"
                        tag="h6"
                    >
                        Diagrama de clases
                    </CardSubtitle>

                    <CardImg
                        className="diagrama-clases"
                        alt="Card image cap"
                        src={Imagenes.Diagramaclases}
                    />
                </CardBody>
                <Button
                            color='primary'
                            variant='contained'
                            href=''
                        >
                            Ver más detalles
                        </Button>

            </Card>

        </div>
    )
}
