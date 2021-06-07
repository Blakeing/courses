function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

export default function Tags(props) {
  const { tags } = props;

  return (
    // <ul className={TagsStyles.tags}>
    //   {tags.map((tag) => (
    //     <li className={TagsStyles.tags__tag} key={tag}>
    //       {tag}
    //     </li>
    //   ))}
    // </ul>

    // <ul>
    //   {tags.map((tag) => (
    //     <li key={tag}>
    //       <span
    //         className={classNames(
    //           "inline-flex items-center px-3 py-0.5 rounded-full text-sm font-medium"
    //         )}
    //       >
    //         {tag}
    //       </span>
    //     </li>
    //   ))}
    // </ul>
    <div>
      {tags.map((tag) => (
        <span
          key={tag}
          className={classNames(
            "ml-2 first:ml-0 bg-pink-100 text-pink-800 inline-flex items-center px-3 py-0.5 rounded-full text-sm font-medium"
          )}
        >
          {tag}
        </span>
      ))}
    </div>
  );
}
