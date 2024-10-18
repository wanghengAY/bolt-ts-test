import './style.css'
import { setupDatingApp } from './datingApp'
import { setupChat } from './chat'
import { setupLogin } from './login'

document.querySelector<HTMLDivElement>('#app')!.innerHTML = `
  <div id="loginContainer">
    <h1>Dating App Login</h1>
    <input type="text" id="username" placeholder="Username">
    <input type="password" id="password" placeholder="Password">
    <button id="loginButton">Login</button>
  </div>
  <div id="datingAppContainer" class="hidden">
    <h1>Simple Dating App</h1>
    <div id="profiles"></div>
    <div id="buttons">
      <button id="likeButton">Like</button>
      <button id="passButton">Pass</button>
    </div>
    <div id="chatWindow" class="hidden">
      <div id="chatMessages"></div>
      <input type="text" id="chatInput" placeholder="Type a message...">
      <button id="sendButton">Send</button>
    </div>
  </div>
`

const loginContainer = document.querySelector<HTMLDivElement>('#loginContainer')!
const datingAppContainer = document.querySelector<HTMLDivElement>('#datingAppContainer')!
const profilesElement = document.querySelector<HTMLDivElement>('#profiles')!
const likeButton = document.querySelector<HTMLButtonElement>('#likeButton')!
const passButton = document.querySelector<HTMLButtonElement>('#passButton')!
const chatWindow = document.querySelector<HTMLDivElement>('#chatWindow')!
const chatMessages = document.querySelector<HTMLDivElement>('#chatMessages')!
const chatInput = document.querySelector<HTMLInputElement>('#chatInput')!
const sendButton = document.querySelector<HTMLButtonElement>('#sendButton')!

setupLogin(loginContainer, datingAppContainer)
setupDatingApp(profilesElement, likeButton, passButton, chatWindow)
setupChat(chatWindow, chatMessages, chatInput, sendButton)