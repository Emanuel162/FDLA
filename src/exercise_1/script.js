let atomFeed = "";

const createAtomFeed = () => {
    atomFeed = addEntryToFeed(getEntryData());
}

const getEntryData = () => {
    return {
        author: document.getElementById("author").value,
        title: document.getElementById("title").value,
        link: document.getElementById("link").value,
        description: document.getElementById("description").value,
    }
}

// add entry with given data to the atom feed
const addEntryToFeed = (entryData) => {
    const entryXml = `    <entry>
        <title>${entryData.title}</title>
        <link href="${entryData.link}"/>
        <id>${entryData.link}</id>
        <updated>${new Date().toISOString()}</updated>
        <summary>${entryData.description}</summary>
    </entry>
`;
    const firstPartAtomFeed = atomFeed.split('</feed>')[0];
    const newAtomFeed = firstPartAtomFeed + entryXml + `</feed>`;
    document.getElementById('atomOutput').textContent = newAtomFeed;
    return newAtomFeed;
}

//create empty atom feed
const initializeAtomfeed = () => {
    atomFeed = `
<?xml version="1.0" encoding="utf-8"?>
<feed xmlns="http://www.w3.org/2005/Atom">
    <title>My Atom Feed for FDLA</title>
    <link href="https://ilias.uni-koeln.de/ilias/goto_uk_crs_5913385.html" />
    <updated>${new Date().toISOString()}</updated>
    <author>
        <name>Emanuel and Paa Kofi</name>
    </author>
    <id>https://ilias.uni-koeln.de/ilias/goto_uk_crs_5913385.html${new Date().toISOString()}</id>
</feed>
    `
    document.getElementById('atomOutput').textContent = atomFeed;
}

//after loading the DOM the atom feed is initiated once
window.addEventListener('DOMContentLoaded', initializeAtomfeed);
