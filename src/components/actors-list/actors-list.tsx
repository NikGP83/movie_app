import React from 'react';
import Header from '../header/header';
import { useFetchPopularPeopleQuery } from '../../services/movie-service';
import { Link } from 'react-router-dom';
import './actors-list.scss';
import { APP_ROUTES } from '../../const/const';

function ActorsList() {
  const { actorsArr } = useFetchPopularPeopleQuery('1', {
    selectFromResult: ({ data }) => ({
      actorsArr: data?.results,
      pages: data?.total_pages,
    }),
  });
  if (typeof actorsArr === 'undefined') {
    return null;
  }
  return (
    <>
      <Header />
      <section className="popular-people container">
        <ul className="popular-people-list">
          {actorsArr?.map((actor) => (
            <Link key={actor.id} to={`${APP_ROUTES.actorsProfile}/${actor.id}`} className="popular-people-link">
              <li className="popular-people-item">
                <div className="popular-people-block">
                  <img
                    src={`https://image.tmdb.org/t/p/original${actor.profile_path}`}
                    alt="actors image"
                    className="popular-people-img"
                    width={280}
                  />
                  <h2 className="popular-people-title">{actor.name}</h2>
                </div>
              </li>
            </Link>
          ))}
        </ul>
      </section>
    </>
  );
}

export default ActorsList;
