'use client';

// import { useCallback } from 'react';
import {
  ReactFlow,
  addEdge,
  Background,
  useNodesState,
  useEdgesState,
  MiniMap,
  Controls,
} from 'reactflow';
import { nodeTypes, edgeTypes } from '#/components/Flow/utils';
import {
  structureNodes,
  structureEdges,
  structureParentNode,
} from '#/components/Flow/data';

const initialNodes = [structureParentNode, ...structureNodes];

const initialEdges = [...structureEdges];

export function Flow() {
  const [nodes, _setNodes, onNodesChange] = useNodesState(initialNodes);
  const [edges, _setEdges, onEdgesChange] = useEdgesState(initialEdges);

  // const onConnect = useCallback((connection) => {
  //   setEdges((eds) => addEdge(connection, eds));
  // }, []);

  return (
    <ReactFlow
      edgeTypes={edgeTypes}
      edges={edges}
      fitView
      nodeTypes={nodeTypes}
      nodes={nodes}
      // onConnect={onConnect}
      onEdgesChange={onEdgesChange}
      onNodesChange={onNodesChange}
    >
      {/* <MiniMap /> */}
      <Controls />
      {/* <Background /> */}
    </ReactFlow>
  );
}
