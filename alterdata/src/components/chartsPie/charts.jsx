import React, { useEffect, useState } from 'react'
import { Pie } from 'react-chartjs-2';
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
import api from '../../utils/api';
import './charts.css'
ChartJS.register(ArcElement, Tooltip, Legend);

export default function Charts() {
  const [dataArray, setDataArray] = useState([])

useEffect(() => {
    const fetchClientes = async () => {
      let numSucess = 0
      let numFail = 0
      await api.get("/cliente").then(res => {
        res.data.forEach(element => {
          if (element.status)
            numSucess++
          else
            numFail++
        })
        setDataArray([...dataArray,  numSucess, numFail])
      })
        .catch(err => console.log(err))
    }
    fetchClientes()
  }, [])
  

  var data = { 
    labels: ['Sucesso', 'Falha'],
    datasets: [
      {
        data: dataArray,
        backgroundColor: [
          'rgb(60, 105, 135)',
          'rgb(142,64,80)'
        ]
      },
    ],
  };

  return (
    <div>
      <Pie style={{maxHeight:'400px'}} data={data} />;
    </div>
  );

}


