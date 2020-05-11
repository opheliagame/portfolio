import React, { useState } from 'react';
import LightBox from 'react-image-lightbox';
import 'react-image-lightbox/style.css';

const customStyles = {
    content : {
      backgroundColor : 'rebeccapurple',
      width: '10px',
      height: '10px'
    }
  };

const Gallery = ({ oimages }) => {
    const [modal, setModal] = useState(false)
    const [imageIndex, setImageIndex] = useState(0)

    let images = oimages
        .map((a) => ({sort: Math.random(), value: a}))
        .sort((a, b) => a.sort - b.sort)
        .map((a) => a.value)
    const split = images.length / 3
    const firstcol = images.slice(0, Math.floor(split))
    const secondcol = images.slice(Math.floor(split), Math.floor(split)*2)
    const thirdcol = images.slice(Math.floor(split)*2, images.length)

    images = [firstcol, secondcol, thirdcol]

    const displayModal = () => {
        setModal(true)
    }

    return (
        <div className='gallery'>
            {images.map(column => 
                <>
                <div className='gallery-column'>
                    {column.map(({ id, src, title, description }) => 
                        <>
                        <div key={id} className='gallery-item'>
                            <img onClick={displayModal} key={id} src={src} alt='blobs' />
                        </div>
                        </>
                    )}
                </div>
                </>
            )}

            {modal && (
                <LightBox 
                    mainSrc={oimages[imageIndex].src}
                    nextSrc={oimages[(imageIndex + 1) % oimages.length].src}
                    prevSrc={oimages[(imageIndex + oimages.length -1) % oimages.length].src}
                    onCloseRequest={() => setModal(false)}
                    onMovePrevRequest={() => 
                        setImageIndex((imageIndex + oimages.length - 1) % oimages.length)
                    }  
                    onMoveNextRequest={() => 
                        setImageIndex((imageIndex + 1) % oimages.length)
                    }
                />
            )}

            
        </div>
    )
}

export default Gallery