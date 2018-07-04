import axios from 'axios';

export const getEntries = () => {
    axios.get('/api/entry')
}

export const addEntry = (zone, village, fname, lname, dring, mail, fav, consent ) => {
    axios.post('/api/entry', {
        indie_zone: zone,
        indie_village: village,
        name: fname,
        lastName: lname,
        phone: dring,
        email: mail,
        favorite: fav,
        email_consent: consent
    })
}