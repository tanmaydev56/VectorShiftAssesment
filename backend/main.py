from fastapi import FastAPI, HTTPException
from pydantic import BaseModel
from typing import List, Dict
from collections import defaultdict
from fastapi.middleware.cors import CORSMiddleware

app = FastAPI()

app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],  
    allow_credentials=True,
    allow_methods=["*"],  
    allow_headers=["*"],  
)

class Node(BaseModel):
    id: str
    type: str
    position: Dict[str, float]
    data: Dict

class Edge(BaseModel):
    id: str
    source: str
    target: str
    sourceHandle: str
    targetHandle: str

class Pipeline(BaseModel):
    nodes: List[Node]
    edges: List[Edge]
    

# dag identification using Kahn's algorithm
def is_dag(nodes: List[dict], edges: List[dict]) -> bool:
    graph = defaultdict(list)
    in_degree = {node['id']: 0 for node in nodes}
    
    for edge in edges:
        graph[edge['source']].append(edge['target'])
        in_degree[edge['target']] += 1
    
#    we will chck how many nodes have in-degree of 0
    # if all nodes have in-degree of 0, then it is a DAG
    queue = [node_id for node_id in in_degree if in_degree[node_id] == 0]
    count = 0
    
    while queue:
        u = queue.pop(0)
        count += 1
        
        for v in graph[u]:
            in_degree[v] -= 1
            if in_degree[v] == 0:
                queue.append(v)
    
    return count == len(nodes)

@app.post("/pipelines/parse")
async def parse_pipeline(pipeline: Pipeline):
    nodes = [node.dict() for node in pipeline.nodes]
    edges = [edge.dict() for edge in pipeline.edges]
    
    return {
        "num_nodes": len(nodes),
        "num_edges": len(edges),
        "is_dag": is_dag(nodes, edges)
    }