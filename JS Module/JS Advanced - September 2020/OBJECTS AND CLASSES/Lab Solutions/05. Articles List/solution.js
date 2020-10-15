function createArticle() {
    let title = document.getElementById('createTitle').value;
    let content = document.getElementById('createContent').value;
    let articleList = document.getElementById('articles');

    if (title !== "" && content !== "") {
        let article = document.createElement('article');
        let h3 = document.createElement('h3');
        h3.textContent = title;
        let p = document.createElement('p');
        p.textContent = content;
        article.appendChild(h3);
        article.appendChild(p);
        articleList.appendChild(article);
    }
    document.getElementById('createTitle').value = '';
    document.getElementById('createContent').value = '';
}