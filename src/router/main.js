module.exports = function(app,fs)
{
    app.get('/', function(req,res){
        res.render('index', {
            title: "My Test Page",
            length: 5
        })
    });

    app.get('/list', function(req, res){
        fs.readFile(__dirname + '/../data/' + "user.json", 'utf8', function(err, data){
            console.log(data);
            res.end(data);

        });
    })

    app.get('/getUser/:username',function(req,res){
        fs.readFile(__dirname+'/../data/user.json', 'utf8',function(err,data){
            var users = JSON.parse(data);
            res.json(users[req.params.username]);

        })
    })

    app.post('/addUser/:username', function(req,res){
        var result = {};
        var username = req.params.username;

        if(!req.body["password"] || !req.body["name"]){
            result["success"] = 0;
            result["error"] = "invalid request mofos";
            res.json(result);
            return;
        }

        // Load data & check duplication
        fs.readFile(__dirname + "/../data/user.json",'utf8',function(err,data){
            var users = JSON.parse(data);
            if(users[username]) {
                //Duplication found
                result["success"] = 0;
                result["error"] = "duplicate mofo";
                res.json(result);
                return;
            }
        })

    })
}