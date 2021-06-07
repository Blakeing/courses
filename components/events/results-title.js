import Button from '../ui/button';

function ResultsTitle(props) {
  const { date } = props;

  const humanReadableDate = new Date(date).toLocaleDateString('en-US', {
    month: 'long',
    year: 'numeric',
  });

  return (
    <section>
      <h1 className="w-full max-w-xl mx-auto my-4 text-center">
        Events in {humanReadableDate}
      </h1>
      <Button link="/events">Show all events</Button>
    </section>
  );
}

export default ResultsTitle;
