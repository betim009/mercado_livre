function ListItems({ items }) {
  return <>
    {items.map((element, index) => (
        <div key={index}>
            <h2>{element.title}</h2>
            <img src={element.thumbnail} alt="" />
        </div>
    ))}
  </>;
}

export default ListItems;
