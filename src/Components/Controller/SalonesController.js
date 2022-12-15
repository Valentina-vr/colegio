import React, { Component } from "react";
import "../Style/App.css";
import firebase from "../Models/firebase";
import "bootstrap/dist/css/bootstrap.min.css";
import Imagenes from '../assets/Imagenes';
import { Modal, ModalBody, ModalHeader, ModalFooter, CardGroup, Card } from "reactstrap";
import Table from "reactstrap/lib/Table";
import { TableBody, TableCell, TableContainer, TableHead, TableRow } from "@material-ui/core";

class SalonesController extends Component {
  state = {
    data: [],
    modalInsertar: false,
    modalEditar: false,
    form: {
      idSalon: '',
      areas: 0,
      Nombres: '',
    },
    id: 0
  };

  peticionGet = () => {
    firebase.child("Salones").on("value", (canal) => {
      if (canal.val() !== null) {
        this.setState({ ...this.state.data, data: canal.val() });
      } else {
        this.setState({ data: [] });
      }
    });
  };

  peticionPost = () => {
    firebase.child("Salones").push(this.state.form,
      error => {
        if (error) console.log(error)
      });
    this.setState({ modalInsertar: false });
  }

  peticionPut = () => {
    firebase.child(`Salones/${this.state.id}`).set(
      this.state.form,
      error => {
        if (error) console.log(error)
      });
    this.setState({ modalEditar: false });
  }

  peticionDelete = () => {
    if (window.confirm(`¿Estás seguro que deseas eliminar el registro?`)) {
      firebase.child(`Salones/${this.state.id}`).remove(
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
        <h1 className="title">Salones</h1>
        <br />
        <CardGroup>
            <Card>
              <button id="Insertar" className="btn btn-success btn-agg" onClick={() => this.setState({ modalInsertar: true })}>
              <img src={Imagenes.Add} alt="horse" className="iconAdd"/>
                Agregar Salón</button>
            </Card>
        </CardGroup>
        <br />
        <TableContainer>
          <Table className="table table-bordered">
            <TableHead>
              <TableRow>
                <TableCell>Id Salon</TableCell>
                <TableCell>Facultad</TableCell>
                <TableCell>Nombres</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {Object.keys(this.state.data).map(i => {
                // console.log(i);
                return <TableRow key={i}>
                  <TableCell>{this.state.data[i].idSalon}</TableCell>
                  <TableCell>{this.state.data[i].areas}</TableCell>
                  <TableCell>{this.state.data[i].Nombres}</TableCell>
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
              <label>Id Salon: </label>
              <br />
              <input type="number" className="form-control" name="idSalon" onChange={this.handleChange} />
              <br />
              <label>Facultad: </label>
              <br />
              <input type="text" className="form-control" name="areas" onChange={this.handleChange} />
              <br />
              <label>Nombres: </label>
              <br />
              <input type="text" className="form-control" name="Nombres" onChange={this.handleChange} />
            </div>x
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
              <label>Id Salones: </label>
              <br />
              <input type="number" className="form-control" name="idSalones" onChange={this.handleChange} value={this.state.form && this.state.form.idSalon} />
              <br />
              <label>Facultad: </label>
              <br />
              <input type="text" className="form-control" name="areas" onChange={this.handleChange} value={this.state.form && this.state.form.areas} />
              <br />
              <label>Nombres: </label>
              <br />
              <input type="text" className="form-control" name="Nombres" onChange={this.handleChange} value={this.state.form && this.state.form.Nombres} />
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

export default SalonesController;