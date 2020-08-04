import React from 'react';

function ButtonLink(props) {
    //props => (className: "nome da classe", href: "/")

    return (
        <a href="{props.href}" className="{props.className}" >
            Novo vídeo
        </a>
    )
}

export default ButtonLink;