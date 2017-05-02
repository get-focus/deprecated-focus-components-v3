

const babelify = (sourceDir, outputDir) => {
    var fs = require('fs');
    var path = require('path');
    var babel = require('babel-core');

    var babelOptions = {
        "presets": [
            "focus"
        ],
        sourceMaps: 'inline'
    };

    var walk = function(dir) {
        var files = [];
        var list = fs.readdirSync(dir);
        list.forEach(function(file) {
            file = dir + '/' + file;
            var stat = fs.statSync(file);
            if (stat && stat.isDirectory()) files = files.concat(walk(file));
            else files.push(file);
        });
        return files;
    };

    var filterFiles = function(files) {
        return files.filter(function(file) {
            return !file.match(/(example|__tests__)/) && (file.match(/\.js$/) || file.match(/\.d.ts$/));
        });
    };

    function ensureDirectoryExistence(filePath) {
        var dirname = path.dirname(filePath);
        if (fs.existsSync(dirname)) {
            return true;
        }
        ensureDirectoryExistence(dirname);
        fs.mkdirSync(dirname);
    }

    var files = filterFiles(walk(sourceDir));
    files.forEach(function(file) {
        if (file.match(/\.d.ts$/)) {
            var newFile = file.replace('./src', '.');
            ensureDirectoryExistence(newFile);
            fs.createReadStream(file).pipe(fs.createWriteStream(newFile));
        } else {
            babel.transformFile(file, babelOptions, function(err, result) {
                if (err) console.error(err);
                var newFile = file.replace(sourceDir, outputDir);
                ensureDirectoryExistence(newFile);
                fs.writeFile(newFile, result.code, function(err) {
                    if (err) console.error(err);
                    console.log('Babelified ' + file);
                });
            });
        }
    });
};

babelify('./src','.');
