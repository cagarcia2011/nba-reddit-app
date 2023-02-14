export const getDateFromUTCSeconds = (utcSeconds) => {
    const d = new Date(utcSeconds * 1000)

    return d
}

export const formatDate = (dateObj) => {

    return dateObj.toLocaleString()
}

const getDiffString = (diff) => {
    const diffSeconds = Math.floor(diff / 1000)
    if (diffSeconds < 60) { 
        return `${diffSeconds} seconds ago`
    }
    const diffMinutes = Math.floor(diffSeconds / 60)
    if (diffMinutes < 60) {
        return `${diffMinutes} minutes ago`
    }
    const diffHours = Math.floor(diffMinutes / 60)
    if (diffHours < 24) {
        return `${diffHours} hours ago`
    }
    const diffDays = Math.floor(diffHours / 24)
    return `${diffDays} days ago`
}

export const getDateDiff = (dateObj) => {
    const d = new Date()
    const diff = d - dateObj
    
    return getDiffString(diff)
}