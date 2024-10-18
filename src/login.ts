export function setupLogin(
  loginContainer: HTMLDivElement,
  datingAppContainer: HTMLDivElement
) {
  const usernameInput = document.querySelector<HTMLInputElement>('#username')!
  const passwordInput = document.querySelector<HTMLInputElement>('#password')!
  const loginButton = document.querySelector<HTMLButtonElement>('#loginButton')!

  loginButton.addEventListener('click', () => {
    const username = usernameInput.value.trim()
    const password = passwordInput.value.trim()

    if (username && password) {
      // 这里应该有真实的身份验证逻辑
      // 为了演示，我们只是检查用户名和密码是否非空
      console.log(`User logged in: ${username}`)
      loginContainer.classList.add('hidden')
      datingAppContainer.classList.remove('hidden')
    } else {
      alert('Please enter both username and password')
    }
  })
}