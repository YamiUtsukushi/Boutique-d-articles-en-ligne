import data from '../service/data.json';
import { Link } from 'react-router-dom';
import { useState, useEffect } from 'react';

function Home() {
    // Initialisation avec les données par défaut issues de data.json
    const initialData = data; 

    // Utilisation d'un état pour stocker les articles. 
    // Si les articles sont déjà dans le localStorage, ils sont utilisés, sinon on utilise les données par défaut.
    const [items, setItems] = useState(() => {
      const localData = localStorage.getItem('articles');
      return localData ? JSON.parse(localData) : initialData;
    });
  
    // À chaque fois que 'items' change, on met à jour le localStorage
    useEffect(() => {
      localStorage.setItem('articles', JSON.stringify(items));
    }, [items]);
  
    // Fonction pour gérer la suppression d'un article
    const handleDelete = (itemName) => {
      // Filtrer les articles pour ne pas inclure celui avec le nom spécifié
      const updatedItems = items.filter(item => item.name !== itemName);
      setItems(updatedItems); // Mise à jour de l'état avec les articles restants
      console.log("Deleting:", itemName);
    };

    return (
        <div>
            {/* Boucler sur chaque article et l'afficher */}
            {items.map((item, index) => (
                <div key={index}>
                    <h2>{item.name}</h2>
                    <img src={item.picture[0].pic1} alt={item.name} width="200" />
                    <p>{item.content}</p>
                    <p>Prix: {item.price} €</p>
                    <p>Disponible: {(item.online && item.stock > 0) ? 'Oui' : 'Non'}</p>
                    <p>Stock: {item.stock}</p>
                    <p>Avis: {item.avis ? '⭐'.repeat(item.avis.stars) + ` (${item.avis.nb} avis)` : 'Pas d\'avis'}</p>
                    <Link to={`/details/${item.name}`}>Voir les détails</Link>
                    <button onClick={() => handleDelete(item.name)}>Supprimer</button>
                </div>
            ))}
        </div>
    );
}

export default Home;
