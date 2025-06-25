# Kartos's Navigation bar
https://github.com/user-attachments/assets/43fac1f1-4c7f-4486-b23d-46dceecb2729

A simple, fun, and open-source navigation component built with **React (Next.js)** and **Tailwind CSS**.

> ⚠️ Project is currently in early/experimental stage. Not responsive yet. Use at your own risk (or joy 😎).

## 📦 What is this?

This is a small 4fun project I made just to experiment and try out a component-based navigation system.  
It allows you to link navigation buttons to dynamic content blocks using IDs.

Here’s an example of how you might use it:

```tsx
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
