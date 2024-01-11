import React from 'react'
import { Modal,ModalHeader,ModalBody,ModalFooter } from 'reactstrap'

const ModalApp = ({open,toggle,handleSubmit,text}) => {
  return (
    <Modal isOpen={open} toggle={toggle}>
      <ModalHeader>
        <h1>Add users</h1>
      </ModalHeader>
      <ModalBody>
        <form id='form' onSubmit={handleSubmit}>
          <input type="text" defaultValue={text?.title} placeholder='Title' className='form-control my-2' />
          <select className='form-control my-2' defaultValue={text?.status}>
            <option value="open">open</option>
            <option value="pending">pending</option>
            <option value="inproge">inproge</option>
            <option value="progress">progress</option>
          </select>
        </form>
      </ModalBody>
      <ModalFooter>
        <button className='btn btn-primary' form='form' type='submit'>save</button>
      </ModalFooter>
    </Modal>
  )
}

export default ModalApp
