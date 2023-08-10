import data from '../service/data.json';
import { Link } from 'react-router-dom';

function MenAndMixte() {
  // Filtrer les données pour ne retenir que les articles catégorisés pour hommes et mixte
  const filteredData = data.filter(item => item.category === 'h' || item.category === 'mixte');

  return (
    <div>
      {/* Parcourir chaque article filtré et l'afficher */}
      {filteredData.map((item, index) => (
        <div key={index}>
          <h2>{item.name}</h2>

          {/* Afficher l'image principale de l'article */}
          <img src={item.picture[0].pic1} alt={item.name} width="200" />

          <p>{item.content}</p>
          <p>Prix: {item.price} €</p>

          {/* Vérifier et afficher si l'article est disponible en stock ou non */}
          <p>Disponible: {(item.online && item.stock > 0) ? 'Oui' : 'Non'}</p>

          <p>Stock: {item.stock}</p>

          {/* Afficher le nombre d'étoiles en fonction de la note et le nombre d'avis. Si l'article n'a pas d'avis, afficher "Pas d'avis" */}
          <p>Avis: {item.avis ? '★'.repeat(item.avis.stars) + ` (${item.avis.nb} avis)` : 'Pas d\'avis'}</p>

          {/* Lien vers la page de détails de l'article */}
          <Link to={`/details/${item.name}`}>Voir les détails</Link>
        </div>
      ))}
    </div>
  );
}

export default MenAndMixte;
