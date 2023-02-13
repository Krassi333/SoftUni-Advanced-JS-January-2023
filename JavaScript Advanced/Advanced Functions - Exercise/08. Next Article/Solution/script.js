function getArticleGenerator(articles) {
    let parent = document.querySelector('#content');
    return () => {
        if (articles.length >= 1) {
            let articleEl = document.createElement('article');
            articleEl.textContent = articles.shift();
            parent.appendChild(articleEl);
        }
    }
}
