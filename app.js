function GS(catg, action, text) {
    return {
        hitType: 'event',
        eventCategory: catg,
        eventAction: action,
        eventLabel: text
    }
}

function genGStatsAttn(text) {
    return {
        run: GS("ProjectView", "test", text),
        get: GS("ProjectView", "code", text)
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
            ga('send', sendargs)
        }
    }
})