function getLink(link, callback, errorcallback) {
    let linker = new XMLHttpRequest();
    linker.open("GET", link, true);
    linker.timeout = 6000;
    linker.onload = ()=>{
        if (callback)
            callback(linker.responseText);
    };
    linker.onerror = errorcallback || (()=>{});
    linker.send();
}

let app = new Vue({
    el: '#app',
    data: {
        showLogo: false,
        columns: {
            articles: {
                size: 5,
                color: "turquoise",
                data: []
            },
            abouts: {
                size: 4,
                color: "cyan",
                data: []
            },
            projects: {
                size: 3,
                color: "blue",
                data: []
            }
        },
        loading: {
            articles: true,
            abouts: true,
            projects: true,
        },
    },
    methods: {
        GSend: function (sendargs) {
            if ("ga" in window) {
                tracker = ga.getAll()[0];
                if (tracker)
                    tracker.send("event", sendargs[0], sendargs[1]);
            }
        },
        lorem: function (l) {
            let lorem = "";
            l += (Math.round(Math.random() * 3) - 1);
            for (let i = 0; i < l; i++)
                lorem += "ldng ";
            return lorem
        }
    }
})

function ajax(what) {
    getLink(`/data/${what}.json`, (data)=>{
        setTimeout(()=>{
            app.loading[what] = false;
            app.columns[what].data = JSON.parse(data);
        }, 300)
    })
}
ajax("articles");
ajax("abouts");
ajax("projects");

let h = window.document.getElementsByTagName("header")[0];
let i = 0;
setInterval(()=>{
    i++;
    h.style.backgroundPositionX = `${-i}px`;
}, 400)