

const Movie = (props ,{ fileUrl, fileName }) => {
  const handleDownload = () => {
    fetch(fileUrl)
      .then((response) => response.blob())   //bobs is method
      .then((blob) => {
        const url = URL.createObjectURL(blob);
        const link = document.createElement('a');
        link.href = url;
        link.download = fileName;
        link.click();
      })
      .catch((error) => {
        console.error('Error downloading file:', error);
      });
  };
  return (
    <div  className='Movie'>
      <div className ='m'>
      <img src={props.img}alt=""/>
      <p>Movie:{props.Title}</p>
      <p>year:{props.year}</p>
      <a href={props.fileUrl}>Visit Website</a>
      <button onClick={handleDownload}>Download File </button>
      </div>  
    </div>
    
  )
}
<Movie fileUrl="" fileName="" />


export default Movie
