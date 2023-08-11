import React from 'react';
import Header from '../header/header';
import { useFetchPopularPeopleQuery } from '../../services/movie-service';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { APP_ROUTES, framerMotionAnimateSettings } from '../../const/const';
import './actors-list.scss';

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
          {actorsArr?.map((actor, i) => (
            <motion.li
              variants={framerMotionAnimateSettings}
              initial="hidden"
              animate="visible"
              custom={i}
              transition={{ duration: 0.5 }}
              key={actor.id}
              className="popular-people-item"
            >
              <Link
                to={`/${APP_ROUTES.actorsProfile}/${actor.id}`}
                className="popular-people-link"
              >
                <div className="popular-people-block">
                  <img
                    src={`https://image.tmdb.org/t/p/original${actor.profile_path}`}
                    alt="actors image"
                    className="popular-people-img"
                    width={280}
                  />
                  <h2 className="popular-people-title">{actor.name}</h2>
                </div>
              </Link>
            </motion.li>
          ))}
        </ul>
      </section>
    </>
  );
}

export default ActorsList;
