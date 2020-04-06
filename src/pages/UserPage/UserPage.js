import React from 'react';
import { useParams } from "react-router-dom";

function UserPage() {
  const { username } = useParams();
  return (
    // Search Field
    // Last 3 searchs
    <div>Hello {username}</div>
  );
}

export default UserPage;
