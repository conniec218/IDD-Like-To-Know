import React, { Component, useMemo } from 'react';
import './MessagingPane.css'
// import React, { useMemo } from 'react';
import ReactWebChat, { createDirectLine } from 'botframework-webchat';
import { InputGroup, InputGroupAddon, Button, Input } from 'reactstrap'
import { TextField, Stylesheet } from '@fluentui/react';

class MessagingPane extends Component {
    constructor() {
        super();
        this.state = {
            initialText: ""
        }
    }

    sendToBot(value) {
        console.log(value)
    }

    handleChange(event) {
        console.log(event.target.value)
        this.setState({value: event.target.value})
    }

    render() {
        return(
            <div className="messagingPane" >
                <InputGroup>
                    <Input />
                    <InputGroupAddon addonType="prepend"><Button>That's all for now.</Button></InputGroupAddon>
                </InputGroup>
            </div>
        )
    }
}

export default MessagingPane;