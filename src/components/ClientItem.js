import React from "react";
import '../components/ClientItem.css'

const ClientItem = (props) => {
  const { client } = props
  return (
    <div className="client-item">
      <img className="client-image" src={client.profile} alt={`Imagen de ${client.name}`} />
      <div className="client-details">
        <p>{client.name}</p>
        <p>{client.title} at {client.company}</p>        
        <p>{client.testimonial}</p>
      </div>
    </div>
  );
};

export default ClientItem;