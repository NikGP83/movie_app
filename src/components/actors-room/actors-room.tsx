import React from 'react';
import { useParams } from 'react-router-dom';
import { useFetchActorByIdQuery } from '../../services/movie-service';
import Header from '../header/header';
import SiteFooter from '../site-footer/site-footer';
import './actors-room.scss';

function ActorsRoom() {
  const { id } = useParams();
  if (typeof id === 'undefined') {
    return null;
  }
  const { data } = useFetchActorByIdQuery(id);
  window.console.log(data);
  return (
    <>
      <Header />
      <section className="actors-room">
        <div className="actors-info">
          <div className="actors-img-block">
            <img
              src={`https://image.tmdb.org/t/p/original${data?.profile_path}`}
              width={300}
              alt="actors photo"
              className="actors-img"
            />
          </div>
          <div className="personal-info">
            <h2 className="personal-info-title">Personal info</h2>
            <div className="personal-info-block">
              <span className="personal-info-title">Know for</span>
              <span className="personal-info-text">
                {data?.known_for_department}
              </span>
            </div>
            <div className="personal-info-block">
              <span className="personal-info-title">Birthday</span>
              <span className="personal-info-text">
                {data?.birthday}
              </span>
            </div>
            {data?.deathday && (
              <div className="personal-info-block">
                <span className="personal-info-title">Deathday</span>
                <span className="personal-info-text">
                  {data?.deathday}
                </span>
              </div>
            )}
            <div className="personal-info-block">
              <span className="personal-block-info-title">Place of Birth</span>
              <span className="personal-info-text">
                {data?.place_of_birth}
              </span>
            </div>
          </div>
        </div>
        <div className="biography-block">
          <h2 className="actor-name-title">{data?.name}</h2>
          <p className="biography-description">
            {data?.biography}
          </p>
        </div>
      </section>
      <SiteFooter />
    </>
  );
}

export default ActorsRoom;
