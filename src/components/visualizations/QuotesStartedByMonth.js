import React, { useEffect, useRef } from 'react';
import { embedViz } from '../../tsEmbed';

const vizId = '6930c1ca-e80f-444f-a090-e285d1e15cdf';

const QuotesStartedByMonth = ({ liveboardId }) => {
  const containerId = 'quotes-started-by-month';
  const ref = useRef(null);

  useEffect(() => {
    if (ref.current) {
      ref.current.innerHTML = '';
    }
    embedViz(`#${containerId}`, { liveboardId, vizId });
  }, [liveboardId]);

  return <div id={containerId} style={{ height: '600px', width: '100%' }} ref={ref} />;
};

export default QuotesStartedByMonth;
