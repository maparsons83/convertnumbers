var dg = ['zero', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine'];
var tn = ['ten','eleven','twelve','thirteen', 'fourteen','fifteen','sixteen','seventeen','eighteen','nineteen']
var tw = ['twenty', 'thirty', 'forty', 'fifty', 'sixty', 'seventy', 'eighty', 'ninety'];
var hun= ['one hundred', 'two hundred', 'three hundred', 'four hundred', 'five hundred', 'six hundred', 'seven hundred', 'eight hundred', 'nine hundred']

function hundreds () {

    // let destination = document.getElementById('div1')

    // for (let i=0; i <=9; i++) {

    //     document.write ((dg[i+1] + hun[0]) + )
    // }

    // 1-10
    function digits () {

        let destination = document.getElementById('div1');

        for (let i=0; i <= 9; i++) {

            document.write(dg[i] +  ' <br> ');

            
        
        }
    }

    // 11-19
    function teens () {

        let destination = document.getElementById('div1')

        for (let i=0; i <=9; i++) {

            document.write(tn[i] + '<br>')
        }

    }
    
    // 20-29
    function twenties () {

        let destination = document.getElementById('div1')

        for (let i=0; i <= 9; i++) {

            document.write(tw[0] + ' ' + dg[i] + '<br>');
        }

    }
    // 30-39
    function thirties () {

        let destination = document.getElementById('div1')

        for (let i=0; i <= 9; i++) {

            document.write(tw[1] + ' ' + dg[i] + '<br>');
        }

    }
    // 40-49
    function fourties () {

        let destination = document.getElementById('div1')

        for (let i=0; i <= 9; i++) {

            document.write(tw[2] + ' ' + dg[i] + '<br>');
        }

    }
    // 50-59
    function fifties () {

        let destination = document.getElementById('div1')

        for (let i=0; i <= 9; i++) {

            document.write(tw[3] + ' ' + dg[i] + '<br>');
        }

    }
    // 60-69
    function sixties () {

        let destination = document.getElementById('div1')

        for (let i=0; i <= 9; i++) {

            document.write(tw[4] + ' ' + dg[i] + '<br>');
        }

    }
    // 70-79
    function seventies () {

        let destination = document.getElementById('div1')

        for (let i=0; i <= 9; i++) {

            document.write(tw[5] + ' ' + dg[i] + '<br>');
        }

    }
    // 80-89
    function eighties () {

        let destination = document.getElementById('div1')

        for (let i=0; i <= 9; i++) {

            document.write(tw[6] + ' ' + dg[i] + '<br>');
        }

    }
    // 90-99
    function nineties () {

        let destination = document.getElementById('div1')

        for (let i=0; i <= 9; i++) {

            document.write(tw[7] + ' ' + dg[i] + '<br>');
        }

    }

    digits();
    teens();
    twenties();
    thirties();
    fourties();
    fifties();
    sixties();
    seventies();
    eighties();
    nineties();

}

function final () {

    for (let i=0; i <= 9; i++) {

        document.write ((hun[i] + ' ' + hundreds ()) + '<br>');
    }
}



// digits();
// teens();
// twenties();
// thirties();
// fourties();
// fifties();
// sixties();
// seventies();
// eighties();
// nineties();
final();
