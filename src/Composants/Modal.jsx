import React, { useState } from 'react';
import ReactModal from 'react-modal';

ReactModal.setAppElement('#root');

const Modal = () => {
  const [isModalOpen, setModalOpen] = useState(false);
  const [apiResponse, setApiResponse] = useState(null);

  const openModal = () => {
    // Simuler une réponse de l'API
    const response = { message: 'Exemple de réponse de l\'API' };
    setApiResponse(response);

    setModalOpen(true);
  };

  const closeModal = () => {
    setModalOpen(false);
  };

  return (
    <div>
      <button onClick={openModal}>Ouvrir le modal</button>

      <div className='mw'>
              <ReactModal
                     className="Mod"
                     isOpen={isModalOpen}
                     onRequestClose={closeModal}>
                     <h2 className='titre-api'>Message de Confirmation</h2>
                     <p>{JSON.stringify(apiResponse)}</p>
                     <button className='btn-ferme' onClick={closeModal}>Fermer</button>
              </ReactModal>
      </div>

      
    </div>
  );
};

export default Modal;

