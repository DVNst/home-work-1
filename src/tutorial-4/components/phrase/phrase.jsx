const Phrase = ({phrases}) => {
  return (
    <div className="list">
      {phrases.map((phrase, i) => <div className="block" key={i + phrase}><h3>{phrase}</h3></div>)}
    </div>
  );
};

export default Phrase;
