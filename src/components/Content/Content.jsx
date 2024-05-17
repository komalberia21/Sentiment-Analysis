import './Content.css';

const sentimentColors = {
  Positive: '#D9F2DD',
  Negative: '#F2DBD9',
  Mixed: '#E8BD6D3D',
  Neutral: '#EAF09B6B'
};

const Content = ({ analytics, content }) => {

const getHighlightedText = (text, highlights) => {
    let result = [];
    let lastIndex = 0;

    highlights.forEach((highlight, index) => {
      const [start, end, sentiment,topic] = highlight;
      console.log(topic);
      const color = sentimentColors[sentiment];
       // Pushing the text before the highlight
      if (lastIndex < start) {
        result.push(text.substring(lastIndex, start));
      }
    // Pushing the highlighted text
      result.push(
        <div className='tooltip'>
           <span className="tooltiptext">{topic}</span>
        <span key={index} style={{ backgroundColor: color }}>
          {text.substring(start, end)}
        </span>
        </div>
      );
          lastIndex = end;
    });
    // Pushing the remaining text after the last highlight
    if (lastIndex < text.length) {
      result.push(text.substring(lastIndex));
    }
    return result;
  };

 //const highlights = analytics.flatMap(item => item.highlight_indices);
  // categories=analytics.flatMap(item=>item.sentences);
  //console.log(categories,"category")
  //console.log(highlights,"highlights")
   //console.log(highlights,"high");
  // const topic=analytics.map(item=>item.topic)
  // console.log(topic,"topic");
  

  ///using flatmap to get array and not array inside array
  const highlights = analytics.flatMap(item => 
    item.highlight_indices.map(highlight => [...highlight, item.topic])
  );
 
return (
    <div className="third-part">
      <div className="content-data">
        <span>
        {getHighlightedText(content, highlights)}
        </span>
      </div>
    </div>
  );
}

export default Content;
