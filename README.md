# 🍨 iOSKeyboardSupport.js

Vanilla workaround for the problem that arrow keys from the iPad keyboard aren't recognized in web events.

## Problem Domain

Somehow Safari Mobile for iOS seems to have big problems to translate some keyboard keys like e.g. arrow keys to a javascript `KeyboardEvent`.
Some keys are mentioned as `Unidentified` others as `Dead`. The problem reproduces on bluetooth keyboards as also on the newest _SmartKeyboard_ from Apple.

As it is really sad to have such an expensive device without the ability to work professionally in modern web apps, I created a mapping for some keys.
Everytime an iOS keyboard event is being fired the propagation of this event is immediately stopped and an artificial event (being the one you actually want) is getting fired.

**However, this is just a workaround. A clean and sustainable solution has to come from Apple.**

## Usage

Simply add the script to your head import. Done.

```
<html>
    <head>
            <script src="iOSKeyboardSupport.js"></script>
            ...
    </head>
    ...
</html>
```

## Key Support

This script currently maps the arrow keys. Feel free to reach in a pull request if you'd add more mappings to the script.

| iOS Keyboard event.key | Real event.key | Real event.keyCode  |
| ---------------------- | -------------- | ------------------- |
| UIKeyInputLeftArrow    | ArrowLeft      | 37                  |
| UIKeyInputUpArrow      | ArrowUp        | 38                  |
| UIKeyInputRightArrow   | ArrowRight     | 39                  |
| UIKeyInputDownArrow    | ArrowDown      | 40                  |

## Test it

Visit the demo site at [https://hendriku.github.io/iOSKeyboardSupport.js/](https://hendriku.github.io/iOSKeyboardSupport.js/).

## Notice

I don't want to put any license here because I want the barrier to use this in every domain to be as tiny as possible.
Nevertheless don't hold me liable for anything but I'd be feeling honored if you mention my name when you use the script.
