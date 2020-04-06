import React from 'react';

function UserNotFoundPage({ match }) {
  const { username } = match;
  return (
    <h1>{username} not found!</h1>
  );
}

export default UserNotFoundPage;
