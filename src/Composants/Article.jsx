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
  const [quantite, setQuantite] = useState("");
  const [photo, setPhoto] = useState(null);
  const [showForm, setShowForm] = useState(false);
  const [articles, setArticles] = useState([]);
  const [selectedArticle, setSelectedArticle] = useState(null);

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
      formData.append("quantite", quantite);
      if (photo) {
        formData.append("photo", photo);
      }

      await axios.post("http://localhost:5000/articles", formData);

      toast.success("Article créé avec succès");

      setNom("");
      setDescription("");
      setQuantite("");
      setPhoto(null);

      setShowForm(false);

      fetchArticles();
    } catch (error) {
      toast.error("Une erreur est survenue lors de la création de l'article");
      console.error(error);
    }
  };

  const handleUpdateField = (field, value) => {
    setSelectedArticle((prevArticle) => ({
      ...prevArticle,
      [field]: value,
    }));
  };

  const toggleForm = () => {
    setShowForm(!showForm);
  };

  const updateArticle = (field, value) => {
    handleUpdateField(field, value);
  };

  const handleSaveChanges = async () => {
    try {
      await axios.put(`http://localhost:5000/articles/${selectedArticle.id}`, selectedArticle);
      toast.success("Modifications enregistrées avec succès");
      setSelectedArticle(null);
      fetchArticles();
    } catch (error) {
      console.error("Une erreur est survenue lors de la mise à jour de l'article :", error);
      toast.error("Une erreur est survenue lors de la mise à jour de l'article");
    }
  };

  const handleCancelChanges = () => {
    setSelectedArticle(null);
  };

  const handleDelete = async (articleId) => {
    const confirmDelete = window.confirm("Voulez-vous vraiment supprimer cet article ?");

    if (confirmDelete) {
      try {
        await axios.delete(`http://localhost:5000/articles/${articleId}`);
        toast.success("Article supprimé avec succès");
        fetchArticles();
      } catch (error) {
        console.error("Une erreur est survenue lors de la suppression de l'article :", error);
        toast.error("Une erreur est survenue lors de la suppression de l'article");
      }
    } else {
      console.log("Suppression annulée");
    }
  };

  const handleEditArticle = async (articleId) => {
    try {
      const response = await axios.get(`http://localhost:5000/articles/${articleId}`);
      const { nom, description, quantite, photo } = response.data.article;
      setSelectedArticle({ id: articleId, nom, description, quantite, photo });
    } catch (error) {
      console.error("Une erreur est survenue lors de la récupération de l'article :", error);
      toast.error("Une erreur est survenue lors de la récupération de l'article");
    }
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
                      <BasicMenu
                        articleId={article.id}
                        updateArticle={updateArticle}
                        handleDelete={handleDelete}
                        handleEditArticle={handleEditArticle}
                      />
                    </span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {selectedArticle && (
        <div className="pop-up-container">
          <div className="pop-up">
            <h2>Modifier l'article</h2>
            <form>
              <input
                type="text"
                placeholder="Nom"
                value={selectedArticle.nom}
                onChange={handleNomChange}
              />
              <input
                type="text"
                placeholder="Description"
                value={selectedArticle.description}
                onChange={handleDescriptionChange}
              />
              <input
                type="number"
                placeholder="Quantité"
                value={selectedArticle.quantite}
                onChange={handleQuantiteChange}
              />
              <input
                type="file"
                placeholder="Photo"
                accept="image/*"
                onChange={handlePhotoChange}
              />
              <div className="pop-up-buttons">
                <button className="pop-up-button" onClick={handleSaveChanges}>
                  Enregistrer
                </button>
                <button className="pop-up-button" onClick={handleCancelChanges}>
                  Annuler
                </button>
              </div>
            </form>
          </div>
        </div>
      )}

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
