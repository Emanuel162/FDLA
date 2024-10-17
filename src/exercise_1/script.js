
const createXML = (atomFeedData) => {
    document.getElementById('atomOutput').textContent = `
<?xml version="1.0" encoding="utf-8"?>
<feed xmlns="http://www.w3.org/2005/Atom">
    <title>Das ist mein Feed zum FDLA Kurs</title>
    <link href="https://ilias.uni-koeln.de/ilias/goto_uk_crs_5913385.html" />
    <updated>${new Date().toISOString()}</updated>
    <author>
        <name>Emanuel</name>
    </author>
    <id>${atomFeedData.link}</id>
    
    <entry>
        <title>${atomFeedData.title}</title>
        <link href="${atomFeedData.link}" />
        <id>${atomFeedData.link}</id>
        <updated>${new Date().toISOString()}</updated>
        <summary>${atomFeedData.description}</summary>
    </entry>
</feed>
    `;
}

const createAtomFeed = () => {
    const author = document.getElementById("author").value;
    const title = document.getElementById("title").value;
    const link = document.getElementById("link").value;
    const description = document.getElementById("description").value;
    
    const atomFeedData = {
        author: author,
        title: title,
        link: link,
        description: description,
    }
    
    let list = JSON.parse(sessionStorage.getItem("atomFeedDataList"));
    if(list == null) {
        list = [];
    }
    list.push(atomFeedData);
    sessionStorage.setItem("atomFeedDataList", JSON.stringify(list));

    createXML(atomFeedData);
}

// ------------------------------ OLD ------------------------------

let linkform = document.getElementById("linkForm");

linkform.addEventListener("submit", (e) => {
    e.preventDefault();
    const link = document.getElementById("link").value;
    let list = JSON.parse(sessionStorage.getItem("Linkliste"));
    if(list == null) {
        list = [];
    }
    if(link.length > 0 && !list.includes(link)) {
        list.push(link);
    }
    sessionStorage.setItem("Linkliste", JSON.stringify(list));
    createUnorderedList(list);
})

const createUnorderedList = (list) => {
    const div = document.getElementById("linklist");
    div.innerHTML = "";

    const ul = document.createElement("ul");
    list.forEach((item) => {
        const listItem = document.createElement("li");
        listItem.innerText = item;
        ul.appendChild(listItem);
    })
    div.appendChild(ul);
}
