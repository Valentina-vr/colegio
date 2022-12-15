import React, { Component } from "react";
import "../Style/App.css";
import firebase from "../Models/firebase";
import Imagenes from '../assets/Imagenes';
import "bootstrap/dist/css/bootstrap.min.css";
import { Modal, ModalBody, ModalHeader, ModalFooter, CardGroup, Card } from "reactstrap";
import Table from "reactstrap/lib/Table";
import { TableBody, TableCell, TableContainer, TableHead, TableRow } from "@material-ui/core";



class AdminController extends Component {
  state = {
    data: [],
    modalInsertar: false,
    modalEditar: false,
    form: {
      numbIdentificacion: 0,
      idOficina: 0,
      Nombres: '',
      Apellidos: '',
      Correo: ''
    },
    id: 0
  };

  peticionGet = () => {
    firebase.child("Administrativos").on("value", (canal) => {
      if (canal.val() !== null) {
        this.setState({ ...this.state.data, data: canal.val() });
      } else {
        this.setState({ data: [] });
      }
    });
  };

  peticionPost = () => {
    firebase.child("Administrativos").push(this.state.form,
      error => {
        if (error) console.log(error)
      });
    this.setState({ modalInsertar: false });
  }

  peticionPut = () => {
    firebase.child(`Administrativos/${this.state.id}`).set(
      this.state.form,
      error => {
        if (error) console.log(error)
      });
    this.setState({ modalEditar: false });
  }

  peticionDelete = () => {
    if (window.confirm(`¿Estás seguro que deseas el registro?`)) {
      firebase.child(`Administrativos/${this.state.id}`).remove(
        error => {
          if (error) console.log(error)
        });
    }
  }

  handleChange = e => {
    this.setState({
      form: {
        ...this.state.form,
        [e.target.name]: e.target.value
      }
    })
    console.log(this.state.form);
  }

  seleccionarCanal = async (canal, id, caso) => {

    await this.setState({ form: canal, id: id });

    (caso === "Editar") ? this.setState({ modalEditar: true }) :
      this.peticionDelete()

  }

  componentDidMount() {
    this.peticionGet();
  }

  render() {
    return (
      <div className="App">
        <h1 className="title">Empleados Administrativos</h1>
        <br />
        <CardGroup>
            <Card>
              <button id="Insertar" className="btn btn-success btn-agg" onClick={() => this.setState({ modalInsertar: true })}>
              <img src={Imagenes.Add} alt="horse" className="iconAdd"/>
                Agregar empleado</button>
            </Card>
        </CardGroup>

        <br />
        <br />
        <TableContainer>
          <Table className="table table-bordered table-render">
            <TableHead>
              <TableRow>
                <TableCell>Número de identificación</TableCell>
                <TableCell>Id Oficina</TableCell>
                <TableCell>Nombres</TableCell>
                <TableCell>Apellidos</TableCell>
                <TableCell>Correo</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {Object.keys(this.state.data).map(i => {
                // console.log(i);
                return <TableRow key={i}>
                  <TableCell>{this.state.data[i].numbIdentificacion}</TableCell>
                  <TableCell>{this.state.data[i].idOficina}</TableCell>
                  <TableCell>{this.state.data[i].Nombres}</TableCell>
                  <TableCell>{this.state.data[i].Apellidos}</TableCell>
                  <TableCell>{this.state.data[i].Correo}</TableCell>
                  <TableCell>
                    <button className="btn btn-primary" onClick={() => this.seleccionarCanal(this.state.data[i], i, 'Editar')}>
                    <img src={Imagenes.Edit} alt="horse" className="iconTrash"/></button> {"   "}
                    <button className="btn btn-danger" onClick={() => this.seleccionarCanal(this.state.data[i], i, 'Eliminar')}>
                    <img src={Imagenes.Trash} alt="horse" className="iconTrash"/></button>
                  </TableCell>

                </TableRow>
              })}
            </TableBody>
          </Table>
        </TableContainer>

        <Modal isOpen={this.state.modalInsertar}>
          <ModalHeader>Insertar Registro</ModalHeader>
          <ModalBody>
            <div className="form-group">
              <label>Número de identificación: </label>
              <br />
              <input type="number" className="form-control" name="numbIdentificacion" onChange={this.handleChange} />
              <br />
              <label>Id Oficina: </label>
              <br />
              <input type="number" className="form-control" name="idOficina" onChange={this.handleChange} />
              <br />
              <label>Nombres: </label>
              <br />
              <input type="text" className="form-control" name="Nombres" onChange={this.handleChange} />
              <br />
              <label>Apellidos: </label>
              <br />
              <input type="text" className="form-control" name="Apellidos" onChange={this.handleChange} />
              <br />
              <label>Correo: </label>
              <br />
              <input type="Correo" className="form-control" name="Correo" onChange={this.handleChange} />
            </div>
          </ModalBody>
          <ModalFooter>
            <button className="btn btn-primary" onClick={() => this.peticionPost()}>Insertar</button>{"   "}
            <button className="btn btn-danger" onClick={() => this.setState({ modalInsertar: false })}>Cancelar</button>
          </ModalFooter>
        </Modal>
        <Modal isOpen={this.state.modalEditar}>
          <ModalHeader>Editar Registro</ModalHeader>
          <ModalBody>
            <div className="form-group">
              <label>Número de identificación: </label>
              <br />
              <input type="number" className="form-control" name="numbIdentificacion" onChange={this.handleChange} value={this.state.form && this.state.form.numbIdentificacion} />
              <br />
              <label>Id Oficina: </label>
              <br />
              <input type="number" className="form-control" name="idOficina" onChange={this.handleChange} value={this.state.form && this.state.form.idOficina} />
              <br />
              <label>Nombres: </label>
              <br />
              <input type="text" className="form-control" name="Nombres" onChange={this.handleChange} value={this.state.form && this.state.form.Nombres} />
              <br />
              <label>Apellidos: </label>
              <br />
              <input type="text" className="form-control" name="Apellidos" onChange={this.handleChange} value={this.state.form && this.state.form.Apellidos} />
              <br />
              <label>Correo: </label>
              <br />
              <input type="text" className="form-control" name="Correo" onChange={this.handleChange} value={this.state.form && this.state.form.Correos} />
            </div>

          </ModalBody>
          <ModalFooter>
            <button className="btn btn-primary" onClick={() => this.peticionPut()}>Editar</button>{"   "}
            <button className="btn btn-danger" onClick={() => this.setState({ modalEditar: false })}>Cancelar</button>
          </ModalFooter>
        </Modal>
      </div>
    );
  }
}

export default AdminController;
