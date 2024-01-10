import React from 'react';
import Image from 'next/image';
import { Link } from "react-router-dom";

const IconPerfil = ({pos, logo, ruta}) => {
  return <div>
      <>
      <li className="nav efecto m-1 animate__animated animate__fadeInUp animate__delay-1s">
         
            <Link to={ruta}>
                <button className="m-1 bg-transparent border border-0 efecto" onClick={pos} >
                    <Image src={logo} className="icon-pres  p-2" alt="..." />
                </button>
            </Link>
        
      </li>
      </>
  </div>;
};

export default IconPerfil;
