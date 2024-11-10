import './card-list.styles.css';
import Card from "../card/card-list.component";

const CardList = ({monsters})=>{
 
    return(
        <div className="card-list">
            {monsters.map((monster)=>{
                return(
                    <Card monster={monster}></Card>
                )
            })}
        </div>
    )
    
}

export default CardList;