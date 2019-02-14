function genGStats(text) {
    return {
        run: {
            hitType: 'event',
            eventCategory: 'Attn',
            eventAction: 'test',
            eventLabel: text
        },
        get: {
            hitType: 'event',
            eventCategory: 'Attn',
            eventAction: 'code',
            eventLabel: text
        }
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
                stats: genGStats("ThickMarker")
            },
            {
                name: "Sticker Columns",
                run: "https://stickerscolumns.oceean.store",
                get: "https://github.com/oceean/StickersColumns",
                stats: genGStats("StickersColumns")
            }
        ]
    },
    methods: {
        GSend: function (sendargs) {
            ga('send', sendargs)
        }
    }
})