import React, { useState } from 'react';
import { Button, FormControl } from 'react-bootstrap';


const AddContact = (props) => {
    let [name, setName] = useState('')
    let [phone, setPhone] = useState('')
    let [image, setImage] = useState('')

    function handleClick() {
        let newContact = {
            name,
            phone,
            image,
            id: Date.now()
        }
        props.handleNewContact(newContact)
        setName('Ricardo Milos')
        setPhone('+996700687075')
        setImage('https://image.winudf.com/v2/image1/Y29tLm9sZWcub2xlZ2dfc2NyZWVuXzBfMTU1MjI0NDMxMl8wNjk/screen-0.jpg?fakeurl=1&type=.jpg')
    }

    return (
        <div>
            <FormControl style={{ width: '15rem' }}
                value={name} onChange={(e) => setName(e.target.value)}
                type="text" placeholder="name" />
            <br />
            <FormControl style={{ width: '15rem' }}
                value={phone} onChange={(e) => setPhone(e.target.value)}
                type="text" placeholder="number" />
            <br />
            <FormControl style={{ width: '15rem' }}
                value={image} onChange={(e) => setImage(e.target.value)}
                type="text" placeholder="url" />
            <br />
            <Button variant="secondary" className='btn-1' onClick={handleClick}>Add Contact</Button>
        </div >
    );
};

export default AddContact;
