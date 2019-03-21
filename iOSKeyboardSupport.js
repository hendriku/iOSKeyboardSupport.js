// eslint-disable-next-line no-unused-vars, prefer-const
let keyboardSupportManager = false

document.addEventListener("keyup", mapKeyEvent)
document.addEventListener("keydown", mapKeyEvent)
document.addEventListener("keypress", mapKeyEvent)

const supportKeymap = { // event.key -> { new KeyboardEvent overrides }
    "UIKeyInputLeftArrow": {
        code: "ArrowLeft",
        key: "ArrowLeft",
        keyCode: 37,
        keyIdentifier: "Left",
        which: 37
    },
    "UIKeyInputUpArrow": {
        code: "ArrowUp",
        key: "ArrowUp",
        keyCode: 38,
        keyIdentifier: "Up",
        which: 38
    },
    "UIKeyInputRightArrow": {
        code: "ArrowRight",
        key: "ArrowRight",
        keyCode: 39,
        keyIdentifier: "Right",
        which: 39
    },
    "UIKeyInputDownArrow": {
        code: "ArrowDown",
        key: "ArrowDown",
        keyCode: 40,
        keyIdentifier: "Down",
        which: 40
    }
}

function mapKeyEvent(event) {
    if (!keyboardSupportManager) return

    const keymapEntry = supportKeymap[event.key]
    if (keymapEntry) {
        const { charCode, code, key, keyCode, keyIdentifier, which } = keymapEntry

        // revoke key event
        event.preventDefault()
        event.stopImmediatePropagation()

        // fire mapped event
        document.dispatchEvent(new KeyboardEvent(event.type, {
            ...event,
            charCode,
            code,
            key,
            keyCode,
            keyIdentifier,
            which
        }))
    }
}
