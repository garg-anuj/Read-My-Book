const Card = ({ data }) => {
  const {
    thumbnails,
    title,
    author,
    // bookId,
    actionTypes,
  } = data;
  // console.log(actionTypes())

  return (
    <>
    
      <div className="video-card">
        <div>
          <img src={thumbnails} alt="img_src" />
          {/* <button
            className="favourite"
            onClick={(e) => {
              e.preventDefault();
              // Dispatch(addFavourites(data))
              actionTypes();
            }}
          >
            <i className="bi bi-heart-fill"></i>
          </button> */}
        </div>

        <ul>
          <li>
            {/* <div className='profileLogo'>A</div>
                    <button>Add</button> */}
          </li>
          <li>
            <h1> The Total Money {title}</h1>
            <p>Benjamin {author}</p>
          </li>
          <li>

            <button
              className="btn"
              onClick={(e) => {
              e.preventDefault();
              // Dispatch(addFavourites(data))
              actionTypes();
            }}
            >
              Add
            </button>
          </li>
        </ul>
      </div>
    </>
  );
};
export default Card;
