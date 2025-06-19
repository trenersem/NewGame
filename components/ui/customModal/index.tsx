import React, { ReactNode } from 'react'
import { Modal, ModalBody, ModalContent, ModalFooter, ModalTrigger } from '../AnimatedModal';
import MagicButton from '../MagicButton';

const CustomModal = ({
    buttomText,
    children,
}: {
    children: ReactNode,
    buttomText?: string 
}) => {
  return (
    <Modal>
        <ModalTrigger className="flex justify-center group/modal-btn">
            <MagicButton
                title={buttomText ? buttomText : 'Modal'}
                position='righ'
                className='md:w-auto md:mt-0 w-[150px] mt-0  h-[2.5rem]'
            />
          {/* <span className="group-hover/modal-btn:translate-x-40 text-center transition duration-500">
            Book your flight
          </span>
          <div className="-translate-x-40 group-hover/modal-btn:translate-x-0 flex items-center justify-center absolute inset-0 transition duration-500 text-white z-20">
            ✈️
          </div> */}
        </ModalTrigger>
        <ModalBody>
          <ModalContent>
            {children}
          </ModalContent>
          <ModalFooter className="gap-4">
            <button className="px-2 py-1 bg-gray-200 text-black dark:bg-black dark:border-black dark:text-white border border-gray-300 rounded-md text-sm w-28">
              Cancel
            </button>
            <button className="bg-black text-white dark:bg-white dark:text-black text-sm px-2 py-1 rounded-md border border-black w-28">
              Book Now
            </button>
          </ModalFooter>
        </ModalBody>
      </Modal>

  )
}

export default CustomModal;