import GridItem from './CategoryGrid/GridItem';
import '../../styles/CategoryGrid.css';

import useFetchGifs from '../../hooks/useFetchGifs';

const CategoryGrid=({category})=>{

    const {data:images, loading} = useFetchGifs(category);
    return(
     <>
         <h3>{category}</h3>
         {loading && <p>Cargando</p>}
         <div className='cardGrid animate__animated animate__zoomInUp'>
            {images.map(img=>{
                return <GridItem 
                {...img}
                key={img.id}
                />
            })}
        </div>
        
     </>   
    );
}

export{
    CategoryGrid as default
}