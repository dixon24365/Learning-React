import React from "react"

export default function AppMessages() {
    const [unreadMessages, setUnreadMessages] = React.useState([])
    
    /**
     * Challenge:
     * Only display the <h1> below if there are unread messages
     */
    
    return (
        <>
        <div>
           {unreadMessages.length >1 && <h1>You have {unreadMessages.length} unread messages!</h1>}
        </div>
        <div>
           {unreadMessages.length ===1 && <h1>You have {unreadMessages.length} unread message!</h1>}
        </div>
        <div>
           {unreadMessages.length === 0 && <h1>You have no unread messages!</h1>}
        </div>
        </>
    )
}