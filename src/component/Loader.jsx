import React from 'react';

// this is loder component, it can be used in two ways:

const Loader = ({ label = 'Loading...', fullscreen = true }) => {
  const wrapperClassName = fullscreen ? 'app-loader app-loader--fullscreen' : 'app-loader';
  const panelClassName = fullscreen ? 'app-loader__panel' : 'app-loader__panel app-loader__panel--inline';
  const accessibleLabel = label || 'Loading';

  return (
    <div className={wrapperClassName} role="status" aria-live="polite" aria-label={accessibleLabel}>
      <div className={panelClassName}>
        <div className="app-loader__spinner" aria-hidden="true"></div>
        {label ? <p className="app-loader__label">{label}</p> : null}
      </div>
    </div>
  );
};

export default Loader;