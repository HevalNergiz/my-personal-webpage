import React, { useRef, useEffect } from 'react';

const ErrorTrigger = () => {
  const containerRef = useRef(null);
  const detachedNodeRef = useRef(null);

  const triggerError = () => {
    if (containerRef.current && detachedNodeRef.current) {
      // This will cause the error because we're trying to insert before a node
      // that is not actually in the DOM
      const newElement = document.createElement('div');
      containerRef.current.insertBefore(newElement, detachedNodeRef.current);
    }
  };

  useEffect(() => {
    // Create a detached node that we'll try to use later
    detachedNodeRef.current = document.createElement('div');
  }, []);

  return (
    <div ref={containerRef} className="p-4">
      <button
        onClick={triggerError}
        className="px-4 py-2 bg-red-500 text-white rounded hover:bg-red-600"
      >
        Trigger Error
      </button>
    </div>
  );
};

export default ErrorTrigger; 