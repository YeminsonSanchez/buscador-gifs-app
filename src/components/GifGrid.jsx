import { GifItem } from "./GifItem";
import { useFetchGifts } from "../hooks/useFetchGifts";
import PropTypes from "prop-types";

export const GifGrid = ({ category }) => {
  const { images, isLoading } = useFetchGifts(category);

  return (
    <>
      <h3>{category}</h3>
      {/* si isLoading esta en tru ejecuta la segunda parte del && de lo contrario no hace nada */}
      {isLoading && <h4>Cargando...</h4>}
      <div className="card-grid">
        {images.map((image) => (
          // (...image) se usa para enviar todas las propiedades de la image al componente
          <GifItem key={image.id} {...image} />
        ))}
      </div>
    </>
  );
};

GifGrid.propTypes = {
  category: PropTypes.string.isRequired,
};
