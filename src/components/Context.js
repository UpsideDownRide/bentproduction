import React from 'react'

const LanguageContext = React.createContext()
export const LanguageConsumer = LanguageContext.Consumer

export class LanguageProvider extends React.Component {
  state = {
    language: "en",
    languages: {
      "en": {
        abbrv: "en",
        full: "English"
      },
      "pl": {
        abbrv: "pl",
        full: "Polish"
      }
    }
  }

  updateLanguage = str => this.setState({ language: str })

  render() {
    return (
      <LanguageContext.Provider value={{
        language: this.state.language,
        languages: this.state.languages,
        updateLanguage: this.updateLanguage
      }}>
        {this.props.children}
      </LanguageContext.Provider>
    )
  }
}


