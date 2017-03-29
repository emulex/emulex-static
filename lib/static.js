var fs = require("fs");
function Plugin() {
    this.name = "static";
    this.uuid = "static";
    this.supported = {
        server: 1,
        search: 0,
    };
}

Plugin.prototype.bootstrap = function (env, cback) {
    cback(null);
};

Plugin.prototype.listServer = function (args, cback) {
    fs.readFile(__dirname + "/data.json", "utf-8", function (err, data) {
        if (err) {
            cback(err, null);
            return;
        }
        try {
            var jd = JSON.parse(data);
            cback(null, jd.servers.concat(jd.nodes));
        } catch (e) {
            cback(e, null);
        }
    });
};

Plugin.prototype.search = function (args, cback) {
};

function create() {
    return new Plugin();
}

exports.create = create;