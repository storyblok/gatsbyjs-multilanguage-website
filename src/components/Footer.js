import React from "react"

const Footer = () => {
  return (
    <footer className="text-center flex flex-col items-center py-20 container mx-auto">
      <p>GatsbyJS Demo Website created with Storyblok</p>
      <div className="flex items-center my-8">
        <img
          src="https://a.storyblok.com/f/51376/3856x824/fea44d52a9/colored-full.png"
          alt="Storyblok Logo"
          className="w-48 m-4"
        />
        <img
          src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAxMDYgMjgiIGZvY3VzYWJsZT0iZmFsc2UiPgogIDx0aXRsZT4KICAgIEdhdHNieQogIDwvdGl0bGU+CiAgPHBhdGggZD0iTTYyLjkgMTJoMi44djEwaC0yLjh2LTEuM2MtMSAxLjUtMi4zIDEuNi0zLjEgMS42LTMuMSAwLTUuMS0yLjQtNS4xLTUuMyAwLTMgMi01LjMgNC45LTUuMy44IDAgMi4zLjEgMy4yIDEuNlYxMnptLTUuMiA1YzAgMS42IDEuMSAyLjggMi44IDIuOCAxLjYgMCAyLjgtMS4yIDIuOC0yLjggMC0xLjYtMS4xLTIuOC0yLjgtMi44LTEuNiAwLTIuOCAxLjItMi44IDIuOHptMTMuNS0yLjZWMjJoLTIuOHYtNy42aC0xLjFWMTJoMS4xVjguNmgyLjhWMTJoMS45djIuNGgtMS45em04LjUgMGMtLjctLjYtMS4zLS43LTEuNi0uNy0uNyAwLTEuMS4zLTEuMS44IDAgLjMuMS42LjkuOWwuNy4yYy44LjMgMiAuNiAyLjUgMS40LjMuNC41IDEgLjUgMS43IDAgLjktLjMgMS44LTEuMSAyLjVzLTEuOCAxLjEtMyAxLjFjLTIuMSAwLTMuMi0xLTMuOS0xLjdsMS41LTEuN2MuNi42IDEuNCAxLjIgMi4yIDEuMi44IDAgMS40LS40IDEuNC0xLjEgMC0uNi0uNS0uOS0uOS0xbC0uNi0uMmMtLjctLjMtMS41LS42LTIuMS0xLjItLjUtLjUtLjgtMS4xLS44LTEuOSAwLTEgLjUtMS44IDEtMi4zLjgtLjYgMS44LS43IDIuNi0uNy43IDAgMS45LjEgMy4yIDEuMWwtMS40IDEuNnptNi4xLTEuMWMxLTEuNCAyLjQtMS42IDMuMi0xLjYgMi45IDAgNC45IDIuMyA0LjkgNS4zcy0yIDUuMy01IDUuM2MtLjYgMC0yLjEtLjEtMy4yLTEuNlYyMkg4M1Y1LjJoMi44djguMXptLS4zIDMuN2MwIDEuNiAxLjEgMi44IDIuOCAyLjggMS42IDAgMi44LTEuMiAyLjgtMi44IDAtMS42LTEuMS0yLjgtMi44LTIuOC0xLjcgMC0yLjggMS4yLTIuOCAyLjh6bTEzIDMuNUw5My43IDEySDk3bDMuMSA1LjcgMi44LTUuN2gzLjJsLTggMTUuM2gtMy4ybDMuNi02Ljh6TTU0IDEzLjdoLTd2Mi44aDMuN2MtLjYgMS45LTIgMy4yLTQuNiAzLjItMi45IDAtNS0yLjQtNS01LjNTNDMuMSA5IDQ2IDljMS42IDAgMy4yLjggNC4yIDIuMWwyLjMtMS41QzUxIDcuNSA0OC42IDYuMyA0NiA2LjNjLTQuNCAwLTggMy42LTggOC4xczMuNCA4LjEgOCA4LjEgOC0zLjYgOC04LjFjLjEtLjMgMC0uNSAwLS43eiIvPgogIDxwYXRoIGZpbGw9IiNmZmYiIGQ9Ik0yNSAxNGgtN3YyaDQuOGMtLjcgMy0yLjkgNS41LTUuOCA2LjVMNS41IDExYzEuMi0zLjUgNC42LTYgOC41LTYgMyAwIDUuNyAxLjUgNy40IDMuOGwxLjUtMS4zQzIwLjkgNC44IDE3LjcgMyAxNCAzIDguOCAzIDQuNCA2LjcgMy4zIDExLjZsMTMuMiAxMy4yQzIxLjMgMjMuNiAyNSAxOS4yIDI1IDE0em0tMjIgLjFjMCAyLjggMS4xIDUuNSAzLjIgNy42IDIuMSAyLjEgNC45IDMuMiA3LjYgMy4yTDMgMTQuMXoiLz4KICA8cGF0aCBkPSJNMTQgMEM2LjMgMCAwIDYuMyAwIDE0czYuMyAxNCAxNCAxNCAxNC02LjMgMTQtMTRTMjEuNyAwIDE0IDB6TTYuMiAyMS44QzQuMSAxOS43IDMgMTYuOSAzIDE0LjJMMTMuOSAyNWMtMi44LS4xLTUuNi0xLjEtNy43LTMuMnptMTAuMiAyLjlMMy4zIDExLjZDNC40IDYuNyA4LjggMyAxNCAzYzMuNyAwIDYuOSAxLjggOC45IDQuNWwtMS41IDEuM0MxOS43IDYuNSAxNyA1IDE0IDVjLTMuOSAwLTcuMiAyLjUtOC41IDZMMTcgMjIuNWMyLjktMSA1LjEtMy41IDUuOC02LjVIMTh2LTJoN2MwIDUuMi0zLjcgOS42LTguNiAxMC43eiIgZmlsbD0iIzYzOSIvPgo8L3N2Zz4K"
          alt="Gatbsy Logo"
          className="w-48 m-4 blend-multiply"
        />
      </div>
      <p className="underline">
        <a href="https://www.storyblok.com/tp/gatsby-multilanguage-website-tutorial">View tutorial on Storyblok</a>
      </p>
    </footer>
  )
}

export default Footer
