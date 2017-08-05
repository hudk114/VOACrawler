"use strict"
const fs = require("fs");
const path = require("path");
const async = require("async");
const request = require("request");
const colors = require("colors");
const cheerio = require("cheerio");

const opts = {
    baseUrl: "http://www.luoo.net/music/",
    range:[...Array(854).keys()].slice(1)
}

class Crawler {
    constructor() {
    
    }
    checkImgPath(p){
        try{
            fs.accessSync(path.join(__dirname, p) , fs.F_OK);
        } catch(e) {
            fs.mkdirSync(path.join(__dirname,p))
        }
    }
    
    getSongList(url, n){
        const self = this;
        return new Promise(function(resolve, reject){
            request(url, function(err,res,body){
                if (!err && res.statusCode == 200) {
                    let $ = cheerio.load(body)
                    const title = $('.vol-title').text()
                    const dir = `/luowang/vol.${n} ${title}`
                    const songs = $('.track-wrapper').map(function(ele,i,arr) {
                        return ($(i).find('.trackname').text() + '-' + $(i).find('.artist').text())
                    })
                    self.checkImgPath(dir)
                    resolve({title,songs,dir})
                }
            })
        })
    }
    
    downloadSong(radio, title, num, dir, callback2) {
        num = radio > 2 && num < 10 ? "0" + num : num;
        const uri=`http://luoo-mp3.kssws.ks-cdn.com/low/luoo/radio${radio}/${num}.mp3`;
        
        request(uri)
            .pipe(fs.createWriteStream(path.join(__dirname, dir, title + ".mp3")))
            .on("error",function(err){
                callback2(null);
            })
            .on("close",() => {
                console.log(title," is downloaded!");
                callback2(null);
            })
    }
    
    start(){
        this.checkImgPath("luowang");
        async.eachOfSeries(opts.range, (n, idx, callback) => {
            this.getSongList(opts.baseUrl + n, n, callback)
                .then((songInfo) => {
                    console.log(colors.green(`\nvol.${n} ${songInfo.title}'s downloading is started!`));
                    async.eachOfSeries(songInfo.songs, (s, i, callback2) => {
                        this.downloadSong(n, s, i+1, songInfo.dir, callback2);
                    }, () => {
                        console.log("d");
                        console.log(colors.green(`vol.${n} ${songInfo.title} is downloaded!`));
                        callback(null);
                    })
                })
        }, () => {
            console.log(colors.magenta("All is downloaded!!!"));
        })
    }
    
}

const crawler = new Crawler();
crawler.start();