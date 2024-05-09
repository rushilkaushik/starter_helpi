import React, {useState} from 'react';
import { Button, Modal } from "flowbite-react";

interface Props {
    Message: string;
  }

export const PopUp: React.FC<Props> = ({Message}) => {
    const [openModal, setOpenModal] = useState(true);
    return (
        <>
          <Button onClick={() => setOpenModal(true)}>Toggle modal</Button>
          <Modal show={openModal} size="md" onClose={() => setOpenModal(false)} popup>
            <Modal.Header />
            <Modal.Body>
              <div className="text-center">
                <h3 className="mb-5 text-lg font-normal text-gray-500 dark:text-gray-400">
                  { Message }
                </h3>
                <div className="flex justify-center gap-4">
                  <Button color="failure" onClick={() => setOpenModal(false)}>
                    {"Yes, I'm sure"}
                  </Button>
                  <Button color="gray" onClick={() => setOpenModal(false)}>
                    No, cancel
                  </Button>
                </div>
              </div>
            </Modal.Body>
          </Modal>
        </>
      );
}

export default PopUp;