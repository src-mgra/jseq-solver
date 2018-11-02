exports.eqcalc = function (eq) {

    return (seq(eq));
    
    function setDemo() {
        k2 = 2; j = 2;
    
        fkt[0][0] = 1;
        fkt[1][0] = 2;
        fkt[2][0] = 4;
    
        fkt[0][1] = 1;
        fkt[1][1] = -3;
        fkt[2][1] = -5;
    
        fkt[0][2] = 1;
        fkt[1][2] = -1;
        fkt[2][2] = -1;
    
        knt[0] = 3;
        knt[1] = 2;
        knt[2] = 1;
    
    }
    function CGls(s,fkt,knt,k2) {
            let z;
            let fakt;
            let id;
            z = s + 1;
            id = 0;
            for (z = s + 1; z < k2 + 1; z++) {
                if (fkt[z][s] !== 0) {
                    fakt = (-1 * fkt[z][s]) / fkt[s][s];
                    for (id = 0; id <= k2; id++) {
                        fkt[z][id] = fkt[z][id] + fkt[s][id] * fakt;
                    }
                    knt[z] = knt[z] + (knt[s] * fakt);
                }
            }
        }
    
        function CFkt(fkt,knt,erg,k2) {
            let z;
            let id;
            let sum;
            let result = [];
            for (z = k2; z >= 0; z--) {
                sum = 0;
                for (id = 0; id < k2 + 1; id++) {
                    sum = sum + (erg[id] * fkt[z][id]);
                }
                erg[z] = (knt[z] + sum * -1) / fkt[z][z];
                erg[z] = Math.round(erg[z] * 1000) / 1000;
                result.push(' res(' + z + ') => ' + erg[z]);
            }
            return result
        }
    
        function CalcGls(fkt,knt,erg,k2) {
            let result = '';
            let i;
    
            for (i = 0; i < k2 + 1; i++) {
                CGls(i,fkt,knt,k2);
            }
            res = CFkt(fkt,knt,erg,k2);
            return(res);
        }
    
        function doSetMatrix(matrix, size,fkt,knt) {
           let i = 0;
           let k = 0;
           for (i = 0; i < size; i++) {
            for (k = 0; k < size; k++) {
              fkt[i][k] = matrix[i][k];
            }
           knt[i] = matrix[i][size];
          }
        }
    
    function seq(equation) {
        var fkt = [
            [0, 0, 0, 0, 0, 0],
            [0, 0, 0, 0, 0, 0],
            [0, 0, 0, 0, 0, 0],
            [0, 0, 0, 0, 0, 0],
            [0, 0, 0, 0, 0, 0],
            [0, 0, 0, 0, 0, 0]
        ];
        var knt = [0, 0, 0, 0, 0, 0];
        var erg = [0, 0, 0, 0, 0, 0];
        var result;
        var qMax = 2;
        var k2 = 2;
        var j = 2;

        var result;
        const json = JSON.parse(equation);
        console.log(json.size);
        console.log(json.matrix);
        // load matrix from json-value
        var k2 = json.size - 1;
        if (!json.size) {
            setDemo();
        } else {
            doSetMatrix(json.matrix, json.size,fkt,knt);
        }
        // clac eq by gauss agorithmus
        result = CalcGls(fkt,knt,erg,k2);
        return (result);
    }    
}