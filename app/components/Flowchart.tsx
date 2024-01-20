"use client";
import React, { useCallback } from "react";
import ReactFlow, { useNodesState, useEdgesState, addEdge } from "reactflow";
import "reactflow/dist/style.css";

const initialNodes = [
  {
    id: "1",
    position: { x: 0, y: 0 },
    data: { label: "Apply for the program by paying ₹4999\n100% Refundable" },
    style: {
      background: "#f0f0f0",
      border: "2px solid #000",
      borderRadius: "10px",
    },
  },
  {
    id: "2",
    position: { x: 0, y: 100 },
    data: {
      label: "Attain Free 3 Month Live programming foundation course",
    },
    style: {
      background: "#f0f0f0",
      border: "2px solid #000",
      borderRadius: "10px",
    },
  },
  {
    id: "3",
    position: { x: 0, y: 200 },
    data: {
      label: "Undergo 1:1 Interview Bases on above 3 month course",
    },
    style: {
      background: "#f0f0f0",
      border: "2px solid #000",
      borderRadius: "10px",
    },
  },
  {
    id: "4",
    position: { x: -200, y: 300 },
    data: {
      label: "If Not selected OR not interested\n₹4999 refund within",
    },
    style: {
      background: "#f0f0f0",
      border: "2px solid #000",
      borderRadius: "10px",
    },
  },
  {
    id: "5",
    position: { x: 200, y: 300 },
    data: {
      label:
        "If selected AND interested\nEnroll in the fellowship program by paying remaining amount post scholarship\nMin 80% Scholarship",
    },
    style: {
      background: "#f0f0f0",
      border: "2px solid #000",
      borderRadius: "10px",
    },
  },
  {
    id: "6",
    position: { x: 200, y: 400 },
    data: {
      label: "Get a relevant job or 100% tuition refund\nNo Terms & Conditions",
    },
    style: {
      background: "#f0f0f0",
      border: "2px solid #000",
      borderRadius: "10px",
    },
  },
];

const initialEdges = [
  {
    id: "e1-2",
    source: "1",
    target: "2",
    type: "straight",
    animated: true,
    style: { stroke: "#000" },
  },
  {
    id: "e2-3",
    source: "2",
    target: "3",
    type: "straight",
    animated: true,
    style: { stroke: "#000" },
  },
  {
    id: "e3-4",
    source: "3",
    target: "4",
    type: "straight",
    animated: true,
    style: { stroke: "#000" },
  },
  {
    id: "e3-5",
    source: "3",
    target: "5",
    type: "straight",
    animated: true,
    style: { stroke: "#000" },
  },
  {
    id: "e5-6",
    source: "5",
    target: "6",
    type: "straight",
    animated: true,
    style: { stroke: "#000" },
  },
];

export default function FlowChart() {
  const [nodes, setNodes, onNodesChange] = useNodesState(initialNodes);
  const [edges, setEdges, onEdgesChange] = useEdgesState(initialEdges);

  const onConnect = useCallback(
    (params : any) => setEdges((eds : any) => addEdge(params, eds)),
    [setEdges]
  );

  return (
    <div style={{ width: "100vw", height: "100vh" }}>
      <ReactFlow
        nodes={nodes}
        edges={edges}
        onNodesChange={onNodesChange}
        onEdgesChange={onEdgesChange}
        onConnect={onConnect}
      />
    </div>
  );
}