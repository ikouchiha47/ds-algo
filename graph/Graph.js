/****************************
  Graphs using adjacency list

  +++++++++++++++++++
  || 0 ||  1  |  2  |
  || 1 ||  0  |  3  |
  || 2 ||  0  |  4  |
  || 3 ||  1  |     |
  || 4 ||  2  |     |
  +++++++++++++++++++

        0
      /   \
     1     2
    /       \
   3         4

*****************************/

function Graph (v) {
  this.vertices = v;
  this.edges = 0;
  this.adj = [];
  this.marked = [];

  for(var i = 0; i< this.vertices; i++) {
    this.adj[i] = [];
    this.marked[i] = false;
  }

  this.addEdge = addEdge;
  this.showGraph = showGraph;
  this.dfs = dfs;
  this.bfs = bfs;
  this.pathTo = pathTo;
  this.topSort = topSort;
  this.topSortHelper = topSortHelper;
}

/*
  Takes two vertices and connects them.

*/
function addEdge(v, w) {
  this.adj[v].push(w);
  this.adj[w].push(v);
  this.edges++;
}

function showGraph() {
  for(var i = 0; i < this.vertices; i++) {
    var str = i + " -> ";
    for(var j = 0; j < this.adj[i].length; j++) {
      if(this.adj[i][j] != undefined) str += this.adj[i][j] + ", "
    }
  console.log(str);
  str = "";
  }
}

/**
  depth first search
  from the root node it traverses down to the chlidren
  each children at a time;

  so 0->1->3 and then 0->2->4

  let there be an adjency list, A

  so take the elements in A[x]
  for each elements in A[x]
    if A[x][i] is not marked
      mark A[x][i] as true 
**/

function dfs (v) {
  this.marked[v] = true;

  // if(this.adj[v] != undefined)
  //   console.log("visited vertex: ", v);

  for(var w in this.adj[v]) {
    if(this.marked[this.adj[v][w]] === false) this.dfs(this.adj[v][w]);
  }
}


/**
  Breadth first search

  Visits the children of the same level and then the children of the next level
  so 0 1->2 3->4

  Queue approach

  let there be an adjacency list A
  for each element in A
  2: push A[x] to the queue
      for each element in A[x]
      push A[x][i]in the queue and mark A[x][i] as visited
      take A[x][i] and repeat 2 with x = i;
**/


function bfs(v) {
  var q = [];
  this.marked[v] = true;
  q.push(v);
  this.edgeTo = [];

  while(q.length > 0) {
    var t = q.shift();
    
    // if(t != undefined) {
    //   console.log('Visited vertex: ', t);
    // }
    
    for(var w in this.adj[t]) {
      if(!this.marked[this.adj[t][w]]) {
        this.marked[this.adj[t][w]] = true;
        /* push to edgeTo so that we have the edge for each vertex
           so e[4] = 2; e[2] = 0;
        */
        this.edgeTo[this.adj[t][w]] = t;
        q.push(this.adj[t][w]);
      }
    }
  }
}

function pathTo (v) {
  var source = 0;
  this.bfs(source);

  if(!this.marked[v])
    return undefined;

  var path = [];
  for(var i = v; i != source; i = this.edgeTo[i]) {
    path.push(i);
  }
  path.push(i);
  return path;
}


function topSort (vertexList) {
  var visited = [];
  var stack = [];

  for(var i = 0; i < this.vertices; i++) {
    visited[i] = false;
  }

  for(var i = 0; i < this.vertices; i++) {
    if(visited[i] == false) {
      this.topSortHelper(i, visited, stack);
    }
  }

  var finalStack = [];
  for(var i = this.vertices - 1; i >= 0; i--) {
    if(stack[i] !== undefined && stack[i] !== false)
      finalStack.push(vertexList[stack[i]])
  }
  return finalStack;
}

function topSortHelper (v, visited, stack) {
  visited[v] = true;
  for(var w in this.adj[v]) {
    if(visited[this.adj[v][w]] === false) this.topSortHelper(this.adj[v][w], visited, stack);
  }
  stack.push(v);
}

module.exports = Graph;