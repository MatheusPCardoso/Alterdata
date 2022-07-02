import React, { useEffect, useState } from "react";
import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    BarElement,
    Title,
    Tooltip,
    Legend,
} from 'chart.js';
import api from '../../utils/api'
import { Bar } from 'react-chartjs-2';

ChartJS.register(
    CategoryScale,
    LinearScale,
    BarElement,
    Title,
    Tooltip,
    Legend
);



export function BarCharts() {
    const [dataArray , setDataArray] = useState([])
    const options = {
        responsive: true,
        plugins: {
            legend: {
                position: 'top',
            },
            title: {
                display: true,
                text: 'Tipo de erros',
            },
        },
    };
    var contBar = { base: 0, naoEsperado: 0, disco: 0, banco: 0 }
    const labels = ['Sem acesso ao banco', 'Falta de espaço em disco', 'Base corrompida', 'Erro não esperado'];

    useEffect(() => {
        const fetchClientes = async () => {
            await api.get("/cliente").then(res => {
                res.data.forEach(element => {
                    switch (element.motivo_falha) {
                        case "sem acesso ao banco":
                            contBar.banco++
                            break;
                        case "falta de espaço em disco":
                            contBar.disco++
                            break;
                        case "base corrompida":
                            contBar.base++
                            break;
                        case "erro não esperado":
                            contBar.naoEsperado++
                            break;
                        default:
                            break;
                    }
                })
                setDataArray([...dataArray, contBar.banco, contBar.disco, contBar.base, contBar.naoEsperado])
            })
                .catch(err => console.log(err))
        }
        fetchClientes()
    },[])

    var data = {
        labels,
        datasets: [
            {
                label: 'Erros',
                data: dataArray,
                backgroundColor: 'rgba(255, 99, 132, 0.5)',
            }
        ],
    };

    return (
        <Bar options={options} data={data} />
    );
}
