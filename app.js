function GS(catg, action) {
    if ("ga" in window) {
        tracker = ga.getAll()[0];
        if (tracker)
            tracker.send("event", catg, action);
    }
}

function genGStatsAttn(text) {
    return {
        run: ["ProjectView", "test: " + text],
        get: ["ProjectView", "code: " + text]
    }
}

let app = new Vue({
    el: '#app',
    data: {
        projects: [
            {
                name: "Thick Marker",
                run: "https://thickmarker.oceean.store",
                get: "https://github.com/oceean/ThickMarker",
                stats: genGStatsAttn("ThickMarker")
            },
            {
                name: "Sticker Columns",
                run: "https://stickerscolumns.oceean.store",
                get: "https://github.com/oceean/StickersColumns",
                stats: genGStatsAttn("StickersColumns")
            }
        ]
    },
    methods: {
        GSend: function (sendargs) {
            GS(sendargs[0], sendargs[1])
        }
    }
})