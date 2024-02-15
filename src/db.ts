const getDB = () => {
    return [
        {
            id: 1,
            name: `line-bot-sdk-gas`,
            description: `Node.js用 と同じインターフェイスで LINE Messaging API を Google Apps Script で利用できるようにしたライブラリです。`,
            description_en: `LINE Bot SDK for Google Apps Script`,
            url: `https://github.com/kobanyan/line-bot-sdk-gas`,
            scriptId: `1EvYoqrPLkKgsV8FDgSjnHjW1jLp3asOSfDGEtLFO86pPSIm9PbuCQU7b`,
            author: `kobanyan`,
            sample: ``
        },
        {
            id: 2,
            name: `Parser`,
            description: `GASでスクレイピングを行うためのライブラリです。`,
            description_en: ``,
            url: `https://ex-ture.com/blog/2023/01/24/gas%E3%82%92%E5%88%A9%E7%94%A8%E3%81%97%E3%81%A6web%E3%82%B9%E3%82%AF%E3%83%AC%E3%82%A4%E3%83%94%E3%83%B3%E3%82%B0%E3%82%92%E3%82%84%E3%81%A3%E3%81%A6%E3%81%BF%E3%82%88%E3%81%86/`,
            scriptId: `1Mc8BthYthXx6CoIz90-JiSzSafVnT6U3t0z_W3hLTAX5ek4w0G_EIrNw`,
            author: `Ivan Kutil`,
            sample: ``
        },
        {
            id: 3,
            name: `LINE Notify for GAS`,
            description: `GASでLINE Notifyを扱うライブラリです。`,
            description_en: ``,
            url: `https://qiita.com/n0bisuke/items/153fa71b22f44c3d4766`,
            scriptId: `1L4uz6F_w_o0RZsH-W6oR-eXklMmGvHddVjA4FrU6VNdlm7mgk2Q4Wmrc`,
            author: `n0bisuke`,
            sample: ``
        },
        {
            id: 4,
            name: `Discord Webhook Post for GAS`,
            description: `GASでDiscordのWebhookポストを扱うライブラリです。`,
            description_en: ``,
            url: `https://qiita.com/n0bisuke/items/e551358c0b9438232f7d`,
            scriptId: `1s04ndQZRPQeivPoo_62F7wXa-GIdkSOij3W-2KcYeKYl_yiAsgS1CwJv`,
            author: `n0bisuke`,
            sample: ``,
        },
        {
            id: 5,
            name: `Slack Gas Library`,
            description: `GASでSlackにメッセージを送るためのライブラリです。`,
            description_en: ``,
            url: `https://qiita.com/guchimina/items/6858e041353f9a202f4c`,
            scriptId: `1on93YOYfSmV92R5q59NpKmsyWIQD8qnoLYk-gkQBI92C58SPyA2x1-bq`,
            author: `-`,
            sample: ``,
        },
        {
            id: 6,
            name: `Moment Library`,
            description: `GASで日付操作を便利にするライブラリ`,
            description_en: ``,
            url: ``,
            scriptId: `15hgNOjKHUG4UtyZl9clqBbl23sDvWMS8pfDJOyIapZk5RBqwL3i-rlCo`,
            author: `-`,
            sample: ``,
        },
        {
            id: 7,
            name: `BetterLog`,
            description: `スプレッドシートにログを出してくれるライブラリです。`,
            description_en: `With one line of code, BetterLog extends the native apps script Logger and gives you automatic additional features like logging to a spreadsheet and more.`,
            url: `https://github.com/peterherrmann/BetterLog`,
            scriptId: `1DSyxam1ceq72bMHsE6aOVeOl94X78WCwiYPytKi7chlg4x5GqiNXSw0l`,
            author: `peterherrmann`,
            sample: `
            // Add one line to use BetterLog
            Logger = BetterLog.useSpreadsheet('your-spreadsheet-key-goes-here'); 
            
            //Now you can log and it will also log to the spreadsheet
            Logger.log("That's all you need to do");`
        },
        {
            id: 8,
            name: `Gexpress`,
            description: `Expressのような感じにルーティングしてくれるライブラリ`,
            description_en: ``,
            url: `https://github.com/coderofsalvation/Gexpress`,
            scriptId: `1Lm_jNmD2FWYF-Kgj7AdHVvLEVXZ4c5AXwzd1KJSb48scn0HLBq64um7S`,
            author: `coderofsalvation`,
            sample: `
            var app   = new Gexpress.App()
            var cache = CacheService.getScriptCache()

            cache.put("/hello", JSON.stringify({date: new Date()}) )

            app.use(function(req,res,next){
            req.user = {email:Session.getActiveUser().getEmail()}
            next()
            })

            app.get('/hello',function(req,res,next){
            res.set('content-type','application/json')
            res.send( cache.get('/hello') )
            res.end()
            },true)

            app.get('/client.js', app.client() )

            app.get(/.*/, function(req,res,next){
            res.set('content-type','text/html')
            res.send("<html><body><h1>Hello</h1></body></html>") // see docs for template-usage & banner-removal
            res.end()
            })

            // this hooks Gexpress into appscript 
            function doGet(e) { return app.doGet(e)  }
            function doPost(e){ return app.doPost(e) }
            `
        }
    ]
}

export default getDB