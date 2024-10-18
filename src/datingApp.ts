interface Profile {
  name: string;
  age: number;
  bio: string;
}

const profiles: Profile[] = [
  { name: "张三", age: 28, bio: "喜欢运动和阅读" },
  { name: "李四", age: 25, bio: "热爱旅行和美食" },
  { name: "王五", age: 30, bio: "音乐爱好者，会弹吉他" },
];

let currentProfileIndex = 0;

export function setupDatingApp(
  profilesElement: HTMLDivElement,
  likeButton: HTMLButtonElement,
  passButton: HTMLButtonElement,
  chatWindow: HTMLDivElement
) {
  const showProfile = (index: number) => {
    const profile = profiles[index];
    profilesElement.innerHTML = `
      <h2>${profile.name}, ${profile.age}</h2>
      <p>${profile.bio}</p>
    `;
  };

  const nextProfile = () => {
    currentProfileIndex = (currentProfileIndex + 1) % profiles.length;
    showProfile(currentProfileIndex);
  };

  likeButton.addEventListener('click', () => {
    console.log(`You liked ${profiles[currentProfileIndex].name}`);
    chatWindow.classList.remove('hidden');
    nextProfile();
  });

  passButton.addEventListener('click', () => {
    console.log(`You passed on ${profiles[currentProfileIndex].name}`);
    chatWindow.classList.add('hidden');
    nextProfile();
  });

  showProfile(currentProfileIndex);
}