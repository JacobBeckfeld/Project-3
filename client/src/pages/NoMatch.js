import React from 'react';
import { useLocation } from 'react-router-dom';
import Navigation from '../components/Navigation';

function NoMatch() {
  let location = useLocation();
  return (
    <>
      <Navigation />
      <div className="card bg-white card-rounded w-50">
        <div className="card-header bg-dark text-center">
          <h1>
            No match for <code>{location.pathname}</code>
          </h1>
        </div>
      </div>
    </>
  );
}

export default NoMatch;
