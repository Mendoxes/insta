/* eslint-disable jsx-a11y/img-redundant-alt */
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import ReactImageFallback from "react-image-fallback"; 
// marked as unsafe to use!!! use react-image instead
// import {useImage} from 'react-image'


export default function Header({ username }) {
  // function MyImageComponent() {
  //   const {src} = useImage({
  //     srcList: [`/images/avatars/${username}.jpg`,'/images/avatars/default.png']
  //   })
  
  //   return <img src={src} />
  // }
 
  return (
    <div className="flex border-b border-gray-primary h-4 p-4 py-8">
      <div className="flex items-center">
        <Link to={`/p/${username}`} className="flex items-center">
        <ReactImageFallback
            className="rounded-full h-8 w-8 flex mr-3"
            src={`/images/avatars/${username}.jpg`}
            fallbackImage='/images/avatars/default.png'
            alt={`${username} profile picture`}>
            </ReactImageFallback>
{/* <MyImageComponent className="rounded-full h-8 w-8 flex mr-3" alt={`${username} profile picture`}/>  */}

          <p className="font-bold">{username}</p>
        </Link>
      </div>
    </div>
  );
}

Header.propTypes = {
  username: PropTypes.string.isRequired
};
