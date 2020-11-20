const isName = (name) => {
    const re = /^([A-Za-z]+)$/;
    return re.test(String(name).toLowerCase())
}

const isMail = (email) => {
    const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
    return re.test(String(email).toLowerCase())
}

const isPhone = (phone) => {
    const re = /^[0-9]{10}$/
    return re.test(phone)
}

const isAddress = (address) => {
    const re = /^[#.0-9a-zA-Z\s,-]{5,200}$/
    return re.test(address)
}

module.exports = {
    isName, isMail, isPhone, isAddress
}