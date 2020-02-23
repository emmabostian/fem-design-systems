# Animating Components

## Micro-Interactions

Animations not only take your application from good to exceptional, they’re often expected by users.

But animations don’t just make your application look and feel nicer, they can be a useful tool for improving perceived performance, giving users updates on the status of a task, and guiding a user through your application.

Micro-interactions are small animations whose purpose is to delight the user by providing feedback in regards to a task or inform the user about the status of a process or task.

By incorporating micro-interactions we will take our applications from ordinary to exceptional. We can think of the structure of your application—the HTML—as the body, the CSS as the physical appearance, and animations as the body language.

Here are a few reasons why you should use micro-interactions throughout your application.

### Enhancing Perceived Performance

[“There are two kinds of time: clock time and brain time. The former is the objective measure of time; the latter is how a person perceives time.”](https://blog.marvelapp.com/a-designers-guide-to-perceived-performance/)

Adding micro-interactions, such as a custom progress bar or an animated setup dialog which guides the user through a process, can change the way users perceive the time it takes to complete a task.

We can alter our user’s sense of time with animations and this can work in our favor if our performance budget needs some refactoring.

**Examples**

- [Form entry](https://dribbble.com/shots/3982257-Neo-Kids-Onboarding-Concept).

### Inform Users About The Status Of A Task

As a user’s request is processing or as their data is loading, we can use a micro-interaction to inform them of its status.

Custom progress bars are a great way to keep your users from getting frustrated and will stretch the amount of time they’re willing to wait for a process to finish.

**Examples**

- [Avocado loader](https://dribbble.com/shots/7184429-Avocado-loader-interaction)
- [Book loader](https://dribbble.com/shots/7199149-Book-Loader)
- [Progress bar](https://dribbble.com/shots/5334120-Progress-Bar-Animation-UX-Concept)

### Illustrate A State Change

If a user is filling out a form and incorrectly enters their password, we can use micro-interactions to illustrate that this form needs to be fixed prior to submission.

**Examples**

- [Form error](https://dribbble.com/shots/4908813-Invalid-Email-Error)
- [Incorrect password](https://dribbble.com/shots/5310205-Password-error-animation-2)

### Draw A User's Attention To Something

Using micro-interactions to capture a user’s attention and indicate that there is something of importance is a useful tool for on-boarding or to indicate someone is typing.
**Examples**

- [Chat](https://dribbble.com/shots/4622464-Chat)

### To Create Habits

Social media applications are really good at getting their uses to form habits, and they do so with micro-interactions.

Facebook’s like button is a prime example of this, as is Instagram’s heart animation.These small interactions delight users and keep them coming back for more.

**Examples**

- [Reactions](https://dribbble.com/shots/6415659-Reactions-2-0)

### To Delight Our Users

Micro-interactions can bring joy to our users by enhancing their experience. They can take even the most tedious of forms and bring them to life.

## Do's & Don'ts Of Micro-Interactions

Before you build your first micro-interaction, it’s important to understand the do’s and don’ts.

### Do: Make Your Micro-Interactions Accessible

Users won’t care about the coolest micro-interaction in the world if it’s not accessible. If the interaction indicates state change, ensure that the proper HTML elements and attributes are used; otherwise, add the appropriate WAI-ARIA counterparts.

### Don't: Add Animation To Everything

Animations draw the user’s attention, but not all information has the same level of importance.

First understand which component on the page has the most pertinent or time sensitive information or priority, and then decide what to animate.

### Do: Make Animations Feel As Though They're Part Of The Real World

Our goal is to create animations which feel natural and fluid, not robotic and linear. Try to mimic the physics of the real world when designing and developing micro-interactions.

## Building A Micro-Interaction

There are three main areas to designing a micro-interaction:

1. Interaction Trigger
2. State Definition
3. Animation Definition

### Interaction Trigger

All micro-interactions require something else to trigger them. This can be a user-triggered action, like clicking a button, or a system-prompted event, like requesting data.

### State Definition

Once we know what triggers the micro-interaction, we must define the different state that this micro-interaction has.

### Animation Definition

Once we’ve defined the various states, we can define what is expected at each step.

## React Spring

`react-spring` is a hooks-based and a physics-based animation library, and allows you to create complex animations to delight your users.

Typically we use CSS animation libraries with transition timing functions and bezier curves to animate elements in the UI. However, it’s truly difficult to make elements transition in a natural manner.

Elements in real life don’t transition linearly through different states, and your UI elements shouldn’t either.

### useSpring

`useSpring` is the "bread and butter" `react-spring` hook. It allows you to transition an element's CSS properties on enter and exit as well as relative to your React state.

You can define your spring in a few ways.

You can define both the `from` and `to` values.

```jsx
const animation = useSpring({
  from: { opacity: 0, transform: `translateY(-200%)` },
  to: { opacity: 1, transform: `translateY(0)` }
});
```

You can define just the `to` value. This will take the default CSS from the DOM element as the `from` attribute values.

```jsx
const animation = useSpring({
  to: {
    opacity: 1,
    transform: `translateY(0%)`
  }
});
```

You can omit the `to` keyword and wrapping object as well to clean up your syntax.

```jsx
const animation = useSpring({
  opacity: 1,
  transform: `translateY(0%)`
});
```

Or you can use React hook state with a ternary operator to define the spring.

```jsx
const [showModal, setShowModal] = useState(false);
const animation = useSpring({
	opacity: showModal ? 1 : 0,
	transform: showModal ? `translateY(0%)` : `translateY(-200%)
});
```

Once you have defined your `useSpring` hook, you need to preface the animatable element HTML with `animated.` to tell `react-spring` that this element will be animated.

```jsx
<animated.div></animated.div>
<animated.h1></animated.h1>
```

Lastly, you must pass your `animation` constant as a `style` attribute on the animatable DOM element.

```jsx
<animated.div style={animation}></animated.div>
```

Putting that all together we get the following:

```jsx
import React, { useState } from 'react';
import { animated, useSpring } from 'react-spring';

const Modal = () => {
	const [showModal, setShowModal] = useState(false);
	const animation = useSpring({
		opacity: showModal ? 1 : 0,
		transform: showModal ? `translateY(0%)` : `translateY(-200%)
	});

	return <animated.div style={animation}>...</animated.div>
}

export default Modal;
```

Now, it's your turn. Head over to [this CodeSandbox](https://codesandbox.io/s/reverent-currying-fbhix?fontsize=14&hidenavigation=1&theme=dark) and complete the activity in the `Toast.js` file.

### useTransition

`useTransition` is a bit more complex and will mount and unmount your elements from the DOM. It can also transition between different elements in the DOM (like in a photo album).

To define your `useTransition` hook, you must define the `from`, `enter`, and `leave` attributes.

To get our transition to render we can't simply pass it as a `style` attribute; we must iterate over it in our return statement.

You can transition arrays of elements:

```jsx
const [items, set] = useState([...])
const transitions = useTransition(items, item => item.key, {
	from: { opacity: 0 },
	enter: { opacity: 1 },
	leave: { opacity: 0 }
})

return transitions.map(({ item, props, key }) =>
	<animated.div key={key} style={props}>{item.text}</animated.div>
)
```

You can toggle between two different elements.

```jsx
const [toggle, set] = useState(false);
const transitions = useTransition(toggle, null, {
  from: { position: "absolute", opacity: 0 },
  enter: { opacity: 1 },
  leave: { opacity: 0 }
});
return transitions.map(({ item, key, props }) =>
  item ? (
    <animated.div style={props}>Hello</animated.div>
  ) : (
    <animated.div style={props}>Goodbye</animated.div>
  )
);
```

Or you can mount and unmount one element, like a modal, from the DOM based on a conditional statement.

```jsx
const [show, set] = useState(false);
const transitions = useTransition(show, null, {
  from: { position: "absolute", opacity: 0 },
  enter: { opacity: 1 },
  leave: { opacity: 0 }
});
return transitions.map(
  ({ item, key, props }) =>
    item && (
      <animated.div key={key} style={props}>
        I'm mounted!
      </animated.div>
    )
);
```

Now, it's your turn. Head over to [this CodeSandbox](https://codesandbox.io/s/reverent-currying-fbhix?fontsize=14&hidenavigation=1&theme=dark) and complete the activity in the `ExitModal.js` file.

## Other React Spring Hooks

There are several other `react-spring` hooks you can use to create beautiful micro-interactions for your design system.

The full list can be found [here](https://www.react-spring.io/docs/hooks/basics).

## Animating Our Modal

First install `react-spring`

```jsx
yarn add react-spring
```

Let's first create the state we'll need to show and hide the modal.

Inside `index.js` let's create new state called `showModal`. Then let's add a button underneath the theme switcher buttons which will toggle the visibility of our modal. You can add this underneath the theme switcher buttons.

```jsx
const [showModal, setShowModal] = useState(false);

...

<SecondaryButton onClick={() => setShowModal(!showModal)}>Show modal</SecondaryButton>
```

Lastly, let's pass `showModal` and `setShowModal` as properties to our `SignUpModal` component.

```jsx
<SignUpModal showModal={showModal} setShowModal={setShowModal} />
```

Inside `Modals.js` we can now destructure `showModal` and `setShowModal` from props.

```jsx
export const SignUpModal = ({ showModal, setShowModal }) => {
```

We'll use `react-spring` to show and hide our modal.

Import `animated`, `useSpring`, and `config` from `react-spring`.

```jsx
import { useSpring, animated, config } from "react-spring";
```

Now let's define our animation. We can use the hook state `showModal` to determine the styling of our modal.

```jsx
const animation = useSpring({
  opacity: showModal ? 1 : 0,
  transform: showModal ? `translateY(0)` : `translateY(-200%)`
});
```

Lastly, let's wrap `WrapperModal` in an `animated.div` element and pass our animation as the `style` prop.

```jsx
<animated.div style={animation}>
  <ModalWrapper>
    <SignUp />
    <SignUpHeader>Sign Up</SignUpHeader>
    <SignUpText>
      Sign up today to get access to all of our content and features!
    </SignUpText>
    <PrimaryButton onClick={() => console.log("You signed up!")}>
      Sign Up
    </PrimaryButton>
    <CloseModalButton onClick={() => setShowModal(false)}>
      <CloseIcon />
    </CloseModalButton>
  </ModalWrapper>
</animated.div>
```

Finally let's use the `react-spring` config to slow down the animation.

Now we can add it as property in the `useSpring` definition. We'll use the `slow` configuration.

```jsx
const animation = useSpring({
  opacity: showModal ? 1 : 0,
  transform: showModal ? `translateY(0)` : `translateY(-200%)`,
  config: config.slow
});
```

If we go back to the UI and click 'Show modal' we should see our modal animating in.

Go ahead add the anmimation to your other modal.

### Modal Activity Solution

First I extracted out the `useSpring` config to a function which will return our modal animation object.

```jsx
const getAnimation = showModal => {
  return {
    config: config.slow,
    opacity: showModal ? 1 : 0,
    transform: showModal ? `translateY(0)` : `translateY(-200%)`
  };
};
```

Next I refactored the `SignUp` modal to use this helper function.

```jsx
export const SignUpModal = ({ showModal, setShowModal }) => {
  return (
    <animated.div style={useSpring(getAnimation(showModal))}>
```

Now I just followed the same process for my second `SignIn` modal.

```jsx
export const SignInModal = ({ showModal, setShowModal }) => (
  <animated.div style={useSpring(getAnimation(showModal))}>
    <ModalWrapper
      style={{
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-around"
      }}
    >
      <div>
        <ModalHeader>Sign In</ModalHeader>
        <EmailInput label="Email" placeholder="emmabostian@gmail.com" />
        <PasswordInput label="Password" />
        <SecondaryButton style={{ margin: "16px 16px 0 0" }}>
          Sign Up
        </SecondaryButton>
        <PrimaryButton>Sign In</PrimaryButton>
      </div>
      <SignIn />
      <CloseModalButton onClick={() => setShowModal(false)}>
        <CloseIcon />
      </CloseModalButton>
    </ModalWrapper>
  </animated.div>
);
```
