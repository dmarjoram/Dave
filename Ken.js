(function () {
    var Dave = function (params) {
        return new dave(params);
    };
     
    var dave = function (params) {
        var selector = document.querySelectorAll(params), i = 0;

        this.length = selector.length;
		
        this.version = '1.0.3';
         
        for (; i < this.length; i++) {
            this[i] = selector[i];
        }
         
        return this;        
    };
 
    Dave.fn = dave.prototype = {
        dave: function () {
			window.document.write('Dave.');
            return this;
        }
     };
 
    if (!window.Dave) {
        window.Dave = dave;
    }
})();
 
