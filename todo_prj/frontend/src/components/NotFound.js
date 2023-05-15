import { useLocation } from 'react-router-dom';

const NotFound404 = () => {
  let location = useLocation();
  return (
    <div>
      <h1>Page at "{ location.pathname }" not found</h1>
    </div>
  )
}

export default NotFound404;