
const convertGoogleImageUrls = (gUrl: string | undefined) => {
    if(gUrl === undefined) {
        return []
    }
    const gUrls = gUrl.split(',')
    const urls = gUrls.map(gUrl => {
        const id = gUrl
            .substring(gUrl.indexOf('/d/'), gUrl.indexOf('/view'))
            .replace('/d/', '')
        return 'https://lh3.googleusercontent.com/d/' + id + '=s800'
    })
    return urls
}

export default convertGoogleImageUrls