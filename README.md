# 🧭 Navigation Bar
(yes chatgpt generated this readme file 😈)

https://github.com/user-attachments/assets/43fac1f1-4c7f-4486-b23d-46dceecb2729

(video it's laggy sorry for that!)

Check yourself here: https://navigationbar-p2xe.vercel.app/

A simple navigation component built with **React (Next.js)** and **Tailwind CSS**.  
It's an open source 4fun project – nothing serious, just experimenting 😎

> ⚠️ Not responsive yet, but it works! Want to improve it over time 💪

## 📌 What is this?

This project lets you create interactive navigation menus where buttons are linked to specific views using IDs.  
You can dynamically display content depending on which button the user clicks.

## 🧪 Example Usage

Here’s how the component works:

```tsx
  const [navigationButtonsOpen, setNavigationButtonsOpen] = useState(false);
  const [navigationBodyOpen, setNavigationBodyOpen] = useState(false);
  const [navigation, setNavigation] = useState("");
  const [, setNavigationText] = useState("");
  const [position, setPosition] = useState<{ x: number, y: number }>({ x: 0, y: 0 });


<Menu className="absolute">
  <NavigationsButtons
    className="ring-neutral-600"
    SetNavigationButtons={setNavigationButtonsOpen}
    setNavigationBodyOpen={setNavigationBodyOpen}
  >
    <NavigationButton
      setNavigation={setNavigation}
      setNavigationText={setNavigationText}
      text="Check this out!"
      id="1"
      setPosition={setPosition}
    />
    <NavigationButton
      className="bg-red-400"
      setNavigation={setNavigation}
      setNavigationText={setNavigationText}
      text="⭐ Star the project!"
      id="2"
      setPosition={setPosition}
    />
  </NavigationsButtons>

  <Navigations
    position={position}
    NavigationBody={navigationBodyOpen}
    NavigationButtons={navigationButtonsOpen}
    SetNavigationButtons={setNavigationButtonsOpen}
    SetNavigationBodyOpen={setNavigationBodyOpen}
  >
    <Navigation navigation={navigation} id="1">
      <div className="p-5">
        <h1 className="font-bold font-mono">This example of using my Navigation Bar</h1>
        <ul className="list-disc px-5">
          <li>It is a simple navigation bar</li>
          <li>It is built with React (Next.js) and Tailwind CSS</li>
          <li>Unfortunately, it is not responsive yet</li>
        </ul>
      </div>
    </Navigation>

    <Navigation navigation={navigation} id="2">
      <Link href="https://github.com/Kartosowski" target="_blank">
        https://github.com/Kartosowski
      </Link>
    </Navigation>
  </Navigations>
</Menu>
```

The `id` you assign to a `<NavigationButton />` must match the `id` of the corresponding `<Navigation />` content. That's how they link together 🔗

## 💡 To Do / Ideas

- Make it responsive 📱
- Maybe publish it as a standalone package?
- Clean up the code structure

## 🚀 Getting Started

```bash
git clone https://github.com/Kartosowski/navigationbar
cd navigationbar
npm install
npm run dev
```

## ⭐ Support

Wanna support it?  
Leave a star ⭐ or fork it and improve it – I'd love to see what you come up with!

---

Made by [@Kartosowski](https://github.com/Kartosowski) with 💻 + ☕
