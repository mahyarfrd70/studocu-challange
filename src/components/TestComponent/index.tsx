import React from 'react';

export interface TestComponentProps {
  className?: string;
}

const TestComponent = ({className}: TestComponentProps) => {
  return (
    <div id="test-component" className={className}>
      TestComponent
    </div>
  );
};

export default TestComponent;
