// / <reference types="react-scripts" />

import React from 'react';
import ReactFlow from 'react-flow-renderer';

const elements = [
  { id: '1', data: { label: 'Apply for the program by paying ₹4999\n100% Refundable' }, position: { x: 0, y: 0 }, style: { background: '#6EE7B7', color: '#000000' } },
  { id: '2', data: { label: 'Attain Free 3 Month Live programming foundation course' }, position: { x: 0, y: 100 }, style: { background: '#FDE047', color: '#000000' } },
  { id: '3', data: { label: 'Undergo 1:1 Interview Bases on above 3 month course' }, position: { x: 0, y: 200 }, style: { background: '#F472B6', color: '#000000' } },
  { id: '4', data: { label: 'If selected AND interested' }, position: { x: 200, y: 0 }, style: { background: '#FBBF24', color: '#000000' } },
  { id: '5', data: { label: 'If Not selected OR Not interested' }, position: { x: 200, y: 100 }, style: { background: '#FBBF24', color: '#000000' } },
  { id: '6', data: { label: 'Enrol in the fellowship program by paying remaining amount post scholarship\nMin 80% Scholarship' }, position: { x: 200, y: 200 }, style: { background: '#60A5FA', color: '#000000' } },
  { id: '7', data: { label: '₹4999 refund within' }, position: { x: 400, y: 100 }, style: { background: '#34D399', color: '#000000' } },
  { id: '8', data: { label: 'Get a relevant job or 100% tuition refund\nNo Terms & Conditions' }, position: { x: 400, y: 200 }, style: { background: '#F87171', color: '#000000' } },
  { id: 'e1-2', source: '1', target: '2', style: { stroke: '#000000' } },
  { id: 'e1-4', source: '1', target: '4', style: { stroke: '#000000' } },
  { id: 'e1-5', source: '1', target: '5', style: { stroke: '#000000' } },
  { id: 'e4-6', source: '4', target: '6', style: { stroke: '#000000' } },
  { id: 'e5-6', source: '5', target: '6', style: { stroke: '#000000' } },
  { id: 'e6-7', source: '6', target: '7', style: { stroke: '#000000' } },
  { id: 'e6-8', source: '6', target: '8', style: { stroke: '#000000' } },
  { id: 'e3-2', source: '3', target: '2', style: { stroke: '#000000' } },
  { id: 'e3-4', source: '3', target: '4', style: { stroke: '#000000' } },
  { id: 'e3-5', source: '3', target: '5', style: { stroke: '#000000' } },
];

const Flowchart = () => {
  return (
    <div className="w-full h-screen">
      <ReactFlow elements={elements} />
    </div>
  );
};

export default Flowchart;
