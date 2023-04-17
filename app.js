const posts = [];

function createPost(post) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            posts.push(post);
            resolve();
        }, 1000);
    }
    )
};

const post = {
    user: "Ankit Sharma",
    lastActivityTime: "17 Apr 2023"
}

function updateLastUserActivityTime() {
    return new Promise( (resolve, reject) => {
        setTimeout( () => {
            post.lastActivityTime = new Date().getTime();
            resolve(post.lastActivityTime);
        }, 1000);
    })
}

function printPosts() {
    posts.foreach((post) => {
        console.log(post);
    })
}