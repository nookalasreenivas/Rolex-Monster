import './card-styles.css';

const Card = ({monster:{name, id, email}})=>{
  
    return(
        <div className="card-container" key={id}>
        <img alt={`monster ${name}`} src={`https://robohash.org/${id}?set=set2&size=180x180`}/>
        <h1>{name}</h1>
        <p>{email}</p>
        </div>
        
    )
    
}

export default Card;