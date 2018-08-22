# chunkJS
Simple JS include for chunkifying HTML projects

## Usage
1. Add jQuery and chunk.js before `</body>`
2. Add `<div chunk="yourChunkFile.html"></div>` in HTML

### Code example
```
<body>
  <div chunk="chunk.html"></div> <!-- Include content from chunk.html -->
  <script src="https://code.jquery.com/jquery-3.3.1.min.js"></script>
  <script src="chunk.js"></script>
</body>
```
