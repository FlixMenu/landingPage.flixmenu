import React from 'react'

export function PageLoadingLoader() {
    return (
        <div class="lds-ripple"><div></div><div></div></div>
    )
}

export function AsyncLoader() {

    return (
        <div class="lds-ring"><div></div><div></div><div></div></div>
    )
}