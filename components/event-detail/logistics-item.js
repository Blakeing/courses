function LogisticsItem(props) {
  const { icon: Icon } = props;

  return (
    <li className="">
      <span className="">{props.children}</span>
    </li>
  );
}

export default LogisticsItem;
