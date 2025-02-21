import { useState } from 'react'
import languages from './assets/languages';
import './App.css'

//  aggiungo i campi vuoti al form
const initialFormData = {
  titolo: "",
  autore: "",
  contenuto: "",
  categoria: "",
};

export default function App() {

  const [listLanguages, setListLanguages] = useState(languages);
  const [formData, setFormData] = useState(initialFormData);

  function handleFormData(e) {
    const value =
      e.target.type === "checkbox" ? e.target.checked : e.target.value;

    setFormData((currentFormData) => ({
      ...currentFormData,
      [e.target.name]: value,
    }));
  }

  function handleSubmit(e) {
    e.preventDefault();
    setListLanguages((currentLanguage) => [...currentLanguage, { id: currentLanguage.length === 0 ? 1 : currentLanguage[currentLanguage.length - 1].id + 1, ...formData }]);
    setFormData(initialFormData);
  }

  return (
    <>

      <form id='formpost' onSubmit={handleSubmit}>
        <input
          type="text"
          name="titolo"
          onChange={handleFormData}
          value={formData.titolo}
          placeholder='Inserisci titolo'
        />

        <input
          type="text"
          name="autore"
          onChange={handleFormData}
          value={formData.autore}
          placeholder='Inserisci autore'
        />

        <textarea
          name="contenuto"
          onChange={handleFormData}
          value={formData.contenuto}
          placeholder='Inserisci contenuto'
        ></textarea>

        <input
          type="text"
          name="categoria"
          onChange={handleFormData}
          value={formData.categoria}
          placeholder='Inserisci categoria'
        />

        <button>Submit</button>
      </form>

    </>
  )
}