export type DemoUser = {
  name: string;
  email: string;
  password: string;
  image?: string;
};

const USERS_KEY = "suncart_demo_users";
const SESSION_KEY = "suncart_demo_session";

export function getDemoUsers(): DemoUser[] {
  if (typeof window === "undefined") return [];
  try {
    return JSON.parse(localStorage.getItem(USERS_KEY) || "[]");
  } catch {
    return [];
  }
}

export function saveDemoUsers(users: DemoUser[]) {
  localStorage.setItem(USERS_KEY, JSON.stringify(users));
}

export function getCurrentDemoUser(): DemoUser | null {
  if (typeof window === "undefined") return null;
  try {
    return JSON.parse(localStorage.getItem(SESSION_KEY) || "null");
  } catch {
    return null;
  }
}

export function setCurrentDemoUser(user: DemoUser) {
  localStorage.setItem(SESSION_KEY, JSON.stringify(user));
  window.dispatchEvent(new Event("suncart-auth-change"));
}

export function clearCurrentDemoUser() {
  localStorage.removeItem(SESSION_KEY);
  window.dispatchEvent(new Event("suncart-auth-change"));
}

export function registerDemoUser(name: string, email: string, password: string) {
  const users = getDemoUsers();
  const normalizedEmail = email.trim().toLowerCase();
  const exists = users.some((user) => user.email.toLowerCase() === normalizedEmail);

  if (exists) {
    return { ok: false, message: "This email is already registered. Please login instead." };
  }

  if (password.length < 8) {
    return { ok: false, message: "Password must be at least 8 characters." };
  }

  const newUser: DemoUser = {
    name: name.trim(),
    email: normalizedEmail,
    password,
    image: `https://api.dicebear.com/9.x/thumbs/svg?seed=${encodeURIComponent(normalizedEmail)}`
  };

  saveDemoUsers([...users, newUser]);
  return { ok: true, user: newUser };
}

export function loginDemoUser(email: string, password: string) {
  const normalizedEmail = email.trim().toLowerCase();
  const user = getDemoUsers().find(
    (item) => item.email.toLowerCase() === normalizedEmail && item.password === password
  );

  if (!user) {
    return { ok: false, message: "Email or password is incorrect." };
  }

  setCurrentDemoUser(user);
  return { ok: true, user };
}

export function updateDemoUserProfile(name: string, image: string) {
  const currentUser = getCurrentDemoUser();
  if (!currentUser) return { ok: false, message: "Please login first." };

  const users = getDemoUsers();
  const updatedUser: DemoUser = {
    ...currentUser,
    name: name.trim(),
    image: image.trim() || currentUser.image
  };

  const updatedUsers = users.map((user) =>
    user.email.toLowerCase() === currentUser.email.toLowerCase() ? updatedUser : user
  );

  saveDemoUsers(updatedUsers);
  setCurrentDemoUser(updatedUser);
  return { ok: true, user: updatedUser };
}
