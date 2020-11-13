module.exports = {
    async index(request, response){
        const { metodo, x, y } = request.query;
        if (metodo == "/") {
            var res = x/y;
         } else {
            if (metodo == "-") {
               var res = x-y;
            } else {
               if (metodo == "*") {
                  var res = x*y;
               } else {
                    var res = parseInt(x) + parseInt(y);
               }
            }
         }
        //console.log(res)
        return response.json({ metodo, x, y, res});
    }
}