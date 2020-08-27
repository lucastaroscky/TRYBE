   
    let n = 5;
    let blankSpace = '';
    let symbol = '';
    
    
    for(let i=1; i<=n; i++){
        for(let j=i; j<n; j++){
            blankSpace += ' ';
        }
        symbol += '*';
        console.log(blankSpace + symbol);
        blankSpace = '';
    }


