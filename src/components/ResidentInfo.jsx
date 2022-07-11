import axios from "axios";
import React, { useEffect, useState } from "react";


const Character = ({ resident }) => {
    const [residentData, setResidentData] = useState({});

    useEffect(() => {
        axios
          .get(resident)
          .then((res) => setResidentData(res.data));
    }, []);

    console.log(residentData);

    let color = 'green'

    if(residentData.status == 'Alive'){
        color = 'green'
    }else if(residentData.status == 'Dead'){
        color = 'red'
    }else{
        color = 'gray'
    }
  
    return (

        <section className='card-character'>
            <div>
                <img src={residentData.image} alt="" />
            </div>
            <div className="text-info">
                <p><strong>{residentData.name}</strong></p>
                <p><i class="fa-solid fa-circle" style={{color}}></i> {residentData.status} - {residentData.species}</p>
                <p className='small-text'>origin</p>
                <p>{residentData.origin?.name}</p>
                <p className='small-text'>episodes where appear</p>
                <p>{residentData.episode?.length}</p>
            </div>
        </section>
    );
};

export default Character;