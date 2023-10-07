import React from 'react'
import clients from '../storage/clients'
import ClientItem from './ClientItem'
import './ClientList.css'

const ClientList = () => {
    return (
        <div className='client-list'>
            {
                clients.map(client => <ClientItem key={client._id} client={client}/>)
            }
        </div>
    )
}

export default ClientList