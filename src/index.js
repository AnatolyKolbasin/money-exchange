// PLEASE DON'T change function name
module.exports = function makeExchange(currency) {
	var num = currency;
    var result = {};
    if(num < 0) {
    	return result;
    }
    if(num > 10000) {
        result["error"] = "You are rich, my friend! We don't have so much coins for exchange";
        return result;
    }
    var H = Math.trunc(num/50);
    var Q = Math.trunc((num-H*50)/25);
    var D = Math.trunc((num - H*50 - Q*25)/10);
    var N = Math.trunc((num - H*50 - Q*25 - D*10)/5);
    var P = num - H*50 - Q*25 - D*10 - N*5;
    
    if(H != 0) {
        result["H"] = H;
    }
    if(Q != 0) {
        result["Q"] = Q;
    }
    if(D != 0) {
        result["D"] = D;
    }
    if(N != 0) {
        result["N"] = N;
    }
    if(P != 0) {
        result["P"] = P;
    }
    return result;
}
