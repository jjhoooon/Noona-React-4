import { useState } from 'react'
import SearchBox from './SearchBox'
import ContactItem from './ContactItem'
import { useSelector } from 'react-redux'

const ContactList = () => {
    const [searchName, setSearchName] = useState("")

    const contactList = useSelector((state) => state.contactList)

    let searchList = contactList.filter(item => item.name.includes(searchName))


    return (
        <div className='contact-list-box'>
            <SearchBox setSearchName={setSearchName} />
            <div>연락처 총 개수 : {searchName ? searchList.length : contactList.length}</div>
            <div className='contact-item-container'>
                {searchName ?
                    searchList.map(item => <ContactItem item={item} />)
                    : contactList.map(item => <ContactItem item={item} />)
                }
            </div>
        </div>
    )
}

export default ContactList