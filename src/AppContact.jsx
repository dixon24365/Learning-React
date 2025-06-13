import { useState } from 'react'
import Contact from '../contact-page/contact'

function AppContact() {
  return (
    <>
    <Contact
    img='/img/mr-whiskerson.png'
    name='Mr Whiskerson'
    phone='(+256) 773 401 867'
    email='tuedin.james@gamil.com'
    />
    <Contact
    img='/img/pumpkin.png'
    name='Mr Pumpkin'
    phone='(+256) 740 186 765'
    email='dixon.256james@gamil.com'
    />
    <Contact
    img='/img/fluffykins.png'
    name='Mr Fluffykins'
    phone='(+256) 750 675 9008'
    email='fluffkins@gamil.com'
    />
    <Contact
    img='/img/felix.png'
    name='Mr Felix'
    phone='(+256) 725 908 742'
    email='felixorr@gamil.com'
    />

    </>
  )
}

export default AppContact
