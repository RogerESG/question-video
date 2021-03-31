import React from 'react';

import { Link } from 'react-router-dom';

import state from '../data.json';

class VideoQuestions extends React.Component {
    state = {
        state: state.data,
        form: {
            id: '',
            question: '',
            videoUrl: '',
        },
    }

    handleChange = e => {
        this.setState({
            form: {
                ...this.state.form,
                [e.target.name]: e.target.value,
            }
        });
    }

    insert = () => {
        var valueNew={...this.state.form};
        valueNew.id=this.state.data.length+1
        var list = this.state.data;
        list.push(valueNew);
        this.setState({data: list});
    }

    render() {
        return (
            <>
                <div>
                    <label>Id:</label>
                    <input className="form-control" readOnly type="text" value={state.data.length + 1} />
                    <br />
                    <label>Question:</label>
                    <input className="form-control" name="question" type="text" onChange={this.handleChange} />
                    <br />
                    <label>VideoUrl:</label>
                    <input className="form-control" name="videoUrl" type="text" onChange={this.handleChange} />
                    <br />
                    <button>Crear pregunta</button>
                </div>
                <br />
                <table>
                    <thead><tr><th>Id</th>
                        <th>Question</th>
                        <th>VideoUrl</th>
                        <th>Eliminar/Modificar</th></tr></thead>
                    <tbody>
                        {
                            state.data.map((valor) => {
                                return (
                                    <tr>
                                        <td>{valor.id}</td>
                                        <td>{valor.question}</td>
                                        <td>{valor.videoUrl}</td>
                                        <td><button>Editar</button><button>Eliminar</button></td>
                                    </tr>
                                )
                            })}
                    </tbody>
                </table>
                <br />
                <Link to="/questions" className="">
                    Regresar
                </Link>

            </>
        )
    }
}

export default VideoQuestions;