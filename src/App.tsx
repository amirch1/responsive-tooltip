import React from 'react';
import {Tooltip} from './components/tooltip';
import './App.css';

function App() {
  return (
    <div className="container">
        <h1>Responsive text elements with optional tooltip</h1>
        <span className="label">Full length text is shown with no ellipsis or tooltip:</span>
        <div className="panel">
            <Tooltip text={<span className="tooltip">No ellipsis or tooltip here!</span>} placement={'top'} arrow={true} classes={{tooltip: 'tooltip'}} showOnEllipsis={true}>
                <span className="text full">No ellipsis or tooltip here!</span>
            </Tooltip>
        </div>

        <span className="label">Single line text element with ellipsis and tooltip:</span>
        <div className="panel">
            <Tooltip text={<span className="tooltip">Single line truncated text with ellipsis and tooltip</span>} placement={'top'} arrow={true} classes={{tooltip: 'tooltip'}} showOnEllipsis={true}>
                <span className="text singleLine">Single line truncated text with ellipsis and tooltip</span>
            </Tooltip>
        </div>

        <span className="label">Multiple lines text element with lines limit, ellipsis and tooltip:</span>
        <div className="panel">
            <Tooltip text={<span className="tooltip">Multiple lines truncated text with 3 lines limit, ellipsis and tooltip</span>} placement={'top'} arrow={true} classes={{tooltip: 'tooltip'}} showOnEllipsis={true}>
                <span className="text multiLines">Multiple lines truncated text with 3 lines limit, ellipsis and tooltip</span>
            </Tooltip>
        </div>

    </div>
  );
}

export default App;
