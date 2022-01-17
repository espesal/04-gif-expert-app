import React from 'react'
// import { getGifs } from '../helpers/getGifs';
import { useFetchGifs } from '../hooks/useFetchGifs';
import { GifGridItem } from './GifGridItem';

export const GifGrid = ({ category }) => {

    const { data : images, loading } = useFetchGifs( category );

    return (
        <>
            <h3 className='animate__animated animate__fadeIn'>{category}</h3>
            <h3 className='animate__animated animate__flash'>{ loading && 'Cargando...'}</h3>
            <div className='card-grid '>
                <ol>
                    { images.map( (image) => (
                        <GifGridItem 
                            key = {image.id}
                            {...image} />

                    )) }
                </ol>
            </div>
        </>
        
    )
}
