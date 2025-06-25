'use client';
import Link from "next/link";
import Menu, { Navigation, NavigationButton, Navigations, NavigationsButtons } from "./components/menu";
import { useState } from "react";

export default function Page() {

  const [navigationButtonsOpen, setNavigationButtonsOpen] = useState(false);
  const [navigationBodyOpen, setNavigationBodyOpen] = useState(false);
  const [navigation, setNavigation] = useState("");
  const [navigationText, setNavigationText] = useState("");
  const [position, setPosition] = useState<{ x: number, y: number }>({ x: 0, y: 0 });


  return (
    <div>
      <Menu className="absolute ">
        
        <NavigationsButtons className="ring-1 ring-neutral-600" SetNavigationButtons={setNavigationButtonsOpen} setNavigationBodyOpen={setNavigationBodyOpen}>
          <NavigationButton setNavigation={setNavigation} setNavigationText={setNavigationText} text="Check this out!" id="1" setPosition={setPosition} />
          <NavigationButton className="bg-red-400" setNavigation={setNavigation} setNavigationText={setNavigationText} text="⭐ Star the project!" id="2" setPosition={setPosition} />
        </NavigationsButtons>
        
        <Navigations position={position} NavigationBody={navigationBodyOpen} NavigationButtons={navigationButtonsOpen} SetNavigationButtons={setNavigationButtonsOpen} SetNavigationBodyOpen={setNavigationBodyOpen}>
          <Navigation navigation={navigation} id="1">
            <div className="p-5">
              <h1 className="font-bold font-mono">This example of using my Navigation Bar</h1>
              <ul className="list-disc px-5">
                  <li>It is a simple navigation bar</li>
                  <li>It is built with React (Next.JS) and Tailwind CSS</li>  
                  <li>Unfortunately, it is not responsive yet</li>
              </ul>
                                                                                  
            </div>
          </Navigation>
          <Navigation navigation={navigation} id="2">

            <Link href={"https://github.com/Kartosowski"} target="_blank">https://github.com/Kartosowski</Link>
          </Navigation>
        </Navigations>
      </Menu>
      <div className="bg-neutral-900 text-neutral-100 min-h-screen flex flex-col font-bold text-2xl items-center justify-center">
        <h1>This is my first time doing something like that</h1>
        <p className="text-md font-light">I want to add more customization options in the future. This was my first attempt at building something like this.</p>
      </div>
    </div>
  );
}