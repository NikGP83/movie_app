import React from 'react';
import { useParams } from 'react-router-dom';
import { useFetchActorByIdQuery } from '../../services/movie-service';

function ActorsRoom() {
  const { id } = useParams();
  if (typeof id === 'undefined') {
    return null;
  }
  const { data } = useFetchActorByIdQuery(id);
  window.console.log(data);
  return (
    <section className="actors-room">
      <div className="actors-info">
        <div className="actors-img-block">
          <img src="#" width={400} alt="actors photo" className="actors-img" />
        </div>
      </div>
    </section>
  );
}

export default ActorsRoom;
