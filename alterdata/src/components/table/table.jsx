import React, { useEffect, useState } from 'react';
import Table from 'react-bootstrap/Table'
import api from '../../utils/api';

import "./table.css"

function TableC(props) {
    const [state, setState] = useState([])


    useEffect(() => {
        api.get("/cliente").then(data => {
            setState(data.data)
        }).catch(err => console.log(err))
    }, [])

    if (!state) {
        return (
            1
        )
    }
    else {
        return (
            <Table className='mainTable'>
                <thead>
                    <tr>
                        <th>Código</th>
                        <th>Data</th>
                        <th>Status</th>
                        <th>Motivo</th>
                    </tr>
                </thead>
                <tbody>

                    {
                        state.map(el => (
                            el.status ? '' :
                            <tr key={el.cod_cliente}>
                                <td>{el.cod_cliente}</td>
                                <td>{el.data.split("T")[0]}</td>
                                <td>{el.status ? "Sucesso" : "Falha"}</td>
                                <td>{el.motivo_falha}</td>
                            </tr>
                        ))
                    }

                </tbody>
            </Table>
        )

    };
}

export default TableC;