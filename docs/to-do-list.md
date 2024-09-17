# To-do list

### Frontend

- Define the data structures that will be used
- Generate temporary mock data
- Create components that will render the nodes in the graph, with hardcoded positions
    - Axioms
    - Definitions
    - Lemmas
    - Theorems
    - Propositions
    - Proofs
    - Conjecture
- Create components that will render the arrows in the graph, with hardcoded positions
- Determine and implement an algorithm which will take the graph as input and render it on the screen based on some configuration
- Style things to make them look decent
- Enable component preview on node hover
- Enable component full-screen takeover on click
- Install a client-side LaTeX renderer
- Integrate the LaTeX renderer in the components so that they can display LaTeX-formatted text

### Backend

- Setup a repository
- Choose a programming language (python, probably? To make it mathematician-friendly)
- Setup a Neo4J database & database server
- Convert the frontend-chosen schemas to backend-schemas
- Define database schemas
- Define database interfaces (backend-to-database and database-to-backend data converters)
- Expose API endpoints to CRUD from that database via the frontend

### For the future

- Figure out how you would build an "editor" functionality
- ***Build an LLM-based application that could read a classical math document and build the required data structures out of it, so that an "import to ArXiv graph" functionality could exist. The editor could then be used to further break down the graph as the author desires.

<br>
<br>
<br>
<br>

Back to [Table of Contents](./index.md)