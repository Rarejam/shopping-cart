import { Link } from 'react-router-dom';
export const About = () => {
  return (
    <div>
      <h1>This is the About page</h1>
      <Link to='/'>To navigate back to the home page</Link>
    </div>
  );
};
