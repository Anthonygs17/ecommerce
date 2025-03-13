const Item = ({ item }) => {
  return (
    <div className="card">
      <img src={item.image} alt={item.title} width={'300rem'}/>
      <div className="card-body">
        <h5 className="card-title">{item.title}</h5>
        <p className="card-text">{item.description}</p>
        <p className="card-text">${item.price}</p>
      </div>
    </div>
  );
}

export default Item;