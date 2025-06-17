import React, { useEffect, useRef } from 'react';
import { embedViz, RuntimeFilterOp } from '../../tsEmbed';

const vizId = 'a1cdfa62-6db6-446b-9cc2-692a9d26ee2f';

const QuotesCompletionRate = ({ liveboardId, days, columnName }) => {
  const containerId = 'quotes-completion-rate';
  const ref = useRef(null);

  useEffect(() => {
    if (ref.current) {
      ref.current.innerHTML = '';
    }

    const runtimeFilters = [];
    if (days && columnName) {
      runtimeFilters.push({
        columnName,
        operator: RuntimeFilterOp.GT,
        values: [new Date(days).getTime() / 1000],
      });
    }

    embedViz(`#${containerId}`, { liveboardId, vizId, runtimeFilters });
  }, [liveboardId, days, columnName]);

  return <div id={containerId} style={{ height: '600px', width: '100%' }} ref={ref} />;
};

export default QuotesCompletionRate;
