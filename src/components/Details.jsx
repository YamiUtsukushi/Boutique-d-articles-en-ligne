import data from '../service/data.json';
import { useParams } from 'react-router-dom';

function Details() {
  // Récupération de l'identifiant "id" depuis l'URL
  const { id } = useParams();

  // Trouver l'article qui correspond à l'identifiant fourni dans l'URL
  const item = data.find((article) => article.name === id);

  // Si aucun article n'est trouvé avec cet identifiant, afficher un message d'erreur
  if (!item) {
    return <div>Article introuvable</div>;
  }

  return (
    <div>
      <h2>{item.name}</h2>

      {/* Afficher toutes les images de l'article */}
      <div>
        {Object.values(item.picture[0]).map((pic, index) => (
          <img key={index} src={pic} alt={`${item.name} ${index}`} width="200" />
        ))}
      </div>

      <p>{item.content}</p>
      <p>Prix: {item.price} €</p>

      {/* Afficher si l'article est disponible ou non */}
      <p>Disponible: {(item.online && item.stock > 0) ? 'Oui' : 'Non'}</p>

      {/* Afficher les tailles disponibles pour cet article */}
      <p>Taille: {item.size.join(', ')}</p>

      {/* Afficher le nombre d'étoiles et le nombre d'avis. Si pas d'avis, afficher "Pas d'avis" */}
      <p>Avis: {item.avis ? '★'.repeat(item.avis.stars) + ` (${item.avis.nb} avis)` : 'Pas d\'avis'}</p>

    </div>
  );
}

export default Details;
