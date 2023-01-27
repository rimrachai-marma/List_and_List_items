const List = (props) => {
  const { items, resourceName, itemComponent: ItemComponent } = props;

  return (
    <>
      {items.map((item, idx) => (
        <ItemComponent key={idx} {...{ [resourceName]: item }} />
      ))}
    </>
  );
};

export default List;
