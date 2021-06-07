import {
  formatPublishedDateForDateTime,
  formatPublishedDateForDisplay,
} from "@utils/Date";

export default function PublishedDate(props) {
  const { date } = props;

  return (
    <time dateTime={formatPublishedDateForDateTime(date)}>
      {formatPublishedDateForDisplay(date)}
    </time>
  );
}
