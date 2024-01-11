import React from 'react'
import { useState } from 'react'
import ModalApp from './ModalApp'

const Users = () => {
    const [modalVisible,setVisible] = useState(false)
    const [text ,setText] =useState('')
    const [data,setData] = useState([
        {id:1,header:"Open",title:"task1",status:"open"},
        {id:2,header:"Pending",title:"task1",status:"pending"},
        {id:3,header:"Inproge",title:"task1",status:"inproge"},
        {id:4,header:"Progress",title:"task1",status:"progress"}
    ])
    const handleSubmit = (e)=>{
        e.preventDefault()
        let title = e.target[0].value
        let status = e.target[1].value
        let id = text.id
        if (text !== "") {
            data.map((item)=>{
                if (item.id === id) {
                    item.title = title
                    item.status = status
                }
            })
        }else{
            let payload ={
                id:data.length + 1,
                title,
                status
            }
            data.push({...payload})
            setData([...data])
        }
        setVisible(false)
        setText("")
    }
    const deleteItem = (id)=>{
        let filter_arr = data.filter((item)=> item.id !== id)
        setData([...filter_arr])
    }
    const editItem = (item)=>{
        setText(item)
        setVisible(true)
    }
    const toggle=()=>{
        setVisible(false)
        setText("")
    }
  return (
    <div className='container'>
        <ModalApp open={modalVisible} toggle={toggle} handleSubmit={handleSubmit} text={text}/>
      <div className="row">
        <div className="col-3">
            <div className="card">
                <div className="card-header">
                    <h1>Open</h1>
                </div>
                {
                data.filter(item=> item.status === "open").map((item,index)=>{
                    return <div className='card-body d-flex align-items-center gap-2' key={index}>
                        <span>{item.title}</span>
                        <button className='btn btn-info' onClick={()=>editItem(item)}>edit</button>
                        <button className='btn btn-danger' onClick={()=>deleteItem(item.id)}>delete</button>
                    </div>
                })
            }
            <div className="card-footer">
                <button className='btn btn-success' onClick={()=>setVisible(true)}>Add User</button>
            </div>
            </div>
        </div>





        <div className="col-3">
            <div className="card">
                <div className="card-header">
                    <h1>Pending</h1>
                </div>
                {
                data.filter(item=> item.status === "pending").map((item,index)=>{
                    return <div className='card-body d-flex align-items-center gap-2'>
                        <span>{item.title}</span>
                        <button className='btn btn-info' onClick={()=>editItem(item)}>edit</button>
                        <button className='btn btn-danger'  onClick={()=>deleteItem(item.id)}>delete</button>
                    </div>
                })
            }
            <div className="card-footer">
                <button className='btn btn-success' onClick={()=>setVisible(true)}>Add User</button>
            </div>
            </div>
        </div>



        <div className="col-3">
            <div className="card">
                <div className="card-header">
                    <h1>Inproge</h1>
                </div>
                {
                data.filter(item=> item.status === "inproge").map((item,index)=>{
                    return <div className='card-body d-flex align-items-center gap-2'>
                        <span>{item.title}</span>
                        <button className='btn btn-info' onClick={()=>editItem(item)}>edit</button>
                        <button className='btn btn-danger'  onClick={()=>deleteItem(item.id)}>delete</button>
                    </div>
                })
            }
            <div className="card-footer">
                <button className='btn btn-success' onClick={()=>setVisible(true)}>Add User</button>
            </div>
            </div>
        </div>




        <div className="col-3">
            <div className="card">
                <div className="card-header">
                    <h1>Progress</h1>
                </div>
                {
                data.filter(item=> item.status === "progress").map((item,index)=>{
                    return <div className='card-body d-flex align-items-center gap-2'>
                        <span>{item.title}</span>
                        <button className='btn btn-info' onClick={()=>editItem(item)}>edit</button>
                        <button className='btn btn-danger'  onClick={()=>deleteItem(item.id)}>delete</button>
                    </div>
                })
            }
            <div className="card-footer">
                <button className='btn btn-success' onClick={()=>setVisible(true)}>Add User</button>
            </div>
            </div>
        </div>
      </div>
    </div>
  )
}

export default Users
