import React, { useEffect } from 'react';
import Header from '../header/header';
import { useNavigate } from 'react-router-dom';
import './not-found-page.scss';

function NotFoundPage() {
  const navigate = useNavigate();
  useEffect(() => {
    const timer = setTimeout(() => {
      navigate('/');
    }, 4000);
    return () => clearTimeout(timer);
  }, []);
  return (
    <>
      <Header />
      <div className="not-found-wrapper">
        <div className="not-found-block">
          <span className="not-found-text">
            Oops, this page does not exist. You will be automatically redirected
            to the main page of the website.
          </span>
        </div>
      </div>
    </>
  );
}

export default NotFoundPage;
