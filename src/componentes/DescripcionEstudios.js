import { useState, useEffect } from 'react'
import certificadoReact from '../../public/img/certificadoReact.png';
import certificadoPhp from '../../public/img/certificadoPhp.png';
import certificadoFullStack from '../../public/img/certificadoFullStack.png';
import certificadoMongoDB from '../../public/img/Curso-MongoDB.jpeg';
import certificadoArgPrograma1 from '../../public/img/certificadoArgPrograma1.png';

import Certificado from './helpers/Certificado';
import Banda from './helpers/Banda';

import Modal from 'react-modal'

const DescripcionEstudios = () => {
    const [currentImage, setCurrentImage] = useState()
    const [modalIsOpen, setModalIsOpen] = useState(false)

  
    useEffect(() => {
        Modal.setAppElement('body');
    })

     const modalHandler = (isOpen, image) => {
        setModalIsOpen(isOpen)
        setCurrentImage(image)
    }

    return (
        <div className="container  mb-5">
            <div className="mt-3 d-flex justify-content-center row">
                <h2 className="text-center fw-normal  mb-3 p-2 shadow-lg rounded-pill">Estudios</h2>
                    <div className="mt-2">
                        <h4 className=" text-center fst-normal">Tecnicatura Universitaria en Tecnologías de la Información</h4>
                        <h5 className=" text-center fw-lighter">Universidad Tecnológica Nacional</h5>
                    </div>
                <div className="row d-flex justify-content-center">
                    <h4 className="text-center fw-bold">Cursos Extracurriculares Realizados:</h4>

                    <div className="mt-5 mb-5 p-5 shadow rounded  justify-content-center" >
                        <div className="row col-sm-8 col-md-12 text-center">
                    
                            <Certificado certificado="/img/certificadoArgPrograma1.png" modH={modalHandler} />
                            <Certificado certificado="/img/Curso-MongoDB.jpeg" modH={modalHandler} />
                            <Certificado certificado="/img/certificadoFullStack.png" modH={modalHandler} />
                            <Certificado certificado="/img/certificadoReact.png" modH={modalHandler} />
                            <Certificado certificado="/img/certificadoPhp.png" modH={modalHandler} />
                        
                        
                            <Modal isOpen={modalIsOpen}  onRequestClose={() => modalHandler(false, currentImage)} style={{content: {right: "18%", left: "18%", top: "0%"  } }} >
                                <img src={currentImage} alt="..."   className="diplomas"/>
                            </Modal>
                    
                        </div>
                    </div>
                </div>
            </div>

            <Banda seccion={'ESTUDIOS'} color={'light-blue accent-3 text-white'} />

        </div>
    )
}

export default DescripcionEstudios
