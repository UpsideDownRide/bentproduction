import React from 'react'

export const languages = {
  "en": {
    abbrv: "en",
    full: "English"
  },

  "pl": {
    abbrv: "pl",
    full: "Polish"
  }
}

export const Context = React.createContext({
  language: "en",
  setLanguage: () => { }
})

export default Context