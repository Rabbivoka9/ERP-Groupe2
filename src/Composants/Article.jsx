// import React, { useState, useEffect } from "react";
// import axios from "axios";
// import { ToastContainer, toast } from "react-toastify";
// import "react-toastify/dist/ReactToastify.css";
// import BasicMenu from "./Btn";

// function Tarticle() {
//   const [nom, setNom] = useState("");
//   const [description, setDescription] = useState("");
//   const [prix, setPrix] = useState("");
//   const [quantite, setQuantite] = useState("");
//   const [photo, setPhoto] = useState(null);
//   const [showForm, setShowForm] = useState(false);
//   const [articles, setArticles] = useState([]);

//   useEffect(() => {
//     fetchArticles();
//   }, []);

//   const fetchArticles = async () => {
//     try {
//       const response = await axios.get("http://localhost:5000/articles");
//       setArticles(response.data.articles);
//     } catch (error) {
//       console.error(error);
//       toast.error("Une erreur est survenue lors de la récupération des articles");
//     }
//   };

//   const handleNomChange = (e) => {
//     setNom(e.target.value);
//   };

//   const handleDescriptionChange = (e) => {
//     setDescription(e.target.value);
//   };

//   const handlePrixChange = (e) => {
//     setPrix(e.target.value);
//   };

//   const handleQuantiteChange = (e) => {
//     setQuantite(e.target.value);
//   };

//   const handlePhotoChange = (e) => {
//     setPhoto(e.target.files[0]);
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();

//     try {
//       const formData = new FormData();
//       formData.append("nom", nom);
//       formData.append("description", description);
//       formData.append("prix", prix);
//       formData.append("quantite", quantite);
//       if (photo) {
//         formData.append("photo", photo);
//       }

//       await axios.post("http://localhost:5000/articles", formData);

//       // Affiche un message de succès
//       toast.success("Article créé avec succès");

//       // Réinitialise les champs du formulaire
//       setNom("");
//       setDescription("");
//       setPrix("");
//       setQuantite("");
//       setPhoto(null);

//       // Masque le formulaire après la création
//       setShowForm(false);

//       // Met à jour la liste des articles
//       fetchArticles();
//     } catch (error) {
//       // Affiche un message d'erreur
//       toast.error("Une erreur est survenue lors de la création de l'article");
//       console.error(error);
//     }
//   };

//   const toggleForm = () => {
//     setShowForm(!showForm);
//   };

//   return (
//     <div>
//       <button className="btn-plus1" onClick={toggleForm}>
//         Ajouter un Article
//       </button>

//       <div className="Cont-tableau5">
//         <div className="cont-plan5">
//           <div className="cont-p5">
//             <h4 className="Plan-name">Liste des Articles</h4>
//           </div>
//         </div>
//         <div>
//           <table className="ta-titre">
//             <tbody>
//               <tr className="colums, tira">
//                 <th>Photo</th>
//                 <th>Nom</th>
//                 <th>Description</th>
//                 <th>Quantité</th>
//                 <th>Action</th>
//               </tr>
//               {articles.map((article) => (
//                 <tr key={article.id} className="trd">
//                   <td>
//                     <img
//                       src={`http://localhost:5000/uploads/${article.id}`}
//                       alt={article.nom}
//                       className="article-photo"
//                     />
//                   </td>
//                   <td>{article.nom}</td>
//                   <td>{article.description}</td>
//                   <td>{article.quantite}</td>
//                   <td>
//                     <span>
//                       <BasicMenu />
//                     </span>
//                   </td>
//                 </tr>
//               ))}
//             </tbody>
//           </table>
//         </div>
//       </div>

//       {/* Formulaire de création d'article */}
//       {showForm && (
//         <div className="pop-up-container">
//           <div className="pop-up">
//             <h4>Créer un nouvel article</h4>
//             <form onSubmit={handleSubmit}>
//               <div className="form-group">
//                 <label htmlFor="nom">Nom :</label>
//                 <input
//                   type="text"
//                   id="nom"
//                   value={nom}
//                   onChange={handleNomChange}
//                 />
//               </div>
//               <div className="form-group">
//                 <label htmlFor="description">Description :</label>
//                 <input
//                   type="text"
//                   id="description"
//                   value={description}
//                   onChange={handleDescriptionChange}
//                 />
//               </div>
//               <div className="form-group">
//                 <label htmlFor="prix">Prix :</label>
//                 <input
//                   type="text"
//                   id="prix"
//                   value={prix}
//                   onChange={handlePrixChange}
//                 />
//               </div>
//               <div className="form-group">
//                 <label htmlFor="quantite">Quantité :</label>
//                 <input
//                   type="text"
//                   id="quantite"
//                   value={quantite}
//                   onChange={handleQuantiteChange}
//                 />
//               </div>
//               <div className="form-group">
//                 <label htmlFor="photo">Photo :</label>
//                 <input type="file" id="photo" onChange={handlePhotoChange} />
//               </div>
//               <div className="button-container">
//                 <button type="submit">Créer</button>
//                 <button type="button" onClick={toggleForm}>
//                   Annuler
//                 </button>
//               </div>
//             </form>
//           </div>
//         </div>
//       )}
//       <ToastContainer />
//     </div>
//   );
// }

// export default Tarticle;





import React, { useState, useEffect } from "react";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import BasicMenu from "./Btn";
import { LazyLoadImage } from "react-lazy-load-image-component";
import Avatar from "react-avatar";
import "react-lazy-load-image-component/src/effects/blur.css";

function Tarticle() {
  const [nom, setNom] = useState("");
  const [description, setDescription] = useState("");
  const [prix, setPrix] = useState("");
  const [quantite, setQuantite] = useState("");
  const [photo, setPhoto] = useState(null);
  const [showForm, setShowForm] = useState(false);
  const [articles, setArticles] = useState([]);

  useEffect(() => {
    fetchArticles();
  }, []);

  const fetchArticles = async () => {
    try {
      const response = await axios.get("http://localhost:5000/articles");
      setArticles(response.data.articles);
    } catch (error) {
      console.error(error);
      toast.error("Une erreur est survenue lors de la récupération des articles");
    }
  };

  const handleNomChange = (e) => {
    setNom(e.target.value);
  };

  const handleDescriptionChange = (e) => {
    setDescription(e.target.value);
  };

  const handlePrixChange = (e) => {
    setPrix(e.target.value);
  };

  const handleQuantiteChange = (e) => {
    setQuantite(e.target.value);
  };

  const handlePhotoChange = (e) => {
    setPhoto(e.target.files[0]);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const formData = new FormData();
      formData.append("nom", nom);
      formData.append("description", description);
      formData.append("prix", prix);
      formData.append("quantite", quantite);
      if (photo) {
        formData.append("photo", photo);
      }

      await axios.post("http://192.168.254.169:5000/articles", formData);

      // Affiche un message de succès
      toast.success("Article créé avec succès");

      // Réinitialise les champs du formulaire
      setNom("");
      setDescription("");
      setPrix("");
      setQuantite("");
      setPhoto(null);

      // Masque le formulaire après la création
      setShowForm(false);

      // Met à jour la liste des articles
      fetchArticles();
    } catch (error) {
      // Affiche un message d'erreur
      toast.error("Une erreur est survenue lors de la création de l'article");
      console.error(error);
    }
  };

  const toggleForm = () => {
    setShowForm(!showForm);
  };

  return (
    <div>
      <button className="btn-plus1" onClick={toggleForm}>
        Ajouter un Article
      </button>

      <div className="Cont-tableau5">
        <div className="cont-plan5">
          <div className="cont-p5">
            <h4 className="Plan-name">Liste des Articles</h4>
          </div>
        </div>
        <div>
          <table className="ta-titre">
            <tbody>
              <tr className="colums, tira">
                <th>Photo</th>
                <th>Nom</th>
                <th>Description</th>
                <th>Quantité</th>
                <th>Action</th>
              </tr>
              {articles.map((article) => (
                <tr key={article.id} className="trd">
                  <td>
                    {article.photo ? (
                      <LazyLoadImage
                        src={`http://localhost:5000/articles/uploads/${article.id}`}
                        alt={article.nom}
                        className="article-photo"
                        effect="blur"
                      />
                    ) : (
                      <Avatar
                        name={article.nom}
                        size="40"
                        round={true}
                        className="article-avatar"
                      />
                    )}
                  </td>
                  <td>{article.nom}</td>
                  <td>{article.description}</td>
                  <td>{article.quantite}</td>
                  <td>
                    <span>
                      <BasicMenu />
                    </span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* Formulaire de création d'article */}
      {showForm && (
        <div className="pop-up-container">
          <div className="pop-up">
            <h4>Créer un nouvel article</h4>
            <form onSubmit={handleSubmit}>
              <div className="form-group">
                <label htmlFor="nom">Nom :</label>
                <input
                  type="text"
                  id="nom"
                  value={nom}
                  onChange={handleNomChange}
                />
              </div>
              <div className="form-group">
                <label htmlFor="description">Description :</label>
                <input
                  type="text"
                  id="description"
                  value={description}
                  onChange={handleDescriptionChange}
                />
              </div>
              <div className="form-group">
                <label htmlFor="prix">Prix :</label>
                <input
                  type="text"
                  id="prix"
                  value={prix}
                  onChange={handlePrixChange}
                />
              </div>
              <div className="form-group">
                <label htmlFor="quantite">Quantité :</label>
                <input
                  type="text"
                  id="quantite"
                  value={quantite}
                  onChange={handleQuantiteChange}
                />
              </div>
              <div className="form-group">
                <label htmlFor="photo">Photo :</label>
                <input type="file" id="photo" onChange={handlePhotoChange} />
              </div>
              <div className="button-container">
                <button type="submit">Créer</button>
                <button type="button" onClick={toggleForm}>
                  Annuler
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
      <ToastContainer />
    </div>
  );
}

export default Tarticle;