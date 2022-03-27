import React from 'react'

export const iconTypes = {
    packman: 'packman',
    plus: 'plus'
}
export const iconDefs = {
    packman: {
        className: 'icon icon-pacman',
        viewBox: '0 0 32 32',
        width: '18',
        height: '18',
        body: (
            <path fill="currentCollor"
                  d="M30.148 5.588c-2.934-3.42-7.288-5.588-12.148-5.588-8.837 0-16 7.163-16 16s7.163 16 16 16c4.86 0 9.213-2.167 12.148-5.588l-10.148-10.412 10.148-10.412zM22 3.769c1.232 0 2.231 0.999 2.231 2.231s-0.999 2.231-2.231 2.231-2.231-0.999-2.231-2.231c0-1.232 0.999-2.231 2.231-2.231z"></path>
        )
    },
    plus: {
        className: 'icon icon-plus',
        viewBox: '0 0 32 32',
        width: '18',
        height: '18',
        body: (
            <path fill="currentCollor"
                  d="M31 12h-11v-11c0-0.552-0.448-1-1-1h-6c-0.552 0-1 0.448-1 1v11h-11c-0.552 0-1 0.448-1 1v6c0 0.552 0.448 1 1 1h11v11c0 0.552 0.448 1 1 1h6c0.552 0 1-0.448 1-1v-11h11c0.552 0 1-0.448 1-1v-6c0-0.552-0.448-1-1-1z"></path>
        )
    }
}