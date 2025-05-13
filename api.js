const host = " https://wedev-api.sky.pro/api/v1/:sergei-sorokin"
export const fetchComments = () => {
    return fetch(host + "/comments").then((res) => {
        return res.json()
    })
    .then((responseData) => {
        const appComments = responseData.comments.map(comment => {
            return {
                name: comment.author.name,
                date: `${new Date(comment.date).toLocaleString('ru-RU', { day: '2-digit', month: '2-digit', year: '2-digit' })} ${new Date(comment.date).toLocaleTimeString('ru-RU', { hour: '2-digit', minute: '2-digit' })}`,
                text: comment.text,
                likes: comment.likes,
                isliked: false,
            }
        })
        return appComments
    })
}

export const postComments = (text, name) => {
    return fetch(host + "/comments", {
        method: 'POST',
        body: JSON.stringify({
        text,
        name,
        }),
    })
    .then(() => {
        return fetchComments()
    })
}