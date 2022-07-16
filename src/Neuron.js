class Neuron {
    constructor(no) {
        this.number = no;
        this.inputSum = 0;
        this.ouputValue = 0;
        this.outputConnections = [];
        this.layer = 0;

    }

    // send its ouput to the input of the nodes its connected to
    engage() {

        if (this.layer != 0) {
            this.ouputValue = this.sigmoid(this.inputSum)
        }
    }

    stepFunction(x) {
        if (x < 0) {
            return 0;
        } else {
            return 1;
        }

    }
    sigmoid(x) {
        return 1.0 / (1.0 + pow(Math.E, -4.9 * x))
    }

    isConnectedTo(neuron) {
        if (neuron.layer == this.layer) {
            return false
        }

        if (neuron.layer < this.layer) {
            for (var i = 0; i < Node.outputConnections.length; i++) {
                if (Node.outputConnections[i].toNode == this) {

                }
            }
        }
    }
}