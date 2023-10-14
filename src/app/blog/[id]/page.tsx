'use client';

const BlogId = () => {
    const get = async () => {
        const data = await fetch(window.location.origin + '/api/blog/234').then(res => res.json()).then(res => res);

        alert(JSON.stringify(data));
    }

    return <div>Blog ID
        <button onClick={get}>test</button>
    </div>
}

export default BlogId;
