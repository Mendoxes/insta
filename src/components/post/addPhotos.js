import { useState, useContext } from 'react';
import FirebaseContext from '../../context/firebase';
import PropTypes from 'prop-types';
import UserContext from '../../context/user';


export default function AddPhotos() {
   
    const [photoadd, setPhotoadd] = useState('');
    const [captionadd, setCaptionadd] = useState('');
    const { firebase} = useContext(FirebaseContext);
    const {
      user: {uid}
    } = useContext(UserContext);

    
const handleSubmitPhoto = (event) => {
    console.log(photoadd)
    // console.log(docId)
    // console.log(displayName)
    console.log(uid)

    
    event.preventDefault();
  


    return firebase
      .firestore()
      .collection('photos')
      .add({
        photoId: 9,
        userId: uid,
        imageSrc: photoadd,
        caption: captionadd,
        likes: [],
        comments: [
        
        ],
        userLatitude: '40.7128°',
        userLongitude: '74.0060°',
        dateCreated: Date.now()
      });
  }

  return (
    <div className="border-t border-gray-primary">
 
 <input
              aria-label="Enter photo URL"
              type="text"
              placeholder="Photo URL"
              className="text-sm text-gray-base w-full mr-3 py-5 px-4 h-2 border border-gray-primary rounded mb-2"
              onChange={({ target }) => setPhotoadd(target.value)}
              value={photoadd}
            />


<input
              aria-label="Title of your photo"
              type="text"
              placeholder="Photo Title"
              className="text-sm text-gray-base w-full mr-3 py-5 px-4 h-2 border border-gray-primary rounded mb-2"
              onChange={({ target }) => setCaptionadd(target.value)}
              value={captionadd}
            />

         <button  className="bg-purple-600 text-blue-medium"  onClick={handleSubmitPhoto}>
             
              Add photo</button >



     
    </div>
  );
}

AddPhotos.propTypes = {
   
    uid: PropTypes.string,
    
    photoadd: PropTypes.string,
}

