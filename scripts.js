document.getElementById('blog-form').addEventListener('submit', function(event) {
    event.preventDefault();
    var title = document.getElementById('title').value;
    var content = document.getElementById('content').value;
    
    if (title && content) {
        var post = document.createElement('article');
        post.innerHTML = '<h3>' + title + '</h3><p>' + content + '</p>';
        document.getElementById('blog-posts').appendChild(post);
        document.getElementById('title').value = '';
        document.getElementById('content').value = '';
    } else {
        alert('Please fill out both title and content fields.');
    }
});
