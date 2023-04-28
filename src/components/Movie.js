

const Movie = (props) => {
  return (
    <div  className='Movie'>
      <img src={props.img}alt=""/>
      <p>Movie:{props.Title}</p>
      <p>year:{props.year}</p>
    </div>
  )
}

export default Movie