class Genome {
    constructor(inputs, outputs, crossover) {
        this.genes = [];
        this.nodes = [];
        this.inputs = inputs;
        this.outputs = outputs;
        this.layers = 2;
        this.nextNode = 0;
        this.network = [];


        if (crossover){
            return;
        }

        for (var i=0; i<this.inputs; i++){
            this.nodes.push(new Neuron(i));
            this.nextNode++;
            this.nodes[i].layer = 0;
        }

        for (var i = 0; i<this.outputs; i++){
            this.nodes.push(new Neuron(i + this.inputs));
            this.nodes[i + this.inputs].layer = 1;
            this.nextNode++;
        }

        this.nodes.push(new Node(this.nextNode));
        this.biasNode = this.nextNode;
        this.nextNode++;
        this.node[this.biasNode].layer = 0;
    }


    fullyConnect(innovationHistory){
        for (var i=0; i<this.inputs; i++){
            for (var j=0; j<this.outputs; j++){
                var connectionInnovationNumber = this.getInnovationNumber(innovationHistory, this.nodes[i], this.nodes[this.nodes.length -j -2]);
            }
        }
    }

    getNode(){
        
    }

    connectNodes(){

    }

    feedForward(){

    }

    generateNetwork(){

    }


    addNode(innovationHistory){

    }

    addConnection(innovationHistory){

    }

    randomConnectionNodesAreShit(r1, r2){

    }

    getInnovationNumber(innovationHistory, from, to){

    }

    fullyConnected(){

    }

    mutate(){

    }

    crossover(){

    }

    matchingGene(){

    }

    printGenome(){

    }

    clone(){

    }

    drawGenome(){

    }
}