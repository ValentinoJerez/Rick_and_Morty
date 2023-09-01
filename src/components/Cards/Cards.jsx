import Card from '../Card/Card';
import style from "./Cards.module.css"

export default function Cards(props) {
  const {characters} = props;
  const {onClose} = props;
   return (
   <div className={style.container}>
      {characters.map((character) =>( 
      <Card 
      character= {character} 
      key={character.id}
      id={character.id}
      onClose={onClose}
      />
      ))}
   </div>
   );
}
